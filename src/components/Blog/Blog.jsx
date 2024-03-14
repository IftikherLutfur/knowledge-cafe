import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';

const Blog =({blog,  handleAddToBookmark,handleMarkAsRead}) => {
    const {Title, Cover,Author_img, Author, Date, Reading_time, Hashtags} = blog;
 return (
    <div className='border-2  m-5 rounded-lg border-orange-300 space-y-3'>
        <img className='w-[845px] h-[450px] rounded-t-lg' src={Cover} alt="" />
        <div className='flex justify-between p-4'>
            <div className='flex gap-3'>
                <div>
           <img className='w-14 rounded-full h-14' src={Author_img} alt="" />
                </div>
                <div>
           <p className='text-2xl font-semibold'>{Author}</p> <p className='font-semibold'>{Date}</p>
                </div>
            </div>
            <div className='flex items-center'>
             <p className='opacity-90'>{Reading_time} Min</p>
             <button onClick={()=>handleAddToBookmark(blog)} className='ml-3'><FaBookmark></FaBookmark></button>
            </div>
        </div>
    <h2 className='text-3xl font-semibold px-4'>{Title}</h2>
    <p className='font-bold px-4 pb-5'>
    {
     Hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)   
    }
    </p> 
    <button 
    onClick={() => handleMarkAsRead(Reading_time)}
    className='pb-4 pl-5 underline text-purple-800 font-bold'>Mark As Read</button>
    </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.function,
    handleMarkAsRead:PropTypes.function
}



export default Blog;