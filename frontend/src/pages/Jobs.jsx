import React from 'react'
import { NavLink } from 'react-router-dom'
import JobsCard from '../components/JobsCard'
import './Jobs.css'

export default function Jobs() {
    const no= [0, 1, 2, 3, 4, 5]
    return (
        <>
            <div className="jobspage">
                <div className="jobspage-div">
                    <div>
                    <h3>Employment Opportunities</h3>
                    <hr />
                    </div>
                    <div className="jobs-card-div">
                        {no.map((i)=>{
                            return <div key={i}>
                            <JobsCard i/>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
