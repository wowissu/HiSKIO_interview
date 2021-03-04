<script lang="ts">
import Vue, { VNodeData, VNodeChildren } from 'vue';
import { Component, ModelSync, Watch } from 'nuxt-property-decorator';
import ModalContainer from './ModalContainer.vue';

@Component<Modal>({
  render (h) {
    return h('');
  }
})
export default class Modal extends Vue {
  @ModelSync('value', 'change', { type: Boolean }) public show!: boolean

  public v: Vue | null = null;

  @Watch('show', { immediate: true })
  public watchShow (val: boolean) {
    if (val === true) {
      this.mountModal({
        props: {
          ...this.$attrs
        },
        on: {
          hide: () => {
            this.show = false;
          }
        }
      }, this.$slots.default);
    } else {
      this.unmountModal();
    }
  }

  public mountModal (data?: VNodeData, children?: VNodeChildren) {
    const div = document.createElement('div');
    document.body.appendChild(div);

    this.v = new Vue({
      destroyed: () => {
        this.v?.$el?.parentNode?.removeChild(this.v.$el);
        this.v = null;
      },
      render (h) {
        return h(ModalContainer, data, children);
      }
    }).$mount(div);
  }

  public unmountModal () {
    this.v?.$destroy();
  }
}

</script>

<style lang="scss" scope>
.modal {
  position: fixed;
}
</style>
