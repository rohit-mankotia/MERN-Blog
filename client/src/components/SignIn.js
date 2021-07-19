import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const SignIn = () => {

    const history = useHistory()
    const [data, setData] = useState({ email: '', password: '' })

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData({ ...data, [name]: value })
    }

    const PostData = async () => {
        try {
            const fetchData = await axios.post('http://localhost:4000/api/admin/signin', data)
            console.log('data', fetchData)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container my-4">
            <div className="text-center">
                <main className="form-signin">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Sign In</h1>
                        <div className="form-floating my-2">
                            <input name="email" value={data.email} onChange={handleInput} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating my-2">
                            <input name="password" value={data.password} onChange={handleInput} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button onClick={PostData} className="w-100 btn btn-lg btn-primary" type="submit">Signin</button>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default SignIn
