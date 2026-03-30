import { Typography, Card, Row, Col, Statistic } from 'antd'
import { TeamOutlined, ProjectOutlined, RocketOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

export default function Home() {
  return (
    <div>
      <Typography>
        <Title level={2}>欢迎使用 First Demo</Title>
        <Paragraph>
          这是一个基于 React + Ant Design + React Router + TypeScript 搭建的 Web 应用。
        </Paragraph>
      </Typography>

      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={8}>
          <Card>
            <Statistic
              title="用户数"
              value={1128}
              prefix={<TeamOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="项目数"
              value={93}
              prefix={<ProjectOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="部署次数"
              value={256}
              prefix={<RocketOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}
