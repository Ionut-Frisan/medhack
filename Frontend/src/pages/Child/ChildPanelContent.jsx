import MedTimeline from "../../components/timeline/MedTimeline.jsx";
import {useEffect, useMemo, useState} from "react";
import useRequest from "../../hooks/useRequest.js";
import {useBELink} from "../../hooks/useBELink.js";
import Link from "../../components/router/Link.jsx";
import ChildModal from "./ChildModal.jsx";
import MedButton from "../../components/button/MedButton.jsx";
import {FaEdit, FaTimes, FaFileDownload, FaCheck} from "react-icons/fa";
import download from "downloadjs";
import axios from "axios";
import {MdDeleteOutline} from "react-icons/all.js";

const ChildPanelContent = ({childrenVaccines, index, childId, child, forMedic = false, updateVaccineCB}) => {
    const [selectedVaccine, setSelectedVaccine] = useState(childrenVaccines?.[index]?.[0] || {});
    const [vaccineInfo, setVaccineInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setModalState] = useState(false);
    const {get, del} = useRequest();
    const getVaccineStatus = (vaccine) => {
        const {
            isDone,
            dateWhenDone,
            childVaccineDate = '',
        } = vaccine;
        if (dateWhenDone) {
            return 'done';
        }
        const recommendedDate = new Date(Date.parse(childVaccineDate));
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        if (today < recommendedDate) {
            return 'info';
        }
        return 'error';
    }

    const getCurrentVaccineInfo = async () => {
        const {id} = selectedVaccine;
        if (!!id) {
            await get(`api/vaccine/${id}`, {}).then(res => {
                setVaccineInfo(res.data);
                setIsLoading(false);
            });
            this.forceUpdate();
        }
        setIsLoading(false);
    }

    const downloadReport = async () => {
        await axios.get(`api/child_vaccine/generatePdf/${childId}`, {headers: 'application/pdf', responseType: 'blob'})
            .then(response => {
                download(response.data, 'Medical_Vaccine_Report.pdf');
            });
    }

    console.warn({childrenVaccines});

    const linksComputed = useMemo(() => useBELink(vaccineInfo?.linkDoctor), [selectedVaccine]);

    useEffect(() => {
        getCurrentVaccineInfo().then().catch().finally();
    }, [selectedVaccine]);

    useEffect(() => {
        setSelectedVaccine(childrenVaccines?.[index]?.[0] || {});
    }, [childrenVaccines]);

    const deleteChild = async (event, childId) => {
        event.preventDefault();
        const res = await del(`/api/child/${childId}`)
        refreshPage();
    }

    function updateChild() {
        setModalState(!isModalOpen);
    }

    const refreshPage = ()=>{
        window.location.reload();
    }


    if (isLoading) return <span>Se incarca</span>

    return (
        isLoading ? <span>asd</span> :
            <>
                <div className={'child-info-buttons'}>
                    {forMedic
                        ? <>
                            {/*<MedButton label={""}*/}
                            {/*           circle={true}*/}
                            {/*           variant={"plain"}*/}
                            {/*           size={"medium"}*/}
                            {/*           startIcon={FaFileDownload}*/}
                            {/*           onClick={() => downloadReport()}*/}
                            {/*/>*/}
                        </>
                        : <>
                            <ChildModal isModalOpen={isModalOpen}
                                        children={child}
                                        closeButtonCallback={() => setModalState(!isModalOpen)}
                                        />
                            <MedButton label={""}
                                        customClass={'icons'}
                                       circle={true}
                                       variant={"plain"}
                                       size={"medium"}
                                       startIcon={FaEdit}
                                       onClick={updateChild}
                            />
                            <MedButton label={""}
                                        customClass={'icons'}
                                       circle={true}
                                       variant={"plain"}
                                       size={"medium"}
                                       startIcon={FaFileDownload}
                                       onClick={() => downloadReport()}
                            />
                            {/*<MedButton label={""}*/}
                            {/*           customClass={'icons'}*/}
                            {/*           circle={true}*/}
                            {/*           variant={"danger"}*/}
                            {/*           size={"medium"}*/}
                            {/*           startIcon={FaTimes}*/}
                            {/*           onClick={(e) => deleteChild(e, child.id)}*/}
                            {/*/>*/}
                        </>}
                </div>
                {childrenVaccines?.[index]?.length ?
                    <MedTimeline position={'left'} className={'timeline'}>
                        {childrenVaccines?.[index]?.map((vaccine) =>
                            <MedTimeline.item
                                title={vaccine.abbreviation || vaccine.name || ''}
                                status={getVaccineStatus(vaccine)}
                                onTimelineElementClick={() => setSelectedVaccine(vaccine)}
                                key={`${index}-${vaccine.id}`}
                                style={{position: 'relative'}}
                            >
                                <br/>
                                <span><b>Data recomandata vaccin: </b>{vaccine.childVaccineDate}</span>
                                {vaccine.isDone && <span><b>Efectuat la:</b>{vaccine.dateWhenDone}</span>}
                                {!forMedic ? <></> : !vaccine.isDone
                                    ?
                                    <MedButton customClass={'mark-as-done-btn'} 
                                                startIcon={FaCheck} 
                                                variant={'info'}
                                               outlined={true} 
                                               title={'Marcheaza ca facut'} 
                                               onClick={(e) => {
                                                    e?.stopPropagation?.();
                                                    updateVaccineCB({id: vaccine.childVaccineId, isDone: true})
                                                }}/>
                                    : <MedButton label={'Administrat'} disabled={true} variant={'success'} customClass={'mark-as-done-btn'}></MedButton>
                                }
                            </MedTimeline.item>
                        )}
                    </MedTimeline> : <></>
                }
                <div className={'vaccine-info-fragment'}>
                    <h2>{vaccineInfo.name + (vaccineInfo?.abbreviation ? ` (${vaccineInfo.abbreviation})` : '')}</h2>
                    <p><b>Efectuat: </b>{selectedVaccine?.dateWhenDone || '-'}</p>
                    <p><b>Comentarii: </b>{vaccineInfo?.comments || '-'}</p>
                    <p><b>Obligatoriu: </b>{vaccineInfo?.isMandatory ? 'Da' : 'Nu' || '-'}</p>
                    <p><b>Linkuri externe: </b>{linksComputed.map((linkObj, index) => {
                        return linkObj.url ? <><Link to={linkObj.url} key={`external-link-${index}`}
                                                     _blank={true}>{linkObj.label || 'Link extern'}</Link> {index !== linksComputed.length - 1 ?
                            <b> | </b> : <></>} </> : <span>-</span>
                    })}</p>
                    <p><b>Descriere: </b>{vaccineInfo?.description || '-'}</p>
                </div>
            </>
    )
}

export default ChildPanelContent;