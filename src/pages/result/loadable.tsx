import Loadable from 'react-loadable';
import React from "react";
import {Spin} from "antd";

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading(){
        return (
            <div><Spin/></div>
        );
    },
});

const loadable = () => <LoadableComponent/>;
export default loadable
