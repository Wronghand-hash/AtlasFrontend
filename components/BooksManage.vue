<template>
  <div>
    <button
      @click="visible = true"
      class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
    >
      <h2 class="text-md flex items-center space-x-3">
        <span> مدیریت کتاب ها </span>
        <PhBook :size="25" weight="fill" />
      </h2>
    </button>
    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :style="{ width: '70vw', backgroundColor: '#f9f5ff', height: 'auto' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#f9f5ff' }"
    >
      <div
        class="w-full h-full flex mb-24 items-center p-2 lg:p-10 flex-col space-y-7"
      >
        <div
          class="w-full h-full hidden lg:grid grid-cols-4 place-items-end lg:place-items-center border-b pb-3 border-mainYellow"
        >
          <h2
            class="lg:text-lg text-sm border-b-4 ml-3 border-mainYellow rounded-sm"
          >
            تغییرات
          </h2>
          <h2
            class="lg:text-lg text-sm border-b-4 ml-3 border-mainYellow rounded-sm"
          >
            نام نویسنده کننده
          </h2>
          <h2
            class="lg:text-lg text-sm border-b-4 ml-3 border-mainYellow rounded-sm"
          >
            دسته بندی
          </h2>
          <h2
            class="lg:text-lg text-sm border-b-4 ml-3 border-mainYellow rounded-sm"
          >
            عنوان کتاب
          </h2>
        </div>
        <div
          v-if="loading"
          class="w-full h-full flex flex-col items-center space-y-5"
        >
          <div
            class="w-full h-full grid grid-cols-4 gap-7 place-items-center text-center text-darkBlue"
          >
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
          </div>
          <div
            class="w-full h-full grid grid-cols-4 gap-7 place-items-center text-center text-darkBlue"
          >
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
          </div>
          <div
            class="w-full h-full grid grid-cols-4 gap-7 place-items-center text-center text-darkBlue"
          >
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
          </div>
        </div>
        <div
          v-show="isEmpty"
          class="lg:text-2xl text-lg p-5 border-2 lg:p-10 text-blue-700 border-blue-700 flex items-center justify center rounded-md"
        >
          <h2 class="flex w-full items-center justify-center">
            <span> موردی برای نشان دادن وجود ندارد </span>
            <PhInfo class="mr-4" :size="44" weight="fill" />
          </h2>
        </div>
        <LazyBookAdmin
          v-if="!loading"
          v-for="book in books"
          :key="book.id"
          :book="book"
        />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhBook, PhInfo } from "@phosphor-icons/vue";

import { useManagementStore } from "../stores/management";
import { storeToRefs } from "pinia";

const loading = ref(false);

const managementStore = useManagementStore();

const { stateChange, booksStateChange } = storeToRefs(managementStore);
const visible = ref(false);
const isEmpty = ref(false);
// state watcher

watch(booksStateChange, (old, cur) => {
  getBooks();
});

//  upload data

const eventFile = ref(null);
const books = ref();

const getBooks = async () => {
  managementStore.setLoading();
  loading.value = true;
  const { data } = await $fetch("https://auth.atlasacademy.ir/books", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.books);
      books.value = response.books;
      loading.value = false;
      managementStore.setBooksCount(response.books.length);
      managementStore.falseLoading();
      if (!response.books.length) {
        isEmpty.value = true;
      }
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
      managementStore.falseLoading();
    });
  managementStore.falseLoading();
};

const uploadVideo = async function (event) {
  const formData = new FormData();

  formData.append("file", eventFile.value);
  console.log(eventFile.value);
  await $fetch("https://auth.atlasacademy.ir/management/addvideo", {
    method: "POST",

    body: formData,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.data.message);
    });
};

onMounted(() => {
  getBooks();
});
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #f9f5ff;
}
</style>
