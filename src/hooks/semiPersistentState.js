import { useState, useEffect } from 'react'

//Custom hook created by combining useState and useEffect

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(
    localStorage.getItem('value') || initialState
  )

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])

  return [value, setValue]
}

export { useSemiPersistentState }
