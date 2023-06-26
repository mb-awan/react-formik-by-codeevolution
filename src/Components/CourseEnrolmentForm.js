import React from 'react';
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import FormikController from "./FormikController";

const CourseEnrolmentForm = props => {
    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skillSet: [],
        courseDate: null
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email').required('Required'),
        bio: Yup.string().required('Required'),
        course: Yup.string().required('Required'),
        skillSet: Yup.array().optional(),
        courseDate: Yup.date().required('Required').nullable()
    });

    const courseOptions = [
        { key: 'React', value: 'react'},
        { key: 'Angular', value: 'angular'},
        { key: 'Vue', value: 'vue'},
    ];

    const skillSetOptions = [
        { key: 'HTML', value: 'html'},
        { key: 'CSS', value: 'css'},
        { key: 'JavaScript', value: 'javascript'},
    ];


    const onSubmit = (values, onSubmitProps) => {
        console.log(values);
        onSubmitProps.setSubmitting(false);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    return (
                        <Form>
                            <FormikController
                                control = 'input'
                                type='email'
                                name='email'
                                label='Email:'
                            />
                            <FormikController
                                control = 'input'
                                type='text'
                                name='bio'
                                label='Bio:'
                            />
                            <FormikController
                                control = 'select'
                                name='course'
                                label='Select Course:'
                                options= {courseOptions}
                            />
                            <FormikController
                                control = 'checkbox'
                                name='skillSet'
                                label='Skill Set:'
                                options= {skillSetOptions}
                            />
                            <FormikController
                                control = 'date'
                                name='courseDate'
                                label='Course Date:'
                            />
                            <button type='submit' disabled={!formik.isValid || formik.isSubmitting }>Enroll</button>
                        </Form>
                    )
                }
            }
        </Formik>
    );
};

export default CourseEnrolmentForm;