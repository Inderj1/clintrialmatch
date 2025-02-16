<script setup>
defineProps({
  align: {
    default: "right",
  },
});
</script>

<template>
  <div :class="['mt-24', 'text-left']">
    <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight text-black">
      <slot name="title">Title</slot>
    </h1>
    <p class="text-lg mt-4 text-slate-600">
      <!-- <slot name="desc">Some description goes here</slot> -->
    </p>
  </div>
</template>
