import { useEffect, useState } from "react";

const Blogs = () => {
    const [blog, setBlog] = useState([]);

    useEffect(()=>{
        fetch("blog.json")
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Blogs;