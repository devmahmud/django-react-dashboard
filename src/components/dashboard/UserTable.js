import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import { getAllUsersAsync } from '../../redux/userSlice';

const columns = [
  {
    text: 'Name',
    dataField: 'name',
  },
  {
    text: 'Username',
    dataField: 'username',
  },
  {
    text: 'Email',
    dataField: 'email',
  },
  {
    text: 'Phone',
    dataField: 'phone',
  },
  {
    text: 'Website',
    dataField: 'website',
  },
  {
    text: 'Company',
    dataField: 'company.name',
  },
];

export default function UserTable() {
  const dispatch = useDispatch();

  const { users, usersRequestStatus } = useSelector((state) => state.user);

  const expandRow = {
    renderer: (row) => (
      <table className="table table-sm table-responsive-sm">
        <tr>
          <th>Street</th>
          <th>Suite</th>
          <th>City</th>
          <th>Zip Code</th>
          <th>Latitude</th>
          <th>Logitude</th>
        </tr>
        <tr>
          <td>{row.address.street}</td>
          <td>{row.address.suite}</td>
          <td>{row.address.city}</td>
          <td>{row.address.zipcode}</td>
          <td>{row.address.geo.lat}</td>
          <td>{row.address.geo.lng}</td>
        </tr>
      </table>
    ),
    showExpandColumn: true,
  };

  useEffect(() => {
    dispatch(getAllUsersAsync());
    // eslint-disable-next-line
  }, []);

  return (
    <BootstrapTable
      keyField="id"
      classes="table-responsive-sm"
      data={users || []}
      columns={columns}
      pagination={paginationFactory()}
      expandRow={expandRow}
    />
  );
}
