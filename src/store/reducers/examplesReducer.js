const initialState = {
    cookies: null
}

export const examplesReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case "ACCEPTCOOKIES":
            return {...state, cookies: true};
        case "REJECTCOOKIES":
            return {...state, cookies: false};
        case "REVOKECOOKIES":
            return {...state, cookies: null};
        default:
            return state;
    }
}