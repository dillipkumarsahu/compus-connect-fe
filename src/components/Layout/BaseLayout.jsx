/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Layout, theme } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import appConfig from '../../app/config/app.config';
import TopNavBar from '../common/TopNavBar';
import { useSelector } from 'react-redux';
const { Header, Content } = Layout;
const { useBreakpoint } = Grid;

const BaseLayout = ({ page_title, children }) => {
    const { data: isAuthenticate } = useSelector(state => state.authReducer);
    const screens = useBreakpoint();
    const location = useLocation();
    const navigate = useNavigate();
    const { token: { colorBgContainer } } = theme.useToken();

    useEffect(() => {
        if (!isAuthenticate) {
            //    
        }
        else {
            navigate('/login');
        }
    }, [location.pathname]);

    return (
        <Layout style={{ height: '100vh' }}>
            <Helmet>
                <title>{page_title} | {appConfig.app.name}</title>
            </Helmet>
            <Header
                style={{
                    background: colorBgContainer,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 40px',
                    borderBottom: '0.3px solid #000000'
                }}
            >
                <TopNavBar />
            </Header>
            <Content
                style={{
                    padding: screens.lg ? '0 90px' : 0,
                    background: colorBgContainer,
                    overflow: 'auto'
                }}
            >
                {children}
            </Content>
        </Layout>
    )
}
export default BaseLayout;