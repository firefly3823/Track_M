import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import * as yup from 'yup';
import { Formik } from 'formik';
import { getAccountData } from '../services/allAPI';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function LoginUser() {

        const schema = yup.object().shape({
            email: yup.string().required().test('email', 'enter proper email', (values) => {
                return values && values.includes('@gmail.com');
            }),
            password: yup.string().required('Please fill Password').matches(/^(?=.*\d)(?=.*\W)/, 'Password Does not meet expectation')
        
        });
        const navigate = useNavigate()
    return (

        <>
            <Formik
                validationSchema={schema}
                onSubmit={ async (values) => {
                    let {email, password} = values;
                    const response = await getAccountData()
                    if (response.status>=200 && response.status<300) {
                    let accountStatus = response.data.some(data => data.email === email && data.password === password)
                    if(accountStatus){
                        toast.success('Login Success')
                        navigate('/home')

                    }else{
                        toast.error('Invalid Email or Password..! Please try again')
                    }
    
                }else{
                    toast.error("404 Server Not found! Try again later")
                }
                }}
                initialValues={{
                    email: '',
                    password: '',
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationFormik01">
                                <Form.Label>E-Mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={touched.email && errors.email}
                                />
                                {/* <Form.Control.Feedback>Looks good</Form.Control.Feedback> */}
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md="12" controlId="validationFormik02">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isValid={touched.password && !errors.password}
                                    isInvalid={touched.password && errors.password}
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
    
                            </Form.Group>
                        </Row>
                        <div className='w-100 d-flex justify-content-end'>
                            
                            <Button className='btn m-2' type="submit">Login</Button>
    
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

export default LoginUser