import {combineReducers} from 'redux';

import wizardFormReducer from './reducers/WizardForm-reducer';
import authReducer from '../components/auth/reducer';
import profileReducer from './reducers/profile-reducer';


export default combineReducers({
    wizard: wizardFormReducer,
    profile: profileReducer,
    auth: authReducer
});
