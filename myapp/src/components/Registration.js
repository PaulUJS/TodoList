import React from 'react'

export default function Registration() {
  /*
  const [emailState, setEmail] = useState()
  const [passState, setPass] = useState()

  const emailRef = useRef()
  const passRef = useRef()

  function createUser(e) {
    let email = emailRef.current.value
    let pass = passRef.current.value

    if (email === '' || pass === '') return
    setEmail(email)
    setPass(pass)
    emailRef.current.value = null
    passRef.current.value = null
  }
  
  useEffect(() => {
    const url = 'http://localhost:3000/register';

    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const json = await res.json(emailState, passState)
      }
      catch (error) {
        console.log('error', error)
      }
    };
    fetchData()
  }, [])

  */

  return (
  <>
    <form className='regi-form'>
      <h1>Create Account</h1>
      <label>Enter your Email</label>
        <input type='email' placeholde='Email' className='email' required />
      <label>Enter your Password</label>
        <input type='password' placeholder='Password' className='password' required />
      <button>Register</button>
    </form>
  </>
  )
}

