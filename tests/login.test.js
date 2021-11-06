import {Selector} from 'testcafe'

fixture("Login feature").page('http://automationpractice.com/')

test('The user can login in the app successfully', async (t) => {
    // Arrange
    const email = "john.doe@test.com"
    const password = "jdoe123"

    // Act
    await t.click('.login')
    await t.typeText("#email", email)
    await t.typeText("#passwd", password)
    await t.click("#SubmitLogin")

    // Assert
    await t.expect(Selector('.account').textContent).eql("john doe")
});
