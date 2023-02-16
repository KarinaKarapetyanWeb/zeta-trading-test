import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { useActions } from "../../../hooks/useActions";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface ErrorModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const ErrorModal: React.FunctionComponent<ErrorModalProps> = ({ children }) => {
  const { setModal } = useActions();

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Something wrong</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={() => setModal(null)}
        ></button>
      </div>
      <div className="modal-body">
        <ErrorMessage>{children}</ErrorMessage>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
          onClick={() => setModal(null)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
