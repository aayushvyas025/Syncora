import toast from "react-hot-toast";

export function successToast(msg) {
  toast.success(msg);
}

export function errorToast(msg) {
  toast.error(msg);
}
