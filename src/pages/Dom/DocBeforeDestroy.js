module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <div style="margin-top: 2rem">
        <h2>Can I access "document" in beforeDestroy hook?</h2>
        <span style="background-color: orange; color: white">Change page to test and check the console</span>
      </div>
    </div>  
	`,

	data () {
		return {
			doc: {
				beforeDestroy: null,
			}
		}
	},
	beforeDestroy () {
    console.log('beforeDestroy hook ran')
    try {
      this.doc.beforeDestroy = document
      walletApi.alert.error('document exists in beforeDestroy hook')
      console.error('document exists in beforeDestroy')

      return
    } catch (error) {
      console.log('document does not exist in beforeDestroy')
      //
    }
  },
}
  