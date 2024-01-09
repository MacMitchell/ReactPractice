
import MusicPlayer from "../components/MusicPlayer";
import * as constants from "../assets/Constants";
import { bool } from "prop-types";
export default{
    title: 'Test/Music',
    component: MusicPlayer,

}

const Template = args => <MusicPlayer  {...args}/>
export const basic = Template.bind({});
