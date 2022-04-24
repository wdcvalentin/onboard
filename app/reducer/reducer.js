export const initialState = {
    user: null,
}

export const ACTIONS = {
    SET_USER: 'set-user',
}

export function reducer(state, action) {
    switch (action.type) {
        // case ACTIONS.SET_USER:
        //     return {
        //         user: [
        //             ...state.user,
        //             action.payload.user
        //         ]
        //     }
        case ACTIONS.SET_USER:
            return { user: action.payload.user }
        default:
            return state;
    }
}