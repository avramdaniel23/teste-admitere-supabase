import { useState, useEffect, useRef } from 'react'

export default function useSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const portalRef = useRef<HTMLUListElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isMenuOpen &&
        !portalRef.current?.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMenuOpen])

  return { isMenuOpen, toggleMenu, portalRef, buttonRef }
}
