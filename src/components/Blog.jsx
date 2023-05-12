/* eslint-disable react/no-unescaped-entities */
const Blog = () => {
  return (
    <div className="px-2 lg:px-32">
      <div className="bg-base-100 my-5 p-3 rounded-md">
        <h1 className="text-xl font-semibold mb-2">
          When should you use the context API?
        </h1>
        <p>
          The React Context API is best used when you need to share state
          between many components with a lot of nesting, as it allows for the
          creation of global variables that can be passed around easily,
          replacing the "prop drilling" approach. However, it is recommended to
          use it sparingly and only when necessary, as it can lead to
          unnecessary re-renders and difficulty in tracking data flow. It is
          also important to carefully evaluate whether to use React's Context
          API for global state or not, and consider other tools like component
          composition as well.
        </p>
      </div>
      <div className="bg-base-100 my-5 p-3 rounded-md">
        <h1 className="text-xl font-semibold mb-2">
          What is custom hooks in react.js?
        </h1>
        <p>
          Custom Hooks in React.js are reusable functions that extract component
          logic into reusable functions. Hooks are a new addition to React 16.8
          that allow users to use state and other features without writing a
          class. Custom Hooks offer the flexibility of sharing logic that was
          not possible in React components before. Each call to a Hook is
          completely independent from every other call to the same Hook, but all
          state and effects inside the custom hook are isolated. It is important
          to name custom hooks starting with "use" conventionally to help
          identify them. Custom Hooks can be used to remove duplicated logic in
          components and cover a wide range of use cases.
        </p>
      </div>
      <div className="bg-base-100 my-5 p-3 rounded-md">
        <h1 className="text-xl font-semibold mb-2">
          What is useRef in react what does it work?
        </h1>
        <p>
          React's useRef() hook is a function that creates a mutable reference
          or ref, which can be used to access DOM elements. When called,
          useRef() returns an object with a .current property that can be
          initialized with an initial value. This ref can be used to persist a
          value between renders, similar to instance variables in class
          components. Additionally, the useRef() hook can be used to store
          mutable values that are not part of the component's state, such as
          timers or other data that needs to persist between renders.
        </p>
      </div>
      <div className="bg-base-100 my-5 p-3 rounded-md">
        <h1 className="text-xl font-semibold mb-2">
          What is useMemo in react what does it work?
        </h1>
        <p>
          The useMemo() hook in React is a built-in function that memoizes the
          result of a passed-in function and its dependencies, and returns the
          memoized value during the rendering process. This memoization
          technique can be used to optimize the performance of expensive
          calculations in React components. When the dependencies of the
          function change, the function is invoked again to calculate the new
          value. useMemo() is especially useful when dealing with
          resource-intensive functions that need to be recalculated often.
          However, it's important to evaluate whether memoization is actually
          improving performance in specific cases.
        </p>
      </div>
    </div>
  );
};

export default Blog;
