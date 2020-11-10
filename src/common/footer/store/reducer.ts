import {fromJS} from 'immutable';
import {CHANGE_RECORD} from "./constants";
import {ModifyAction} from "./actionCreators";

const defaultState = fromJS({
    nickname: '',
    record: ''
});

const reduce = (state = defaultState, action:ModifyAction)=>{
    switch (action.type){
        case CHANGE_RECORD:
            return state.merge({
                nickname: action.nickname,
                record: action.record
            });

        default:
            return state;
    }
}

export default reduce;
