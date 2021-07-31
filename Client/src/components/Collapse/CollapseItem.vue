<template>
  <div class="card card-plain">
    <div role="tab" id="headingOne" class="card-header"
        style="padding: 0.3em; cursor:pointer; text-align:left;"
        data-toggle="collapse"
        data-parent="#accordion"
        :href="`#${itemId}`"
        @click.prevent="activate"
        :aria-expanded="active"
        :aria-controls="`content-${itemId}`">
      <p style="margin-left:22px;">
          <slot name="icon">
            <i v-if="!noIcon" class="fa fa-angle-right" aria-hidden="true"></i>
          </slot>
          <slot name="title">
            {{ title }}
          </slot>
      </p>
    </div>
    <collapse-transition :duration="animationDuration">
      <div
        v-show="active"
        :id="`content-${itemId}`"
        role="tabpanel"
        :aria-labelledby="title"
        class="collapsed"
      >
        <div class="card-body" style="padding:0px;">
          <slot></slot>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';

export default {
  name: 'collapse-item',
  components: {
    CollapseTransition
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    id: String,
    noIcon: Boolean
  },
  inject: {
    animationDuration: {
      default: 250
    },
    multipleActive: {
      default: false
    },
    addItem: {
      default: () => {}
    },
    removeItem: {
      default: () => {}
    },
    deactivateAll: {
      default: () => {}
    }
  },
  computed: {
    itemId() {
      return this.id || this.title;
    }
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    activate() {
      if (!this.multipleActive) {
        this.deactivateAll();
      }
      this.active = !this.active;
    }
  },
  mounted() {
    this.addItem(this);
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.removeItem(this);
  }
};
</script>

<style>
.card-header:hover{
  background-color: #f4f5f7;
}
</style>
