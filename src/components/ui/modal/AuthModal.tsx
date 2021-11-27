import { loginWithGoogle } from "@/utils/auth";
import Button from "../Button";
import Modal, { ModalProps } from "./Modal";

export default function AuthModal(props: ModalProps) {
  const onLogin = () => {
    loginWithGoogle()
      .then(() => {
        props.onClose();
      })
      .catch(console.log);
  };

  return (
    <Modal {...props}>
      <Button label="Log In" onClick={onLogin} />
    </Modal>
  );
}
