export default function MainContact() {
  return (
    <section id="contact" style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Request a diagnostic</h2>

            {/* Netlify Forms: keep this a plain HTML form */}
            <form
            name="quietmetric-diagnostic"
            method="POST"
            netlify
            data-netlify-honeypot="bot-field"
            action="/thanks"
            style={{ display: "grid", gap: "0.75rem", maxWidth: 720 }}
            >
            {/* Required hidden form-name for Netlify */}
            <input type="hidden" name="form-name" value="quietmetric-diagnostic" />
            {/* Honeypot */}
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
                <input
                type="email"
                name="email"
                required
                style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }}
                />
            </label>

            <label>
                Company or project
                <input name="company" style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }} />
            </label>

            <label>
                Engagement size
                <select
                name="engagement_size"
                style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }}
                >
                <option value="solo">Solo / small project</option>
                <option value="small-team">Small team</option>
                <option value="company">Company-wide / enterprise</option>
                </select>
            </label>

            <label>
                What decision are you trying to make right now?
                <textarea
                name="decision"
                required
                rows={3}
                style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }}
                />
            </label>

            <label>
                What feels off about your metrics or dashboards?
                <textarea
                name="symptoms"
                required
                rows={4}
                style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }}
                />
            </label>

            <label>
                Links (dashboards, analytics tool, repo access notes, or screenshots)
                <textarea
                name="links"
                rows={3}
                style={{ width: "100%", padding: "0.6rem", marginTop: "0.25rem" }}
                />
            </label>

            <button type="submit" style={{ padding: "0.75rem 1rem", fontWeight: 700 }}>
                Send request
            </button>
        </form>
    </section>
  );
}