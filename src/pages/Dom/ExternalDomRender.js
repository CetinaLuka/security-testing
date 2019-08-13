module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <div style="margin-top: 2rem">
        <h2>Can I access external DOM information <strong>on render</strong>?</h2>
        <span v-if="titleRender" style="background-color: red; color: white">{{ titleRender }}</span>
        <span v-if="!titleRender" style="background-color: green; color: white">NO</span>

        <div style="visibility: hidden">
          {{ (typeof document !== 'undefined' ? titleRender = document.querySelector('.ProfileAvatar').title : titleRender = false) }}
        </div>
      </div>
    </div>  
  `,
  data () {
    return {
      titleRender: null,
    }
  },
}