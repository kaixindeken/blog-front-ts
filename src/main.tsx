import React, {PureComponent} from "react";
import {Provider} from 'react-redux'
import store from "./store";
import {BackTop, Layout} from 'antd';
import {HashRouter, Route} from "react-router-dom";
import Header from "./common/header";
import Footer from "./common/footer";
import Share from "./pages/share";
import Detail from "./pages/detail/loadable";
import Result from "./pages/result/loadable";
import Album from "./pages/album";
import Admin from "./common/redirect/admin";

class Main extends PureComponent{
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Layout>
                        <Header/>

                        <Route path={'/'} exact component={Share}/>
                        <Route path={'/album'} exact component={Album}/>
                        <Route path={'/detail/:id'} exact component={Detail}/>
                        <Route path={'/result/:type/:id'} exact component={Result}/>
                        <Route path={'/admin'} exact component={Admin}/>

                        <BackTop style={{
                            height: 40,
                            width: 40,
                            lineHeight: '40px',
                            borderRadius: 4,
                            backgroundColor: '#1088e9',
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: 14,
                        }}>Up</BackTop>

                        <Footer />
                    </Layout>
                </HashRouter>
            </Provider>
        );
    }
}

export default Main
