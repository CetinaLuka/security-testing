module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <h1>Document</h1>
      <button @click="accessDocument">access document</button>
      <p>{{ document }}</p>
    </div>
  `,

  data () {
    return {
      document: 'result',
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
    }
  }
}
