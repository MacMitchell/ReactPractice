import Banner from "../components/Banner";
import * as constants from "../assets/Constants";
import { bool } from "prop-types";
export default{
    title: 'Components/Banner',
    component: Banner,
    argTypes: {arrow: {control: 'boolean'}}

}

const Template = args => <Banner  {...args}/>
export const blank = Template.bind({});
blank.args = {
    imgPath: ''
}


export const fullImg = Template.bind({});
fullImg.args = {
    imgPath: `${constants.SPLASH_URL}/Aatrox_0.jpg`
}

export const downArrow = Template.bind({});
downArrow.args = {
    imgPath: `${constants.SPLASH_URL}/Anivia_2.jpg`,
    arrow:true
}

export const smallBanner = Template.bind({});
smallBanner.args = {
    imgPath: `${constants.SPLASH_URL}/Aatrox_3.jpg`,
    size:'small'
}
