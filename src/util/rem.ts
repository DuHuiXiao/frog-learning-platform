// utils/rem.js
export function initRemUnit() {
  const setRootFontSize = () => {
    const width = window.innerWidth;
    const baseWidth = 1920; // 设计稿宽度
    const baseFontSize = 16;
    
    // 计算动态字体大小
    let fontSize = baseFontSize * (width / baseWidth);
    
    // 限制字体大小范围（14px ~ 18px）
    // fontSize = Math.max(14, Math.min(fontSize, 18));
    
    document.documentElement.style.fontSize = fontSize + 'px';
  };

  setRootFontSize();
  window.addEventListener('resize', setRootFontSize);
  window.addEventListener('orientationchange', setRootFontSize);
}