import puppeteer from "puppeteer";

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
    const page = await browser.newPage();

    // Replace with the actual URL of your React app running locally
    await page.goto("http://localhost:5173", { waitUntil: "networkidle2" });

    // Wait for the email input to appear
    await page.waitForSelector("#email", { visible: true });

    // Type into the email and password fields
    await page.type("#email", "test@example.com");
    // await page.waitForTimeout(1000); // Wait for 1 second

    await page.type("#password", "password123");
    // await page.waitForTimeout(1000); // Wait for 1 second

    // Click the login button
    await page.click('button[type="submit"]');

    // Wait for navigation to the dashboard
    // await page.waitForNavigation({ waitUntil: "networkidle2" });

    await page.click('button[onclick*="/initiate-task"]');

    // Verify that we navigated to the dashboard (replace with your actual path)
    const currentURL = page.url();
    console.log("Current URL:", currentURL);
    if (currentURL === "http://localhost:5173/dashboard") {
      console.log("Login successful, navigated to dashboard");
    } else {
      console.log("Login failed or did not navigate to dashboard");
    }

    await browser.close();
  } catch (error) {
    console.error("Error occurred:", error);
  }
})();
