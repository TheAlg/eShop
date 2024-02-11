<template>

  <Header  />
  <slot />
  <Footer />
</template>

<script setup lang="ts">
import { Header, Footer} from "uilib";

</script>
<style>

.bd-gutter {
  display: grid;
  grid-template-areas: "sidebar main";
  grid-template-columns: 1fr 5fr;
  gap: 1.5rem;
}
.bd-sidebar {
  grid-area: sidebar;
}
.bd-main {
  grid-area: main;
}
@media screen and (min-width: 992) {
  .bd-gutter {
    display: grid;
    grid-template-areas: "sidebar main";
    grid-template-columns: 1fr 5fr;
    gap: 1.5rem;
  }
  .bd-layout {
    display: grid;
    grid-template-areas: "sidebar main";
    grid-template-columns: 1fr 5fr;
    gap: 1.5rem;
  }
}
.bd-gutter {
  --bs-gutter-x: 3rem;
}
</style>
