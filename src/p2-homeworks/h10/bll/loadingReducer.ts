const initState = {
    loading: false
}


export const loadingReducer = (state = initState, action: LoadingACType): typeof initState => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}
type LoadingACType = { type: 'LOADING', loading: boolean }

export const loadingAC = (loading: boolean): LoadingACType => {
    return {
        type: 'LOADING',
        loading
    }
} // fix any