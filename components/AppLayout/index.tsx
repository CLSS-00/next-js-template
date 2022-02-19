import React from 'react'

import { Layout } from 'antd'
import Head from 'next/head'


import styles from './styles.module.scss'

import 'antd/dist/antd.css'
const { Content, Footer } = Layout
export const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout style={{ padding: '24px 0' }}>
    <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>
  </Layout>
)
function AppLayout({ children }: { children: React.ReactNode }) {

  return (
    <Layout>
      <Head>
        <title>Interview Grader</title>
        <meta name="description" content="Review you knowledge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Content>
      
        {children}
      </Content>
      <Footer className={styles.footer}>
      ©2021 Elevated Code
      </Footer>
    </Layout>
  )
}

export default AppLayout
