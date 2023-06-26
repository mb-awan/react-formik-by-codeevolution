import React from 'react';
import * as Yup from 'yup';
import {Form, Formik} from "formik";
import FormikController from "./FormikController";

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
                              control = 'input'
                              type='email'
                              name='email'
                              label='Email'
                          />
                          <FormikController
                              control='input'
                              type='password'
                              name='password'
                              label='Password'
                          />
                          <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                      </Form>
                    );
                }
            }
        </Formik>
    );
};

export default LoginForm;