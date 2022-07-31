import { useDispatch } from "react-redux/es/exports";
import { logout } from "../../store/actions/authAction";
const useNavbar = () => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
    window.notify("User have been successfully logged out.", "success");
  };
  return { logoutUser };
};

export default useNavbar;
