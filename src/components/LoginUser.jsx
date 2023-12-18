import React from 'react'
import { Button, Form } from 'react-bootstrap'
import * as yup from 'yup';
import { Formik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUserAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

function LoginUser() {
        const schema = yup.object().shape({
            email: yup.string().required().test('email', 'enter proper email', (values) => {
                return values && values.includes('@gmail.com');
            }),
            password: yup.string().required('Please fill Password').matches(/^(?=.*\d)(?=.*\W)/, 'Password Does not meet expectation')
        
        });
        const navigate = useNavigate()
        const handleLogin = async (userData)=>{
            const {email,password} = userData
            if(!email || !password){
                toast.error("Enter Proper Info")
            }else{
                const result = await loginUserAPI(userData)
                console.log(result);
                if (result.status === 200) {
                    localStorage.setItem("currentUser", JSON.stringify(result.data.existingUser))
                    localStorage.setItem("sessionString", result.data.sessionString)
                    navigate('/home')
                }else{
                    toast.error(result.response.data)
                }
            }
        }


    return (

        <>
            <Formik
                validationSchema={schema}
                onSubmit={ (values) => {handleLogin(values)}}
                initialValues={{
                    email: '',
                    password: '',
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        {/* <Row className="mb-3"> */}
                            <Form.Group controlId="validationFormik01">
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
                                
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        
                            <Form.Group controlId="validationFormik02">
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
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
    
                            </Form.Group>
                        
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