# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Context API helps solve the problem of managing state in order to help prevent prop drilling. However, it is designed to be more efficient with smaller, less complex applications, whereas Redux is preferred for larger, more complex applications. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is where the current state of the application lives which is why it is referred to as the "single source of truth" within the app. An action tracks an event from user input that would cause a change in the current state. A reducer function receives the current state and an action object, decides how to update the state, then returns the new state. 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows us to call action-creators which will return a function instead of a typical action object. We can pass the store's dispatch method within that function allowing us to nest things like axios calls within our action-creators functions. 

4. What is your favorite state management system you've learned and this sprint? Please explain why!

I suppose it's Redux since I have slightly more experience with it at this point, compared to context API which I just learned yesterday. Context API seems easier and less complex compared to Redux but I cna see how Redux is more useful within larger, more complex applications. 