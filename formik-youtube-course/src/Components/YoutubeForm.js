import styles from '../App.module.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string().email("Invalid email").required("email is required"),
    channel: Yup.string().required("channel is required"),
    comment: Yup.string().required('comment is required'),
    address: Yup.string().required('Address is required')
});

export const YoutubeForm = props => {
    const initialValues =  {
        name: '',
        email: '',
        channel: '',
        comment: '',
        address: ''
    };

    const onSubmit = values => console.log('form data:', values);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form>
                <div className={styles['form-control']}>
                    <label htmlFor='name'>Name</label>
                    <Field
                        type='text'
                        id='name'
                        name='name'
                    />
                    <ErrorMessage name='name'/>
                </div>

                <div className={styles['form-control']}>
                    <label htmlFor='email'>Email</label>
                    <Field
                        type='email'
                        id='email'
                        name='email'
                    />
                    <ErrorMessage name='email'/>
                </div>

                <div className={styles['form-control']}>
                    <label htmlFor='channel'>Channel</label>
                    <Field
                        type='text'
                        id='channel'
                        name='channel'
                    />
                    <ErrorMessage name='channel'/>
                </div>

                <div className={styles['form-control']}>
                    <label id='comment'>Comment</label>
                    <Field
                        as='textarea'
                        id='comment'
                        name='comment'
                    />
                    <ErrorMessage name='comment'/>
                </div>

                {/* Props Render Method:  We can also create our custom input element using Field Component of formik*/}
                <div className={styles['form-control']}>
                    <label>Address</label>
                    <Field name='address'>
                        { props => {
                            const { field, form, meta} = props;
                            return (
                                <>
                                    <input id='address' type='text' {...field}/>
                                    {meta.touched && meta.error && <div>{meta.error}</div>}
                                </>
                            )
                        }}
                    </Field>
                </div>

                <div className={styles['form-control']}>
                    <button type='submit'>Submit</button>
                </div>
            </Form>
        </Formik>
    )
}