/**
 * Fetch Providence HOA site images into public/images/providence/ folders.
 * Run only after you have permission from Providence Master HOA or HOA Sites.
 *
 * Usage: node scripts/fetch-providence-hoa-images.js
 * Requires: npm install node-fetch (or use fetch in Node 18+)
 */

const fs = require("fs");
const path = require("path");
const { createWriteStream } = require("fs");
const https = require("https");

const BASE = "https://www.providencelvhoa.com";
const OUT = path.join(__dirname, "..", "public", "images", "providence");

const ASSETS = [
  { url: `${BASE}/grfx/box1.jpg`, dir: "community-resources", file: "box1-new-homeowner.jpg" },
  { url: `${BASE}/grfx/box2.jpg`, dir: "community-resources", file: "box2-pay-assessment.jpg" },
  { url: `${BASE}/grfx/box3.jpg`, dir: "community-resources", file: "box3-community-parks.jpg" },
  { url: `${BASE}/grfx/box4.jpg`, dir: "community-resources", file: "box4-about-providence.jpg" },
  {
    url: `${BASE}/editor_upload/File/PROVIDENCE%20MAP.jpg`,
    dir: "maps",
    file: "providence-map.jpg",
  },
];

function download(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https
      .get(url, (res) => {
        if (res.statusCode === 302 || res.statusCode === 301) {
          const redirect = res.headers.location;
          const nextUrl = redirect.startsWith("http") ? redirect : new URL(redirect, url).href;
          return download(nextUrl, destPath)
            .then(resolve)
            .catch(reject);
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
  });
}

async function main() {
  console.log("Fetching Providence HOA images (ensure you have permission).\n");
  for (const { url, dir, file } of ASSETS) {
    const dirPath = path.join(OUT, dir);
    const filePath = path.join(dirPath, file);
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
    try {
      await download(url, filePath);
      console.log("OK:", filePath);
    } catch (e) {
      console.error("FAIL:", url, e.message);
    }
  }
  console.log("\nDone.");
}

main();
