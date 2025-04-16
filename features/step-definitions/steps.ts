import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';


const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});



When(/^I am able to enter current age (.+)$/, async (currentage) => {
    await LoginPage.EnterCurrentAge(currentage)
});

When(/^I am able to enter age to plan to retire (.+)$/, async (retirementage) => {
    await LoginPage.EnterRetirementAge(retirementage)
});

When(/^I am able to enter current annual income (.+)$/, async (currentIncome) => {
    await LoginPage.EnterCurrentIncome(currentIncome)
});

When(/^I am able to enter spouse annual income (.+)$/, async (spouseIncome) => {
    await LoginPage.EnterSpouseIncome(spouseIncome)
});

When(/^I am able to enter current retirement saving balance (.+)$/, async (currentTotalSaving) => {
    await LoginPage.EnterCurrentTotalSaving(currentTotalSaving)
});

When(/^I am able to enter current saving each year for retirement (.+)$/, async (currentAnnualSaving) => {
    await LoginPage.EnterCurrentAnnualSaving(currentAnnualSaving)
});

When(/^I am able to enter rate of increase in savings each year (.+)$/, async (SavingRate) => {
    await LoginPage.EnterSavingRate(SavingRate)
});

When(/^I am able to enter social security overirede amount (.+)$/, async (socSecuOver) => {
    await LoginPage.EnterOverireSocialSecurityAmt(socSecuOver)
});

When(/^I am able to enter other income (.+)$/, async (addIncome) => {
    await LoginPage.EnterRetirementCalcuAmt(addIncome)
});

When(/^I am able to enter retirement duration (.+)$/, async (retireDuration) => {
    await LoginPage.EnterRetirementDuration(retireDuration)
});

When(/^I am able to enter retirement income (.+)$/, async (retireIncome) => {
    await LoginPage.EnterRetiremetIncome(retireIncome)
});

When(/^I am able to enter  inflation rate (.+)$/, async (inflationRate) => {
    await LoginPage.EnterExpInflationRate(inflationRate)
});

When(/^I am able to enter PreRetiremetIncome (.+)$/, async (preRetiremetIncome) => {
    await LoginPage.EnterPreRetiremetIncome(preRetiremetIncome)
});

When(/^I am able to enter PostRetiremetIncome (.+)$/, async (postRetiremetIncome) => {
    await LoginPage.EnterPostRetiremetIncome(postRetiremetIncome)
});

Then(/^I should validate the message (.+)$/, async (msg) => {
    await LoginPage.validateMessage(msg)
});

Then(/^I should validate the error message (.+)$/, async (msg) => {
    await LoginPage.validateErrMessage(msg)
});






