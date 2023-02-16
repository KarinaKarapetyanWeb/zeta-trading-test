import React, { useEffect, useState } from "react";
import { UNIQUE_TREE_NAME } from "../../const";
import { INode } from "../../models/INode";
import cn from "classnames";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../Common/Loader/Loader";
import ErrorMessage from "../Common/ErrorMessage/ErrorMessage";
import TreeNode from "../TreeNode/TreeNode";
import Modal from "../Common/Modal/Modal";
import AddForm from "../AddForm/AddForm";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { addIcon, arrowIcon } from "./icons";

interface TreeProps {}

const Tree: React.FunctionComponent<TreeProps> = () => {
  const { tree } = useTypedSelector((state) => state.tree);
  const { modal } = useTypedSelector((state) => state.modal);

  const [active, setActive] = useState(false);
  const { fetchTree, setModal } = useActions();

  const handleAddBtnClick = () => {
    if (tree) {
      setModal(<AddForm parentId={tree.id} />);
    }
  };

  const [fetchTreeWrapped, isTreeLoading, treeError] = useFetching(() =>
    fetchTree(UNIQUE_TREE_NAME)
  );

  useEffect(() => {
    fetchTreeWrapped();
  }, []);

  return (
    <section className="card border-primary" style={{ maxWidth: 500 }}>
      <div className="card-body" style={{ minHeight: 400 }}>
        <h2 className="text-primary">Tree</h2>

        {isTreeLoading && <Loader />}

        {treeError && <ErrorMessage>{treeError}</ErrorMessage>}

        {!treeError && !isTreeLoading && (
          <div>
            <div className="btn-group w-100">
              <button
                className={cn("btn btn-sm btn-outline-primary w-75", {
                  disabled: !tree?.children || tree?.children?.length === 0,
                  active: active,
                })}
                type="button"
                onClick={() => setActive(!active)}
              >
                Root
                {tree?.children && tree?.children?.length !== 0 && arrowIcon}
              </button>
              <button
                className="btn btn-sm btn-outline-primary"
                type="button"
                aria-label="add node"
                onClick={handleAddBtnClick}
              >
                {addIcon}
              </button>
            </div>
            {active &&
              tree &&
              tree.children &&
              tree.children.map((node: INode) => (
                <TreeNode key={node.id} node={node} />
              ))}
          </div>
        )}
      </div>
      {modal && <Modal>{modal}</Modal>}
    </section>
  );
};

export default Tree;
