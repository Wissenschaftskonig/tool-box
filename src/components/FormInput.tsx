"use client";

import React, { forwardRef } from "react";
import { FormInputProps } from "@/types";
import { Icon } from "@iconify/react";
import Loader from "./Loader";

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      prefixIcon,
      prefixIconStyle,
      bodyStyle,
      inputStyle,
      inputLabelStyle,
      inputType,
      inputPlaceholder,
      name,
      onChange,
      onBlur,
      maxLength,
      value,
      suffixIcon,
      errors,
      onClick,
      suffixIconStyle,
      onIconClick,
      onKeyDown,
      disabled,
      labelText,
      loading,
      iconDisabled,
    },
    ref
  ) => {
    return (
      <div className={`w-full ${bodyStyle}`}>
        {labelText && (
          <div className="label">
            <span className="label-text">{labelText}</span>
          </div>
        )}

        <label
          className={`input input-bordered flex bg-transparent text-black focus-within:outline-0 items-center gap-2 dark:bg-transparent dark:border-grey dark:text-white ${inputLabelStyle}`}
        >
          {prefixIcon && (
            <Icon
              icon={prefixIcon}
              className={`w-4 h-4 opacity-70 ${prefixIconStyle}`}
              onClick={onIconClick}
            />
          )}

          <input
            className={`grow ${inputStyle}`}
            type={inputType}
            placeholder={inputPlaceholder}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            maxLength={maxLength}
            ref={ref}
            onCopy={(e) =>
              (name === "password" || name === "confirmPassword") &&
              e.preventDefault()
            }
            onCut={(e) =>
              (name === "password" || name === "confirmPassword") &&
              e.preventDefault()
            }
            onPaste={(e) =>
              (name === "password" || name === "confirmPassword") &&
              e.preventDefault()
            }
            onKeyDown={onKeyDown}
            disabled={disabled}
          />

          {suffixIcon && (
            <button
              onClick={onClick}
              className="p-2"
              type="button"
              disabled={iconDisabled}
            >
              {loading ? (
                <Loader loaderKind="iconLoader" width={20} height={20} />
              ) : (
                <Icon
                  icon={suffixIcon}
                  className={`w-4 h-4 opacity-70 ${suffixIconStyle}`}
                />
              )}
            </button>
          )}
        </label>

        {errors ? (
          <div className="label -mt-2 ml-2.5">
            <span className="label-text-alt flex items-center text-primary font-bold">
              <Icon icon="codicon:error-small" className="h-6 w-6" />
              {errors}
            </span>

            <span className="label-text-alt opacity-0">null</span>
          </div>
        ) : (
          <span
            className={
              inputType !== "search" ? "my-[26px] opacity-0" : "hidden"
            }
          >
            lala
          </span>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;

// sample use

/* <FormInput
  inputPlaceholder="Password"
  prefixIcon="fa6-solid:lock"
  suffixIcon={''fa-regular:eye}
  inputType={inputType}
  name="password"
  inputLabelStyle={
    touched.password &&
    errors.password &&
    "border-2 border-primary dark:border-primary"
  }
  prefixIconStyle={
    touched.password &&
    errors.password &&
    `text-primary opacity-100 dark:opacity-100`
  }
  value={values.password}
  onChange={handleChange("password")}
  onBlur={handleBlur("password")}
  errors={touched.password && errors.password}
  onClick={showPassword}
  suffixIconStyle="cursor-pointer"
  disabled={loginMutation.isPending}
/>; */
