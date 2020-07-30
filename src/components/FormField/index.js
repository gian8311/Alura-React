import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const FormFieldWrapper = styled.div`
  position: relative;

  input[type="color"] {
    padding-left: 56px;
  }
`

const Label = styled.label``
Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 100ms ease-in-out;
`

const Input = styled.input`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 3px;
  transition: border-color 350ms ease-in-out;

  &:focus,
  &:hover {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span,
  &:hover:not([type="color"]) + span {
    transform: scale(0.6) translateY(-10px);
  }
  ${({ hasContent }) =>
    hasContent &&
    css`
      &:not([type="color"]) + span {
        transform: scale(0.6) translateY(-10px);
      }
    `}
`

const TextArea = styled.textarea`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  min-height: 150px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 3px;
  transition: border-color 350ms ease-in-out;

  &:focus,
  &:hover {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span,
  &:hover:not([type="color"]) + span {
    transform: scale(0.6) translateY(-10px);
  }

  ${({ hasContent }) =>
    hasContent &&
    css`
      &:not([type="color"]) + span {
        transform: scale(0.6) translateY(-10px);
      }
    `}
`

function FormField({ className, type, name, id, value, onChange, label, as }) {
  const hasContent = Boolean(value.length)
  if (as === "input") {
    return (
      <FormFieldWrapper className={className}>
        <Label htmlFor={id}>
          <Input
            type={type}
            name={name}
            id={id}
            value={value}
            hasContent={hasContent}
            onChange={onChange}
          />
          <Label.Text>{label}</Label.Text>
        </Label>
      </FormFieldWrapper>
    )
  } else if (as === "textarea") {
    return (
      <FormFieldWrapper className={className}>
        <Label htmlFor={id}>
          <TextArea
            type={type}
            name={name}
            id={id}
            value={value}
            hasContent={hasContent}
            onChange={onChange}
          />
          <Label.Text>{label}</Label.Text>
        </Label>
      </FormFieldWrapper>
    )
  }
}

FormField.defaultProps = {
  type: "text",
  as: "input",
  value: "",
  onChange: () => {},
}
FormField.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  as: PropTypes.string,
}

export default FormField
