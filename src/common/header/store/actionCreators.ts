import * as constants from './constants'
import {fromJS} from "immutable";

interface ChangeNameAction{
    type: constants.CHANGE_NAME_TYPE,
    data: any
}

interface ChangeNavAction{
    type: constants.CHANGE_NAV_TYPE,
    data: any
}

export type ModifyAction = ChangeNameAction | ChangeNavAction

export const ChangeName = (data: any):ChangeNameAction => ({
    type: constants.CHANGE_NAME,
    data: fromJS(data)
});

export const ChangeNav = (data: any):ChangeNavAction => ({
    type: constants.CHANGE_NAV,
    data: fromJS(data)
})
