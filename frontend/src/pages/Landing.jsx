import './Landing.css'
import BgImg from '../components/home-bg-img.jpg'
import { NavLink } from 'react-router-dom'

export default function Landing() {
    return (
        <>
            <div className="landingpage">
                <div className="landingpage-div">
                    <div className="lefttext">
                        <h2 className='landingpage-head text-3xl mb-2 uppercase'>Soldier</h2>
                        <h4 className='text-justify'>The website provides a platform to support the military and their families by providing information on resources and assistance for their career, social, and personal lives. Its goal is to help military personnel live better lives during and after their service to the nation. </h4>
                        <ul className='font-bold capitalize ml-5 my-5'>
                            <li className='my-1'>healthcare</li>
                            <li className='my-1'>employment</li>
                            <li className='my-1'>education</li>
                            <li className='my-1'>forum</li>
                        </ul>
                        <h4 className='mt-2 mb-3'>
                            For connecting with others.
                        </h4>
                        <div className="login-link ">

                        <h3>
                        <NavLink className="td"  to='/home'>Login Here</NavLink>
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
