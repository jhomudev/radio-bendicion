import { createContext, useRef, useState } from 'react'

export const PageContext = createContext()

export default function PageProvider ({ children }) {
  const homeSection = useRef()
  const progSection = useRef()
  const contactsSection = useRef()
  const aboutSection = useRef()
  const [section, setSection] = useState(homeSection)

  function scrollToSection (element = null) {
    const top = element ? element.offsetTop : 0
    window.scrollTo({
      top,
      behavior: 'smooth'
    })
    console.log(element)
  }

  return (
    <PageContext.Provider value={{
      homeSection,
      progSection,
      contactsSection,
      aboutSection,
      section,
      setSection,
      scrollToSection
    }}
    >
      {children}
    </PageContext.Provider>
  )
}
