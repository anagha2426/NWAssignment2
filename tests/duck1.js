module.exports = {
    'Demo test DuckDuckGo search' : function (browser) {
      browser
        .url('https://duckduckgo.com/')
        .pause(2000)
        .waitForElementVisible('body', 5000)
        .waitForElementVisible('#search_form_input_homepage', 5000)
        .pause(3000)
        .click('#search_form_input_homepage')
        .keys(`nightwatch js`)
        .pause(5000)
        .waitForElementVisible('#search_button_homepage', 5000)
        .click('#search_button_homepage')
        .assert.containsText('#web_content_wrapper', 'Nightwatch.js')
        .saveScreenshot(`./output/search.png`)
        .end();
    }
};