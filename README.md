# vue-swiper
Swiper component. Easy to use. [MM修改版]

#修改日志
- 优化 `webpack` 的配置
- 优化/增加 `npm` 脚本。
```
npm run dev //开发watch模式
npm run dist //产品打包模式
npm run build //hot rebuild 开发服务器模式 
``` 
- 增加了一个 `reloadSlot` 方法用于重新渲染动态添加的item。
- 去掉了 `_onTouchMove` 时对默认touchmove 事件的停止冒泡，兼容一些需要四个方向滚动的情况。


## Examples
[basic demo](http://weilao.github.io/vue-swiper/demo)

[webpack ES2015 demo](http://www.webpackbin.com/4kbKGs97b)

## Usage

```js
import Vue from 'vue'
import Swiper from 'vue-swiper'

new Vue({
    el: 'body',
    components: {Swiper},
    methods: {
        onSlideChangeStart (currentPage) {
            console.log('onSlideChangeStart', currentPage);
        },
        onSlideChangeEnd (currentPage) {
            console.log('onSlideChangeEnd', currentPage);
        }
    }
});
```

```html
<swiper v-ref:swiper
        direction="horizontal"
        :mousewheel-control="true"
        :performance-mode="false"
        :pagination-visible="true"
        :pagination-clickable="true"
        :loop=“true”
        @slide-change-start="onSlideChangeStart"
        @slide-change-end="onSlideChangeEnd">
    <div>Page 1</div>
    <div>Page 2</div>
    <div>Page 3</div>
</swiper>
```

## Api
### Properties
| Name                 | Type      | Default      | Description                                                        |
|----------------------|-----------|--------------|--------------------------------------------------------------------|
| direction            | `String`  | `"vertical"` | Could be 'horizontal' or 'vertical' (for vertical slider).         |
| mousewheel-control   | `Boolean` | `true`       | Set to true to enable navigation through slides using mouse wheel. |
| pagination-visible   | `Boolean` | `false`      | Toggle (hide/true) pagination container visibility when click on Slider's container    |
| pagination-clickable | `Boolean` | `false`      | If true then clicking on pagination button will cause transition to appropriate slide. |
| performace-mode      | `Boolean` | `false`      | Disable advance effect for better performance.                     |
| loop                 | `Boolean` | `false`      | Set to true to enable continuous loop mode                         |
| ==================== | ========= | ============ | =================== |

### Methods
| Method            | Description              |
|-------------------|--------------------------|
| next()            | Go next page.            |
| prev()            | Go previous page.        |
| setPage(`Number`) | Set current page number. |
| reloadSlot()      | Reload items.            |

### Events
| Name                            | Parameters | Description                                                                                                                                                  |
|--------------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| slide-change-start | `pageNumber`     | Fire in the beginning of animation to other slide (next or previous).                                                                                        |
| slide-change-end   | `pageNumber`     | Will be fired after animation to other slide (next or previous).                                                                                             |
| slide-revert-start | `pageNumber`     | Fire in the beginning of animation to revert slide (no change).                                                                                              |
| slide-revert-end   | `pageNumber`     | Will be fired after animation to revert slide (no change).                                                                                                   |
| slider-move        | `offset`         | Callback function, will be executed when user touch and move finger over Swiper and move it. Receives swiper instance and 'touchmove' event as an arguments. |
| ================== | ================ | ============================ |