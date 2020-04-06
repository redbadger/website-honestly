// @flow
import React from 'react';

import inputTypes from './inputTypeDefinitions';

export type HubspotFormField = {
  richText?: string,
  name: string,
  label: string,
  fieldType: string,
  description: string,
  defaultValue?: string,
  value?: string,
  placeholder?: string,
  required: boolean,
  enabled: boolean,
  hidden: boolean,
  labelHidden: boolean,
  showWarnings: boolean,
  valid: boolean,
  onChange: Function,
};

const InputWarning = ({ warningText }) => {
  return (
    <figure id="form-field-required-warning">
      <figcaption>{warningText}</figcaption>
    </figure>
  );
};

const InputLabel = ({ id, labelText, htmlFor }) => {
  return (
    <label id={id} htmlFor={htmlFor}>
      {labelText}
    </label>
  );
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
  value,
}) => {
  const forminputId = `${name || ''}-${fieldType}`;
  return (
    <div aria-label={description}>
      {!hidden && !labelHidden && label && (
        <InputLabel
          id={`${name || ''}-${fieldType}-label`}
          htmlFor={forminputId}
          labelText={`${label || ''}${required ? ' *' : ''}`}
        />
      )}
      {!valid && showWarnings && required && (
        <InputWarning
          warningText={`Please enter a valid ${
            inputTypes[name] ? inputTypes[name].fullName : ' input'
          }`}
        />
      )}
      <input
        id={forminputId}
        type={fieldType}
        name={name}
        required={required}
        // I have no idea why these needs to be a string.
        invalid={(showWarnings && (!valid).toString()) || ''}
        enabled={enabled.toString()}
        hidden={hidden}
        value={value || defaultValue || ''}
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
  value,
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
          value={value}
        />
      )}
    </div>
  );
};

export default FormField;
