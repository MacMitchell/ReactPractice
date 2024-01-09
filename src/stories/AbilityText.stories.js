import AbilityText from "../components/AbilityText";

export default{
    title: 'championCard/AbilityText',
    component: AbilityText
}

const Template = args => <AbilityText  {...args}/>
export const shortBlurb = Template.bind({});
shortBlurb.args = {
    name: 'h',
    text: 'small'
}


export const longBlurb = Template.bind({});
longBlurb.args = {
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
