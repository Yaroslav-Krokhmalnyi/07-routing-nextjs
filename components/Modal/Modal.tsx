// // components/Modal/Modal.tsx

"use client";

import { useRouter } from "next/navigation";
import css from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>
        {children}
        <button className={css.closeButton} onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;