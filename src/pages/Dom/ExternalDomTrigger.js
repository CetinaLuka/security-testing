module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <button v-if="!showTrigger" @click="triggerMethod">Trigger</button>
      <div v-if="showTrigger" style="margin-top: 2rem">
        <h2>Can I access external DOM information <strong>on render trigger</strong>?</h2>
        <span v-if="titleRenderTrigger" style="background-color: red; color: white">{{ titleRenderTrigger }}</span>
        <span v-if="!titleRenderTrigger" style="background-color: green; color: white">NO</span>

        <div style="visibility: hidden">
          {{ (typeof document !== 'undefined' ? titleRenderTrigger = document.querySelector('.ProfileAvatar').title : titleRenderTrigger = false) }}
        </div>
      </div>
    </div>  
  `,
  data () {
    return {
      titleRenderTrigger: null,
      showTrigger: false,
    }
  },
  methods: {
    triggerMethod () {
      this.showTrigger = true
    }
  }
}