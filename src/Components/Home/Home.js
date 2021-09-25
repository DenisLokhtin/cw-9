import React from 'react';
import './Home.css';
import ContactsCard from "../ContactsCard/ContactsCard";

const Home = (props) => (
    <div>
        <ContactsCard/>
        <ContactsCard/>
        <ContactsCard/>
        <ContactsCard/>
    </div>
);

export default Home;