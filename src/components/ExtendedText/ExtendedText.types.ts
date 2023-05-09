import { CSSProperties } from "react"

export enum TEXT_PRESETS {
  SEMIBOLD_15 = 'semibold-15',

  LIGHT_20 = 'light-20',

  REG_40 = 'reg-40',
  REG_33 = 'reg-33',
  REG_30 = 'reg-30',
  REG_22= 'reg-22',
  REG_18= 'reg-18',
  REG_16 = 'reg-16',
  REG_14 = 'reg-14',
}

export type ExtendedTextProps = {
  style?: Partial<CSSProperties>;
  preset: TEXT_PRESETS;
  children: any;
}


