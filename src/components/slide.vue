<template>
    <div>
        <Menu v-bind="this.$attrs" @openMenu="openMenu" @closeMenu="closeMenu">
            <slot>
                  <router-link to="/">Home</router-link>
                  <router-link to="/filmer">Filmer</router-link>
                  <router-link to="/sökfilm">Sökfilm</router-link>
                  <router-link to="/kundservice">Kundservice</router-link>
                  <router-link to="/bokafilm">bokafilm</router-link>
            </slot>
        </Menu>
    </div>
</template>

<script>
    import Menu from '../Menu';
    export default {
      name: 'slide',
      components: {
        Menu: Menu
      },
      methods: {
        openMenu() {
          this.$emit('openMenu');
        },
        closeMenu() {
          this.$emit('closeMenu');
        }
      }
    };
</script>


