import type { VueConstructor } from 'vue'
import { VarComponent } from './varComponent'

export interface NormalColumn {
  texts: Texts
  initialIndex?: number
}

export interface CascadeColumn {
  [textKey: string]: any
  children: CascadeColumn[]
}

export type Texts = any[]

export interface PickerProps {
  columns?: NormalColumn[] | CascadeColumn[] | Texts
  title?: string
  textKey?: string
  toolbar?: boolean
  cascade?: boolean
  optionHeight?: string | number
  optionCount?: string | number
  confirmButtonText?: string
  cancelButtonText?: string
  confirmButtonTextColor?: string
  cancelButtonTextColor?: string
  onChange?: (texts: Texts, indexes: number[]) => void
  onConfirm?: (texts: Texts, indexes: number[]) => void
  onCancel?: (texts: Texts, indexes: number[]) => void
}

export class PickerComponent extends VarComponent {
  $props: PickerProps

  confirm(): void

  cancel(): void
}

export type PickerActions = 'confirm' | 'cancel' | 'close'

export interface PickerResolvedData {
  state: PickerActions
  texts?: Texts
  indexes?: number[]
}

export interface PickerOptions {
  columns: NormalColumn | CascadeColumn | Texts
  title?: string
  textKey?: string
  toolbar?: boolean
  cascade?: boolean
  optionHeight?: number | string
  optionCount?: number | string
  confirmButtonText?: string
  cancelButtonText?: string
  confirmButtonTextColor?: string
  cancelButtonTextColor?: string
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onChange?: (texts: Texts, indexes: number[]) => void
  onConfirm?: (texts: Texts, indexes: number[]) => void
  onCancel?: (texts: Texts, indexes: number[]) => void
}

export interface IPicker {
  (options: PickerOptions | Texts): Promise<PickerResolvedData>
  Component: typeof PickerComponent

  install(app: VueConstructor): void

  close(): void
}

export const Picker: IPicker

export class _PickerComponent extends PickerComponent {}
