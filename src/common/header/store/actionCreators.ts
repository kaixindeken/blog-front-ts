import * as constants from './constants'
import {fromJS} from "immutable";

interface ChangeNameAction{
    type: constants.CHANGE_NAME_TYPE,
    data: any
}

export type ModifyAction = ChangeNameAction

export const ChangeName = (data: any):ChangeNameAction => ({
    type: constants.CHANGE_NAME,
    data: fromJS(data)
});
