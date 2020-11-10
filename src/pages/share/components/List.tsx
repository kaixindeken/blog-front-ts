import React, {Fragment, PureComponent} from "react";
import { List, Space, Divider  } from "antd";
import {ListRM} from "../../style";
import {connect} from "react-redux";
import { EyeOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

interface Props {
    list?: any
}

class ArticleList extends PureComponent<Props>{

    getActions(tags: any){
        const actions = [];
        for (let i=0;i<tags.length;i++){
            actions.push(
                <Space style={{color: "grey"}}>{tags[i].title}</Space>
            );
        }
        return actions;
    }

    render() {
        const {list} = this.props;
        const listData = list.toJS();

        return(
            <ListRM>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 10
                    }}
                    dataSource={ listData }
                    renderItem={(item: any) => (
                        <Fragment>
                            <Link to={"/detail/" + item.id}>
                                <List.Item
                                    key={item.id}
                                    actions={this.getActions(item.tag)}
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
            </ListRM>
        );
    }

}

const mapState = (state:any):{list:any}=>({
    list: state.getIn(['share','articleList']),
});

export default connect(mapState)(ArticleList);
