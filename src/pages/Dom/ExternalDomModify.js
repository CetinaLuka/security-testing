module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <div style="margin-top: 2rem">
        <h2>Can I modify existing nodes of the external DOM?</h2>
        <span v-if="alterAvatar" style="background-color: red; color: white">{{ alterAvatar }}</span>
        <span v-if="!alterAvatar" style="background-color: green; color: white">NO</span>
      </div>
    </div>  
  `,
  computed: {
    alterAvatar () {
      this.$nextTick(() => {
        // This example doesn't work always without altering the parent element
        const $container = document.querySelector('.AppSidemenu__avatar__container')
        $container.innerHTML = ''

        const $avatar = document.querySelector('.AppSidemenu__avatar')
        if ($avatar) {
          $avatar.style.backgroundImage = "url('https://media.tenor.com/images/37a7adee5bca77ad3bf87aeeff5c6a1f/tenor.gif')"
          $avatar.style.backgroundSize = 'contain'
        }
      })

      return 'Yes, see the avatar'
    },
  }
}