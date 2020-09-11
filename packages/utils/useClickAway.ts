import { onMounted, Ref, onUnmounted } from 'vue'

const defaultEvent = 'click'
type EventType = MouseEvent | TouchEvent

const useClickAway = (
  onClickAway: (e: EventType) => void,
  target: Ref<HTMLElement | null>,
  eventName = defaultEvent
) => {
  const handler = (event: Event) => {
    if (!target.value || target.value.contains(event?.target as Node)) {
      return
    }
    onClickAway(event as EventType)
  }

  onMounted(() => {
    document.addEventListener(eventName, handler)
  })
  onUnmounted(() => {
    document.removeEventListener(eventName, handler)
  })
}

export default useClickAway
