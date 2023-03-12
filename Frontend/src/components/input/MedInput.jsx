import { useMemo, useState } from "react";
import { sizes } from "../../utils/constants.js";
import useClassName from "../../hooks/useClassName.js";
import DynamicComponent from "../dynamic-component/DynamicComponent.jsx";
import "./MedInput.scss";

const MedInput = ({
  value,
  rounded = false,
  size = "medium",
  label,
  labelPosition = "top",
  length = "flexible",
  iconColor,
  startIcon,
  endIcon,
  placeholder,
  ...props
}) => {
  const baseClass = "med-input";

  const placeholderComputed = useMemo(() => {
    return !(label && labelPosition === "float") ? placeholder : " ";
  }, [label, labelPosition]);

  const sizeClass = useMemo(
    () =>
      sizes.includes(size) ? `${baseClass}__${size}` : `${baseClass}__medium`,
    [size]
  );

  const classObj = [
    baseClass,
    sizeClass,
    {
      [`${baseClass}__flexible`]: length === "flexible",
      [`${baseClass}__rounded`]: rounded,
      [`${baseClass}__float`]: labelPosition === "float",
    },
  ];

  const containerClasses = useClassName(classObj);
  const labelClass = `${baseClass}__label`;
  const inputClass = `${baseClass}__input`;
  const innerContainerClass = `${baseClass}__input-container`;

  const inputProps = useMemo(() => {
    return {
      ...props,
      placeholder: placeholderComputed,
      value,
      className: inputClass,
    };
  }, [value, placeholderComputed]);

  if (labelPosition === "float") {
    return (
      <div className={containerClasses}>
        <DynamicComponent is={startIcon} />
        <div className={innerContainerClass}>
          <label className={labelClass}>{label}</label>
          <input {...inputProps} />
        </div>
        <DynamicComponent is={endIcon} />
      </div>
    );
  }
  return (
    <div className={containerClasses}>
      <label className={labelClass}>{label}</label>
      <div className={innerContainerClass}>
        <DynamicComponent is={startIcon} />
        <input {...inputProps} />
        <DynamicComponent is={endIcon} />
      </div>
    </div>
  );
};

export default MedInput;
