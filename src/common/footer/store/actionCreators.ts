import * as constants from './constants'
import {fromJS} from "immutable";

interface ChangeRecordAction{
    type: constants.CHANGE_RECORD_TYPE,
    nickname: string,
    record: string
}

export type ModifyAction = ChangeRecordAction

export const ChangeRecord = (nickname: string, record: string):ChangeRecordAction => ({
    type: constants.CHANGE_RECORD,
    nickname: fromJS(nickname),
    record: fromJS(record)
});
