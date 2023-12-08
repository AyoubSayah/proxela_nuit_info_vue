<template>
  <div class="fixed bottom-0 left-0 z-40 block h-12 w-full md:hidden">
    <div class="flex h-full w-full justify-center bg-white shadow-lg">
      <link-mobile to="/">
        <icon-base class="h-8 w-full fill-black" icon-name="icon-home2" />
      </link-mobile>
      <link-mobile to="/articles">
        <icon-base class="h-8 w-full fill-black" icon-name="icon-male" />
      </link-mobile>
  
      <link-mobile to="/aboutus">
        <icon-base class="h-8 w-full fill-black" icon-name="icon-cart" />
      </link-mobile>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LinkMobile from "../../components/LinkMobile.vue";
import IconBase from "../../components/base/icon/IconBase.vue";
</script>
<!-- <style src="./navbarmobile.scss" lang="scss" scoped></style> -->
