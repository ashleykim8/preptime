import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const initialValues = {username: '', password: ''};
  return(
<div className="login-container">
  <h2>Login</h2>
  <Formik
    initialValues = {initialValues}
    onSubmit={async (values, { setSubmitting }) => {
      console.log(values)
      const result = await fetch(
        'http://localhost:5000/api/users/login', {
            method: "POST",
            body: JSON.stringify({ 
              username:values.username, 
              password:values.password, 
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(result.json());
        navigate('/');
    }}
>
  {({ isSubmitting }) => (
      <Form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <Field name="username" placeholder="Jane" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <Field name="password" placeholder="Doe" />
        </div>
        <button type="submit" className="login-button">login</button>
      </Form>
  )}
</Formik>
 <Link to="/register" className='register-link'>Or Register Here!</Link>
</div>
);
}
export default Login;
