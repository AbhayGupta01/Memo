import express from 'express';
import {getPost, getPosts, getPostsBySearch, getCountOfPages, createPost, updatePost, deletePost, likePost, commentPost} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router()

router.get('/', getPosts)
router.get('/search', getPostsBySearch)
router.get('/pagesCount', getCountOfPages)
router.get('/:id', getPost)

router.patch('/:id', auth, updatePost)
router.patch('/:id/like', auth, likePost)
router.post('/', auth, createPost)
router.post('/:id/comment', auth, commentPost)
router.delete('/:id', auth, deletePost)

export default router