import React, { useState } from 'react';
import EnhancedStarBackground from './EnhancedStarBackground';

/**
 * Demo component showcasing the EnhancedStarBackground capabilities
 */
const StarBackgroundDemo = () => {
  const [showControls, setShowControls] = useState(true);
  const [starCount, setStarCount] = useState(150);
  const [opacity, setOpacity] = useState(0.8);

  return (
    <div className="min-h-screen bg-page relative overflow-hidden">
      {/* Enhanced Star Background */}
      <EnhancedStarBackground
        count={starCount}
        shootingCount={8}
        showControls={showControls}
        starColors={['gold', 'white', 'blue', 'red']}
        defaultOpacity={opacity}
        defaultSize={1.5}
      />

      {/* Demo Controls */}
      <div className="relative z-20 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="card-glass p-8 rounded-lg backdrop-blur-md border border-enga-gold/20">
            <h1 className="text-4xl font-display font-bold text-enga-black dark:text-enga-white mb-6">
              Enhanced Star Background
              <span className="text-gradient-gold">Demo</span>
            </h1>
            
            <p className="text-enga-black/60 dark:text-enga-white/60 mb-8 leading-relaxed">
              This demo showcases the enhanced star background component with multiple colors, 
              adjustable opacity/size, and interactive controls. Toggle the control panel 
              in the top-right corner to customize the star field.
            </p>

            {/* Demo Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="text-sm font-bold text-enga-black dark:text-enga-white mb-3 block">
                  Show Controls
                </label>
                <button
                  onClick={() => setShowControls(!showControls)}
                  className={`btn-primary text-xs ${
                    showControls ? 'bg-enga-gold text-enga-black' : ''
                  }`}
                >
                  {showControls ? 'Hide' : 'Show'} Controls
                </button>
              </div>

              <div>
                <label className="text-sm font-bold text-enga-black dark:text-enga-white mb-3 block">
                  Star Count: {starCount}
                </label>
                <input
                  type="range"
                  min="50"
                  max="300"
                  value={starCount}
                  onChange={(e) => setStarCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-enga-gold/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-enga-black dark:text-enga-white mb-3 block">
                  Global Opacity: {opacity.toFixed(1)}
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.1"
                  value={opacity}
                  onChange={(e) => setOpacity(parseFloat(e.target.value))}
                  className="w-full h-2 bg-enga-gold/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Feature List */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-enga-gold/5 rounded-lg">
                <h3 className="font-bold text-enga-black dark:text-enga-white mb-2">✨ Multiple Colors</h3>
                <p className="text-sm text-enga-black/60 dark:text-enga-white/60">
                  Gold, white, blue, and red stars that adapt to light/dark mode
                </p>
              </div>
              <div className="p-4 bg-enga-gold/5 rounded-lg">
                <h3 className="font-bold text-enga-black dark:text-enga-white mb-2">🎛️ Interactive Controls</h3>
                <p className="text-sm text-enga-black/60 dark:text-enga-white/60">
                  Real-time adjustment of opacity, size, and color selection
                </p>
              </div>
              <div className="p-4 bg-enga-gold/5 rounded-lg">
                <h3 className="font-bold text-enga-black dark:text-enga-white mb-2">🌟 Special Effects</h3>
                <p className="text-sm text-enga-black/60 dark:text-enga-white/60">
                  Enhanced stars with glow effects and shooting stars in dark mode
                </p>
              </div>
              <div className="p-4 bg-enga-gold/5 rounded-lg">
                <h3 className="font-bold text-enga-black dark:text-enga-white mb-2">🎨 Light Mode Nebula</h3>
                <p className="text-sm text-enga-black/60 dark:text-enga-white/60">
                  Atmospheric nebula effects in light mode
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarBackgroundDemo;
