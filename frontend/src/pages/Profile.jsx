import { useEffect, useRef, useState } from 'react'
import UserAuth from '../context/AuthContext'
import { Navigate } from 'react-router';
import './Profile.css'

export default function Profile() {
    const { user, profilename, setProfilename, hometown, setHometown, age, setAge, force, setForce } = UserAuth();
    const pname = useRef(profilename)
    const pforce = useRef(force)
    const page = useRef(age);
    const ptown = useRef(hometown);

    const [edit, setEdit] = useState(0);

    function changeprofilename() {
        setProfilename(pname.current.value)
        setForce(pforce.current.value)
        setAge(page.current.value)
        setHometown(ptown.current.value)
    }

    function saveprofile() {
        console.log(pname.current.value)
        setTimeout(PostRequest, 3000);
    }

    function PostRequest() {
        fetch('http://localhost:3001/api/user/solBio'
            , {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    email: user.email,
                    Name: pname.current.value,
                    Force: pforce.current.value,
                    Age: page.current.value,
                    Home_Town: ptown.current.value,
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
    }
    console.log(edit)


    return (
        <>
            <div className="profilepage">
                <div className="profilepage-div">

                    <div className="profile">
                        <div className="non-editable">

                            <h2>Your Credentials</h2>
                            <hr />
                            <div className="profile-details">

                                <button onClick={() => setEdit(1)}>Edit Profile</button>
                                <p>
                                    Email ID:{user.email}
                                </p>
                            </div>
                            <div className="editable">

                                <div className='profile-block'>
                                    Name:
                                    {
                                        edit === 0 ?
                                            <div>{pname.current.value}</div>
                                            :
                                            <div>
                                                <input type="text" ref={pname} />
                                                {/* <button onClick={changeprofilename}>Change</button> */}
                                            </div>
                                    }
                                </div>

                                <div className='profile-block'>

                                    Force:
                                    {
                                        edit === 0 ?
                                            <div>{pforce.current.value}</div>
                                            :
                                            <div>
                                                <input type="text" ref={pforce} />
                                                {/* <button onClick={changeprofilename}>Change</button> */}
                                            </div>
                                    }
                                </div>
                                <div className='profile-block'>

                                    Age:
                                    {
                                        edit === 0 ?
                                            <div>{page.current.value}</div>
                                            :
                                            <div>
                                                <input type="number" ref={page} />
                                                {/* <button onClick={changeprofilename}>Change</button> */}
                                            </div>
                                    }
                                </div>

                                <div className='profile-block'>

                                    Town:
                                    {
                                        edit === 0 ?
                                            <div>{ptown.current.value}</div>
                                            :
                                            <div>
                                                <input type="text" ref={ptown} />
                                                {/* <button onClick={changeprofilename}>Change</button> */}
                                            </div>
                                    }
                                </div>
                                <br/>

                                <button onClick={saveprofile}>Save Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
