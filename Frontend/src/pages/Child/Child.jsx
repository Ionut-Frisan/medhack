import ChildModal from "./ChildModal.jsx";
import {useEffect, useState} from "react";
import TabView from "../../components/TabView/TabView.jsx";
import useRequest from "../../hooks/useRequest.js";
import TabPanel from "../../components/TabView/TabPanel.jsx";
import {useSelector} from "react-redux";
import {getToken} from "../../store/featutres/auth/auth-slice.js";
import ChildAddModal from "./ChildAddModal.jsx";
import MedButton from "../../components/button/MedButton";
import {FaPlus} from "react-icons/all.js";

function Child() {

    const [isModalOpen, setModalState] = useState(false);
    const [isAddModalOpen, setAddModalState] = useState(false);
    const {get} = useRequest();
    const {del} = useRequest();
    const [childrenList, setChildrenList] = useState([]);

    const parentId = useSelector(getToken);
    function updateChild(){
        setModalState(!isModalOpen); 
    }
    function addChild(){
        setAddModalState(!isAddModalOpen);
    }

    useEffect( ()=>{

        async function getChildrenForParent(){
            const res = await get(`/api/parent/children/${parentId}`)
            console.log( res.data)
            setChildrenList(res.data || [])
        }
        if(parentId){
            getChildrenForParent().then();
        }

    }, [parentId])

    const deleteChild = async (event, childId) =>{
        event.preventDefault();
        const res = await del(`/api/child/${childId}`)
    }
    return (
        <div>
            <h1>
                All My Children
            </h1>
            <TabView activeTab={0}>
                {childrenList.map(
                child =>
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
                               onClick={(e)=>deleteChild(e, child.id)}
                    />
                </TabPanel>
                )}
                <TabPanel icon={FaPlus}>
                    <ChildAddModal></ChildAddModal>
                </TabPanel>
            </TabView>
        </div>
    )
}

export default Child;