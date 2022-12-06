import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";

const Input = (props) => {
    const { name, label, ...rest} = props;
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <Field
                id={name}
                name={name}
                {...rest}
            />
            <ErrorMessage
                name={name}
                component={TextError}
            />
        </>
    )
};

export default Input;