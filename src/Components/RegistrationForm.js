import React from 'react';
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import FormikController from "./FormikController";

const RegistrationForm = props => {
    const initialValue = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        telephone: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().required('Required').oneOf([Yup.ref('password')], 'Passwords must match'),
        modeOfContact: Yup.string().required('Required'),
        telephone: Yup.string().when('modeOfContact', {
            is: 'telephoneMOC',
            then: Yup.string().required('telephone is required')
        })
    })

    const mocOptions = [
        { key: 'Email', value: 'emailMOC'},
        { key: 'Telephone', value: 'telephoneMOC'},
    ];

    const onSubmit = (values, onSubmitProps) => {
        console.log(values);
        onSubmitProps.setSubmitting(false);
    }
    return (
        <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    return (
                        <Form>
                            <FormikController
                                control='input'
                                type='email'
                                name='email'
                                label='Email:'
                            />
                            <FormikController
                                control='input'
                                type='password'
                                name='password'
                                label='Password:'
                            />
                            <FormikController
                                control='input'
                                type='password'
                                name='confirmPassword'
                                label='Confirm Password:'
                            />
                            <FormikController
                                control='radio'
                                name='modeOfContact'
                                label='Mode of Contact:'
                                options={mocOptions}
                            />
                            <FormikController
                                control='input'
                                type='text'
                                name='telephone'
                                label='Telephone:'
                            />
                            <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Register</button>
                        </Form>
                    )
                }
            }
        </Formik>
    );
};

export default RegistrationForm;