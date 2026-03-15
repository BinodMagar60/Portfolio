import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
            "radial-gradient(circle at 10% 20%, #0ea5e9 0%, #1e3a8a 40%, #0f172a 100%)",
          color: "white",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 38, opacity: 0.9 }}>Binod Kaucha</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 86, fontWeight: 800, lineHeight: 1.05 }}>Web Developer</div>
          <div style={{ fontSize: 38, opacity: 0.9 }}>
            Projects, skills, and contact details in one place
          </div>
        </div>
          <div style={{ fontSize: 30, opacity: 0.95 }}>Personal Portfolio</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
