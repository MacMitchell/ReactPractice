import Banner from "../components/Banner";
import * as constants from "../assets/Constants";
import TitleCard from "../components/TitleCard";
export default{
    title: 'Components/Opening',
    component: Banner,
} 

let imgPath = `${constants.SPLASH_URL}/Kindred_0.jpg`;

export const b = () =>
<>
<Banner imgPath={imgPath} arrow={true}/>
<TitleCard name={'Kindred'} blurb={"Best Lore"}/>
</>


