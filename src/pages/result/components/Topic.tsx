import React, { PureComponent} from "react";
import { Layout, PageHeader, Typography} from "antd";
import {AlbumHead, } from "../../style";
import {connect} from "react-redux";

const { Content } = Layout;
const {Title, Paragraph} = Typography

interface Props {
    title?: string,
    subtitle?: any,
}

class Topic extends PureComponent<Props> {
    render() {
        window.scrollTo(0, 0);
        const {title,subtitle} = this.props
        return (
            <Content style={{ padding: '0 10%'}}>
                <PageHeader
                    onBack={() => window.history.back()}
                    title={''}
                    subTitle={'Back'}
                />
                <AlbumHead>
                    <Title>{title}</Title>
                    <Paragraph>{subtitle}</Paragraph>
                </AlbumHead>
            </Content>
        );
    }
}

interface mapStateStruct{
    title: string,
    subtitle: any
}

const mapState= (state: any):mapStateStruct=>({
    title: state.getIn(['result','title']),
    subtitle: state.getIn(['result','subtitle'])
})

export default connect(mapState)(Topic);
