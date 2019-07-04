<template>
  <nav class="navbar navbar-expand-lg navbar-light container">
    <a class="navbar-brand">Wiki Loves Monuments</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav flex-fill">
        <li class="nav-item active">
          <a class="nav-link">
            Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item mr-auto">
          <a class="nav-link">Link</a>
        </li>

        <li class="d-flex align-items-center nav-item">
          <i class="material-icons">language</i>
        </li>

        <li class="nav-item" v-for="locale in availableLocales" :key="locale.code">
          <nuxt-link class="nav-link" :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code);
    }
  }
};
</script>

<style scoped>
.nav-link.nuxt-link-exact-active {
  color: rgba(0, 0, 0, 0.9);
}
</style>
