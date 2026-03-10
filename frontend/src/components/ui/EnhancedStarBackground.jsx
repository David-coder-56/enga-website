import React, { useMemo, useEffect, useState } from 'react';

/**
 * EnhancedStarBackground — Advanced star field with multiple colors, sizes, and user controls
 * Features:
 * - Multiple star colors (gold, white, blue, red)
 * - Adjustable size and opacity
 * - Dark/light mode adaptation
 * - Interactive controls for customization
 */
const EnhancedStarBackground = React.memo(({ 
  count = 120,
  shootingCount = 6,
  className = '',
  reduced = false,
  showControls = false,
  starColors = ['gold', 'white', 'blue', 'red'],
  defaultOpacity = 0.6,
  defaultSize = 1.2
}) => {
  const [isDark, setIsDark] = useState(false);
  const [opacity, setOpacity] = useState(defaultOpacity);
  const [size, setSize] = useState(defaultSize);
  const [selectedColors, setSelectedColors] = useState(starColors);

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains('dark'));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const starCount = reduced ? Math.floor(count * 0.5) : count;

  const colorMap = useMemo(() => ({
    gold: isDark ? '#F4E4C1' : '#D4AF37',
    white: isDark ? '#FFFFFF' : '#F0F0F0',
    blue: isDark ? '#87CEEB' : '#4169E1',
    red: isDark ? '#FF6B6B' : '#DC143C'
  }), [isDark]);

  // Generate stars once on mount and when dependencies change
  const stars = useMemo(() => {
    const generatedStars = [];
    for (let i = 0; i < starCount; i++) {
      const colorType = selectedColors[Math.floor(Math.random() * selectedColors.length)];
      const isSpecial = i % 8 === 0; // Every 8th star is special
      
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: isSpecial ? size * 2 : size * (0.5 + Math.random() * 1.5),
        color: colorMap[colorType],
        duration: 2 + Math.random() * 6,
        delay: Math.random() * 5,
        isSpecial,
        twinkleSpeed: isSpecial ? 1.5 : 3 + Math.random() * 2
      });
    }
    return generatedStars;
  }, [starCount, selectedColors, size, colorMap]);

  const shootingStars = useMemo(() => {
    const generatedShootingStars = [];
    for (let i = 0; i < shootingCount; i++) {
      generatedShootingStars.push({
        id: i,
        startX: 10 + Math.random() * 80,
        startY: 5 + Math.random() * 40,
        duration: 8 + Math.random() * 10,
        delay: i * (15 / shootingCount) + Math.random() * 5,
        color: colorMap[selectedColors[Math.floor(Math.random() * selectedColors.length)] || 'gold'
      });
    }
    return generatedShootingStars;
  }, [shootingCount, selectedColors, colorMap]);

  const toggleColor = (color) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  return (
    <>
      {/* Star Background */}
      <div 
        aria-hidden="true"
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        style={{ opacity }}
      >
        {/* Regular Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full star-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              boxShadow: star.isSpecial ? `0 0 ${star.size * 2}px ${star.color}` : 'none',
              '--dur': `${star.twinkleSpeed}s`,
              '--del': `${star.delay}s`,
            }}
          />
        ))}

        {/* Shooting Stars (only in dark mode) */}
        {isDark && shootingStars.map((s) => (
          <div
            key={s.id}
            className="absolute star-shoot"
            style={{
              left: `${s.startX}%`,
              top: `${s.startY}%`,
              height: '2px',
              background: `linear-gradient(90deg, ${s.color}, transparent)`,
              transformOrigin: 'right center',
              '--dur': `${s.duration}s`,
              '--del': `${s.delay}s`,
            }}
          />
        ))}

        {/* Nebula effects in light mode */}
        {!isDark && (
          <>
            <div 
              className="absolute top-0 right-0 w-2/5 h-2/5 pointer-events-none star-pulse"
              style={{ 
                background: 'radial-gradient(circle at 80% 20%, rgba(212,175,55,0.08) 0%, transparent 70%)',
                '--dur': '8s',
              }}
            />
            <div 
              className="absolute bottom-0 left-0 w-1/3 h-1/3 pointer-events-none star-pulse"
              style={{ 
                background: 'radial-gradient(circle at 20% 80%, rgba(65,105,225,0.05) 0%, transparent 70%)',
                '--dur': '10s',
              }}
            />
          </>
        )}
      </div>

      {/* Controls Panel */}
      {showControls && (
        <div
          className="fixed top-24 right-6 z-50 card-glass p-4 rounded-lg backdrop-blur-md border border-enga-gold/20 dark:border-enga-gold/10"
        >
          <h3 className="text-sm font-bold mb-3 text-enga-black dark:text-enga-white">Star Controls</h3>
          
          {/* Opacity Control */}
          <div className="mb-3">
            <label className="text-xs text-enga-black/60 dark:text-enga-white/60 block mb-1">Opacity</label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={opacity}
              onChange={(e) => setOpacity(parseFloat(e.target.value))}
              className="w-full h-1 bg-enga-gold/20 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Size Control */}
          <div className="mb-3">
            <label className="text-xs text-enga-black/60 dark:text-enga-white/60 block mb-1">Size</label>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={size}
              onChange={(e) => setSize(parseFloat(e.target.value))}
              className="w-full h-1 bg-enga-gold/20 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Color Selection */}
          <div>
            <label className="text-xs text-enga-black/60 dark:text-enga-white/60 block mb-2">Colors</label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(colorMap).map(([color, value]) => (
                <button
                  key={color}
                  onClick={() => toggleColor(color)}
                  className={`px-2 py-1 text-xs rounded border transition-all ${
                    selectedColors.includes(color)
                      ? 'bg-enga-gold text-enga-black border-enga-gold'
                      : 'bg-transparent text-enga-black/60 dark:text-enga-white/60 border-enga-gold/30'
                  }`}
                  style={{ 
                    borderColor: selectedColors.includes(color) ? value : undefined,
                    backgroundColor: selectedColors.includes(color) ? value + '20' : undefined
                  }}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
});

EnhancedStarBackground.displayName = 'EnhancedStarBackground';

export default EnhancedStarBackground;
