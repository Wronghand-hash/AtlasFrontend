<template>
  <div>
    <div class="w-full h-full flex items-end p-7 lg:p-16 flex-col space-y-10">
      <h2
        class="lg:text-xl text-2xl text-darkBlue border-b-8 rounded-md border-mainYellow"
      >
        اضافه کردن مقاله
      </h2>
      <h2
        dir="rtl"
        class="lg:text-sm text-sm text-mainRed border-2 border-dashed p-1 rounded-md border-mainRed"
      >
        *حجم فایل ها نباید از 3 مگابایت بیشتر باشد.
      </h2>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-end gap-4"
      >
        <div class="flex items-end flex-col space-y-3">
          <label class="text-md text-mainBlue" for="title">عنوان مقاله</label>
          <InputText
            id="title"
            v-model="articleTitle"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end flex-col space-y-3">
          <label class="text-md text-mainBlue" for="authur">نام نویسنده</label>
          <InputText
            id="authur"
            v-model="articleAuthur"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end flex-col space-y-3">
          <label class="text-md text-mainBlue" for="username"
            >تاریخ مقاله</label
          >
          <InputMask
            mask="9999/99/99"
            id="username"
            v-model="date"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end flex-col space-y-1">
          <label class="text-md text-mainBlue" for="username">دسته بندی</label>

          <Dropdown
            v-model="selectedCategory"
            :options="category"
            @change="showCode = true"
            optionLabel="name"
            placeholder="دسته بندی"
            class="rounded-lg w-48 h-14"
          />
        </div>
        <div
          class="flex flex-col space-y-2 lg:col-span-2 items-center justify-center"
        >
          <label
            for="articleImage"
            label="Show"
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
          >
            <span> انتخاب عکس </span>
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
            id="articleImage"
          />
          <label
            class="px-3 py-1 cursor-pointer border-2 items-center border-mainGreen active:bg-mainGreen active:text-mainWhite bg-mainGreen hover:bg-mainWhite hover:text-mainGreen text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-full"
            v-show="eventFile"
            label="Show"
          >
            <span> انتخاب شد </span>
            <PhCheckCircle class=" " :size="25" weight="fill" />
          </label>
        </div>

        <div
          class="flex items-end lg:col-span-2 lg:place-self-end flex-col space-y-3"
        >
          <label class="text-md text-mainBlue" for="firstHeader"
            >سر تیتر اول</label
          >
          <InputText
            id="firstHeader"
            v-model="articleFirstHeader"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end lg:col-span-2 flex-col space-y-4">
          <label class="text-md text-mainBlue" for="firstBody"
            >پاراگراف اول
          </label>
          <Textarea
            id="firstBody"
            class="w-full"
            autoResize
            v-model="articleFirstBody"
            rows="6"
            cols="90"
          />
        </div>
        <div
          class="flex items-end lg:col-span-2 lg:place-self-end flex-col space-y-3"
        >
          <label class="text-md text-mainBlue" for="secondHeader"
            >سر تیتر دوم</label
          >
          <InputText
            id="secondHeader"
            v-model="articleSecondHeader"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end lg:col-span-2 flex-col space-y-4">
          <label class="text-md text-mainBlue" for="secondBody"
            >پاراگراف دوم
          </label>
          <Textarea
            id="secondBody"
            class="w-full"
            autoResize
            v-model="articleSecondBody"
            rows="6"
            cols="90"
          />
        </div>
        <div
          class="flex items-end lg:col-span-2 place-self-end flex-col space-y-3"
        >
          <label class="text-md text-mainBlue" for="thirdHeader"
            >سر تیتر سوم</label
          >
          <InputText
            id="thirdHeader"
            v-model="articleThirdHeader"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex items-end lg:col-span-2 flex-col space-y-4">
          <label class="text-md text-mainBlue" for="thridBody"
            >پاراگراف سوم
          </label>
          <Textarea
            id="thridBody"
            class="w-full"
            autoResize
            v-model="articleThirdBody"
            rows="6"
            cols="90"
          />
        </div>
      </div>
      <div
        class="flex items-end lg:col-span-2 place-self-end flex-col space-y-3"
      >
        <label class="text-md text-mainBlue" for="tag1">برچسب ها</label>
        <InputText id="tag1" v-model="tag1" aria-describedby="username-help" />
      </div>
      <div
        class="flex items-end lg:col-span-2 place-self-end flex-col space-y-3"
      >
        <label class="text-md text-mainBlue" for="tag2">برچسب ها</label>
        <InputText id="tag2" v-model="tag2" aria-describedby="username-help" />
      </div>
      <div
        class="flex items-end lg:col-span-2 place-self-end flex-col space-y-3"
      >
        <label class="text-md text-mainBlue" for="tag3">برچسب ها</label>
        <InputText id="tag3" v-model="tag3" aria-describedby="username-help" />
      </div>
      <div
        class="flex items-end lg:col-span-2 place-self-end flex-col space-y-3"
      >
        <label class="text-md text-mainBlue" for="tag4">برچسب ها</label>
        <InputText id="tag4" v-model="tag4" aria-describedby="username-help" />
      </div>

      <div
        class="h-full lg:flex-row flex-col-reverse justify-center w-full flex items-center self-center lg:space-x-5"
      >
        <button
          label="Show"
          @click="addArticle()"
          class="px-3 py-1 border-2 items-center border-mainBlue active:bg-mainBlue active:text-mainWhite bg-mainBlue hover:bg-mainWhite hover:text-mainBlue text-mainWhite transition ease-linear duration-200 flex space-x-2 rounded-sm"
        >
          <span v-if="!imageUploadLoading"> آپلود مقاله </span>
          <PhPlus v-if="!imageUploadLoading" :size="25" />
          <ProgressSpinner
            v-if="imageUploadLoading"
            style="width: 30px; height: 30px"
            strokeWidth="8"
            animationDuration=".5s"
            aria-label="Custom ProgressSpinner"
          />
        </button>
      </div>
      <Message
        class="w-full"
        v-show="addArticleError && errorStatus !== 400"
        severity="error"
      >
        <span class="text-2xl">{{ errorMessage }}</span>
      </Message>
      <div>
        <Message
          v-show="errorStatus === 400"
          v-for="error in errorMessage"
          :key="error"
          class="w-full"
          severity="error"
        >
          <span class="text-2xl">{{ error }}</span>
        </Message>
      </div>

      <Message class="w-full" v-show="imageUploadError" severity="error">
        <span class="text-2xl">{{ uploadErrorMessage }}</span>
      </Message>

      <div>
        <Message
          class="space-x-4 flex items-center justify-center"
          severity="info"
          v-if="imageUploadLoading"
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
        <span class="text-2xl">مقاله اضافه شد</span>
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
const addArticleError = ref(false);
const errorMessage = ref("");
const error = ref(false);
// article information

