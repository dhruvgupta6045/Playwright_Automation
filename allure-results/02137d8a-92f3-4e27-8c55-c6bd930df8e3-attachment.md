# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DataPicker.spec.ts >> Date Picker 2
- Location: tests\DataPicker.spec.ts:14:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator: locator('//input[@id=\'datepicke\']')
Expected: "08/08/2026"
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toHaveValue" with timeout 30000ms
  - waiting for locator('//input[@id=\'datepicke\']')

```

```yaml
- banner:
  - heading "Automation Testing Practice" [level=1]
  - paragraph: For Selenium, Cypress & Playwright
- list:
  - listitem:
    - link "Home":
      - /url: http://testautomationpractice.blogspot.com/
  - listitem:
    - link "Udemy Courses":
      - /url: https://www.pavanonlinetrainings.com/#udemy
  - listitem:
    - link "Online Trainings":
      - /url: https://www.pavanonlinetrainings.com/
  - listitem:
    - link "Blog":
      - /url: https://www.pavantestingtools.com/
  - listitem:
    - link "PlaywrightPractice":
      - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
- heading "Data Entry Form" [level=3]:
  - link "Data Entry Form":
    - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
- text: "Name:"
- textbox "Enter Name"
- text: "Email:"
- textbox "Enter EMail"
- text: "Phone:"
- textbox "Enter Phone"
- text: "Address:"
- textbox "Address:"
- text: "Gender:"
- radio "Male"
- text: Male
- radio "Female"
- text: "Female Days:"
- checkbox "Sunday"
- text: Sunday
- checkbox "Monday"
- text: Monday
- checkbox "Tuesday"
- text: Tuesday
- checkbox "Wednesday"
- text: Wednesday
- checkbox "Thursday"
- text: Thursday
- checkbox "Friday"
- text: Friday
- checkbox "Saturday"
- text: "Saturday Country:"
- combobox "Country:":
  - option "United States" [selected]
  - option "Canada"
  - option "United Kingdom"
  - option "Germany"
  - option "France"
  - option "Australia"
  - option "Japan"
  - option "China"
  - option "Brazil"
  - option "India"
- text: "Colors:"
- listbox "Colors:":
  - option "Red"
  - option "Blue"
  - option "Green"
  - option "Yellow"
  - option "Red"
  - option "White"
  - option "Green"
- text: "Sorted List:"
- listbox "Sorted List:":
  - option "Cat"
  - option "Cheetah"
  - option "Deer"
  - option "Dog"
  - option "Elephant"
  - option "Fox"
  - option "Giraffe"
  - option "Lion"
  - option "Rabbit"
  - option "Zebra"
- paragraph:
  - text: "Date Picker 1 (mm/dd/yyyy):"
  - textbox: 08/08/2026
- paragraph:
  - text: "Date Picker 2 (dd/mm/yyyy) :"
  - textbox
- text: "Date Picker 3: (Select a Date Range)"
- textbox:
  - /placeholder: Start Date
- text: to
- textbox:
  - /placeholder: End Date
- button "Submit"
- link "Home":
  - /url: https://testautomationpractice.blogspot.com/
- text: "Subscribe to:"
- link "Posts (Atom)":
  - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
- heading "Upload Files" [level=2]
- button "Choose File"
- button "Upload Single File"
- paragraph
- button "Choose File"
- button "Upload Multiple Files"
- paragraph
- heading "Static Web Table" [level=2]
- table:
  - rowgroup:
    - row "BookName Author Subject Price":
      - columnheader "BookName"
      - columnheader "Author"
      - columnheader "Subject"
      - columnheader "Price"
    - row "Learn Selenium Amit Selenium 300":
      - cell "Learn Selenium"
      - cell "Amit"
      - cell "Selenium"
      - cell "300"
    - row "Learn Java Mukesh Java 500":
      - cell "Learn Java"
      - cell "Mukesh"
      - cell "Java"
      - cell "500"
    - row "Learn JS Animesh Javascript 300":
      - cell "Learn JS"
      - cell "Animesh"
      - cell "Javascript"
      - cell "300"
    - row "Master In Selenium Mukesh Selenium 3000":
      - cell "Master In Selenium"
      - cell "Mukesh"
      - cell "Selenium"
      - cell "3000"
    - row "Master In Java Amod JAVA 2000":
      - cell "Master In Java"
      - cell "Amod"
      - cell "JAVA"
      - cell "2000"
    - row "Master In JS Amit Javascript 1000":
      - cell "Master In JS"
      - cell "Amit"
      - cell "Javascript"
      - cell "1000"
