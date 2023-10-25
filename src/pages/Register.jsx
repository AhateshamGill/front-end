import React,{ useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import { registerUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [formFields, setFormFields] = useState({
        name:'',
        email:'',
        password:''
    });

    const {name,email,password} = formFields;
    // get the state from redux
    const {user,isError,isSuccess,message} = useSelector(
      (state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect (()=> {
      if(isSuccess || user){
        navigate("/add-sham")
      }else{
        console.log(message);
        navigate("/register");
      }
    },[isSuccess,navigate,user,message]);

    const handleSubmit = (e) => {
      e.preventDefault();
      if(isError){
        console.log(message);
      }else{
        const userData = {
          name, 
          email , 
          password
        };
        dispatch(registerUser(userData));
      }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setFormFields((pervValue) => ({
            ...pervValue,
            [e.target.name] : e.target.value,
        }));
    };

  return (
    <>
    <Container className='col-md-6 border p-4 shadow mt-4 rounded'>
      <Form>
        <div className="display-1 text-center">Register_Form</div>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control 
        type="text"
         name='name' 
         value={name} 
         onChange={handleChange}>
        </Form.Control>
        </Form.Group>  
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="email" 
            name='email' 
            value={email} 
            onChange={handleChange}>
            </Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            name='password' 
            value={password} 
            onChange={handleChange}>
            </Form.Control>
        </Form.Group>
        <Button 
        onClick={handleSubmit} variant='info' 
        className='my-2 w-100'>
          Register
          </Button>
      </Form> 
    </Container>
    </>
  )
}

export default Register