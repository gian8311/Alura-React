import React from "react"
import PropTypes from "prop-types"

function FormField({
  className,
  type,
  name,
  id,
  value,
  onChange,
  label,
  inputTag,
}) {
  if (inputTag === "input") {
    return (
      <div className={className}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
      </div>
    )
  } else if (inputTag === "textarea") {
    return (
      <div className={className}>
        <label htmlFor={id}>{label}</label>
        <textarea
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
      </div>
    )
  }
}

FormField.defaultProps = {
  type: "text",
  inputTag: "input",
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
  inputTag: PropTypes.string,
}

export default FormField
