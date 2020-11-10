import {fromJS} from 'immutable';
import { CHANGE_NAME } from "./constants";
import {ModifyAction} from "./actionCreators";

const defaultState = fromJS({
    name: ''
});

const reduce =  (state = defaultState, action:ModifyAction)=>{
    switch (action.type){
        case CHANGE_NAME:
            return state.set('name',action.data);
        default:
            return state;
    }
};

export default reduce;
