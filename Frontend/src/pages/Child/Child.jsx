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

function Child() {

    const [isModalOpen, setModalState] = useState(false);
    const [isAddModalOpen, setAddModalState] = useState(false);
    const { get, del } = useRequest();
    const [childrenList, setChildrenList] = useState([]);
    const [childrenVaccines, setChildrenVaccines] = useState([]);

    const parentId = useSelector(getToken);

    function updateChild() {
        setModalState(!isModalOpen);
    }

    function addChild() {
        setAddModalState(!isAddModalOpen);
    }

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

    const deleteChild = async (event, childId) => {
        event.preventDefault();
        const res = await del(`/api/child/${childId}`)
    }
    const getVaccineStatus = (vaccine) => {
        const {
            isDone,
            dateWhenDone,
            childVaccineDate = '',
        } = vaccine;
        if (dateWhenDone) {
            return 'success';
        }
        const recommendedDate = new Date(Date.parse(childVaccineDate));// new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) -1, parseInt(dateParts[2]));
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        if (today < recommendedDate) {
            return 'info';
        }
        return 'error';
    }
    return (
        <div>
            <h1>
                All My Children
            </h1>
            <MedButton label={"Adauga copil"}
                circle={true}
                variant={"primary"}
                size={"medium"}
                onClick={addChild} />
            <Tabs>
                <TabList>
                    {childrenList.map(m => <Tab key={`tab-${m.id}`}>{m.firstName}</Tab>)}
                    <Tab><FaPlus /></Tab>
                </TabList>
                {childrenList.map((m, index) => <TabPanel key={m.id}>
                    <ChildModal isModalOpen={isModalOpen}
                        closeButtonCallback={() => setModalState(!isModalOpen)}
                        children={m} />
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
                    {childrenVaccines?.[index]?.length ? <MedTimeline position={'left'}>
                        {childrenVaccines?.[index]?.map((vaccine) =>
                            <MedTimeline.item
                                title={vaccine.name}
                                status={getVaccineStatus(vaccine)}
                            >
                                <span>asd</span>
                            </MedTimeline.item>
                        )}
                    </MedTimeline> : <></>}
                </TabPanel>)}
                <TabPanel>
                    <ChildAddModal></ChildAddModal>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Child;