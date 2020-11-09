import React, { Component} from "react";
import {connect} from "react-redux"
import {Logo} from "./style";

import {Layout, Menu} from 'antd';
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import {Dispatch} from "redux";
import axios from "axios";
import {BASE_URL, Extract} from "../../utils/request";
import {ChangeName} from "./store/actionCreators";

const { Header } = Layout;

interface Props {
    name?: string,
    handleName: ()=>void
}

class HeaderRM extends Component<Props>{

    render() {
        const { name } = this.props;

        return (
            <Header>
                <Link to="/">
                    <Logo>{name}</Logo>
                </Link>
                <Menu theme={'dark'} mode="horizontal" style={{overflow: "hidden"}}>
                    <Menu.Item><Link to={'/'}>分享</Link></Menu.Item>
                    <Menu.Item><Link to={'/album'}>专栏</Link></Menu.Item>
                </Menu>
            </Header>
        )
    }

    componentDidMount() {
        this.props.handleName();
    }

}

const mapStateToProps = (state: any):{name: string} => ({
    name: state.getIn(['header','name'])
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleName: () => {
        axios.get(BASE_URL + 'site/name').then((res)=>{
            const result = Extract(res.data);
            return dispatch(ChangeName(result.data.value));
        }).catch(()=>{
            console.log('error');
        });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderRM);

