<template>
  <div class="emfe-panel" :class="classList">
    <div class="emfe-panel-box" :class="boxName" v-for='(item, index) in data'>
      <div class="emfe-panel-box-left" :class="leftName">{{item.text}}</div>
      <div class="emfe-panel-box-right" :class="rightName">
        <span class="emfe-panel-box-right-text">{{item.cont}}</span>
        <emfe-icon v-if="!!type" :type="type" className="emfe-panel-box" @icon-click="iconClick(index)"></emfe-icon>
        <emfe-switch class="emfe-panel-box-switch" :value="switchType" v-if="item.switchOk" @toggle="toggle">
          <span slot="open">ON</span>
          <span slot="close">OFF</span>
        </emfe-switch>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'panel',
  props: {
    className: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    type: {
      type: String,
      default: '',
    },
    switchType: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle(status) {
      this.$emit('switch-toogle', status);
    },
    iconClick(index) {
      this.$emit('icon-click', index);
    },
  },
  computed: {
    classList() {
      return [
        {
          [`${this.className}-panel`]: !!this.className,
        },
      ];
    },
    boxName() {
      return [
        {
          [`${this.className}-panel-box`]: !!this.className,
        },
      ];
    },
    leftName() {
      return [
        {
          [`${this.className}-panel-box-left`]: !!this.className,
        },
      ];
    },
    rightName() {
      return [
        {
          [`${this.className}-panel-box-right`]: !!this.className,
        },
      ];
    },
  },
};
</script>
