import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get acceptCookies () {
        return $('#button#onetrust-accept-btn-handler');
    }

    public get inputCurrentAge () {
        return $('#current-age');
    }

    public get inputRetirementAge () {
        return $('#retirement-age');
    }
    public get inputCurrentIncome () {
        return $('input#current-income');
    }

    public get inputSpouseIncome () {
        return $('input#spouse-income');
    }

    public get inputCurrentTotalSaving () {
        return $('input#current-total-savings');
    }

    public get  inputCurrentAnnualSaving () {
        return $('input#current-annual-savings');
    }

    public get  inputSavingRate () {
        return $('input#savings-increase-rate');
    }

    public get  SelectSocialSecurity () {
        return $('input#yes-social-benefits');
    }

    public get  SelectMaritalStatus () {
        return $('input#married');
    }

    public get  inputSocialSecurityOveride () {
        return $('input#social-security-override');
    }

    public get  inputAdjustDefaultValues () {
        return $('#retirement-form a');
    }
    
    public get  modalDialog () {
        return $('.modal-dialog input#additional-income');
    }

    public get  inputAdditionalIncome () {
        return $('#default-values-form input#additional-income');
    }

    public get  inputRetirementDuration () {
        return $('#default-values-form input#retirement-duration');
    }

    public get  inputInflation () {
        return $('#default-values-form input#include-inflation');
    }

    public get  enterInflationRate () {
        return $('#expected-inflation-rate');
    }

    public get  inputRetiremetIncome () {
        return $('input#retirement-annual-income');
    }

    public get  inputPreRetiremetRoi () {
        return $('input#pre-retirement-roi');
    }

    public get  inputPostRetiremetRoi () {
        return $('input#post-retirement-roi');
    }

    public get  inputSaveBtn () {
        return $('#default-values-form > div:nth-child(3) > div > div.col-sm-4 > button');
    }

    public get  inputSubmit () {
        return $('#retirement-form button.dsg-btn-primary');
    }

    public get  displayMessage () {
        return $('//*[@id="result-message"]');
    }

    public get  displayErrMessage () {
        return $('#invalid-retirement-age-error');
    }

    public async EnterCurrentAge (currentage: string) {
        browser.maximizeWindow();
        await browser.$('button#onetrust-accept-btn-handler').click();  
        await this.inputCurrentAge.setValue(currentage);
    }

    public async EnterRetirementAge (retirementage: string) {
        await this.inputRetirementAge.doubleClick();
        await this.inputRetirementAge.setValue(retirementage);
        
    }

    public async EnterCurrentIncome (currentIncome: string) {
        await this.inputCurrentIncome.doubleClick();
        await this.inputCurrentIncome.setValue(currentIncome);
        
    }

    public async EnterSpouseIncome (spouseIncome: string) {
        await this.inputSpouseIncome.doubleClick();
        await this.inputSpouseIncome.setValue(spouseIncome);
        
    }


    public async EnterCurrentTotalSaving (currentTotalSaving: string) {
        await this.inputCurrentTotalSaving.doubleClick();
        await this.inputCurrentTotalSaving.setValue(currentTotalSaving);
        
    }


    public async EnterCurrentAnnualSaving (currentAnnualSaving: string) {
        await this.inputCurrentAnnualSaving.doubleClick();
        await this.inputCurrentAnnualSaving.setValue(currentAnnualSaving);
        
    }


    public async EnterSavingRate (savingRate: string) {
        await this.inputSavingRate.doubleClick();
        await this.inputSavingRate.setValue(savingRate);
        await this.SelectSocialSecurity.doubleClick();
        await this.SelectMaritalStatus.waitForDisplayed();
        await this.SelectMaritalStatus.waitForEnabled();
        await this.SelectMaritalStatus.doubleClick();
        
    }

   
    public async EnterMaritalStatus () {
        await this.SelectMaritalStatus.doubleClick();
    }

    public async EnterOverireSocialSecurityAmt (ssAmt: string) {
        await this.inputSocialSecurityOveride.setValue(ssAmt);
        await this.inputAdjustDefaultValues.click();
        

    }

    public async EnterRetirementCalcuAmt (retAmt: string) {
        await browser.waitUntil(
            async () => (
                await this.modalDialog.isDisplayed())
        );
        
         const inputField = await browser.$('input#additional-income');
         await inputField.waitForDisplayed();
         await inputField.waitForEnabled();
         await inputField.doubleClick();
         await inputField.setValue(retAmt);
            
    }

    public async EnterRetirementDuration (retireDuration: string) {
        await this.inputRetirementDuration.doubleClick();
        await this.inputRetirementDuration.setValue(retireDuration);
       
        
    }

    public async EnterExpInflationRate (inflaRate: string) {
        await this.inputInflation.doubleClick();
        await this.enterInflationRate.setValue(inflaRate);
        
    }

    public async EnterRetiremetIncome (retiremetIncome: string) {
          await this.inputRetiremetIncome.doubleClick();
          await this.inputRetiremetIncome.setValue(retiremetIncome);
        
    }

    public async EnterPreRetiremetIncome (preRetiremetIncome: string) {
        await this.inputPreRetiremetRoi.doubleClick();
        await this.inputPreRetiremetRoi.setValue(preRetiremetIncome);
      
    }

  public async EnterPostRetiremetIncome (postRetiremetIncome: string) {
    await this.inputPostRetiremetRoi.doubleClick();
    await this.inputPostRetiremetRoi.setValue(postRetiremetIncome);
    await this.inputSaveBtn.doubleClick();
  
    }

    public async validateMessage (msg: string) {
        await this.inputSubmit.isDisplayed();
        await this.inputSubmit.click();
    
        await this.displayMessage.isDisplayed();
        await this.displayMessage.getValue() == msg;    
      
    }

    public async validateErrMessage (msg: string) {
            await this.inputSubmit.isDisplayed();
            await this.inputSubmit.click();
        
            await this.displayErrMessage.isDisplayed();
            await this.displayErrMessage.getText() == msg; 
                
    }

   
    public open () {
        return super.open('.html');
        

    }
}

export default new LoginPage();
