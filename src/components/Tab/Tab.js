import React from 'react';
import "./Tab.css";

const Tab = ({children}) => {
  const [highlightStyle, setHighlightStyle] = React.useState({ left: 0, opacity: 0 });

  const moveHighlight =(event) => {
    setHighlightStyle({ left: event.nativeEvent.layerX - 150 });
  };

  const hideHighlight = (event) => {
    setHighlightStyle({ left: event.nativeEvent.layerX - 150, opacity: 0 });
  };

  return (
    <div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighlight}>
      <div className="highlight" style={highlightStyle} />
      {children}
    </div>
  )
}

export default Tab;