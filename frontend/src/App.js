import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
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
import { useNavigate } from 'react-router-dom';
import Jobs from './pages/Jobs';
import Blog from './pages/Blog';
import { Community } from './pages/Community';


function App() {
  const navigate = useNavigate();


  const commands = [
    {
      command: ["Open *"],
      callback: redirectPage => {
        setRedirectUrl(redirectPage)
      }
    },
  ]
  let { transcript } = useSpeechRecognition({ commands })
  const [redirectUrl, setRedirectUrl] = useState("0")
  const [redirect, setRedirect] = useState(" ")

  const pages = ["home", "jobs", "pension", "profile", "community", 'blog']
  const urls = {
    home: "/home",
    jobs: "/jobs",
    pension: "/pension",
    profile: "/profile",
    community : "/community",
    blog : "/blog"

  }

  useEffect(() => {
    SpeechRecognition.startListening();
    if (pages.includes(transcript)) {
      navigate(urls[transcript])
    }

  }, [transcript])

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div className="">

      {/* <Navbar /> */}
      <div className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Landing />} />
          {/* <Route path='/home' element={<ProtectedRoute page={<Home />} />} /> */}
          <Route path="/home" element={<Home />}></Route>
          <Route path="/pension" element={<Pension />}></Route>
          <Route path="/login" element={<Login />}/>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/forgotpass' element={<ForgotPassword />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/jobs' element={<Jobs />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/community' element={<Community />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
      {redirect}
      {/* <Footer /> */}
      {/* <p id="transcript">Transcript: {transcript}</p> */}
      {/* <button onClick={SpeechRecognition.startListening}>Start</button> */}
      {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
    </div>
  );
}

export default App;