const category = ref([
  { name: "خلاقیت", code: "creativity" },
  { name: "عمومی", code: "public" },
  { name: "مدرسه", code: "school" },
  { name: "آموزشگاه", code: "atlas" },
]);

const articleImage = ref(null);

const articleId = ref(null);

const selectedCategory = ref("");
const articleTitle = ref("");
const articleFirstBody = ref("");
const articleFirstHeader = ref("");
const articleSecondHeader = ref("");
const articleSecondBody = ref("");
const articleThirdHeader = ref("");
const articleThirdBody = ref("");
const articleAuthur = ref("");
const date = ref("");
const eventFile = ref(null);

const errorStatus = ref("");
// add article to DB

const addArticle = async function () {
  addArticleError.value = false;
  message.value = false;
  loading.value = true;
  console.log("the func is running", selectedCategory.value);

  const data = new URLSearchParams({
    title: articleTitle.value,
    first_header: articleFirstHeader.value,
    first_body: articleFirstBody.value,
    second_header: articleSecondHeader.value,
    second_body: articleSecondBody.value,
    third_header: articleThirdHeader.value,
    third_body: articleThirdBody.value,
    authur: articleAuthur.value,
    category: selectedCategory.value.code,
    date: date.value,
  });

  await $fetch("https://auth.atlasacademy.ir/management/addarticle", {
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
      articleId.value = response.article.id;
      if (response.article) {
        imageUploadLoading.value = true;
        uploadImage();
        managementStore.changeState();
      }
    })
    .catch((error) => {
      addArticleError.value = true;
      if (error.data.statusCode === 403) {
        errorMessage.value = "وارد حساب کاربری خود شوید";
      }
      if (error.data.statusCode === 400) {
        errorMessage.value = error.data.message;
        errorStatus.value = 400;
      }
      console.log(errorMessage.value);
      setTimeout(() => {
        addArticleError.value = false;
      }, 4000);
    });
  loading.value = false;
};

// uploading image

const imageUploadLoading = ref(false);
const imageUploadError = ref(false);
const uploadErrorMessage = ref("");

const uploadImage = async function (event) {
  const formData = new FormData();

  formData.append("file", eventFile.value);
  formData.append("articleId", articleId.value);
  console.log(eventFile.value);
  console.log(articleId.value);
  await $fetch("https://auth.atlasacademy.ir/management/articleimage", {
    method: "POST",
    credentials: "include",
    withCredentials: true,
    body: formData,
  })
    .then((response) => {
      if (response) {
        imageUploadLoading.value = false;
        message.value = true;
      }
    })
    .catch((error) => {
      imageUploadError.value = true;
      if (error.data.statusCode === 422) {
        uploadErrorMessage.value = "فایل عکس را انتخاب فرمایید";
      }
      imageUploadLoading.value = false;
      loading.value = false;
    });
};
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #f9f5ff;
}
</style>
