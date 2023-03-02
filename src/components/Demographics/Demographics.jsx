import { React, useState } from 'react'
import { useForm } from 'react-hook-form'

import './Demographics.css'

export default function Demographics(props) {

    return (
        <form>
            <h1>Character Information</h1>
            <div className='char-info'>
                <div className='input-div'>
                    <label htmlFor='charName'>Character Name</label>
                    <input 
                        className='demo-input'
                        type='text' 
                        name='charInfo.charName' 
                        value={ props.data.charName } 
                        onChange={ props.handleChange } />
                </div>
                <div className='input-div'>
                    <label htmlFor='playerName'>Player Name</label>
                    <input 
                        className='demo-input'
                        type='text' 
                        name='charInfo.playerName' 
                        value={ props.data.playerName } 
                        onChange={ props.handleChange } />
                </div>
                <div className='input-div'>
                    <label htmlFor='class'>Class</label>
                    <input 
                        className='demo-input'
                        type='text' 
                        name='charInfo.class' 
                        value={ props.data.class } 
                        onChange={ props.handleChange } />
                </div>
                <div className='input-div'>
                    <label htmlFor='level'>Character Level</label>
                    <input 
                        className='demo-input'
                        type='number' 
                        name='charInfo.level' 
                        value={ props.data.level } 
                        onChange={ props.handleChange } />
                </div>
            </div>
            <div className='char-info'>
                <div className='input-div'>
                    <label htmlFor='xpTotal'>XP Total</label>
                    <input 
                        className='demo-input'
                        type='number' 
                        name='charInfo.xpTotal' 
                        value={ props.data.xpTotal } 
                        onChange={ props.handleChange } />
                </div>
                <div className='input-div'>
                    <label htmlFor='alignment'>Alignment</label>
                    <input 
                        className='demo-input'
                        type='text' 
                        name='charInfo.alignment' 
                        value={ props.data.alignment } 
                        onChange={ props.handleChange } />
                </div>
                <div className='input-div'>
                    <label htmlFor='race'>Race</label>
                    <input 
                        className='demo-input'
                        type='text' 
                        name='charInfo.race' 
                        value={ props.data.race } 
                        onChange={ props.handleChange } />
                </div>
                <div className='input-div'>
                    <label htmlFor='homeland'>Homeland</label>
                    <input 
                        className='demo-input'
                        type='text' 
                        name='charInfo.homeland' 
                        value={ props.data.homeland } 
                        onChange={ props.handleChange } />
                </div>
            </div>
            <div className='char-info'>
                <div className='input-div'>
                    <label htmlFor='deity'>Deity</label>
                    <input 
                        className='demo-input'
                        type='text' 
                        name='charInfo.deity' 
                        value={ props.data.deity } 
                        onChange={ props.handleChange } />
                </div>
                <div className='input-div'>
                    <label htmlFor='gender'>Gender</label>
                    <input 
                        className='demo-input'
                        type='text' 
                        name='charInfo.gender' 
                        value={ props.data.gender } 
                        onChange={ props.handleChange } />
                </div>
                <div className='input-div'>
                    <label htmlFor='size'>Size</label>
                    <input 
                        className='demo-input'
                        type='text' 
                        name='charInfo.size' 
                        value={ props.data.size } 
                        onChange={ props.handleChange } />
                </div>
                <div className='input-div'>
                    <label htmlFor='age'>Age</label>
                    <input 
                        className='demo-input'
                        type='number' 
                        name='charInfo.age' 
                        value={ props.data.age } 
                        onChange={ props.handleChange } />
                </div>
            </div>
            <div className='char-info'>
                <div className='input-div'>
                    <label htmlFor='height'>Height</label>
                    <input 
                        className='demo-input'
                        type='text' 
                        name='charInfo.height' 
                        value={ props.data.height } 
                        onChange={ props.handleChange } />
                </div>
                <div className='input-div'>
                    <label htmlFor='weight'>Weight</label>
                    <input 
                        className='demo-input'
                        type='text' 
                        name='charInfo.weight' 
                        value={ props.data.weight } 
                        onChange={ props.handleChange } />
                </div>
                <div className='input-div'>
                    <label htmlFor='hair'>Hair</label>
                    <input 
                        className='demo-input'
                        type='text' 
                        name='charInfo.hair' 
                        value={ props.data.hair } 
                        onChange={ props.handleChange } />
                </div>
                <div className='input-div'>
                    <label htmlFor='eyes'>Eyes</label>
                    <input 
                        className='demo-input'
                        type='text' 
                        name='charInfo.eyes' 
                        value={ props.data.eyes } 
                        onChange={ props.handleChange } />
                </div>
                {/* { console.log(props.data) } */}
            </div>
        </form>
    )
}