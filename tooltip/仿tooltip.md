  ## tooltip
  ```
  <template>
    <div class="arrow">
        <div v-show="tipTop" class="content">
            <div>
                <em></em>
                <div>
                    <slot name="content">{{ content}}</slot>
                </div>
            </div>
        </div>
        <div @mouseenter="showTip" @mouseleave="hideTip">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        tipTop:false
    };
  },
  props:{
        content: {
            type: [String, Number],
            default: ''
        },

  },
  methods: {
    showTip() {
      this.tipTop = true;
    },
    hideTip() {
      this.tipTop = false;
    }
  }
};
</script>
<style>
    .arrow{
        position:relative;
        display:inline-block;
    }
    .content {
    max-width: 250px;
    min-height: 34px;
    position: absolute;
    top: -60px;
    padding: 8px 12px;
    text-align: left;
    text-decoration: none;
    background-color:#fff;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    white-space: nowrap;
    }
    em {
    display: block;
    position: absolute;
    border-width: 10px;
    bottom: -20px;
    left: 50px;
    border-style: solid dashed dashed;
    border-color: #fff transparent transparent;
    font-size: 0;
    line-height: 0;
    }
</style>

```