import React, { useEffect, useState } from "react";
import { UNIQUE_TREE_NAME } from "../../const";
import { useActions } from "../../hooks/useActions";
import { useFetching } from "../../hooks/useFetching";
import ErrorModal from "../Common/ErrorModal/ErrorModal";

interface EditFormProps {
  nodeId: number;
}

const EditForm: React.FunctionComponent<EditFormProps> = ({ nodeId }) => {
  const [nodeName, setNodeName] = useState("");
  const { setModal, renameNode } = useActions();

  const [renameNodeWrapped, isRenamedNodeLoading, renamedNodeError] =
    useFetching(() => renameNode(UNIQUE_TREE_NAME, nodeId, nodeName));

  const handleEditBtnClick = async () => {
    renameNodeWrapped();
  };

  const isBtnDisabled = !nodeName || isRenamedNodeLoading;

  useEffect(() => {
    if (renamedNodeError) {
      setModal(<ErrorModal>{renamedNodeError}</ErrorModal>);
    }
  }, [renamedNodeError]);

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Edit Node</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={() => setModal(null)}
        ></button>
      </div>
      <div className="modal-body">
        <div>
          <label htmlFor="nodeName" className="form-label">
            Node name
          </label>
          <input
            type="email"
            className="form-control"
            id="nodeName"
            aria-describedby="emailHelp"
            value={nodeName}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
              setNodeName(evt.target.value)
            }
          />
        </div>
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
          onClick={handleEditBtnClick}
          disabled={isBtnDisabled}
        >
          {isRenamedNodeLoading && (
            <span
              className="spinner-border spinner-border-sm me-1"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          Rename
        </button>
      </div>
    </div>
  );
};

export default EditForm;
