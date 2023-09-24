<template>
  <header
    class="flex justify-between items-center px-4 sticky top-0 py-2 backdrop-blur-md bg-white/40 z-20"
  >
    <a
      href="/"
      class="text-4xl font-bold text-transparent bg-gradient-to-br to-purple-600 via-pink-400 from-violet-500 bg-clip-text"
      >P.</a
    >
    <button
      class="grid grid-cols-3 w-6 h-6 button active:animate-spin"
      @click="show = !show"
    >
      <div
        class="w-2 h-2 bg-red-100 col-start-2 col-end-4 rounded-full bg-gradient-to-tr via-pink-400 from-violet-500"
      ></div>
      <div
        class="w-2 h-2 bg-red-100 rounded-full bg-gradient-to-tr via-pink-400 from-violet-500"
      ></div>
      <div
        class="w-2 h-2 bg-red-100 col-start-3 rounded-full bg-gradient-to-tr via-pink-400 from-violet-500"
      ></div>
    </button>
  </header>

  <div
    class="container w-full flex flex-col items-center justify-center h-60 relative"
  >
    <div class="div">
      <h1
        class="text-4xl font-bold text-transparent bg-gradient-to-r to-purple-600 via-pink-400 from-violet-500 bg-clip-text mb-2"
        id="header"
      >
        Hi. I'm Peshraw.
      </h1>
      <ul class="capitalize font-mono experience relative">
        <div
          id="dot"
          class="opacity-0 mix-blend-darken ease-in-out transition absolute w-3 h-3 rounded-full bg-gradient-to-tr via-pink-400 from-violet-500 -left-5 top-1"
        ></div>
        <li
          class="font-mono transition opacity-0 backdrop-blur-md bg-black/80 text-white rounded-full w-max px-2 mb-1"
        >
          Fullstack developer
        </li>
        <li
          class="font-mono transition opacity-0 backdrop-blur-md bg-black/80 text-white rounded-full w-max px-2 mb-1"
        >
          UI designer
        </li>
        <li
          class="font-mono transition opacity-0 backdrop-blur-md bg-black/80 text-white rounded-full w-max px-2 mb-1"
        >
          Mobile app developer
        </li>
      </ul>
    </div>
  </div>
  <div class="p-3 mb-3 flex flex-col justify-center relative">
    <div
      class="absolute left-0 w-full h-px bg-black origin-center transition"
      :class="scale"
    ></div>
    <div class="mx-auto">
      <button
        class="button2 rounded-full px-3 py-2 text-sm z-9 text-slate-100 mx-auto bg-black/80 backdrop-blur-md transition capitalize"
      >
        What I'm good at
      </button>
    </div>
  </div>
  <div class="p-4">
    <div class="experience flex justify-center flex-col items-center space-y-3">
      <h1
        data-aos="fade-up"
        class="text-2xl md:text-4xl bg-clip-text font-bold bg-gradient-to-r from-pink-500 via-violet-600 to-blue-500 text-transparent"
      >
        Frontend
      </h1>
      <div
        data-aos="fade-up"
        class="frontend flex flex-wrap flex-rows space-x-4 transition items-center justify-items-center justify-center p-5 rounded-3xl md:rounded-full backdrop-blur-md bg-black/80 relative mb-5"
      >
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-10 justify-self-center"
        >
          <img
            src="https://www.svgrepo.com/show/349402/html5.svg"
            alt="html"
            class="w-full"
          />
        </div>
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-12 md:w-14 justify-self-center self py-px"
        >
          <img
            src="https://www.svgrepo.com/show/452185/css-3.svg"
            alt="css"
            class="w-full"
          />
        </div>
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-12 md:w-14 justify-self-center self py-px"
        >
          <img
            src="https://www.svgrepo.com/show/373705/js-official.svg"
            alt="js"
            class="w-full"
          />
        </div>
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-10 md:w-12"
        >
          <img
            src="https://www.svgrepo.com/show/354478/typescript-icon.svg"
            alt="ts"
            class="w-full"
          />
        </div>
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-8 md:w-12 justify-self-center self py-px"
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-jquery-3521520-2945023.png?f=avif&w=256"
            alt="jquery"
            class="w-full"
          />
        </div>
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-14 justify-self-center self py-px"
        >
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
            alt="bootstrap"
            class="w-full"
          />
        </div>
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-14 justify-self-center self py-px"
        >
          <img
            src="https://www.svgrepo.com/show/374118/tailwind.svg"
            alt="tailwind"
            class="w-full"
          />
        </div>
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-12 justify-self-center self py-px"
        >
          <img
            src="https://www.svgrepo.com/show/452130/vue.svg"
            alt="vue"
            class="w-full"
          />
        </div>
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-12 justify-self-center self py-px"
        >
          <img
            src="https://www.svgrepo.com/show/354131/nuxt-icon.svg"
            alt="nuxt"
            class="w-full"
          />
        </div>
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-12 justify-self-center self py-px"
        >
          <img
            src="https://www.svgrepo.com/show/452092/react.svg"
            alt="react"
            class="w-full"
          />
        </div>
        <div class="cursor-pointer transition hover:-translate-y-2 w-10">
          <img
            src="https://www.svgrepo.com/show/342062/next-js.svg"
            alt="nextjs"
            class="w-full bg-white rounded-full p-1"
          />
        </div>
      </div>
      <h1
        data-aos="fade-up"
        class="text-2xl font-bold md:text-4xl bg-clip-text bg-gradient-to-r from-lime-500 via-blue-600 to-pink-500 text-transparent pt-4"
      >
        Backend
      </h1>

      <div
        data-aos="fade-up"
        class="backend flex items-baseline flex-wrap p-2 px-3 space-x-3 rounded-full backdrop-blur-md bg-black/80 justify-center relative"
      >
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-14 justify-self-center self py-px flex items-center justify-center"
        >
          <img
            src="https://www.svgrepo.com/show/452088/php.svg"
            alt="php"
            class="w-full"
          />
        </div>
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-14 justify-self-center self py-px"
        >
          <img
            src="https://www.svgrepo.com/show/353985/laravel.svg"
            alt="laravel"
            class="w-full"
          />
        </div>
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-14 justify-self-center self py-px"
        >
          <img
            src="https://www.svgrepo.com/show/452075/node-js.svg"
            alt="node"
            class="w-full"
          />
        </div>
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-12 justify-self-center self py-px"
        >
          <img
            src="https://www.svgrepo.com/show/354202/postman-icon.svg"
            alt="postman"
            class="w-full"
          />
        </div>
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-14 justify-self-center self py-px"
        >
          <img
            src="https://www.svgrepo.com/show/452210/git.svg"
            alt="git"
            class="w-full"
          />
        </div>

        <div class="cursor-pointer 2 w-14 transition hover:-translate-y-3">
          <img
            src="https://www.svgrepo.com/show/330398/express.svg"
            alt="express"
            class="w-full bg-white rounded-full p-1"
          />
        </div>
      </div>
      <h1
        data-aos="fade-up"
        class="text-2xl font-bold md:text-4xl bg-clip-text bg-gradient-to-r from-violet-500 via-pink-600 to-yellow-500 text-transparent pt-4"
      >
        Database
      </h1>

      <div
        data-aos="fade-up"
        class="database flex flex-wrap p-2 space-x-3 px-3 shadow-lg rounded-full backdrop-blur-md bg-black/80 justify-center relative"
      >
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-14 justify-self-center self py-px"
        >
          <img
            src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
            alt="mysql"
            class="w-full"
          />
        </div>
        <div
          class="cursor-pointer transition hover:-translate-y-2 w-14 justify-self-center self py-px"
        >
          <img
            src="https://www.svgrepo.com/show/373845/mongo.svg"
            alt="mongodb"
            class="w-full"
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
  <svg
    id="wave"
    style="transform: rotate(0deg); transition: 0.3s"
    viewBox="0 0 1440 160"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
        <stop stop-color="rgba(124, 58, 237, 1)" offset="0%"></stop>
        <stop stop-color="rgba(124, 58, 237, 1)" offset="100%"></stop>
      </linearGradient>
    </defs>
    <path
      style="transform: translate(0, 0px); opacity: 1"
      fill="url(#sw-gradient-0)"
      d="M0,80L80,88C160,96,320,112,480,104C640,96,800,64,960,50.7C1120,37,1280,43,1440,48C1600,53,1760,59,1920,66.7C2080,75,2240,85,2400,85.3C2560,85,2720,75,2880,69.3C3040,64,3200,64,3360,72C3520,80,3680,96,3840,101.3C4000,107,4160,101,4320,82.7C4480,64,4640,32,4800,24C4960,16,5120,32,5280,45.3C5440,59,5600,69,5760,66.7C5920,64,6080,48,6240,37.3C6400,27,6560,21,6720,29.3C6880,37,7040,59,7200,64C7360,69,7520,59,7680,69.3C7840,80,8000,112,8160,112C8320,112,8480,80,8640,80C8800,80,8960,112,9120,122.7C9280,133,9440,123,9600,109.3C9760,96,9920,80,10080,82.7C10240,85,10400,107,10560,114.7C10720,123,10880,117,11040,114.7C11200,112,11360,112,11440,112L11520,112L11520,160L11440,160C11360,160,11200,160,11040,160C10880,160,10720,160,10560,160C10400,160,10240,160,10080,160C9920,160,9760,160,9600,160C9440,160,9280,160,9120,160C8960,160,8800,160,8640,160C8480,160,8320,160,8160,160C8000,160,7840,160,7680,160C7520,160,7360,160,7200,160C7040,160,6880,160,6720,160C6560,160,6400,160,6240,160C6080,160,5920,160,5760,160C5600,160,5440,160,5280,160C5120,160,4960,160,4800,160C4640,160,4480,160,4320,160C4160,160,4000,160,3840,160C3680,160,3520,160,3360,160C3200,160,3040,160,2880,160C2720,160,2560,160,2400,160C2240,160,2080,160,1920,160C1760,160,1600,160,1440,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z"
    ></path>
  </svg>
  <div class="h-56 bg-violet-600 pt-5 relative box-content " style="height: 200vh">
    <div  data-aos="fade-up" class="bg-white rounded-2xl transition m-5 h-20 w-20 max-h-56 max-w-screen min-w-min sticky top-20" id="box"></div>
  </div>
  <Teleport to="body">
    <Transition>
      <div
        class="feedback w-full h-screen bg-slate-100 fixed top-0 p-4 overflow-y-auto mb-6"
        v-if="show"
      >
        <div class="w-full md:w-1/2 mx-auto">
          <form @submit.prevent="sendMessage" class="relative mb-5 mt-14">
            <img
              src="https://www.svgrepo.com/show/509207/quote.svg"
              class="w-10 absolute -right-2 -top-4"
              alt="quote"
            />
            <textarea
              name="comment"
              id=""
              rows="6"
              class="resize-none outline-none w-full rounded-xl p-3"
              spellcheck="false"
              placeholder="Send an anonymous message.."
              v-model="message"
            ></textarea>
            <button
              class="p-2 transition bg-slate-200 rounded-full flex ms-auto outline-none"
              :class="{ active: active }"
            >
              Send
              <img
                src="https://www.svgrepo.com/show/533314/send-alt-2.svg"
                alt="send"
                class="w-6 -rotate-45 ml-1 transition cursor-pointer"
              />
            </button>
          </form>

          <div
            v-for="comment in commentsStore.comments"
            :key="comment"
            class="comment rounded-xl p-2 bg-white/50 backdrop-blur-md pl-5 w-full mb-4 break-words relative"
          >
            <div
              class="absolute w-1 h-3/4 rounded-md bg-slate-950 left-2 top-50 -translate-x-1/2"
            ></div>
            <div
              class="font-inherit text-slate-600"
              style="font-family: inherit"
            >
              {{ comment.body }}
            </div>
            <small class="text-slate-600">{{
              format(new Date(comment.createdAt.seconds * 1000))
            }}</small>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted, ref } from "vue";
