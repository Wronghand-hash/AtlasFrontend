<template>
  <head>
    <title>صدای شما | منظومه آموزشی فرهنگی اطلس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-screen h-auto flex flex-col items-center px-5 lg:px-60 pt-12">
      <div
        class="h-auto w-full bg-mainBlue text-mainYellow p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-y-0 lg:space-x-4"
      >
        <h2
          class="text-5xl lg:my-0 my-5 font-bold border-b-8 rounded-lg pb-2 border-darkBlue"
        >
          کتاب صوتی
        </h2>
        <PhArticle size="55" />
      </div>
      <div
        class="h-auto lg:space-x-14 lg:flex-row flex-col-reverse w-screen flex items-center justify-center mb-14 px-5 lg:px-40"
      >
        <div
          class="h-full w-full grid place-items-center mt-12 lg-mt-0 lg:grid-cols-3 grid-cols-1 gap-8"
        >
          <LazyAudioCard
            v-for="book in audioBooks"
            :key="book.id"
            :book="book"
          />
        </div>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { PhArticle, PhBook } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const loading = ref(true);

const audioBooks = ref([]);
const latestBook = ref();

const getAudioBooks = async () => {
  loading.value = true;
  const { data } = await $fetch("https://auth.atlasacademy.ir/audio-books/", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response);
      audioBooks.value = response.audioBooks;

      latestBook.value = response.audioBooks[0];

      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
    });
};

onMounted(() => {
  getAudioBooks();
  TM.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });
});
</script>
