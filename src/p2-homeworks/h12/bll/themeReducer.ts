export type ThemeType = 'dark' | 'red' | 'some'
export type ThemeStateType = {
    theme: ThemeType
}

const CHANGE_THEME = 'CHANGE_THEME';

const initState: ThemeStateType = {
    theme: 'dark'
};

export const themeReducer = (state: ThemeStateType = initState, action: changeThemeActionType): any => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: ThemeStateType) => ({
    type: CHANGE_THEME,
    payload: {theme} as const
}); // fix any

type changeThemeActionType = ReturnType<typeof changeThemeAC>