import { onMounted, Ref, onUnmounted } from 'vue'

const defaultEvent = 'click'
type EventType = MouseEvent | TouchEvent

const useClickAway = (
  onClickAway: (e: EventType) => void,
  target: Ref<HTMLElement | null>,
  eventName = defaultEvent
) => {
  const handler = (event: any) => {
    if (!target.value || target.value.contains(event?.target)) {
      return
    }
    onClickAway(event)
  }

  onMounted(() => {
    document.addEventListener(eventName, handler)
  })
  onUnmounted(() => {
    document.removeEventListener(eventName, handler)
  })
}

export default useClickAway
