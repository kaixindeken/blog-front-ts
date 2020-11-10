import {fromJS} from "immutable";
import * as constants from "./constants";
import {ModifyAction} from "./actionCreators";

const defaultState = fromJS({
    title:"",
    content:"",
});

const reduce = (state = defaultState, action:ModifyAction)=>{
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content,
            });
        default :
            return state;
    }
}

export default reduce
