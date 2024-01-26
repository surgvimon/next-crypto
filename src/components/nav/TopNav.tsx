'use client'
import { Avatar, Menu, Space, message } from 'antd';
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptoValue, onLogOut, setCryptoValue } from '@/services/user.service';
import ToggleTheme from './ToggleTheme';

function TopNav() {
  const router = useRouter();
  const patch = usePathname();
  const [current, setCurrent] = useState('mail');
  const { authenticated } = useSelector((state:any) => state.auth);
  const { currentUserProfile } = useSelector((state:any) => state.profile);
  const dispatch = useDispatch();

  const items = [
    {
      label: 'Home',
      key: '/',
    },
    {
      label: 'Buy Crypto',
      key: '/crypto',
    },
  ];

  const handleClick = async (e:any) => {
    if(e.key !== 'theme' && e.key !== 'logout'){
      router.push(e.key)
    } else if( e.key === 'logout') {
      try {
        await onLogOut(dispatch);
        router.push("/signin");      
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setCurrent(patch)
    getCryptoValue(dispatch);
    // console.log(cryptos)
  })
  return (
    <div className="p-sticky">
        <Menu 
            onClick={handleClick} 
            selectedKeys={[current]} 
            mode="horizontal" 
            items={
              authenticated ? 
              [...items,    
                {
                    label: currentUserProfile?.name,
                    key: 'dashboard1',
                    icon: <Space size={16} wrap>
                            <Avatar 
                              src={<img src={currentUserProfile?.photoURL ?? '../../user.png'} alt="avatar" />} 
                            />
                          </Space>,
                    style: {marginLeft: "auto"},
                    children: [
                      {
                        type: 'group',
                        label: 'Managment',
                        children: [
                          {
                            label: 'Orders',
                            icon: <i className="ri-home-7-line"></i>,
                            key: `/orders`,
                          },
                          {
                            label: 'Logout',
                            icon: <i className="ri-home-7-line"></i>,
                            key: 'logout',
                          },
                        ],
                      },
                    ],
                },
                {
                label: ( <ToggleTheme /> ),
                key: 'theme',
                },
              ]  
              : 
              [...items,    
                {
                    label: 'Signin',
                    key: '/signin',
                    // icon: <i className="ri-user-settings-line icons-16"></i>,
                    style: {marginLeft: "auto"},
                },
                {
                label: ( <ToggleTheme /> ),
                key: 'theme',
                },
              ]
             } 
        />
    </div>
  );
}

export default TopNav
