import React from 'react'
import { authenticate } from '@/lib/action'


const AuthModal = () => {
  return (
    <div>
     <form action={authenticate}>
       <input type="email" name="email" placeholder="Email" required />
       <input type="password" name="password" placeholder="Password" required />
       <button type="submit">Login</button>
     </form>

 
    </div>
  )
}

export default AuthModal