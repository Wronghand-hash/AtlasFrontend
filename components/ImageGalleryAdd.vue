<template>
  <div>
    <div class="w-full h-full flex items-end p-7 lg:p-16 flex-col space-y-10">
      <h2
        class="lg:text-xl text-2xl text-mainBlue border-b-8 rounded-md border-mainYellow"
      >
        اضافه کردن گالری عکس
      </h2>
      <h2
        dir="rtl"
        class="lg:text-sm text-sm text-mainRed border-2 border-dashed p-1 rounded-md border-mainRed"
      >
        *حجم فایل ها نباید از 2 مگابایت بیشتر باشد.
      </h2>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-center gap-4"
      >
        <div class="flex items-end flex-col space-y-3">
          <label class="text-md text-mainBlue" for="title"
            >عنوان گالری عکس</label
          >
          <InputText
            id="title"
            v-model="galleryTitle"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end flex-col space-y-3">
          <div class="flex items-end flex-col space-y-1">
            <label class="text-md text-mainBlue" for="username"
              >دسته بندی</label
            >

            <Dropdown
              v-model="selectedCategory"
              :options="category"
              @change="showCode = true"
              optionLabel="name"
              placeholder="دسته بندی"
              class="rounded-lg w-48 h-14"
            />
          </div>
        </div>
        <div class="flex flex-col justify-center items-center space-y-2">
          <label
            for="galleryImage"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> 1 انتخاب عکس </span>
            <PhPictureInPicture :size="25" />
          </label>
          <input
            @change="
              (event) => {
                eventFile = event.target.files[0];
                console.log(eventFile);
              }
            "
            type="file"
            class="hidden"
            id="galleryImage"
          />
          <label
            v-show="eventFile"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle :size="25" weight="fill" />
          </label>
        </div>
        <div class="flex flex-col justify-center items-center space-y-2">
          <label
            for="image4"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>2 انتخاب عکس </span>
            <PhPictureInPicture :size="25" />
          </label>
          <input
            @change="
              (event) => {
                eventFile4 = event.target.files[0];
                console.log(eventFile);
              }
            "
            type="file"
            class="hidden"
            id="image4"
          />
          <label
            v-show="eventFile4"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle :size="25" weight="fill" />
          </label>
        </div>
        <div class="flex flex-col justify-center items-center space-y-2">
          <label
            for="image3"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>3 انتخاب عکس </span>
            <PhPictureInPicture :size="25" />
          </label>
          <input
            @change="
              (event) => {
                eventFile3 = event.target.files[0];
                console.log(eventFile);
              }
            "
            type="file"
            class="hidden"
            id="image3"
          />
          <label
            v-show="eventFile3"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle :size="25" weight="fill" />
          </label>
        </div>
        <div class="flex flex-col justify-center items-center space-y-2">
          <label
            for="image2"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>4 انتخاب عکس </span>
            <PhPictureInPicture :size="25" />
          </label>
          <input
            @change="
              (event) => {
                eventFile2 = event.target.files[0];
                console.log(eventFile);
              }
            "
            type="file"
            class="hidden"
            id="image2"
          />
          <label
            v-show="eventFile2"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle :size="25" weight="fill" />
          </label>
        </div>
        <div class="flex flex-col justify-center items-center space-y-2">
          <label
            for="image5"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>5 انتخاب عکس </span>
            <PhPictureInPicture :size="25" />
          </label>
          <input
            @change="
              (event) => {
                eventFile5 = event.target.files[0];
                console.log(eventFile);
              }
            "
            type="file"
            class="hidden"
            id="image5"
          />
          <label
            v-show="eventFile5"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle :size="25" weight="fill" />
          </label>
        </div>
        <div class="flex flex-col justify-center items-center space-y-2">
          <label
            for="image6"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span>6 انتخاب عکس </span>
            <PhPictureInPicture :size="25" />
          </label>
          <input
            @change="
              (event) => {
                eventFile6 = event.target.files[0];
                console.log(eventFile);
              }
            "
            type="file"
            class="hidden"
            id="image6"
          />
          <label
            v-show="eventFile6"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle :size="25" weight="fill" />
          </label>
        </div>
      </div>
      <div class="flex flex-wrap space-y-2 space-x-2 justify-around">
        <div
          class="flex items-end lg:col-span-2 place-self-end flex-col space-y-3"
        >
          <label class="text-md text-mainBlue" for="tag1">برچسب ها</label>
          <InputText
            id="tag1"
            v-model="tag1"
            aria-describedby="username-help"
          />
        </div>
        <div
          class="flex items-end lg:col-span-2 place-self-end flex-col space-y-3"
        >
          <label class="text-md text-mainBlue" for="tag2">برچسب ها</label>
          <InputText
            id="tag2"
            v-model="tag2"
            aria-describedby="username-help"
          />
        </div>
        <div
          class="flex items-end lg:col-span-2 place-self-end flex-col space-y-3"
        >
          <label class="text-md text-mainBlue" for="tag3">برچسب ها</label>
          <InputText
            id="tag3"
            v-model="tag3"
            aria-describedby="username-help"
          />
        </div>
        <div
          class="flex items-end lg:col-span-2 place-self-end flex-col space-y-3"
        >
          <label class="text-md text-mainBlue" for="tag4">برچسب ها</label>
          <InputText
            id="tag4"
            v-model="tag4"
            aria-describedby="username-help"
          />
        </div>
      </div>
      <div
        class="h-full lg:flex-row flex-col-reverse justify-center w-full flex items-center self-center lg:space-x-5"
      >
        <button
          label="Show"
          @click="addGallery()"
          class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span> اضافه کردن به گالری </span>
          <PhPlus :size="25" />
        </button>
      </div>
      <Message
        class="w-full"
        v-show="addGalleryError && statusCode !== 400"
        severity="error"
      >
        <span class="text-2xl">{{ errorMessage }}</span>
      </Message>
      <div v-show="statusCode === 400">
        <Message
          v-for="error in errorMessage"
          :key="error"
          class="w-full"
          severity="error"
        >
          <span class="text-2xl">{{ error }}</span>
        </Message>
      </div>
      <div>
        <Message
          class="space-x-4 flex items-center justify-center"
          severity="info"
          v-show="loading"
        >
          <span class="text-right mx-3"> درحال اضافه کردن</span>
          <ProgressSpinner
            style="width: 20px; height: 20px"
            strokeWidth="8"
            animationDuration=".5s"
            aria-label="Custom ProgressSpinner"
          />
        </Message>
      </div>
      <div>
        <Message
          class="space-x-4 flex items-center justify-center"
          severity="info"
          v-show="imageUploadLoading"
        >
          <span class="text-right mx-3"> درحال بارگذاری عکس ها</span>
          <ProgressSpinner
            style="width: 20px; height: 20px"
            strokeWidth="8"
            animationDuration=".5s"
            aria-label="Custom ProgressSpinner"
          />
        </Message>
      </div>
      <Message class="w-full" v-show="message" severity="success">
        <span class="text-2xl">گالری اضافه شد</span>
      </Message>
      <Message class="w-full" v-show="uploadSuccuss" severity="success">
        <span class="text-2xl"> عکس اضافه شد</span>
      </Message>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhPictureInPicture, PhPlus, PhCheckCircle } from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/management";

