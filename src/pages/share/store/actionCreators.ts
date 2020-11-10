import * as constants from './constants'

interface ChangeTagsAction{
    type: constants.CHANGE_TAG_DATA_TYPE,
    data: any
}

interface ChangeArticlesAction{
    type: constants.CHANGE_ARTICLE_LIST_TYPE,
    data: any
}

interface ChangeHotspotAction{
    type: constants.CHANGE_HOTSPOT_TYPE,
    data: any
}

export type ModifyAction = ChangeTagsAction | ChangeArticlesAction | ChangeHotspotAction

export const ChangeTags = (data: any):ChangeTagsAction => ({
    type: constants.CHANGE_TAG_DATA,
    data:data
});

export const ChangeArticles = (data: any):ChangeArticlesAction => ({
    type: constants.CHANGE_ARTICLE_LIST,
    data:data
});

export const ChangeHotspot = (data: any):ChangeHotspotAction => ({
    type: constants.CHANGE_HOTSPOT,
    data: data
});
