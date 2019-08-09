module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <h1>Document</h1>
      <button @click="accessDocument">access document</button>
      <p>{{ document }}</p>

      <h1>Window</h1>
      <button @click="accessWindow">access window</button>
      <p>{{ window }}</p>
    </div>
  `,

  data () {
    return {
      document: 'result',
      window: 'result',
    }
  },
  methods: {
    accessDocument() {
      try {
      var a = document.getElementById("app")
      this.document = 'success'
      console.log(a)
      return
      } catch (error) {
      this.document = 'failure'
      console.log(error)
      }
    },
    accessWindow() {
      try {
      var a = window.innerWidth
      this.window = 'success'
      console.log(a)	
      return
      } catch (error) {
      this.window = 'failure'
      console.log(error)
      }
    }
  }
}
