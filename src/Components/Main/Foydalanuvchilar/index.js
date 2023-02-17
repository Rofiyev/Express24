import React, { useRef, useState } from "react";
import UsersPageWrapper from "./UsersPageStyle";
import { CiEdit } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";
import { useSelector } from "react-redux";
import { changeUser, deleteUser } from "../../../Redux/actions";
import { Button, Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";

export default function Users() {
  const [state, setState] = useState();
  
  const data = useSelector((state) => state.users.data);
  
  // Modal Content
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // useRef
  const ref = useRef(null);
  const getData = () => {
    handleClose(false);
    const chageUserData = {
      name: ref.current.username.value,
      phone: ref.current.phone.value,
      job: ref.current.job.value,
    };
    ref.current.reset();
    changeUser(chageUserData, state);
  };

  const removeUsers = (ind) => deleteUser(ind);
  return (
    <UsersPageWrapper>
      <div className="container">
        <h2>Foydalanuvchilar</h2>
        <p className="text_2">Rollarni biriktirishingiz mumkin</p>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">To'liq ismi</th>
              <th scope="col">Telefon raqami</th>
              <th scope="col">Roli</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr key={i}>
                  <th className="num" scope="col">
                    {i + 1}
                  </th>
                  <td scope="col">{item.name}</td>
                  <td scope="col">{item.phone}</td>
                  <td scope="col">{item.job}</td>
                  <td scope="col"></td>
                  <td scope="col"></td>
                  <td>
                    <CiEdit
                      onClick={() => {
                        handleShow(false);
                        setState(i);
                      }}
                      className="icon me-2"
                    />{" "}
                    <BsTrash
                      onClick={() => removeUsers(i)}
                      className="icon bgRed"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-between px-3 w-75">
          <span className="fw-bold">Jami:</span>
          <span className="fw-bold">{data.length} akkaunt</span>
        </div>
        {/* Modal Page */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Change User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form ref={ref}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">To'liq ismi</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Ism Sharifi"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Telefon raqami</Form.Label>
                <Form.Control
                  name="phone"
                  type="number"
                  placeholder="+998 xx xxx xx xx"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Vazifasi</Form.Label>
                <Form.Control
                  name="job"
                  type="text"
                  placeholder="Vazifasi nomi"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={handleClose}>
              No
            </Button>
            <Button variant="success" onClick={getData}>
              Sava
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </UsersPageWrapper>
  );
}
