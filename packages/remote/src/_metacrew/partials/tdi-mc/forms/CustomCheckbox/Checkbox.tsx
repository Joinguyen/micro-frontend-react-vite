import { FieldProps } from "formik";
import './style.scss';

interface CheckboxProps extends FieldProps {
    id: string;
    valueSet: string | number | readonly string[] | undefined;
    label: string;
    className?: string;
    placeholder?: string;
}

export const Checkbox = ({
    valueSet = '',
    className,
    placeholder,
    field: { name, value, onChange, onBlur },
    form: { errors, touched, setFieldValue },
    id,
    label,
    form,
    ...props
}: CheckboxProps) => {
    return (
        <>
            <div className={`form-check form-check-custom ${className}`}>
                <input
                    className="form-check-input"
                    name={name}
                    id={id}
                    type="checkbox"
                    value={value}
                    checked={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {label && (<label className="form-check-label" htmlFor={id}>
                    {label}
                </label>)}
            </div>
        </>
    );
};

export default Checkbox;
