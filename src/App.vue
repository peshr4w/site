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
    <div>
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
            src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
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
        <div class="cursor-pointer transition hover:-translate-y-2 w-10">
          <img
            src="https://www.svgrepo.com/show/353751/flutter.svg"
            alt="flutter"
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
        <div class="cursor-pointer 2 w-14 transition hover:-translate-y-3">
          <img
            src="https://www.svgrepo.com/show/373644/graphql.svg"
            alt="graphql"
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
  <div
    class="h-56 bg-violet-600 pt-5 relative overflow-hidden"
    style="height: auto"
  >
    <h1 data-aos="fade-up-right" class="text-white text-3xl ml-5">How am I?</h1>
    <div
      data-aos="fade-up-left"
      class="bg-white rounded-3xl transition m-5 p-3 mb-14 flex flex-col md:flex-row relative"
      id="box"
    >
      <div
        data-aos="zoom-in-up"
        class="image bg-slate-200 shadow w-36 h-36 rounded-full overflow-hidden shrink-0"
      >
        <img
          src="https://i.pinimg.com/564x/19/c0/df/19c0dfb48482cae6c971ef93dcf161f5.jpg"
          alt=""
          class="w-full"
        />
      </div>
      <div data-aos="fade-up" class="container p-2 pl-3">
        <h1 class="capitalize text-2xl text-slate-800 mb-2">peshraw jwamer</h1>
        <p class="text-sm text-slate-600 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          quae. Ducimus officiis, molestiae repudiandae ad eos sint debitis
          adipisci saepe nulla possimus velit neque labore voluptas numquam quod
          libero reprehenderit?
          <span class="inline-flex"
            ><a href="#" class="text-blue-500"
              >See my CV <sup>&#8599;</sup></a
            ></span
          >
        </p>
        <div class="flex items-center gap-x-2 justify-end">
          <a class="w-8">
            <img
              src="https://www.svgrepo.com/show/349552/viber.svg"
              alt=""
              class="w-full"
            />
          </a>
          <a class="w-6">
            <img
              src="https://www.svgrepo.com/show/475692/whatsapp-color.svg"
              alt=""
              class="w-full"
            />
          </a>
          <button class="w-6">
            <img
              src="https://www.svgrepo.com/show/303107/facebook-messenger-3-logo.svg"
              alt=""
              class="w-full"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="bg-slate-100">
      <svg
        id="wave"
        style="transform: rotate(180deg); transition: 0.3s"
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(248, 250, 252, 1)" offset="0%"></stop>
            <stop stop-color="rgba(248, 250, 252, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style="transform: translate(0, 0px); opacity: 1"
          fill="url(#sw-gradient-0)"
          d="M0,0L34.3,10C68.6,20,137,40,206,43.3C274.3,47,343,33,411,33.3C480,33,549,47,617,58.3C685.7,70,754,80,823,76.7C891.4,73,960,57,1029,46.7C1097.1,37,1166,33,1234,33.3C1302.9,33,1371,37,1440,38.3C1508.6,40,1577,40,1646,48.3C1714.3,57,1783,73,1851,78.3C1920,83,1989,77,2057,73.3C2125.7,70,2194,70,2263,71.7C2331.4,73,2400,77,2469,73.3C2537.1,70,2606,60,2674,58.3C2742.9,57,2811,63,2880,56.7C2948.6,50,3017,30,3086,31.7C3154.3,33,3223,57,3291,70C3360,83,3429,87,3497,78.3C3565.7,70,3634,50,3703,38.3C3771.4,27,3840,23,3909,33.3C3977.1,43,4046,67,4114,63.3C4182.9,60,4251,30,4320,23.3C4388.6,17,4457,33,4526,46.7C4594.3,60,4663,70,4731,66.7C4800,63,4869,47,4903,38.3L4937.1,30L4937.1,100L4902.9,100C4868.6,100,4800,100,4731,100C4662.9,100,4594,100,4526,100C4457.1,100,4389,100,4320,100C4251.4,100,4183,100,4114,100C4045.7,100,3977,100,3909,100C3840,100,3771,100,3703,100C3634.3,100,3566,100,3497,100C3428.6,100,3360,100,3291,100C3222.9,100,3154,100,3086,100C3017.1,100,2949,100,2880,100C2811.4,100,2743,100,2674,100C2605.7,100,2537,100,2469,100C2400,100,2331,100,2263,100C2194.3,100,2126,100,2057,100C1988.6,100,1920,100,1851,100C1782.9,100,1714,100,1646,100C1577.1,100,1509,100,1440,100C1371.4,100,1303,100,1234,100C1165.7,100,1097,100,1029,100C960,100,891,100,823,100C754.3,100,686,100,617,100C548.6,100,480,100,411,100C342.9,100,274,100,206,100C137.1,100,69,100,34,100L0,100Z"
        ></path>
      </svg>
      <div class="bg-slate-100 p-4 relative h-auto">
        <h1
          data-aos="fade-up-right"
          class="text-slate-500 text-3xl mb-5 relative"
        >
          What I do?
        </h1>
        <img
          src="https://www.svgrepo.com/show/400961/art-compass-divider-drawing-equipment-graphic.svg"
          alt=""
          class="w-3/12 rotate-45 opacity-50 right-0 absolute -top-10"
        />
        <div class="flex gap-x-2 mb-10">
          <div
            data-aos="fade-up-right"
            class="web rounded-2xl bg-white flex items-center flex-col basis-1/2 p-1 capitalize h-56 relative"
          >
            <h1 class="text-xl m-1 md:m-2 text-violet-600">web app</h1>
            <div
              class="flex flex-wrap gap-1 md:gap-2 items-center justify-center my-auto"
            >
              <img
                src="https://www.svgrepo.com/show/353985/laravel.svg"
                alt=""
                class="w-8 md:w-10"
              />
              <img
                src="https://www.svgrepo.com/show/374118/tailwind.svg"
                alt=""
                class="w-10"
              />
              <img
                src="https://www.svgrepo.com/show/452130/vue.svg"
                alt=""
                class="w-8 md:w-10"
              />
              <img
                src="https://www.svgrepo.com/show/354131/nuxt-icon.svg"
                alt=""
                class="w-8 md:w-10"
              />
              <img
                src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
                alt=""
                class="w-10"
              />
              <img
                src="https://www.svgrepo.com/show/342062/next-js.svg"
                alt=""
                class="w-8 md:w-10"
              />
              <img
                src="https://www.svgrepo.com/show/373845/mongo.svg"
                alt="mongodb"
                class="w-10"
              />
              <img
                src="https://www.svgrepo.com/show/353735/firebase.svg"
                alt="firebase"
                class="w-9 md:w-10"
              />
              <img
                src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
                alt="mysql"
                class="w-10"
              />
              <img
                src="https://www.svgrepo.com/show/452075/node-js.svg"
                alt="node"
                class="w-10"
              />
              <img
                src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                alt="bootstrap"
                class="w-10"
              />
            </div>
          </div>
          <div
            data-aos="fade-up-left"
            class="mob rounded-2xl flex items-center flex-col bg-white basis-1/2 p-2 capitalize h-56"
          >
            <h1 class="text-xl m-1 md:m2 text-blue-500">mobile app</h1>
            <img
              src="https://www.svgrepo.com/show/353751/flutter.svg"
              alt="flutter"
              class="w-20 my-auto"
            />
          </div>
        </div>
        <h1
          data-aos="fade-up"
          class="text-center mb-6 text-2xl text-slate-500 -z-10"
        >
          My projects
        </h1>
        <div class="flex justify-center gap-3  flex-wrap projects">
          <a  href="#" class="p-3 rounded-2xl bg-white w-60 scale-50 transition hover:rotate-6 hover:scale-105 hover:shadow-lg  ">
            <h2>project</h2>
            <div class="text-slate-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto reprehenderit fugit quo atque, velit reiciendis!
            </div>
          </a>
          <a  href="#" class="p-3 rounded-2xl bg-white w-60 scale-50 transition hover:rotate-6 hover:scale-105 hover:shadow-lg ">
            <h2>project</h2>
            <div class="text-slate-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto reprehenderit fugit quo atque, velit reiciendis!
            </div>
          </a>
          <a  href="#" class="p-3 rounded-2xl bg-white w-60 scale-50 transition hover:rotate-6 hover:scale-105 hover:shadow-lg ">
            <h2>project</h2>
            <div class="text-slate-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto reprehenderit fugit quo atque, velit reiciendis!
            </div>
          </a>
        </div>
      </div>
      <svg
        id="wave"
        style="transform: rotate(0deg); transition: 0.3s"
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(241, 245, 249, 1)" offset="0%"></stop>
            <stop stop-color="rgba(241, 245, 249, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style="transform: translate(0, 0px); opacity: 1"
          fill="url(#sw-gradient-0)"
          d="M0,60L120,56.7C240,53,480,47,720,48.3C960,50,1200,60,1440,56.7C1680,53,1920,37,2160,35C2400,33,2640,47,2880,51.7C3120,57,3360,53,3600,50C3840,47,4080,43,4320,35C4560,27,4800,13,5040,8.3C5280,3,5520,7,5760,16.7C6000,27,6240,43,6480,55C6720,67,6960,73,7200,76.7C7440,80,7680,80,7920,80C8160,80,8400,80,8640,70C8880,60,9120,40,9360,28.3C9600,17,9840,13,10080,15C10320,17,10560,23,10800,36.7C11040,50,11280,70,11520,66.7C11760,63,12000,37,12240,35C12480,33,12720,57,12960,63.3C13200,70,13440,60,13680,61.7C13920,63,14160,77,14400,81.7C14640,87,14880,83,15120,75C15360,67,15600,53,15840,51.7C16080,50,16320,60,16560,58.3C16800,57,17040,43,17160,36.7L17280,30L17280,100L17160,100C17040,100,16800,100,16560,100C16320,100,16080,100,15840,100C15600,100,15360,100,15120,100C14880,100,14640,100,14400,100C14160,100,13920,100,13680,100C13440,100,13200,100,12960,100C12720,100,12480,100,12240,100C12000,100,11760,100,11520,100C11280,100,11040,100,10800,100C10560,100,10320,100,10080,100C9840,100,9600,100,9360,100C9120,100,8880,100,8640,100C8400,100,8160,100,7920,100C7680,100,7440,100,7200,100C6960,100,6720,100,6480,100C6240,100,6000,100,5760,100C5520,100,5280,100,5040,100C4800,100,4560,100,4320,100C4080,100,3840,100,3600,100C3360,100,3120,100,2880,100C2640,100,2400,100,2160,100C1920,100,1680,100,1440,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z"
        ></path>
      </svg>
    </div>
    <div class="text-2xl text-center text-white py-4">
      {{ new Date().getFullYear() }}
    </div>
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
    
    scrollAnimate(){
      let projects = document.querySelectorAll('.projects a')
      
      
      
      window.onscroll = (e)=>{
      
        
        projects.forEach((project) => {
          if(window.pageYOffset > (project.getBoundingClientRect().top + 700)){
           
            project.classList.remove('scale-50')
            project.classList.remove('translate-y-20')
        }else{
          project.classList.add('scale-50')
          project.classList.add('translate-y-20')
        }
        console.log(  project.style.background)
      })
      }
    }
  },
  mounted() {
    this.animate();
    this.scrollAnimate()
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
