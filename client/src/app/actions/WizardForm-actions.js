/* global __API_URL__ */

import superagent from 'superagent';
import cookies from 'react-cookies';

export const findWizard = wizard => dispatch => {

    let token = cookies.load("auth");

    let URL = (`https://www.reddit.com/r/${searchText}' Wizard'.json?limit=${searchFormLimit}`)

    superagent.get(URL)
        .set(token)

        .then(res => {
            dispatch(updateUserAction(res.body));
        })
        .catch(e => console.error("ERROR", e.message));


};

const updateWizardAction = wizard => ({
    type:"UPDATE_USER",
    payload: wizard
});
