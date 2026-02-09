import React from "react";
import Layout from "@theme/Layout";
import MainContact from "../components/MainContact";

export default function Home() {
  return (
    <Layout
      title="QuietMetric"
      description="Decision grade clarity when dashboards feel untrustworthy."
    >
      <main style={{ maxWidth: 960, margin: "0 auto", padding: "3rem 1.25rem" }}>
        <header style={{ marginBottom: "2.5rem" }}>
          <h1 style={{ fontSize: "2.25rem", lineHeight: 1.2, marginBottom: "0.75rem" }}>
            Your metrics are lying to you.
          </h1>
          <p style={{ fontSize: "1.125rem", maxWidth: 720, marginBottom: "1.25rem" }}>
            QuietMetric delivers a short diagnostic that identifies what is misleading, what is missing,
            and what to fix first so you can make decisions with confidence.
          </p>

          <ul style={{ margin: 0, paddingLeft: "1.25rem", maxWidth: 760 }}>
            <li>Find distorted KPIs, broken event tracking, and false certainty</li>
            <li>Optional targeted code reality check on the critical measurement paths</li>
            <li>Clear next steps, ranked by impact</li>
          </ul>

          <div style={{ marginTop: "1.5rem" }}>
            <a href="#contact" style={{ fontWeight: 600 }}>
              Request a diagnostic →
            </a>
          </div>
        </header>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.5rem" }}>How it works</h2>
          <ol style={{ paddingLeft: "1.25rem", maxWidth: 820 }}>
            <li>You submit context and links below.</li>
            <li>I review your current analytics and assumptions behind the dashboards.</li>
            <li>You receive a concise memo or Loom walkthrough with prioritized fixes.</li>
          </ol>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.5rem" }}>Pricing</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: "1rem" }}>
              <h3 style={{ marginTop: 0 }}>Metrics Diagnostic</h3>
              <p>
                Analytics-only review focused on identifying misleading KPIs and blind spots.
              </p>
              <p style={{ fontWeight: 700 }}>$199</p>
            </div>

            <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: "1rem" }}>
              <h3 style={{ marginTop: 0 }}>Metrics + Code Reality Check</h3>
              <p>
                Includes targeted review of the code paths that generate or transform metrics.
              </p>
              <p style={{ fontWeight: 700 }}>$399</p>
            </div>

            <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: "1rem" }}>
              <h3 style={{ marginTop: 0 }}>Decision Integrity Review (Enterprise)</h3>
              <p>
                Cross-system metrics review with deeper tracing across teams, tools, and code.
              </p>
              <p style={{ fontWeight: 700 }}>Contact for pricing</p>
            </div>
          </div>

          <p style={{ marginTop: "0.75rem", maxWidth: 820 }}>
            Implementation and ongoing advisory work are scoped separately.
          </p>
        </section>
        <MainContact />
      </main>
    </Layout>
  );
}
