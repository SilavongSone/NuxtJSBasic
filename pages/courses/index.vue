<template>
  <div>
    <section class="bg-white w-full shadow-md overflow-hidden h-16 relative">
      <div class="flex">
        <ul
          class="flex p-4 ml-4 mt-3 items-center text-sm rounded-xl w-32 h-10 bg-white shadow-md text-violet-500 hover:text-white hover:bg-violet-500 hover:cursor-pointer overflow-hidden"
          v-for="(item, index) in moreCorses"
          :key="index"
        >
          <img class="w-8 mr-2" :src="item.icon" />
          {{
            item.moreCorse
          }}
        </ul>

        <ul
          class="flex bg-white shadow-md rounded-lg m-3 ml-36 h-10 w-24 items-center justify-center hover:bg-violet-500 cursor-pointer hover:text-white overflow-hidden text-violet-500 right-1 absolute"
        >
          <Icon name="fluent:bookmark-16-filled" size="30" />
          <p class="text-sm">Record</p>
        </ul>
      </div>
    </section>

    <!-- body -->
    <section class="box-border h-full p-2">
      <div class="bg-white w-full h-full flex justify-center">
        <ul class="overflow-auto">
          <li
            v-for="(item, index) in course"
            :key="index"
            class="m-4 bg-white overflow-hidden w-64 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer h-60"
          >
            <iframe
              width="270"
              height="140"
              :src="item.iframe"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1 text-sm">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <p class="text-xs">
              <a :href="item.link"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, quae.</a
              >
            </p>
          </li>
        </ul>
        <ul class="overflow-auto">
          <li
            v-for="(item, index) in course"
            :key="index"
            class="m-4 bg-white overflow-hidden w-64 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer h-60"
          >
            <iframe
              width="270"
              height="140"
              :src="item.iframe"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1 text-sm">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <p class="text-xs">
              <a :href="item.link"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, quae.</a
              >
            </p>
          </li>
        </ul>
        <ul class="overflow-auto">
          <li
            v-for="(item, index) in course"
            :key="index"
            class="m-4 bg-white overflow-hidden w-64 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer h-60"
          >
            <iframe
              width="270"
              height="140"
              :src="item.iframe"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1 text-sm">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <p class="text-xs">
              <a :href="item.link"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, quae.</a
              >
            </p>
          </li>
        </ul>
        <ul class="overflow-auto hidden xl:block">
          <li
            v-for="(item, index) in course"
            :key="index"
            class="m-4 bg-white overflow-hidden w-64 rounded-lg space-x-2 shadow-md hover:brightness-95 cursor-pointer h-60"
          >
            <iframe
              width="270"
              height="140"
              :src="item.iframe"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="flex justify-between">
              <p class="font-medium pt-1 text-sm">Bsaic of HTML5</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-8 text-violet-500 mr-2 hover:cursor-pointer hover:brightness-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </p>
            </div>
            <p class="text-xs">
              <a :href="item.link"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, quae.</a
              >
            </p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import adobePR from "../../assets/icon/PR.png";
import adobePS from "../../assets/icon/PS.png";
import eN from "../../assets/icon/english.png";
import html from "../../assets/icon/HTML.png";
import more from "../../assets/icon/More.png";

const moreCorses = [
  {
    icon: adobePR,
    moreCorse: "AdoboPR",
  },
  {
    icon: adobePS,
    moreCorse: "AdoboPS",
  },
  {
    icon: eN,
    moreCorse: "English",
  },
  {
    icon: html,
    moreCorse: "Basic HTML",
  },
  {
    icon: more,
    moreCorse: "More",
  },
];

const course = [
  {
    iframe: "https://www.youtube.com/embed/7MeQxBqchNU",
    link: "https://youtu.be/7MeQxBqchNU",
  },
  {
    iframe: "https://www.youtube.com/embed/-jzu5YH6OMQ",
    link: "https://youtu.be/-jzu5YH6OMQ",
  },
  {
    iframe: "https://www.youtube.com/embed/1wpMD88avL0",
    link: "https://youtu.be/1wpMD88avL0",
  },
];
</script>
