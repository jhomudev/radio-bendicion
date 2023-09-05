import { useContext } from 'react'
import { PageContext } from '../context/PageContext'

function usePage () {
  const {
    homeSection,
    progSection,
    contactsSection,
    aboutSection,
    section,
    setSection,
    scrollToSection
  } = useContext(PageContext)

  return {
    homeSection,
    progSection,
    contactsSection,
    aboutSection,
    section,
    setSection,
    scrollToSection
  }
}
export default usePage
