<template>
  <div>
    <div
      :class="`bg-theme-primary  relative w-full overflow-hidden`"
      :style="{ height: 'calc( ' + height + ' - 111px )' }"
    >
      <Fall
        v-if="
          themeState.theme === 'autumn' ||
          themeState.fullTheme.icon === 'autumn'
        "
      />
      <Winter
        v-else-if="
          themeState.theme === 'winter' ||
          themeState.fullTheme.icon === 'winter'
        "
      />

      <OtherTheme v-else />

      <div
        class="image absolute -left-[10%] bottom-0 h-[76%] w-auto md:left-[4%] md:w-[36%] 2xl:left-[-4%] 2xl:h-[80%] 2xl:w-[50%]"
      >
        <img
          class="rotate-y h-full w-full"
          alt="Vue logo"
          :src="themeState.fullTheme.image"
        />
      </div>
      <div
        class="left bg-theme-secondary md:clip-1 absolute left-0 top-0 h-48 w-full md:left-auto md:h-full"
      >
        <div
          class="text-theme-primary mt-4 md:mt-0 absolute right-0 top-[40%] w-full translate-y-[-50%] uppercase md:right-[2%] md:top-[65%] md:m-4 md:w-1/2"
        >
          <Logo />
          <h1 class="mb-3 text-center text-2xl font-medium md:mb-8 md:text-3xl">

            Il est essentiel de trouver des solutions pour préserver notre climat et maintenir l'équilibre des saisons          </h1>
          <p
            class="font-display ml-[50%] hidden w-10/12 translate-x-[-50%] text-center font-light md:inline-block"
          >
          Le Réseau Action Climat, fédération d’associations nationales et locales, lutte contre les causes des changements climatiques, de l’échelle locale à l'échelle internationale.
          </p>
        </div>
      </div>
    </div>
    <Carousel />
    <SwipperComponent title="Climate Change Articles" background="bg-theme-gray" />
    <SwipperComponent title="Climate Change Articles France" background="bg-white" />

    <Items />
  </div>
</template>

<script lang="ts" setup>
import img from "@/assets/home/fall.svg";
import Items from "@/module/home/components/Items.vue";
import Carousel from "./components/Carousel.vue";
import { computed } from "vue";
import Logo from "../../components/Logo.vue";
import { useThemeStore } from "@/stores/theme";
import Winter from "./components/Winter.vue";
import Fall from "./components/Fall.vue";
import OtherTheme from "./components/otherTheme.vue";
import useScrollToptop from "@/utils/hooks/useScrolltoTop";
import SwipperComponent from "./components/SwipperComponent.vue";
const themeState = useThemeStore();
useScrollToptop();

const height = computed(() => {
  return window.innerHeight - 1 + "px";
});
</script>
