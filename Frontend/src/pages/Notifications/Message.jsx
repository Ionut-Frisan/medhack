import "./Message.scss";
import UserImage from "../../components/user-image/UserImage.jsx";
import doctor from "../../assets/images/doctor-img.png";
const Message =(props) => {
    const date = new Date(props.date).toLocaleString();
    return(
        <div className={"messageContainer"}>
            <div>
                <UserImage src={doctor} alt={"Doctor"}/>
            </div>
            <div className={"message"}>
                    <div className={"messageDate"}>
                        {date}
                    </div>
                    <div className={"messageText"}>
                        {props.msg}
                    </div>
            </div>
        </div>
    )
}

export default Message;