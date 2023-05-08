import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Axios from 'axios';
import { BlogCard } from '../components/BlogCard';

export default function Blog() {

  //insert blog into mongoDB
  const [blog, setBlog] = useState({ title: "", content: "" })
  const handleSubmit = (e) => {
    console.log(blog);
    e.preventDefault();
    Axios.post("http://localhost:3005/api/blogs/insertBlog", { blog })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  //fetch blogs from mongoDB
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3005/api/blogs/allblogs')
      .then(response => response.json())
      .then(data => setData(data));
    console.log(data);
  }, [])

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <h1 className="text-center text-3xl mt-3">Latest Blogs</h1>
          <div className="">

            {data && (
              <div>
                {data.map((i) => {
                  return (
                    <BlogCard props={i} />
                  )
                }
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <h1 className="text-center text-3xl mt-3 capitalize my-5">Write your own adventure !</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control"
                  onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                  value={blog.title}
                />
              </div>
              <div className="form-group">

                <label htmlFor="content">Content</label>
                <textarea className="form-control" rows="5"
                  onChange={(e) => setBlog({ ...blog, content: e.target.value })}
                  value={blog.content}
                ></textarea>
              </div>


              <button type="submit" className="btn btn-primary text-black mt-2">Submit</button>
            </form>
          </div>

        </div>
      </div>


    </>
  )
}
// fjdf
//dASD
