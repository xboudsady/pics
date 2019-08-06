# Pics

The basic app component will consist of 3 components. The `<App />` component will be our parent component, followed by the `<SearchBar />` and `<ImageList />`.

The `<SearchBar>` component will handle users input.

The `<ImageList />` component will render html image element based on the request made, and will source the image to an outside server via API requests.


## App Challenges
* Need to get a search term from the user
* Need to use that search term to make a request to an outside API and fetch data
* Need to take the fetched images and show them on the screen in a list

## Stuff to Figure Out
* How do we get feedback from the user?
  1. User types in input
  2. Callback gets invoked
  3. We call `setState()` with the new value
  4. Component rerenders
  5. Input is told what its value is (coming from state)
* How do we fetch data from some outside API or server?
* How do we show lists of records?

## Technology
* Web Framework - [React](https://reactjs.org/)
* CSS Framework - [Semantic UI](https://semantic-ui.com/)