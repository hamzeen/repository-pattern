import axios from "axios";

export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
}

const API_BASE = "http://localhost:3000";

export async function fetchRecipes(): Promise<Recipe[]> {
    const { data } = await axios.get(`${API_BASE}/recipes`);
    return data;
  }
  
  export async function fetchRecipe(id: number): Promise<Recipe> {
    const { data } = await axios.get(`${API_BASE}/recipes/${id}`);
    return data;
  }
  