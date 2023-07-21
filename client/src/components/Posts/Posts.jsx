import React from "react";

import {Grid, CircularProgress, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
// import {setCurrentId} from "../../features/posts/postsSlice";
import Post from "./Post/Post"
import useStyles from "./styles"

const Posts = (setCurrentId) => {
    const {posts, isLoading} = useSelector((state) => state.posts)
    const classes = useStyles()

    if (!posts.length && !isLoading) {
        return (
            <Typography align="center" variant="h4" component="h2">No Posts</Typography>
        )
    }
    return (
        isLoading ? <CircularProgress /> : ( // posts?.length : post가 없어도 에러 내지 않도록
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts?.map((post) => (
              <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
    )
    );

    // if (isLoading) {
    //     return (
    //         <div align="center">
    //             <CircularProgress size="4em"/>
    //         </div>
    //     )
    // }

    // return (
    //     <Grid className={classes.container} container alignItems="stretch" spacing={3}>
    //         {posts.map((post) => (
    //             <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
    //                 <Post post={post}/>
    //             </Grid>
    //         ))}
    //     </Grid>
    // )
}

export default Posts;