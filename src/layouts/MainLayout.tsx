import { memo, useCallback, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu, theme } from 'antd'
import type { MenuProps } from 'antd'
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout

// --- Constants ---

const MENU_ITEMS: MenuProps['items'] = [
  { key: '/', icon: <HomeOutlined />, label: '首页' },
  { key: '/about', icon: <InfoCircleOutlined />, label: '关于' },
]

// --- Static styles (stable references, never recreated) ---

const rootLayoutStyle: CSSProperties = { minHeight: '100vh' }
const contentMarginStyle: CSSProperties = { margin: 24 }
const footerStyle: CSSProperties = { textAlign: 'center' }
const headerTitleStyle: CSSProperties = { margin: 0, lineHeight: '64px' }
const logoBaseStyle: CSSProperties = {
  height: 32,
  margin: 16,
  color: '#fff',
  fontWeight: 'bold',
  textAlign: 'center',
  lineHeight: '32px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}

// --- Sub-components ---

interface SiderLogoProps {
  readonly collapsed: boolean
}

const SiderLogo = memo(function SiderLogo({ collapsed }: SiderLogoProps) {
  const style = useMemo<CSSProperties>(
    () => ({ ...logoBaseStyle, fontSize: collapsed ? 14 : 18 }),
    [collapsed],
  )
  return <div style={style}>{collapsed ? 'FD' : 'First Demo'}</div>
})

// --- Main Layout ---

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken()

  const handleMenuClick = useCallback<NonNullable<MenuProps['onClick']>>(
    ({ key }) => navigate(key),
    [navigate],
  )

  const selectedKeys = useMemo(() => [location.pathname], [location.pathname])

  const headerStyle = useMemo<CSSProperties>(
    () => ({ padding: '0 24px', background: colorBgContainer }),
    [colorBgContainer],
  )

  const contentInnerStyle = useMemo<CSSProperties>(
    () => ({
      padding: 24,
      minHeight: 360,
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
    }),
    [colorBgContainer, borderRadiusLG],
  )

  return (
    <Layout style={rootLayoutStyle}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <SiderLogo collapsed={collapsed} />
        <Menu
          theme="dark"
          selectedKeys={selectedKeys}
          items={MENU_ITEMS}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <h2 style={headerTitleStyle}>First Demo</h2>
        </Header>
        <Content style={contentMarginStyle}>
          <div style={contentInnerStyle}>
            <Outlet />
          </div>
        </Content>
        <Footer style={footerStyle}>
          First Demo &copy; {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  )
}
