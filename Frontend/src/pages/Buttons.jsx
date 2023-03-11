import MedButton from "../components/button/MedButton.jsx";
import TabView from "../components/TabView/TabView.jsx";
import {variants, sizes} from "../utils/constants.js";
import { FaMedrt } from 'react-icons/fa';
import TabPanel from "../components/TabView/TabPanel.jsx";

export const buttons = () => {
    return (
        <>
            <div>
                {variants.map((variant) => {
                    return <MedButton variant={variant} rounded={false} label={variant}></MedButton>
                })}
            </div>
            <div>
                {variants.map((variant) => {
                    return <MedButton variant={variant} label={variant}></MedButton>
                })}
            </div>
            <div>
                {variants.map((variant) => {
                    return <MedButton variant={variant} disabled label={variant}></MedButton>
                })}
            </div>
            <div>
                {variants.map((variant) => {
                    return <MedButton variant={variant} endIcon={FaMedrt}></MedButton>
                })}
            </div>
            <div>
                {sizes.map((size) => {
                    return variants.map((variant) => {
                        return <MedButton variant={variant} endIcon={FaMedrt} size={size}></MedButton>
                    })
                })}
            </div>
            <TabView activeTab={'asd'}>
                <TabPanel title={'First tab'}> Yoyoyo </TabPanel>
                <TabPanel title={'Second tab'}/>
                <TabPanel title={'Second tab'}/>
            </TabView>
        </>
    )
}

export default buttons;