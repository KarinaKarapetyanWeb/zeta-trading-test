import React, { DetailedHTMLProps, HTMLAttributes } from "react";

interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Modal: React.FunctionComponent<ModalProps> = ({ children }) => {
  return (
    <div className="modal fade show d-block" tabIndex={-1}>
      <div className="modal-dialog">{children}</div>
    </div>
  );
};

export default Modal;
