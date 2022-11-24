import '../App.css';
import React, {useEffect, useState} from 'react';

// import {Link} from 'react-router-dom';

function Height() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/growth');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section className='userData'>
            <div class="container-fluid">
                <h1 class="mt-5">Growth Spurt Checker</h1>
                <form className='detailForm' method="POST" action="/addHeight">
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <label for="nameInput">Username</label>
                                <input type="text" name="nameInput" class="form-control" />
                            <label for="heightInput">User Height</label>
                                <input type="text" name="heightInput" class="form-control" />
                            <label for="email">Email Address</label>
                                <input type="email" name="email"/>
                                <input type="submit" value="Send" class="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>

                {
                items.map(item => (
                    <div class="row padding">
                        <div class="alert alert-info rounded-pill" role="alert">
                            <i class="fa fa-user mr-2"></i> <i>({item.user.username}): {item.height}</i>
                        </div>
                    </div>       
                ))
                }
            </div>
        </section>
    );
}

export default Height;