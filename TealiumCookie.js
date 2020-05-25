window.utag_data={ga_eventCategory:"",ga_eventAction:"",ga_eventLabel:"",ga_eventValue:""};window.udo="";!function(e){"use strict";e.require;e.requirejs;var i=e.define;i("kungfu/Tealium/TealiumCookie",["require","jquery","lib/Util","domReady!","controllers/ResponsiveAccordion","kungfu/Tealium/dcsExternal","kungfu/Tealium/dcsInternal","kungfu/Tealium/tealiumDataLayer","kungfu/Tealium/tealiumLinkEvents"],function(e){var i=e("controllers/ResponsiveAccordion"),t=e("jquery"),o=(e("lib/Util"),e("kungfu/Tealium/tealiumDataLayer"));$debug("**** Require Tealium UDO Module **** ","mmmTealium");window.udo=new o;t(window).trigger("udoReady");var n=e("kungfu/Tealium/tealiumLinkEvents");$debug("Default link events:","mmmTealium");$debug(n,"mmmTealium");wtPg=WT;e("kungfu/Tealium/dcsExternal"),e("kungfu/Tealium/dcsInternal");$debug("Gate passed","mmmTealium");e(["domReady!"],function(){$debug("**** Tealium Set Up Started **** ","mmmTealium");if(t("#js-cookieBox").length>0){$debug("Tealium Banner content found, initializing privacy management banner and plugin...","mmmTealium");new a(t("#js-cookieBox"))}else{$debug("No Tealium DIV was found, initializing core plugin...","mmmTealium");new a}});var a=function(e){this.privacyEnabled=!1;this.cookieBox="";this.cookieAccept="";this.cookiePrefs="";this.profile=window.SETTINGS.LOCALE.toLowerCase().replace("_","-");this.domain=".com";this.profileOverride=urlHash.tealium;this.eventsJS="kungfu/webtrends/mmm_tealium_events";this.tealiumBlacklist=["utb%3Aopen"===urlHash.uri,void 0!==urlHash.uri&&urlHash.uri.indexOf("op:")>-1,t("#utb-shelf").length>0];if(void 0!==e){this.privacyEnabled=!0;this.cookieBox=e}window.SETTINGS.Tealium&&(this.profile=window.SETTINGS.Tealium);if(this.profileOverride){$debug("Overriding Tealium profile with: "+this.profileOverride,"mmmTealium");this.profile=this.profileOverride.toLowerCase().replace("_","-")}else $debug("Tealium profile: "+this.profile,"mmmTealium");(location.hostname.indexOf(".cn")>-1||2==SETTINGS.LOCALE.indexOf("_CN"))&&(this.domain=".cn");if(window.SETTINGS.tealiumBlacklist){$debug("Found new tealium do-not-load condition: "+window.SETTINGS.tealiumBlacklist,"mmmTealium");this.tealiumBlacklist.push(window.SETTINGS.tealiumBlacklist)}this.init()};a.prototype.init=function(){var e,i,t=!0;this.setupHandlers();this.getLayout();$debug("Checking Tealium do-not-load conditions:","mmmTealium");$debug(this.tealiumBlacklist,"mmmTealium");for(e=0,i=this.tealiumBlacklist.length;i>e;e++){$debug("Running Tealium black list test: "+this.tealiumBlacklist[e],"mmmTealium");if(this.tealiumBlacklist[e]){$debug("Black list test failed, Tealium will not load on this page","mmmTealium");t=!1}}t&&this.getTealium();this.privacyEnabled&&this.prviacyInit();return this};a.prototype.setupHandlers=function(){var e=this;t(".js-cookiePrefs").on("click",function(i){i.preventDefault();e.getPrivacyManagement()});t(".js-gdprPrefs").on("click",function(e){e.preventDefault();utag.gdpr.showConsentPreferences()});this.setLinkEvents();return this};a.prototype.getLayout=function(){var e=$getLayout();t("head").append('<meta name="WT.z_layout" content="'+e+'" />')};a.prototype.privacyHandlers=function(){var e=this,i=t(".MMM--cookieBox").height();if(0!==e.cookieBox.length){t(".MMM--theme-hd").css("margin-top",i);t(".MMM--cookieBox").css({position:"fixed",width:"inherit","z-index":"9999"});t(".MMM--themeWrapper").on({"click.cookieEvent":function(i){var o=t(i.target);if(o.is("a")){$debug("anchor tag has been clicked","mmmTealium");if(o.is("#js-updatePrivacyPolicy , .MMM--ftLegalPrivacy a:eq(1) "))$debug("Privacy policy has been clicked","mmmTealium");else if(o.is("#js-cookiePrefs")){i.preventDefault();e.getPrivacyManagement();$debug("cookie prefrence has been clicked","mmmTealium")}else if(o.is(".tealium *"))$debug("updating cookie prefrence","mmmTealium");else{e.setBannerCookie();utag_trackingOptIn();$debug("cookie set","mmmTealium")}}}})}return this};a.prototype.getTealium=function(){var i=this,t="https://tags.tiqcdn"+this.domain+"/utag/3m/"+this.profile+"/prod/utag.js";$debug("Appending utag.js...","mmmTealium");t=window.SETTINGS.tealiumURL?window.SETTINGS.tealiumURL:t;window.SETTINGS.utagURL=t;e([t],function(){e([i.eventsJS])});return this};a.prototype.prviacyInit=function(){var e=this;$debug("Tealium Status: "+$getCookie("mmmBanner"),"mmmTealium");void 0==$getCookie("mmmBanner")&&$setCookie("mmmBanner","waiting");if("waiting"===$getCookie("mmmBanner")&&this.cookieBox.attr("data-url"))t.ajax({url:e.cookieBox.attr("data-url"),success:function(i){e.appendCookieBox(i,e)}});else if(!this.cookieBox.attr("data-url")&&"accepted"!==$getCookie("mmmBanner")){$debug("Displaying static cookie box content...","mmmTealium");e.cookieBox.show();e.initComponents();e.privacyHandlers()}return this};a.prototype.setBannerCookie=function(){for(var e,i,o=document.cookie.split(";"),n=new Date,a=0,m=o.length;m>a;a++){var u=o[a].split("=");u[0].indexOf("OPTOUTMULTI")>-1&&(e=decodeURIComponent(u[1]))}i=e.split("|");$setCookie("mmmBanner","accepted");this.cookieBox.hide();t(".MMM--themeWrapper").off("click.cookieEvent");t(".MMM--theme-hd").css("margin-top","0px");for(var a=0;a<i.length;a++){var l=i[a].split(":"),r=l[0]+":0";i[a]=r}$debug("Tealium OPTOUTMULTI: "+i.join("|"),"mmmTealium");n.setDate(n.getDate()+90);document.cookie="OPTOUTMULTI="+i.join("|")+";path=/;domain="+utag.cfg.domain+";expires="+n.toGMTString()+";";return this};a.prototype.getPrivacyManagement=function(){$debug("Loading Tealium Opt Out Menu...","mmmTealium");if("undefined"==typeof e){var e=document.createElement("SCRIPT");e.type="text/javascript";e.src="https://tags.tiqcdn.com/utag/3m/"+this.profile+"/prod/utag.tagsOptOut.js?cb="+Math.random();document.getElementsByTagName("head")[0].appendChild(e)}else __tealium.load();return this};a.prototype.appendCookieBox=function(e,i){$debug("Appending Tealium Content to "+this.cookieBox.attr("id"),"mmmTealium");i.cookieBox.show().append(e);i.initComponents();i.privacyHandlers();return i};a.prototype.initComponents=function(){this.largerAccordion=new i({selector:".js-contentToggle-trigger_twisty",alwaysActive:!0,jumpsToTop:!1,isTwisty:!0,application:this})};a.prototype.setLinkEvents=function(){t.each(n,function(e,i){$debug("Attaching event for: "+e,"mmmTealium");$debug('    jQuery selector: "'+i.selector+'" on event: "'+i.onEvent,"mmmTealium");$debug("    Existing UDO variables to carry over:","mmmTealium");$debug(void 0!==i.udoVars?i.udoVars:"      none","mmmTealium");$debug("    New UDO variables to define:","mmmTealium");$debug(void 0!==i.customVars?i.customVars:"      none","mmmTealium");t(i.selector).on(i.onEvent,function(o,n){if(void 0!==n&&n.linkFired)return!0;$debug('utag.link not yet fired for "'+e+'", firing now...',"mmmTealium");window.udo.linkClick(e,i.udoVars,i.customVars,t(this),i.onEvent)})})}})}(MMMRequire);
//# sourceMappingURL=TealiumCookie.js.map