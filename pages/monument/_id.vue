<template>
  <div class="container">
    <h1>Monument {{ $route.params.id }}</h1>
    <h4>{{monument.labels.pl.value }}</h4>
  </div>
</template>

<script>
export default {
  computed: {
    monument() {
      const { id } = this.$route.params;
      return this.$store.state.data.entities[id];
    }
  }
};
</script>