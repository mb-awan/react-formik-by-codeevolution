import styles from '../App.module.css';
import { useFormik} from "formik";
import {useRef} from "react";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string("name must be a string").required("name is required")
})

export const YoutubeForm = props => {
    const nameRef = useRef();

    const initialValues =  {
        name: '',
        email: '',
        channel: ''
    };

    const validate = values => {
        /*
        There are Three important requirements for validate function of formik that:
            1. It should always return an object.
            2. The properties in returned object must be same as the properties in our values input object.
            3. Each property value in returned object must be of type string.
        */
        const error = {};

        if((values.email || values.channel) && !values.name) {
            error.name = "name is required first";
            formik.touched.name = true;
            nameRef.current.focus();
        }
        else if(!values.name && !values.email && !values.channel) error.name = "name is required";

        if(!values.email)
            error.email = "email is required";
        else if(!values.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
            error.email = "invalid email format"
        if(!values.channel) error.channel = "channel is required";
        return error;
    }

    const onSubmit = values => console.log('form data:', values);
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
        validationSchema,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={styles['form-control']}>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    { ...formik.getFieldProps('name')}
                    ref={nameRef}
                />
                {formik.touched.name && formik.errors.name && <div className={styles.error}>{formik.errors.name}</div>}
            </div>

            <div className={styles['form-control']}>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    { ...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && <div className={styles.error}>{formik.errors.email}</div>}
            </div>

            <div className={styles['form-control']}>
                <label htmlFor='channel'>Channel</label>
                <input
                    type='text'
                    id='channel'
                    name='channel'
                    { ...formik.getFieldProps('channel')}

                />
                {formik.touched.channel && formik.errors.channel && <div className={styles.error}>{formik.errors.channel}</div>}
            </div>

            <div className={styles['form-control']}>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}