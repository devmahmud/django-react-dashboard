import { Row, Col, Card } from 'antd';
import Navbar from '../layout/Navbar';
import BarChart from './Charts/BarChart';
import LiquidChart from './Charts/LiquidChart';
import PieChart from './Charts/PieChart';
import UserTable from './UserTable';

export default function Dashboard() {
  return (
    <div>
      <Navbar />

      <div className="custom-padding">
        {/* Charts */}
        <Row gutter={[24, 16]}>
          <Col md={8} sm={12} xs={24}>
            <Card title="Bar Chart" bordered={false}>
              <BarChart />
            </Card>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <Card title="Pie Chart" bordered={false}>
              <PieChart />
            </Card>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <Card title="Liquid Chart" bordered={false}>
              <LiquidChart />
            </Card>
          </Col>

          {/* User Table */}
          <Col xs={24}>
            <Card title="User Table" bordered={false}>
              <UserTable />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
