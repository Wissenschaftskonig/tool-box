import { IconifyIcon } from "@iconify/react/dist/iconify.js";
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  LegacyRef,
  MouseEventHandler,
} from "react";

export interface SelectOption {
  position?: string | number;
  value?: string | number;
  label: string;
}

export interface MultiSelectProps {
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  name?: string;
  onChange:
    | ((selectedValues: string[]) => void)
    | ((event: React.ChangeEvent<HTMLSelectElement>) => void);
  labelText?: string;
  optionText?: string;
  className?: string;
  options: SelectOption[];
  errors?: string | string[] | false | undefined;
  value: string | string[];
  prefixIcon?: string;
  prefixIconStyle?: string | boolean;
}

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: string | IconifyIcon;
  bodyStyle?: string;
  inputStyle?: string;
  inputLabelStyle?: string | boolean;
  prefixIconStyle?: string | boolean;
  inputType?: HTMLInputTypeAttribute;
  inputPlaceholder: string;
  onChange?: ChangeEventHandler;
  onBlur?: ChangeEventHandler;
  onClick?: MouseEventHandler;
  onIconClick?: MouseEventHandler;
  ref?: LegacyRef<HTMLInputElement> | null;
  maxLength?: number;
  name?: string;
  value?: string | number;
  suffixIcon?: string | IconifyIcon;
  suffixIconStyle?: string | boolean;
  errors?: string | false | undefined;
  labelText?: string;
  loading?: boolean;
  iconDisabled?: boolean;
}

export interface LoaderProps {
  bodyStyle?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  loaderSize?: "loading-sm" | "loading-md" | "loading-lg";
  loaderKind: "iconLoader" | "daisyLoader";
}

export interface FilterProps {
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  name?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  labelText?: string;
  optionText: string;
  className?: string;
  options: Array<{ key: string; title: string }>;
  value?: string;
  prefixIcon?: string;
  prefixIconStyle?: string;
  onSearchClick?: (selectedOption: string, inputValue: string) => void;
  onReset?: () => void;
}

export interface FilterIndicatorProps {
  field: string;
  value: string;
  onRemove: (field: string) => void;
}
