<template>
  <Teleport to="#drawer">
    <div
      class="fixed right-0 top-1/2 z-30 flex h-full -translate-y-1/2 flex-row-reverse items-center"
      :class="{ 'w-full': showDrawer }"
    >
      <backdrop-base class="z-30" v-if="showDrawer" @click="OpenCloseDrawer" />

      <transition-to-left>
        <div
          v-if="showDrawer"
          class="relative z-40 h-full w-[calc(100%_-_3rem)] max-w-full rounded-l-md bg-white p-4 md:w-[300px]"
        >
          <div class="flex w-full flex-col items-center justify-center gap-3">
            <h2 class="text-center font-semibold">Change Theme</h2>

            <!-- <base-input size="lg" placeholder="test" name="dzadaz" id="dazd" /> -->

            <base-select
              class="w-full capitalize"
              v-model.lazy="selectedTheme"
              :error-object="v$.selectedTheme"
            >
              <option disabled value="">Select theme</option>
              <option v-for="season in themesData" :value="season">
                {{ season }}
              </option>
            </base-select>
            <div class="w-full" v-if="selectedTheme === 'custom'">
              <div class="w-full">
                <label class="text-left text-base" for="primary-color"
                  >Choose your primary color</label
                >
                <base-input
                  id="primary-color"
                  class="w-full"
                  type="color"
                  v-model="customTheme.primaryColor"
                  :error-object="v$.primaryColor"
                />
              </div>
              <div class="w-full">
                <label class="text-left text-base" for="secondary-color"
                  >Choose your secondary color</label
                >
                <base-input
                  id="secondary-color"
                  class="w-full"
                  type="color"
                  v-model="customTheme.secondaryColor"
                  :error-object="v$.secondaryColor"
                />
              </div>
              <div class="w-full">
                <label class="text-left text-base" for="image"
                  >Choose your image</label
                >
                <base-input
                  id="image"
                  class="w-full"
                  type="file"
                  :change="(e: any) => encodeImageFileAsURL(e.target.files[0],'image') "
                />
              </div>
              <div class="w-full">
                <label class="text-left text-base" for="logo"
                  >Choose your Logo</label
                >
                <base-input
                  id="logo"
                  class="w-full"
                  type="file"
                  :change="(e: any) => encodeImageFileAsURL(e.target.files[0],'logo') "
                />
              </div>
              <div class="w-full">
                <label class="text-left text-base" for="animation-item"
                  >Choose your animation item</label
                >
                <base-input
                  id="animation-item"
                  class="w-full"
                  type="file"
                  :change="(e: any) => encodeImageFileAsURL(e.target.files[0],'animationItem') "
                />
              </div>
            </div>
            <base-button
              @click="
                () => {
                  changeThemeFn();
                  OpenCloseDrawer();
                }
              "
              size="lg"
              color="primary"
              :disabled="submitDisabled"
            >
              Confirmer</base-button
            >
          </div>

          <drawer-toggler class="absolute -left-11" @click="OpenCloseDrawer" />
        </div>
      </transition-to-left>

      <drawer-toggler
        :class="[
          { invisible: showDrawer },
          'animate-[bounceLeft_.5s_1s_forwards] opacity-0',
        ]"
        @click="OpenCloseDrawer"
      />
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { themesData } from "../mock/themeData";
import BackdropBase from "../../components/base/backdrop/BackdropBase.vue";
import TransitionToLeft from "../../components/animations/TransitionToLeft.vue";
import DrawerToggler from "./DrawerToggler.vue";
import BaseSelect from "../../components/base/select/BaseSelect.vue";
import BaseButton from "../../components/base/button/BaseButton.vue";
import BaseInput from "../../components/base/input/BaseInput.vue";
import { useSettingForm } from "../hooks/useSettingForm";

const showDrawer = ref(false);
const submitDisabled = ref(false);

const { customTheme, v$, changeThemeFn, selectedTheme } = useSettingForm();

const OpenCloseDrawer = () => (showDrawer.value = !showDrawer.value);

const encodeImageFileAsURL = (
  element: any,
  item: "logo" | "animationItem" | "image"
) => {
  if (element) {
    submitDisabled.value = true;
    const file = element;

    const reader = new FileReader();

    reader.onloadend = function () {
      submitDisabled.value = false;
      customTheme[item] = reader.result as string;
    };

    reader.readAsDataURL(file);
  }
};
</script>
