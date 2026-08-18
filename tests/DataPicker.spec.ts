import { ElementHandle, expect, Locator, test } from "playwright/test";



test("Date Picker", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.fill("//input[@id='datepicker']", "03/03/2025")

    await page.waitForTimeout(5000);

})

test("Date Picker 2", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    let expectedYear: string = "2026";
    let expectedMonth: string = "August";
    let expectedDate: string = "8";

    await page.click("//input[@id='datepicker']");

    while (true) {

        let year: string | null = await page.locator("//span[@class='ui-datepicker-year']").textContent();
        let month: string | null = await page.locator("//span[@class='ui-datepicker-month']").textContent();

        if (year === expectedYear && month == expectedMonth) {
            break;
        }

        //await page.click("//a[@title='Next']");  // next

        await page.click("//a[@title='Prev']");  // back
    }

    let dates :Locator[]= await page.locator("//td[@data-handler='selectDay']/a[contains(@class,'ui-state-default')]").all();
    for (let dt of dates) {
        if (await dt.textContent() == expectedDate) {
            await dt.click();
            break;
        }
    }

    await page.waitForTimeout(5000);

    await expect(page.locator("//input[@id='datepicker']")).toHaveValue("08/08/2026");

    console.log("Pass");

})

