import Stats from "../components/Stats";
import * as constants from "../assets/Constants";
export default{
    title: 'Components/Stats',
    component: Stats,
    argTypes: {attack:{type:'number'}}
} 


const Template = args =>  <div className="hello" style={{marginLeft:'50px'}}> <Stats {...args} /></div>

/*
export const test = () =>
    <div className="hello" style={{marginLeft:'50px'}}> <Stats attack={10} defense={1} difficulty={2} magic={4} /></div>

*/
export const test = Template.bind({});
test.args= {
    attack:10,
    defense: 1,
    difficulty: 5,
    magic:4
}
