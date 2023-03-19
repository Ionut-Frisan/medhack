import {useEffect, useRef, useState} from "react";
import useRequest from "../../hooks/useRequest.js";
import {useSelector} from "react-redux";
import {getToken} from "../../store/featutres/auth/auth-slice.js";
import "./Schedule.scss";
import CardBlue from "../../components/card-blue/CardBlue";
import MedButton from "../../components/button/MedButton";

const ScheduleItem = (props) => {
    const [sendMessage, setSendMessage] = useState(false);
    const [name, setName] = useState();
    const [parentId, setParentId] = useState();
    const [childId, setChildId] = useState();
    const {get, post} = useRequest();
    const doctorId = useSelector(getToken);

    const textBoxText = useRef();

    useEffect(() => {
        const getChildName = async () => {
            const res = await get(`api/child_vaccine/getChild/${props.childVaccineId}`);
            const tmpName = res.data.firstName +" "+ res.data.lastName;
            const id = res.data.id
            setChildId(id);
            setName(tmpName);
            setParentId(res.data.parentId);
        }
        getChildName().then();
    }, [])

    const sendMessageToParent = () => {
        console.log(textBoxText.current.value);
        console.log("Sending message to " + parentId);

        const sendMsg = async () => {
            const body = {
                doctorId,
                parentId,
                message:textBoxText.current.value,
                date: new Date()
            }
            const res = await post('api/message/add', {data: body});
            console.log(res.data);
        }

        sendMsg().then(textBoxText.current.value = '');
    }

    const sendMemoEmailParent = () =>{
        const sendMail = async () =>{
            const body = {
                doctorId,
                parentId,
                childId
            }
            console.log(body)
            const res = await post('api/parent/sendMemo', {data: body});
        }
        sendMail().then();
    }
    return (
        <div className={"schedule-item"} >
            <CardBlue>
                <div className={"vax-name"}>
                    {props.abbreviation}
                </div>
                <div className={"detalii"}>
                    {props.childVaccineDate}
                </div>
                <div className={"detalii"}>
                    {name}
                </div>
                <MedButton label={"Conactează părinte"} onClick={() => setSendMessage(!sendMessage)}>Contact Parent</MedButton>
                <MedButton label={"Trimite email"} onClick={sendMemoEmailParent}>Email Parent</MedButton>
                {sendMessage &&
                <div className={"mesaj"}>
                    <textarea  ref={textBoxText} rows="4" cols="50"></textarea>
                    <MedButton label={"Trimite mesaj"} onClick={sendMessageToParent}>Send</MedButton>
                </div>
                }
            </CardBlue>
        </div>
    );
}

export default ScheduleItem;