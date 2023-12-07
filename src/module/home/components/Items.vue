<template>
  <section>
    <div class="m-auto max-w-[1900px]">
      <svg
        class="fill-theme-gray"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill-opacity="1"
          d="M0,96L120,117.3C240,139,480,181,720,186.7C960,192,1200,160,1320,144L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div>

    <div
      class="main relative mx-auto mt--8 max-w-[1900px] bg-theme-gray py-4 px-12"
    >
      <SectionTitle
        title="SERVICES WE ARE OFFERING"
        animation
        id="section-items"
      />

      <div
        class="display-flex invisible flex w-full flex-wrap items-center justify-center"
        id="items"
        :class="{ '!visible animate-[animationUp_1.5s]': isscrolledinto }"
      >
        <Card v-for="item in items" :title="item.title" :icon="item.icon" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { reactive, type Ref } from "vue";

import useIsScrolled from "@/utils/hooks/useIsScrolled";
import SectionTitle from "../../../components/SectionTitle.vue";
import Card from "../../../components/Card.vue";
import { useThemeStore } from "@/stores/theme";
let isscrolledinto: Ref<boolean | undefined> = useIsScrolled("items");
const { theme } = useThemeStore();

const items = reactive([
  {
    title: "Live Support",
    icon: "icon-question",
  },
  {
    title: "Daily Rewards",
    icon: "icon-prix",
  },
  {
    title: "Secure Payments",
    icon: "icon-locked",
  },
]);
</script>
