module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <div style="margin-top: 2rem">
        <h2>Can I access "document" in created hook?</h2>
        <span v-if="doc.created" style="background-color: red; color: white">YES</span>
        <span v-else-if="hookRan.created === false" style="background-color: orange; color: white">Doesn't run hook</span>
        <span v-else-if="!doc.created" style="background-color: green; color: white">NO</span>
      </div>
    </div>
  `,

  data () {
    return {
      hookRan: {
        created: false,
      },
      doc: {
        created: null,
      }
    }
  },
  created () {
    this.hookRan.created = true
    try {
      this.doc.created = document

      return
    } catch (error) {
      //
    }
  },
}
