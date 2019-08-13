module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <div style="margin-top: 2rem">
        <h2>Can I add content to the external DOM?</h2>
        <span v-if="appendToBottom" style="background-color: red; color: white">{{ appendToBottom }}</span>
        <span v-if="!appendToBottom" style="background-color: green; color: white">NO</span>
      </div>
    </div>  
  `,
  computed: {
    appendToBottom () {
      const $p = document.createElement('p')
      $p.innerHTML = '&nbsp;Ecosystem amazing team'
      document.body.querySelector('footer').appendChild($p)

      return 'Yes, check the bottom'
    },
  }
}