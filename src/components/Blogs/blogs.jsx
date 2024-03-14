import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch("blog.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-[845px]">
            <h2 className="text-3xl font-bold">Blogs: {blogs.length}</h2>
 {
 blogs.map(blog=><Blog 
    key={blog.Id} 
    blog={blog}
    handleAddToBookmark={handleAddToBookmark} 
    handleMarkAsRead={handleMarkAsRead}
 ></Blog>)
 }
        </div>
    );
};

Blogs.prototype={
    handleAddToBookmark:PropTypes.function,
    handleMarkAsRead:PropTypes.function
}

export default Blogs;