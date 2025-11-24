export default async (req) => {
  try {
    // Access KV
    const KV = VISITOR_DB;
    if (!KV) {
      return {
        statusCode: 500,
        body: "KV namespace missing",
      };
    }

    // Detect IP (Netlify passes it in headers)
    const ip = req.headers["x-nf-client-connection-ip"];

    if (!ip) {
      return {
        statusCode: 500,
        body: "Unable to detect IP",
      };
    }

    // Hash IP (privacy safe)
    const encoder = new TextEncoder();
    const data = encoder.encode(ip);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = [...new Uint8Array(hashBuffer)];
    const hashedIp = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

    // Check if this IP already visited
    const exists = await KV.get(hashedIp);

    let count = await KV.get("unique_count");
    if (!count) count = 0;
    else count = parseInt(count);

    if (!exists) {
      // First visit → store IP hash
      await KV.put(hashedIp, "1");

      // Increase unique visitor count
      count += 1;
      await KV.put("unique_count", String(count));
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ count }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: "Error: " + err.message,
    };
  }
};
