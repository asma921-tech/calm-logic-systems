import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="fixed w-5 h-5 rounded-full pointer-events-none z-50"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        background: "hsl(0 100% 27% / 0.6)",
        filter: "blur(10px)",
      }}
    />
  );
};

export default CursorGlow;
