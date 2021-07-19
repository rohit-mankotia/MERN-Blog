const express = require('express')
const router = express.Router()
const Controller = require('../controller/index')
const auth = require('../auth/auth')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.post('/signup', Controller.Admin.signup)
router.post('/signin', Controller.Admin.signin)
router.post('/createBlog', auth, upload.single('picture'), Controller.Admin.createBlog)
router.get('/allBlogs', auth, Controller.Admin.allBlogs)
router.get('/searchByCategory/:category', auth, Controller.Admin.searchByCategory)
router.post('/editBlog/:id', auth, upload.single('picture'), Controller.Admin.editBlog)

module.exports = router