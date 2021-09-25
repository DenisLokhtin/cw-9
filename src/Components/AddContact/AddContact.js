import React from 'react';
import './AddContact.css'

const AddContact = (props) => {
    const backToHome = () => {
        props.history.push('/')
    }

    return (
        <div className="addContact">
            <h2>Add new Contact</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" placeholder="Name"/>
                </div>

                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input id="phone" type="text" placeholder="Phone"/>

                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="text" placeholder="Email"/>
                </div>

                <div>
                    <label htmlFor="photo">Photo:</label>
                    <input id="photo" type="text" placeholder="Photo"/>
                </div>

                <div>
                    <label>Photo preview:</label>
                    <img className="img"
                         src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-3.jpg" alt="img"/>
                </div>

                <div className="btns">
                    <button>Save</button>
                    <button onClick={backToHome}>Back to Contacts</button>
                </div>
            </form>
        </div>
    )
};

export default AddContact;