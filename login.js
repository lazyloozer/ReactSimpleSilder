import { Component } from "react";
class Login extends Component {
  render() {
    return (
      <form>
        <label>Username </label>
        <input type="text" name="USername"></input>
        <br></br>
        <br></br>
        <label>Password </label>

        <input type="text" name="Password"></input>
        <br></br>
        <br></br>
        <input type="submit"></input>
      </form>
    );
  }
}
export default Login;
