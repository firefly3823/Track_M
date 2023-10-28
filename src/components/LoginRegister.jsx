import { Button, Col, Form, InputGroup, Row, } from 'react-bootstrap'
import * as yup from 'yup';
import { Formik } from 'formik';
import { CreateAccount, getAccountData } from '../services/allAPI';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginRegister() {

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
                onSubmit={async (values) => {
                    let currentUserEmail = values.email
                    const response = await getAccountData()
                    if(response.status >=200 && response.status <300){
                    let accountStatus = response.data.some(data=> data.email === currentUserEmail)
                    if(accountStatus){
                        toast.warning('Existing Account found in this Email...! Click Login Below')
                    }else{
                        const responseStatus = await CreateAccount(values)
                        if (responseStatus.status >= 200 && responseStatus.status < 300) {
                            toast.success('Account Created successfuly..! Click Login Below')
                        } else {
                            toast.error('oops... somthing wenting wrong')
                            // console.log(response);
                        }
                        
                    }
                }else{
                    toast.error("404 not Server Not found! Try again sometimes")
                }
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
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="email_block">
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
                                <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md="12" controlId="username_block">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    placeholder="choose unique User name"
                                    value={values.username}
                                    onChange={handleChange}
                                    isValid={touched.username && !errors.username}
                                    isInvalid={touched.username && errors.username}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md="12" controlId="Password_block">
                                <Form.Label>Password</Form.Label>
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
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md="12" controlId="confirm_password">
                                <Form.Label>Password</Form.Label>
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
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <div className='w-100 d-flex justify-content-end'>
                            <Button className='btn m-2' type="submit">Sign up</Button>
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