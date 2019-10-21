import React from 'react'
import {Link} from 'react-router-dom'
export default (props) => {
    return(
        <ul>
        {
            props.blogs.map(blog => <li key={blog.id}><Link to={`/blogs/${blog.id}`} >{blog.blog}</Link></li> )
        }
        </ul>
    )
}