import React from 'react'

export default function AbilityLine(props) {
    // console.log('props: ' + props.data)
    const abilityName1 = props.ability1 + 'score'
    const abilityName2 = props.ability2 + 'score'
    const modName1 = props.ability1 + 'modifier'
    const modName2 = props.ability2 + 'modifier'
    const tempAdjName1 = props.ability1 + 'tempAdj'
    const tempAdjName2 = props.ability2 + 'tempAdj'
    const tempModName1 = props.ability1 + 'tempMod'
    const tempModName2 = props.ability2 + 'tempMod'

    return (
        <div className='ability-score-line' >
                <div className='ability-names'>
                    <div className='ability-div'>{ props.ability1 }</div>
                    <div className='ability-div'>
                        <input
                            className='ability-input'
                            type='text'
                            name={ abilityName1 }
                            value={props.data[abilityName1]}
                            onChange={props.handleChange}
                            min='6'
                            max='22'
                        />
                    </div>
                    <div className='mod-field-parent' >
                        <div className='mod-field' >
                            {props.data[modName1]}
                        </div>
                    </div>
                    <div className='ability-div'>
                        <input
                            className='ability-input'
                            type='text'
                            name={ tempAdjName1 }
                            value={props.data[tempAdjName1]}
                            onChange={props.handleChange}
                        />
                    </div>
                    <div className='ability-div'>
                        <input
                            className='ability-input'
                            type='text'
                            name={ tempModName1 }
                            value={props.data[tempModName1]}
                            onChange={props.handleChange}
                        />
                    </div>
                </div>
                <div className='ability-names'>
                    <div className='ability-div'>{ props.ability2 }</div>
                    <div className='ability-div'>
                        <input
                            className='ability-input'
                            type='text'
                            name={ abilityName2 }
                            value={props.data[abilityName2]}
                            onChange={props.handleChange}
                            min='6'
                            max='22'
                        />
                    </div>
                    <div className='mod-field-parent' >
                        <div className='mod-field' >
                            {props.data[modName2]}
                        </div>
                    </div>
                    <div className='ability-div'>
                        <input
                            className='ability-input'
                            type='text'
                            name={ tempAdjName2 }
                            value={props.data[tempAdjName2]}
                            onChange={props.handleChange}
                        />
                    </div>
                    <div className='ability-div'>
                        <input
                            className='ability-input'
                            type='text'
                            name={ tempModName2 }
                            value={props.data[tempModName2]}
                            onChange={props.handleChange}
                        />
                    </div>
                </div>
            </div>
    )
}