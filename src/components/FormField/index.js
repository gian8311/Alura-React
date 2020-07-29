import React from "react"

function FormField({
  className,
  type = "text",
  name,
  id,
  value,
  onChange,
  label,
  inputTag = "input",
}) {
  if (inputTag === "input") {
    return (
      <div className={className}>
        <label>{label}</label>
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
        <label>{label}</label>
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

export default FormField
