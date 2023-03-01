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
                STRscore: '',
                DEXscore: '',
                CONscore: '',
                INTscore: '',
                WISscore: '',
                CHAscore: '',
                STRmodifier: '',
                DEXmodifier: '',
                CONmodifier: '',
                INTmodifier: '',
                WISmodifier: '',
                CHAmodifier: ''
            },
          
        })

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
        const { name, value } = e.target
        const modName = name.substring(0, 3) + 'modifier'
        const data = state[newName[0]]
        data[newName[1]] = value
        setState(prevState => ({
            ...prevState,
            [newName[0]]: data
        }))

        let mod = calcAbilMod(e.target.value)
    }

    return (
        <div>
            <Demographics data={ state.charInfo } handleChange={ handleChange } />
            <AbilityScores data={ state.abilityScores } handleChange={ handleAbilityChange } />
            <HpInit />
        </div>
    )
}