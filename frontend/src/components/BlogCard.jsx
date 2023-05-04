
import React from 'react'

const BlogCard = (props) => {
    return (
        <div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">

                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {props.title}
                    </h3>
                   
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        {props.date}
                    </p>

                    <h5 className="mt-1 max-w-2xl text-sm text-gray-500">
                        {props.content}
                    </h5>

                </div>

            </div>
        </div>
    )
}

export default BlogCard
