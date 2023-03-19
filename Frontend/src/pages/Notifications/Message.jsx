import "./Message.scss";

const Message =(props) => {
    return(
        <div className={"message"}>
            {props.msg}
            {props.date}
        </div>
    )
}

export default Message;