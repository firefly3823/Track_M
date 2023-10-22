import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import * as yup from 'yup';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function LoginRegister() {

    const schema = yup.object().shape({
        email: yup.string().required().test('email', 'enter proper email', (values) => {
            return values && values.includes('@gmail.com');
        }),
        username: yup.string().required('username is required'),
        password: yup.string().required('Please fill Password').matches(/^(?=.*\d)(?=.*\W)/, 'Password must contain at least one number and one special character'),
        confPaswd: yup.string().oneOf([yup.ref('password'), null], 'Password not matched..').required('Confirm password is required')

    });
    // const [login, setLogin] = useState(false)
    // console.log(login)
    return (

            <Formik
            validationSchema={schema}
            onSubmit={(values) => {
                alert(JSON.stringify(values));
                console.log(JSON.stringify(values, null, 2));
            }}
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
                            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} md="12" controlId="validationFormik02">
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
                        <Form.Group as={Col} md="12" controlId="validationFormikpassword">
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
                        <Form.Group as={Col} md="12" controlId="validationFormpassword">
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
    
    )
}

export default LoginRegister