import { useRef } from "react";
import UseHttp from "../../hooks/http-hook";
import { useNavigate } from 'react-router-dom';


const Login = ()=>{
  const navigate = useNavigate();
  const usernameRef=useRef("");
  const passwordRef=useRef("");
  
  const saveToken = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      const data = await UseHttp(
        "login",
        "POST",
        formData
      );
      localStorage.setItem('token', data.token);
      navigate("/")
    };
    

  return(
    <div className="lgn-container">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <div className="login-form">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your Username" ref={usernameRef}/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your Password" ref={passwordRef}/>
          <button type="submit" className="login-button" id="login-button" onClick={saveToken} >Login</button>
          <p className="forgot-password"><a href="#">Forgot your password?</a></p>
          <p className="register-link">Not registered? <a href="register.html">Register as a new User</a></p>
        </div>
      </div>
    </div>
  )
}
export default Login