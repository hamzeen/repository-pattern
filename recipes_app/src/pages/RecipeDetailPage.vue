<template>
  <div v-if="recipe" class="max-w-5xl mx-auto p-6">
    <!-- Hero image -->
    <img
      :src="imageUrl"
      :alt="recipe.title"
      class="w-full rounded-3xl mb-6 h-96 object-cover"
    />

    <router-link to="/" class="text-blue-500">&larr; Back</router-link>

<!-- Centered Title + Description + Tag -->
<div class="text-center mt-6 mb-10">

  <!-- Title -->
  <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-[#335B63]">
    {{ recipe.title }}
  </h1>

  <!-- Description -->
  <p class="mt-3 text-lg text-[#335B63]/80">
    {{ recipe.description }}
  </p>

  <!-- Optional Tag (e.g. Vegetarian) -->
  <div
    v-if="recipe.tag"
    class="inline-block mt-6 px-6 py-2 rounded-2xl bg-[#E9EEF0] text-[#335B63] font-semibold tracking-wide text-sm"
  >
    {{ recipe.tag }}
  </div>
</div>


<!-- Info Row -->
<div class="mt-8">
  <div class="flex justify-between items-center border-y border-gray-200 py-6">

    <!-- TIME -->
    <div class="flex-1 flex flex-col items-center">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
           stroke="#61C3AD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
      <div class="mt-3 text-[14px] tracking-wide font-bold text-[#2E5252]">
        25 MINS
      </div>
    </div>

    <!-- DIVIDER -->
    <div class="w-px h-12 bg-gray-200"></div>

    <!-- DIFFICULTY -->
    <div class="flex-1 flex flex-col items-center">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
           stroke="#61C3AD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="12" width="3" height="8" rx="1" />
        <rect x="10" y="9" width="3" height="11" rx="1" />
        <rect x="16" y="6" width="3" height="14" rx="1" />
      </svg>
      <div class="mt-3 text-[14px] tracking-wide font-bold text-[#2E5252]">
        NOT TOO TRICKY
      </div>
    </div>

    <!-- DIVIDER -->
    <div class="w-px h-12 bg-gray-200"></div>

    <!-- SERVES -->
    <div class="flex-1 flex flex-col items-center">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
           stroke="#61C3AD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 12a5 5 0 1 0 -5 -5 5 5 0 0 0 5 5z" />
        <path d="M17 21v-2a4 4 0 0 0 -4 -4H11a4 4 0 0 0 -4 4v2" />
      </svg>
      <div class="mt-3 text-[14px] tracking-wide font-bold text-[#2E5252]">
        SERVES 2
      </div>
    </div>

  </div>
</div>

<!-- Ingredients Section -->
<div class="mt-10">

  <h2 class="text-4xl font-bold mb-4 text-[#335B63]">Ingredients</h2>

  <div class="bg-white rounded-3xl p-6 shadow-sm">

    <div
      v-for="(item, idx) in recipe.ingredients"
      :key="item"
      class="py-4 text-lg text-[#335B63]"
      :class="{ 'border-b border-gray-200': idx !== recipe.ingredients.length - 1 }"
    >
      {{ item }}
    </div>

  </div>

</div>


    <h2 class="text-4xl font-bold mt-10 mb-4 text-[#335B63]">Steps</h2>

    <ol class="list-decimal pl-6 text-lg space-y-2">
      <li v-for="step in recipe.steps" :key="step">
        {{ step }}
      </li>
    </ol>
  </div>

  <div v-else class="max-w-5xl mx-auto p-6">
    <p class="text-gray-500">Loading recipe…</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { fetchRecipe, type Recipe } from "../services/recipesApi";
import { getRecipeImageUrl } from "../services/recipeImages";

const route = useRoute();

const recipe = ref<Recipe | null>(null);

onMounted(async () => {
  const id = Number(route.params.id);
  if (!Number.isNaN(id)) {
    recipe.value = await fetchRecipe(id);
  }
});

const imageUrl = computed(() =>
  recipe.value ? getRecipeImageUrl(recipe.value, 1000, 600) : ""
);
</script>
