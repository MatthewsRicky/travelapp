import React from 'react'

const AuthModal = () => {
  return (
    <div>
      import { authenticate } from '@/app/lib/actions'
 


     <form action={authenticate}>
       <input type="email" name="email" placeholder="Email" required />
       <input type="password" name="password" placeholder="Password" required />
       <button type="submit">Login</button>
     </form>
   )
 }
    </div>
  )
}

export default AuthModal