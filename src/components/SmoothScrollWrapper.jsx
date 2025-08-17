import { useEffect, useRef } from 'react'

export default function SmoothScrollWrapper({ children }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    // Simple smooth scrolling behavior
    const handleScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth'
    }

    handleScroll()

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div ref={scrollRef} className="smooth-scroll-container">
      {children}
    </div>
  )
}