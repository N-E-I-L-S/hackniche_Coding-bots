import './Landing.css'
import BgImg from '../components/home-bg-img.jpg'
import { NavLink } from 'react-router-dom'

export default function Landing() {
    return (
        <>
            <div className="landingpage">
                <div className="landingpage-div">
                    <div className="lefttext">
                        <h2 className='landingpage-head'>Soldier</h2>
                        <h4>The website provides a platform to support the military and their families by providing information on resources and assistance for their career, social, and personal lives. Its goal is to help military personnel live better lives during and after their service to the nation. </h4>
                        <ul>
                            <li>healthcare</li>
                            <li>employment</li>
                            <li>education</li>
                            <li>forum</li>
                        </ul>
                        <h4>
                        for connecting with others.
                        </h4>
                        <div className="login-link">

                        <h3>
                        <NavLink className="td" onClick={{}} to='/login'>Login Here</NavLink>
                        </h3>
                        </div>
                    </div>
                    <div className="right-img">
                        <img className="bg-img" src={BgImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
