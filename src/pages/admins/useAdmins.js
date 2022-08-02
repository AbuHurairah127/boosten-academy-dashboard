import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { readAdmin } from "../../store/actions/adminAction";

const useAdmins = () => {
  const [fetchLoader, setFetchLoader] = useState(false);
  const dispatch = useDispatch();
  const adminFetching = () => {
    dispatch(readAdmin(setFetchLoader));
  };
  const adminsList = useSelector((store) => store.adminReducer.adminsList);
  return { adminsList, fetchLoader, adminFetching };
};

export default useAdmins;
