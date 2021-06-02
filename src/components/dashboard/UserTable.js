import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { getAllUsersAsync } from '../../redux/userSlice';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Address',
    dataIndex: ['address', 'street'],
  },
  {
    title: 'Suite',
    dataIndex: ['address', 'suite'],
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
  {
    title: 'Website',
    dataIndex: 'website',
  },
  {
    title: 'Company',
    dataIndex: ['company', 'name'],
  },
];

export default function UserTable() {
  const dispatch = useDispatch();

  const { users, usersRequestStatus } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsersAsync());
    // eslint-disable-next-line
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={users}
      rowKey="id"
      loading={usersRequestStatus === 'pending' ? true : false}
    />
  );
}
