import React from 'react'

export default function Registration() {
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

  return (
  <>
    <h1>Create Account</h1>
    <label>
      <input type='email' placeholde='Email' ref={emailRef} required />
    </label>
    <label>
      <input type='password' placeholder='Passowrd' ref={passRef} required />
    </label>
    <button>Register</button>
  </>
  )
}

