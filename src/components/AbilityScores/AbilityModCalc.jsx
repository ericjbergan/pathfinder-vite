import React from 'react';

export default function AbilityModCalc(abilityScore) {
    const abilityMod = abilityScore => {
        switch (abilityScore) {
            case 6:
            case 7: return -2
            case 8:
            case 9: return -1
            case 10:
            case 11: return 0
            case 12:
            case 13: return 1
            case 14:
            case 15: return 2
            case 16:
            case 17: return 3
            case 18:
            case 19: return 4
            case 20:
            case 21: return 5
            case 22: return 6
        }
    }

    return (
        abilityMod
    )
}