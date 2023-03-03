import React from 'react'

import './AbilityScores.css'
import AbilityLine from './AbilityLine'

export default function AbilityScores(props) {
    return (
        <form>
            <h1>Ability Scores</h1>
            <div className='abilities-main'>
                <div className='column-tags'>
                    <div className='ability-div'>Abil</div>
                    <div className='ability-div'>Score</div>
                    <div className='ability-div'>Mod</div>
                    <div className='ability-div'>Temp Adj</div>
                    <div className='ability-div'>Temp Mod</div>
                </div>
                <div className='column-tags'>
                    <div className='ability-div'>Abil</div>
                    <div className='ability-div'>Score</div>
                    <div className='ability-div'>Mod</div>
                    <div className='ability-div'>Temp Adj</div>
                    <div className='ability-div'>Temp Mod</div>
                </div>
            </div>
            <AbilityLine 
                data={ props.data } 
                ability1={ 'STR' } 
                ability2={ 'DEX' }
                handleChange={ props.handleChange } 
            />
            <AbilityLine 
                data={ props.data } 
                ability1={ 'CON' } 
                ability2={ 'INT' }
                handleChange={ props.handleChange } 
            />
            <AbilityLine 
                data={ props.data } 
                ability1={ 'WIS' } 
                ability2={ 'CHA' }
                handleChange={ props.handleChange } 
            />
        </form>
    )
}