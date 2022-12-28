<script>
export default {
  props: ["images"],
  data() {
    return {
      slideIndex: 0,
      imagesData: [],
    };
  },
  methods: {
    setImagesData() {
      let counter = 1;
      let data;

      for (let i = 0; i < this.images.length; i++) {
        data = {
          number: counter,
          url: this.images[i].url,
          caption: this.images[i].caption,
          hidden: true,
          active: false,
        };
        this.imagesData.push(data);
        counter++;
      }
    },
    // Next/previous controls
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    // Thumbnail image controls
    currentSlide(n) {
      this.showSlides((this.slideIndex = n - 1));
    },
    showSlides(n) {
      let i;
      if (n >= this.imagesData.length) {
        this.slideIndex = 0;
      }
      if (n < 0) {
        this.slideIndex = this.imagesData.length;
      }

      for (i = 0; i < this.imagesData.length; i++) {
        this.imagesData[i].hidden = true;
      }

      for (i = 0; i < this.imagesData.length; i++) {
        this.imagesData[i].active = false;
      }

      this.imagesData[this.slideIndex].hidden = false;
      this.imagesData[this.slideIndex].active = true;
    },
  },
  created() {
    this.setImagesData();
    this.showSlides(this.slideIndex);
  },
};
</script>

<template>
  <div class="container">
    <div
      class="displayed-image-container"
      :class="{ hide: imagesData[slideIndex].hidden }"
    >
      <img
        :src="imagesData[slideIndex].url"
        alt="Screenshot of project"
        class="displayed-image"
      />
    </div>

    <div class="caption-container">
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <p id="caption">{{ imagesData[slideIndex].caption }}</p>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>

    <div class="row">
      <div v-for="thumbnail in imagesData" class="thumbnail-row">
        <img
          class="thumbnail cursor"
          :class="{ active: thumbnail.active }"
          :src="thumbnail.url"
          @click="currentSlide(thumbnail.number)"
          alt="Thumbnail"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 30rem;
}
.displayed-image-container {
  height: 20rem;
  width: 30rem;
  background-color: rgb(245, 241, 241);
  display: flex;
  justify-content: center;
}

.displayed-image {
  max-width: 100%;
  max-height: 100%;
}

.hidden {
  display: none;
}

.cursor {
  cursor: pointer;
}

.prev,
.next {
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  user-select: none;
  -webkit-user-select: none;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: auto;
  margin-bottom: auto;
}

.prev:hover,
.next:hover {
  color: #4e64be;
}

.caption-container {
  background-color: #222;
  color: white;
  display: flex;
  justify-content: space-between;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5rem;
}

.thumbnail-row {
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.thumbnail {
  width: 100%;
  opacity: 0.4;
}

.active,
.thumbnail:hover {
  opacity: 1;
}
</style>
