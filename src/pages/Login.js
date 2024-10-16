import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';

function Login({setUser}) {
  const navigate = useNavigate();
  const initialValues = {username: '', password: ''};
  return(
<div className="login-container">
  <h2>Login</h2>
  <Formik
    initialValues = {initialValues}
    onSubmit={async (values, { setSubmitting }) => {
      const result = await fetch(
        'http://localhost:8080/api/users/login', {
            method: "POST",
            body: JSON.stringify({ 
              username:values.username, 
              password:values.password, 
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        //ALWAYS AWAIT PROMISES
        /*
        const userProfile = await result.json();
        console.log(userProfile);
        setUser({username:userProfile.username,
                password:userProfile.password,
                email:userProfile.email
        });
        */
        navigate('/');
    }}
>
  {({ isSubmitting }) => (
      <Form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <Field name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <Field name="password" type="password" />
        </div>
        <button type="submit" className="login-button">LOGIN</button>
      </Form>
  )}
</Formik>
  <br></br>
  <center>
    Need an account? <Link to="/register" className='register-link'>SIGN UP</Link>
  </center>
</div>
);
}
export default Login;
