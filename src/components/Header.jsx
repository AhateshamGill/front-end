import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, reset } from '../features/auth/authSlice';
// import { useEffect } from 'react';

function Header() {
  const { user, isSuccess } = useSelector(
    (state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect ( () => {
    if (isSuccess) {
      navigate('/register');
    }
    dispatch(reset());
  }, [isSuccess, navigate, dispatch]);
  
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            Personal_Branding
          </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-decoration-none'> <Link to='/add-sham'>
              Add_Sham
            </Link></Nav.Link>
            <Nav.Link className='text-decoration-none'> <Link to='/show-sham'>
              My_Sham
            </Link></Nav.Link>
            {user && (
              <>
                <Nav.Link>
                  <Link >Hello {user.name}</Link>
                </Nav.Link>
                <Nav.Link onClick={handleLogout} className='bg-danger btn btn-danger'>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
