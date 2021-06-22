import {UserType} from '../HW8';

type SortUpType = {
    type: 'sort'
    payload: 'up'
}
type SortDownType = {
    type: 'sort'
    payload: 'down'
}
type CheckType = {
    type: 'check'
    payload: number
}

type ActionType = SortUpType | SortDownType | CheckType

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const newState = [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            // need to fix
            return [...state].filter(el => el.age > action.payload)
        }
        default:
            return state
    }
}

export const sortUpAC = (): SortUpType => {
    return {type: 'sort', payload: 'up'}
}
export const sortDownAC = (): SortDownType => {
    return {type: 'sort', payload: 'down'}
}
export const checkAC = (): CheckType => {
    return {type: 'check', payload: 18}
}