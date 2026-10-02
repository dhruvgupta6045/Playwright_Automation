import { expect, Locator, test } from "playwright/test";


test("Login Vtiger", async ({ page }) => {

    await page.goto("http://localhost:8888/");

    let username: Locator = page.locator("//input[@name='user_name']");
    await username.fill("admin");

    let password: Locator = page.locator("//input[@name='user_password']");
    await password.fill("admin");

    let loginBtn: Locator = page.locator("//input[@name='Login']");
    await loginBtn.click();

    let homePageTitle: string = await page.title();
    expect(homePageTitle).toContain("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");


})