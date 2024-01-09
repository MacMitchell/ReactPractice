import ChampionIcon from "../components/ChampionIcon";
import { basic } from "./Gallary.stories";
import * as constant from '../assets/Constants'
export default{
    title: 'champion/selection',
    component: ChampionIcon
}

const Template = args => <ChampionIcon {...args} />

export const simpleAzir = Template.bind({});
simpleAzir.args ={
    imgPath: `${constant.SQUARE_IMG_URL}/Azir.png`
};