import {useEffect, useRef, useState} from "react";
import useRequest from "../../hooks/useRequest.js";
import {useSelector} from "react-redux";
import {getToken} from "../../store/featutres/auth/auth-slice.js";

const ScheduleItem = (props) => {
    const [sendMessage, setSendMessage] = useState(false);
    const [name, setName] = useState();
    const [parentId, setParentId] = useState();
    const {get, post} = useRequest();
    const doctorId = useSelector(getToken);

    const textBoxText = useRef();

    useEffect(() => {
        const getChildName = async () => {
            const res = await get(`api/child_vaccine/getChild/${props.childVaccineId}`);
            const tmpName = res.data.firstName + res.data.lastName;
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
                message:textBoxText.current.value
            }
            const res = await post('api/message/add', {data: body});
            console.log(res.data);
        }

        sendMsg().then(textBoxText.current.value = '');
    }

    return (
      <div>
          <div>
              {props.abbreviation}
          </div>
          <div>
              {props.childVaccineDate}
              {name}
          </div>
          <button onClick={() => setSendMessage(!sendMessage)}>Contact Parent</button>
          {sendMessage &&
              <div>
                  <textarea ref={textBoxText}></textarea>
                  <button onClick={sendMessageToParent}>Send</button>
              </div>
          }
      </div>
    );
}

export default ScheduleItem;