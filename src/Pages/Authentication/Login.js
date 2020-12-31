import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import "./Login.css";
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { auth } from "../../firebase";
import {useHistory} from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        setModal(false);
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div>
      <Button className="login__modal" onClick={toggle}>
        Login
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="login__modal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader toggle={toggle}>Sign in to your Account</ModalHeader>
        <ModalBody>
          {/* Username */}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <PersonIcon />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Enter username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <br />

          {/* Password */}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <LockIcon />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <div className="login__btn">
            <Button color="primary" onClick={signIn}>
              Login
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Login;
