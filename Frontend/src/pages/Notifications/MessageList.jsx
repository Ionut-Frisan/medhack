import useRequest from "../../hooks/useRequest.js";
import {useEffect, useState} from "react";
import Message from "./Message.jsx";
import {useSelector} from "react-redux";
import {getToken} from "../../store/featutres/auth/auth-slice.js";

const MessageList = () => {
    const [msg, setMsg] = useState([]);
    const {get} = useRequest();
    const parentId = useSelector(getToken);

    useEffect(() => {
        const getMessagesForParent = async () => {
            const res = await get(`api/message/${parentId}`);
            console.log(res.data);
            setMsg(res.data);
        }

        if(parentId){
            getMessagesForParent().then();
        }
    },[parentId]);

    const msgList = msg.map(m =>
        <Message key={m.id} msg={m.message} date={m.date}/>);

    return(
        <div>
            <div>
                <h1>Mesaje de la doctor:</h1>
            </div>
            <div>
                {msgList}
            </div>
        </div>
    )
}

export default MessageList;