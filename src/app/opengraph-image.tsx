import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Primatronic - Industrial Automation & Custom Electronics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #e5e5e5, #a3a3a3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 700,
              color: "#0a0a0a",
            }}
          >
            P
          </div>
          <span
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            PRIMATRONIC
          </span>
        </div>

        <h1
          style={{
            fontSize: "52px",
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
            margin: "0 80px",
            letterSpacing: "-0.03em",
          }}
        >
          Industrial Automation &
          <br />
          Custom Electronics
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#a3a3a3",
            textAlign: "center",
            marginTop: "24px",
            margin: "24px 120px 0",
          }}
        >
          Custom PCBs &middot; Vision Systems &middot; MES/ERP &middot; Smart Controls
        </p>

        <div
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: "16px",
            color: "#525252",
          }}
        >
          primatronic.eu
        </div>
      </div>
    ),
    { ...size },
  );
}
