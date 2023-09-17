<template>
  <div class="p-4 text-4xl">Break the limits</div>
  <div class="p-4">
    <div class="experience flex justify-center flex-col items-center space-y-3">
      <h1
        data-aos="fade-up-left"
        class="text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-pink-500 via-violet-600 to-blue-500 text-transparent"
      >
        Frontend
      </h1>
      <div
        data-aos="fade-up"
        class="frontend flex space-x-3 px-3 transition items-center justify-center p-4 rounded-full backdrop-blur-md bg-white/80 relative"
      >
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/452228/html-5.svg"
            alt="html"
            class="w-16"
          />
        </div>
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/452185/css-3.svg"
            alt="css"
            class="w-16"
          />
        </div>
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/373705/js-official.svg"
            alt="js"
            class="w-16"
          />
        </div>
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/354478/typescript-icon.svg"
            alt="ts"
            class="w-14"
          />
        </div>
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-jquery-10-1175155.png?f=avif&w=256"
            alt="jquery"
            class="w-16"
          />
        </div>
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
            alt="bootstrap"
            class="w-16"
          />
        </div>
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/374118/tailwind.svg"
            alt="tailwind"
            class="w-16"
          />
        </div>
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/452130/vue.svg"
            alt="vue"
            class="w-16"
          />
        </div>
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/354131/nuxt-icon.svg"
            alt="nuxt"
            class="w-16"
          />
        </div>
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/452092/react.svg"
            alt="react"
            class="w-16"
          />
        </div>
      </div>
      <h1
        data-aos="fade-up"
        class="text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-lime-500 via-blue-600 to-yellow-500 text-transparent"
      >
        Backend
      </h1>

      <div
        data-aos="fade-left"
        class="backend flex p-2 px-3 space-x-3 rounded-full backdrop-blur-md bg-white/80 justify-center relative"
      >
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/452088/php.svg"
            alt="php"
            class="w-16"
          />
        </div>
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/353985/laravel.svg"
            alt="laravel"
            class="w-16"
          />
        </div>
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/452075/node-js.svg"
            alt="node"
            class="w-16"
          />
        </div>
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/354202/postman-icon.svg"
            alt="postman"
            class="w-16"
          />
        </div>
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/452210/git.svg"
            alt="git"
            class="w-16"
          />
        </div>

        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/330398/express.svg"
            alt="express"
            class="w-16"
          />
        </div>
      </div>
      <h1
        data-aos="fade-up"
        class="text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-violet-500 via-pink-600 to-yellow-500 text-transparent"
      >
        Database
      </h1>

      <div
        data-aos="fade-right"
        class="database flex p-2 space-x-3 px-3 shadow-lg rounded-full backdrop-blur-md bg-white/80 justify-center relative"
      >
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
            alt="mysql"
            class="w-14 md:w-16"
          />
        </div>
        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/373845/mongo.svg"
            alt="mongodb"
            class="w-14 md:w-16"
          />
        </div>

        <div class="cursor-pointer transition hover:-translate-y-2">
          <img
            src="https://www.svgrepo.com/show/353735/firebase.svg"
            alt="firebase"
            class="w-14 md:w-16"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  setup() {
    AOS.init();
  },
};
</script>
