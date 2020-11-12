import React, { PureComponent} from "react";
import {Card, Tag} from "antd";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

interface Props {
    list?: any
}

class TagsCard extends PureComponent<Props>{

    render() {
        const { list } = this.props;
        const listData = list.toJS()
        return(
            <Card title="标签" style={{ float:"right", width: '30%', borderRadius: 8 }}>
                {
                    listData.map((item:any)=>{
                        return (
                            <Link key={item.id} to={'/result/tag/'+item.id}>
                                <Tag color={item.color} style={{marginTop:10, cursor: "pointer"}}>
                                    {item.title}
                                </Tag>
                            </Link>
                        );
                    })
                }
            </Card>
        );
    }
}

interface mapStateStruct {
    list: any
}

const mapState = (state:any):mapStateStruct=>({
    list: state.getIn(['share','tagList'])
})

export default connect(mapState)(TagsCard);
