import React, { useState } from "react";
import { FilterProps } from "@/types";
import { Icon } from "@iconify/react";
import FormInput from "./FormInput";

const Filter: React.FC<FilterProps> = ({
  onBlur,
  name,
  labelText,
  optionText,
  className,
  options = [],
  value,
  prefixIcon,
  prefixIconStyle,
  onSearchClick,
  onReset,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState(value);

  const excludedKeys = [
    "date",
    "transactionDate",
    "dateCreated",
    "dateRegistered",
    "dateMappedToTerminal",
    "dateTimeStamp",
  ];

  const filteredOptions = options.filter(
    (option) => !excludedKeys.includes(option.key)
  );

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setInputValue("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleSearchClick = () => {
    if (selectedOption && inputValue) {
      if (typeof onSearchClick === "function") {
        onSearchClick(selectedOption, inputValue);
      }
    }
  };

  const handleReset = () => {
    setSelectedOption("");
    setInputValue("");
    if (typeof onReset === "function") {
      onReset();
    }
  };

  const formatOptionTitle = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str: string) => str.toUpperCase());
  };

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text font-medium">{labelText}</span>
      </label>

      <div className="relative flex items-center gap-3">
        <div>
          {prefixIcon && (
            <Icon
              icon={prefixIcon}
              className={`absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 opacity-70 ${prefixIconStyle}`}
            />
          )}
          <select
            name={name}
            onBlur={onBlur}
            onChange={handleOptionChange}
            value={selectedOption}
            className={`select select-bordered w-full pl-10 mb-4 dark:border border-grey ${
              className || ""
            }`}
          >
            <option disabled selected value="">
              {optionText}
            </option>
            {filteredOptions.map((option) => (
              <option key={option.key} value={option.key}>
                {formatOptionTitle(option.key)}
              </option>
            ))}
          </select>
        </div>

        <div>
          {selectedOption && (
            <FormInput
              inputType="search"
              prefixIcon="radix-icons:reset"
              prefixIconStyle="h-5 w-5 cursor-pointer"
              onIconClick={handleReset}
              inputPlaceholder={
                selectedOption
                  ? `Enter ${formatOptionTitle(selectedOption)}`
                  : ""
              }
              suffixIcon="mdi:send"
              suffixIconStyle="text-primary w-5 h-5 dark:opacity-100 cursor-pointer"
              bodyStyle="text-sm bg-white dark:bg-blackLight border-dateColor rounded-md"
              inputStyle="text-blackLight text-[12px] dark:text-greyOff placeholder:opacity-80 dark:placeholder:opacity-60 dark:placeholder:text-grey w-[155px]"
              inputLabelStyle="mb-4"
              onBlur={onBlur}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              value={inputValue}
              onClick={handleSearchClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;

// sample use

// const [currentPage, setCurrentPage] = useState<number>(1);
// const [filters, setFilters] = useState<{ [key: string]: string }>({});

// const TABLE_HEAD = [
//   { key: "id", title: "ID" },
//   { key: "firstName", title: "FIRST NAME" },
//   { key: "email", title: "EMAIL" },
// ];

// const handleFilterChange = (field: string, value: string) => {
//     setFilters((prev) => ({ ...prev, [field]: value }));
//     setCurrentPage(1);
//   };

//   const handleFilterRemove = (field: string) => {
//     setFilters((prev) => {
//       const { [field]: _, ...rest } = prev;
//       return rest;
//     });
//     setCurrentPage(1);
//   };

//   const handleReset = () => {
//     setFilters({});
//     setCurrentPage(1);
//   };

/* <Filter
  options={TABLE_HEAD}
  prefixIcon="lucide:filter"
  prefixIconStyle={"h-6 w-6 opacity-100 dark:opacity-100"}
  optionText="Filter By"
  className="w-full"
  value=""
  onReset={handleReset}
  onSearchClick={handleFilterChange}
/> */

// {
//   Object.entries(filters).map(([field, value]) => (
//     <FilterIndicator
//       key={field}
//       field={field}
//       value={value}
//       onRemove={handleFilterRemove}
//     />
//   ));
// }
