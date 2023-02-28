import { React, useState } from 'react';
import Demographics from '../../components/Demographics/Demographics'
import AbilityScores from '../../components/AbilityScores/AbilityScores'
import HpInit from '../../components/HpInit/HpInit'

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
            }
          
        })

    // const handleChange = e => {
    //     const { name, value } = e.target
    //     console.log(e.target)
    //     setState(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }))
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

    return (
        <div>
            <Demographics data={ state.charInfo } handleChange={ handleChange } />
            <AbilityScores />
            <HpInit />
        </div>
    )
}