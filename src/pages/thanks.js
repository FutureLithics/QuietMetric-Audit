import React from "react";
import Layout from "@theme/Layout";

export default function Thanks() {
  return (
    <Layout title="Thanks" description="Request received">
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1.25rem" }}>
        <h1>Received.</h1>
        <p>I’ll reply by email with next steps.</p>
        <p>
          <a href="/">Back to home</a>
        </p>
      </main>
    </Layout>
  );
}