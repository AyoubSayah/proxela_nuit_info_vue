<template>
  <div :class="background + ' w-full pt-32'">
    <SectionTitle
      :title="title"
      class="block"
      :class="{ '!visible animate-[animationUp_1.5s]': isscrolledinto }"
    />

    <swiper
      :slides-per-view="4"
      :space-between="5"
      class="m-auto !py-16"
      :breakpoints="{
        300: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 1,
        },
        780: {
          slidesPerView: 2,
          spaceBetween: 30,
        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1240: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }"
      :pagination="pagination"
      :class="{ '!visible animate-[animationUp_1.5s]': isscrolledinto }"
      :modules="[Pagination]"
      :id="titleId"
    >
      <swiper-slide v-for="item in shopItemsList">
        <ShopItemCard
          class="!m-auto"
          :img="item.img"
          :name="item.name"
          :price="item.price"
          :colors="item.colors"
          :key="item.id"
      /></swiper-slide>
    </swiper>
  </div>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

import { shopItems } from "@/module/Shop/mock/mock";
import { ref, type Ref } from "vue";
import { Pagination } from "swiper";

import ShopItemCard from "../../Shop/components/ShopItemCard.vue";
import SectionTitle from "../../../components/SectionTitle.vue";
import useIsScrolled from "@/utils/hooks/useIsScrolled";
const shopItemsList = ref(shopItems);
const pagination = ref({
  clickable: true,
  bulletActiveClass: "!bg-theme-secondary-60 !opacity-100",
  totalClass: "!bg-red-400",
  horizontalClass: "-top-0 h-16 !w-max !right-12 !left-[unset]",
 
});
const { title } = defineProps<{ title: string; background: string }>();
const titleId = ref(title.replace(" ", ""));
let isscrolledinto: Ref<boolean | undefined> = useIsScrolled(titleId.value);
</script>
