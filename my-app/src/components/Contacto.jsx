import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <>
    <Form>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" required size="10" />
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Apellido" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email de contacto</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Envianos tu consulta</Form.Label>
        <Form.Control as="textarea" rows={3} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <button className="submit" type="button" value="Enviar" />
        </Form.Group>
        
    </Form>
    </>
  );
}

export default TextControlsExample;