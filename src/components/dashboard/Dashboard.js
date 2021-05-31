import { Row, Col, Card } from 'antd';
import Navbar from '../layout/Navbar';
import BarChart from './Charts/BarChart';
import LiquidChart from './Charts/LiquidChart';
import PieChart from './Charts/PieChart';

export default function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="custom-padding">
        <Row gutter={24}>
          <Col md={8}>
            <Card title="Bar Chart" bordered={false} style={{ height: '100%' }}>
              <BarChart />
            </Card>
          </Col>
          <Col md={8}>
            <Card title="Card title" bordered={false} style={{ width: '100%' }}>
              <PieChart />
            </Card>
          </Col>
          <Col md={8}>
            <Card title="Card title" bordered={false} style={{ width: '100%' }}>
              <LiquidChart />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
