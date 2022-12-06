import {Form, Formik} from "formik";
import * as Yup from 'yup';
import FormikController from "./FormikController";

const FormikContainer = props => {
    const dropDownOptions = [
        {key: 'Select an Option', value: ''},
        {key: 'Option1', value: 'option1'},
        {key: 'Option2', value: 'option2'},
        {key: 'Option3', value: 'option3'},
    ];
    const radioOptions= [
        {key: 'Option1', value: 'rOption1'},
        {key: 'Option2', value: 'rOption2'},
        {key: 'Option3', value: 'rOption3'},
    ];

    const checkboxOptions= [
        {key: 'Option1', value: 'cOption1'},
        {key: 'Option2', value: 'cOption2'},
        {key: 'Option3', value: 'cOption3'},
    ];

    const initialValues = {
        email: '',
        text: '',
        selectOption: '',
        radioOption: 'rOption1',
        checkboxOption: ['cOption2'],
        birthDate: null,
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('required').email('invalid email'),
        text: Yup.string().required('required'),
        selectOption: Yup.string().required('select Topic'),
        radioOption: Yup.string().required('Pick one option'),
        checkboxOption: Yup.array().required('Pick at least one option'),
        birthDate: Yup.date().required('Birth Date is required').nullable(),
    });
    const onSubmit = values => console.log('Form values :', values);
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {
                    formik => {
                        return (
                            <Form>
                                <FormikController
                                    control='input'
                                    label='email:'
                                    type='email'
                                    name='email'
                                />
                                <FormikController
                                    control='textarea'
                                    label='Text:'
                                    name='text'
                                />
                                <FormikController
                                    control='select'
                                    label='Select a Topic:'
                                    name='selectOption'
                                    options={dropDownOptions}
                                />
                                <FormikController
                                    control='radio'
                                    label='Pick a Option:'
                                    name='radioOption'
                                    options={radioOptions}
                                />
                                <FormikController
                                    control='checkbox'
                                    label='Pick Options:'
                                    name='checkboxOption'
                                    options={checkboxOptions}
                                />
                                <FormikController
                                    control='date'
                                    label='Birthday'
                                    name='birthDate'
                                />
                                <button type='submit'>Submit</button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </>
    );
}

export default FormikContainer;