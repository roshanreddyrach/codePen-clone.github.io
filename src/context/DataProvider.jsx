import React from 'react'

import { createContext, useState } from "react"

export const DataContext = createContext()

export default function DataProvider({ children }) {

    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')

  return (
        <DataContext.Provider
             value={{
                 html,
                 setHtml,
                 css,
                 setCss,
                 js,
                 setJs
             }}
        >
           { children }
        </DataContext.Provider>
  )
}
