import React, {PureComponent} from "react";
import { Card, List } from 'antd';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

interface Props {
    list?: any
}

class HotAlbum extends PureComponent<Props> {
    render() {

        const {list} = this.props;
        const listData = list.toJS();

        return (
            <Card
                title="热门资源"
                style={{
                    float:"right",
                    width: "30%",
                    borderRadius: 8,
                    marginTop: "2.5%",
                }}

            >
                <List
                    dataSource={listData}
                    renderItem={(item: any) => (
                        <List.Item>
                            <List.Item.Meta
                                title={<Link to={'/result/album/'+item.id}>{item.title}</Link>}
                            />
                        </List.Item>
                    )}
                />
            </Card>
        )
    }
}

const mapState = (state: any):{list: any} => ({
    list: state.getIn(['share','hotspot']),
})


export default connect(mapState)(HotAlbum);
