import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(140deg, #111827 0%, #1d4ed8 55%, #06b6d4 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 38, opacity: 0.92 }}>Binod Kaucha</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 1.05 }}>
            Aspiring Web Developer
          </div>
          <div style={{ fontSize: 36, opacity: 0.92 }}>
            Building modern, responsive web experiences
          </div>
        </div>
        <div style={{ fontSize: 30, opacity: 0.96 }}>Portfolio</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
