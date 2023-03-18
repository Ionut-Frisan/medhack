import ChildModal from "./ChildModal.jsx";
import {useState} from "react";
import TabView from "../../components/TabView/TabView.jsx";
import axios from "axios";

function Child() {

    const [isModalOpen, setModalState] = useState(false);

    function updateChild(){
        setModalState(!isModalOpen);
    }

    function getChildrenForParent(parentId){

    }
    return (
        <div>
            <h1>
                Child
            </h1>
            <TabView/>
            <ChildModal isModalOpen={isModalOpen}
                        closeButtonCallback={() => setModalState(!isModalOpen)}/>
            <button onClick={updateChild}> Update Child </button>

        </div>
    )
}

export default Child;