- heading "Dynamic Web Table" [level=2]
- table:
  - rowgroup:
    - row "Name Network (Mbps) Memory (MB) CPU (%) Disk (MB/s)":
      - columnheader "Name"
      - columnheader "Network (Mbps)"
      - columnheader "Memory (MB)"
      - columnheader "CPU (%)"
      - columnheader "Disk (MB/s)"
  - rowgroup:
    - row "Internet Explorer 2.7 Mbps 89.2 MB 0.1% 0.35 MB/s":
      - cell "Internet Explorer"
      - cell "2.7 Mbps"
      - cell "89.2 MB"
      - cell "0.1%"
      - cell "0.35 MB/s"
    - row "System 6.6 Mbps 54.8 MB 2.3% 0.75 MB/s":
      - cell "System"
      - cell "6.6 Mbps"
      - cell "54.8 MB"
      - cell "2.3%"
      - cell "0.75 MB/s"
    - row "Chrome 0.6 Mbps 81.8 MB 0.7% 0.01 MB/s":
      - cell "Chrome"
      - cell "0.6 Mbps"
      - cell "81.8 MB"
      - cell "0.7%"
      - cell "0.01 MB/s"
    - row "Firefox 4.7 Mbps 71.9 MB 2.9% 0.17 MB/s":
      - cell "Firefox"
      - cell "4.7 Mbps"
      - cell "71.9 MB"
      - cell "2.9%"
      - cell "0.17 MB/s"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 0.7%
- paragraph:
  - text: "Memory Size of Firefox process:"
  - strong: 71.9 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 0.6 Mbps
- paragraph:
  - text: "Disk space of Firefox process:"
  - strong: 0.17 MB/s
- heading "Pagination Web Table" [level=2]
- table:
  - rowgroup:
    - row "ID Name Price Select":
      - columnheader "ID"
      - columnheader "Name"
      - columnheader "Price"
      - columnheader "Select"
  - rowgroup:
    - row "1 Smartphone $10.99":
      - cell "1"
      - cell "Smartphone"
      - cell "$10.99"
      - cell:
        - checkbox
    - row "2 Laptop $19.99":
      - cell "2"
      - cell "Laptop"
      - cell "$19.99"
      - cell:
        - checkbox
    - row "3 Tablet $5.99":
      - cell "3"
      - cell "Tablet"
      - cell "$5.99"
      - cell:
        - checkbox
    - row "4 Smartwatch $7.99":
      - cell "4"
      - cell "Smartwatch"
      - cell "$7.99"
      - cell:
        - checkbox
    - row "5 Wireless Earbuds $8.99":
      - cell "5"
      - cell "Wireless Earbuds"
      - cell "$8.99"
      - cell:
        - checkbox
- list:
  - listitem:
    - link "1":
      - /url: "#"
  - listitem:
    - link "2":
      - /url: "#"
  - listitem:
    - link "3":
      - /url: "#"
  - listitem:
    - link "4":
      - /url: "#"
- complementary
- complementary:
  - heading "Tabs" [level=2]
  - link:
    - /url: https://wikipedia.org/wiki/
    - img
  - textbox
  - button "Submit"
  - heading "Dynamic Button" [level=2]
  - button "START"
  - heading "Alerts & Popups" [level=2]
  - button "Simple Alert"
  - button "Confirmation Alert"
  - button "Prompt Alert"
  - paragraph
  - button "New Tab"
  - button "Popup Windows"
  - heading "Mouse Hover" [level=2]
  - paragraph: Move the mouse over the button to open the dropdown menu.
  - button "Point Me"
  - heading "Double Click" [level=2]
  - text: "Field1:"
  - textbox: Hello World!
  - text: "Field2:"
  - textbox
  - button "Copy Text"
  - paragraph: Double click on button, the text from Field1 will be copied into Field2.
  - heading "Drag and Drop" [level=2]
  - paragraph: Drag me to my target
  - paragraph: Drop here
  - heading "Slider" [level=2]
  - paragraph:
    - text: "Price range:"
    - textbox "Price range:": $75 - $300
  - heading "SVG Elements" [level=2]
  - img
  - img
  - img
  - heading "Scrolling DropDown" [level=2]
  - textbox "Select an item"
  - heading "Labels And Links" [level=2]
  - heading "Mobile Labels" [level=4]
  - text: Samsung Real Me Moto
  - heading "Laptop Links" [level=4]
  - link "Apple":
    - /url: https://www.apple.com/
  - link "Lenovo":
    - /url: https://www.lenovo.com/
  - link "Dell":
    - /url: https://www.dell.com/
  - heading "Broken Links" [level=4]
  - link "Errorcode 400":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=400
  - link "Errorcode 401":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=401
  - link "Errorcode 403":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=403
  - link "Errorcode 404":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=404
  - link "Errorcode 408":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=408
  - link "Errorcode 500":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=500
  - link "Errorcode 502":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=502
  - link "Errorcode 503":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=503
  - heading "Visitors" [level=2]
  - img "A chart."
  - table:
    - rowgroup:
      - row:
        - columnheader
        - columnheader
    - rowgroup:
      - row "0 89":
        - cell "0"
        - cell "89"
      - row "1 72":
        - cell "1"
        - cell "72"
      - row "2 63":
        - cell "2"
        - cell "63"
      - row "3 57":
        - cell "3"
        - cell "57"
      - row "4 86":
        - cell "4"
        - cell "86"
      - row "5 88":
        - cell "5"
        - cell "88"
      - row "6 100":
        - cell "6"
        - cell "100"
      - row "7 88":
        - cell "7"
        - cell "88"
      - row "8 86":
        - cell "8"
        - cell "86"
      - row "9 70":
        - cell "9"
        - cell "70"
      - row "10 60":
        - cell "10"
        - cell "60"
      - row "11 88":
        - cell "11"
        - cell "88"
      - row "12 98":
        - cell "12"
        - cell "98"
      - row "13 94":
        - cell "13"
        - cell "94"
      - row "14 85":
        - cell "14"
        - cell "85"
      - row "15 84":
        - cell "15"
        - cell "84"
      - row "16 61":
        - cell "16"
        - cell "61"
      - row "17 47":
        - cell "17"
        - cell "47"
      - row "18 86":
        - cell "18"
        - cell "86"
      - row "19 91":
        - cell "19"
        - cell "91"
      - row "20 80":
        - cell "20"
        - cell "80"
      - row "21 97":
        - cell "21"
        - cell "97"
      - row "22 75":
        - cell "22"
        - cell "75"
      - row "23 56":
        - cell "23"
        - cell "56"
      - row "24 60":
        - cell "24"
        - cell "60"
      - row "25 80":
        - cell "25"
        - cell "80"
      - row "26 91":
        - cell "26"
        - cell "91"
      - row "27 76":
        - cell "27"
        - cell "76"
      - row "28 89":
        - cell "28"
        - cell "89"
      - row "29 31":
        - cell "29"
        - cell "31"
  - text: 8,567,096
