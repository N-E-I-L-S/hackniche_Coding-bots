import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './pages/Home';
import  ErrorPage  from './pages/ErrorPage';
// import { Navbar } from './components/Navbar';
// import { Footer } from './components/Footer';
import Login from './pages/login/Login';
import Landing from './pages/Landing';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './pages/login/Signup';
import ForgotPassword from './pages/login/ForgotPassword';
import Profile from './pages/Profile';
import Pension from './pages/Pension';


function App() {
  return (
    <div className="p-2">
      <Router>
        {/* <Navbar /> */}
        <div className='min-h-screen'>
          <Routes>

            <Route path='/' element={<Landing />} />
            {/* <Route path='/home' element={<ProtectedRoute page={<Home />} />} /> */}
            <Route path="/home" element={<Home />}></Route>
            <Route path="/pension" element={<Pension />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/forgotpass' element={<ForgotPassword/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </div>
        {/* <Footer /> */}
      </Router>

    </div>
  );
}

export default App;
