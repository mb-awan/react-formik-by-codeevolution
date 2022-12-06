import {Form, Formik} from "formik";
import * as Yup from 'yup';
import FormikController from "./FormikController";

const FormikContainer = props => {
    const initialValues = {
        email: '',
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('required').email('invalid email')
    });
    const onSubmit = values => console.log('Form values :', values);
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {
                    formik => {
                        return (
                            <Form>
                                <FormikController control='input' type='email' name='email'/>
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