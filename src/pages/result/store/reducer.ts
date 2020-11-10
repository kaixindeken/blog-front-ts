import {fromJS} from "immutable";
import * as constants from "./constants";
import {ModifyAction} from "./actionCreators";

const defaultState = fromJS({
    title:"",
    subtitle:"",
    list:[]
});

const reduce = (state = defaultState, action:ModifyAction)=>{
    switch (action.type) {
        case constants.CHANGE_RESULT:
            return state.merge({
                title: action.title,
                subtitle: action.subtitle,
                list: action.list
            });
        default :
            return state;
    }
}

export default reduce
