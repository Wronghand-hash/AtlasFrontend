import { defineStore } from "pinia";
export const useExamStore = defineStore("exmaStore", {
  state: () => ({
    result: 0,
    examFinished: false,
  }),
  actions: {
    async submitResult(result) {
      this.result = result;
      console.log("this is this.result value :", result);
      // const data = new URLSearchParams({
      //   torrenceResults: result,
      // });
      // await $fetch("https://auth.atlasacademy.ir/user/submitresults", {
      //   method: "POST",
      //   body: data,
      //   withCredentials: true,
      //   credentials: "include",
      // });
    },
  },
});
