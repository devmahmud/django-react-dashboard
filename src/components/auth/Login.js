import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card, Form, Button, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

import { login } from '../../redux/authSlice';
import authAPI from '../../services/authAPI';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (values) => {
    setLoading(true);

    const res = await authAPI.login(values);

    if (res !== undefined && /20[0-6]/g.test(res.status)) {
      dispatch(login(res.data));
      setTimeout(function () {
        setLoading(false);
        history.push('/dashboard/');
      }, 2000);
    } else {
      setLoading(false);
      if (res?.response?.data?.non_field_errors) {
        toast.error(res?.response?.data?.non_field_errors[0]);
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  return (
    <div>
      <Row>
        <Col md={5} className="mx-auto mt-5">
          <Card>
            <Card.Body>
              <Card.Title as="h5" className="text-center">
                Login
              </Card.Title>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    {...register('username', { required: true })}
                    isInvalid={errors.username}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    {...register('password', { required: true })}
                    isInvalid={errors.username}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="mt-3"
                  block
                  disabled={loading}
                >
                  Login {loading && <Spinner animation="border" size="sm" />}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
