import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './pages/Home';
import  ErrorPage  from './pages/ErrorPage';
// import { Navbar } from './components/Navbar';
// import { Footer } from './components/Footer';
import Login from './pages/login/Login';
import Landing from './pages/Landing';
import ProtectedRoute from './components/ProtectedRoute';


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
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </div>
        {/* <Footer /> */}
      </Router>

    </div>
  );
}

export default App;
