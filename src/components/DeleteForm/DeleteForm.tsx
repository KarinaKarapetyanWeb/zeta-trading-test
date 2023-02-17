import React, { useEffect } from "react";
import { UNIQUE_TREE_NAME } from "../../const";
import { useActions } from "../../hooks/useActions";
import { useFetching } from "../../hooks/useFetching";
import ErrorModal from "../Common/ErrorModal/ErrorModal";

interface DeleteFormProps {
  nodeId: number;
}

const DeleteForm: React.FunctionComponent<DeleteFormProps> = ({ nodeId }) => {
  const { setModal, deleteNode } = useActions();

  const [deleteNodeWrapped, isDeletingLoading, deleteError] = useFetching(() =>
    deleteNode(UNIQUE_TREE_NAME, nodeId)
  );

  const handleDeleteBtnClick = () => {
    deleteNodeWrapped();
  };

  const isBtnDisabled = isDeletingLoading;

  useEffect(() => {
    if (deleteError) {
      setModal(<ErrorModal>{deleteError}</ErrorModal>);
    }
  }, [deleteError]);

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Delete Node</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={() => setModal(null)}
        ></button>
      </div>
      <div className="modal-body">
        <p>Are you sure want to delete?</p>
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleDeleteBtnClick}
          disabled={isBtnDisabled}
        >
          {isDeletingLoading && (
            <span
              className="spinner-border spinner-border-sm me-1"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteForm;
