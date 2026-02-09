import React, { useState } from "react";

function encode(data) {
  return new URLSearchParams(data).toString();
}

export default function MainContact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const formName = "quietmetric-diagnostic";

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
        "form-name": formName,
        name: formData.get("name") || "",
        email: formData.get("email") || "",
        company: formData.get("company") || "",
        engagement_size: formData.get("engagement_size") || "",
        decision: formData.get("decision") || "",
        symptoms: formData.get("symptoms") || "",
        links: formData.get("links") || "",
        // include bot-field if you want, but it should always be empty
        "bot-field": formData.get("bot-field") || "",
    }

    try {
      const res = await fetch(window.location.pathname, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });

      if (!res.ok) throw new Error(res.status);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" style={{ marginBottom: "3rem" }}>
      <h2 style={{ fontSize: "1.5rem" }}>Request a diagnostic</h2>

      <form
        name={formName}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={onSubmit}
        style={{ display: "grid", gap: "0.75rem", maxWidth: 720 }}
      >
        <input type="hidden" name="form-name" value={formName} />
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <label>
          Name
          <input name="name" required style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }} />
        </label>

        <label>
          Email
          <input type="email" name="email" required style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }} />
        </label>

        <label>
          Company or project
          <input name="company" style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }} />
        </label>

        <label>
          Engagement size
          <select name="engagement_size" style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }}>
            <option value="solo">Solo / small project</option>
            <option value="small-team">Small team</option>
            <option value="company">Company-wide / enterprise</option>
          </select>
        </label>

        <label>
          What decision are you trying to make right now?
          <textarea name="decision" required rows={3} style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }} />
        </label>

        <label>
          What feels off about your metrics or dashboards?
          <textarea name="symptoms" required rows={4} style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }} />
        </label>

        <label>
          Links (dashboards, analytics tool, repo access notes, or screenshots)
          <textarea name="links" rows={3} style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }} />
        </label>

        <button type="submit" disabled={status === "sending"} style={{ padding: "0.75rem 1rem", fontWeight: 700 }}>
          {status === "sending" ? "Sending..." : "Send request"}
        </button>

        {status === "success" && <p style={{ margin: 0 }}>Received. I’ll reply by email.</p>}
        {status === "error" && <p style={{ margin: 0 }}>Something failed. Please try again.</p>}
      </form>
    </section>
  );
}