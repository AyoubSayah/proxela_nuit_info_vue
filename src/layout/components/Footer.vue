<template>
  <svg
    class="bg-theme-gray fill-theme-secondary"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill-opacity="1"
      d="M0,96L120,117.3C240,139,480,181,720,186.7C960,192,1200,160,1320,144L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
    ></path>
  </svg>
  <footer
    class="mt-auto mt--24 flex h-max w-full max-w-[1900px] flex-wrap items-center justify-center bg-theme-secondary p-8 px-8 pb-20 pt-16 md:items-baseline md:justify-around md:pt-0"
  >
    <div class="start max-w-full basis-1/3">
      <Logo />
      <p class="basis-1/3 text-left text-theme-primary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        consectetur inventore unde rem consequuntur ab modi, perspiciatis iusto
        dolorum aut. Reiciendis inventore placeat libero culpa quasi eius iste
        corrupti asperiores.
      </p>
    </div>
    <div class="middle text-theme-primary parent:my-4">
      <p class="title mb-4 text-2xl font-semibold uppercase">Contact</p>
      <p>Tunisia</p>
      <p>sayahayoub9827@gmail.com</p>
      <p>https://github.com/AyoubSayah</p>
    </div>
    <div class="end text-theme-primary">
      <p class="title mb-4 text-2xl font-semibold uppercase">Social</p>
      <a href="#" class="my-2 flex items-center text-theme-primary">
        <svg class="icon icon-facebook m-5 mx-1 h-6 w-6 fill-theme-primary">
          <use xlink:href="/icons.svg#icon-facebook"></use>
        </svg>
        <span>Facebook</span>
      </a>
      <a href="#" class="my-2 flex items-center text-theme-primary">
        <svg class="icon icon-twitter mx-1 h-5 w-5 fill-theme-primary">
          <use xlink:href="/icons.svg#icon-twitter"></use></svg
        >Twitter</a
      >
    </div>
  </footer>
</template>

<script setup lang="ts">
import Logo from "../../components/Logo.vue";
</script>
