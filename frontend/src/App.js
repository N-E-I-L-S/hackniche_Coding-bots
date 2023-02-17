import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
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
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"


function App() {
  // const navigate = useNavigate();

  
  const commands = [
    {
      command: ["Open *"],
      callback: redirectPage =>
      {
        console.log('started')
        console.log(redirectPage)
        setRedirectUrl(redirectPage)

      } 
    },
  ]
  const { transcript } = useSpeechRecognition({ commands })
  const [redirectUrl, setRedirectUrl] = useState("0")
  const pages = ["home", "jobs", "pension", "profile"]
  const urls = {
    home: "/home",
    jobs: "/jobs",
    pension: "/pension",
    profile: "/profile",
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  let redirect = ""
  
  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>
    }
  }

  return (
    <div className="p-2">
      
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
        {redirect}
        {/* <Footer /> */}
        <p id="transcript">Transcript: {transcript}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      

    </div>
  );
}

export default App;
