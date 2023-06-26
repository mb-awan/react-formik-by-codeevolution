import React from 'react';
import * as Yup from 'yup';
import {Form, Formik} from "formik";
import FormikController from "./FormikController";
import {Button} from "@chakra-ui/react";

const LoginForm = props => {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('email is required').email('Invalid Email format'),
        password: Yup.string().required('password can not be empty')
    })

    const onSubmit = values => console.log(values);
    return (
        <Formik
            initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}
        >
            {
                formik => {
                    return (
                      <Form>
                          <FormikController
                              control = 'chakraInput'
                              type='email'
                              name='email'
                              label='Email'
                          />
                          <FormikController
                              control='chakraInput'
                              type='password'
                              name='password'
                              label='Password'
                          />
                          <Button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</Button>
                      </Form>
                    );
                }
            }
        </Formik>
    );
};

export default LoginForm;