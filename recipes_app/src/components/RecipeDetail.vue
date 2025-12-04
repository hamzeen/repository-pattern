<template>
  <div
    v-if="recipe"
    class="rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col">
    <img :src="image" class="h-64 w-full object-cover" />

    <div class="p-4 flex flex-col gap-2">
      <button @click="$emit('back')" class="text-sm text-blue-500">
        ← Back
      </button>

      <h2 class="text-xl font-bold">{{ recipe.title }}</h2>
      <p class="text-gray-500 text-sm">{{ recipe.description }}</p>

      <h3 class="font-semibold mt-2">Ingredients</h3>
      <ul class="list-disc ml-5 text-sm">
        <li v-for="i in recipe.ingredients" :key="i">{{ i }}</li>
      </ul>

      <h3 class="font-semibold mt-2">Steps</h3>
      <ol class="list-decimal ml-5 text-sm">
        <li v-for="s in recipe.steps" :key="s">{{ s }}</li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { getRecipeImageUrl } from "../services/recipeImages";

const props = defineProps({
  recipe: Object,
});

const image = getRecipeImageUrl(props.recipe, 800, 600);
defineEmits(["back"]);
</script>
