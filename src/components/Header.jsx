import React, { useState } from 'react'
import { logo } from '../data/media'
import { Button } from '@nextui-org/button'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import usePlayer from '../hooks/usePlayer'

function Header () {
  const { isPlay, togglePlay } = usePlayer()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    'Home',
    'Programación',
    'Contactos',
    'Nosotros'
  ]

  return (
    <>
      <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className='bg-mygray shadow-md h-[80px]'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <figure className='w-[100px]'>
            <img className='w-full h-full object-contain' src={logo} alt='logo radio bendicion' />
          </figure>
        </NavbarBrand>
        <NavbarContent className='hidden sm:flex gap-4' justify='start'>
          <NavbarItem>
            <Link color='primary' href='#'>
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='#' color='primary'>
              Programación
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='primary' href='#'>
              Contactos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='primary' href='#'>
              Nosotros
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem>
            <Button color='secondary' variant='solid' onPress={togglePlay}>
              <FontAwesomeIcon icon={isPlay ? faPause : faPlay} />
              Play
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className='bg-mygray flex flex-col gap-10'>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className='grid place-items-center'>
              <Link
                color='foreground'
                className='w-full text-center block'
                href='#'
                size='lg'
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}

export default Header
