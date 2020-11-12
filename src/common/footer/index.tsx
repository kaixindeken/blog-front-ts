import React, { PureComponent} from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";

import { Layout } from 'antd';
import 'antd/dist/antd.css';
import {Dispatch} from "redux";
import axios from "axios";
import {BASE_URL, Extract} from "../../utils/request";

const { Footer } = Layout;

interface Props {
    nickname?: string,
    record?: string,
    handleRecord:()=>void
}

class FooterRM extends PureComponent<Props>{

    render(){

        const { nickname, record } = this.props

        return (
            <Footer style={{ textAlign: 'center' }}>
                由 {nickname} 设计和编码 ｜ 备案号 : {record}
            </Footer>
        );
    }

    componentDidMount() {
        this.props.handleRecord();
    }

}

interface mapStateStruct {
    nickname:string,
    record:string
}

const mapStateToProps = (state: any):mapStateStruct => {
    return {
        nickname: state.getIn(['footer','nickname']),
        record: state.getIn(['footer', 'record'])
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => ({
    handleRecord: ()=>{
        axios.get(BASE_URL + 'site/record').then((res)=>{
            const result = Extract(res.data);
            const nickname = result.data[0].value;
            const record = result.data[1].value;
            dispatch(actionCreators.ChangeRecord(nickname, record));
        }).catch(()=>{
            console.log('error');
        });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FooterRM);
