<template>
  <router-link :to="'/recipes/' + recipe.id" class="group block w-full">
    <!-- CARD WRAPPER (hover lift) -->
    <article
      class="transition-transform duration-200 ease-out
             group-hover:-translate-y-2"
    >
      <!-- IMAGE WRAPPER -->
      <div class="relative rounded-3xl overflow-hidden">
        <!-- IMAGE (zooms behind overlays) -->
        <img
          :src="imageUrl"
          :alt="recipe.title"
          class="w-full h-[30rem] object-cover
                 transition-transform duration-300 ease-out
                 group-hover:scale-105
                 relative z-0"
        />

        <!-- BADGE -->
        <div
          class="absolute left-5 top-5 px-6 py-2 rounded-full
                 bg-[#335B63] text-white text-xs font-semibold uppercase
                 tracking-[0.16em] shadow-md
                 z-10"
        >
          Premium Club
        </div>

<!-- HEART (flat icon) -->
<button
  type="button"
  class="absolute right-5 top-5 w-12 h-12 rounded-xl
         bg-white/95 flex items-center justify-center shadow-md z-10"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="#938193"
    class="w-6 h-6"
  >
    <path d="M12 21s-6.7-4.7-9.6-8.6C-1 7.3 2 2 6.5 2c2.1 0 3.8 1.2 5.5 3 1.7-1.8 3.4-3 5.5-3C22 2 25 7.3 21.6 12.4 18.7 16.3 12 21 12 21z"/>
  </svg>
</button>
      </div>

      <!-- TEXT OUTSIDE IMAGE -->
      <div class="mt-6">
        <h3
          class="text-2xl font-extrabold tracking-wide text-[#335B63] leading-tight"
        >
          {{ recipe.title }}
        </h3>

        <!-- TIME -->
        <div class="mt-3 flex items-center gap-2 text-[#335B63]/80 text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-[#61C3AD]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span>25 mins</span>
        </div>
      </div>
    </article>
  </router-link>
</template>

<script setup lang="ts">
import { getRecipeImageUrl } from "../services/recipeImages";

const props = defineProps<{
  recipe: any;
}>();

const imageUrl = getRecipeImageUrl(props.recipe, 600, 500);
</script>
