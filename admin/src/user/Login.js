import {Button, Form, Row} from 'react-bootstrap'
import {useForm} from 'react-hook-form'

export default function Login() {

  const {register, handleSubmit} = useForm()

  function onSubmit(e) {
    console.log('You clicked submit: ', JSON.stringify(e))
  }

  return (
    <Row className="justify-content-sm-center">
      <Form onSubmit={handleSubmit(onSubmit)} className="col-2">
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" {...register("username")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" {...register("password")} />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </Row>
  )
}
