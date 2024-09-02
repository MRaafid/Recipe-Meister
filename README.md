# AddRecipe Component

## Description
The `AddRecipe` component provides a user interface for adding new recipes. It includes form fields for entering various recipe details, such as title, description, keywords, ingredients, and instructions. It also includes buttons for saving the recipe or exiting the form.

## Props
- **onExit** (function): A callback function triggered when the "Exit" button is clicked. Used to navigate away from the AddRecipe view.
- **onAdd** (function): A callback function triggered when the "Save" button is clicked. Handles the submission of the new recipe data.

## State Management
The component uses the `useReducer` hook to manage its local state, which includes:

- **title** (string): The title of the recipe.
- **description** (string): A brief description of the recipe.
- **keywords** (array): An array of keywords related to the recipe.
- **instructions** (string): The cooking instructions for the recipe.
- **ingredients** (array): An array of ingredients used in the recipe.
- **dishType** (string): The type of dish (e.g., Vegetarian, Vegan, Meat, Poultry, Seafood).
- **recipeImg** (string): The URL of the recipe image.

## Validation
The `onSaveHandler` function validates the form fields to ensure that no required fields are empty and that arrays are not empty. If validation passes, it triggers the `onAdd` function with the recipe data, including a unique ID generated using `uuidv4`.

## Usage Example
```jsx
<AddRecipe
  onExit={() => console.log('Exiting AddRecipe')}
  onAdd={(recipe) => console.log('New recipe added:', recipe)}
/>
