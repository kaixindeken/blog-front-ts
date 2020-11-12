import React, {Fragment, PureComponent} from "react";
import {Divider, List, Space} from "antd";
import {connect} from "react-redux";
import { EyeOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

interface Props{
    list?: any,
}

class ArticleList extends PureComponent<Props>{

    render() {
        const { list } = this.props;

        return(
            <List
                itemLayout="vertical"
                size="small"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 10,
                }}
                dataSource={ list }
                renderItem={(item: any) => (
                    <Fragment>
                        <Link to={"/detail/" + item.id}>
                            <List.Item
                                key={item.id}
                                extra={[
                                    <Space key={'eye'}>
                                        {React.createElement(EyeOutlined)}
                                        {item.views}
                                    </Space>
                                ]}
                            >
                                <List.Item.Meta
                                    title={item.title}
                                />
                            </List.Item>
                        </Link>
                        <Divider />
                    </Fragment>
                )}
            />
        );
    }

}

interface mapStateStruct {
    list: any
}

const mapState= (state:any):mapStateStruct=>({
    list: state.getIn(['result','list']),
})

export default connect(mapState)(ArticleList);
