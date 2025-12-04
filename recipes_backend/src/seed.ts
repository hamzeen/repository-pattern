import { db } from "./database";

export function seed() {
  db.recipes = {
    1: {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "Classic Italian pasta.",
      ingredients: ["Spaghetti", "Eggs", "Pecorino", "Guanciale"],
      steps: ["Boil pasta", "Fry guanciale", "Mix eggs & cheese", "Combine"],
      tag: "VEGAN"
    },
    2: {
      id: 2,
      title: "Avocado Toast",
      description: "Simple and delicious.",
      ingredients: ["Bread", "Avocado", "Lemon", "Salt"],
      steps: ["Toast bread", "Mash avocado", "Spread", "Season"],
      tag: "VEGETARIAN"
    },
    3: {
      id: 3,
      title: "Chicken Curry",
      description: "Basic curry with coconut milk.",
      ingredients: ["Chicken", "Curry paste", "Coconut milk"],
      steps: ["Fry chicken", "Add curry paste", "Add coconut milk", "Simmer"],
      tag: "GLUTEN_FREE"
    },
    4: {
      "id": 4,
      "title": "Tiramisu",
      "description": "No-bake classic Italian tiramisu with coffee-soaked ladyfingers, mascarpone-cream, and cocoa dusting.",
      "ingredients": [
        "1 package (≈ 24) ladyfingers (Savoiardi or similar)",
        "225 g mascarpone cheese (room temperature)",
        "360 ml heavy whipping cream",
        "67 g granulated sugar (≈ 1/3 cup)",
        "1 teaspoon vanilla extract",
        "360 ml cold espresso (or strong brewed coffee)",
        "3 tbsp coffee-flavoured liqueur (optional, e.g. Kahlúa)",
        "Cocoa powder for dusting"
      ],
      "steps": [
        "In a mixing bowl, whip the heavy cream with sugar and vanilla until stiff peaks form, then gently fold in the mascarpone until smooth and creamy.",
        "Combine the cold espresso (and liqueur, if using) in a shallow dish.",
        "Quickly dip each ladyfinger in the coffee mixture — do not soak them — then lay them side by side to form the first layer in an 8×8″ (or similar) dish.",
        "Spread half of the mascarpone-cream mixture over the first layer of ladyfingers.",
        "Add a second layer of dipped ladyfingers on top of the cream.",
        "Spread the remaining mascarpone-cream mixture over the second layer.",
        "Generously dust the top with cocoa powder using a fine-mesh strainer.",
        "Refrigerate for at least 3–4 hours (or overnight) before serving to let flavours meld and dessert set."
      ],
      "tag": "DESSERT"
    }    
  };
}
