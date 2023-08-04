import { FieldProps } from "formik";

interface RadioGroupProps extends FieldProps {
    label: string,
    className?: string;
    placeholder?: string;
}

export const RadioGroup = ({
    value,
    error,
    touched,
    id,
    label,
    className,
    children,
    ...props
}: any) => {

    return (
        <>
            <label className='col-form-label p-0 required form-custom-label mb-6'>{label}</label>
            <div className="d-flex justify-content-evenly align-items-center ">
                {children}
            </div>
            {touched && error && (
                <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{error as string}</div>
                </div>
            )}
        </>

    );
};

export default RadioGroup;
