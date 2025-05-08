// import React from "react";

// import { Modal, Button, Form } from "react-bootstrap";

// const Login = ({ show, handleClose, handleShow }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Login submitted!");
//     handleClose();
//   };
//   return (
//     <div>
//       <button
//         onClick={handleShow}
//         className="bg-orange-500 text-white  w-[100px] h-[30px] pb-5 rounded"
//       >
//         sign in
//       </button>
//       <Modal
//         show={show}
//         onHide={handleClose}
//         centered
//         dialogClassName="absolute w-full max-w-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
//         contentClassName="bg-gray-100 text-black rounded-xl border-none shadow-2xl animate-slide-in"
//       >
//         <Modal.Header className="border-b border-black-700 p-4">
//           <Modal.Title className="text-2xl font-bold text-orange-500">
//             Login
//           </Modal.Title>
//           <button
//             className="text-black opacity-80 hover:opacity-100"
//             onClick={handleClose}
//           >
//             <span aria-hidden="true">×</span>
//           </button>
//         </Modal.Header>
//         <Modal.Body className="p-4">
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-4" controlId="formEmail">
//               <Form.Label className="text-gray-300 font-medium"></Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 required
//                 className="bg-black-800 border border-black-600 text-black rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//               />
//             </Form.Group>
//             <Form.Group className="mb-4" controlId="formPassword">
//               <Form.Label className="text-white-300 font-medium"></Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter your password"
//                 required
//                 className="bg-black-800 border border-white-600 text-white rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//               />
//             </Form.Group>
//             <Button
//               variant="primary"
//               type="submit"
//               className="w-[150px] x- bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
//             >
//               Login
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default Login;

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function BasicExample() {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default BasicExample;
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function FormFloatingBasicExample() {
  return (
    <>
      <div className="ml-[200px]">
        <div className="email-box">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </div>
      </div>
    </>
  );
}

export default FormFloatingBasicExample;
