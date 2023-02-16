import React from "react";
import { ModalActionsEnum, SetModalAction } from "./types";

export const ModalActionCreators = {
  setModal: (data: React.ReactNode | null): SetModalAction => ({
    type: ModalActionsEnum.SET_MODAL,
    payload: data,
  }),
};