// asign store

const managementStore = useManagementStore();

// defults

const visible = ref(false);
const loading = ref(false);
const message = ref(false);
const addGalleryError = ref(false);
const errorMessage = ref("");

const statusCode = ref("");

const error1 = ref(false);
const error2 = ref(false);
const error3 = ref(false);
const error4 = ref(false);

const tag1 = ref("");
const tag2 = ref("");
const tag3 = ref("");
const tag4 = ref("");

// gallery information

const articleImage = ref(null);

const galleryId = ref(null);

const galleryTitle = ref("");
const eventFile = ref(null);
const eventFile2 = ref(null);
const eventFile3 = ref(null);
const eventFile4 = ref(null);
const eventFile5 = ref(null);
const eventFile6 = ref(null);
const selectedCategory = ref("");

const category = ref([
  { name: "سال های تحصیلی", code: "public" },
  { name: "مناسبت ها", code: "events" },
  { name: "خلاقیت", code: "creativity" },
  { name: "مدرسه", code: "school" },
  { name: "آموزشگاه", code: "atlas" },
]);

// add gallery to DB

const addGallery = async function () {
  uploadSuccuss.value = false;
  addGalleryError.value = false;
  message.value = false;
  imageUploadError.value = false;

  loading.value = true;
  const data = new URLSearchParams({
    title: galleryTitle.value,
    category: selectedCategory.value.code,
    tagone: tag1.value,
    tagtwo: tag2.value,
    tagthree: tag3.value,
    tagfour: tag4.value,
  });

  if (eventFile.value === null) {
    error1.value = true;
  }
  if (eventFile2.value === null) {
    error2.value = true;
  }
  if (eventFile3.value === null) {
    error3.value = true;
  }
  if (eventFile4.value === null) {
    error4.value = true;
  }

  let images = [
    eventFile.value,
    eventFile2.value,
    eventFile3.value,
    eventFile4.value,
    eventFile5.value,
    eventFile6.value,
  ];

  await $fetch("https://auth.atlasacademy.ir/image-gallery/management/addgallery", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    withCredentials: true,
    body: data,
  })
    .then((response, error) => {
      console.log(response);
      galleryId.value = response.gallery.id;
      message.value = true;
      loading.value = false;
      if (response.gallery) {
        imageUploadLoading.value = true;
        images.forEach((image) => {
          uploadImage(image);
        });
        managementStore.changeState();
      }
    })
    .catch((error) => {
      addGalleryError.value = true;
      if (error.data.statusCode === 400) {
        statusCode.value = 400;
        errorMessage.value = error.data.message;
      }
      console.log(statusCode.value);
      if (error.data.statusCode === 403) {
        errorMessage.value = "وارد حساب ادمین شوید";
      }
      loading.value = false;
      setTimeout(() => {
        addGalleryError.value = false;
      }, 5000);
    });
  loading.value = false;
};

// uploading image

const imageUploadLoading = ref(false);
const imageUploadError = ref(false);
const uploadErrorMessage = ref("");

const success = ref([]);
const uploadSuccuss = ref(false);

const uploadImage = async function (image) {
  const formData = new FormData();

  formData.append("file", image);
  formData.append("galleryId", galleryId.value);
  console.log(image);
  console.log(galleryId.value);
  await $fetch("https://auth.atlasacademy.ir/image-gallery/management/galleryimage", {
    method: "POST",
    credentials: "include",
    withCredentials: true,
    body: formData,
  })
    .then((response) => {
      message.value = true;
      if (response) {
        imageUploadLoading.value = false;
        managementStore.changeImageGalleryState();
        uploadSuccuss.value = true;
        success.value.push(image);
        setTimeout(() => {
          message.value = false;
        }, 3000);
      }
    })
    .catch((error) => {
      imageUploadLoading.value = false;
      imageUploadError.value = true;
      loading.value = false;
      uploadErrorMessage.value = "فایل عکس را انتخاب کنید";
    });
};
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #f9f5ff;
}
</style>
