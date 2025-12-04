import type { Recipe } from "./recipesApi";

const fallbackImages: Record<string, string> = {
  "Spaghetti Carbonara":
    "https://images.unsplash.com/photo-1579631542720-3a87824fff86?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Avocado Toast":
    "https://images.unsplash.com/photo-1612783191467-e7cd68b2ea1b?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Chicken Curry":
    "https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Tiramisu:
    "https://plus.unsplash.com/premium_photo-1695028377519-70fb0c385db2?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export function getRecipeImageUrl(recipe: Recipe, w = 800, h = 600) {
  const base = fallbackImages[recipe.title];
  if (!base) {
    // fallback placeholder
    return `https://placehold.co/${w}x${h}?text=Food`;
  }

  // Resize Pexels URL
  return `${base}?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;
}
