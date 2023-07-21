import React from 'react';
import { Grid, CircularProgress} from '@material-ui/core';

import Post from './Post/Post';
import useStyles from './styles';

// fetch the data in global redux store
import  {useSelector} from 'react-redux';
const Posts = ({setCurrentId}) =>{
  //how do we know to write posts? in the
  //index.js in reducers we named it posts
  //fetching data from redux
  ////from combineReducers
  const { posts, isLoading } = useSelector((state)=>state.posts); // { posts: [] }
  const classes = useStyles();
// console.log(setCurrentId);
// console.log(posts.length);
// console.log(isLoading);
console.log('posts refreshed from posts component');

if(posts?.length === 0 && !isLoading) return 'No Posts';
  return isLoading ?(
//ternerary operator
//0is a falsy value
//The parenthesis in a function means we are returning a single value,
//the curly braces in a function means we are executing multiple lines of code.
//if we dont find the array show circle
 <CircularProgress/>
 ) : (
  <Grid className={classes.container} container spacing={3} >
  {
    posts?.map((post) => (
      <Grid key={post._id} item xs={12} sm={12} md={6} lg={3} >
      <Post post={post} setCurrentId={setCurrentId}/>
      </Grid>
    ))
  }
  </Grid>
  );
}

export default Posts;



// import React from "react";

// import {Grid, CircularProgress, Typography} from "@material-ui/core";
// import {useSelector} from "react-redux";

// import Post from "./Post/Post"
// import useStyles from "./styles"

// const Posts = () => {
//     const {posts, isLoading} = useSelector((state) => state.posts)
//     const classes = useStyles()

//     if (!posts.length && !isLoading) {
//         return (
//             <Typography align="center" variant="h4" component="h2">No Posts</Typography>
//         )
//     }

//     if (isLoading) {
//         return (
//             <div align="center">
//                 <CircularProgress size="4em"/>
//             </div>
//         )
//     }

//     return (
//         <Grid className={classes.container} container alignItems="stretch" spacing={3}>
//             {posts.map((post) => (
//                 <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
//                     <Post post={post}/>
//                 </Grid>
//             ))}
//         </Grid>
//     )
// }

// export default Posts;