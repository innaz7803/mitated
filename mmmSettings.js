/**
 * @fileOverview mmmSettings Overview
 *
 * @author a1rqlzz
 * @modified 09/27/2016
 */
'use strict';


// Keep _trackJs as an empty object to avoid errors on non-FUZE sites
window._trackJs = {};
window.trackJs = {};
window.trackJs.configure = function() {
	// Do nothing, this is a placeholder to prevent errors from the hard-coded HTML
}

// Store the timestamp in a global object for load time metrics
window.settingsInitT = (new Date()).getTime();

//start mmmSettings
 var pageLevelJS = [],	//holder variable for page level modules
 	priorityModules = [],	//holder variable for page level modules that need to be loaded asap
	WT = [],			//holder variable for WebTrends
	wtPg = [],			//holder variable for WebTrends
	domReady = {},		//holder variable for document.ready replacement (used for core)
	breakTriggerEvent = {},		//holder variable for breakpoint events on specific pages
	kungFuReady = {}, //holder variable for document.ready replacement (used for kung fu modules)
	extLoadReady = {}, //holder variable for document.ready replacement (used for external modules)
	SETTINGS = {},		//holder variable for FUZE JS settings
		dcsMultiTrack = function(){
			if (window.console && window.console.log){
			window.console.log('dcsMultiTrack is not supported in this method.');
		}
		return false;
	};

//utility module loader
function loadPageModule(url){
	if (!url) {
		url = '';
	}
	pageLevelJS.push(url);
}

//utility module loader
function loadPriorityModule(url){
	if (!url) {
		url = '';
	}
	priorityModules.push(url);
}


function getURLParam(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//define page constants
function setConstants(environment){
	var envSub = '';

	if (!environment){
		environment = '3MTheme';
	}

	/*  This is a URL override method for the environment
		The intention of this override is to allow users to view sites that reference the stable folder as if it were using the 3MTheme folder
		URL Override should trump environment settings from the theme/site/page config
		Since urlHash has not been initialized, use a less robust method instead
	*/
	if (window.location.search.indexOf('environment=') > -1) {
		envSub = window.location.search;
		envSub = envSub.substring(envSub.indexOf('environment=')+12);

		if (envSub.indexOf('&') > -1) {
			environment = envSub.substring(0, envSub.indexOf('&'));
		} else {
			environment = envSub.substring(0, envSub.length);
		}
	}

	SETTINGS.LOG_CONSOLE = SETTINGS.IS_PRODUCTION ? false : true;
	SETTINGS.CACHE_BUSTER = SETTINGS.IS_PRODUCTION ? '' : Math.random();
	SETTINGS.USE_COMBINED_JAVASCRIPT = SETTINGS.IS_PRODUCTION ? true : false;
	SETTINGS.SCRIPT_PATH = '/3m_theme_assets/themes/' + environment + '/assets/scripts/' + (SETTINGS.USE_COMBINED_JAVASCRIPT ? 'build/' : 'src/');
	
	if (SETTINGS.DOMAIN !== undefined) {
		SETTINGS.SCRIPT_PATH = SETTINGS.DOMAIN + SETTINGS.SCRIPT_PATH.substring(1);
	}

	SETTINGS.openExternalLinks = true;

	// Set Theme GPN Constants
	SETTINGS.GPN = {
		'openFirstMenu': true,
		'skinnyNav': false
	}
}



//utility function to override production or dev environment
var forceStopped = false;
function setPageJS(env, forceStop) {
	if (!forceStop) {
		forceStop = false;
	}
	if (forceStopped === false){
		if (env === 'dev') {
			SETTINGS.IS_PRODUCTION = false;
			setConstants();
		}
		else if (env === 'prod') {
			SETTINGS.IS_PRODUCTION = true;
			setConstants();
		}
	}
	if (forceStop === true){
		forceStopped = true;
	}
}

//define default settings
SETTINGS.IS_PRODUCTION = true;

//add override to help debugging. 
if (getURLParam('setPageJS') === 'dev'){
	setPageJS('dev', true);
}
else if (getURLParam('setPageJS') === 'prod'){
	setPageJS('prod', true);
}

SETTINGS.APP_VERSION = '1.13.1';
setConstants();
