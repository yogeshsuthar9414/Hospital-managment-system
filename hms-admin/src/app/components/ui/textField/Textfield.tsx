import React, { ChangeEventHandler } from "react";
import "../../../assets/scss/ui/_textfield.css";

interface textfieldprops {
  label?: string;
  type?: string;
  name?: string;
  id?: string;
  required?: boolean;
  iconActive?: boolean;
  htmlIcon?: boolean;
  IconProp?: any;
  className?: string;
  size?: string;
  placeholder?: string;
  style?: {};
  width?: string;
  value?: any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: any;
  readOnly?: boolean;
  minLength?: number;
  maxLength?: number;
  tabIndex?: number;
  min?: any;
  max?: any;
  multiline?: boolean;
  disabled?: boolean;
  step?: number;
}

const Textfield: React.FC<textfieldprops> = ({
  label,
  type,
  name,
  id,
  required,
  iconActive,
  htmlIcon,
  IconProp,
  size,
  placeholder,
  style,
  width,
  value,
  onBlur,
  onChange,
  className = "",
  readOnly,
  maxLength,
  minLength,
  min,
  max,
  onKeyDown,
  multiline,
  disabled,
  tabIndex,
  step
}) => {
  return (
    <div className="textfield w-full">
      <div className="material-textfield w-full">
        <input
          placeholder={placeholder ? placeholder : ""}
          type={type ? type : "text"}
          className={`form-control w-full ${className} ${size === "small"
            ? `form-sm ${iconActive && "paddingforIcon-sm"}`
            : `form-normal  ${iconActive && "paddingforIcon"}`
            } ${iconActive && "paddingforIcon"} ${label ? "labelActive" : "labelDeactive"
            }`}
          style={{ ...style, width: width }}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          readOnly={readOnly}
          tabIndex={tabIndex}
          min={min}
          max={max}
          step={step}
          onKeyDown={onKeyDown}
          maxLength={maxLength}
          minLength={minLength}
          multiple={multiline}
          disabled={disabled}
        />
        <label
          className={`input-label ${required ? "required" : ""} ${size === "small"
            ? `${iconActive && "input-sm-label"}`
            : `${iconActive && "input-md-label"}`
            }`}
        >
          {label}
        </label>
        {iconActive && (
          <div className="form-icon">
            {htmlIcon ? IconProp : <IconProp />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Textfield;
