import { FieldProps } from "formik";

interface CustomInputProps extends FieldProps {
  label?: string;
  className?: string;
  placeholder?: string;
}

export const CustomInput = ({
  label,
  className,
  placeholder,
  field,
  form,
  ...props
}: CustomInputProps) => {
  const onChange = (event: any) => {
    form.setFieldValue(
      field.name,
      event.target.value
    );
  };

  const getValue = () => {
    return field.value || '';
  };

  return (
    <>
      {label && (<label className='col-form-label p-0 required form-custom-label '>{label}</label>)}
      <div>
        <input
          {...props}
          className={className}
          name={field.name}
          value={getValue()}
          onChange={onChange}
          placeholder={placeholder}
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

export default CustomInput;
