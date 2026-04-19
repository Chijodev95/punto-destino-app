'use client'

import { useEffect, useRef, useState } from 'react'

interface UseNavbarReturn {
  scrolled: boolean
  menuOpen: boolean
  activeSection: string
  setMenuOpen: (open: boolean) => void
  toggleMenu: () => void
}

export function useNavbar(): UseNavbarReturn {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const menuRef = useRef<boolean>(false)

  // Keep ref in sync so event listeners always see current value
  menuRef.current = menuOpen

  useEffect(() => {
    // Scroll position watcher
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // Scroll reveal
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))

    // Active section tracking
    const sections = document.querySelectorAll('section[id]')
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => sectionObserver.observe(s))

    // Close menu on Escape
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuRef.current) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)

    // Close menu on outside click
    const onOutsideClick = (e: MouseEvent) => {
      if (!menuRef.current) return
      const target = e.target as Element
      if (!target.closest('.navbar')) setMenuOpen(false)
    }
    document.addEventListener('mousedown', onOutsideClick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      revealObserver.disconnect()
      sectionObserver.disconnect()
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onOutsideClick)
    }
  }, [])

  const toggleMenu = () => setMenuOpen((v) => !v)

  return { scrolled, menuOpen, activeSection, setMenuOpen, toggleMenu }
}
