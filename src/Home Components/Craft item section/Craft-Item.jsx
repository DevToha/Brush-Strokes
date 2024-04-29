import { Link } from 'react-router-dom';
import './craft.css'
import PropTypes from 'prop-types';

const CraftItem = ({ item }) => {

    const { _id,itemName, price, photoURL } = item

    return (
        <div>
            <div className="card15 mb-10 bg-[#fff4e4] cursor-pointer">
                <div className='imageBorder w-[] h-[345px] p-5 bg-white'>
                    <img className='h-[245px] w-[340px] ' src={photoURL} alt="nature-pic-CSSnippets" />
                </div>
                <h1 className='mt-10'>{itemName}</h1>
                <p className='text-3xl my-5 font-bold'>$ {price}</p>

                
                <Link to={`/craftDetails/${_id}`}>
                    <div>
                        <a href="#" className="card15-btn">
                            VIEW DETAILS
                        </a>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CraftItem;


CraftItem.propTypes = {
    item: PropTypes.object
}