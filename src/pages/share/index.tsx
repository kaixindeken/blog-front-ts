import React, {Fragment, PureComponent} from "react";
import { Layout, PageHeader  } from 'antd';

import ArticleList from "./components/List";
import TagsCard from "./components/TagsCard";
import {actionCreators} from "./store";
import {connect} from "react-redux";
import HotAlbum from './components/HotAlbum';
import {Dispatch} from "redux";
import axios from "axios";
import {BASE_URL, Extract} from "../../utils/request";

const { Content } = Layout;

interface Props{
    changeTagsData: ()=>void,
    changeListData: ()=>void,
    changeHotspot: ()=>void
}

class Share extends PureComponent<Props>{

    render(){
        window.scrollTo(0, 0)
        return (
            <Content style={{ padding: '0 6.7%', overflow:"hidden" }}>
                <PageHeader
                    title="分享"
                    subTitle="分享创造，分享技巧"
                />
                {this.getArticles()}
                {this.getCards()}
            </Content>
        );
    }

    getCards(){
        if (document.body.clientWidth >= 700){
            return (
                <Fragment>
                    <TagsCard />
                    <HotAlbum />
                </Fragment>
            );
        }
    }

    getArticles(){
        if (document.body.clientWidth >= 700){
            return (
                <div style={{float:"left", width:"60%"}}>
                    <ArticleList/>
                </div>
            );
        }else{
            return (
                <ArticleList/>
            );
        }
    }

    componentDidMount() {
        this.props.changeTagsData();
        this.props.changeListData();
        this.props.changeHotspot();
    }
}

const mapDispatch = (dispatch: Dispatch)=>({
    changeTagsData: ()=>{
        axios.get(BASE_URL + 'share/tags').then((res)=>{
            const result = Extract(res.data);
            dispatch(actionCreators.ChangeTags(result.data));
        }).catch(()=>{
            console.log('error');
        });
    },
    changeListData: ()=>{
        axios.get(BASE_URL + 'share/articles').then((res)=>{
            const result = Extract(res.data);
            const data = result.data;
            for (let i=0;i<data.length;i++){
                data[i].views = 0;
                if (data[i].view !== null){
                    data[i].views = data[i].view.views;
                }
            }
            dispatch(actionCreators.ChangeArticles(data));
        }).catch(()=>{
            console.log('error');
        });
    },
    changeHotspot: ()=>{
        axios.get(BASE_URL + 'hotspot').then((res)=>{
            const result = Extract(res.data);
            const data = result.data;
            dispatch(actionCreators.ChangeHotspot(data));
        }).catch(()=>{
            console.log('error');
        });
    }
})

export default connect(null,mapDispatch)(Share)
