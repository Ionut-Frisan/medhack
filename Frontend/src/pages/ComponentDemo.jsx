import {useState} from "react";
import MedButton from "../components/button/MedButton.jsx";
import TabView from "../components/TabView/TabView.jsx";
import { variants, sizes } from "../utils/constants.js";
import { FaMedrt } from "react-icons/fa";
import TabPanel from "../components/TabView/TabPanel.jsx";
import MedInput from "../components/input/MedInput.jsx";
import MedModal from "../components/modal/MedModal.jsx";
import { Carousel } from 'react-responsive-carousel';

export const componentDemo = () => {
  const [isModalOpen, setModalState] = useState(true);

  return (
    <>
      <div>
        {variants.map((variant) => {
          return (
            <MedButton
              variant={variant}
              rounded={false}
              label={variant}
            ></MedButton>
          );
        })}
      </div>
      <div>
        {variants.map((variant) => {
          return <MedButton variant={variant} label={variant}></MedButton>;
        })}
      </div>
      <div>
        {variants.map((variant) => {
          return (
            <MedButton variant={variant} disabled label={variant}></MedButton>
          );
        })}
      </div>
      <div>
        {variants.map((variant) => {
          return <MedButton variant={variant} endIcon={FaMedrt}></MedButton>;
        })}
      </div>
      <div>
        {sizes.map((size) => {
          return variants.map((variant) => {
            return (
              <MedButton
                variant={variant}
                endIcon={FaMedrt}
                size={size}
                loading
              ></MedButton>
            );
          });
        })}
      </div>
      <TabView activeTab={"asd"}>
        <TabPanel title={"First tab"}> Yoyoyo </TabPanel>
        <TabPanel title={"Second tab"} />
        <TabPanel title={"Second tab"} />
      </TabView>
      <MedInput
        onChange={(e) => console.log(e.target.value)}
        startIcon={FaMedrt}
        endIcon={FaMedrt}
        placeholder={"Placeholder"}
      ></MedInput>
      <MedInput
        onChange={(e) => console.log(e.target.value)}
        startIcon={FaMedrt}
        endIcon={FaMedrt}
        placeholder={"Placeholder"}
      ></MedInput>
      <MedInput
        onChange={(e) => console.log(e.target.value)}
        startIcon={FaMedrt}
        endIcon={FaMedrt}
        placeholder={"Placeholder"}
        size={"small"}
        rounded
        errorMessage={'This is an error message'}
      ></MedInput>
      <MedInput
        onChange={(e) => console.log(e.target.value)}
        startIcon={FaMedrt}
        endIcon={FaMedrt}
        rounded
        placeholder={"Placeholder"}
        size={"large"}
        errorMessage={'This is an error message'}
      ></MedInput>
      <MedInput
        onChange={(e) => console.log(e.target.value)}
        rounded
        placeholder={"Placeholder"}
        size={"large"}
        label={"ana are mere"}
        errorMessage={'This is an error message'}
      ></MedInput>
      <MedInput
        onChange={(e) => console.log(e.target.value)}
        rounded
        placeholder={"Placeholder"}
        label={"Label small"}
        labelPosition={"float"}
        size={"small"}
        errorMessage={'This is an error message'}
      ></MedInput>
      <MedInput
        onChange={(e) => console.log(e.target.value)}
        rounded
        placeholder={"Placeholder"}
        label={"Label medium"}
        labelPosition={"float"}
        errorMessage={'This is an error message'}
      ></MedInput>
      <MedInput
        onChange={(e) => console.log(e.target.value)}
        rounded
        placeholder={"Placeholder"}
        label={"Label large"}
        labelPosition={"float"}
        size={"large"}
        errorMessage={'This is an error message'}
      ></MedInput>
      <MedInput
        onChange={(e) => console.log(e.target.value)}
        rounded
        placeholder={"Placeholder"}
        label={"Label small"}
        labelPosition={"float"}
        size={"small"}
        startIcon={FaMedrt}
        errorMessage={'This is an error message'}
      ></MedInput>
      <MedInput
        startIcon={FaMedrt}
        onChange={(e) => console.log(e.target.value)}
        rounded
        placeholder={"Placeholder"}
        label={"Label medium"}
        labelPosition={"float"}
      ></MedInput>
      <MedInput
        startIcon={FaMedrt}
        onChange={(e) => console.log(e.target.value)}
        rounded
        placeholder={"Placeholder"}
        label={"Label large"}
        labelPosition={"float"}
        size={"large"}
      ></MedInput>
        <div
            style={{width: '20%'}}
        >
            <Carousel
                showStatus={false}
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
            >
                <div style={{width: '200px', height: '100px', margin: 'auto'}}><MedButton label={'test'}></MedButton></div>
                <div><MedButton label={'test'}></MedButton></div>
            </Carousel>
        </div>
        <MedModal
            isOpen={isModalOpen}
            title={'Title test'}
            closeButtonCallback={() => setModalState(!isModalOpen)}
        >
            <div>
                Ana are mere
            </div>
        </MedModal>
    </>
  );
};

export default componentDemo;
