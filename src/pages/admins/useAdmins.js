import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { readAdmin, deleteAdmin } from "../../store/actions/adminAction";

const useAdmins = () => {
  const [fetchLoader, setFetchLoader] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);
  const dispatch = useDispatch();
  const adminFetching = () => {
    dispatch(readAdmin(setFetchLoader));
  };
  const adminDeleting = (uid) => {
    dispatch(deleteAdmin(uid, setButtonLoader));
  };
  const adminsList = useSelector((store) => store.adminReducer.adminsList);
  return {
    adminsList,
    fetchLoader,
    adminFetching,
    adminDeleting,
    buttonLoader,
  };
};

export default useAdmins;
