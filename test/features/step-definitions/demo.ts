import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function(){
    await browser.url("https://www.google.com")
})

When(/^Search with (.*)$/, async function(searchItem){
    console.log(`>> searchItem: ${searchItem}`);
    let search = await $(`[name=q]`)
    await search.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on first search result$/, async function(){
    let firstSearch = $(`<h3>`)
    await firstSearch.click()
})

Then(/^URL should match (.*)$/, async function(expectedURL){
    console.log(`>> expectedURL: ${expectedURL}`);
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL)
})