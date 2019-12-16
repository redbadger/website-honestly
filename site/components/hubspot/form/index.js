// @flow
import React from 'react';
import Cookies from 'js-cookie';

import FormField from './formField';
import type { HubspotFormField } from './formField';
import inputTypes from './inputTypeDefinitions';

type HubspotFormFieldValues = {
  name: string,
  value: string,
  valid: boolean,
};

export type HubspotFormProps = {
  portalId: string,
  guid: string,
  name: string,
  cssClass: string,
  submitText?: string,
  inlineMessage?: string,
  formFields: Array<HubspotFormField>,
  pageTitle: string,
};

type HubspotFormState = {
  showWarnings: boolean,
  submitted: boolean,
  fieldData: Array<HubspotFormFieldValues>,
  hubspotAPIEndpoint: string,
};

export default class HubspotForm extends React.Component<HubspotFormProps, HubspotFormState> {
  constructor(props: HubspotFormProps) {
    super(props);

    let fieldData = [];
    if (props.formFields) {
      fieldData = props.formFields
        .filter(field => {
          // Hubspot packages form fields and isolated chunks of html together
          // this removes any fields that don't correlate to an input.
          if (field.name) {
            return true;
          }
          return false;
        })
        .map(field => {
          const formField = {
            name: field.name,
            value: field.defaultValue ? field.defaultValue : '',
            valid: !field.required,
          };
          return formField;
        });
    }

    this.state = {
      showWarnings: false,
      submitted: false,
      fieldData,
      hubspotAPIEndpoint: `https://api.hsforms.com/submissions/v3/integration/submit/${props.portalId}/${props.guid}`,
    };
    (this: any)._onSubmit = this._onSubmit.bind(this);
    (this: any)._onChange = this._onChange.bind(this);
    (this: any).formIsValid = this.formIsValid.bind(this);
    (this: any).postFormDataToHubspot = this.postFormDataToHubspot.bind(this);
  }

  static getFieldState(fieldData: Array<HubspotFormFieldValues>, fieldName: string) {
    return fieldData.find(field => field.name === fieldName);
  }

  static validateContent(type: string, value: string, required: boolean) {
    // for strings with special constraints like emails or phone numbers
    // If they input has a special case retrieve that validator and run
    // the string through it
    if (inputTypes[type]) {
      const { validator } = inputTypes[type];
      if (validator && (required || value)) {
        return validator(value);
      }
    }
    if (required) {
      return value.length > 0;
    }
    // If neither of the above constrains apply, the input is inherently valid.
    return true;
  }

  formIsValid() {
    const { fieldData } = this.state;
    console.log(4, fieldData);
    const isValid = fieldData.filter(value => value.valid === false).length === 0;
    return isValid;
  }

  postFormDataToHubspot() {
    const { hubspotAPIEndpoint, fieldData } = this.state;
    const { pageTitle } = this.props;
    const postData = {
      context: {
        hutk: Cookies.get('hubspotutk'),
        pageName: pageTitle,
        pageUri: window.location.href,
      },
      fields: [],
    };
    postData.fields = fieldData.map(field => {
      return { name: field.name, value: field.value };
    });
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Content-Length': Object.keys(postData).length.toString(),
    };
    fetch(hubspotAPIEndpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(postData),
      mode: 'cors',
    });
  }

  _onSubmit(event: SyntheticInputEvent<HTMLInputElement>) {
    console.log(1);
    event.preventDefault();
    if (this.formIsValid()) {
      console.log(2);
      this.postFormDataToHubspot();
      this.setState({ submitted: true });
    } else {
      console.log(3);
      let { showWarnings } = this.state;
      showWarnings = true;
      this.setState({ showWarnings });
    }
  }

  _onChange(event: SyntheticInputEvent<HTMLInputElement>, fieldName: string, required: boolean) {
    const { fieldData } = this.state;
    let { showWarnings } = this.state;
    const targetField = HubspotForm.getFieldState(fieldData, fieldName);
    if (targetField) {
      const { value } = event.target;
      targetField.value = value;
      targetField.valid = HubspotForm.validateContent(fieldName, value, required);
      if (!showWarnings) {
        showWarnings = true;
        this.setState({ showWarnings });
      }
      this.setState({ fieldData });
    }
  }

  render() {
    const { portalId, guid, name, cssClass, submitText, inlineMessage, formFields } = this.props;
    const { showWarnings, submitted, fieldData } = this.state;
    return (
      <div id={name} className={cssClass}>
        {submitted ? (
          <p>{inlineMessage}</p>
        ) : (
          <form
            acceptCharset="UTF-8"
            action={`https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/${portalId}/${guid}`}
            encType="multipart/form-data"
            method="POST"
          >
            {formFields &&
              formFields.map((field, index) => {
                const fieldState = HubspotForm.getFieldState(fieldData, field.name);
                return (
                  <FormField
                    key={index}
                    richText={field.richText}
                    name={field.name}
                    label={field.label}
                    fieldType={field.fieldType}
                    description={field.description}
                    defaultValue={field.defaultValue}
                    value={fieldState ? fieldState.value : ''}
                    placeholder={field.placeholder}
                    required={field.required}
                    enabled={field.enabled}
                    hidden={field.hidden}
                    labelHidden={field.labelHidden}
                    valid={fieldState ? fieldState.valid : true}
                    showWarnings={showWarnings}
                    onChange={this._onChange}
                  />
                );
              })}
            <input type="submit" onClick={this._onSubmit} name={submitText} value={submitText} />
          </form>
        )}
      </div>
    );
  }
}
