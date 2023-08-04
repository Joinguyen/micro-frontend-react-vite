import { FieldProps } from "formik";

interface RadioProps extends FieldProps {
    id: string;
    valueSet: string | number | readonly string[] | undefined;
    label: string;
    className?: string;
    placeholder?: string;
}

export const Radio = ({
    valueSet = '',
    className,
    placeholder,
    field: { name, value, onChange, onBlur },
    id,
    label,
    form,
    ...props
}: RadioProps) => {
    return (
        <>
            <div className="d-flex align-items-center form-check form-custom-check">
                <input
                    name={name}
                    id={id}
                    type="radio"
                    value={valueSet}
                    checked={valueSet === value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className="form-check-input"
                    {...props}

                />
                <label className="form-custom-check-label" htmlFor={id}>
                    {label}
                </label>
            </div>
        </>

    );
};

export default Radio;
