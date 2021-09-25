import Overlay from "../overlay/Overlay";
import './ModalAll.css'

const ModalAll = (props) => {
    return (
        <div>
            <Overlay/>
            <div onClick={props.setShowModal} className="modal">
                <span onClick={props.setShowModal} className="close">X</span>
                <div className="flex-cont">
                    <div>
                        <img className="img" src="" alt=""/>
                    </div>
                    <div>
                        <h2>Name</h2>
                        <p><a href="tel:+9960553986838">+996 0553-98-68-38</a></p>
                        <p><a href="mailto:denis.lokhtin@gmail.com">denis.lokhtin@gmail.com</a></p>
                </div>
            </div>
            <div className="btns">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
</div>
)
};

export default ModalAll;