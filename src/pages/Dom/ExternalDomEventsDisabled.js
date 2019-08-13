module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <div style="margin-top: 2rem">
        <h2>Can I listen to events of the external DOM after disabling the plugin?</h2>
        <h3>{{ spyAfterDisabled }}</h3>
        <span style="background-color: green; color: white">
          I'm a good plugin, and I'm not doing anything dangerous ;)
        </span>
      </div>
    </div>  
  `,
  computed: {
    spyAfterDisabled () {
      document.getElementById('app').addEventListener('click', event => {
        console.info(`We're doomed...`)
      })

      return 'Disable the plugin, go to the dashboard, and see the console'
    }
  }
}