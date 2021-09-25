import React from 'react';
import './Home.css';
import ContactsCard from "../ContactsCard/ContactsCard";
import {useSelector} from "react-redux";

const Home = (props) => {
    const state = useSelector(state => state.contacts)

    const printContacts = () => {
        if (state) {
           return state.map((info) => {
                return <ContactsCard key={info.id} name={info.name} phone={info.phone} img={info.img}/>
            })
        }
        return []
    }

    return (
        <div>
            {printContacts()}
        </div>
    )
};

export default Home;