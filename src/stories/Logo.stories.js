import Logo from "../components/Logo";
import * as constants from "../assets/Constants";
import { bool } from "prop-types";
export default{
    title: 'Components/Logo',
    component: Logo,
    argTypes: {arrow: {control: 'boolean'}}

}

const Template = args => <Logo  {...args}/>
export const basic = Template.bind({});
