import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setRedirect } from '../../store/auth/authReducer'
const AuthGuard =({children})=> {
  const authState = useSelector((state)=>state.auth)
  const dispatch = useDispatch()

  const router = useRouter()
  useEffect(() => {
    if (!authState?.initialization) {
      //auth is initialized and there is no user
      if (!authState?.user) {
        // dispatch(setRedirect(router.route))
        router.push("/login")
      }
    }
  }, [authState.initialization, router])

  /* show loading indicator while the auth provider is still initializing */
  if (authState?.initialization) {
    return <h1>Application Loading</h1>
  }

  // if auth initialized with a valid user show protected page
  if (!authState?.initializing && authState?.user) {
    return <>{children}</>
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null
}

export default AuthGuard