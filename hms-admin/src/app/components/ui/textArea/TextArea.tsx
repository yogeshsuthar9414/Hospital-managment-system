import React, { ChangeEventHandler } from "react";
import "../../../assets/scss/ui/_textfield.css";

interface textfieldprops {
    label?: string;
    name?: string;
    id?: string;
    required?: boolean;
    className?: string;
    size?: string;
    placeholder?: string;
    style?: {};
    width?: string;
    value?: any;
    onChange?: any;
    onBlur?: any;
    onKeyDown?: any;
    readOnly?: boolean;
    minLength?: number;
    maxLength?: number;
    tabIndex?: number;
    disabled?: boolean;
    rows?: number;
}

const TextArea: React.FC<textfieldprops> = ({
    label,
    name,
    id,
    required,
    size,
    placeholder,
    style,
    width,
    value,
    onBlur,
    onChange,
    readOnly,
    maxLength,
    minLength,
    onKeyDown,
    disabled,
    tabIndex,
    rows
}) => {
    return (
        <div className="textfield textarea">
            <div className="material-textfield ">
                <textarea
                    placeholder={placeholder ? placeholder : ""}
                    className={`form-control w-full ${size === "small"
                        ? `form-sm`
                        : `form-normal`
                        }  ${label ? "labelActive" : "labelDeactive"
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
                    onKeyDown={onKeyDown}
                    maxLength={maxLength}
                    minLength={minLength}
                    disabled={disabled}
                    rows={rows}
                />
                <label
                    className={`input-label ${required ? "required" : ""} `}
                >
                    {label}
                </label>
            </div>
        </div>
    );
};

export default TextArea;
