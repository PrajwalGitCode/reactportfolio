export default async () => {
  const kv = await import("@netlify/kv");

  // Get current visitor data
  let data = await kv.get("uniqueVisitors");

  if (!data) {
    data = { count: 0, visitors: [] };
  }

  // Get IP from headers
  const ip = Netlify.env.get("x-nf-client-connection-ip") || "unknown-ip";

  // If new visitor → count
  if (!data.visitors.includes(ip)) {
    data.visitors.push(ip);
    data.count += 1;
    await kv.set("uniqueVisitors", data);
  }

  return new Response(JSON.stringify({ count: data.count }), {
    headers: { "Content-Type": "application/json" },
  });
};
