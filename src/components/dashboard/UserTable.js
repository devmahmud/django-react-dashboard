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
    text: 'Address',
    dataField: 'address.street',
  },
  {
    text: 'Suite',
    dataField: 'address.suite',
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

  console.log(users);

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
    />
  );
}
