import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { StyledPrimaryLayout } from './StyledPrimaryLayout';
import { useState } from 'react';
import Layout, { Content } from 'antd/es/layout/layout';
import Sidenav from '../components/Sidenav/Sidenav';
import styled from "styled-components";
import ChatBar from '../components/ChatBar/ChatBar';

const PrimaryLayout: React.FC = () => {

 
    return (
        <StyledPrimaryLayout>
            <div className='primary-left'>
                <Sidenav />
            </div>
            <div className='primary-right'>
                <div className='header-wrapper'>
                    <Header />
                </div>
                <div className='children-wrapper'>
                    <div className='primary-main'>
                        <Outlet />
                    </div>
                     <div className='primary-end'>
                        <ChatBar />
                    </div> 
                </div>
            </div>
            
        </StyledPrimaryLayout>
    );
};

export default PrimaryLayout;