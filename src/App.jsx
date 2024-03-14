import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/blogs'
import { useState } from 'react'

function App(){

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const handleAddToBookmark = blog =>{
    const newBookmark  = [...bookmarks,blog];
    setBookmarks(newBookmark)
  }

  const handleMarkAsRead = time =>{
   const newReadingTime = readingTime + time;
   setReadingTime(newReadingTime);
  }

  return (
    <>
    <Header></Header>
    <div className='lg:flex justify-center'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} 
      ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
    </>
  )
}


export default App
