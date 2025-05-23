import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test.describe("First tests", () => {
  test("Fill forms", async ({ page }) => {
    await expect(page.getByText("PW-test")).toBeVisible();
  });

  test("select datepicker", async ({ page }) => {
    // await page.getByText('Datepicker').click();
  });

  test("locator examples", async ({ page }) => {
    // By tag name
    await page.locator("input").first().click();

    // By id
    page.locator("#input");

    // By class value
    page.locator(".input");

    // By attribute
    page.locator('[data-testid="input"]');

    // By full class
    page.locator(
      '[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]'
    );

    // Combionation of selectors
    page.locator("input#input.input");
    page.locator('input[placeholder="input"]');
    page.locator('input[placeholder="input"][nbinput]');

    // By Xpath (not recommended)
    page.locator('//input[@placeholder="input"]');
    page.locator('//input[@id="inputEmail"]');

    // By partial text match
    page.locator(':text("Using")');

    // By exact tet match
    page.locator(':text-is("Using the Grid")');
  });

  // We should use locators that the user can see and interact with
  // like text, placeholder, etc.
  test("User facing locators", async ({ page }) => {
    // By Role
    await page.getByRole("button", { name: "submit" }).first().click();
    await page.getByRole("textbox", { name: "Email" }).first().click();

    // by Label
    await page.getByLabel("Email").first().click();

    // By placeholder
    await page.getByPlaceholder("Jane Doe").first().click();

    // By text
    await page.getByText("send").click();

    // By title
    await page.getByTitle("IoT Dashboard").click();

    // By test id (Not recommended as it is not user facing)
    // This is a custom attribute that we can add to the element
    //await page.getByTestId('input').click();
  });

  test("Locating child elements", async ({ page }) => {
    await page.locator('nb-card nb-radio :text-is("Option 1")').click();
    await page
      .locator("nb-card")
      .locator("nb-radio")
      .locator(':text-is("Option 2")')
      .click();

    await page
      .locator("nb-card")
      .getByRole("button", { name: "Sign in" })
      .first()
      .click();

    // Try to avoid the following aproach as the index can change, same with fisrt and last
    // Try to use unique locators
    await page.locator("nb-card").nth(3).getByRole("button").click();
  });

  test("Locating parent elements", async ({ page }) => {
    // hasText return the nb-card that containss "Using the Grid" in it, does not matter the order or the position
    await page.locator("nb-card", { hasText: "Using the Grid" }).getByRole("textbox", { name: "Email" }).fill("fakeEmail@subscribe.com");

    // We can also use the locator to find the parent element
    await page.locator("nb-card", { has: page.locator("#inputEmail1") }).getByRole("textbox", { name: "Email" }).fill("newEmail@subscribe.com");

    await page.locator("nb-card").filter({ hasText: "Basic form" }).getByRole("textbox", { name: "Email" }).click();

    await page.locator("nb-card").filter({ has: page.locator("#exampleInputPassword1") }).getByRole("textbox", { name: "password" }).click();

    // We can apply multiple filters
    // Select the nb-card that has checkbox and text Horizontal form
    await page
      .locator("nb-card")
      .filter({ has: page.locator("nb-checkbox") })
      .filter({ hasText: "Horizontal form" })
      .getByRole("textbox", { name: "password" })
      .click();

    //this is not recommended
    // Locate the text, then go up to the parent nb-card by using .. , then go down to the textbox
    await page
      .locator(":text-is('Using the Grid')")
      .locator("..")
      .getByRole("textbox", { name: "Email" })
      .click();
  });

  test("Reuse code", async ({ page }) => {
    const basicForm = page.locator("nb-card", { hasText: "Basic form" });
    const emailField = basicForm.getByRole("textbox", { name: "Email" });
    const passwordField = basicForm.getByRole("textbox", { name: "Password" });

    await emailField.fill("fakeEmail@subscribe.com");
    await passwordField.fill("123456"); // We can do this for the other elements as well, but this is just an example
    await basicForm.locator("nb-checkbox").click();
    await basicForm.getByRole("button", { name: "Submit" }).click()

    expect(emailField).toHaveValue("fakeEmail@subscribe.com");

  });

});
