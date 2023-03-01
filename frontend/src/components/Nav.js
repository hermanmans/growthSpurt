import React from 'react';
import {Link} from 'react-router-dom';

//create a link that directs user to entry page
function Nav(){
    return(
        <div>
            <h1><Link to='/growth' className="nav-item nav-link">GROWTHSPURT</Link></h1>
        </div>

    );

}

export default Nav;