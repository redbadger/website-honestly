// @flow
import React from 'react';

import inputTypes from './inputTypeDefinitions';

export type HubspotFormField = {
  richText: string,
  name: string,
  label: string,
  fieldType: string,
  description: string,
  defaultValue: string,
  value?: string,
  placeholder: string,
  required: boolean,
  enabled: boolean,
  hidden: boolean,
  labelHidden: boolean,
  showWarnings: boolean,
  valid: boolean,
  onChange: Function,
};

const FormInput = ({
  name,
  label,
  fieldType,
  description,
  defaultValue,
  placeholder,
  required,
  enabled,
  hidden,
  labelHidden,
  onChange,
  valid,
  showWarnings,
}) => {
  return (
    <div aria-label={description}>
      {!hidden && !labelHidden && label && (
        <label id={`${name || ''}-${fieldType}-label`}>{`${label || ''}${
          required ? ' *' : ''
        }`}</label>
      )}
      {!valid && showWarnings && required && (
        <figure id="form-field-required-warning">
          <figcaption>
            Please enter a valid {inputTypes[name] ? inputTypes[name].fullName : ' input'}
          </figcaption>
        </figure>
      )}
      <input
        id={`${name || ''}-${fieldType}`}
        type={fieldType}
        name={name}
        required={required}
        // I have no idea why this needs to be a string??
        enabled={enabled.toString()}
        hidden={hidden}
        value={defaultValue || ''}
        placeholder={placeholder}
        onChange={event => {
          onChange(event, name, required);
        }}
      />
    </div>
  );
};

const FormText = ({ richText }) => {
  /* eslint-disable react/no-danger */
  return <div id="richText" dangerouslySetInnerHTML={{ __html: richText }} />;
  /* eslint-enable react/no-danger */
};

const FormField = ({
  richText,
  name,
  label,
  fieldType,
  description,
  defaultValue,
  placeholder,
  required,
  enabled,
  hidden,
  labelHidden,
  showWarnings,
  valid,
  onChange,
}: HubspotFormField) => {
  return (
    <div id={name}>
      {richText && <FormText richText={richText} />}
      {fieldType && (
        <FormInput
          name={name}
          label={label}
          fieldType={fieldType}
          description={description}
          defaultValue={defaultValue}
          placeholder={placeholder}
          required={required}
          enabled={enabled}
          hidden={hidden}
          labelHidden={labelHidden}
          onChange={onChange}
          valid={valid}
          showWarnings={showWarnings}
        />
      )}
    </div>
  );
};

export default FormField;
