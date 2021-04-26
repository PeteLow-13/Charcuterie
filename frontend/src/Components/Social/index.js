import React from 'react';
import './style.css';

const Social = () => {
    return (
        <div className='social-div'>
            <h2 className='text-center'>Check us out on Social</h2>
            <div>
            <a target='blank' href='https://www.facebook.com/LD-Charcuterie-102830505160367' alt='facebook'><i class="fab fa-facebook"></i></a>
            <a target='blank' href='https://www.instagram.com/landdcharcuterie/' alt='instagram'><i class="fab fa-instagram"></i></a>
            <a target='blank' href='https://www.yelp.com/search?find_loc=Seattle%2C+WA' alt='yelp'><i class="fab fa-yelp"></i></a>
            <a target='blank' href='https://twitter.com/DcharcuterieL' alt='twitter'><i class="fab fa-twitter-square"></i></a>
            </div>
        </div>
    )
}

export default Social
