const Page = require('./page');

class CampaignPage extends Page {
    /**
     * define selectors using getter methods
     */
     get cookieAcceptPopUp () {
        return $('#onetrust-banner-sdk div')
    }

    get cookieAcceptButton () {
        return $('#onetrust-accept-btn-handler')
    }

    get volvoNavbar () {
        return $('//*[@id="sitenav:topbar"]');
    }

    get volvoNavLogo () {
        return $('#site-nav-topbar-wrapper img');
    }

    get ourCarsButton () {
        return $('//*[@id="nav:topNavCarMenu"]');
    }

    get ourCarsMenu () {
        return $('//*[@data-autoid="nav:carMenuDesktop"]');
    }

    get ourCarsCloseButton () {
        return $('//*[@data-autoid="nav:carMenuCloseIcon"]');
    }

    get menuButton () {
        return $('#sitenav-sidenav-toggle');
    }

    get menuSideNavigation () {
        return $('//*[@id="nav:sideNavigation"]');
    }

    get menuCloseButton () {
        return $('//*[@data-autoid="nav:siteNavCloseIcon"]');
    }

    get heroVideoYoutube () {
        return $('video[src*="blob:https://www.youtube.com/"]');
    }

    get heroVideo () {
        return $('source[src*="https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/volvo_amm_hero"]');
    }

    get watchTheStoryButton () {
        return $('//*[@id="Video-1"]/section/div/div/div/button');
    }

    get heroVideoPlayButton () {
        return $('button[aria-label="play"]');
    }

    get heroVideoPauseButton () {
        return $('button[aria-label="pause"]');
    }

    get heroVideoFrame () {
        return $('//*[@id="Video-1"]//iframe');
    }

    get heroVideoPlayerElem () {
        return $('//div[@id="player"]/div[contains(@class,"html5-video-player")]');
    }

    get textStatement () {
        return $('#TextStatement-1')
    }

    get campaignHighlight () {
        return $('#IconCallouts-1');
    }

    get campaignHighlights () {
        return $$('//*[@id="IconCallouts-1"]/section/div/div[1]/div');
    }

    get highlightsLearnMoreLink () {
        return $('//*[@id="IconCallouts-1"]/section/div/div[2]/div/a');
    }

    get heroVideoContainer () {
        return $$('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div');
    }

    get innovationSection () {
        return $('#ImageWithText-1');
    }

    get innovationLearnMoreLink () {
        return $('a[aria-label="Learn more"]');
    }

    get innovationImg () {
        return $('//*[@id="ImageWithText-1"]/section/div[1]/div[1]/div/div/picture/img');
    }

    get productCarousel () {
        return $('#ProductListCarousel-1');
    }

    get modelList () {
        return $$('//div[@data-autoid="springCarouselPane:carouselItem"]');
    }

    get modelPreviousButton () {
        return $('//button[@data-autoid="springCarouselPreviousButton"]');
    }

    get modelNextButton () {
        return $('//button[@data-autoid="springCarouselNextButton"]');
    }

    get modelNextButton () {
        return $('//button[@data-autoid="springCarouselNextButton"]');
    }

    get productListCarousel () {
        return $$('//a[contains(@data-autoid,"ProductListCarousel:")]');
    }

    get productListCarouselTitle () {
        return $('//h2[@data-autoid="productListCarousel:title"]');
    }

    get disclaimerSection () {
        return $('#Disclaimer-1');
    }

    get footer () {
        return $('//*[@data-autoid="footer:container"]');
    }

    get footerLinks () {
        return $$('//*[@data-autoid="footer:links"]');
    }

    get feedbackPopup () {
        return $('//*[@id="form"]');
    }

    get provideFeedbackButton () {
        return $('#feedbackBtn');
    }

    get feedbackPopupClose () {
        return $('.closeButton');
    }

    get feedbackSurveyContent () {
        return $$('.live-form-content');
    }

    get feedbackSurveyClose () {
        return $('[label=Close Survey]');
    }

    get feedbackSurveyCloseButton () {
        return $('button=CLOSE');
    }

    get feedbackSurveySubmitButton () {
        return $('button=SUBMIT');
    }

    get feedbackSurveyRatingStars () {
        return $$('.ng-pristine ng-valid');
    }
      

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new CampaignPage();
