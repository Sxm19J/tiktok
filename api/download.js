const puppeteer = require('puppeteer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'No URL provided' });
    }

    try {
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle2' });

      // Extract video URL from the page
      const videoUrl = await page.evaluate(() => {
        const videoElement = document.querySelector('video');
        return videoElement ? videoElement.src : null;
      });

      await browser.close();

      if (videoUrl) {
        return res.status(200).json({ downloadUrl: videoUrl });
      } else {
        return res.status(404).json({ error: 'No video found at the provided URL' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error extracting video' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
