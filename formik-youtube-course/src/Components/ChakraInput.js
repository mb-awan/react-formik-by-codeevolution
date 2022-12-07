import React from 'react';
import {Field} from "formik";
import {FormControl, Input, FormLabel, FormErrorMessage} from "@chakra-ui/react";

const ChakraInput = props => {
    const {label, name, ...rest} = props;
    return (
        <Field name={name} {...rest}>
            {
                ({field, form}) => {
                    return (
                        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                            <FormLabel htmlFor={name}>{label}</FormLabel>
                            <Input id={name} {...field}/>
                            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                        </FormControl>
                    )
                }
            }
        </Field>
    );
};

export default ChakraInput;