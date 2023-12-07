<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import useTheme from "./utils/hooks/useTheme";
useTheme();
</script>

<template>
  <RouterView />
</template>
