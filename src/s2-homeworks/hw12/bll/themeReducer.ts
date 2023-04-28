const initState = {
    themeId: 1,
}
type InitStateType = typeof initState

export const themeReducer = (state: InitStateType = initState, action: changeThemeIdActionType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export type changeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): changeThemeIdActionType => ({type: 'SET_THEME_ID', id} as const) // fix any

