import MedButton from "../components/button/MedButton.jsx";
import TabView from "../components/TabView/TabView.jsx";
import { variants, sizes } from "../utils/constants.js";
import { FaMedrt } from "react-icons/fa";
import TabPanel from "../components/TabView/TabPanel.jsx";
import MedInput from "../components/input/MedInput.jsx";

export const componentDemo = () => {
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
      ></MedInput>
      <MedInput
        onChange={(e) => console.log(e.target.value)}
        startIcon={FaMedrt}
        endIcon={FaMedrt}
        rounded
        placeholder={"Placeholder"}
        size={"large"}
      ></MedInput>
      <MedInput
        onChange={(e) => console.log(e.target.value)}
        rounded
        placeholder={"Placeholder"}
        size={"large"}
        label={"ana are mere"}
      ></MedInput>
      <MedInput
        onChange={(e) => console.log(e.target.value)}
        rounded
        placeholder={"Placeholder"}
        label={"asd"}
        labelPosition={"float"}
        size={"small"}
      ></MedInput>
      <MedInput
        onChange={(e) => console.log(e.target.value)}
        rounded
        placeholder={"Placeholder"}
        label={"asd"}
        labelPosition={"float"}
      ></MedInput>
      <MedInput
        onChange={(e) => console.log(e.target.value)}
        rounded
        placeholder={"Placeholder"}
        label={"asd"}
        labelPosition={"float"}
        size={"large"}
      ></MedInput>
      <MedInput
        onChange={(e) => console.log(e.target.value)}
        rounded
        placeholder={"Placeholder"}
        label={"asd"}
        labelPosition={"float"}
        size={"small"}
        startIcon={FaMedrt}
      ></MedInput>
      <MedInput
        startIcon={FaMedrt}
        onChange={(e) => console.log(e.target.value)}
        rounded
        placeholder={"Placeholder"}
        label={"asd"}
        labelPosition={"float"}
      ></MedInput>
      <MedInput
        startIcon={FaMedrt}
        onChange={(e) => console.log(e.target.value)}
        rounded
        placeholder={"Placeholder"}
        label={"asd"}
        labelPosition={"float"}
        size={"large"}
      ></MedInput>
    </>
  );
};

export default componentDemo;
