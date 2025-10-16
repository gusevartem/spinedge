import React from "react";

export const Preloader = () => {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      minHeight: "100svh",
      // modern viewport unit for Safari/iOS and desktop
      minHeight: "100dvh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0,0,0,0.6)",
    }}>
      <div style={{
        width: 48,
        height: 48,
        border: "4px solid rgba(255,255,255,0.3)",
        borderTopColor: "#fff",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite"
      }} />
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default Preloader;
