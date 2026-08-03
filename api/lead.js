const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/TPrxtx0jzGjXWbjVv2pj/webhook-trigger/21b34e5c-9eb8-4841-87d1-bd1c1ffa4071";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();

    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone are required" });
    }

    const parts = name.split(/\s+/);
    const firstName = String(body.firstName || parts[0] || name).trim();
    const lastName = String(body.lastName || parts.slice(1).join(" ") || "").trim();

    const payload = {
      name,
      firstName,
      lastName,
      phone,
      service,
      source: String(body.source || "DeMelo Landing Page - Free Estimate"),
    };

    const upstream = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => "");
      console.error("LeadConnector webhook failed:", upstream.status, text);
      return res.status(502).json({ error: "Webhook request failed" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Lead submit error:", err);
    return res.status(500).json({ error: err.message || "Server error" });
  }
}
