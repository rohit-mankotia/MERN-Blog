import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SignUp = () => {
  const history = useHistory()
  const [data, setData] = useState({ firstName: '', lastName: '', email: '', password: '' })

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({ ...data, [name]: value })
  }

  const PostData = async () => {
    try {
      // if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email)) {
      //  return alert('Enter valid email')
      // }
      const fetchData = await axios.post('http://localhost:4000/api/admin/signup', data)
      console.log(fetchData.data)
      if (fetchData.data.success === true) {
        history.push('/signin')
        alert('Signup Success')
      }
      else {
        alert('Something went wrong')
      }
    }
    catch (err) {
      console.log('Error', err)
    }
  }

  return (
    <div className="container my-4">
      <div className="text-center">
        <main className="form-signin">
          <form>
            <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
            <div className="form-floating my-2">
              <input name="firstName" value={data.firstName} onChange={handleInput} type="text" className="form-control" placeholder="first name" />
              <label htmlFor="floatingInput">First Name</label>
            </div>
            <div className="form-floating my-2">
              <input name="lastName" value={data.lastName} onChange={handleInput} type="text" className="form-control" placeholder="last name" />
              <label htmlFor="floatingInput">Last Name</label>
            </div>
            <div className="form-floating my-2">
              <input name="email" value={data.email} onChange={handleInput} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating my-2">
              <input name="password" value={data.password} onChange={handleInput} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button onClick={PostData} className="w-100 btn btn-lg btn-primary" type="submit">Signup</button>
          </form>
        </main>
      </div>
    </div>
  )
}

export default SignUp
