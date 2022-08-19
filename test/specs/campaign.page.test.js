const CampaignPage = require('../pageobjects/campaign.page');
const highlightTilesHdArr=['Speed cap','Highway pilot','Driver monitoring cameras','Care Key'];
const heroArr=['Amy','Summer','Linda & Molly','Alex'];
const footerArr=['Legal','Privacy','Social Media','Tell Us'];
const volvoLogoUrl='https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg';
const highlightLearnMoreHref='/intl/v/car-safety';
const innovLearnMoreHref='/intl/v/car-safety/safety-heritage';
const innovImgUrl='https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/seat-belt';

describe('Verify the UI of Volvo Campaign page', () => {
    //Test to verify if the Cookies popup is displayed only for the first loading
    it('Verify if Cookies popup is displayed only for the first loading',async () => {
        await CampaignPage.open();
        expect(await browser.checkElement(await CampaignPage.cookieAcceptButton,'cookieAcceptPopUp',{})).toEqual(0);
        await expect(CampaignPage.cookieAcceptButton).toBeDisplayedInViewport();        
        await CampaignPage.cookieAcceptButton.click();
        await CampaignPage.open();
        browser.maximizeWindow();
        await expect(CampaignPage.cookieAcceptButton).not.toBeDisplayedInViewport();
    })
    //Test to verify if the navbar is populated correctly
    it('Verify if Navbar is populated correctly', async () => {
        expect(await browser.checkElement(await CampaignPage.volvoNavbar,'volvoNavbar',{})).toEqual(0);
        // Verify if Volvo logo is displayed in the Viewport
        await expect(CampaignPage.volvoNavLogo).toHaveAttr('src',volvoLogoUrl);
        await expect(CampaignPage.volvoNavLogo).toBeDisplayedInViewport();
        expect(await browser.checkElement(await CampaignPage.volvoNavLogo,'volvoNavLogo',{})).toEqual(0);
        //Verify if Navbar options are displayed in the viewport
        //Our Cars Option
        await expect(CampaignPage.ourCarsButton).toBeDisplayedInViewport();
        expect(await browser.checkElement(await CampaignPage.ourCarsButton,'ourCarsButton',{})).toEqual(0);
        await CampaignPage.ourCarsButton.click();
        await CampaignPage.ourCarsMenu.waitForDisplayed();
        expect(await browser.checkElement(await CampaignPage.ourCarsMenu,'ourCarsMenuHybrids',{})).toEqual(0);
        await expect(CampaignPage.ourCarsMenu.$('//button[@aria-selected="true"]/p[1]')).toHaveText('Hybrids');
        await CampaignPage.ourCarsMenu.$('//button[1]').click();
        await CampaignPage.ourCarsMenu.$('//button[@aria-selected="true"]/p[1]').waitForDisplayed();
        await expect(CampaignPage.ourCarsMenu.$('//button[@aria-selected="true"]/p[1]')).toHaveText('Electric');
        expect(await browser.checkElement(await CampaignPage.ourCarsMenu,'ourCarsMenuElectric',{})).toEqual(0);
        await CampaignPage.ourCarsMenu.$('//button[3]').click();
        await expect(CampaignPage.ourCarsMenu.$('//button[@aria-selected="true"]/p[1]')).toHaveText('Mild hybrids');
        expect(await browser.checkElement(await CampaignPage.ourCarsMenu,'ourCarsMenuMildHybrids',{})).toEqual(0);
        await CampaignPage.ourCarsCloseButton.click();
        //Menu Option
        await expect(CampaignPage.menuButton).toBeDisplayedInViewport();     
        expect(await browser.checkElement(await CampaignPage.menuButton,'menuButton',{})).toEqual(0);
        await CampaignPage.menuButton.click();
        await CampaignPage.menuSideNavigation.waitForDisplayed();
        expect(await browser.checkElement(await CampaignPage.menuSideNavigation,'menuSideNavigation',{})).toEqual(0);
        await CampaignPage.menuCloseButton.click();
    });
    //Test to verify the story video
    it('Verify the story video is populated correctly', async () => {
        //Verify if Hero video is existing in the page as expected
        await expect(CampaignPage.heroVideo).toBeExisting();
        //Verify if Hero video controls and working as expected
        await expect(CampaignPage.watchTheStoryButton).toBeExisting();
        expect(await browser.checkElement(await CampaignPage.watchTheStoryButton,'watchTheStoryButton',{})).toEqual(0);  
        try {
            await expect(CampaignPage.heroVideoPauseButton).toBeExisting();
            expect(await browser.checkElement(await CampaignPage.heroVideoPauseButton,'heroVideoPauseButton',{})).toEqual(0);   
            await CampaignPage.heroVideoPauseButton.click();
            await expect(CampaignPage.heroVideoPlayButton).toBeExisting();
            expect(await browser.checkElement(await CampaignPage.heroVideoPlayButton,'heroVideoPlayButton',{})).toEqual(0);   
        } catch (error) {}
        //Verify if user is able to play the Hero video
        await CampaignPage.watchTheStoryButton.click();
        await browser.pause(5000);
        await browser.switchToFrame(await CampaignPage.heroVideoFrame);
        await expect(CampaignPage.heroVideoPlayerElem).toHaveAttributeContaining('class','playing-mode');
        await CampaignPage.heroVideoPlayerElem.click();
        await expect(CampaignPage.heroVideoPlayerElem).toHaveAttributeContaining('class','paused-mode');
        await browser.switchToParentFrame();
    })
    //Test to verify Campaign Highlight 
    it('Verify if Campaign Highlights are displayed correctly', async () => {
        await CampaignPage.textStatement.scrollIntoView();
        expect(await browser.checkElement(await CampaignPage.textStatement,'textStatement',{})).toEqual(0);  
        expect(await browser.checkElement(await CampaignPage.campaignHighlight,'campaignHighlight',{})).toEqual(0);    
        const highlightTilesLength=highlightTilesHdArr.length;
        await expect(CampaignPage.campaignHighlights).toBeElementsArrayOfSize(highlightTilesLength);
        for (let highlightTileCounter=0;highlightTileCounter<highlightTilesLength;highlightTileCounter++) {
            await expect(CampaignPage.campaignHighlights[highlightTileCounter].$('em')).toHaveText(highlightTilesHdArr[highlightTileCounter]);
            expect(await browser.checkElement(await CampaignPage.campaignHighlights[highlightTileCounter],'campaignHighlightTile_'+highlightTilesHdArr[highlightTileCounter],{})).toEqual(0);   
        }
        await expect(CampaignPage.highlightsLearnMoreLink).toHaveText('LEARN MORE ABOUT CAR SAFETY');
        await expect(CampaignPage.highlightsLearnMoreLink).toHaveHref(highlightLearnMoreHref);

    })
    //Test to verify hero videos
    it('Verify if Video of heroes are populated correctly', async () => {
        const herosArrLength=heroArr.length;
        await expect(CampaignPage.heroVideoContainer).toBeElementsArrayOfSize(herosArrLength);
        for (let heroCounter=0;heroCounter<herosArrLength;heroCounter++) {
            await CampaignPage.heroVideoContainer[heroCounter].scrollIntoView();
            await expect(CampaignPage.heroVideoContainer[heroCounter].$('em')).toHaveText(heroArr[heroCounter]);
            expect(await browser.checkElement(await CampaignPage.heroVideoContainer[heroCounter],'hero_'+heroArr[heroCounter],{})).toEqual(0);                
        }
    })
    //Test to verify Innovation section
    it('Verify if innovation section is populated correctly', async () => {
        await expect(CampaignPage.innovationLearnMoreLink).toBeExisting();
        await expect(CampaignPage.innovationLearnMoreLink).toHaveHref(innovLearnMoreHref);
        await expect(CampaignPage.innovationImg).toHaveAttrContaining('src',innovImgUrl);
    })
    //Test to verify the models display
    it('Verify if Volvo models are displayed correctly', async () => {
        const modelBaseHref='/intl/cars/';
        const modelBaseShopHref='https://www.volvocars.com/intl/build/';        
        await expect(CampaignPage.productListCarouselTitle).toHaveText('Explore our models');
        await CampaignPage.productListCarousel[0].scrollIntoView();
        await expect(CampaignPage.modelPreviousButton).toHaveAttr('aria-disabled','true');
        await expect(CampaignPage.modelNextButton).toHaveAttr('aria-disabled','false');
        await CampaignPage.modelNextButton.click();
        await expect(CampaignPage.modelPreviousButton).toHaveAttr('aria-disabled','false');
        await CampaignPage.modelPreviousButton.click();
        await expect(CampaignPage.modelPreviousButton).toHaveAttr('aria-disabled','true');
        let modelCounter = 1;
        for (model of await CampaignPage.modelList) {
            await CampaignPage.productCarousel.scrollIntoView();
            if (modelCounter>4 && ((await CampaignPage.modelNextButton.getAttribute('aria-disabled'))=='false')) {
                await CampaignPage.modelNextButton.click();
                await browser.pause(2000);
            }
            modelCounter++;
            let modelNameSpanList=await model.$$('a div h3 span');
            let modelNameFirstStr=await modelNameSpanList[0].getText();
            let modelNameFirstArr=modelNameFirstStr.split(" ");
            let modelnameSecondStr=await modelNameSpanList[1].getText();
            let modelnameSecondArr=modelnameSecondStr.split(" ");
            let modelName=modelNameFirstArr[0].toLowerCase()+'-'+modelnameSecondArr[modelnameSecondArr.length-1].toLowerCase();
            let modelHref=modelBaseHref+modelName;
            let modelShopHref=modelBaseShopHref+modelName;            
            await expect(model.$('a')).toHaveHref(modelHref);
            await expect(model.$('./div/a/div[2]/picture')).toBeExisting();
            await expect(model.$('./div/div/div/div[1]/a')).toHaveHref(modelHref);
            await expect(model.$('./div/div/div/div[1]/a')).toHaveText('LEARN');
            await expect(model.$('./div/div/div/div[2]/a')).toHaveHref(modelShopHref);
            await expect(model.$('./div/div/div/div[2]/a')).toHaveText('SHOP');
            expect(await browser.checkElement(await model,'model_'+modelName,{})).toEqual(0);    
        };        
        await expect(CampaignPage.productListCarousel[0]).toHaveText('RECHARGE');
        await expect(CampaignPage.productListCarousel[0]).toHaveHref('/intl/v/cars/recharge');
        expect(await browser.checkElement(await CampaignPage.productListCarousel[0],'rechargeLink',{})).toEqual(0);  
        await expect(CampaignPage.productListCarousel[1]).toHaveText('MILD HYBRID CARS');
        await expect(CampaignPage.productListCarousel[1]).toHaveHref('/intl/v/cars/other-powertrains');
        expect(await browser.checkElement(await CampaignPage.productListCarousel[1],'mildHybridcarsLink',{})).toEqual(0);  
    })
    //Test to verify declaration section
    it('Verify if declaration section is displayed correctly', async () => {
        await expect(CampaignPage.disclaimerSection).toBeExisting();
        expect(await browser.checkElement(await CampaignPage.disclaimerSection,'disclaimerSection',{})).toEqual(0);  
    })
    //Test to verify the footer section
    it('Verify if footer section is displayed correctly', async () => {
        await expect(CampaignPage.footer).toBeExisting();
        expect(await browser.checkElement(await CampaignPage.footer,'footer',{})).toEqual(0); 
        for (let footerLinkCounter;footerLinkCounter<footerArr.length;footerLinkCounter++) {
            await expect(CampaignPage.footerLinks[footerLinkCounter]).toHaveText(footerArr[footerLinkCounter]);
        } 
    })
    //Test to verify the feedback popup and Survey
    it('Verify if Feedback Popup and Survey is populated correctly', async () => {
        try{
            if (await $('#kampyleFormAnimation6128').waitForDisplayed()) {
                await browser.switchToFrame(await $('#kampyleFormAnimation6128'));
                await expect(CampaignPage.feedbackPopup).toBeExisting();
                expect(await browser.checkElement(await CampaignPage.feedbackPopup,'feedbackPopup',{})).toEqual(0); 
                await expect(CampaignPage.provideFeedbackButton).toHaveText('PROVIDE FEEDBACK');
                await expect(CampaignPage.feedbackPopupClose).toBeExisting();
                await CampaignPage.provideFeedbackButton.click();
                await CampaignPage.feedbackSurveyContent[0].waitForExist();
                await expect(CampaignPage.feedbackSurveyContent).toBeElementsArrayOfSize(4);
                await expect(CampaignPage.feedbackSurveyRatingStars).toBeElementsArrayOfSize(3);
                let feedbackSurveyRatingStar=await CampaignPage.feedbackSurveyRatingStars[0].$$('input');
                await expect(feedbackSurveyRatingStar).toBeElementsArrayOfSize(5);
                await expect(feedbackSurveyRatingStar[0]).toHaveElementClassContaining('ng-untouched');
                await feedbackSurveyRatingStar[0].click();
                await expect(feedbackSurveyRatingStar[0]).toHaveElementClassContaining('ng-touched');
                await expect(CampaignPage.feedbackSurveyClose).toBeExisting();
                await expect(CampaignPage.feedbackSurveyCloseButton).toBeExisting();
                await expect(CampaignPage.feedbackSurveySubmitButton).toBeExisting();
                await CampaignPage.feedbackSurveyCloseButton.click();
                await CampaignPage.feedbackSurveyContent[0].waitForExist({reverse:true});
                await browser.switchToParentFrame();
            }
        } catch (error) {}
                
    })
});


