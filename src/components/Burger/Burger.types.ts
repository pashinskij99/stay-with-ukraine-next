import { Dispatch, SetStateAction } from "react";

export type BurgerProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
}