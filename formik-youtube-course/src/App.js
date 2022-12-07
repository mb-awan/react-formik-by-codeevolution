import './App.css';
// import RegistrationForm from "./Components/RegistrationForm";
// import CourseEnrolmentForm from "./Components/CourseEnrolmentForm";
// import FormikContainer from "./Components/FormikContainer";
import LoginForm from "./Components/LoginForm";
import {ChakraProvider} from '@chakra-ui/react'

const App = () => {
    return (

        <ChakraProvider>
            <div className='App'>
                {/*<FormikContainer/>*/}
                <LoginForm/>
                {/*<RegistrationForm/>*/}
                {/*<CourseEnrolmentForm/>*/}
            </div>
        </ChakraProvider>
    );
}

export default App;
