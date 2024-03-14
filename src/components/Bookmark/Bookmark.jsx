import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {Title} = bookmark;
    return (
        <div className='bg-slate-400 mb-4 p-5 rounded-lg mt-3'>
            <h3 className='text-xl font-bold'>{Title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object
}
export default Bookmark;