
const GlobalBackground = () => {
  return (
    <div className="absolute inset-0 -z-50 pointer-events-none overflow-hidden">
      {/* Carefully placed blobs for visual balance - 2-3 visible at viewport at once */}
      
      {/* Top area - one on each side for balance */}
      <div className="global-blob" style={{ top: '600px', left: '-15%' }} />
      <div className="global-blob" style={{ top: '900px', right: '-12%' }} />
      
      {/* Mid-upper area */}
      <div className="global-blob" style={{ top: '1400px', left: '5%' }} />
      
      {/* Middle area - diagonal balance */}
      <div className="global-blob" style={{ top: '2000px', right: '-15%' }} />
      <div className="global-blob" style={{ top: '2400px', left: '-10%' }} />
      
      {/* Mid-lower area */}
      <div className="global-blob" style={{ top: '3000px', right: '8%' }} />
      
      {/* Lower area - asymmetric placement */}
      <div className="global-blob" style={{ top: '3600px', left: '-12%' }} />
      <div className="global-blob" style={{ top: '4200px', right: '-10%' }} />
      
      {/* Bottom area - final accent */}
      <div className="global-blob" style={{ top: '4800px', left: '10%' }} />
    </div>
  );
};

export default GlobalBackground;
