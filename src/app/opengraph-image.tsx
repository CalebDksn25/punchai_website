import { ImageResponse } from "next/og";

export const alt = "Punch AI - Your AI Boxing Coach";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #111111 0%, #1A1A1A 50%, #111111 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Red glow */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(226, 75, 74, 0.08)",
            filter: "blur(100px)",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #E24B4A, transparent)",
          }}
        />

        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "white",
            letterSpacing: "0.08em",
            lineHeight: 1,
          }}
        >
          PUNCH AI
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#E24B4A",
            marginTop: 20,
            letterSpacing: "0.15em",
          }}
        >
          AI-POWERED BOXING COACH
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#888780",
            marginTop: 28,
            maxWidth: 600,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Train smarter. Hit harder. Real-time AI coaching in your pocket.
        </div>

        {/* Bottom badge */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#888780",
            fontSize: 16,
          }}
        >
          <span>punchai.app</span>
          <span style={{ color: "#E24B4A" }}>|</span>
          <span>Available on iOS</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
