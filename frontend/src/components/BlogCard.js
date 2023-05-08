import React from 'react'

export const BlogCard = ({ props }) => {
    return (
        <div>
            <div className="card mt-4">
                <div className="card-body ">
                    <h5 className="card-title text-2xl font-bold capitalize">{props.title}</h5>
                    <p className="card-text">{props.content}</p>

                </div>

            </div>


        </div>
    )
}
