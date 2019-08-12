module.exports = {
	template: `
		<div class="bg-theme-feature rounded-lg p-10">
			<div style="margin-top: 2rem">
				<h2>Can I access "document" in mounted hook?</h2>
				<span v-if="doc.mounted" style="background-color: red; color: white">YES</span>
				<span v-else-if="hookRan.mounted === false" style="background-color: orange; color: white">Doesn't run hook</span>
				<span v-else-if="!doc.mounted" style="background-color: green; color: white">NO</span>
			</div>
		</div>
	`,

	data () {
		return {
			hookRan: {
				mounted: false,
			},
			doc: {
				mounted: null,
			}
		}
	},
	mounted () {
    this.hookRan.mounted = true
    try {
      this.doc.mounted = document

      return
    } catch (error) {
      //
    }
  },
}
  