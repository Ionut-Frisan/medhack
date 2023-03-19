import {useEffect, useState} from "react";
import useRequest from "../../hooks/useRequest.js";

const ScheduleItem = (props) => {
    const [name, setName] = useState();
    const {get} = useRequest();

    useEffect(() => {
        const getChildName = async () => {
            const res = await get(`api/child_vaccine/getChild/${props.childVaccineId}`);
            const tmpName = res.data.firstName + res.data.lastName;
            setName(tmpName);
        }
        getChildName().then();
    }, [])

    return (
      <div>
          <div>
              {props.abbreviation}
          </div>
          <div>
              {props.childVaccineDate}
              {name}
          </div>
          <button>Send Message</button>
      </div>
    );
}

export default ScheduleItem;