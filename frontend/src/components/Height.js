import '../App.css';
import React, {useEffect, useState} from 'react';
import { send } from 'emailjs-com';
//import { Height } from '../../../backend/models/Schemas';

// import {Link} from 'react-router-dom';

/*function Height() {
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

export default Height;*/
    

function Mail() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/growth');
        const items = await data.json();
        setItems(items);
    };
    const [toSend, setToSend] = useState({
      from_name: '',
      to_name: '',
      message: '',
      reply_to: '',
    });
  
    const onSubmit = async (e) => {
      e.preventDefault();
      send(
        'service_budqe7w',
        'template_w3kjoe8',
        toSend,
        '6BXSWOkApd5RYLe73'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
    };

  
    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
  
    return (
        <section className='Mail'>
            <div class="container-fluid">
                <h1 class="mt-5">Growth Spurt Checker</h1>
                <form className='detailForm' method="POST" action="/addHeight" onSubmit={onSubmit}>
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <label for="nameInput">Username</label>
                                <input type="text" name="username" class="form-control" value={toSend.username}
                onChange={handleChange} />
                            <label for="heightInput">User Height</label>
                                <input type="text" name="Height" class="form-control" value={toSend.Height}
                onChange={handleChange}/>
                            <label for="email">Email Address</label>
                                <input type="email" name="email" value={toSend.Email}
                onChange={handleChange}/>
                                <input type="submit" value="Submit" class="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>

                {
                items.map(item => (
                    <div class="row padding">
                        <div class="alert alert-info rounded-pill" role="alert">
                            <i class="fa fa-user mr-2"></i> <i>({item.user.username}): {item.Height}</i>
                        </div>
                    </div>       
                ))
                }
            </div>
        </section>
      /*<div className='Mail'>
        <form onSubmit={onSubmit}>
            <input
                type='text'
                name='username'
                placeholder='username'
                value={toSend.username}
                onChange={handleChange}
            />
            <input
                type='text'
                name='Height'
                placeholder='Height'
                value={toSend.Height}
                onChange={handleChange}
            />
            <input
                type='text'
                name='Email'
                placeholder='Email'
                value={toSend.Email}
                onChange={handleChange}
            />
            <input type='submit' value='Submit'/>
        </form>
      </div>*/
    );
  }
  export default Mail;