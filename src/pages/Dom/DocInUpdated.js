module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <div style="margin-top: 2rem">
        <h2>Can I access "document" in updated hook?</h2>
        <span v-if="doc.updated" style="background-color: red; color: white">YES</span>
        <span v-else-if="hookRan.updated === false" style="background-color: orange; color: white">Doesn't run hook</span>
        <span v-else-if="!doc.updated" style="background-color: green; color: white">NO</span>
      </div>
    </div>
	`,

	data () {
		return {
			hookRan: {
				updated: false
			},
			doc: {
				updated: null,
			}
		}
	},
	updated () {
    this.hookRan.updated = true
    try {
      this.doc.updated = document

      return
    } catch (error) {
      //
    }
  },
}
  