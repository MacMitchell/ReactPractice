import AbilityCard from "../components/AbilityCard";
import * as Constants from "../assets/Constants";


export default{
    title: 'championCard/AbilityCard',
    component: AbilityCard
}
const Template = args => <AbilityCard  {...args}/>
export const aatroxPassive = Template.bind({});
aatroxPassive.args = {
    ability:{
        name: 'Aatrox',
        description: 'This is a champion',
        image:{
            full:"Aatrox_Passive.png",
            group:"passive",
        }
    }
}

export const aatroxE = Template.bind({});
aatroxE.args = {
    ability:{
        name: "Umbral Dash",
        description: "Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.",
        image:{
            full:"AatroxE.png",
            group:"spell",
        }
    }
}

