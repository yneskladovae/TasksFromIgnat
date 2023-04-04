export type InitStateType = {
    isLoading: boolean
}

const initState: InitStateType = {
    isLoading: false,
}

export const loadingReducer = (state: InitStateType = initState, action: LoadingActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {isLoading: action.isLoading}
        }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
