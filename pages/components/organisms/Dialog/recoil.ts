import { atom } from "recoil";

export const isOpenDialog = atom({
  key: "organisms/Dialog/isOpenDialog",
  default: false,
});

export const dialogNode = atom({
  key: "organisms/Dialog/dialogNode",
  default: undefined as JSX.Element | undefined,
});
