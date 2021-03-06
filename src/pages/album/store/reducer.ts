import {fromJS} from "immutable";
import * as constants from "./constants";
import {ModifyAction} from "./actionCreators";

const defaultState = fromJS({
    list:[]
});

const reduce = (state = defaultState, action:ModifyAction)=>{
    switch (action.type) {
        case constants.CHANGE_ALBUM:
            return state.set('list', fromJS(action.data));
        default :
            return state;
    }
}

export default reduce
