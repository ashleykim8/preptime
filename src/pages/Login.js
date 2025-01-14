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
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' 
            }
        })
        const response = JSON.parse(await result.text());
        console.log(response);
        if (response.type == "success"){
          setUser({username:values.username,
                  password:values.password,
          });
          navigate('/');
        }
        else{
          alert(response.message);
        }
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
