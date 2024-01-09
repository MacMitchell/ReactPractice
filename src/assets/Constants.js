import { string } from "prop-types";

export const PASSIVE_URL = 'http://ddragon.leagueoflegends.com/cdn/12.13.1/img/passive';
export const ABILITY_URL = 'http://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell';
export const SPLASH_URL = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash';
export const LOADING_URL = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading'
export const SQUARE_IMG_URL = 'http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion';
async function getChampionJson(name) {
    const URL = `http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion/${name}.json`;
    return window.fetch(URL);
}

export async function getChampionData(name) {
    let data = await getChampionJson(name);
    return data.json();
}


export function convertMarkdownToText(stringIn) {
    let replacies = ['<magicDamage>', '</magicDamage>','</spellName>','<spellName>','<passive>','</passive>','<active>', '</active>'];
    let newText = stringIn;
    for (let replace of replacies) {
        newText = newText.replaceAll(replace, '');
    }
    newText = (newText.replaceAll('<br><br>', ' \n\n'));
    newText = (newText.replaceAll('<br>', ' \n\n'));
    return newText;
}

