import Logout from "../../components/Logout/Logout";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const LogoutPage = () => {

  const authCtx = useContext(AuthContext);
  authCtx.logout();
  
  return <Logout />;
};

export default LogoutPage;
