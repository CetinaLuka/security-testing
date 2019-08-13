module.exports = {
  template: `
    <div class="bg-theme-feature rounded-lg p-10">
      <div style="margin-top: 2rem">
        <h2>Can I remove existing nodes of the external DOM?</h2>
        <span v-if="removeSidebarItem" style="background-color: red; color: white">{{ removeSidebarItem }}</span>
        <span v-if="!removeSidebarItem" style="background-color: green; color: white">NO</span>
      </div>
    </div>  
  `,
  computed: {
    removeSidebarItem () {
      this.$nextTick(() => {
        const $container = document.querySelector('.AppSidemenu__container')
        $container.innerHTML = ''

        const $item = document.querySelector('.MenuNavigationItem[title=Announcements]')
        if ($item) {
          const $parent = $item.parentElement
          if ($parent) {
            $item.innerHTML = ''
            $parent.removeChild($item)
          }
        }
      })

      return 'Yes, the announcements button on the sidebar is gone forever'
    },
  }
}