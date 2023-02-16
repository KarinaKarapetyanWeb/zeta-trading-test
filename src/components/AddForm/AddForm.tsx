import React, { useEffect, useState } from "react";
import { UNIQUE_TREE_NAME } from "../../const";
import { useActions } from "../../hooks/useActions";
import { useFetching } from "../../hooks/useFetching";
import ErrorModal from "../Common/ErrorModal/ErrorModal";

interface AddFormProps {
  parentId: number;
}

const AddForm: React.FunctionComponent<AddFormProps> = ({ parentId }) => {
  const [nodeName, setNodeName] = useState("");
  const { setModal, addNode } = useActions();

  const [addNodeWrapped, isAddNodeLoading, addNodeError] = useFetching(() =>
    addNode(UNIQUE_TREE_NAME, parentId, nodeName)
  );

  const handleAddBtnClick = async () => {
    addNodeWrapped();
  };

  const isBtnDisabled = !nodeName || isAddNodeLoading;

  useEffect(() => {
    if (addNodeError) {
      setModal(<ErrorModal>{addNodeError}</ErrorModal>);
    }
  }, [addNodeError]);

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Add Node</h5>
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
          onClick={handleAddBtnClick}
          disabled={isBtnDisabled}
        >
          {isAddNodeLoading && (
            <span
              className="spinner-border spinner-border-sm me-1"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          Add
        </button>
      </div>
    </div>
  );
};

export default AddForm;
