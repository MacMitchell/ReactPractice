import Gallary from "../components/Gallary3D";
import AbilityIcon from "../components/AbilityIcon";
import * as Constants from "../assets/Constants";
import { number } from "prop-types";


export default {
    title: 'Components/3DGallary',
    component: Gallary,
    argTypes: { numberOfChildren: { type: number, defaultValue: 5 } }
}


let imagePath = `${Constants.LOADING_URL}/MasterYi_1.jpg`
function active(input){
    console.log(input);
}
let counter = 0;

const Template = ({ numberOfChildren, ...args }) => (<Gallary  {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
        <AbilityIcon  key={counter++} imagePath={imagePath} size='portrait' />
    ))}
</Gallary>
)


export const basic = Template.bind({});
basic.args = {
    
}


export const printActive = Template.bind({});
printActive.args = {
    setActive: active
}

