module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <div style="margin-top: 2rem">
        <h2>Can I access "document" in destroyed hook?</h2>
        <span style="background-color: orange; color: white">Change page to test and check the console</span>
      </div>
    </div>  
	`,

	data () {
		return {
			doc: {
				destroyed: null
			}
		}
	},
	destroyed () {
    console.log('destroyed hook ran')
    try {
      this.doc.destroyed = document
      walletApi.alert.error('document exists in destroyed hook')
      console.error('document exists in destroyed')

      return
    } catch (error) {
      console.log('document does not exist in destroyed')
      //
    }
  },
}
  