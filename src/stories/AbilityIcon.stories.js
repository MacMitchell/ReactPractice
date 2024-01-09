import AbilityIcon from "../components/AbilityIcon";
import * as Constants from "../assets/Constants";


export default{
    title: 'championCard/AbilityIcon',
    component: AbilityIcon,
    argTypes: {onClick: {action: 'handleClick', control: false}, size: {options: ['small', 'large', 'portrait'],control: 'radio'} },
}

function basicFunction(){
    console.log('Clicked!');
}
const Template = args => <AbilityIcon  {...args}/>
export const small = Template.bind({});
small.args = {
    imagePath: `${Constants.SPLASH_URL}/Aatrox_0.jpg`,
    size: 'small',
    onClick: basicFunction,
}


export const large = Template.bind({});
large.args = {
    imagePath: `${Constants.SPLASH_URL}/Aatrox_1.jpg`,
    size: 'large',
    onClick: basicFunction
}

export const portrait = Template.bind({});
portrait.args = {
    imagePath: `${Constants.LOADING_URL}/Aatrox_2.jpg`,
    size: 'portrait'
}