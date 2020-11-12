import React, { PureComponent} from "react";
import {Layout, Typography, PageHeader, Divider} from 'antd';
import {ContentDetail} from "../style";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/xcode.css';
import ReactMarkdown from "react-markdown/with-html";
import CodeBlock from "../../utils/code-block"
import { withRouter } from "react-router-dom"
import {Dispatch} from "redux";
import axios from "axios";
import {BASE_URL, Extract} from "../../utils/request";

const { Title } = Typography;
const { Content } = Layout;

interface Props {
    title?: string,
    content?: any,
    match?: any,
    getDetail: (id:number)=>void
}

class Detail extends PureComponent<Props>{

    render(){
        window.scrollTo(0, 0)
        const {title, content} = this.props

        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: function (code: string) {
                return hljs.highlightAuto(code).value;
            },
            gfm: true, // 允许 Git Hub标准的markdown.
            pedantic: false, // 不纠正原始模型任何的不良行为和错误（默认为false）
            sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
            breaks: false, // 允许回车换行（该选项要求 gfm 为true）
            smartLists: true, // 使用比原生markdown更时髦的列表
            smartypants: false, // 使用更为时髦的标点
        })

        return (
            <Content style={{ padding: '0 5%', margin:'50px 0' }}>
                <ContentDetail>
                    <PageHeader
                        title={''}
                        subTitle={'Back'}
                        onBack={() => window.history.back()}
                    />
                    <Title level={2} style={{textAlign:"center"}}>{title}</Title>
                    <br/>
                    <Divider/>
                    {this.getContent(content)}
                </ContentDetail>
            </Content>
        );
    }

    getContent(content: any){
        if (document.body.clientWidth >= 700){
            return (
                <div style={{fontSize: 16}}>
                    <ReactMarkdown
                        source={content}
                        renderers={{code: CodeBlock}}
                    />
                </div>
            );
        } else {
            return (
                <div style={{fontSize: 14}}>
                    <ReactMarkdown
                        source={content}
                        renderers={{code: CodeBlock}}
                    />
                </div>
            )
        }
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

interface mapStateStruct {
    title:string,
    content:any
}

const mapState= (state:any):mapStateStruct=>({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
})

const mapDispatch=(dispatch: Dispatch)=>({
    getDetail: (id: number) => {
        axios.get(BASE_URL+"detail?id="+id).then((res)=>{
            const result = Extract(res.data);
            const data = result.data;
            dispatch(actionCreators.changeDetail(data.title,data.content));
        }).catch(()=>{
            console.log('error');
        });
    }
})

const Dt = connect(mapState, mapDispatch)(Detail);
export default withRouter(Dt);
