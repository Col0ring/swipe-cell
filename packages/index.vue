<template>
  <div class="swipe-cell-container" ref="swipeCell">
    <div
      class="cell-wraper"
      :style="translateStyle"
      @touchstart.passive="touchStart"
      @touchmove.passive="touchMove"
      @touchEnd.passive="touchEnd"
    >
      <div class="cell-content">
        <slot>
          <span>{{ content }}</span>
        </slot>
      </div>
      <div class="cell-actions" ref="actionBtns" @touchstart.stop.passive>
        <slot name="actions">
          <button @click="handleDelete" class="delete-btn">
            {{ delText }}
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, watchEffect } from 'vue'
import useClickAway from './utils/useClickAway'

interface SwipeCellProps {
  content: string
  delText: string
}

export default defineComponent({
  name: 'SwipeCell',
  props: {
    content: {
      type: String,
      default: ''
    },
    delText: {
      type: String,
      default: '删除'
    }
  },
  setup(props: SwipeCellProps, { emit }) {
    const state = reactive({
      start: 0,
      current: 0,
      opening: false,
      swiping: false
    })

    const swipeCell = ref<HTMLDivElement | null>(null)
    const actionBtns = ref<HTMLDivElement | null>(null)

    const translateStyle = computed(() => {
      return {
        transform: `translateX(${state.current}px)`
      }
    })
    const actionsWidth = computed(() => {
      return Math.ceil(actionBtns.value?.getBoundingClientRect().width || 0)
    })

    watchEffect(() => {
      // 如果 state.opening 放前面 touchEnd 结束将不会触发 else 分支
      if (!state.swiping && state.opening) {
        state.current = -actionsWidth.value
      } else {
        state.current = 0
      }
    })

    useClickAway(
      () => {
        state.opening = false
      },
      swipeCell,
      'touchstart'
    )

    const touchStart = (e: TouchEvent) => {
      state.start = e.changedTouches[0].clientX
      if (state.opening) {
        state.opening = false
      }
    }
    const touchMove = (e: TouchEvent) => {
      const current = e.targetTouches[0].clientX
      const scale = current - state.start
      if (scale > 0 || state.opening) {
        return
      }
      const swipeScale =
        Math.abs(scale) < actionsWidth.value ? scale : -actionsWidth.value
      state.swiping = true
      state.current = swipeScale
    }
    const touchEnd = () => {
      if (Math.abs(state.current) >= actionsWidth.value / 2) {
        state.opening = true
      }
      state.swiping = false
    }
    const handleDelete = (e: MouseEvent) => {
      emit('delete', e)
    }
    return {
      swipeCell,
      actionBtns,
      translateStyle,
      handleDelete,
      touchStart,
      touchMove,
      touchEnd
    }
  }
})
</script>
<style lang="less" scoped>
.swipe-cell-container {
  border-bottom: 1px solid #eee;
  width: 100%;
  overflow: hidden;
  .cell-wraper {
    display: flex;
    position: relative;
    transform: translateX(0);
    transition: transform 0.2s linear;
    width: 100%;
    .cell-content {
      width: 100%;
    }
    .cell-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      transform: translateX(100%);
      .delete-btn {
        height: 100%;
        font-size: 14px;
        color: #eeeeee;
        padding: 0px 24px;
        border: none;
        outline: none;
        background: hsl(348, 100%, 61%);
      }
    }
  }
}
</style>
