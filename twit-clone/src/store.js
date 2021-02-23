const initialState = {
  posts: [],
  loading: false,
  authenticated: false,
};

const reducer = (state = initialState, action) => {
  // action is the object being passed to dispatch function
  // in the functional component

  // we return a new complete state object so that the
  // useselectors can get the updated state value it is listening for
  // so that we can have an updated state in the reducer
  // and so that we dont alter any of the other states not involved

  // remember to do a copy of the ref object your are editing
  // if you are editing an array, make a copy of the array or return a copy
  // if you are editing an object make a copy of the obj
  // if you are editing an obj in an array, copy obj, edit, copy array, insert obj into array

  switch (action.type) {
    case "init_posts":
      let setOfPosts = [...action.posts.data];
      return {
        ...state,
        posts: setOfPosts,
        loading: false,
      };

    case "add_post":
      let newPosts = [...state.posts, action.postToAdd];
      return {
        ...state,
        posts: newPosts,
        loading: false,
      };

    case "set_loader":
      return {
        ...state,
        loading: action.loadValue,
      };

    case "update_post":
      let updatedPosts = state.posts.map((post) => {
        if (post.id == action.updatedPost.id) {
          return action.updatedPost;
        } else {
          return post;
        }
      });
      return {
        ...state,
        posts: updatedPosts,
        loading: false,
      };

    case "delete_post":
      let remainingPosts = state.posts.filter(
        (post) => post.id != action.postToDeleteId
      );
      return {
        ...state,
        posts: remainingPosts,
        loading: false,
      };

    case "clear_localPosts":
      return {
        ...state,
        posts: [],
        loading: true,
      };

    default:
      return state;
  }
};

export default reducer;
