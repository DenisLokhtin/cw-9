import React, {useState} from 'react';
import './ContactsCard.css';
import ModalAll from "../UI/ModalAll/ModalAll";

const ContactsCard = (props) => {
    const showIMG = () => {
        if (props.img !== "") {
            return props.img
        } else {
            return "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-3.jpg";
        }
    }

    const [showModal, setShowModal] = useState(false);

    const modalShown = () => {
        if (showModal === true) {
            return <ModalAll setShowModal={setShowModal(!showModal)}/>
        }
    }

    // const [name, setName] = useState("");
    // const [price, setPrice] = useState("");
    // const [img, setImg] = useState("");
    //
    // const addDish = async () => {
    //     const data = {
    //         name: name,
    //         price: price,
    //         img: img
    //     }
    //     try {
    //         await AxiosApi.get('/' + id + '.json')
    //     } finally {
    //         setName("");
    //         setPrice("");
    //         setImg("");
    //         setShowModal(false)
    //     }
    // }

    return (
        <>
            {modalShown()}
            <div className="card">
                <div className="img">
                    <img className="img" src={showIMG()} alt=""/>
                </div>
                <div className="name">
                    <p>
                        {props.name}
                    </p>
                </div>
            </div>
        </>

    )
};

export default ContactsCard;