import { App } from 'vue'

export interface SwipeCellProps {
  content: string
  delText: string
}
declare class SwipeCell {
  static install(app: App): void
  $props: SwipeCellProps
}

export default SwipeCell
