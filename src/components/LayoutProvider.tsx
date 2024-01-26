"use client"
import { ConfigProvider, message } from 'antd'
import th_TH from 'antd/locale/th_TH'
import React, { useEffect } from 'react'
import ScrollToTop from './ScrollToTop'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from '@/services/user.service'

const LayoutProvider = ({ children } : {children: React.ReactNode}) => {
    const { theme } = useSelector((state:any) => state.themes);
    const dispatch = useDispatch();
    const CurrentUser = async () => {
        try {
            await getCurrentUser(dispatch);
        } catch (error:any) {
            message.error(error.response.data.message || "Something went wrong")
        }
    };

    useEffect(() => {
        CurrentUser();
    })
    return (
    <html lang="en">
        <head>
            <link rel="stylesheet" href={`../css/${theme}.css`}/>
            <link
                href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            />
        </head>
        <body>
            <ScrollToTop/>
            <ConfigProvider 
                locale={th_TH}
            >
                { children }
            </ConfigProvider>
        </body>
    </html>
  )
}

export default LayoutProvider
