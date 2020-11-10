import React, {PureComponent} from "react";
import { AlbumHead} from "../style";
import {Divider, Layout, Typography} from "antd";
import AlbumList from "./components/AlbumList";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {Dispatch} from "redux";
import axios from "axios";
import {BASE_URL, Extract} from "../../utils/request";

const {Content} = Layout
const {Title, Paragraph} = Typography

interface Props {
    getAlbums: ()=>void
}

class Album extends PureComponent<Props>{
    render() {
        return (
            <Content style={{padding: "0 15%", margin: "2.5% 0"}}>
                <AlbumHead>
                    <Title style={{textAlign:"center"}}>专栏</Title>
                    <Paragraph style={{textAlign:"center", color: "gray"}}>让学习更加高效</Paragraph>
                </AlbumHead>
                <Divider/>
                <AlbumList/>
            </Content>
        );
    }

    componentDidMount() {
        this.props.getAlbums();
    }
}

const mapDispatch=(dispatch:Dispatch)=>({
    getAlbums:()=>{
        axios.get(BASE_URL + 'albums').then((res)=>{
            const result = Extract(res.data);
            const data = result.data;
            dispatch(actionCreators.changeAlbums(data));
        }).catch(()=>{
            console.log('error');
        });
    }
})

export default connect(null,mapDispatch)(Album);
