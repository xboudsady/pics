# Pics

## Demo Site → [Pics](http://xboudsady-react-pics.s3-website-us-west-1.amazonaws.com)

The basic app component will consist of 3 components. The `<App />` component will be our parent component, followed by the `<SearchBar />` and `<ImageList />`.

The `<SearchBar>` component will handle users input.

The `<ImageList />` component will render html image element based on the request made, and will source the image to an outside server via API requests.


## App Challenges
* Need to get a search term from the user
* Need to use that search term to make a request to an outside API and fetch data
* Need to take the fetched images and show them on the screen in a list

## Stuff to Figure Out
* How do we get feedback from the user?
* How do we fetch data from some outside API or server?
* How do we show lists of records?

## Technology
* JS Framework - [React](https://reactjs.org/)
* CSS Framework - [Semantic UI](https://semantic-ui.com/)
* Stock Photos - [Unsplash API](https://unsplash.com/developers)
* AJAX Client - [Axios](https://github.com/axios/axios)
* Hosted - [Amazon Web Services](https://https://aws.amazon.com/)

## App Screen Shot

![App Screenshot](https://github.com/xboudsady/pics/blob/master/assets/pics-screenshot.png)