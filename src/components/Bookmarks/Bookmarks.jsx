import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {

    return (
        <div className="w-[400px] bg-orange-300 p-5 rounded-lg mt-4">
         <div>
        <h3 className='text-4xl'>Reading Time: {readingTime} </h3>    
        </div>   
        <h2 className="text-3xl font-bold w-auto">Bookmarked Blogs: {bookmarks.length}</h2>
        {
  bookmarks.map(bookmark =><Bookmark key={bookmark.Id}
  bookmark={bookmark}
  ></Bookmark> )
        }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;