import React from 'react'
import './LoginForm'
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik } from 'formik';
import * as Yup from 'yup'

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
});


const LoginForm = () => {


  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          
              <form noValidate onSubmit={handleSubmit}>
              
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <div className='row'>
                <label for="email">Email Address*</label> 
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id"
                  className="form-control"
                  id="email"
                />
                 <p className="error">
                  {errors.email && touched.email && errors.email}
              </p>
              <label for="password">Password*</label> 
              
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
              />
              
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
              {/* Click on submit button to submit the form */}
              
              <button type="submit">Login</button>
              
             
              
                <a className='forgot_password' href='#'>Forgot Password?</a>
              

            </div>
               
              
              </form>

           
        )}

      </Formik>
     
      
    </>
  )
}

export default LoginForm