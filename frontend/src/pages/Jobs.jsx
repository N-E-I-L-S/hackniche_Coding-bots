import React from 'react'
import { NavLink } from 'react-router-dom'
import JobsCard from '../components/JobsCard'
import './Jobs.css'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Jobs() {

    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('http://localhost:3005/api/jobs/alljobs')
            .then(response => response.json())
            .then(data => setData(data));
    }, [])

    return (
        data && (
            <div className='bg-green-cus-1'>
                <Navbar />
                <div className="jobspage bg-green-cus-1 ">
                    <div className="jobspage-div">
                        <div className="leftdiv">
                            <label htmlFor="search">Search Your Job</label>
                            <input name="search" type="text" />
                        </div>
                        <div className="rightdiv">
                            <div>
                                <h3 className='text-3xl'>Employment Opportunities</h3>
                                <hr />
                            </div>
                            <div className="jobs-card-div">

                                {data.map((i) => {
                                    return <div key={i}>
                                        <JobsCard props={i} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    )
}
