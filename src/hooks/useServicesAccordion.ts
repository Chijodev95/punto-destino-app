import { useState, useCallback } from 'react'

export function useServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const activate = useCallback((i: number) => setActiveIndex(i), [])
  const deactivate = useCallback(() => setActiveIndex(null), [])
  const toggle = useCallback((i: number) => setActiveIndex(prev => (prev === i ? null : i)), [])

  return { activeIndex, activate, deactivate, toggle }
}
