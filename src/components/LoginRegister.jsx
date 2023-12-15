import { Button, Col, Form, InputGroup, Row, } from 'react-bootstrap'
import * as yup from 'yup';
import { Formik } from 'formik';
import {createAccount } from '../services/allAPI';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function LoginRegister() {
    const handleRegister = async (values)=>{
        const { username, email, password } = values
        if (!username || !email || !password) {
            toast.warn("Please fill the form")
        } else {
            const result = await createAccount(values)
            // console.log(result&& result);
            if (result && result.status === 200) {
                toast.success("Account Created! Login Below")
            } else {
                toast.error(result && result.response.data)
            }
        }
    }

    const schema = yup.object().shape({
        email: yup.string().required().test('email', 'enter proper email', (values) => {
            return values && values.includes('@gmail.com');
        }),
        username: yup.string().required('username is required'),
        password: yup.string().required('Please fill Password').matches(/^(?=.*\d)(?=.*\W)/, 'Password must contain at least one number and one special character'),
        confPaswd: yup.string().oneOf([yup.ref('password'), null], 'Password not matched..').required('Confirm password is required')
    });

    return (
        <>
            <Formik
                validationSchema={schema}
                onSubmit={(values) => {
                    handleRegister(values)
                }
                }
                initialValues={{
                    email: '',
                    username: '',
                    password: '',
                    confPaswd: ''
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group  controlId="email_block">
                                <Form.Label className='w-100'>E-Mail
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={touched.email && errors.email}
                                /></Form.Label>
                                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        
                            <Form.Group controlId="username_block">
                                <Form.Label className='w-100'>User Name
                                <Form.Control
                                    type="text"
                                    name="username"
                                    placeholder="choose unique User name"
                                    value={values.username}
                                    onChange={handleChange}
                                    isValid={touched.username && !errors.username}
                                    isInvalid={touched.username && errors.username}
                                /></Form.Label>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                            </Form.Group>
                        
                            <Form.Group controlId="Password_block">
                                <Form.Label className='w-100'>Password
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isValid={touched.password && !errors.password}
                                        isInvalid={touched.password && errors.password}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                </InputGroup></Form.Label>
                            </Form.Group>
                        
                        
                            <Form.Group  controlId="confirm_password">
                                <Form.Label className='w-100'>Password
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="password"
                                        placeholder=" Confirm Password"
                                        name="confPaswd"
                                        value={values.confPaswd}
                                        onChange={handleChange}
                                        isValid={touched.confPaswd && !errors.confPaswd}
                                        isInvalid={touched.confPaswd && errors.confPaswd}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.confPaswd}</Form.Control.Feedback>
                                </InputGroup></Form.Label>
                            </Form.Group>
                        <div className='w-100 d-flex justify-content-end'>
                            <Button className='btn m-2'  type="submit">Sign up</Button>
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastContainer position="top-center"
                theme="colored"
                autoClose={3000} />
        </>

    )
}

export default LoginRegister