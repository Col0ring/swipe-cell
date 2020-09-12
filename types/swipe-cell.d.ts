import { Plugin } from 'vue'

export interface SwipeCellProps {
  content: string
  delText: string
}
declare class SwipeCell {
  $props: SwipeCellProps
}
declare const _default: Plugin
export { SwipeCell }

export default _default
