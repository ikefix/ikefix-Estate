import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

export default function userAuthStatus() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus ] = useState(true)

    useEffect(()=>{
        const auth = getAuth()
        onAuthStateChanged
    }

    )
  return (
    <div>userAuthStatus</div>
  )
}
