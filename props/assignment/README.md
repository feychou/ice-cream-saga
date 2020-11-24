## Challenge 1

In this step you'll do a bit of refactoring. As you can see, the `App.js` file also holds the `IceCreamWrapper` component. However, for better code organisation, we want to move the `IceCreamWrapper` component in its own subdirectory inside the `component` directory.

### Steps

1. Inside the `components` directory, create a subdirectory for the `IceCreamWrapper` component similar to the ones for the `Colors` component.
2. Dont forget to create its own styles file along with the component file!
   Move all the style related to the `IceCreamWrapper` component from the `App` component to the newly created folder.
3. Now that you are able to display the ice cream correctly again, pass down the `color` as a prop to restore its functionality.

## Challenge 2

In this step you'll make it possible for your ice cream to have a wider range of expressions! The emojis to pick the moods are already displayed below the color menu, but the selection does not work yet.

### Steps

1. Move `moodTypes` into its own `moodsDefault` and turn it into a similar data structure to `colorsDefault` (an array of objects with an `id` and a `isSelected` flag).
2. By using `useState` as you did for colors, create `moods` and `setMoods`.
3. Create an action to handle the mood `isSelected` property correctly.
4. Pass down the props for `items` and `action` to the Mood component like in the `Color` component.
5. Have the ice cream expression reflect your mood selection passing it down as a prop like with the color. Remember to add a tick next to the selected menu item just like for the color tiles.
