import '../App.css';
import React, {useEffect, useState} from 'react';
import { send } from 'emailjs-com'; //package emailJS imported

function Mail() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/growth'); //fetch from page growth
        const items = await data.json();
        setItems(items);
    };
    const [toSend, setToSend] = useState({ //state variables to use for db
      username: '',
      Height: '',
      Email: '',
    });
  
    const onSubmit = async (e) => { //method for manipulating form data and send mail
      e.preventDefault();
      send(
        'service_budqe7w', // service id
        'template_w3kjoe8', //template id
        toSend,
        '6BXSWOkApd5RYLe73' //public key
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
    };

  
    const handleChange = (e) => { //method for manipulating form data on change
      setToSend({ ...toSend, [e.target.name]: e.target.value }); //target value of input
    };
  
    return ( //form with two sections
        <><section className='Data'>
            <div class="container-fluid">
                <h1 class="mt-5">Growth Spurt Checker</h1>
                <form className='detailForm' method="POST" action="/addHeight">
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <label for="nameInput">Username</label>
                            <input type="text" name="username"
                                    placeholder='username'
                                    value={toSend.username}
                                    onChange={handleChange}
                                    class="form-control" />
                            <label for="heightInput">User Height</label>
                            <input 
                                     type="text" 
                                     name="Height" 
                                     placeholder='Height'
                                     value={toSend.Height}
                                     onChange={handleChange}
                                    class="form-control"/>
                            <label for="email">Email Address</label>
                            <input 
                                     type="email" 
                                     name="Email" 
                                     placeholder='Email'
                                     value={toSend.Email}
                                     onChange={handleChange}/>
                            <input type="submit" value="Submit to DB" class="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>

                {items.map(item => (
                    <div class="row padding">
                        <div class="alert alert-info rounded-pill" role="alert">
                            <i class="fa fa-user mr-2"></i> <i>({item.user.username}): {item.Height}</i>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <section className='Mail'>
                <div> 
                    <form onSubmit={onSubmit}>
                    <input type="text" name="username"
                        placeholder='username'
                        value={toSend.username}
                        onChange={handleChange}/>
                    <input
                        type='text'
                        name='Height'
                        placeholder='Height'
                        value={toSend.Height}
                        onChange={handleChange} />
                    <input
                        type='text'
                        name='Email'
                        placeholder='Email'
                        value={toSend.Email}
                        onChange={handleChange} />
                        <input type="submit" value="Submit Email" class="btn btn-primary mb-2" />
                    </form>
                </div>
        </section></>  
    );
  }
  export default Mail;