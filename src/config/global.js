import { toast } from "react-toastify";
window.notify = (msg, type) => {
  switch (type) {
    case "success":
      toast.success(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "success":
      toast.info(msg);
      break;
    case "success":
      toast.warning(msg);
      break;

    default:
      toast(msg);
      break;
  }
};
