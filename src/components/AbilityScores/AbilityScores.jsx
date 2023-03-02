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
            <div className='ability-names'>
                <div className='ability-div'>STR</div>
                <div className='ability-div'>
                    <input 
                    className='ability-input'
                    type='tel'
                    pattern="^-?[0-9]\d*\.?\d*$"
                    name='STRscore'
                    value={ props.data.STRscore }
                    onChange={ props.handleChange }
                    min='6'
                    max='22'
                     />
                </div>
                <div className='mod-field-parent' >
                    <div className='mod-field' value={ props.data.STRmodifier } >
                        { props.data.STRmodifier }
                    </div>
                </div>
                <div className='ability-div'>
                    <input 
                    className='ability-input'
                    type='text'
                    name='STRtempAdj'
                    value={ props.data.STRtempAdj }
                    onChange={ props.handleChange }
                     />
                </div>
                <div className='ability-div'>
                    <input 
                    className='ability-input'
                    type='text'
                    name='STRtempMod'
                    value={ props.data.STRtempMod }
                    onChange={ props.handleChange }
                     />
                </div>
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