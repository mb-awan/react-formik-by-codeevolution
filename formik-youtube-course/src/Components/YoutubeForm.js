import styles from '../App.module.css';
import {ErrorMessage, Field, Form, Formik, FieldArray} from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string().email("Invalid email").required("email is required"),
    channel: Yup.string().required("channel is required"),
    // comment: Yup.string().required('comment is required'),
    address: Yup.string().required('Address is required')
});

const ErrorMessageContainer = props => {
    return <div className={styles.error}>{props.children}</div>
}


export const YoutubeForm = props => {
    const initialValues = {
        name: '',
        email: '',
        channel: '',
        comment: '',
        address: '',
        social: {
            fb: '',
            insta: ''
        },
        phoneNumbers: ['', ''],
        phNumbers: ['']
    };

    const commentValidation = value =>  {
        let errMessage;
        if(!value) errMessage= 'Required';
        return errMessage;
    }

    const onSubmit = values => console.log('form data:', values);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnMount={true}
        >{
            formik => {
                console.log(formik);
                return (
                    <Form>
                        <div className={styles['form-control']}>
                            <label htmlFor='name'>Name</label>
                            <Field
                                type='text'
                                id='name'
                                name='name'
                            />
                            <ErrorMessage name='name' component={ErrorMessageContainer}/>
                        </div>

                        <div className={styles['form-control']}>
                            <label htmlFor='email'>Email</label>
                            <Field
                                type='email'
                                id='email'
                                name='email'
                            />
                            {/*Error Message Wrapper using props render pattern*/}
                            <ErrorMessage name='email'>
                                {props => {
                                    return <div className={styles.error}>{props}</div>
                                }}
                            </ErrorMessage>
                        </div>

                        <div className={styles['form-control']}>
                            <label htmlFor='channel'>Channel</label>
                            <Field
                                type='text'
                                id='channel'
                                name='channel'
                            />
                            <ErrorMessage name='channel' component={ErrorMessageContainer}/>
                        </div>

                        <div className={styles['form-control']}>
                            <label id='comment'>Comment</label>
                            <Field
                                as='textarea'
                                id='comment'
                                name='comment'
                                validate={commentValidation}
                            />
                            <ErrorMessage name='comment' component={ErrorMessageContainer}/>
                        </div>

                        {/* Props Render Method:  We can also create our custom input element using Field Component of formik*/}
                        <div className={styles['form-control']}>
                            <label>Address</label>
                            <Field name='address'>
                                { props => {
                                    const {field, meta} = props; // one more property form also exist in props objects in Field component props
                                    return (
                                        <>
                                            <input id='address' type='text' {...field}/>
                                            {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
                                        </>
                                    )
                                }}
                            </Field>
                        </div>

                        <div className={styles['form-control']}>
                            <label htmlFor='fb'>Facebook: </label>
                            <Field
                                id='fb'
                                name='social.fb'
                            />
                        </div>

                        <div className={styles['form-control']}>
                            <label htmlFor='insta'>Instagram: </label>
                            <Field
                                id='insta'
                                name='social.insta'
                            />
                        </div>

                        <div className={styles['form-control']}>
                            <label>Phone Numbers:</label>
                            <Field name='phoneNumbers[0]' placeholder='primary'></Field>
                            <Field name='phoneNumbers[1]' placeholder='secondary'></Field>
                        </div>

                        <div className={styles['form-control']}>
                            <label>Dynamic Phone Numbers Array</label>
                            <FieldArray name='phNumbers'>
                                {
                                    fieldArrayProps => {
                                        const {push, remove, form} = fieldArrayProps;
                                        const {phNumbers} = form.values;
                                        return phNumbers.map((phNumber, index) => (
                                                <div key={index}>
                                                    <Field name={`phNumbers[${index}]`}></Field>
                                                    { !!index && <button type='button' onClick={()=> {remove(index)}}>-</button>}
                                                    <button type='button' onClick={()=> { push('')}}>+</button>
                                                </div>
                                            )
                                        )
                                    }
                                }
                            </FieldArray>
                        </div>

                        <button type='button' onClick={()=> {
                            formik.validateField('comment');
                            formik.setFieldTouched('comment');
                        }}>Validate Comments</button>

                        <button type='button' onClick={()=> {
                            formik.validateForm();
                            formik.setTouched({
                                name: true,
                                email: true,
                                channel: true,
                                comment: true
                            });
                        }}>Validate All</button>

                        <div className={styles['form-control']}>
                            <button type='submit' disabled={!(formik.dirty && formik.isValid)}>Submit</button>
                        </div>
                    </Form>
                )
            }
        }
        </Formik>
    )
}