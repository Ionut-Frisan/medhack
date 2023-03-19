import ChildModal from "./ChildModal.jsx";
import { useEffect, useState } from "react";
import TabView from "../../components/TabView/TabView.jsx";
import useRequest from "../../hooks/useRequest.js";
// import TabPanel from "../../components/TabView/TabPanel.jsx";
import { useSelector } from "react-redux";
import { getToken } from "../../store/featutres/auth/auth-slice.js";
import ChildAddModal from "./ChildAddModal.jsx";
import MedButton from "../../components/button/MedButton";
import ChildPanel from "./ChildPanel.jsx";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaPlus } from 'react-icons/fa'
import MedTimeline from "../../components/timeline/MedTimeline.jsx";
import ChildPanelContent from "./ChildPanelContent.jsx";
import './ChildPage.scss';

function Child() {
    const [isAddModalOpen, setAddModalState] = useState(false);
    const { get, del } = useRequest();
    const [childrenList, setChildrenList] = useState([]);
    const [childrenVaccines, setChildrenVaccines] = useState([]);

    const parentId = useSelector(getToken);

    useEffect(() => {
        async function getChildrenForParent() {
            const res = await get(`/api/parent/children/${parentId}`)
            setChildrenList(res.data || [])
        }
        if (parentId) {
            getChildrenForParent().then();
        }

    }, [parentId])
    useEffect(() => {
        async function getVaccineListForChild(childId) {
            return get(`/api/child_vaccine/${childId}`)
        }
        let promises = [];
        childrenList.forEach((childd) => {
            if (!!childd.id) promises.push(getVaccineListForChild(childd.id));
        })
        Promise.all(promises).then((values) => {
            setChildrenVaccines(values.map(val => val.data || []));
        });
    }, [childrenList])

    // const deleteChild = async (event, childId) => {
    //     event.preventDefault();
    //     const res = await del(`/api/child/${childId}`)
    // }
    return (
        <div className={'children-page'}>
            <h1>
                All My Children
            </h1>
            <Tabs>
                <TabList>
                    {childrenList.map(m => <Tab key={`tab-${m.id}`}>{m.firstName}</Tab>)}
                    <Tab><FaPlus /></Tab>
                </TabList>
                {childrenList.map((m, index) => <TabPanel key={m.id} style={{position: 'relative'}}>
                <div className={'child-vaccine-info-wrapper'}>
                    <ChildPanelContent childrenVaccines={childrenVaccines} index={index} childId={m.id} child={m}/>
                </div>
                </TabPanel>)}
                <TabPanel>
                    <ChildAddModal parentId={parentId}></ChildAddModal>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Child;