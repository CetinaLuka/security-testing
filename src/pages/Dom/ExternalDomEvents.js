module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <div style="margin-top: 2rem">
        <h2>Can I listen to events of the external DOM when I'm on the plugin page?</h2>
        <h3>{{ spyClicks }}</h3>
        <span v-if="currency" style="background-color: red; color: white">
          Yes, I know where you are clicking and that you changed your currency to {{ currency }}
        </span>
        <span v-if="!currency" style="background-color: green; color: white">
          I'm a good plugin, and I'm not doing anything dangerous ;)
        </span>
      </div>
    </div>  
  `,
  data () {
    return {
      currency: null,
    }
  },
  computed: {
    spyClicks () {
      document.getElementById('app').addEventListener('click', event => {
        const $button = event.target.querySelector('button')
        if ($button) {
          const $inner = $button.querySelector('button span span')
          if ($inner) {
            // `setTimeout` is disabled
            this.$nextTick(() => {
              const $items = document.querySelectorAll('.MenuDropdownItem__button')
              if ($items) {
                $items.forEach($item => {
                  $item.addEventListener('click', event => {
                    this.currency = event.target.innerText.trim()
                  })
                })
              }
            })
          }
        }
      })

      return 'Click on the settings and change the currency'
    },
  }
}