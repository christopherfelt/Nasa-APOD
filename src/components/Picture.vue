<template>
  <div class="row d-flex justify-content-center">
    <div class="col-6">
      <button
        class="btn btn-primary mb-1"
        type="button"
        @click="getRandomAPOD()"
      >
        Press for Picture
      </button>
      <div class="card rounded">
        <img class="card-img-top " :src="apod.url" alt="" />
        <div class="card-body">
          <h4 class="card-title">{{ apod.title }}</h4>
          <p class="card-text">{{ apod.explanation }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Picture",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getAPOD");
  },
  methods: {
    getRandomAPOD() {
      this.$store.dispatch("getRandomAPOD");
    },
  },
  computed: {
    apod() {
      return this.$store.state.apod;
    },
  },
};
</script>

<style scoped></style>
