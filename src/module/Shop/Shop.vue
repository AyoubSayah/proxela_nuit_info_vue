<template>
  <div
    class="m-auto flex w-full justify-around overflow-auto border-b border-solid border-gray-300 pb-8 pt-16"
  >
    <CardType
      v-for="item in Cards"
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
    <div v-for="item in shopItemsList">
      <ShopItemCard
        :img="item.img"
        :name="item.name"
        :price="item.price"
        :colors="item.colors"
        :key="item.id"
      />
    </div>
  </transition-list-scale>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import CardType from "./components/CardType.vue";
import { CardsTypesMen, CardsTypesWomen, shopItems } from "./mock/mock";
import ShopItemCard from "./components/ShopItemCard.vue";
import { useRoute } from "vue-router";
import TransitionListScale from "../../components/animations/TransitionListScale.vue";
import useScrollToptop from "@/utils/hooks/useScrolltoTop";
import PopupModal from "./components/PopupModal.vue";
const route = useRoute();
useScrollToptop();
const Cards = ref(
  route.params.gender === "men" ? CardsTypesMen : CardsTypesWomen
);
const type = ref("");
const shopItemsList = ref(shopItems);

watch(type, (newType) => {
  if (newType !== "") {
    shopItemsList.value = shopItems.filter(
      (item) => item.type?.toLocaleLowerCase() === newType.toLocaleLowerCase()
    );
  } else {
    shopItemsList.value = shopItems;
  }
});
watch(
  () => route.params.gender,
  (newGender) => {
    shopItemsList.value = shopItems;
    type.value = "";
    if (newGender === "men") {
      Cards.value = CardsTypesMen;
    } else Cards.value = CardsTypesWomen;
  }
);
const changeType = (value: string) => {
  if (type.value === value) {
    type.value = "";
    return;
  }
  type.value = value;
};
</script>
