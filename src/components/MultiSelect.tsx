import React, { useState, useRef, useEffect } from "react";
import { MultiSelectProps } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";

const MultiSelect: React.FC<MultiSelectProps> = ({
  name,
  onChange,
  labelText,
  optionText,
  className,
  options = [],
  errors,
  value,
  prefixIcon,
  prefixIconStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    Array.isArray(value) ? value : value ? [value] : []
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedOptions(Array.isArray(value) ? value : value ? [value] : []);
  }, [value]);

  const toggleOption = (optionValue: string) => {
    let newSelectedOptions: string[];
    if (selectedOptions.includes(optionValue)) {
      newSelectedOptions = selectedOptions.filter((v) => v !== optionValue);
    } else {
      newSelectedOptions = [...selectedOptions, optionValue];
    }
    setSelectedOptions(newSelectedOptions);
    if (typeof onChange === "function") {
      if (onChange.length > 1) {
        const fakeEvent = {
          target: {
            name,
            value: newSelectedOptions.join(","),
          },
        } as React.ChangeEvent<HTMLSelectElement>;
        (onChange as (event: React.ChangeEvent<HTMLSelectElement>) => void)(
          fakeEvent
        );
      } else {
        (onChange as (selectedValues: string[]) => void)(newSelectedOptions);
      }
    }
  };

  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const displayValue =
    selectedOptions.length > 0
      ? options
          .filter((option) => selectedOptions.includes(option.label))
          .map((option) =>
            capitalizeFirstLetter(option.label.replace(/_/g, " "))
          )
          .join(", ")
      : optionText;

  return (
    <div className="form-control w-full -mt-3">
      <label className="label">
        <span className="label-text font-medium">{labelText}</span>
      </label>

      <div className="relative" ref={dropdownRef}>
        {prefixIcon && (
          <Icon
            icon={prefixIcon}
            className={`absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 opacity-70 ${prefixIconStyle}`}
          />
        )}

        <div
          className={`select select-bordered min-h-12 h-fit w-full pl-10 mb-7 pt-3 dark:border border-grey text-sm ${
            errors ? "border-2 border-primary" : ""
          } ${className || ""}`}
          style={{ whiteSpace: "pre-wrap" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {displayValue}
        </div>

        {isOpen && (
          <div className="absolute z-10 w-full bg-white dark:bg-gray-600 border border-gray-300 -mt-7 rounded-md shadow-lg max-h-60 overflow-y-auto">
            {options.map((option) => (
              <div
                key={option.label}
                className={`p-2 hover:bg-gray-100 dark:hover:bg-gray-500 cursor-pointer text-sm ${
                  selectedOptions.includes(option.label)
                    ? "bg-gray-300 dark:text-black"
                    : ""
                }`}
                onClick={() => toggleOption(option.label)}
              >
                <div className="flex items-center justify-between px-2">
                  <span>{option.label}</span>
                  {selectedOptions.includes(option.label) && (
                    <Icon icon="streamline:check-solid" />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <input type="hidden" name={name} value={selectedOptions.join(",")} />

        {errors && (
          <div className="text-[12px] text-primary font-bold flex items-center ml-3 -mt-6">
            <Icon icon="codicon:error-small" className="h-6 w-6" />
            {errors}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelect;

//sample use

// const instituteTypeOptions = [
//     { value: "a", label: "OPTION A" },
//     { value: "b", label: "OPTION B" },
//     { value: "c", label: "OPTION C" },
//   ];

/* <MultiSelect
  prefixIcon="mdi:office-building-cog"
  prefixIconStyle={
    touched.instituteType && errors.instituteType
      ? "text-primary opacity-100 dark:opacity-100 h-5 w-5"
      : "h-5 w-5"
  }
  name="instituteType"
  optionText="Select Institute Type"
  options={instituteTypeOptions}
  value={values.instituteType}
  className="w-full"
  onBlur={handleBlur("instituteType")}
  onChange={(newValue: string[]) => {
    setFieldValue("instituteType", newValue);
  }}
  errors={
    touched.instituteType && errors.instituteType ? errors.instituteType : ""
  }
  labelText="Select at least one option"
/>; */
