import { ImageResponse } from "next/og";

export const alt =
  "Shivorra — too busy running the business to grow it? Websites, software and automation.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#06070a",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* glow */}
        <div
          style={{
            position: "absolute",
            top: -220,
            left: 300,
            width: 800,
            height: 520,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(201,242,78,0.30), rgba(79,216,232,0.12) 45%, transparent 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 13,
              border: "2px solid #c9f24e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c9f24e",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ color: "#f4f6f8", fontSize: 30, fontWeight: 600 }}>
            Shivorra
          </div>
          <div
            style={{
              marginLeft: 8,
              color: "#8b93a1",
              fontSize: 22,
              letterSpacing: 1,
            }}
          >
            shivorra.it.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f4f6f8",
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2.5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>{"Too busy running"}</span>
            <span style={{ display: "flex", gap: 22 }}>
              <span>{"the business to"}</span>
              <span style={{ color: "#c9f24e" }}>{"grow it?"}</span>
            </span>
          </div>
          <div
            style={{
              marginTop: 26,
              color: "#aab2c0",
              fontSize: 29,
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            {"We build the website, software and automation that take the busywork off your plate."}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            borderTop: "1px solid #2a2f3a",
            paddingTop: 26,
            color: "#8b93a1",
            fontSize: 22,
          }}
        >
          <span>One agreed price</span>
          <span>Running in 3 weeks</span>
          <span>It all belongs to you</span>
        </div>
      </div>
    ),
    size,
  );
}
