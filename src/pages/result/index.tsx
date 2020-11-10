import React, { PureComponent} from "react";
import {Divider, Layout} from "antd";
import { ResultDetail} from "../style";
import ArticleList from "./components/ArticleList";
import {actionCreators} from "../result/store";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom"
import Topic from "./components/Topic";
import {Dispatch} from "redux";
import axios from "axios";
import {BASE_URL, Extract} from "../../utils/request";

const { Content } = Layout;

interface Props{
    match?: any,
    getResult: (type:string ,id:number)=>void

}

class Result extends PureComponent<Props> {
    render() {
        window.scrollTo(0, 0);
        return (
            <Content>
                <Topic/>
                <Divider/>
                <ResultDetail>
                    <ArticleList/>
                </ResultDetail>
            </Content>
        );
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const type = this.props.match.params.type;
        this.props.getResult(type, id);
    }
}

const mapState= (state:any):{title: string, subtitle: any}=>({
    title: state.getIn(['result','title']),
    subtitle: state.getIn(['result','subtitle'])
})

const mapDispatch=(dispatch: Dispatch)=>({
    getResult: (type: string, id: number) => {
        axios.get(BASE_URL + type + '?id=' + id).then((res)=>{
            const result = Extract(res.data);
            const data = result.data;
            const title = data.title;
            const subtitle = data.description;
            const list = data.article;
            for (let i=0;i<list.length;i++){
                list[i].views = 0;
                if (list[i].view !== null){
                    list[i].views = list[i].view.views;
                }
            }
            dispatch(actionCreators.ChangeResult(title,subtitle,list))
        }).catch(()=>{
            console.log('error');
        });
    }
})

const Rs = connect(mapState, mapDispatch)(Result);
export default withRouter(Rs);
