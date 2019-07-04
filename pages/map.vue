<template>
  <div id="map-wrap" style="height: 100vh">
    <h1>{{ $t("welcome") }}</h1>
    <no-ssr>
      <l-map :zoom="13" :center="[47.413220, -1.219482]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker :lat-lng="[47.413220, -1.219482]"></l-marker>
      </l-map>
    </no-ssr>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
</style>

