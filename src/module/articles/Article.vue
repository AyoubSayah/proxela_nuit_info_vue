<template>
  <div
    class="m-auto flex w-full justify-around overflow-auto border-b border-solid border-gray-300 pb-8 pt-16"
  >
    <CardType
      v-for="item in CardsTypes"
      :img="item.img"
      :name="item.name"
      @click="
        () => {
          changeType(item.name);
        }
      "
      :type="type"
    />
  </div>
  <transition-list-scale
    class="sx:grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] content grid min-h-[500px] grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] justify-items-center overflow-x-hidden pt-8 md:grid-cols-[repeat(auto-fit,_minmax(18rem,_20rem))] md:px-4"
  >
    <div v-for="item in articleItemsList">
      <ArticleItemCard
        :img="item.img"
        :name="item.name"
         :description="item.description"
        :key="item.id"
      />
    </div>
  </transition-list-scale>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import CardType from "./components/CardType.vue";
import { CardsTypes, articleItems } from "./mock/mock";
import ArticleItemCard from "./components/ArticleItemCard.vue";
import { useRoute } from "vue-router";
import TransitionListScale from "../../components/animations/TransitionListScale.vue";
import useScrollToptop from "@/utils/hooks/useScrolltoTop";
import PopupModal from "./components/PopupModal.vue";
const route = useRoute();
useScrollToptop();

const type = ref("");
const articleItemsList = ref(articleItems);

watch(type, (newType) => {
  if (newType !== "") {
    articleItemsList.value = articleItems.filter(
      (item) => item.type?.toLocaleLowerCase() === newType.toLocaleLowerCase()
    );
  } else {
    articleItemsList.value = articleItems;
  }
});

const changeType = (value: string) => {
  if (type.value === value) {
    type.value = "";
    return;
  }
  type.value = value;
};
</script>