- contentinfo:
  - table:
    - rowgroup:
      - row "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files ShadowDOM Mobiles Laptops Blog Choose File Youtube":
        - cell "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files":
          - heading "Form" [level=2]
          - heading "Section 1" [level=4]
          - paragraph: This is a paragraph in Section 1.
          - textbox
          - button "Submit"
          - heading "Section 2" [level=4]
          - paragraph: This is a paragraph in Section 2.
          - textbox
          - button "Submit"
          - heading "Section 3" [level=4]
          - paragraph: This is a paragraph in Section 3.
          - textbox
          - button "Submit"
          - heading "Footer Links" [level=2]
          - list:
            - listitem:
              - link "Home":
                - /url: http://testautomationpractice.blogspot.com/
            - listitem:
              - link "Hidden Elements & AJAX":
                - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
            - listitem:
              - link "Download Files":
                - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
        - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube":
          - heading "ShadowDOM" [level=2]
          - text: Mobiles Laptops
          - link "Blog":
            - /url: https://www.pavantestingtools.com/
          - textbox
          - checkbox
          - button "Choose File"
          - link "Youtube":
            - /url: https://www.youtube.com/@sdetpavan/videos
  - text: Theme images by
  - link "merrymoonmary":
    - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
  - text: . Powered by
  - link "Blogger":
    - /url: https://www.blogger.com
  - text: .
```

# Test source

```ts
  1  | import { ElementHandle, expect, Locator, test } from "playwright/test";
  2  | 
  3  | 
  4  | 
  5  | test("Date Picker", async ({ page }) => {
  6  |     await page.goto("https://testautomationpractice.blogspot.com/");
  7  | 
  8  |     await page.fill("//input[@id='datepicker']", "03/03/2025")
  9  | 
  10 |     await page.waitForTimeout(5000);
  11 | 
  12 | })
  13 | 
  14 | test("Date Picker 2", async ({ page }) => {
  15 |     await page.goto("https://testautomationpractice.blogspot.com/");
  16 | 
  17 |     let expectedYear: string = "2026";
  18 |     let expectedMonth: string = "August";
  19 |     let expectedDate: string = "8";
  20 | 
  21 |     await page.click("//input[@id='datepicker']");
  22 | 
  23 |     while (true) {
  24 | 
  25 |         let year: string | null = await page.locator("//span[@class='ui-datepicker-year']").textContent();
  26 |         let month: string | null = await page.locator("//span[@class='ui-datepicker-month']").textContent();
  27 | 
  28 |         if (year === expectedYear && month == expectedMonth) {
  29 |             break;
  30 |         }
  31 | 
  32 |         //await page.click("//a[@title='Next']");  // next
  33 | 
  34 |         await page.click("//a[@title='Prev']");  // back
  35 |     }
  36 | 
  37 |     let dates :Locator[]= await page.locator("//td[@data-handler='selectDay']/a[contains(@class,'ui-state-default')]").all();
  38 |     for (let dt of dates) {
  39 |         if (await dt.textContent() == expectedDate) {
  40 |             await dt.click();
  41 |             break;
  42 |         }
  43 |     }
  44 | 
  45 |     await page.waitForTimeout(5000);
  46 | 
> 47 |     await expect(page.locator("//input[@id='datepicker']")).toHaveValue("08/08/2026");
     |                                                            ^ Error: expect(locator).toHaveValue(expected) failed
  48 | 
  49 | })
  50 | 
  51 | 
  52 | 
```