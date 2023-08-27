import React, { useEffect, useRef, useState } from 'react'
import './LoginForm'
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik } from 'formik';
import * as Yup from 'yup'
import { login } from "../../Actions/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
});


const LoginForm = (props) => {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useRef();
  const [userEmail, setUserEmail] = useState({});
  // const [password, setPassword] = useState({});

  // const [formData, setFormData] = useState({});

  useEffect(() => {
    console.log("userEmail, password",userEmail );
  }, [userEmail])

  const [loading, setLoading] = useState(false);


  
  const handleLogin = (e) => {
    setLoading(true);
      dispatch(login(userEmail))
        .then(() => {
          navigate("/search");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } 





  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          setUserEmail({ email : values.email, password: values.password})
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
                <label htmlFor="email">Email Address*</label> 
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
              <label htmlFor="password">Password*</label> 
              
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