import { React, useState } from 'react';
import Demographics from '../../components/Demographics/Demographics'
import AbilityScores from '../../components/AbilityScores/AbilityScores'
import HpInit from '../../components/HpInit/HpInit'

function calcAbilMod(score) {
    let mod = 0;
    return mod
}

export default function NewCharacter() {

    const [state, setState] = useState(
        {
            charInfo: {
                charName: '',
                playerName: '',
                class: '',
                level: '',
                xpTotal: '',
                alignment: '',
                race: '',
                homeland: '',
                deity: '',
                gender: '',
                size: '',
                age: '',
                height: '',
                weight: '',
                hair: '',
                eyes: ''
            },

            abilityScores: {
                STRscore: '0',
                DEXscore: '0',
                CONscore: '0',
                INTscore: '0',
                WISscore: '0',
                CHAscore: '0',
                STRmodifier: '0',
                DEXmodifier: '0',
                CONmodifier: '0',
                INTmodifier: '0',
                WISmodifier: '0',
                CHAmodifier: '0',
                STRtempAdj: '0',
                DEXtempAdj: '0',
                CONtempAdj: '0',
                INTtempAdj: '0',
                WIStempAdj: '0',
                CHAtempAdj: '0',
                STRtempMod: '0',
                DEXtempMod: '0',
                CONtempMod: '0',
                INTtempMod: '0',
                WIStempMod: '0',
                CHAtempMod: '0'
            }
        }
    )

    const abilityModifier = score => {
        if (score === "6" || score === "7") return -2
        else if (score === "8" || score === "9") return -1
        else if (score === "10" || score === "11") return 0
        else if (score === "12" || score === "13") return 1
        else if (score === "14" || score === "15") return 2
        else if (score === "16" || score === "17") return 3
        else if (score === "18" || score === "19") return 4
        else if (score === "20" || score === "21") return 5
        else if (score === "22") return 6
    }

    // const handleChange = e => {
    //     const { name, value } = e.target
    //     console.log(e.target)
    //     setState(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }))
    // }

    // function calcAbilMod(score) {
        
    // }

    const handleChange = e => {
        const { name, value } = e.target
        const newName = name.split('.')
        const data = state[newName[0]]
        data[newName[1]] = value
        setState(prevState => ({
            ...prevState,
            [newName[0]]: data
        }))
    }

    const handleAbilityChange = e => {
        console.log("value: " + e.target.value)
        const { name, value } = e.target
        const modName = name.substring(0, 3) + 'modifier'
        const mod = abilityModifier(e.target.value)
        console.log("mod: " + mod)
        const data = state.abilityScores
        data[e.target.name] = value
        data[modName] = mod
        setState(prevState => ({
            ...prevState,
            abilityScores: data
        }))


    }

    return (
        <div>
            <Demographics data={ state.charInfo } handleChange={ handleChange } />
            <AbilityScores data={ state.abilityScores } handleChange={ handleAbilityChange } />
            <HpInit />
        </div>
    )
}