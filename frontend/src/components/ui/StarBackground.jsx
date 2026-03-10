import React, { useMemo, useEffect, useState } from 'react';

/**
 * StarBackground — Animated star field that adapts to dark/light mode.
 * Dark mode: bright, visible stars with shooting stars
 * Light mode: very subtle warm specks — atmospheric, not distracting
 */
const StarBackground = React.memo(({ 
  count = 80, 
  shootingCount = 4,
  className = '',
  reduced = false
}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains('dark'));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const starCount = reduced ? Math.floor(count * 0.5) : count;

  const stars = useMemo(() => {
    return Array.from({ length: starCount }, (_, i) => {
      // pick a colour for light mode; dark mode is handled below
      const colour = isDark
        ? 'var(--gold-light)' // bright cream in dark
        : Math.random() < 0.5
        ? 'var(--gold)'
        : 'var(--maroon)';

      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * (i % 5 === 0 ? 2 : 1),
        duration: 2.5 + Math.random() * 4,
        delay: Math.random() * 5,
        colour,
      };
    });
  }, [starCount, isDark]);

  const shootingStars = useMemo(() => {
    return Array.from({ length: shootingCount }, (_, i) => {
      const colour = isDark ? 'var(--gold-light)' : 'var(--gold)';
      return {
        id: i,
        startX: 20 + Math.random() * 60,
        startY: 5 + Math.random() * 30,
        duration: 6 + Math.random() * 8,
        delay: i * (12 / shootingCount) + Math.random() * 4,
        colour,
      };
    });
  }, [shootingCount, isDark]);

  return (
    <div 
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="star-dot"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--dur': `${star.duration}s`,
            '--del': `${star.delay}s`,
            backgroundColor: star.colour,
          }}
        />
      ))}

      {isDark && shootingStars.map((s) => (
        <div
          key={s.id}
          className="shoot-star"
          style={{
            left: `${s.startX}%`,
            top: `${s.startY}%`,
            '--dur': `${s.duration}s`,
            '--del': `${s.delay}s`,
            transform: 'rotate(215deg)',
            background: `linear-gradient(90deg, ${s.colour}, transparent)`,
          }}
        />
      ))}

      {!isDark && (
        <>
          <div 
            className="absolute top-0 right-0 w-2/5 h-2/5 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 80% 20%, rgba(212,175,55,0.05) 0%, transparent 70%)' }}
          />
          <div 
            className="absolute bottom-0 left-0 w-1/3 h-1/3 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 20% 80%, rgba(212,175,55,0.04) 0%, transparent 70%)' }}
          />
          {/* maroon accent for light mode */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(128,0,0,0.02) 0%, transparent 60%)',
            }}
          />
        </>
      )}
    </div>
  );
});

StarBackground.displayName = 'StarBackground';
export default StarBackground;
