// import TabPanel from "../../components/TabView/TabPanel.jsx";
import ChildModal from "./ChildModal.jsx";
import MedButton from "../../components/button/MedButton.jsx";
import {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ChildPanel = ({child}) => {
    const [isModalOpen, setModalState] = useState(false);
    const [isAddModalOpen, setAddModalState] = useState(false);
    
    const deleteChild = async (event, childId) =>{
        event.preventDefault();
        const res = await del(`/api/child/${childId}`)
        console.log( res.data)
    }
    function updateChild(){
        setModalState(!isModalOpen);
    }
    function addChild(){
        setAddModalState(!isAddModalOpen);
    }
    
    return (        
        <TabPanel title={child.firstName} key={child.id}>
            <ChildModal isModalOpen={isModalOpen}
                        closeButtonCallback={() => setModalState(!isModalOpen)}
                        children={child}/>
            <MedButton label={"Modifica copil"}
                       circle={true}
                       variant={"primary"}
                       size={"medium"}
                       onClick={updateChild}
            />
            <MedButton label={"Sterge copil"}
                       circle={true}
                       variant={"primary"}
                       size={"medium"}
                       onClick={(e) => deleteChild(e, child.id)}
            />
        </TabPanel>
    )
}

export default ChildPanel;