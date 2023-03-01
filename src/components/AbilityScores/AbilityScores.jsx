import React from 'react'

import './AbilityScores.css'

export default function AbilityScores() {
    return (
        <form>
            <h1>Ability Scores</h1>
            <div className='abilities-main'>
                <div className='column-tags'>
                    <div className='abil-div'>Abil</div>
                    <div className='abil-div'>Score</div>
                    <div className='abil-div'>Mod</div>
                    <div className='abil-div'>Tem Adj</div>
                    <div className='abil-div'>Tem Mod</div>
                </div>
                <div className='column-tags'>
                    <div className='abil-div'>Abil</div>
                    <div className='abil-div'>Score</div>
                    <div className='abil-div'>Mod</div>
                    <div className='abil-div'>Tem Adj</div>
                    <div className='abil-div'>Tem Mod</div>
                </div>
            </div>
            <div className='ability-names'>
                <div className='abil-div'>STR</div>
                <div className='abil-div'>
                    <input name='STRscore' />
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