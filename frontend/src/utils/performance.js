import { useCallback, useMemo, useRef } from 'react';

// Performance optimization utilities
export const useOptimizedCallback = (callback, deps) => {
  return useCallback(callback, deps);
};

export const useOptimizedMemo = (factory, deps) => {
  return useMemo(factory, deps);
};

// Debounce utility for performance
export const useDebounce = (callback, delay) => {
  const timeoutRef = useRef(null);
  
  return useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
};

// Throttle utility for scroll events
export const useThrottle = (callback, delay) => {
  const lastCallRef = useRef(0);
  
  return useCallback((...args) => {
    const now = Date.now();
    if (now - lastCallRef.current >= delay) {
      lastCallRef.current = now;
      callback(...args);
    }
  }, [callback, delay]);
};

// Intersection Observer for lazy loading
export const useIntersectionObserver = (callback, options = {}) => {
  const observerRef = useRef(null);
  
  const getObserver = useCallback(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      return new IntersectionObserver(callback, {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      });
    }
    return null;
  }, [callback, options]);
  
  const observe = useCallback((element) => {
    if (!observerRef.current) {
      observerRef.current = getObserver();
    }
    if (observerRef.current && element) {
      observerRef.current.observe(element);
    }
  }, [getObserver]);
  
  const unobserve = useCallback((element) => {
    if (observerRef.current && element) {
      observerRef.current.unobserve(element);
    }
  }, []);
  
  return { observe, unobserve };
};

// Image optimization utilities
export const getOptimizedImageUrl = (url, options = {}) => {
  const { width, height, quality = 80, format = 'auto' } = options;
  
  if (!url) return url;
  
  // Add optimization parameters for image services
  const urlObj = new URL(url, window.location.origin);
  
  if (width) urlObj.searchParams.set('w', width);
  if (height) urlObj.searchParams.set('h', height);
  urlObj.searchParams.set('q', quality);
  urlObj.searchParams.set('fm', format);
  
  return urlObj.toString();
};

// Smooth scroll utility
export const useSmoothScroll = () => {
  const scrollTo = useCallback((elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const top = element.offsetTop - offset;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  }, []);
  
  return { scrollTo };
};

// Animation performance utilities
export const optimizedAnimationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.6, 
    ease: [0.16, 1, 0.3, 1],
    type: "tween"
  }
};

export const staggeredAnimationProps = (delay = 0.1) => ({
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.8,
    delay,
    ease: "easeOut"
  }
});
