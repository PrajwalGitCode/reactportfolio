const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "visitorCount.json");

exports.handler = async function (event, context) {
  let data = { count: 0, visitors: [] };

  // Create JSON file if missing
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(data));
  } else {
    data = JSON.parse(fs.readFileSync(filePath));
  }

  // Get user IP from Netlify
  const userIp = event.headers["x-nf-client-connection-ip"];

  // Count only unique IPs
  if (userIp && !data.visitors.includes(userIp)) {
    data.visitors.push(userIp);
    data.count++;
  }

  // Save updated data
  fs.writeFileSync(filePath, JSON.stringify(data));

  return {
    statusCode: 200,
    body: JSON.stringify({ count: data.count }),
  };
};
