<template>
  <div
    class="h-60 w-96 border-2 border-dashed border-mainBlue p-3 rounded-md flex items-center flex-col"
  >
    <div class="w-full h-3/5 flex items-center justify-center">
      <img :src="bookImage" class="h-full object-contain" alt="" />
      <div class="flex justify-center items-center">
        <h1>{{ book.title }}</h1>
      </div>
    </div>
    <div class="w-full h-2/5 flex-col flex items-center justify-center">
      <audio controls :src="track"></audio>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["book"]);

const bookImage = ref("");

const getBooksImage = async () => {
  console.log(props.book);
  const { data } = await $fetch(
    `https://auth.atlasacademy.ir/audio-books/image/${props.book.AudioBooksImages[0].id}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response);
      bookImage.value = response.image;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const track = ref();
const getTrack = async () => {
  console.log(props.book);
  const { data } = await $fetch(
    "https://auth.atlasacademy.ir/audio-books/gettrack/14",
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response);
      track.value = response;
    })
    .catch(function (error) {
      console.error(error);
    });
};

onMounted(() => {
  getBooksImage();
  getTrack();
});
</script>

<style lang="scss" scoped></style>
