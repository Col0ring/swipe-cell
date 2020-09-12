<template>
  <div>
    <swipe-cell> </swipe-cell>
    <swipe-cell content="example2" delText="delete" @delete="handleDelete">
    </swipe-cell>
    <swipe-cell>
      example3
      <template #actions>
        <button>删除</button>
      </template>
    </swipe-cell>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const handleDelete = () => {
      console.log('delete')
    }
    return {
      handleDelete
    }
  }
})
</script>
<style lang="less" scoped></style>
