<template>
  <head>
    <title>گالری تصاویر اطلس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="w-screen h-full bg-mainWhite">
    <LazyNavbar />
    <div class="w-screen h-auto flex flex-col items-center px-5 lg:px-44 pt-12">
      <div
        class="h-auto w-full bg-mainBlue text-mainYellow p-5 rounded-md flex lg:flex-row flex-col-reverse items-center justify-center space-x-0 lg:space-y-0 lg:space-x-4"
      >
        <h2
          class="text-5xl lg:my-0 my-5 font-bold border-b-8 rounded-lg pb-2 border-darkBlue"
        >
          گالری تصاویر
        </h2>
        <PhArticle size="55" />
      </div>
      <h2 dir="rtl" class="lg:text-lg text-sm my-5 text-gray-600">
        <span>
          در دسته بندی زیر می‌توانید، عکس های اطلس را به تفکیک هر موضوع مشاهده
          کنید:
        </span>
      </h2>
      <div
        class="w-full text-mainWhite lg:h-10 h-auto flex flex-wrap lg:space-y-0 space-y-3 space-x-3 lg:items-center items-end justify-center bg-mainWhite text-md"
      >
        <button
          :class="{
            'bg-mainWhite': category === 'atlas',
            'text-mainBlue': category === 'atlas',
          }"
          @click="category = 'atlas'"
          class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>آموزشگاه</span></button
        ><button
          :class="{
            'bg-mainWhite': category === 'school',
            'text-mainBlue': category === 'school',
          }"
          @click="category = 'school'"
          class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>مدرسه</span></button
        ><button
          :class="{
            'bg-mainWhite': category === 'creativity',
            'text-mainBlue': category === 'creativity',
          }"
          @click="category = 'creativity'"
          class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>خلاقیت</span></button
        ><button
          :class="{
            'bg-mainWhite': category === 'events',
            'text-mainBlue': category === 'events',
          }"
          @click="category = 'events'"
          class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>مناسبت ها</span></button
        ><button
          :class="{
            'bg-mainWhite': category === 'public',
            'text-mainBlue': category === 'public',
          }"
          @click="category = 'public'"
          class="px-2 py-1 border-2 w-44 h-full justify-center items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span>سال های تحصیلی</span>
        </button>
      </div>
      <div
        v-if="isEmpty"
        class="h-96 w-screen flex items-center justify-center"
      >
        <div
          class="lg:text-2xl text-lg p-5 border-2 lg:p-10 text-blue-700 border-blue-700 flex items-center justify center rounded-md"
        >
          <h2 class="flex w-full items-center justify-center">
            <span> موردی برای نشان دادن وجود ندارد </span>
            <PhInfo class="mr-4" :size="44" weight="fill" />
          </h2>
        </div>
      </div>
      <div
        class="lg:grid lg:grid-cols-3 lg:place-items-end lg:gap-5 h-full w-full lg:p-3 my-10 lg:my-8 flex items-center justify-center space-y-7 lg:space-y-0 flex-col"
      >
        <Skeleton v-if="loading" width="18rem" height="17rem"></Skeleton>
        <Skeleton v-if="loading" width="18rem" height="17rem"></Skeleton>
        <Skeleton v-if="loading" width="18rem" height="17rem"></Skeleton>
        <LazyGalleryCard
          v-if="!loading"
          v-for="gallery in imageGalleries"
          :key="gallery.id"
          :gallery="gallery"
        />
      </div>
    </div>
    <LazyFooter />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { PhArticle } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const loading = ref();
const category = ref("atlas");
const isEmpty = ref(false);
watch(category, (cur, old) => {
  getGalleries();
});

const imageGalleries = ref();
const getGalleries = async () => {
  loading.value = true;
  const { data } = await $fetch(
    `https://auth.atlasacademy.ir/image-gallery/bycategory/${category.value}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response.news);
      imageGalleries.value = response.galleries;
      if (!response.galleries.length) {
        isEmpty.value = true;
      } else {
        isEmpty.value = false;
      }

      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

onMounted(() => {
  TM.to(window, {
    scrollTo: {
      top: 0,
    },
    duration: 0.01,
    ease: "easeInOutQuart",
  });
  getGalleries();
});
</script>
