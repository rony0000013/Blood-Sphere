import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button className="btn btn-primary bg-[#B31312] hover:bg-[#F99B7D]" onClick={() => loginWithRedirect()}>Log In</button>
}
export default LoginButton;