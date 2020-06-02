<template>
  <div class="home">
    <h1>Nasa's Picture of the Day</h1>
    <div>
      <Picture />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Picture from "@/components/Picture";
export default {
  name: "Home",
  components: { Picture },
};
</script>
