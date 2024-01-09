import DownArrow from "../components/DownArrow";
import * as Constants from "../assets/Constants";


export default{
    title: 'Icons/DownArrow',
    component: DownArrow,
    argTypes:{color:{control:'color'}, background: {control:'color'},size:{control:'radio',options:['small','large']}}
}
const Template = args => <DownArrow  {...args}/>
export const small = Template.bind({});
small.args = {
    color:'red',
    background: 'orange'
}


export const east = Template.bind({})
east.args ={
    direction: "east"
}

export const largeWest = Template.bind({})
largeWest.args ={
    direction: "west",
    size: 'large'
}

