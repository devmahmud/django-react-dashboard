import { Row, Col } from 'react-bootstrap';
import TopNavbar from '../layout/TopNavbar';
import BarChart from './Charts/BarChart';
import LiquidChart from './Charts/LiquidChart';
import PieChart from './Charts/PieChart';
import UserTable from './UserTable';

export default function Dashboard() {
  return (
    <div>
      <TopNavbar />

      <div className="mt-4">
        {/* Charts */}
        <Row>
          <Col md={4}>
            <BarChart />
          </Col>
          <Col md={4}>
            <PieChart />
          </Col>
          <Col md={4}>
            <LiquidChart />
          </Col>
        </Row>
      </div>
    </div>
  );
}
