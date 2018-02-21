let defaultState = {};

export default (state=defaultState,action) => {

    let {type,payload} = action;

    switch(type) {

        case "SET_AUTH_WIZARD": {
            return payload.wizard;
        }

        case "UPDATE_WIZARD": {
            return Object.assign({}, state, payload);
        }

        default:
            return state;

    }

};
