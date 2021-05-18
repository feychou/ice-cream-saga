## Moods in StateContext

The goal of the assignment is to move Moods out of the App local state to the StateContextProvider state, which will make it available throughtout the entire application.

## Steps

### Setting up the context value

1. Move the `useState` call for `moods` from `App.js` to `stateContext.js` the same way it's done for `colors`. Dont't forget to add them to the `value` object, too.
2. Also the `moodsDefault` needs to be taken out of `App.js` and moved to `stateContext.js`, where we also define our initial states.
3. Now that you do not need `useState` in `App.js` anymore, you can also remove it from the import list from `react`.
4. You can access the moods by destructuring values injected with the context, this way:
   `const {moods, setMoods} = useContext(StateContext);`

### Making use of the context value

Now that your moods are available application-wide, you can refactor even further.
1 (optional) Create `MoodList` and `Mood` modelling them on `ColorList` and `Color`.

2. With `useContext`, make `moods` and `setMoods` ready to be used in the components that require them.
3. Move the `selectMood` function from `App.js` to the component that makes immediate use of it.
4. Your `Moods` (or `MoodList`) do not need props anymore, so delete them when you add the component inside your `App` wrapper.

It's normal to see a lot of errors in console, whenever you are stuck make sure to read them carefully. Figure out which file they belong too, which lines are affected etc. A lot of the times it's just typos or missing/miss-declared imports :D
