import './Landing.css'
import BgImg from '../components/home-bg-img.jpg'

export default function Landing() {
    return (
        <>
            <div className="landingpage">
                <div className="landingpage-div">
                    <div className="lefttext">
                        <h2 className='landingpage-head'>Soldier</h2>
                        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis ducimus architecto possimus. Odit, odio.</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                    </div>
                    <div className="right-img">
                        <img className="bg-img" src={BgImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
