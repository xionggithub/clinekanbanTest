import { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu, theme } from 'antd'
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout

const menuItems = [
  { key: '/', icon: <HomeOutlined />, label: '首页' },
  { key: '/about', icon: <InfoCircleOutlined />, label: '关于' },
]

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div style={{
          height: 32,
          margin: 16,
          color: '#fff',
          fontSize: collapsed ? 14 : 18,
          fontWeight: 'bold',
          textAlign: 'center',
          lineHeight: '32px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}>
          {collapsed ? 'FD' : 'First Demo'}
        </div>
        <Menu
          theme="dark"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: '0 24px', background: colorBgContainer }}>
          <h2 style={{ margin: 0, lineHeight: '64px' }}>First Demo</h2>
        </Header>
        <Content style={{ margin: 24 }}>
          <div style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          First Demo &copy; {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  )
}