import { useCommentsStore } from "@/stores/firebase";
import { format } from "timeago.js";

export default {
  setup() {
    AOS.init();
    const show = ref(false);
    const message = ref("");

    const commentsStore = useCommentsStore();
    commentsStore.fetchComments();

    const sendMessage = () => {
      if (message.value.length > 0) {
        commentsStore.addComment(message.value);
        message.value = "";
      }
    };
    const update = (e)=>{
      
      let box = document.getElementById('box')
      let min = 1000;
      let px = 0;
      let persent = 0;
      if(e.pageY >= min){
        if((e.pageY - min) > 50 ){
          if((e.pageY - min) < 300 ){
            box.style.width = e.pageY - min+ "px"
          }
        box.style.height = e.pageY - min+ "px"
        }
      }
    }
    onMounted(()=>{window.addEventListener('wheel', update)})
    return { show, message, sendMessage, commentsStore, format };
  },
  data() {
    return {
      active: false,
      scale: "scale-x-0",
      image: "",
    };
  },
  watch: {
    message(val) {
      if (val.length > 0) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
  },
  methods: {
    animate() {
      let texts = document.querySelectorAll(".experience li");
      let dot = document.getElementById("dot");
      let i = 0;
      const animate = setInterval(() => {
        dot.style.opacity = 1;
        if (i >= texts.length) {
          clearInterval(animate);
          i = 0;
          dot.style.transform = "scale(10)";
          setTimeout(() => {
            this.scale = "scale-x-1";
          }, 500);
        }
        texts[i].classList.remove("opacity-0");
        texts[i].classList.add("opacity-1", "-translate-y-1");
        if (i >= 1) {
          dot.style.transform += "translateY(1.6rem)";
        }

        i++;
      }, 1000);
    },
  },
  mounted() {
    this.animate();
  },
};
</script>
<style>
.button {
  animation: animate 0.5s ease-in-out;
}
@keyframes animate {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.v-enter-active,
.v-leave-active {
  transition: 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
.active {
  color: blue;
}
</style>
