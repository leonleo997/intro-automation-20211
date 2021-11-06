import {Selector} from 'testcafe'

fixture("Login feature").page('http://automationpractice.com/')

test('login feature', async (t) => {
    // Arrange
    const email = "john.doe@test.com"
    const password = "jdoe123"

    // act
    await t.click('.login')
    await t.typeText("#email", email)
    await t.typeText("#passwd", password)
    await t.click("#SubmitLogin")

    // assert
    await t.expect(Selector('.account').textContent).eql("john doe")
});