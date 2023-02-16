import React, { useState } from "react";
import { INode } from "../../models/INode";
import cn from "classnames";
import AddForm from "../AddForm/AddForm";
import EditForm from "../EditForm/EditForm";
import DeleteForm from "../DeleteForm/DeleteForm";
import { useActions } from "../../hooks/useActions";
import { arrowIcon, deleteIcon, editIcon } from "./icons";
import { addIcon } from "../Tree/icons";

interface ItemProps {
  node: INode;
}

const TreeNode: React.FunctionComponent<ItemProps> = ({ node }) => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const { setModal } = useActions();

  const handleItemClick = (id: number) => {
    setActiveNode((prev: number | null) => {
      if (prev === id) {
        return null;
      }
      return id;
    });
  };

  const handleAddBtnClick = () => {
    setModal(<AddForm parentId={node.id} />);
  };

  const handleEditBtnClick = () => {
    setModal(<EditForm nodeId={node.id} />);
  };

  const handleDeleteBtnClick = () => {
    setModal(<DeleteForm nodeId={node.id} />);
  };

  return (
    <>
      <div
        key={node.id}
        className="btn-group w-100"
        style={{ marginBottom: -1, paddingLeft: 10 }}
      >
        <button
          className={cn("btn btn-sm btn-outline-primary w-75", {
            disabled: !node.children || !node.children?.length,
            active: activeNode === node.id,
          })}
          type="button"
          onClick={() => handleItemClick(node.id)}
        >
          {node.name}
          {node?.children && node?.children?.length !== 0 && arrowIcon}
        </button>

        <button
          className="btn btn-sm btn-outline-primary"
          type="button"
          aria-label="add node"
          onClick={handleAddBtnClick}
        >
          {addIcon}
        </button>
        <button
          className="btn btn-sm btn-outline-secondary"
          type="button"
          aria-label="rename node"
          onClick={handleEditBtnClick}
        >
          {editIcon}
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          type="button"
          aria-label="delete node"
          onClick={handleDeleteBtnClick}
        >
          {deleteIcon}
        </button>
      </div>
      {activeNode === node.id &&
        node.children &&
        node.children?.map((childNode: INode) => (
          <div style={{ paddingLeft: 10 }}>
            <TreeNode node={childNode} key={childNode.id} />
          </div>
        ))}
    </>
  );
};

export default TreeNode;
