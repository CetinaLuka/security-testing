module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <div style="margin-top: 2rem">
        <h2>Can I access "document" in beforeUpdate hook?</h2>
        <span v-if="doc.beforeUpdate" style="background-color: red; color: white">YES</span>
        <span v-else-if="hookRan.beforeUpdate === false" style="background-color: orange; color: white">Doesn't run hook</span>
        <span v-else-if="!doc.beforeUpdate" style="background-color: green; color: white">NO</span>
      </div>
    </div>  
	`,

	data () {
		return {
			hookRan: {
				beforeUpdate: false,
			},
			doc: {
				beforeUpdate: null,
			}
		}
	},
	beforeUpdate () {
    this.hookRan.beforeUpdate = true
    try {
      this.doc.beforeUpdate = document

      return
    } catch (error) {
      //
    }
  },
}
  