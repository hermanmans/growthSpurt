import React from 'react';
import {Link} from 'react-router-dom';

//create a link that directs user to entry page
function Nav(){
    return(
        <div>
            <Link to='/growth' className="nav-item nav-link">GO</Link>
        </div>

    );

}

export default Nav;