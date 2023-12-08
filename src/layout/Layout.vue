<template>
  <div class="flex min-h-screen flex-col">
    <Navbar :sticky="sticky" />
    <loader v-if="state.themeLoading" />
    <main>
      <RouterView />
    </main>
    <Search />
    <SettingTheme />
    <Footer />
    <NavbarMobile />

    <popup-modal />
  </div>
</template>

<script lang="ts" setup>
import Navbar from "@/layout/components/Navbar.vue";
import NavbarMobile from "@/layout/components/NavbarMobile.vue";
import Footer from "@/layout/components/Footer.vue";
import SettingTheme from "./components/SettingTheme.vue";
import useIsStickyNavbar from "@/utils/hooks/useIsStickyNavbar";
import Loader from "../components/Loader/Loader.vue";
import { useThemeStore } from "@/stores/theme";
import Search from "./components/Search.vue";
import PopupModal from "../module/articles/components/PopupModal.vue";
const sticky = useIsStickyNavbar();
const state = useThemeStore();

setTimeout(() => {
  state.themeLoading = false;
}, 3200);
</script>
