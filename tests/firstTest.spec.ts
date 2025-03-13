import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
});

test.describe('First tests', () => {
    test('Fill forms', async ({ page }) => {
        await expect(page.getByText('PW-test')).toBeVisible();
        await page.getByText('Form Layouts').click();
    });

    test('select datepicker', async ({ page }) => {
        await page.getByText('Datepicker').click();

    });

    test('locator examples', async ({ page }) => {
        await page.getByText('Form Layouts').click();

        // By tag name
        await page.locator('input').first().click()

        // By id
        page.locator('#input')

        // By class value
        page.locator('.input')

        // By attribute
        page.locator('[data-testid="input"]')

        // By full class
        page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

        // Combionation of selectors
        page.locator('input#input.input')
        page.locator('input[placeholder="input"]')
        page.locator('input[placeholder="input"][nbinput]')

        // By Xpath (not recommended)
        page.locator('//input[@placeholder="input"]')
        page.locator('//input[@id="inputEmail"]')

        // By partial text match
        page.locator(':text("Using")')

        // By exact tet match
        page.locator(':text-is("Using the Grid")')

    });

    // We should use locators that the user can see and interact with
    // like text, placeholder, etc.
    test('User facing locators', async ({ page }) => {
        await page.getByText('Form Layouts').click();

        // By Role
        await page.getByRole("button", {name: 'submit'}).first().click();
        await page.getByRole("textbox", {name: 'Email'}).first().click();

        // by Label
        await page.getByLabel('Email').first().click();

        // By placeholder
        await page.getByPlaceholder('Jane Doe').first().click();

        // By text
        await page.getByText('send').click();

        // By title
        await page.getByTitle('IoT Dashboard').click();

        // By test id (Not recommended as it is not user facing)
        // This is a custom attribute that we can add to the element
        //await page.getByTestId('input').click();

    })

});