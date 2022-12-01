import styles from '../App.module.css';
import { useFormik} from "formik";

export const YoutubeForm = props => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },
        onSubmit: values => console.log('form data:', values),

    });

    // console.log(formik.values);
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={styles['form-control']}>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
            </div>

            <div className={styles['form-control']}>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
            </div>

            <div className={styles['form-control']}>
                <label htmlFor='channel'>Channel</label>
                <input
                    type='text'
                    id='channel'
                    name='channel'
                    value={formik.values.channel}
                    onChange={formik.handleChange}
                />
            </div>

            <div className={styles['form-control']}>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}