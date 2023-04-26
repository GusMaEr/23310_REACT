import Form from 'react-bootstrap/Form';
import "../css/Tarjeta.css"

function TextControlsExample() {
  return (
    <>
    <body >
      
    <Form className="container mt-3 mb-3" >
      <Form.Group className="col col-sm-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control   whit='50%' type="text" placeholder="Nombre" required size="10" />
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Apellido" required/>
      </Form.Group>
        <Form.Group className="col col-sm-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Email de contacto</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" required/>
      </Form.Group>
      <Form.Group className="col col-sm-2" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Envianos tu consulta</Form.Label>
        <Form.Control as="textarea" rows={3} required/>
      </Form.Group>
      <br />
    
      <button type="submit" onClick="{submitButton}" className="me-4 btn btn-success btn-lg btn-block">Submit</button>
     
 

     </Form>
    
     </body>
     </>
  );
}

export default TextControlsExample;