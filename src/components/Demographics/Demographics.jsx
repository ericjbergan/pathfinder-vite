import { React, useState } from 'react'

import './Demographics.css'

export default function Demographics(props) {
    return (
        <div>
            <div className='char-info'>
                <div className='input-div'>
                    <label htmlFor='charName'>Character Name</label>
                    <input 
                        type='text' 
                        name='charInfo.charName' 
                        value={ props.data.charName } 
                        onChange={ props.handleChange } />
                </div>
                <div className='input-div'>
                    <label htmlFor='alignment'>Alignment</label>
                    <input 
                        type='text' 
                        name='charInfo.alignment' 
                        value={ props.data.alignment } 
                        onChange={ props.handleChange } />
                    {console.log(props.data) }
                </div>
                <div className='input-div'>
                    <label htmlFor='playerName'>Player Name</label>
                    <input 
                        type='text' 
                        name='charInfo.playerName' 
                        value={ props.data.alignment } 
                        onChange={ props.handleChange } />
                    {console.log(props.data) }
                </div>
                <div className='input-div'>
                    <label htmlFor='charLvl'>Character Level</label>
                    <input type='text' name='charLvl' />
                </div>
            </div>
            <div className='char-info'>
                <div className='input-div'>
                    <label htmlFor='deity'>Deity</label>
                    <input type='text' name='deity' />
                </div>
                <div className='input-div'>
                    <label htmlFor='homeland'>Homeland</label>
                    <input type='text' name='homeland' />
                </div>
                <div className='input-div'>
                    <label htmlFor='race'>Race</label>
                    <input type='text' name='race' />
                </div>
                <div className='input-div'>
                    <label htmlFor='size'>Size</label>
                    <input type='text' name='size' />
                </div>
            </div>
            <div className='char-info'>
                <div className='input-div'>
                    <label htmlFor='gender'>Gender</label>
                    <input type='text' name='gender' />
                </div>
                <div className='input-div'>
                    <label htmlFor='age'>Age</label>
                    <input type='text' name='age' />
                </div>
                <div className='input-div'>
                    <label htmlFor='height'>Height</label>
                    <input type='text' name='height' />
                </div>
                <div className='input-div'>
                    <label htmlFor='weight'>Weight</label>
                    <input type='text' name='weight' />
                </div>
            </div>
            <div className='char-info-short'>
                <div className='input-div-short'>
                    <label htmlFor='hair'>Hair</label>
                    <input type='text' name='hair' />
                </div>
                <div className='input-div-short'>
                    <label htmlFor='eyes'>Eyes</label>
                    <input type='text' name='eyes' />
                </div>
            </div>
        </div>
    )
}