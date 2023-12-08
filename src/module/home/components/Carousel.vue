<template>
  <section class="relative z-10 bg-white">
    <div
      class="mx-auto w-[280px] min-w-[280px] max-w-[840px] py-24 before:absolute before:bottom-0 before:left-0 before:bg-[url('/wave.svg')] md:w-auto"
    >
      <SectionTitle title="Climate Change Problems" id="carousel-title" animation />
      <div
        class="container invisible relative z-10 w-full list-none overflow-hidden p-0"
        id="carousel"
        :class="{
          ['!visible animate-[animationUp_1.5s] ']: isscrolledintocarousel,
        }"
      >
        <div
          class="relative z-10 flex h-full w-full transition-all"
          :style="{
            transform: `translate3d(${currentIndex}px,0,0) `,
            transition: 'all ' + transition,
          }"
        >
          <div
            class="mx-[9px] h-[450px] w-[260px] flex-shrink-0 cursor-pointer rounded-2xl !border-theme-secondary p-0 hover:!border-[5px]"
            :style="{ border: `0px solid ` }"
          >
            <img
              class="-mt-[1px] h-[100.3%] w-full max-w-[100.3%] rounded-lg brightness-75 transition-all md:-mr-[1px] md:w-[100.3%]"
              :src="images[images.length - 1]"
              alt=""
            />
          </div>
          <div
            class="mx-[9px] h-[450px] w-[260px] flex-shrink-0 cursor-pointer rounded-2xl !border-theme-secondary p-0 hover:!border-[5px]"
            :style="{ border: `0px solid` }"
            v-for="(img, index) in images"
            :key="index"
            :class="{ cardhover: index == indextransition }"
          >
            <img
              class="-mr-[1px] -mt-[1px] h-[100.3%] w-full max-w-[100.3%] rounded-lg brightness-75 transition-all md:w-[100.3%]"
              :src="img"
            />
          </div>
          <div
            class="mx-[9px] h-[450px] w-[260px] flex-shrink-0 cursor-pointer rounded-2xl !border-theme-secondary hover:border-[5px]"
            :style="{ border: `0px solid ` }"
          >
            <img
              class="-mr-[2px] -mt-[1px] h-[100.3%] w-full max-w-[100.3%] rounded-lg brightness-75 transition-all md:w-[100.3%]"
              :src="images[0]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import useIsScrolled from "@/utils/hooks/useIsScrolled";
import { ref, computed, onMounted, type Ref } from "vue";
import SectionTitle from "../../../components/SectionTitle.vue";

let images = ["/maria.jpg", "/martin.jpg", "/vlad.jpeg", "/naz.jpeg"];
let currentIndex = ref(0);
let indextransition = ref(0);
let isscrolledintocarousel: Ref<boolean | undefined> =
  useIsScrolled("carousel");

onMounted(() => {
  startSlide();
});

const total = computed(() => (images.length + 2) * 280 - 840);

const transition = computed(() => {
  if (currentIndex.value == 0) {
    return "0s";
  } else {
    return "1s";
  }
});

const startSlide = () => {
  setInterval(prev, 5000);
};
const prev = () => {
  if (Math.abs(currentIndex.value) < total.value) {
    currentIndex.value -= 280;
    indextransition.value++;
  } else {
    currentIndex.value = 0;
    indextransition.value = 0;
  }
};
</script>
