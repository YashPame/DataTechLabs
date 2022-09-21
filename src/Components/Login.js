
import './Login.css'

function Login() {
  return (
    <>
      <form action="">
        <div className="container">

          <h1>Login</h1>
          <hr />

          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required />
          
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
          <button type="submit" className="registerbtn" align="center">Register</button>
          
        </div>
      </form>
    </>
  );
}

export default Login;