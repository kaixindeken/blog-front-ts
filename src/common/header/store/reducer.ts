import {fromJS} from 'immutable';
import {ModifyAction} from "./actionCreators";
import * as constants from './constants'

const defaultState = fromJS({
    name: '',
    list:[]
});

const reduce =  (state = defaultState, action:ModifyAction)=>{
    switch (action.type){
        case constants.CHANGE_NAME:
            return state.set('name',action.data);
        case constants.CHANGE_NAV:
            return state.set('list',action.data);
        default:
            return state;
    }
};

export default reduce;
