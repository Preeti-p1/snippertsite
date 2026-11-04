import { useInView } from 'react-intersection-observer'

/**
 * Hook to trigger a CSS animation when element scrolls into view.
 * Returns [ref, inView]
 */
export function useScrollReveal(options = {}) {
  const { ref, inView } = useInView({
    threshold: options.threshold ?? 0.15,
    triggerOnce: options.triggerOnce ?? true,
    rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
  })
  return [ref, inView]
}
