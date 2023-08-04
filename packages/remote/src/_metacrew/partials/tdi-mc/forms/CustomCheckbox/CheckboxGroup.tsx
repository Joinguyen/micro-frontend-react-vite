import { FieldProps } from "formik";
import React from "react";

interface CheckboxGroupProps extends FieldProps {
    label: string,
    className?: string;
    placeholder?: string;
}

export const CheckboxGroup = ({
    value,
    error,
    touched,
    id,
    label,
    className,
    children,
    onChange,
    onBlur,
    ...props
}: any) => {

    const handleChange = (event: any) => {
        const target = event.currentTarget;
        let valueArray = [...value] || [];

        if (target.checked) {
            valueArray.push(target.id);
        } else {
            valueArray.splice(valueArray.indexOf(target.id), 1);
        }

        onChange && onChange(id, valueArray);
    };

    const handleBlur = () => {
        // take care of touched
        onBlur && onBlur(id, true);
    };

    return (
        <>
            <label className='col-form-label p-0 required form-custom-label mb-6'>{label}</label>
            <div className="d-flex justify-content-evenly align-items-center ">
                {React.Children.map(children, child => {
                    return React.cloneElement(child, {
                        field: {
                            value: value.includes(child.props.id),
                            onChange: handleChange,
                            onBlur: handleBlur
                        }
                    });
                })}
            </div>
            {touched && error && (
                <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{error as string}</div>
                </div>
            )}
        </>

    );
};

export default CheckboxGroup;
