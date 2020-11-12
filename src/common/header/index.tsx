import React, { Component} from "react";
import {connect} from "react-redux"
import {Logo} from "./style";

import {Layout, Menu} from 'antd';
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import {Dispatch} from "redux";
import axios from "axios";
import {BASE_URL, Extract} from "../../utils/request";
import {actionCreators} from "./store";

const { Header } = Layout;

interface Props {
    name?: string,
    list?:any,
    handleName: ()=>void,
    handleNav: ()=>void
}

class HeaderRM extends Component<Props>{

    render() {
        const { name, list } = this.props;
        const listData = list.toJS();

        return (
            <Header>
                <Link to="/">
                    <Logo>{name}</Logo>
                </Link>
                <Menu theme={'dark'} mode="horizontal" style={{overflow: "hidden"}}>
                    {
                        listData.map((item: any)=>{
                            return (
                                <Menu.Item key={item.id}><Link to={item.path}>{item.title}</Link></Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Header>
        )
    }

    componentDidMount() {
        this.props.handleName();
        this.props.handleNav()
    }

}

interface mapStateStruct {
    name: string,
    list: any
}

const mapStateToProps = (state: any):mapStateStruct => ({
    name: state.getIn(['header','name']),
    list: state.getIn(['header','list'])
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleName: () => {
        axios.get(BASE_URL + 'site/name').then((res)=>{
            const result = Extract(res.data);
            dispatch(actionCreators.ChangeName(result.data.value));
        }).catch(()=>{
            console.log('error');
        });
    },
    handleNav: () => {
        axios.get(BASE_URL + 'site/nav').then((res)=>{
            const result = Extract(res.data);
            dispatch(actionCreators.ChangeNav(result.data))
        }).catch(()=>{
            console.log('error');
        });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderRM);

