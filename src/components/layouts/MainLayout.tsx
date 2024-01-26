'use client'
import { Layout } from 'antd'
import React from 'react'

export default function MainLayout({children}:any) {
  return (
    <Layout>
        {children}
    </Layout>
  )
}
