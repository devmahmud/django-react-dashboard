import axios from 'axios';

const getAllUsers = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    if (/20[0-6]/g.test(res.status)) {
      return res.data;
    }
  } catch (error) {
    return [];
  }
};

const toExport = {
  getAllUsers,
};

export default toExport;
