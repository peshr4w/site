<template>
  <header
    class="flex justify-between items-center px-4 sticky top-0 py-2 backdrop-blur-md  bg-white/40 z-20"
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
          class="opacity-0 mix-blend-darken ease-in-out transition absolute w-3 h-3 rounded-full bg-gradient-to-tr via-pink-400 from-violet-500 -left-5 top-0"
        ></div>
        <li class="font-mono transition opacity-0">Full-stack developer</li>
        <li class="font-mono transition opacity-0">UI designer</li>
        <li class="font-mono transition opacity-0">
          Mobile application developer
        </li>
      </ul>
    </div>
  </div>
  <div class="p-3 mb-3 flex flex-col justify-center relative">
    <button
      class="border-slate-200 rounded-full px-3 py-2 border text-sm z-9 text-slate-700 mx-auto bg-white hover:bg-slate-100 transition capitalize"
    >
      What I'm good at
    </button>
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
        class="frontend flex flex-wrap flex-rows space-x-4 transition items-center justify-items-center justify-center p-5 rounded-3xl md:rounded-full backdrop-blur-md bg-white/80 relative mb-5"
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
            src="https://cdn.iconscout.com/icon/free/png-512/free-jquery-10-1175155.png?f=avif&w=256"
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
            class="w-full"
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
        class="backend flex items-baseline flex-wrap p-2 px-3 space-x-3 rounded-full backdrop-blur-md bg-white/80 justify-center relative"
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
            class="w-full"
          />
        </div>
        <div class="cursor-pointer 2 w-14 transition hover:-translate-y-3">
          <img
            src="https://www.svgrepo.com/show/373554/django.svg"
            alt="django"
            class="w-full"
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
        class="database flex flex-wrap p-2 space-x-3 px-3 shadow-lg rounded-full backdrop-blur-md bg-white/80 justify-center relative"
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
  <div class="h-56"></div>
  <Teleport to="body">
    <Transition>
      <div
        class="feedback w-full h-screen bg-slate-100 fixed top-14 p-4"
        
      >
        
          <form @submit.prevent="sendMessage" class="relative mb-3">
            <img
              src="https://www.svgrepo.com/show/509207/quote.svg"
              class="w-10 absolute -right-2 -top-4"
              alt="quote"
            />
            <textarea
              name="comment"
              id=""
              rows="6"
              class="resize-none outline-none w-full rounded-lg p-3"
              spellcheck="off"
              placeholder="Send an anonymous message.."
              v-model="message"
            ></textarea>
            <button
              class="p-2 transition bg-slate-200 rounded-full flex ms-auto"
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
        
        <div class="p-2 space-y-3 overflow-y-auto h-full">
          <div v-for="comment in comments" :key="comment" class="shadow rounded-lg p-2 bg-white">
         <pre class="font-inherit" style="font-family: inherit;">{{ comment.body }}</pre> 
         <small>{{ format(comment.createdAt) }}</small>
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
import { format } from 'timeago.js';
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
export default {
  setup() {
    AOS.init();
    const show = ref(false);
    const message = ref("");
    const comments = ref([]);

    const firebaseConfig = {
      apiKey: "AIzaSyBd8mW76Etebho-ecVv8oQ-zHddcm_7IvI",
      authDomain: "site-4d7b4.firebaseapp.com",
      projectId: "site-4d7b4",
      storageBucket: "site-4d7b4.appspot.com",
      messagingSenderId: "320463935608",
      appId: "1:320463935608:web:aabadc70f40c4190fab58d",
      measurementId: "G-3BDJJHXKHP",
    };
    initializeApp(firebaseConfig);
    const db = getFirestore();
    const colref = collection(db, "comments");
    const q = query(colref, orderBy("createdAt"));

    
    
    const fetchComments = ()=>{
      let commentss = []
    onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        commentss.push({ ...doc.data(), id: doc.id })
    });
    });
    comments.value = commentss;
  }
  fetchComments()
  

    const sendMessage = () => {
      if (message.value.length > 0) {
        addDoc(colref, {
          body: message.value,
          createdAt: new Date()
        })
      }
    };
    return { show, message, sendMessage, comments, format };
  },
  data() {
    return {
      active: false,
    };
  },
  watch: {
    message(val) {
      console.log(val);
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
  background: rgb(255, 93, 155);
  color: #fff;
}
</style>
