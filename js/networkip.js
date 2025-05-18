let body = $response.body;
let obj = JSON.parse(body);

let title = " ";
let subtitle = obj.ip + " - " + obj.country_iso;
let ip = obj.ip;

$done({ title, subtitle, ip });
