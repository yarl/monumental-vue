<template>
  <div class="container">
    <div v-if="monument">
      <h1>{{ label }}</h1>
      <h4>{{ $route.params.id }} / {{ monument.id }}</h4>
    </div>
    <div v-else>No data</div>
  </div>
</template>

<script>
import { getEntities } from "~/utils/search";
import { getPropertyValues } from "~/utils/wikidata";

export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
    monument() {
      return this.asyncData || this.$store.state.data.entities[this.id];
    },
    label() {
      const { locale } = this.$i18n;
      return this.monument.labels[locale]
        ? this.monument.labels[locale].value
        : "?";
    }
  },
  watch: {
    getPropVal: function(val) {
      const { id } = this.$route.params;
      return getPropertyValues(this.$store.state.data.entities[id].claims[val]);
    }
  },
  asyncData({ params }) {
    if (process.server) {
      const { id } = params;
      return getEntities([id]).then(response => {
        return { asyncData: response.data.entities[id] };
      });
    }
    return { asyncData: undefined };
  },
  mounted() {
    const { id } = this.$route.params;
    const entity = this.$store.state.data.entities[id];

    if (!entity && !this.asyncData) {
      this.$store.dispatch("data/addEntitiesById", [id]);
    }
    if (!entity && this.asyncData) {
      this.$store.dispatch("data/addEntity", this.asyncData);
    }
  }
};
</script>