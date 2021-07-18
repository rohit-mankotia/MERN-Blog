import React, { useState } from 'react'
import axios from 'axios'

const CreateBlog = () => {

    const [blog, setBlog] = useState({ title: '', description: '', author: '', link: '', category: '' })
    const [picture, setPicture] = useState()



    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setBlog({ ...blog, [name]: value })
    }


    const PostData = async () => {
        try {

            const { title, description, author, link, category } = blog
            const data = new FormData()
            data.append('title', title)
            data.append('description', description)
            data.append('author', author)
            data.append('link', link)
            data.append('category', category)
            data.append('picture', picture)

            const blogData = await axios.post('http://localhost:4000/api/admin/createblog', data)
            console.log(blogData)

        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <h1 className="my-4">Create Blog</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input name='title' value={blog.name} onChange={handleInput} type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea name='description' value={blog.description} onChange={handleInput} className="form-control" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Author</label>
                <input type="text" name='author' value={blog.author} onChange={handleInput} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Link</label>
                <input type="text" name='link' value={blog.link} onChange={handleInput} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Category</label>
                <select name='category' value={blog.category} onChange={handleInput} className="form-select" aria-label="Default select example">
                    <option defaultValue>Select Category</option>
                    <option value="india">India</option>
                    <option value="world">World</option>
                    <option value="business">Business</option>
                    <option value="sports">Sports</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Picture</label>
                <input className="form-control" type="file" id="formFile" onChange={(e) => setPicture(e.target.files[0])} />
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit" onClick={PostData}>Submit</button>
            </div>
        </div>
    )
}

export default CreateBlog
