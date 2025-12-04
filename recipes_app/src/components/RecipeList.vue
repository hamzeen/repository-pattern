<template>
  <div class="flex flex-col h-full">
    <h1 class="text-xl font-bold mb-4">Looking for your favourite meal?</h1>

    <div class="grid grid-cols-2 gap-4 overflow-y-auto pr-1">
      <RecipeCard
        v-for="r in recipes"
        :key="r.id"
        :recipe="r"
        @select="id => $emit('select', id)"
      />
    </div>
  </div>
</template>

<script setup>
import RecipeCard from "./RecipeCard.vue";

defineProps({
  recipes: Array
});

defineEmits(["select"]);
</script>
