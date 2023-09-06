import React, { useState } from 'react'
import { logo } from '../data/media'
import { Button } from '@nextui-org/button'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import usePlayer from '../hooks/usePlayer'
import usePage from '../hooks/usePage'

function Header () {
  const { isPlay, togglePlay } = usePlayer()
  const { homeSection, progSection, contactsSection, aboutSection, setSection } = usePage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', section: homeSection },
    { name: 'Programación', section: progSection },
    { name: 'Contactos', section: contactsSection },
    { name: 'Nosotros', section: aboutSection }
  ]

  return (
    <Navbar shouldHideOnScroll isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className='bg-mygray shadow-md h-[80px]'>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className='sm:hidden'
      />
      <NavbarBrand>
        <Link href=''>
          <figure className='w-[100px]'>
            <img className='w-full h-full object-contain' src={logo} alt='logo radio bendicion' />
          </figure>
        </Link>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='start'>
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} className='cursor-pointer'>
            <Link color='primary' onPress={() => { setSection(item.section) }}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button color='secondary' variant='solid' onPress={togglePlay}>
            <FontAwesomeIcon icon={isPlay ? faPause : faPlay} />
            {isPlay ? 'Pause' : 'Play'}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className='bg-mygray flex flex-col'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className='grid place-items-center cursor-pointer'>
            <Link
              color='foreground'
              className='w-full text-center block mt-10'
              size='lg'
              onPress={() => {
                setSection(item.section)
                setIsMenuOpen(!isMenuOpen)
              }}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
