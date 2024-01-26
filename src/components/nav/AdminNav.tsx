'use client'
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter, usePathname } from 'next/navigation';
import { useWindowWidth } from '@react-hook/window-size';

import { 
  BgColorsOutlined, 
  CameraOutlined, 
  CommentOutlined, 
  PushpinOutlined, 
  SettingOutlined, 
  UserSwitchOutlined 
} from '@ant-design/icons';

const { Sider } = Layout;
const items = [
  {
    label: 'Dashboard',
    key: '/admin',
    icon: <SettingOutlined/>,
    disabled: true,
  },
  {
    label: 'Orders',
    key: '1',
    icon: <CommentOutlined />,
    children: [
      {
        label: 'Spot Order',
        key: '/orders',
      },
      {
        label: 'Crypto',
        key: '/admin/crypto',
      },
      {
        label: 'Transaction History',
        key: '/order/history',
        disabled: true,
      },
    ],
  },
];

export default function Admin2Nav() {
  
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const [current, setCurrent] = useState('mail');
  const { authenticated, currentUser } = useSelector((state:any) => state.auth);

  // hooks
  const onlyWidth = useWindowWidth();

  const onClick = (e:any) => {
    // console.log('click ', e.key);
    // if(e.key === 'orders'){
      router.push(e.key)
      setCurrent(e.key);
    // }
  };
  useEffect(() => {
    setCurrent(pathname);
  });
  useEffect(() => {
    if (onlyWidth < 800) {
      setCollapsed(true);
    } else if (onlyWidth > 800) {
      setCollapsed(false);
    }
  }, [onlyWidth < 800]);

  return (
    <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        width={200} 
        className='full-height'
    >
      <Menu 
        onClick={onClick} 
        selectedKeys={[current]} 
        defaultOpenKeys={["1", "2", "6", "10"]}
        style={{ height: '100%', borderRight: 0 }}
        mode="inline" 
        items={  items } 
      />
    </Sider>
  )
}
