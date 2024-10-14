import { FilterIndicatorProps } from "@/types";
import React from "react";

const FilterIndicator: React.FC<FilterIndicatorProps> = ({
  field,
  value,
  onRemove,
}) => {
  const handleRemoveClick = () => {
    onRemove(field);
  };

  const formatOptionTitle = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str: string) => str.toUpperCase());
  };

  return (
    <div className="flex items-center bg-primary dark:bg-gray-700 text-white dark:text-gray-200 rounded-full px-3 py-1 text-sm font-bold">
      {formatOptionTitle(field)}: {value}
      <button
        type="button"
        className="ml-2 text-gray-100 dark:text-gray-400 hover:text-gray-300 dark:hover:text-gray-100"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
    </div>
  );
};

export default FilterIndicator;
