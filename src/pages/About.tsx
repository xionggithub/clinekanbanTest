import { Typography, Descriptions } from 'antd'

const { Title } = Typography

export default function About() {
  return (
    <div>
      <Title level={2}>关于</Title>
      <Descriptions bordered column={1} style={{ marginTop: 24 }}>
        <Descriptions.Item label="项目名称">First Demo</Descriptions.Item>
        <Descriptions.Item label="技术栈">React + TypeScript + Ant Design + Vite</Descriptions.Item>
        <Descriptions.Item label="路由">React Router v7</Descriptions.Item>
        <Descriptions.Item label="构建工具">Vite</Descriptions.Item>
        <Descriptions.Item label="UI 框架">Ant Design</Descriptions.Item>
      </Descriptions>
    </div>
  )
}
