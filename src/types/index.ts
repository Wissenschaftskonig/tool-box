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
