<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <RecipeCard
      v-for="r in recipes"
      :key="r.id"
      :recipe="r"
    />
  </div>
</template>

<script setup lang="ts">
import RecipeCard from "./RecipeCard.vue";

defineProps<{
  recipes: any[];
}>();
</script>
