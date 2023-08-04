import { FieldProps } from "formik";
import Select from "react-select";

interface Option {
  label: string | number;
  value: string | number;
}

interface CustomSelectProps extends FieldProps {
  label?: string;
  options: Option[];
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
}

export const CustomSelect = ({
  label,
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
  ...props
}: CustomSelectProps) => {
  const onChange = (option: Option | Option[]) => {
    form.setFieldValue(
      field.name,
      isMulti
        ? (option as Option[]).map((item: Option) => item)
        : (option as Option)
    );
  };

  const getValue = () => {
    if (options) {
      if (isMulti) {
        const values = (field.value || []).map((option: Option) => option.value);
        return options.filter((option: Option) => values.indexOf(option.value) >= 0)
      }
      return options.find((option: Option) => option.value === field.value);
    } else {
      return isMulti ? [] : ("" as any);
    }
  };

  return (
    <>
      {label && (<label className='col-form-label p-0 required form-custom-label '>{label}</label>)}
      <div>
        <Select
          {...props}
          className={className}
          name={field.name}
          value={getValue()}
          onChange={onChange}
          placeholder={placeholder}
          options={options}
          isMulti={isMulti}
        />
        {form.touched[field.name] && form.errors[field.name] && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>{form.errors[field.name] as string}</div>
          </div>
        )}
      </div>
    </>

  );
};

export default CustomSelect;
