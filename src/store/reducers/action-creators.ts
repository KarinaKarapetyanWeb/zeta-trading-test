import { ModalActionCreators } from "./modal/action-creators";
import { TreeActionCreators } from "./tree/action-creators";

export const allActionCreators = {
  ...TreeActionCreators,
  ...ModalActionCreators,
};
