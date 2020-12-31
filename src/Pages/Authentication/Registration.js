import React,{useState} from "react";
import "./Registration.css";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { auth } from "../../firebase";
import {useHistory} from "react-router-dom";
import userEvent from "@testing-library/user-event";

function Registration() {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');

  const register = (e) =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((auth) =>{
      //it successfully created a new user with email and password
      console.log(auth);
      if(auth){
        history.push('/');
      }
    }).catch(error => alert(error.message))
  }
  return (
    <div className="registration">
      <form>
        <div className="signup__box">
          <h5>Register Now</h5>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <PersonIcon />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Enter username" value={email} onChange={e => setEmail(e.target.value)} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <LockIcon />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Enter password" value={password} onChange ={e => setPassword(e.target.value)}/>
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <LockIcon />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="confirm password" />
          </InputGroup>

          <div className="signup__btn">
            <Button color="primary" onClick={register}>Sign Up</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;
