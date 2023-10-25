import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AddSham from './pages/AddSham';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import ShowSham from './pages/ShowSham';

function App() {
  return (
   <>
    <Router>
    <Header />
      <Routes>
        <Route path='/add-sham' element={<AddSham/>} />
        <Route path='/show-sham' element={<ShowSham/>} /> 
        <Route path='/register' element={<Register/>} /> 
        <Route path='/login' element={<Login/>} /> 
        <Route path='*' element={<NotFound/>} />  
      </Routes>
    </Router>
   </>
  );
}

export default App;
