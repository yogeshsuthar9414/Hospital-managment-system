import React from "react";
import Select, { components } from "react-select";
import "../../../assets/scss/ui/_textfield.css";

const { ValueContainer, Placeholder, SingleValue } = components;

const CustomValueContainer = ({ children, ...props }: any) => {
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};

const CustomSingleValue = (props: any) => {
  const { data } = props;
  return (
    <SingleValue {...props}>
      <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        {data.icon && data.icon}
        {data.label}
      </span>
    </SingleValue>
  );
};

// Custom Option Component (for dropdown items)
const CustomOption = (props: any) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div ref={innerRef} {...innerProps} className="text-sm dropdown-menu" style={{ display: "flex", alignItems: "center", padding: "10px", gap: "5px" }}>
      {data.icon && data.icon}
      {data.label}
    </div>
  );
};


interface selectfieldProps {
  options?: any;
  value?: any;
  onChange?: any;
  onBlur?: any;
  name?: string;
  label?: string;
  tabIndex?: number;
  required?: boolean;
  isDisabled?: boolean;
}

export const SelectField: React.FC<selectfieldProps> = ({
  options,
  name,
  label,
  tabIndex,
  value,
  onChange,
  onBlur,
  required,
  isDisabled
}) => {
  return (
    <Select
      className={`form-control ${required ? "required" : ""}`}
      // required={required}
      name={name}
      options={options}
      tabIndex={tabIndex}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      isDisabled={isDisabled}
      components={{
        ValueContainer: CustomValueContainer,
        SingleValue: CustomSingleValue,
        Option: CustomOption,
      }}
      placeholder={label}
      styles={{
        container: (provided: any) => ({
          ...provided,
        }),
        valueContainer: (provided: any) => ({
          ...provided,
          overflow: "visible",
        }),
        placeholder: (provided: any, state: any) => ({
          ...provided,
          position: "absolute",
          paddingRight: "3px",
          paddingLeft: "3px",
          top: state.hasValue || state.selectProps.inputValue ? "-13px" : "17%",
          backgroundColor:
            state.hasValue || state.selectProps.inputValue
              ? "white"
              : "transparent",
          transition: "top 0.1s, font-size 0.1s",
          fontSize:
            state.hasValue || state.selectProps.inputValue
              ? "0.775rem"
              : "0.875rem",
        }),
      }}
    />
  );
};
