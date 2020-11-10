import * as constants from './constants'

interface changeDetailAction {
    type: constants.CHANGE_DETAIL_TYPE
    title: string
    content: any
}

export type ModifyAction = changeDetailAction;

export const changeDetail = (title: string, content: any):changeDetailAction => ({
    type: constants.CHANGE_DETAIL,
    title: title,
    content: content
});
