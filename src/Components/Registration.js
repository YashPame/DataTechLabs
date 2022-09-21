import Navbar from "../Navbar";
import './Registration.css'

function Registration() {
  return (
    <>
      <form action="">
        <div className="container">

          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

          <label htmlFor="psw-repeat"><b>Confirm Password</b></label>
          <input type="password" placeholder="Confirm Password" name="psw-repeat" id="psw-repeat" required />
          <hr />

          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a></p>
          <button type="submit" className="registerbtn">Register</button>
        </div>

        <div className="container signin">
          <p>Already have an account? <a href="#">Sign in</a>.</p>
        </div>
      </form>
    </>
  );
}

export default Registration;