import React from 'react'

import './AbilityScores.css'

export default function AbilityScores(props) {
    return (
        <form>
            <h1>Ability Scores</h1>
            <div className='abilities-main'>
                <div className='column-tags'>
                    <div className='ability-div'>Abil</div>
                    <div className='ability-div'>Score</div>
                    <div className='ability-div'>Mod</div>
                    <div className='ability-div'>Tem Adj</div>
                    <div className='ability-div'>Tem Mod</div>
                </div>
                <div className='column-tags'>
                    <div className='ability-div'>Abil</div>
                    <div className='ability-div'>Score</div>
                    <div className='ability-div'>Mod</div>
                    <div className='ability-div'>Tem Adj</div>
                    <div className='ability-div'>Tem Mod</div>
                </div>
            </div>
            <div className='ability-names'>
                <div className='ability-div'>STR</div>
                <div className='ability-div'>
                    <input 
                    className='ability-input'
                    type='number'
                    name='STRscore'
                    value={ props.data.STRscore }
                    onChange={ props.handleChange }
                    min='6'
                    max='22'
                     />
                     { console.log(props.data) }
                </div>
                <div></div>
            </div>
            <div>
                <div>DEX</div>
            </div>
            <div className='ability-names'>
                <div>CON</div>
            </div>
            <div>
                <div>INT</div>
            </div>
            <div className='ability-names'>
                <div>WIS</div>
            </div>
            <div>
                <div>CHA</div>
            </div>
        </form>
    )
}