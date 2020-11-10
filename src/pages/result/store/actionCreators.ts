import * as constants from './constants'

interface ChangeResultAction{
    type: constants.CHANGE_RESULT_TYPE,
    title: string,
    subtitle: any,
    list: any
}

export type ModifyAction = ChangeResultAction

export const ChangeResult = (title:string, subtitle:any, list:any):ChangeResultAction => ({
    type: constants.CHANGE_RESULT,
    title: title,
    subtitle: subtitle,
    list: list
})
