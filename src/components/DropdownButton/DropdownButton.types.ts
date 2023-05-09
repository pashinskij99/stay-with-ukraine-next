export type DropdownButtonType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  items: Record<"uk" | "en", string>
};
