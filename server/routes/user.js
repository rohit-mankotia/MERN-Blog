const express = require('express')
const router = express.Router()
const Blog = require('../controller/index')

router.get('/allBlogs', Blog.User.allBlogs)
router.get('/searchByCategory/:category', Blog.User.searchByCategory)

module.exports = router

