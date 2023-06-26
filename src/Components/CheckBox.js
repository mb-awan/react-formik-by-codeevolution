import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";
import React from "react";

const CheckBox = props => {
    const {name, label, options, ...rest} = props;
    return (
        <div className='form-control'>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({field}) =>
                        options.map( option =>
                            <React.Fragment key={option.value}>
                                <input type='checkbox'
                                       id={option.value}
                                       {...field}
                                       value={option.value}
                                       checked={field.value.includes(option.value)}
                                />
                                <label style={{ display: "inline"}}      htmlFor={option.value}>
                                    {option.key}
                                </label>
                            </React.Fragment>
                        )
                }
            </Field>
            <ErrorMessage
                name={name}
                component={TextError}
            />
        </div>
    )
};

export default CheckBox;