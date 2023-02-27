import { React, useState } from 'react';
import Demographics from '../../components/Demographics/Demographics'
import AbilityScores from '../../components/AbilityScores/AbilityScores'
import HpInit from '../../components/HpInit/HpInit'

export default function NewCharacter() {

    const [state, setState] = useState(
        {
          charName: '',
          playerName: '',
          race: '',
          alignment: '',
          gender: '',
          class: '',
          deity: '',
          homeland: '',
          size: '',
          age: '',
          height: '',
          weight: '',
          hair: '',
          eyes: '',
          xpTotal: '',
          level: ''
        })

    const handleChange = e => {
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div>
            <input name='charName' type='text' onChange={handleChange} value={state.charName} />
            {console.log(state.charName)}

            {/* <Demographics />
            <AbilityScores />
            <HpInit /> */}
        </div>
    )
}