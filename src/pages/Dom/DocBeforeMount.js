module.exports = {
	template: `
		<div class="bg-theme-feature rounded-lg p-10">
			<div style="margin-top: 2rem">
				<h2>Can I access "document" in beforeMount hook?</h2>
				<span v-if="doc.beforeMount" style="background-color: red; color: white">YES</span>
				<span v-else-if="hookRan.beforeMount === false" style="background-color: orange; color: white">Doesn't run hook</span>
				<span v-else-if="!doc.beforeMount" style="background-color: green; color: white">NO</span>
			</div>
		</div>  
	`,

	data () {
		return {
			hookRan: {
				beforeMount: false,
			},
			doc: {
				beforeMount: null,
			}
		}
	},
	beforeMount () {
    this.hookRan.beforeMount = true
    try {
      this.doc.beforeMount = document

      return
    } catch (error) {
      //
    }
  },
}
  