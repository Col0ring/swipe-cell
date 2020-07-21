# swipe-cell

一个基于 vue 3 的 SwipeCell 组件。

## Usage

```shell
npm i @col0ring/swipe-cell
# or
yarn add @col0ring/swipe-cell
```

```js
import { createApp } from 'vue'
import SwipeCell from '@col0ring/swipe-cell'
const app = createApp()
app.use(SwipeCell)
```



## Api

### Attributes

| 参数  | 说明          |
| ------- | ----------------|
| content | 内容区域值       |
| delText | 默认删除按钮文字 |



### Events

| 参数   | 说明             |
| ------ | ---------------- |
| delete | 点击删除按钮回调 |



### Slots

| 参数                | 说明                         |
| ------------------- | ---------------------------- |
| default（默认插槽） | 内容区域                     |
| actions             | 滑动按钮区域，可手动修改按钮 |



## Demo

```vue
<template>
  <div>
    <swipe-cell content="example"> </swipe-cell>
    <swipe-cell content="example" delText="delete" @delete="handleDelete">
    </swipe-cell>
    <swipe-cell>
      example
      <template #actions>
        <button>删除1</button>
        <button>删除2</button>
      </template>
    </swipe-cell>
  </div>
</template>

<script>
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
```

