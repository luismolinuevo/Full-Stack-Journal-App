import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from "../../components/TextField";
import * as Yup from 'yup';
import Axios from "axios";
// import {Box} from "@mui/system";
import './Signup.css';
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();

  const validate = Yup.object({
    name: Yup.string()
      .max(25, 'Must be 25 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 7 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    // <div className='container'>
      
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={validate}
          onSubmit={values => {
            console.log(values)
            Axios({
                method: "POST",
                data: {
                  name: values.name,
                  email: values.email,
                  password: values.password,
                },
                withCredentials: true,
                url: "http://localhost:5000/api/auth/signup",
              }).then((res) => console.log(res)).then(navigate("/"));
          }}
        >
          {formik => (
            <div>
              <div className='signupForm'>
                <Form className="form">
                  <h1>Sign Up</h1>
                    <div className='inputBoxes'>
                        <TextField label="Full Name" name="name" type="name" className="label"/>
                        <TextField label="Email" name="email" type="email" className="label"/>
                        <TextField label="Password" name="password" type="password" className="label"/>
                        <TextField label="Confirm Password" name="confirmPassword" type="password" className="label"/>
                    </div>
                    <div className='signUpButtons'>
                      <button className ="signup-button" type="submit">Register</button>
                      <button className ="signup-button" type="reset">Reset</button>
                    </div>
                    <p>Already have an account</p>
                    <Link to="/login">Sign In</Link>


                </Form>
              </div>
            </div>
          )}
        </Formik>
      
    // </div>
    
  )
}