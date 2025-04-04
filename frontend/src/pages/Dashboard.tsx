import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard: React.FC = () => {
  const demoBlogs = [
    { id: 1, title: 'Tech Updates', excerpt: ' Exploring the latest innovations in technology...' },
    { id: 2, title: 'My learnings today in React', excerpt: 'Tips, tricks, and best practices I discovered...' },
    { id: 3, title: 'AWS insights', excerpt: ' An in-depth look at cloud computing and serverless architecture...' }
  ]

  return (

    <div className="bg-slate-100 h-screen">
    <div className="h-full p-8 flex flex-col items-center">
      <h4 className="text-4xl mb-4">Welcome to the BlogPlatform!</h4>
      <div className="mb-6 mt-6">
        <Link
          to="/signin"
          className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </Link>
      </div>

      <div className=" mt-6 w-full max-w-3xl">
        <h5 className="text-2xl mb-4"></h5>
        <ul>
          {demoBlogs.map(blog => (
            <li key={blog.id} className="mb-4 p-4 border rounded shadow-sm hover:bg-yellow-100 transition duration-300">
              <h6 className="text-xl">{blog.title}</h6>
              <p className="text-slate-600">{blog.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
         
    </div>
  )
}

export default Dashboard