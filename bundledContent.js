/*
 *  SNAPS Fuze Consolidated javascript 
 *  Version: 4.2.2.88 (release-e328a9166)
 */

/* snapsManager is an object that contains everything that SNAPS pages use (functions, variables, etc.) */



/* Example custom Share widget
snapsCustomShares = {
    "AwesomeShare": {
        class: "snaps--testIcn icnAwesomeShare",
        href: "http://www.google.com?referrer=" + location.href + "&WT=superCool&title=" + document.title
    }
}
*/

var snapsManager = {
    vars: {
        pageLoadComplete: false,
        baseUrl: !location.href.substring(0, location.href.indexOf("~")) ? location.href : location.href.substring(0, location.href.indexOf("~")),
        ajaxBase: "/wps/PA_Snaps286/AjaxServlet?",
        mainImgBoxHeight: 0,
        benefitsBoxHeight: 0,
        maxTitleHeight: 86,
        jsPageTitle: "",
        jsLocale: "",
        jsLoaderImg: "/3m_theme_assets/themes/3MTheme/assets/images/lazy-preloader-clear.gif",
        txtLoading: "",
        jsRecsPerPage: "",
        snapsPaginationLink: "",
        loadTo: "",
        scrollTo: "", 
		txtCompareError: "",
        placeID: "",
        MailID: "",
        placementID: "",
        placementLabelset: "",
        globalLabelset: "",
        jsEndCount: "",
        jsTotalCount: "",
        jsProductID: "",
        jsMainImage: "",
        jsBVClientName: "",
        jsBVDeployZone: "",
        jsBVEnabled: "",
        jsQAEnabled: "",
        jsBVInline: "",
        jsBVTabName: "",
        jsModelsCTA: "",
        jsModelsTabName: "",
        txt_Img360Placeholder: "",
        txt_thankyou_for_contacting:"",
        txt_response_message:"",
        txt_viewImage: "",
        txt_viewImages: "",
        txt_viewImgNdVid: "",
        txt_viewImgsNdVid: "",
        txt_viewImgNdVids: "",
        txt_viewImgsNdVids: "",
        txt_legacy_viewImages: "",
        txt_legacy_viewImagesNVid: "",
        txt_prodResults_singlePrdct:"",
        txt_prodResults_nmbrOfPrdct:"",
		txt_productDetails_wtbErrorMsg:"",
        bvProducts: {
            productIds: {}
        },
        imagecelumId: "",
        pvwUrl: "",
        bcPlayerId: "",
        bcVideoId: "",
        bcPlayerType: "",
        bcVidId: "",
        bcProxyUrl: "/apxy/proxy?urlAlias=",
        player: "",
        bcMod: "",
        bcExp: "",
        snapsDimensionSectn: "",
        bcLoading: 0,
        img360Count:0,
        imageCount:0,
        allModelTotCount:0,
        itemCount:0,
        scrlltrgt: "",
        clickControl: false,
        scrollControl: true,
		firstTab:'',
        showProdImg:0,
        modelSelBxContr: [],
        ajaxModelSelBxContr: [],
        modelSelBxPrevReqUrl : "",
        chatSrvUrl: "",
        txt_contactUs_mail_subject: "",
        txt_refinements_select: "",
        txt_navigation_remove: "",
        resultsPerPage: "",
		txtNavFilter: "",
        check_isParent: "",
        selector_navigation: "",
        txt_whereToBuy: "",
		txt_noInfoAvail_Selection: "",
		defaultPushState : undefined,		
		truncateNameBySpace: "snapsManager.vars.truncateNameBySpace",
		popStateIndicator: false,
        defVidImgUrl: "/wps/PA_Snaps286/bundledContent?assetId=xsl/fuze/NoVideo.jpg",
        parentWTBObj: {},
        preSelectCnt: (location.href.indexOf("preselect") == -1 ? 1 : 0),
        refinementUrlToHistory: "",
		bcPlayerInfo: {
			1300793176001:{ actId:782847723001, pId: "Bkh3xE37x" },
			1363991536001:{ actId:1231248590001, pId: "HkONzVnme" },
			1429744018001:{ actId:1226740749001, pId: "BJEzbH3Qx" },
			1493748004001:{ actId:1231248591001, pId: "rJ83GNh7l" },
			1494079984001:{ actId:958462695001, pId:"rkeWX7Vnml" },
			1300495914001:{ actId:900160696001, pId:"r1yj74hXe" },
			1490404457001:{ actId:1231248592001, pId:"SkxfVNnXl" },
			3234636295001:{ actId:1231248593001, pId:"SkwmgVnQg" },
			1273986095001:{ actId:1265527901001, pId:"ryw20m2ml" },
			3259523391001:{ actId:2635130879001, pId:"HyfM0801x" },
			3255438718001:{ actId:3251589553001, pId:"Sklbdy4hmg" }
		},
        bcVidCarouselIdx: 0,
        compareProducts: {
            length: 0
        },
        wt: {
            /* Need to update these for FUZE per Dave Mickelson when available */
            sortChange: ["WT.ac","SNAPS UI clicks: [value]","DCS.dcsuri",window.location.pathname+"SNAPS UI clicks","WT.dl","99","WT.cg_n","SNAPS UI clicks","WT.cg_s","[value]"],
            removeRefinement: ["DCS.dcsuri", window.location.pathname + "Gallery-Attribute-Click/", "WT.ti", "Gallery Attribute Click", "WT.z_fuzeattclose", "[text]", "WT.z_fuzegallvl", "[pageTitle]", "WT.dl", "99"],
            quickView: ["WT.ac","SNAPS UI clicks: Quick view","DCS.dcsuri",window.location.pathname+"SNAPS UI clicks","WT.dl","99","WT.cg_n","SNAPS UI clicks","WT.cg_s","Quick view","WT.z_qview","1","WT.pn_sku","[attr:data-prodid]"],
            loadResults: ["WT.ac","SNAPS UI clicks: Show Next","DCS.dcsuri",window.location.pathname+"SNAPS UI clicks","WT.dl","99","WT.cg_n","SNAPS UI clicks","WT.cg_s","Show Next"],
            searchResult: ["DCS.dcsuri", window.location.pathname + "SearchResultLinkClick", "WT.ti", document.title + " - Search Result Link", "WT.z_sresult", "1", "WT.dl", "99"],
            //tabHead: ["DCS.dcsuri", window.location.pathname + "ProductDetailTabClick", "WT.ti", document.title + " - Product Detail Tab Click", "WT.cg_n", "Product Catalog", "WT.cg_s", "Product Detail Tab Click: [text]", "WT.dl", "99"],
            tabHead:["WT.ac","PDP Jump Menu: [text]","DCS.dcsuri",window.location.pathname +"PDP Jump Menu","WT.dl","99",'WT.cg_n',"Engagement Events","WT.cg_s","PDP Jump Menu: [text]"],
            detailsTab: ["DCS.dcsuri", window.location.pathname + "Product-Detail-Tab/[text]", "WT.ti", "Product Detail Tab: [text]", "WT.z_fuzepdptab", "[text]"],
            tabItem: ["DCS.dcsuri", window.location.pathname + "ProductDetailTabItemClick", "WT.ti", document.title + " - Product Detail Tab Item Click", "WT.cg_n", "Product Catalog", "WT.cg_s", "Product Detail Tab Item Click: [text]", "WT.dl", "99"],
            breadcrumb: ["DCS.dcsuri", window.location.pathname + "Breadcrumblink/", "WT.ti", "Breadcrumb link click", "WT.z_fuzebrlink", "[text]", "WT.dl", "99"],
            viewDetails: ['WT.ac','PDP click:[text]','DCS.dcsuri',window.location.pathname +'PDP click','WT.dl','99','WT.cg_n','Engagement Events','WT.cg_s','PDP click:[text]'],
            qvDetails: ["DCS.dcsuri", window.location.pathname + "Quick-View/[attr:data-prodid]/Product-Detail-Click", "WT.ti", "Quick-View: [attr:data-prodid] Product Detail click", "WT.z_fuzeqviewpdp", "[attr:data-prodid]", "WT.dl", "99"],
            docLink: ["DCS.dcsuri", window.location.pathname + "Product-Detail-Document-Download/", "WT.ti", "Product Detail Download: [text]", "WT.z_fuzepdpdl", "[text]", "WT.dl", "20"],
            imageThumb: ["DCS.dcsuri", window.location.pathname + "Product-Detail-Thumbnail/", "WT.ti", "Product Detail Thumbnail: [attr:alt]", "WT.z_fuzepdptn", "[attr:alt]", "WT.dl", "99"],
            viewImage: ['WT.ac','PDP click:[text]','DCS.dcsuri',window.location.pathname +'PDP click','WT.dl','99','WT.cg_n','Engagement Events','WT.cg_s','PDP click:[text]'],
            relatedProd: ['WT.ac','PDP click Related Products:[text]','DCS.dcsuri',window.location.pathname +'PDP click Related Products','WT.dl','99','WT.cg_n','Engagement Events','WT.cg_s','PDP click Related Products:[attr:title]'],
            where_to_buy_button:["WT.cg_n","Conversion Events","WT.cg_s","Link Click: Where to Buy","WT.si_cs","1","WT.z_wtbclick","1","WT.ac","Link Click: Where to Buy","WT.dl","99"],
            snapsAttributesLink:["WT.cg_n","[pageTitle]" + "_" + "[dimensionValue] clicks","WT.cg_s","[refinement]","WT.dl","99","WT.z_snaps_hdg","[pageTitle]","[dimensionKey]","[dimensionValue]"],
            gridView:["WT.ac","SNAPS UI clicks: Grid view","DCS.dcsuri",window.location.pathname + "SNAPS UI clicks","WT.dl","99","WT.cg_n","SNAPS UI clicks","WT.cg_s","Grid view"],
            listView:["WT.ac","SNAPS UI clicks: List view","DCS.dcsuri",window.location.pathname + "SNAPS UI clicks","WT.dl","99","WT.cg_n","SNAPS UI clicks","WT.cg_s","List view"],
            addCompare :["WT.ac","SNAPS UI clicks: Add to comparison","DCS.dcsuri",window.location.pathname+"SNAPS UI clicks","WT.dl","99","WT.cg_n","SNAPS UI clicks","WT.cg_s","Add to comparison","WT.z_addcompare","1","WT.pn_sku","[attr:data-prodid]"],
            viewAllDetails:["WT.ac","PDP click:[text]","DCS.dcsuri", window.location.pathname + " PDP clicks","WT.dl","99","WT.cg_n","Engagement Events","WT.cg_s"," PDP click:[text]"]
        }
    },
    jQueryTest: function(){
        if(typeof $ == "function") snapsManager.init();
        else setTimeout(snapsManager.jQueryTest, 500);
    },
    // This is essentially our $(document).ready function
    init: function(){
        
        // Disabling double tapping in iOS devices      
        (function($) {
            var IS_IOS = /iphone|ipad/i.test(navigator.userAgent);
            $.fn.nodoubletapzoom = function() {
                if (IS_IOS)
                    $(this).bind('touchstart', function preventZoom(e) {
                        var t2 = e.timeStamp
                        , t1 = $(this).data('lastTouch') || t2
                        , dt = t2 - t1
                        , fingers = e.originalEvent.touches.length;
                        $(this).data('lastTouch', t2);
                        
                        if (!dt || dt > 500 || fingers > 1) return; // not double-tap
                        
                        e.preventDefault(); // double tap - prevent the zoom
                        // also synthesize click events we just swallowed up
                        //$(this).trigger('click').trigger('click');
                    });
            };
        })(jQuery);
        
        $(".carouselContainer").nodoubletapzoom();
        
        snapsManager.loadVars();
        //snapsManager.snapsUrlFix();
        snapsManager.breadcrumbFix();
        if($(".js-loadRefinements").length > 0) snapsManager.moreRefinements();
        if($(".SNAPS--headerBanner").length > 0) snapsManager.positionNav();
        if($(".js-sortable").length > 0) snapsManager.sortable();
        if($(".js-pageLoader").length > 0) snapsManager.paginationLoader();
        if(location.hash) snapsManager.pageLoad();
		if(snapsManager.vars.bcVideoId != '' && snapsManager.vars.bcPlayerId != '') snapsManager.bcHTML5Init();
        /* if($(".js-qvTrigger").length > 0) snapsManager.quickViewInit(); */
        if($(".MMM--tileTitle_tileView").length > 0) snapsManager.normalizeTitles();
        if($(".js-toggleCheckbox").length > 0 || $(".js-compareBack").length > 0) snapsManager.compareInit();
        if($(".js-viewToggle").length > 0) snapsManager.viewToggleInit();
        if(snapsManager.vars.jsBVInline == "true") snapsManager.bvInline();
        if($(".js-thumbList li").length > 0) snapsManager.thumbnailInit();
        if(snapsManager.vars.allModelTotCount > 0) snapsManager.prodResultsInit();
        if(snapsManager.vars.jsBVEnabled == "true") snapsManager.bvInit();
        if(snapsManager.vars.jsQAEnabled =="true") snapsManager.bvQAInit();
        if(snapsManager.vars.jsModelsCTA =="true") snapsManager.modelsCTAInit();
        //if(snapsManager.vars.bcVideoId != '') snapsManager.bcInit();		
        if($(".SNAPS--share-container").length > 0) snapsManager.shareInit();
        if($(".js-moreProductRefinements").length > 0) snapsManager.moreProductRefinements();
        if($(".js-detailPageLoader").length > 0) snapsManager.nextProductsResults();
        //if($(".js-Where_to_buy").length > 0) snapsManager.moreWTB();    
        // image360 changes
        if($(".js-360Player").length > 0) snapsManager.init360();
        if($('#js-inlineModal').length > 0) snapsManager.lightBoxFix();
  if($('.js-test').length >0) snapsManager.checklightBoxFix();
        if(snapsManager.vars.allModelTotCount == 1) snapsManager.oneAvailableBtn(); 
        if($(".MMM--moreRelated_products").length>0) snapsManager.moreRelatedProds();
        if($('.SNAPS--allModelsSection--container').length>0) snapsManager.allModelTableScroll();
        if($(".MMM--breadcrumbs").hasClass("MMM--breadcrumbs_clean")) snapsManager.espaBreadCrumbSection();
        if($(".SNAPS--ContactContainer").length > 0) snapsManager.enableContactUsCTA();
        snapsManager.wtInit();
        //if($(".SNAPS--whereToBuybtn .MMM-wtb-disabled").length > 0) snapsManager.arrangeWtb();
        snapsManager.vars.pageLoadComplete = true;
        snapsManager.sectnToggleEffect();
        snapsManager.searchInit();
        snapsManager.addPreselect();
		
		/*// Ensuring script running only on Gallery  
		// before wiping the Previous Session
		if ($(".js-compareItem").length != 0) {
			
			// Binding the each product url for session tracking
			$(".MMM--tileContent-inner a").on('click',function(){
				sessionStorage.setItem("pdpJumpInd", 1);
			});
			
			// Flushing out the cached items
			if (sessionStorage.getItem("pdpJumpInd") == null) {
				snapsManager.catelogPageSession_remove();
			} else {
				// Retaining the cached items and allowing to load 
				// but restting the indicator
				sessionStorage.removeItem("pdpJumpInd");
			}
		}*/
		
		if (sessionStorage.getItem("prevCatalogUrl") == null) {
			sessionStorage.removeItem('catelogPageSessionStoredLeft');
			sessionStorage.removeItem('catelogPageSessionStoredRight');
			sessionStorage.setItem("prevCatalogUrl", window.location.href);
		} else {
			if (sessionStorage.getItem("prevCatalogUrl") != window.location.href) {
				sessionStorage.removeItem('catelogPageSessionStoredLeft');
				sessionStorage.removeItem('catelogPageSessionStoredRight');
				sessionStorage.setItem("prevCatalogUrl", window.location.href);
			}
		}

        snapsManager.maskBreadBoxChkBx();
		
		window.onpopstate = function(hisObj) {

            if (location.href.indexOf("rt=rud") == -1) {
                snapsManager.vars.popStateIndicator = true;
			
                if (hisObj.state) {
                    rollbackUrl = window.location.href;
                    if ($("a[data-removeurl='"+rollbackUrl+"']").length != 0) {
                        $("a[data-removeurl='"+rollbackUrl+"']").click();
                    } else {
                        var unChkedItem = rollbackUrl + "&app=response&soloMode=true";
                        if ($("input[data-url='"+unChkedItem+"']").length != 0) {
                            $("input[data-url='"+unChkedItem+"']").click();
                        }
                    }
                } else {
                    if (snapsManager.vars.defaultPushState) {
                        if ($(".SNAPS--breadboxBtn [multicheck=true]").length == 1) {
                            $(".SNAPS--breadboxBtn [multicheck=true]").click();
                        }
                        defaultPushState = undefined;
                    }
                }

            } 
		};
		
        $(window).on("resize", function(){
            snapsManager.resize();
        });

        if ($(".SNAPS--chatBtn").length > 0) snapsManager.initChat();
		
        //List view fix
		snapsManager.addTitleLimit();
        snapsManager.adjustListHeight();
        if($('.Magic360').length > 0 ) snapsManager.spin360();
        
        if ($('.js-sticky-menu-wrapper').length > 0 ) snapsManager.detailsStickyInit();
        if (snapsManager.vars.bcPlayerId == "" || snapsManager.vars.bcVideoId == '')snapsManager.initThumbnail();
        snapsManager.vars.benefitsBoxHeight = $('.js--bnftsPdPList').height();
        snapsManager.vars.mainImgBoxHeight = $('.js-cntnt_media_lrg').height();
		
		/*// Updating the applied filters count..
		if ($("a[href='#filterDrawer']").length > 0) {
			$("a[href='#filterDrawer']").text(snapsManager.vars.txtNavFilter+" ("+$(".js-multiselect:checked").length+")");
		}*/
		
        if(snapsManager.vars.benefitsBoxHeight > snapsManager.vars.mainImgBoxHeight) {
        /*2407 - to remove the extra space between more and view details*/
            if( $(window).width() > 767){
                $('.js--bnftsPdPList').height(snapsManager.vars.mainImgBoxHeight);
            }
            else{
                snapsManager.vars.benefitsHtMobile = $(".js-cntnt_media_lrg .MMM--contentDetailBlock-content_media_large").height();
                $('.js--bnftsPdPList').height(snapsManager.vars.benefitsHtMobile);
            } 
            snapsManager.showMoreFix();
            snapsManager.showMoreInBenefits();
        }
        if( $(window).width() < 767){
             $('.SNAPS--PictogramHeight').css("min-height","auto");
        }/*2407*/       
        if ($('.MMM--accordionPanel').length > 0) snapsManager.detailsNormalizeDiv();
        if($('.js-loadRefinement[data-moreurl]').length > 0){
            $('.js-loadRefinement[data-moreurl]').each(function(){
            snapsManager.moreProductRefinements($(this));
        });
        }
        snapsManager.vars.jsMoreRefinements = $('.js-loadRefinement[data-moreurl]');
        
         
        snapsManager.vars.HdrDetails=$(".MMM--contentDetailContain-bd").html();
        sessionStorage.setItem("ProductHdr",snapsManager.vars.HdrDetails);
      
        //All WTB section will be called here -SNAPS 2270
        snapsManager.allWTB_sectionInit();
        snapsManager.allModelWTB_sectionInit();
        

        if($(".js-multiselect").length > 0) snapsManager.multiselectLoader();
        snapsManager.removeYourselection();
    },

	multiselectLoader: function(){           

    	$('body').on('change', '.js-multiselect', function (){
		
		if (!snapsManager.vars.defaultPushState) {
			snapsManager.vars.defaultPushState = { "chkBxName":$(this).attr("data-name"), "url":$(this).attr("data-url"), "title":document.title };
		}

        if($(this).is(":checked")) {

            var checkedInput = $(this);
            var ajxUrl= $(this).attr("data-url");

            $.ajax({
                url: ajxUrl,
                context:$(this),
                beforeSend: function(){
					$("html, body").animate({ scrollTop: 0 }, "slow");
                    $('body').append("<img id='js-loaderGif' class='SNAPS--loaderImg SNAPS--allmodalsLoaders multiselectChecked_suresh' src='" + snapsManager.vars.jsLoaderImg + "' />");
                    $('body').append("<div class='SNAPS--allModelOverlay' />");
                },
                success: function(results){
					
					snapsManager.updateURL(ajxUrl, $(this).attr("data-name"), $(results).filter("title").text());
                    snapsManager.navigation_Update(results,checkedInput);

                },
                error: function(){
                    console.log("ajax response error accured");
                    $('#js-loaderGif').remove();
                    $('.SNAPS--allModelOverlay').remove();
                }
            }).done(function() {
                               
                snapsManager.adjustListHeight();
                snapsManager.compareInit();
                snapsManager.wtInit();				

                snapsManager.catelogPageSession_Set();

                $('#js-loaderGif').remove();
                $('.SNAPS--allModelOverlay').remove();

            });

        }
        else
        {

            var ajxRemoveUrl= $(this).attr("data-removeurl");

            $.ajax({
                url: ajxRemoveUrl,
                context:$(this),
                beforeSend: function(){
                    $('body').append("<img id='js-loaderGif' class='SNAPS--loaderImg SNAPS--allmodalsLoaders multiselectUNChecked_suresh' src='" + snapsManager.vars.jsLoaderImg + "' />");
                    $('body').append("<div class='SNAPS--allModelOverlay' />");
                },
                success: function(results_remove){
					
					snapsManager.updateURL(ajxRemoveUrl, $(this).attr("data-name"), $(results_remove).filter("title").text());
                    snapsManager.navigation_Update(results_remove);                        

                },
                error: function(){
                    console.log("ajax response error accured");
                    $('#js-loaderGif').remove();
                    $('.SNAPS--allModelOverlay').remove();
                }
            }).done(function() {
                
                snapsManager.adjustListHeight();
                snapsManager.compareInit();
                snapsManager.wtInit();

                snapsManager.catelogPageSession_Set();

                $('#js-loaderGif').remove();
                $('.SNAPS--allModelOverlay').remove();

            });
        }
    });
	
	// Updating the applied filters count..
	/*$("a[href='#filterDrawer']").text(snapsManager.vars.txtNavFilter+" ("+$(".js-multiselect:checked").length+")");*/

    snapsManager.catelogPageSession_Get();
    snapsManager.catelogPageSession_remove();
	

},
catelogPageSession_Set:function(){

    snapsManager.vars.catelogPageSessionLeft=$(".SNAPS--beforeResponse_left").html();
    sessionStorage.setItem("catelogPageSessionStoredLeft",snapsManager.vars.catelogPageSessionLeft);

    snapsManager.vars.catelogPageSessionRight=$(".SNAPS--beforeResponse_right").html();
    sessionStorage.setItem("catelogPageSessionStoredRight",snapsManager.vars.catelogPageSessionRight);    
	
	snapsManager.adjustListHeight();
	snapsManager.addTitleLimit();
	//snapsManager.paginationLoader();

},
catelogPageSession_Get:function(){
    
    var catelogPageSessionGetsLeft=sessionStorage.getItem("catelogPageSessionStoredLeft");    
    if( catelogPageSessionGetsLeft ){
        //alert(catelogPageSessionGetsLeft);
        $(".SNAPS--beforeResponse_left").empty().append(catelogPageSessionGetsLeft);
    }

    var catelogPageSessionGetsRight=sessionStorage.getItem("catelogPageSessionStoredRight");    
    if( catelogPageSessionGetsRight ){
        $(".SNAPS--beforeResponse_right").empty().append(catelogPageSessionGetsRight);		
    }	

    $('.SNAPS--subFilterList li.checkedDimensions div label input[data-name]').each(function(){
        $(this).prop('checked',true);
    });
	
	snapsManager.adjustListHeight();
	snapsManager.addTitleLimit();
	
	if ($(".js-pageLoader").length == 0) {
		snapsManager.paginationLoader();
	}		

},
catelogPageSession_remove:function(){

    $('body').on('click', '.js-refinement_links', function (){

        sessionStorage.removeItem('catelogPageSessionStoredLeft');
        sessionStorage.removeItem('catelogPageSessionStoredRight');

    });
},
removeYourselection:function(){

    $('body').on('click', '.js-removeYourselection', function (){
		
		var ajxRemoveUrl= $(this).attr("data-removeurl");
		
		var breadBoxName = $(this).data("name");
		
		var isBreadBoxItems = false;
		
		$('.SNAPS--subFilterList li.checkedDimensions div label input[data-name]').each(function(index) {
			if (breadBoxName == $(this).data("name")) {
				isBreadBoxItems = true;
				return false;
			}
		});
		
		if (!isBreadBoxItems) {
			sessionStorage.removeItem('catelogPageSessionStoredLeft');
			sessionStorage.removeItem('catelogPageSessionStoredRight');
			location.href = ajxRemoveUrl;
		}
		
        $.ajax({
            url: ajxRemoveUrl,
            context:$(this),
            beforeSend: function(){
                $('body').append("<img id='js-loaderGif' class='SNAPS--loaderImg SNAPS--allmodalsLoaders removeSelec_suresh' src='" + snapsManager.vars.jsLoaderImg + "' />");
                $('body').append("<div class='SNAPS--allModelOverlay' />");
            },
            success: function(results_remove){
                
				snapsManager.updateURL(ajxRemoveUrl, $(this).attr("data-name"), $(results_remove).filter("title").text());
                snapsManager.navigation_Update(results_remove);                        

            },
            error: function(){
                console.log("ajax response error accured");
                $('#js-loaderGif').remove();
                $('.SNAPS--allModelOverlay').remove();
            }
        }).done(function() {
            
            snapsManager.adjustListHeight();
            snapsManager.compareInit();

            var removedSelecttion = $(this).attr("data-name");

            $('.SNAPS--subFilterList li.checkedDimensions div label input[data-name]').each(function(index){                

                if(removedSelecttion==$(this).data('name')){
                    $(this).closest("li.checkedDimensions").remove();
                }

            });

            snapsManager.catelogPageSession_Set();

            $('#js-loaderGif').remove();
            $('.SNAPS--allModelOverlay').remove();
			
			// Updating the applied filters count..
			/*$("a[href='#filterDrawer']").text(snapsManager.vars.txtNavFilter+" ("+$(".js-multiselect:checked").length+")");*/

        });

    });

},
navigation_Update:function(navigationUpdate,checkedInput){
    
    var checkedInputNew = checkedInput;
    navigationUpdate = $(navigationUpdate);

    $('.SNAPS--subFilterList[data-more]').each(function(){

        var filterName = $(this);

        navigationUpdate.find('.SNAPS--subFilterList[data-more]').each(function(){

            var filterNameAjax = $(this);

            if(filterName.data('more')==filterNameAjax.data('more')){
                
                filterName.find('li div label input[data-name]:checked').each(function(){

                    var checkedList = $(this).closest("li").html();
                    filterNameAjax.prepend("<li class='checkedDimensions' data-nameSort=''>"+checkedList+"</li>");

                });

            }
        });        

    });

    var $first = $('.SNAPS--subFilterList[data-more]');
    var $second = navigationUpdate.find('.SNAPS--subFilterList[data-more]');

    $first.each(function(){
        var checkedUls = $(this).attr('data-more');
        var $checkedUlsAjax = $second.filter(function(){
            return $(this).attr('data-more') === checkedUls;
        });

        if (!$checkedUlsAjax.length) {

			if (checkedInputNew) checkedInputNew.closest("li").addClass("checkedDimensions");
            $(this).find("li:not(.checkedDimensions)").remove();
            var mismatchedUls = $(this).closest(".SNAPS--filterList").html();
            //alert("mismatchedUls="+mismatchedUls);

            if( $(this).find("li.checkedDimensions").length > 0 ){
                navigationUpdate.find(".SNAPS--filterCategories").append("<ul class='MMM--filterList SNAPS--filterList'>"+mismatchedUls+"</ul>");
            }
            
        }
    });

    
    $(".SNAPS--beforeResponse_right").html($(navigationUpdate).find(".SNAPS--beforeResponse_right").html());
    $(".SNAPS--beforeResponse_left").html($(navigationUpdate).find(".SNAPS--beforeResponse_left").html());

    $('.SNAPS--subFilterList li.checkedDimensions div label input[data-name]').each(function(index){

        $(this).prop('checked',true);
        $(this).closest("li.checkedDimensions").attr("data-nameSort",$(this).attr('data-name'));

        $(this).attr('id',"filterNameChecked_"+index);
        $(this).closest("li.checkedDimensions div label").attr("for","filterNameChecked_"+index);

        var filterNameChecked = $(this);
        navigationUpdate.find('.SNAPS--breadBoxSelection ul li span.SNAPS--breadboxBtn a[data-name]').each(function(){
            if(filterNameChecked.data('name')==$(this).data('name')){
                filterNameChecked.attr("data-removeurl",$(this).attr('data-removeurl')+'&app=response&soloMode=true');
                
            }
        });
		
		// Removing the selected refinements count
		$(this).next(".SNAPS--refinement").html($(this).attr("data-name"));

    });

    $('.SNAPS--subFilterList li.checkedDimensions[data-nameSort]').each(function(){
        
        $(this).sort(function (a, b) {
            return +a.getAttribute('data-nameSort') - +b.getAttribute('data-nameSort');
        }).prependTo( $(this).closest('ul') );

    });


    new mmmApp.ResponsiveAccordion({selector: '.js-contentToggle-trigger_static', alwaysActive: true, jumpsToTop: false, isTwisty: true, application: this});

    new mmmApp.ResponsiveAccordion({selector: '.js-contentToggle-trigger_filter', alwaysActive: true, jumpsToTop: true, application: this});


    $(".js-pageLoader").closest(".MMM--pagination:not(.SNAPS--pagination_ajaxDone)").show();

    //Re-initialize item count for paginated records scrollTop value
    snapsManager.vars.itemCount = 0;
	
	// Updating the applied filters count..
	/*$("a[href='#filterDrawer']").text(snapsManager.vars.txtNavFilter+" ("+$(".js-multiselect:checked").length+")");*/

},
maskBreadBoxChkBx:function() {

    $(".SNAPS--breadboxBtn a[multicheck=true]").each(function( idx ) {

        var bbCatLabel = $( this ).attr("title");
        var bbCatName = $( this ).attr("title")+'_more';
        var bbDimName = $( this ).attr("data-name");
        var bbRemoveUrl = $( this ).attr("data-removeurl") + '&app=response&soloMode=true';

        var subListName = $("ul .SNAPS--subFilterList[data-more='"+bbCatName+"']").attr("data-more");

        var chkBxHTML = '<li class="checkedDimensions" data-namesort="'+bbDimName+'"><div><label data-wt="snapsAttributesLink" class="SNAPS--filterCheckboxLabel wt-link wtLoaded" for="jfilterNameChecked_'+idx+'"><input class="SNAPS--hideBdrBottom SNAPS--mr5 SNAPS--refinement js-multiselect" data-removeurl="'+bbRemoveUrl+'" data-url="" value="option" name="field" type="checkbox" data-name="'+bbDimName+'" id="jfilterNameChecked_'+idx+'" checked><span class="SNAPS--hideBdrBottom  SNAPS--refinement">'+bbDimName+'&nbsp;</span></label></div></li>';

        // Comparing the Breadbox & Left Nav Categories
        if (bbCatName == subListName) {
            
            //Checking if checkbox already present
            if ($("ul [type=checkbox][data-name='"+bbDimName+"']").length==0) {                
                
                $(chkBxHTML).prependTo($("ul .SNAPS--subFilterList[data-more='"+bbCatName+"']"));
                console.log("Added Check box Item : "+ bbDimName + " under "+bbCatName);
            }
        }

        new mmmApp.ResponsiveAccordion({selector: '.js-contentToggle-trigger_static', alwaysActive: true, jumpsToTop: false, isTwisty: true, application: this});
        new mmmApp.ResponsiveAccordion({selector: '.js-contentToggle-trigger_filter', alwaysActive: true, jumpsToTop: true, application: this});
        
      });
},
updateURL:function(docUrl, elemName, docTitle) {
	
	var r3Url = docUrl.replace("&app=response&soloMode=true","");
	var hisObj = { "elemName":elemName, "title":docTitle };
	
	if (!snapsManager.vars.popStateIndicator) {
		history.pushState(hisObj, "", r3Url);
		document.title = docTitle;
	} else {
		snapsManager.vars.popStateIndicator = false;
	}
},
snapsLIME:function(fID){
          //fID = prod form id, tID = test form id
          var id = fID;
          var d1 = new Date();
          $('#sContactUs_form_key').val(Math.floor(d1.getTime()));
          $('#sContactUs_form_id').val(id);
          $('#sContactUs_mail_subject').val(snapsManager.vars.txt_contactUs_mail_subject);
          $('#sContactUs_message').val($('#sContactUs_message').val()+"\n\nURL : "+document.URL+"\n3M ID : "+snapsManager.vars.jsProductID);
  },
  initChat: function() {
      $('.SNAPS--chatLink').on('click',function(){
            var userString = '';
            
            if (SETTINGS.userData){         
                userString = '&loginName=' + SETTINGS.userData.fName + '%20' + SETTINGS.userData.lName + '&uid=' + SETTINGS.userData.userID + '&EMAIL=' + SETTINGS.userData.email + '&company=' + SETTINGS.userData.company + '&phone=' + SETTINGS.userData.phone + '&bType=' + SETTINGS.userData.bType;
            }
        
            window.open(snapsManager.vars.chatSrvUrl+escape(document.location)+ userString,'_blank','resizable=yes,width=600,height=490,scrollbars=yes');
        });
   },
   addTitleLimit: function(){
        $('.js--setTitleLimit span').each(function(){
			if(!$(this).hasClass("SNAPS--trim")){
				var titleHeight = $(this).height();
				var byCharOrWord;
				if(truncateNameBySpace == "false"){ byCharOrWord="";}
				else{ byCharOrWord=' ';}
				
				if(window.innerWidth < 768){
					if(titleHeight > 49){  
						var p = $(this).text().split(byCharOrWord);
						while($(this).height() > 49){
							p.pop();
							$(this).text(p.join(byCharOrWord) + ' ...');
							$(this).addClass("SNAPS--trim");
						}
					}
				}
				else{
					if(titleHeight > 34){
						var p = $(this).text().split(byCharOrWord);
						while($(this).height() > 34){
							p.pop();
							$(this).text(p.join(byCharOrWord) + ' ...');
							$(this).addClass("SNAPS--trim");
						}
					}
				}
			}
        });
    },
    //Will reduce the number of crawlable URLs on the site
    addPreselect: function(){
        $('.js--preselect').on('mousedown',function(){  
         var dPreselect  = $(this).attr("data-preselect");
         var hrefProduct = $(this).attr("href");
         var positionPar = hrefProduct.search("rt=rud");
         var hrefConc;

         if (dPreselect != "" && hrefProduct.indexOf("preselect") == -1) {                             
            if (hrefProduct.indexOf("?") > -1 && hrefProduct.indexOf("&") > -1) {
                if (hrefProduct.indexOf("rt=rud")) {                        
                    hrefConc = hrefProduct.slice(0,positionPar).concat(dPreselect,"&rt=rud")
                }else{
                    hrefConc = hrefProduct.concat("&",dPreselect);
                }
            }
            if(hrefProduct.indexOf("?") > -1 && hrefProduct.indexOf("&") == -1){//dont have &
                hrefConc = hrefProduct.concat("&",dPreselect);
            }
            if (hrefProduct.indexOf("?") == -1 && hrefProduct.indexOf("&") == -1) {
                hrefConc = hrefProduct.concat("?",dPreselect);  
            }
            
            $(this).attr("href", hrefConc);
           } 
            
         });
    },
   enableContactUsCTA: function() {
  
        $('.js--sendMsg').on('click',function(){
            if ($(".formContainer.hide").length != 0) {             
                $('.formContainer').removeClass('hide');
                $('html, body').animate({scrollTop: $('.formContainer').offset().top - 200}, 1000);
            } else {
                $('.formContainer').addClass('hide');
                $('html, body').animate({scrollTop: $('.formContainer').offset().top + 180}, 1000);
            }
        }); 
  //snapsManager.sendUsMsgTriggr();
    },
    showMoreInBenefits:function(){
        var liHeight = 0 // used to store a running total of the heights of the <li> elements
        var moreAppended = false // tracks whether or not we've appended the more link
        var containerHeight =  $('.js--bnftsPdPList').height() + 10;
        var moreTxt = $('.js-viewMore');
        $('.js--bnftsPdPList li').each(function(){
          liHeight += $(this).outerHeight(); // add the height of the current <li> to the running total
          if(liHeight > containerHeight && !moreAppended){ // if the combined heights of the <li>s are greater than the container and we have not yet appended the "more..." link
            $(this).prev().append(moreTxt); // append the more link to the previous <li> (replace with real "more..." link
            moreAppended = true;
            $(this).hide(); // hide the current <li> since it overflows
          } else if(moreAppended){ // if we have already appended "more...", hide remaining <li> elements
            $(this).hide();
          }
        });
        /*2407 to remove space between more and view details*/
        if( $(window).width() < 767){
            $('.js--bnftsPdPList').css("height","auto");
            $('.SNAPS--PictogramHeight').css("min-height","auto");
        }/*2407*/
    },
    loadVars: function(){
        for(varName in snapsManager.vars){
            if(window[varName]) snapsManager.vars[varName] = window[varName];
        }
    },
    breadcrumbFix: function(){
        $(".MMM--breadcrumbs-list li:last-child()").remove();
        $(".MMM--breadcrumbs-list").append($("#snapsBreadCrumb").html());
        $("#snapsBreadCrumb").remove();
    },
    lightBoxFix: function(){
        if ($(window).width() < 1200){
            $('#js-inlineModal').removeClass('MMM--modalContainerDesktop');
        }
        else{
            $('#js-inlineModal').addClass('MMM--modalContainerDesktop');
        }
    },
  checklightBoxFix: function(){
        if ( $(window).width() < 991){
            $('.js-test').removeClass('MMM--modalContainerDesktop');
        }
        else{
            $('.js-test').addClass('MMM--modalContainerDesktop');
        }
    },
    oneAvailableBtn: function(){
        $('.SNAPS--availableBtn').css({'border-bottom':'1px solid #e2e2e2','cursor':'inherit'});
        $('SNAPS--allModelsSection--container').addClass('hide');
    },
    espaBreadCrumbSection: function(){
        $('#pageContent').prepend("<div class='MMM-espaBreadcrumbs'></div>")
        var espaBreadcrumbData = $('.MMM--breadcrumbs.MMM--breadcrumbs_clean')
        $('.MMM-espaBreadcrumbs').append(espaBreadcrumbData);   
    },
    showMoreFix: function(){
        $('.js-viewMore').removeClass('hide');
    },
    moreRefinements: function(){        
        $('body').on('click', '.js-loadRefinements', function(e){

            //e.preventDefault();
            var viewMoreId = $(this).attr("id");
            var $moreLink = $(this),
                ajaxUrl = snapsManager.vars.ajaxBase + "pid=" + snapsManager.vars.placeID + "&plmid=" + snapsManager.vars.placementID + "&plmlblid=" + snapsManager.vars.placementLabelset + "&gblid=" + snapsManager.vars.globalLabelset + "&loc=" + snapsManager.vars.jsLocale + "&" + $(this).attr("data-href"),
                txtViewMore,
                htmlStr = "",
                catgCross = $(this).attr("data-catg");
                baseUrl = snapsManager.vars.baseUrl.indexOf("?") > -1 ? snapsManager.vars.baseUrl.substring(0, snapsManager.vars.baseUrl.indexOf("?")) : snapsManager.vars.baseUrl,
                jsmultiselect = $(this).attr('data-mulsel'),
                list_length = $moreLink.closest(".SNAPS--subFilterList").find("li:not(.checkedDimensions) > div").length,k=0,
                id= $moreLink.closest(".SNAPS--subFilterList").attr("id");
            $.ajax({
                url: ajaxUrl,
                beforeSend: function(){
                    txtViewMore = $moreLink.text();
                    $moreLink.text(snapsManager.vars.txtLoading);
                },
                success: function(data){
                    //alert("list_length="+list_length+", data.refinements.length="+data.refinements.length)
					if (jsmultiselect=="true") {
						// Selecting un checked items and removing it to load updated dimns from ajax
						var	unChkedItems =  $moreLink.closest(".SNAPS--subFilterList").find("li:not(.checkedDimensions) > div").parent("li")
						
						$.each(unChkedItems, function( idx, unChkedItem) {
                            if( typeof unChkedItem.remove === "function" ) {
                                unChkedItem.remove();
                            } else if ( typeof unChkedItem.parentElement.removeChild( unChkedItem ) === "function" ) {
                                unChkedItem.parentElement.removeChild( unChkedItem );
                            } else {
                                unChkedItem.outerHTML="";
                            }
						});
						
						list_length = 0;
					}
                    for(i=list_length,l=data.refinements.length;i<l;i++){
                        if(jsmultiselect=="true")
                        {
                           
                          htmlStr +='<li><div><label class="SNAPS--filterCheckboxLabel" for="'+viewMoreId+'_'+i+'"><input id="'+viewMoreId+'_'+i+'" type="checkbox" name="field" data-wt="snapsAttributesLink" data-name="'+data.refinements[i].refinement_name+'" data-removeurl="" value="option" data-url="'+baseUrl+ '~' + data.refinements[i].addRefinementUrl +'&app=response&soloMode=true" class="SNAPS--hideBdrBottom SNAPS--mr5 SNAPS--refinement js-multiselect wt-change wtLoaded"/><span class="SNAPS--hideBdrBottom SNAPS--refinement">'+data.refinements[i].refinement_name +'('+ data.refinements[i].size +')</span></label></div></li>';
                        }
                        else if(catgCross){
                            htmlStr += "<li><a class='SNAPS--hideBdrBottom wt-link SNAPS--refinement' href='" + baseUrl + "~" + data.refinements[i].addRefinementUrl + "'>" + data.refinements[i].refinement_name + " ></a></li>";
                        }
                        else                            
                            htmlStr += "<li><a class='SNAPS--hideBdrBottom wt-link SNAPS--refinement' href='" + baseUrl + "~" + data.refinements[i].addRefinementUrl + "'>" + data.refinements[i].refinement_name + " (" + data.refinements[i].size + ")</a></li>";
                    }
					if(jsmultiselect=="true"){
					    $moreLink.closest(".SNAPS--subFilterList").append(htmlStr);
					}
					else {
						$moreLink.closest(".SNAPS--subFilterList").html(htmlStr);
					}
                    $moreLink.closest("li").remove();

                },
                error: function(){
                    $moreLink.text(txtViewMore);
                }
            }).done(function() {
                //snapsManager.multiselectLoader();
            });
        });
    },
    moreProductRefinements: function(self){ 
        var url= self.attr('data-moreurl');

         // Move the modal to the body element so we can properly z-index
        var $qvModal = $("#js-quickViewModal").clone(true);

        //$("#js-quickViewModal").remove();
        //$("body").append($qvModal);
        
        /*var target = "js-quickViewModal",
        $targetModal = $("#" + target),
        contentTarget = $targetModal.find($("#" + target + "Content")),
        modalTop = 0;*/
        var $target = $(".js-allModelRef"),
            baseUrl = snapsManager.vars.baseUrl.indexOf("?") > -1 ? snapsManager.vars.baseUrl.substring(0, snapsManager.vars.baseUrl.indexOf("?")) : snapsManager.vars.baseUrl;
        var $moreLink = $(this),
            ajaxUrl = snapsManager.vars.ajaxBase + "pid=" + snapsManager.vars.placeID + "&plmid=" + snapsManager.vars.placementID + "&plmlblid=" + snapsManager.vars.placementLabelset + "&gblid=" + snapsManager.vars.globalLabelset + "&loc=" + snapsManager.vars.jsLocale + "&" + url.replace('?',''),
            txtViewMore,
            newItems = "";


        $.ajax({
            url: ajaxUrl,
            beforeSend: function(){
                $target.find('.js--fltrBtns').append("<img id='js-loaderGif' class='SNAPS--loaderImg SNAPS--allmodalsLoaders' src='" + snapsManager.vars.jsLoaderImg + "' /> <div class='SNAPS--allModelOverlay' />");
            },
            success: function(data){
                $('#js-loaderGif').remove();
                $(".SNAPS--allModelOverlay").remove();
                var dimension_Name=data.refinements[1].dimension_name;
                //$("select[data-content='"+dimension_Name+"']").empty();
                $(self).empty();
                //$(".js-moreRefinements").remove();
                //$(".SNAPS--dimensionSelect").append("<select class='js-loadRefinement js-moreRefinements'><option value='default'>Select</option></select>");
                //$("select[data-content='"+dimension_Name+"']").append("<option value='default'>Select</option></select>");
                $(self).append("<option class='SNAPS--SelBxOpts' value='default'>"+ snapsManager.vars.txt_refinements_select +"</option></select>");
                for(i=0,l=data.refinements.length;i<l;i++){
                    var refinement_url=decodeURIComponent(data.refinements[i].addRefinementUrl.substring(data.refinements[i].addRefinementUrl.indexOf("?"),data.refinements[i].length));
                    refinement_url=refinement_url.substring(0,refinement_url.indexOf("rt=")+3).concat("rud&app=am");
                    //$("select[data-content='"+dimension_Name+"']").append('<option value="'+ baseUrl + '~' + refinement_url+'">'+ data.refinements[i].refinement_name+'</option>');
                    $(self).append('<option class="SNAPS--SelBxOpts" value="'+ baseUrl + '~' + refinement_url+'">'+ data.refinements[i].refinement_name+'</option>');
                    
                }
                    //snapsManager.prodResultsInit();
                snapsManager.vars.modelSelBxContr = snapsManager.scanSelBoxObjects();
                },
            error: function(){
                $('#js-loaderGif').remove();
                $(".SNAPS--allModelOverlay").remove();
                //Fixed the below line on 4/15 due to urgent production issue
                //$(self+"[value='default']").attr("selected",true);
                $(self).find("option[value='default']").attr("selected",true);
            }
        });
        
        $(".js-closeLink").on("click", function(){
            $("#" + $(this).attr("data-target")).hide();
            $(".js-overlay").remove();
        });
        
    },
    scanSelBoxObjects : function (ajaxData) {
        selBxContainer = new Array();
        if (ajaxData != undefined || ajaxData != null) {
            // Scanning Ajax - All Model Section code
            $.each($(ajaxData).find(".SNAPS--dimensionName"), function( idx, val ){
                var OptBxContainer = new Array();
                var dimName = $($(ajaxData).find(".SNAPS--dimensionSection")[idx]).find(".SNAPS--dimensionName").text().trim();
                var z_Options = $($(ajaxData).find(".SNAPS--dimensionSection")[idx]).find("option");
                
                var rollbackUrl = ""
                $.each(z_Options, function( optIdx, optVal ){
                    var selBxOptObj = { "name": z_Options[optIdx].text, "value":z_Options[optIdx].value, "class":z_Options[optIdx].getAttribute('class'), "disabled":z_Options[optIdx].disabled, "selected":z_Options[optIdx].selected};
                    // Looking the rollback url
                    if (optIdx == 0 && z_Options[optIdx].value != "default") {
                        rollbackUrl = z_Options[optIdx].value;
                    }
                    OptBxContainer.push(selBxOptObj);   
                });
                
                var selBxObj = { "name":dimName, "options" : OptBxContainer, "rollbackUrl":rollbackUrl };
                selBxContainer.push(selBxObj);          
            });
        } else {
            // Scanning normal page load scenario - All Model Section code
            $.each($(".SNAPS--dimensionName"), function( idx, val ){
                var OptBxContainer = new Array();
                var dimName = $($(".SNAPS--dimensionSection")[idx]).find(".SNAPS--dimensionName").text().trim();
                var z_Options = $($(".SNAPS--dimensionSection")[idx]).find("option");
                
                $.each(z_Options, function( optIdx, optVal ){
                    var selBxOptObj = { "name": z_Options[optIdx].text, "value":z_Options[optIdx].value};
                    OptBxContainer.push(selBxOptObj);
                });
                
                var selBxObj = { "name":dimName, "options" : OptBxContainer, "rollbackUrl":"" };
                selBxContainer.push(selBxObj);
				
				// Resolving the char unicode / encoding problems
				$($(".SNAPS--dimensionSection")[idx]).find("select").attr("data-content", this.innerHTML);
				
            });
        }

        //console.log(selBxContainer);
        return selBxContainer;      
    },
    positionNav: function(){
        if($(window).width() > 767) $(".MMM--contentWrapper_sidebar_hasHero").css({"margin-top": ($(".SNAPS--headerBanner").height()-14)*-1});
        else $(".MMM--contentWrapper_sidebar_hasHero").css({"margin-top": 0});
    },
    sortable: function(){
        $('.js-sortable').on('change', function () {
            var delimiter, 
            urlParam = '',
            pagParam = '',
            param,
            params,
            sortParam = '',
            paramCount = 0;
            param = location.href.split('?');
          if($(this).val()) 
          {
                    params = location.href.split(/[#?&]+/);
                    if(params.length > 1)
                    {
                      for (var id = 0; id < params.length; id++) {
                        if (!(params[id].match(/Ns=/)) && !(params[id].match(/Nao/))) {
                         if (paramCount == 0)
                            urlParam += params[id];
                         else if (paramCount == 1)
                            urlParam += '?' + params[id];
                         else 
                            urlParam += '&' + params[id];
                            
                          paramCount++;
                        }
                        else if (params[id].match(/Nao/))
                            {
                            pagParam = params[id];
                            }
                        else if (params[id].match(/Ns=/))
                            {
                              var splitParam = params[id].split('=');
                              sortParam = splitParam[0] + '=' + $(this).val();
                            }
                      }
                      if(urlParam.indexOf('?') > - 1)
                        delimiter = '&';
                     else
                        delimiter = (paramCount == 0) ? '' : '?';
                        
                        if (pagParam != '' && sortParam == "")
                            location.href = urlParam + delimiter + "Ns="+ $(this).val()  + "#" + pagParam;
                        else if(pagParam == '' && sortParam != "")
                            location.href = urlParam + delimiter + sortParam;
                        else if(pagParam == '' && sortParam == "")
                            location.href = urlParam + delimiter + "Ns="+ $(this).val();
                        else
                            location.href = urlParam + delimiter + sortParam +'#'+ pagParam;
                    } 
                    else
                    {
                      delimiter = location.href.indexOf('?') > - 1 ? '&' : '?';
                      location.href = params[0] + delimiter + 'Ns='+ $(this).val();
                    }
          }
          else {
                params = param[1].split(/[#?&]+/);
                if (params != null && params.length > 0) {
                  for (var idx = 0; idx < params.length; idx++) {
                    if (!params[idx].match(/Ns=/) && !params[idx].match(/Nao/)) {
                      if (paramCount == 0) urlParam += params[idx];
                       else urlParam += '&' + params[idx];
                      paramCount++;
                    } 
                    else if (params[idx].match(/Nao/))
                    pagParam = params[idx];
                  }
                }
                delimiter = (paramCount == 0) ? '' : '?';
                if (pagParam != '')
                    location.href = param[0] + delimiter + urlParam + '#' + pagParam;
                 else
                    location.href = param[0] + delimiter + urlParam;
          }
        });
    },
    paginationLoader: function(){
        
        $(".js-pageLoader").closest(".MMM--pagination").show();
        
        $('body').on('click', '.js-pageLoader', function(e){
            e.preventDefault();
            snapsManager.vars.snapsPaginationLink = $(this);
            $.ajax({
                url: $(this).attr("data-url"),
                beforeSend: function(){
                    $(".MMM--pagination").html("<img id='js-loaderGif' class='SNAPS--loaderImg' src='" + snapsManager.vars.jsLoaderImg + "' />");
                },
                success: function(results){
                    
                    $(".SNAPS--loaderImg").hide();
                    
                    var resultsDiv = document.createElement("div");

                    resultsDiv.innerHTML = results;
                    $("#js-ajax-target").append($(resultsDiv).find("#js-ajax-target").html());
                    snapsManager.vars.snapsPaginationLink.remove();
                    $(resultsDiv).find(".js-pageLoader").addClass('mix-MMM--btn_allCaps');
                    $(".MMM--pagination").append($(resultsDiv).find(".js-pageLoader"));
                    $(".MMM--pagination").find(".js-pageLoader").addClass("mix-MMM--btn_allCaps");
                    //snapsManager.paginationLoader();

                    if($("#js-ajax-target li").length <= snapsManager.vars.loadTo){
                        $(".js-pageLoader").click();
						if(snapsManager.vars.scrollTo.length >1){
                        $("html, body").animate({ scrollTop: $("#js-ajax-target li:eq(" + snapsManager.vars.scrollTo + ")").offset().top},1500);
						}
                    }

                    snapsManager.vars.jsEndCount = snapsManager.vars.jsEndCount*1+24 > snapsManager.vars.jsTotalCount ? snapsManager.vars.jsTotalCount : snapsManager.vars.jsEndCount*1+24;
                    $(".js-endCount").text(snapsManager.vars.jsEndCount);
                    snapsManager.vars.loadTo = location.hash.substring(4, location.hash.length);
                    $(".js-viewToggle").attr("href",  $(".js-viewToggle").attr("href") + "#Nao" + snapsManager.vars.loadTo);

                    //Re-initialize functions for new records
                    snapsManager.quickViewInit();
                    snapsManager.normalizeTitles();
                    snapsManager.compareInit();
                    if(snapsManager.vars.jsBVInline == "true") snapsManager.bvInline();
                    snapsManager.wtInit();
                    snapsManager.vars.itemCount = snapsManager.vars.itemCount + 24;
                    $("html, body").animate({ scrollTop: $("#js-ajax-target li").eq(snapsManager.vars.itemCount).offset().top - 10},1500);
                    
                    //Product list height adjust
                    snapsManager.addTitleLimit();
                    snapsManager.adjustListHeight();
                    
                    $('.SNAPS--loaderImg').remove();
                    $(".js-pageLoader").closest(".MMM--pagination:not(.SNAPS--pagination_ajaxDone)").hide();
                    $(".js-pageLoader").closest(".MMM--pagination.SNAPS--pagination_ajaxDone").show();

                },
                error: function(){
                    $(".MMM--pagination").html(snapsManager.vars.snapsPaginationLink);
                }
            });
            
        });
            
    },
    nextProductsResults: function(){
        $(".js-detailPageLoader").on("click", function(e){
            snapsManager.vars.snapsPaginationLink = $(this);
            
            $.ajax({
                url: $(this).attr("data-url").replace("preselect=", "n="),
                beforeSend: function(){
                    $(".MMM--pagination").html("<img id='js-loaderGif-pagination' class='SNAPS--loaderImg' src='" + snapsManager.vars.jsLoaderImg + "' />");
                },
                success: function(results){

                    $(".MMM--pagination #js-loaderGif-pagination").remove();
                    var resultsDiv = document.createElement("div");

                    resultsDiv.innerHTML = results;
                    var $temp = $(resultsDiv).find(".js-allModelSection");
                    $temp.find('.MMM-row-header').remove();
                    $temp.find('.empty').remove();
                    
                    $(".js-allModelSection").append($temp.html());
                    //snapsManager.vars.snapsPaginationLink.remove();
                    $(".MMM--pagination").last().append($(resultsDiv).find(".js-detailPageLoader"));
                    if($(resultsDiv).find("#prodCountDiv").length > 0){
                        $("#prodCountDiv").html($(resultsDiv).find("#prodCountDiv").html());            
                    }else{
                        $("#prodCountDiv").remove();
                        $(".MMM--pagination").remove();
                    }

                    if($(".js-allModelSection li").length <= snapsManager.vars.loadTo){
                        $(".js-pageLoader").click();
                        $("html, body").animate({
                            scrollTop: $("#js-ajax-target li:eq(" + snapsManager.vars.scrollTo + ")").offset().top
                        });
                    }

                    snapsManager.vars.jsEndCount = snapsManager.vars.jsEndCount*1+24 > snapsManager.vars.jsTotalCount ? snapsManager.vars.jsTotalCount : snapsManager.vars.jsEndCount*1+24;
                    $(".js-endCount").text(snapsManager.vars.jsEndCount);
                    snapsManager.vars.loadTo = location.hash.substring(4, location.hash.length);
                    $(".js-viewToggle").attr("href",  $(".js-viewToggle").attr("href") + "#Nao" + snapsManager.vars.loadTo);
                    snapsManager.formatAllmodels();
                    //Re-initialize functions for new records
                    snapsManager.quickViewInit();
                    snapsManager.normalizeTitles();
                    snapsManager.compareInit();
                    snapsManager.nextProductsResults();
                    
                    
                },
                error: function(){
                    $(".MMM--pagination").html(snapsManager.vars.snapsPaginationLink);
                }
            }).done(function() {
                $(".SNAPS--AllModel_wtb_section .SNAPS--wtb_section.SNAPS--wtb_section_original .SNAPS--options_more").remove();
                snapsManager.allModelWTB_sectionInit();              
            });
        });
    },
    pageLoad: function(){
        snapsManager.vars.loadTo = location.hash.substring(4, location.hash.length);
        snapsManager.vars.scrollTo =  snapsManager.vars.loadTo-snapsManager.vars.jsRecsPerPage;
        if($("#js-ajax-target li").length <= snapsManager.vars.loadTo) $(".js-pageLoader").click();
    },
    quickViewInit: function(){
        // Move the modal to the body element so we can properly z-index
        var $qvModal = $("#js-quickViewModal").clone(true);

        $("#js-quickViewModal").remove();
        $("body").append($qvModal);

        $(".js-qvTrigger").each(function(){
            if(!$(this).hasClass("js--qvLoaded")) {
                $(this).on("click", function(){
                    $(this).addClass("js--qvLoaded");
                    var $qvButton = $(this),
                        ajaxUrl = $qvButton.attr("data-href"),
                        target = $qvButton.attr("data-target"),
                        $targetModal = $("#" + target),
                        contentResults = $qvButton.attr("data-resultstarget"),
                        contentTarget = $targetModal.find($("#" + target + "Content")),
                        modalTop = 100;

                    $.ajax({
                        url: ajaxUrl,
                        beforeSend: function(){
                            $targetModal.show();
                            $("body").append("<div class='js-overlay SNAPS--bgOverlay'></div>");
                            snapsManager.overlayInit();
                            modalTop = ($(window).height()-$targetModal.height())/2+$(window).scrollTop();
                            if(modalTop < 0) modalTop = 0;
                            $targetModal.css({"top": modalTop});
                            contentTarget.html("<img id='js-loaderGif' class='SNAPS--loaderImg' src='" + snapsManager.vars.jsLoaderImg + "' />");
                            snapsManager.centerElement($("#js-loaderGif"));
                        },
                        success: function(data){
                            var resultsDiv = document.createElement("div");

                            resultsDiv.innerHTML = data;
                            contentTarget.html($(resultsDiv).find("#" + contentResults).html());
                            if($qvButton.attr("data-children") > 0) contentTarget.find("#SNAPS--childCount").text($qvButton.attr("data-children"));
                            snapsManager.wtInit();
                            modalTop = ($(window).height()-$targetModal.height())/2+$(window).scrollTop();
                            if(modalTop < 0) modalTop = 0;
                            $targetModal.css({"top": modalTop});
                        }
                    });
                });
            }
        });

        $(".js-closeLink").on("click", function(){
            $("#" + $(this).attr("data-target")).hide();
            $(".js-overlay").remove();
        });

        // Center the Quick View buttons themselves
        $(".MMM--btn_quickview").each(function(){
            snapsManager.centerElement($(this), $(this).parents(".MMM--mediaListFigure"));
        }); 
    },
    overlayInit: function(){
        // JS for Closing Modals
        $(".js-overlay").on("click",function(e){
            $("#js-quickViewModal").hide();
            $(".js-overlay").remove();
        });
    },
    normalizeTitles: function(){
        var maxHeight = 0;

        $(".MMM--tileTitle_tileView").each(function(){
            if($(this).height() > snapsManager.vars.maxTitleHeight){
                maxHeight = snapsManager.maxTitleHeight;
                $(this).addClass("SNAPS--Overflow");
            }
            else if($(this).height() > maxHeight) maxHeight = $(this).height();
        }).height(maxHeight);
    },
    compareInit: function(){
        var compareLength = 0,
            compareHeight = $(".js-compareBar").height();

        // Get any previously selected products from the compare cookie
        savedProducts = $.parseJSON(snapsManager.cookieManager.readCookie("snapsCompare"));
        snapsManager.vars.compareProducts = !!savedProducts ? savedProducts : {length: 0};

        // Recalculate the length in case an error occurred
        for(product in snapsManager.vars.compareProducts){
            if(product != "length") compareLength++;
        }

        snapsManager.vars.compareProducts.length = compareLength;

        // Products already in the compare should be pre-checked
        for(product in snapsManager.vars.compareProducts){
            $(".js-toggleCheckbox[data-id='" + product + "']").prop("checked", true);
            snapsManager.addCompareThumb(snapsManager.vars.compareProducts[product]);
        }

        // Configure back link for the compare page
        $(".js-compareBack").attr("href", snapsManager.cookieManager.readCookie("snapsBackUrl"));

        // Hide compare button and bar if there are no selections
        $(".js-toggleSubmit").hide();
        $(".js-compareBar").hide();

        // If there's at least one selections we want to show the compare bar
        if($(".js-toggleCheckbox:checked").length > 0 || snapsManager.vars.compareProducts.length > 0 ){
            $(".SNAPS--compareImg").each(function(){
            $(".js-compareBar").show();
                snapsManager.centerElement($(this), $(this).parents(".SNAPS--compareItem"));
            });
        }
        
        // If there's at least two selections we want to enable the compare button
        if($(".js-toggleCheckbox:checked").length > 1 || snapsManager.vars.compareProducts.length > 1){
            $(".js-compare").removeClass("SNAPS--disabled");
            $(".js-toggleCheckbox:checked").siblings(".js-toggleSubmit").show().siblings(".js-toggleLabel").hide();
        }

        $(".js-toggleCheckbox").on("change", function(){
            $(this).prop("checked") ? snapsManager.addCompare($(this).attr("data-id"), $(this), compareHeight) : snapsManager.removeCompare($(this).attr("data-id"), $(this), compareHeight);
        });

        $(".js-toggleSubmit, .js-compare").on("click", function(event){
            event.preventDefault();
            if(!$(this).hasClass("SNAPS--disabled")){
                var compareString = "",
                    baseUrl = snapsManager.vars.baseUrl.indexOf("?") > -1 ? snapsManager.vars.baseUrl.substring(0, snapsManager.vars.baseUrl.indexOf("?")) : snapsManager.vars.baseUrl;

                // Save the current URL for the compare page's back button
                snapsManager.cookieManager.createCookie("snapsBackUrl", location.href);

                for(product in snapsManager.vars.compareProducts){
                    if(product != "length") compareString += product + "+";
                }

                // If there are any products in the compare list send to compare page
                if(!!compareString) location.href = baseUrl + "?rt=com&R=" +compareString.substring(0, compareString.length-1);
            }
        });

        $(".js-removeCompare").on("click", function(){
            snapsManager.removeCompare($(this).attr("data-id"));
        });
    },
    addCompare: function(productId, compareItem, compareHeight){
        var compareItem = !!compareItem ? compareItem : $(".js-toggleCheckbox[data-id=" + productId + "]");

        // We only need to do anything if the product isn't already in the compare list
        if(!snapsManager.vars.compareProducts[productId]){
            if(snapsManager.vars.compareProducts.length < 3){
                snapsManager.vars.compareProducts.length++;
                snapsManager.vars.compareProducts[productId] = {};
                var prodObject = snapsManager.vars.compareProducts[productId];

                // Gather all the data attributes and store them in the object
                $.each(compareItem[0].attributes, function(i, attribute){
                    var attrName = attribute.name.indexOf("data-") == 0 ? attribute.name.substring(5, attribute.name.length).toLowerCase() : undefined;

                    if(attrName) prodObject[attrName] = attribute.value;
                });

                // Re-create the cookie with the updated compare list
                snapsManager.cookieManager.createCookie("snapsCompare", JSON.stringify(snapsManager.vars.compareProducts), 0);

                // Add the product to the compare toolbar
                snapsManager.addCompareThumb(prodObject);

                // Check the checkbox in case this was clicked from the compare toolbar
                compareItem.prop("checked", true);

                // Since we've added a product we should always want to show the compare bar
                $(".js-compareBar").show().animate({height: compareHeight});
                $(".SNAPS--compareImg").each(function(){
                    snapsManager.centerElement($(this), $(this).parents(".SNAPS--compareItem"));
                });

                // If there are at least two selections we want to enable the compare button
                if (snapsManager.vars.compareProducts.length > 1) {
                    $(".js-toggleCheckbox").siblings(".js-toggleSubmit").hide().siblings(".js-toggleLabel").show();
                    $(".js-toggleCheckbox:checked").siblings(".js-toggleSubmit").show().siblings(".js-toggleLabel").hide();
                    $(".js-compare").removeClass("SNAPS--disabled");
                }
            } else{
                $(compareItem).prop("checked", false);
                alert(snapsManager.vars.txtCompareError);
            }
        }
    },
    removeCompare: function(productId, compareItem){
        var compareItem = !!compareItem ? compareItem : $(".js-toggleCheckbox[data-id=" + productId + "]");

        // We only need to do anything if the product is already in the compare list
        if(snapsManager.vars.compareProducts[productId]){
            snapsManager.vars.compareProducts.length--;
            delete snapsManager.vars.compareProducts[productId];

            // Re-create the cookie with the updated compare list
            snapsManager.cookieManager.createCookie("snapsCompare", JSON.stringify(snapsManager.vars.compareProducts), 0);

            // Remove the product from the compare toolbar
            snapsManager.removeCompareThumb(productId);

            // Uncheck the checkbox in case this was clicked from the compare toolbar
            compareItem.prop("checked", false);

            // If there are less than two selections we want to hide the compare bar
            if(snapsManager.vars.compareProducts.length < 2) {
                $(".js-toggleSubmit").hide().siblings(".js-toggleLabel").show();
                $(".js-compare").addClass("SNAPS--disabled");
            }
            // If there are no selections hide the bar completely
            if(snapsManager.vars.compareProducts.length < 1){
                $(".js-compareBar").animate({height: 0}, function(){
                    $(this).hide();
                });                
            }
        }
    },
    addCompareThumb: function(product){
        if(product.imgurl && product.detailsurl){
            if( $('a[data-id='+product.id+']').length == 0){
            var $thumbContainer = $(".SNAPS--compareEmpty").first(),
                $compareThumb = $("<a class='SNAPS--hideBdrBottom' href='#' title='" + product.prodname + "' data-id='" + product.id + "'></a>");

            $compareThumb.html("<img class='SNAPS--compareImg' src='" + product.imgurl + "' alt='" + product.prodname + "' /><i class='MMM--icn MMM--icn_delete mix-MMM--icn_sm'></i>");
            $thumbContainer.append($compareThumb).removeClass("SNAPS--compareEmpty").attr("id", "js--compare_" + product.id);

            $compareThumb.on("click", function(e){
                e.preventDefault();
                snapsManager.removeCompare($(this).attr("data-id"));
                $(this).remove();
            });

            $compareThumb.find("img").on("load", function(e){
                snapsManager.centerElement($compareThumb.find(".SNAPS--compareImg"), $thumbContainer);
            });
            }
        }
    },
    removeCompareThumb: function(productId){
        $("#js--compare_" + productId).remove();
        $(".js-compareBar").find(".js-compareItem").last().after("\r\n<div class='SNAPS--compareItem SNAPS--compareEmpty js-compareItem'></div>")
    },
    viewToggleInit: function(){
        // The list/grid view toggle is a mess on the XML side, correct the URL with JS
        var url = document.location.href,
            delimiter = location.href.indexOf("?") > -1 ? "&" : "?",
            toggleUrl = url.indexOf("sorttype") > -1 ? (url.indexOf("list") > -1 ? url.replace("list", "grid") : url.replace("grid", "list")) : url + delimiter + "sorttype=list";

        $(".js-viewToggle").attr("href", toggleUrl);
    },
    bvInline: function(){
        var prdCount = 0;    //fix for defect SNAPS-1514
       snapsManager.vars.bvProducts.productIds={};
        $("div[data-bv-show='inline_rating']>span").parent().each(function(){
            snapsManager.vars.bvProducts.productIds[$(this).text()] = {containerId: $(this).attr("id")};
            prdCount = prdCount + 1;
        });
        if (prdCount !== 0){
            $BV.ui("rr", "inline_ratings", snapsManager.vars.bvProducts);
        }
    },
    thumbnailInit: function(){
        $(".js-thumbList .MMM--img_smThumbnail").each(function(){
            snapsManager.centerElement($(this), $(this).parents("li"));
        });
            
    },
    jsAvailableBtnInit: function(){

        if ($(".SNAPS--hideChildSkus").length == 0) {
            var stickyCntnrHeightMob = $('.js-sticky-title-wrapper').height();
            var allModelSectionTop = $('.SNAPS--allModelsSection--container').offset().top;
            var stickyCntnrHeightES = $('.js-sticky-title-wrapper').height() + $('.MMM--breadcrumbs').height() + 37;
            var stickyCntnrHeight = $('.js-sticky-title-wrapper').height() + $('.MMM--breadcrumbs_theme').height() + 15;
            $('.js-availableBtn').on('click', function(){
                if(!$(".SNAPS--allModelsSection--container").hasClass("hide")){
                    $(".SNAPS--allModelsSection--container").addClass('hide');
                    $('.SNAPS--availableIcon').toggleClass('MMM--icn_arrowDown MMM--icn_arrowUp');
                }
                else{
                    $('.SNAPS--availableIcon').toggleClass('MMM--icn_arrowUp MMM--icn_arrowDown');
                    $(".SNAPS--allModelsSection--container").removeClass('hide');
                }
                if(window.innerWidth < 768){ 
                    $('html, body').animate({scrollTop: $('.SNAPS--allModelsSection--container').offset().top - 150}, 1000);
                }
                else{
                    if($('.SNAPS--allModelsSection--container').hasClass('hide')){
                        $('html, body').animate({scrollTop: allModelSectionTop - stickyCntnrHeight}, 1000);
                    }
                    else{
                        if($('.MMM--breadcrumbs').hasClass('MMM--breadcrumbs_clean')){
                            $('html, body').animate({scrollTop: $('.SNAPS--allModelsSection--container').offset().top - 150 }, 1000);
                        }
                        else{
                            $('html, body').animate({scrollTop: $('.SNAPS--allModelsSection--container').offset().top - 150}, 1000);
                        }
                    }
                }
            });
        }   
    },
    allModelTableScroll: function(){
        
        snapsManager.jsAvailableBtnInit();
        $('.js-modelClose').on('click',function(){
            /*$('html, body').animate({scrollTop: $('.js-allModelRef').offset().top-100}, 1500,function(){
                snapsManager.vars.clickControl = false;
                snapsManager.vars.scrollControl = true;
            });*/
            $('html, body').animate({scrollTop: $('.MMM--mainSection').offset().top - 300}, 1500,function(){
                snapsManager.vars.clickControl = false;
                snapsManager.vars.scrollControl = true;
            });
            $('.SNAPS--availableIcon').toggleClass('MMM--icn_arrowDown MMM--icn_arrowUp');
            $('.SNAPS--allModelsSection--container').slideUp( 1500, function() {
                $(this).removeAttr("style").addClass("hide");
            });
        });
		
		$(".js-hdrChildCnt").on('click', function(){			
			if ($('.js-availableBtn')) {
				$('.js-availableBtn').click();
			}
		});
    },
    prodResultsInit: function(){
        $('.js-loadRefinementBreadBox').on("change", function(e){
            e.preventDefault();
            snapsManager.productResultsLoad($(this).val());
        });
        $(".js-loadRefinement").on("change", function(e){
           e.preventDefault();
            if($(this).find("option:selected").val() != "default"){
                snapsManager.vars.refinementUrlToHistory = snapsManager.updatePreSelectParam($(this).val());
                snapsManager.productResultsLoad($(this).val());
           }
        });

        snapsManager.vars.modelSelBxContr = snapsManager.scanSelBoxObjects();
        snapsManager.formatAllmodels();
        var SNAPS = $('.snaps--overflow');
        var filter = ".js-breadBoxClick";

        $(SNAPS).on('click', filter, function () {
            var removeUrl = $(this).data("removeurl");
            snapsManager.vars.refinementUrlToHistory = snapsManager.updatePreSelectParam(removeUrl);
            snapsManager.productResultsLoad(removeUrl);
        });

        if (!snapsManager.vars.preSelectCnt && $(".SNAPS--allModels").length == 1) {
            var preSelectUrl;
        	if (urlHash.N == undefined) {
        		preSelectUrl = location.href.split("?")[0] + "?" + "n=" + urlHash.preselect;
        	}
        	else {
        		preSelectUrl = location.href.split("?")[0] + "?" + "N=" + urlHash.N + "+" + urlHash.preselect + "&rt=rud";
        	}
        	if (!location.href.includes("/p/")) {
        		preSelectUrl += "&app=am";
        	}
            snapsManager.productResultsLoad(preSelectUrl);
            snapsManager.vars.preSelectCnt = 1;
        }
    },
    updtImgOnLoad: function(flag){
        var url = snapsManager.vars.pvwUrl;
        var ImgTitle = $('.js-prodThumbImg img').first().attr('alt');
        
        $('.js-smThumbnail img[data-type="MainPicture"]').attr('src',url);
        $('.js-mainImgCntnr img').attr('src',url);
        $('.js-modalImg img').first().attr('src',url);
        $('.js-sticky-thumbImg img').attr('src',url);
        $('.MMM--variationTitle').first().html(ImgTitle);
        $('.js-smThumbnail').first().attr('data-alt',ImgTitle).parent().attr('title',ImgTitle);
        $('.js-mainImgCntnr').attr('data-alt',ImgTitle);
        $('.js-modalImg').first().attr('data-alt',ImgTitle);    
            
    },
    extractMoreRefOnDemand : function(ajaxData) {   
    //$($(ajaxData).find(".SNAPS--dimensionSection")[idx]).find("select").attr("data-moreurl");
        var moreDrpDwnBx = $(ajaxData).find(".SNAPS--dimensionSection");
        var isAjaxComplete = 0;
        
        $.each(moreDrpDwnBx, function( aIdx, aVal ){
            var url = $(moreDrpDwnBx[aIdx]).find("select").attr("data-moreurl");
            
            if (url != undefined && url.length >0 ) {
            
                var baseUrl = snapsManager.vars.baseUrl.indexOf("?") > -1 ? snapsManager.vars.baseUrl.substring(0, snapsManager.vars.baseUrl.indexOf("?")) : snapsManager.vars.baseUrl;         
            
                var ajaxUrl = snapsManager.vars.ajaxBase + "pid=" + snapsManager.vars.placeID + "&plmid=" + snapsManager.vars.placementID + "&plmlblid=" + snapsManager.vars.placementLabelset + "&gblid=" + snapsManager.vars.globalLabelset + "&loc=" + snapsManager.vars.jsLocale + "&" + url.replace('?','');
            
                $.ajax({
                    url: ajaxUrl,
                    beforeSend: function(){
                        isAjaxComplete++;
                        $target.append("<img id='js-loaderGif' class='SNAPS--loaderImg SNAPS--allmodalsLoaders' src='" + snapsManager.vars.jsLoaderImg + "' /> <div class='SNAPS--allModelOverlay' />");
                    },
                    complete : function(data){
                        if (isAjaxComplete == 0) {
                            console.log("Here you go and disable / enable select & options with updated ajax data");
                            snapsManager.applyRefinmentFilter();
                        }
                    },
                    success: function(data){                    
                        isAjaxComplete--;
                        console.log("Updating the ..."+data.refinements[0].dimension_name+" select box more refinements ! ");
                        $('#js-loaderGif').remove();
                        $.map( snapsManager.vars.ajaxModelSelBxContr, function( ajaxDataWOMore, index ) {
                            
                            if (ajaxDataWOMore.name ==  data.refinements[0].dimension_name.replace("_"," ")) {
                                
                                var mRefsIdx = 0;
                                $.each(data.refinements, function( mRefsIdx, mRefsVal) {
                                    
                                    var isOptionMissed = true;
                                    var oIdx = 0;
                                    $.each(ajaxDataWOMore.options, function( oIdx, oVal) {
                                        if (data.refinements[mRefsIdx].refinement_name == ajaxDataWOMore.options[oIdx].name || ajaxDataWOMore.options[oIdx].name == "'"+ snapsManager.vars.txt_refinements_select +"'") {
                                            if (ajaxDataWOMore.options[oIdx].name != "'"+ snapsManager.vars.txt_refinements_select +"'") {
                                                isOptionMissed = false;
                                                return false;
                                            }
                                        }
                                    });
                                    
                                    // pushing incomplete ajaxData with latest "showMoreUrl" ajax results...
                                    if (isOptionMissed) {
                                        var updatedUrl = data.refinements[mRefsIdx].addRefinementUrl.substring(0,data.refinements[mRefsIdx].addRefinementUrl.indexOf("rt=")+3).concat("rud&app=am");

                                        var missedOption = { "name":data.refinements[mRefsIdx].refinement_name, "value":baseUrl + '~' + updatedUrl, "rollbackUrl":"" };
                                        ajaxDataWOMore.options.push(missedOption);
                                    }
                                });
                            }
                        });
                    }
                });             
            } else {
                snapsManager.applyRefinmentFilter();
            }
        });
    },
    productResultsLoad: function(origUrl){
         var oMarkup, newMarkup,newMarkup1,updatedDropDown,updateOptns      
                $target = $(".js--fltrBtns"),
                $target1 = $(".js-allModelsSection"),
                $targetWtb = $(".SNAPS--whereToBuybtn"),
                $targetOneAvail = $(".MMM--selectionBox--cntnr");
         
            var url = (origUrl.indexOf("N") < 0) ? origUrl.replace("preselect", "n") : origUrl;
            
            $.ajax({
                url: url,
                beforeSend: function(){
                    // Capture the original markup just in case
                    oMarkup = $target.html();
                    $target.append("<img id='js-loaderGif' class='SNAPS--loaderImg SNAPS--allmodalsLoaders' src='" + snapsManager.vars.jsLoaderImg + "' /> <div class='SNAPS--allModelOverlay' />");
                    $target1.append("<img id='js-loaderGif' class='SNAPS--loaderImg SNAPS--allmodalsLoaders' src='" + snapsManager.vars.jsLoaderImg + "' /> <div class='SNAPS--allModelOverlay' />");
                },
                success: function(data){
                    $('#js-loaderGif').remove();
                    $('.SNAPS--allModelOverlay').remove();

                    var allModelHidden = $('.SNAPS--allModelsSection--container').hasClass('hide');
                    if(!allModelHidden){
                        $('.SNAPS--allModelsSection--container').addClass('hide');
                    }
                    newMarkup = $(data).find(".SNAPS--availableBtn");
                    newMarkup1 = $(data).find(".MMM--allModelSection");
                    newMarkup2 = $(data).find(".js-modelClose");
                    newMarkup3 = $(data).find(".SNAPS--allModel-one");
                    newMarkup4 = $(data).find(".MMM--childWTB");
                    newMarkup5 = $(data).find(".MMM--contentDetailContain-bd");
                    newMarkup6 = $(data).find(".MMM--pagination").last();

                    selectDimens = $(data).find(".SNAPS--selectDimens");
                    $target.find(".SNAPS--selectDimens").remove();

                    $target.find(".SNAPS--availableBtn, .SNAPS--allModel-one").remove();
                    $targetOneAvail.find(".SNAPS--availableBtn, .SNAPS--allModel-one").remove();
                    
                    $targetOneAvail.append(newMarkup,newMarkup3);

                    $target1.html(newMarkup1).append(newMarkup6).append(newMarkup2);
                    
                    snapsManager.vars.ajaxModelSelBxContr = snapsManager.scanSelBoxObjects(data);
                    snapsManager.extractMoreRefOnDemand(data);
                    snapsManager.allModelTableScroll();
                    if( $(".SNAPS--allModel-one").length > 0 ){

                        $(".MMM--childWTB").remove();
                        $(".SNAPS--whereToBuybtn").children(".SNAPS--wtb_section.SNAPS--wtb_section_original").addClass("displayNone");

                        $(".SNAPS--whereToBuybtn").children(".SNAPS--narrowedsku_one_section.displayNone").remove();
                        newMarkup4.removeClass("displayNone").addClass("active");

                        $(".SNAPS--whereToBuybtn").append(newMarkup4);
                        $(".MMM--ctaBtn").addClass("mix-MMM--btn_allCaps");
                        snapsManager.wtInit();
                        //$("option[value='default']:selected").parent().prop("disabled", "true");                        

                        $(".SNAPS--HeaderAndShareCntr").empty().append(newMarkup5);
                        
                        //If the page header shows more than once (possiblity of Product name/ IDs from both Header and Models),... 
                        //... ignore processing the header.
                        
                        if($(".MMM--contentDetailContain-bd").length>1){
                            $(".MMM--contentDetailContain-bd").first().remove();
                        }
                    }
                    else{
                        $(".MMM--childWTB").remove();
                        $(".SNAPS--wtb_section.SNAPS--wtb_section_original").removeClass("displayNone");
                        $('.SNAPS--select_WTB').trigger('resetDropdown');
                        
                        $targetOneAvail.find(".SNAPS--availableBtn, .SNAPS--allModel-one").remove();
                        $target.append(newMarkup,newMarkup3);
                        
                        $target.append(selectDimens);

                        snapsManager.jsAvailableBtnInit();

                        var test=sessionStorage.getItem("ProductHdr");
                        $(".SNAPS--HeaderAndShareCntr").empty().append(test);
                        if(snapsManager.vars.jsBVEnabled == "true") snapsManager.bvInit();
                        if(snapsManager.vars.jsQAEnabled =="true") snapsManager.bvQAInit();
                        
                    }
     if(!$(".SNAPS--allModel-one").length){
                        
                        var url = snapsManager.vars.pvwUrl;
                        $('.js-smThumbnail img[data-type="MainPicture"]').attr('src',url);
                        $('.js-mainImgCntnr img').attr('src',url);
                        $('.js-modalImg img').first().attr('src',url);
                        $('.js-sticky-thumbImg img').attr('src',url);
                    }
                    else{
                    if($('.js-prodThumbImg img').first().length > 0){
                        snapsManager.updtImgOnLoad(true);
                    }else{
                        snapsManager.updtImgOnLoad(false);
                    }
                    }
                    var prdAvalblCnt = $('.js-availblCount').text();
                    //No. of products
                    $('.js-nmbrOfPrdcts').text(prdAvalblCnt);
                    if(prdAvalblCnt == 1){
                        $('.js-prdctLabel').text(snapsManager.vars.txt_prodResults_singlePrdct);
                    }
                    if($('.js-allModelSection').length > 0)snapsManager.allmodelsWTb();
                },
                error: function(){
                    //Removing animations and overlay after req failed
                    $('#js-loaderGif').remove();
                    $('.SNAPS--allModelOverlay').remove();
                }

                
            }).done(function() {
                snapsManager.allModelWTB_sectionInit();
                snapsManager.allWTB_sectionOnChange();                
                snapsManager.formatAllmodels();
                $(".SNAPS--toolTipWTB").hide();
                $(".SNAPS--dimensionSelect select").removeClass("errorSelect");
				
				$(".js-hdrChildCnt").on('click', function(){					
					if ($('.js-availableBtn')) {
						$('.js-availableBtn').click();
					}
				});
                snapsManager.nextProductsResults();
            });
    },
    applyRefinmentFilter: function() {
            if (snapsManager.vars.refinementUrlToHistory) {
                history.replaceState("", document.title, snapsManager.vars.refinementUrlToHistory);
                snapsManager.vars.refinementUrlToHistory = "";
            }
            
            var ajaxModelSelBxContr = snapsManager.vars.ajaxModelSelBxContr;
            var modelSelBxContr = snapsManager.vars.modelSelBxContr;
            
            //Reset the entire select box disabled / enabled settings..
            $(".SNAPS--dimensionSection select").removeClass('SNAPS--disabledDropdwns');
            
            /*var selectedDrpBxCnt = $(".SNAPS--dimensionSection select option[value='default']").length - $(".SNAPS--dimensionSection select option:selected[value='default']").length;*/
            var selectedDrpBxCnt = $(".SNAPS--dimensionSection select").length - $(".SNAPS--dimensionSection select option[value='default']").length;

            
            /*// choosenRefine = 1 then, reset the disabled settings and accept response everything
            if (selectedDrpBxCnt < 1) {
                $(".SNAPS--dimensionSection select option").prop("disabled",false);
                $(".SNAPS--dimensionSection select").prop("disabled",false);
            } */
            
            $.each(modelSelBxContr, function( idx, val ){
                var disabledSelBx = true;
                
                $.each(ajaxModelSelBxContr, function( aIdx, aVal ){
                    if (modelSelBxContr[idx].name == ajaxModelSelBxContr[aIdx].name) {
                        disabledSelBx = false;
                        
                        $("select[data-content='"+modelSelBxContr[idx].name+"']").prop('disabled',false);
                        
                        var zAjaxOptsCntr = ajaxModelSelBxContr[aIdx].options;
                        var zOptsCntr = modelSelBxContr[idx].options;
                                                        
                        // It will tell this select box has been changed by user previously...
                        if (zAjaxOptsCntr[0].value == "default") {

                            var selctBx = $("select[data-content='" + modelSelBxContr[idx].name + "']");
                            selctBx.show();
                            selctBx.prop("selectedIndex", 0);
                            selctBx.next('#breadBox').hide();

                            // These select box & options are not modified by user 
                            // Hence iterate & verify available models option and disable not matched
                            $.each(zOptsCntr, function( optIdx, optVal ) {
                                
                                var disabledOpts = true;
                                var optsUrl = ""; 
                                var checkDisable = false;
                                $.each(zAjaxOptsCntr, function( aOptIdx, aOptVal ){
         if(zOptsCntr[aOptIdx].disabled !=false){
                                    if (zOptsCntr[optIdx].name == zAjaxOptsCntr[aOptIdx].name || optIdx==0) {
                                        disabledOpts = false;
                                        optsUrl = zAjaxOptsCntr[aOptIdx].value;
                                        checkDisable = zAjaxOptsCntr[aOptIdx].disabled;
                                        return false;
                                    }
         }
                                });
                                
                                if (disabledOpts) {
                                    $($("select[data-content='"+modelSelBxContr[idx].name+"'] option")[optIdx]).prop('disabled',true);
                                } else {
                                    $($("select[data-content='"+modelSelBxContr[idx].name+"'] option")[optIdx]).prop({"disabled":checkDisable,"value":optsUrl});
                                }
                            });
                            
                        } else {
                            // Keeping the rollback page url....
                            $($("select[data-content='" + modelSelBxContr[idx].name + "'] option")[0]).attr("value", zAjaxOptsCntr[0].value);
                            var hideSelBox = $("select[data-content='" + modelSelBxContr[idx].name + "']");
                            var optionTxt = undefined;
                            
                            for (var refnIdx=0; refnIdx < zAjaxOptsCntr.length; refnIdx++) {
                                if (zAjaxOptsCntr[refnIdx].selected) {
                                    optionTxt = zAjaxOptsCntr[refnIdx].name;
                                }
                            }

                            if (optionTxt) {
                                $("select[data-content='" + modelSelBxContr[idx].name + "'] option").filter(function () {
                                    return ($(this).text() == optionTxt);
                                }).prop('selected', true);
                            }
                            
                            $(hideSelBox).hide();

                            if (!$(hideSelBox).next('#breadBox').length) {
                                var breadBox = '<div id="breadBox"><div class="SNAPS--pdpBreadboxBtn"><a data-removeurl="' + zAjaxOptsCntr[0].value +
                                    '" href="javascript:void(0);" class="SNAPS--hideBdrBottom SNAPS--inlineBlock js-breadBoxClick" rel="nofollow" title="' + optionTxt +
                                    '"><div class="refinment breadBx-'+modelSelBxContr[idx].name+'">'+ optionTxt +'</div><span><i class="MMM--icn MMM--icn_close mix-MMM--icn_red mix-MMM--icn_rightSpace SNAPS--icn_red_remove">' +
                                    '</i></span></a></div></div>';
                                $(breadBox).insertAfter($(hideSelBox));
                            } else {                                
                                $(".breadBx-"+modelSelBxContr[idx].name).html(optionTxt);
                                if (zAjaxOptsCntr[0].value) {
                                    $(".breadBx-"+modelSelBxContr[idx].name).parent("a").data("removeurl", zAjaxOptsCntr[0].value);
                                }                                
                                $(hideSelBox).next('#breadBox').show();
                            }
                        }
                        return false;
                    }
                });
                
                // Disabling the entire select's options box
                if (disabledSelBx) {
                    console.log(modelSelBxContr[idx].name);
                    //$("select[data-content='"+modelSelBxContr[idx].name+"']").addClass('SNAPS--disabledDropdwns');
					$("select[data-content='"+modelSelBxContr[idx].name+"'] option").prop("disabled",true);
                    $("select[data-content='"+modelSelBxContr[idx].name+"']").prop('selectedIndex', 0);
                    $("select[data-content='" +modelSelBxContr[idx].name+"']").next('#breadBox').hide();
                    $("select[data-content='" +modelSelBxContr[idx].name+"']").show();
                } else {
					
					/** Resetting all the selectors if option value='default' **/
					if ($("select option[value='default']:selected").length == $(".SNAPS--allModels select").length) {
						$("select option").prop("disabled",false);
					}
				}
            });
            $(".SNAPS--allModelOverlay").remove();
    },
    updatePreSelectParam: function (reqUrl) {
        if (urlHash["N"] == undefined) { return reqUrl; }

        var targetParams = reqUrl.split("?")[1];
        var targetNParam = targetParams.substring(targetParams.indexOf("N=") + 2, targetParams.indexOf("&")).split("+");
        var exlcudeBaseNVals = urlHash["N"].split("+");
        var preselectNVals = undefined;
        var newPreParam = [];
        var finalPreselectParam = "";

        //Exclude the base N vals from target N param
        for (var i = 0; i < targetNParam.length; i++) {
            var idx = exlcudeBaseNVals.indexOf(targetNParam[i]);
            if (idx == -1) {
                newPreParam.push(targetNParam[i]);
            }
        }

        if (newPreParam.length){
            finalPreselectParam = "&preselect=" +newPreParam.join("+");
        }

        return reqUrl.substring(0, reqUrl.indexOf("?")) + "?" + "N=" + urlHash["N"] + finalPreselectParam + "&rt=rud";
    },
    bvInit: function(){
        $BV.configure("global", {
            productId: snapsManager.vars.jsProductID + "|" + snapsManager.vars.jsBVClientName + "|" + snapsManager.vars.jsBVDeployZone + "|" + snapsManager.vars.jsLocale
        });
        $BV.ui("rr", "show_reviews", {
            doShowContent: function() {
                //TODO: Metrics and tab opening JS for "Read all reviews link"
                                
                $('.MMM--tabContentTriggerList a').each(function(i) {
                    if (this.text == snapsManager.vars.jsBVTabName) {$(this).click();}
                });
            }
        });                        
    },
    bvQAInit: function(){
        $BV.ui("qa", "show_questions", {
            doShowContent: function() {
                //TODO: Metrics and tab opening JS for "QA Link"
            }                        
        })
    },
    modelsCTAInit: function(){
         $('a.jsModelsCTA').click(function(){
            $('.MMM--tabContentTriggerList a').each(function(i) {
              if (this.text == snapsManager.vars.jsModelsTabName) {
                $(this).click();
                $(".MMM--modelFilter").get(0).scrollIntoView();
              }
            });
         });
    },
    bcInit: function(){
        var playerType = ["V&video_ids=", "P&playlist_id="];

        if(snapsManager.vars.bcPlayerType == "Single") playerType = playerType.splice(0, 1);
        if(snapsManager.vars.bcPlayerType == "Playlist") playerType = playerType.splice(1, 1);
        if(snapsManager.vars.bcPlayerId && snapsManager.vars.bcPlayerKeys[snapsManager.vars.bcPlayerId]){
            for(i=0;i<2;i++){
                $.ajax({
                    url: snapsManager.vars.bcProxyUrl + snapsManager.vars.bcPlayerKeys[snapsManager.vars.bcPlayerId].alias + playerType[i] + snapsManager.vars.bcVideoId,
                    type: "POST"
                }).done(function(data){
                    snapsManager.bcAddVids(data);
                });
            }
        }
    },
    bcAddVids: function(data){
		
		if(data != null){
			var $thumbList = $(".js-thumbList"),
				$carouselList = $(".js-carouselList.SNAPS--carousel"),
				thumbLength = $thumbList.find("li").length;
			
			if(data.videos && data.videos.length > 0 && data.videos[0] != null){
				thumbLength++;
				snapsManager.bcBuildVid(data.videos[0], $thumbList, thumbLength, $carouselList);
				snapsManager.initThumbnail(data.videos.length);
			} else {
				thumbLength++;
				snapsManager.bcBuildVid(data, $thumbList, thumbLength, $carouselList);
				snapsManager.initThumbnail(1);
			}
			
			
			// Center the images vertically and initialize the video links
            snapsManager.bcImagePosition();
		}
    },
    bcBuildVid: function(vid, $thumbList, thumbLength, $carouselList){
        var vidRatio = snapsManager.bcGetDimensions(vid);

        // Markup for the thumbnails
        if( $('.js-thumbList > li').length < 4){
        var thumbMarkup = "<li><a class='variationList-trigger js-variationList-trigger js-unbound SNAPS--hideBdrBottom' href='#variation" + thumbLength + "' title='" + vid.name + "'>";

        thumbMarkup += "<div data-alt='" + vid.name + "' data-video='data-video' class='MMM--img MMM--img_smThumbnail js-triggerLink wt-link SNAPS--vidThumb' data-wt='imageThumb'>";
        thumbMarkup += "<img src='" + vid.thumbnailURL + "' alt='" + vid.name + "' />";
        thumbMarkup += "<div class='SNAPS--vidIcon'></div>";
        thumbMarkup += "</div></a></li>";
        $thumbList.append(thumbMarkup);
        }
        // Markup for the actual video
        var vidMarkup = "<li id='variation" + thumbLength + "' class='MMM--carouselListItem js-uncentered'><div class='MMM--carouselListItem-inner'><div class='MMM--carouselFigure'>";

        vidMarkup += "<div id='videoWrapper' data-alt='" + vid.name + "' data-video='data-video' class='MMM--img MMM--img_carousel mix-MMM--img_centered SNAPS--vidStill js-vidPlay' data-vidid='" + vid.id + "' data-vidRes='" + vidRatio + "'>";
		
        vidMarkup += "<img src='" + snapsManager.getVideoThumbImg(vid) + "' alt='" + vid.name + "' title='" + vid.name + "' />";
        //vidMarkup += "<div class='SNAPS--vidIcon'></div>";
        vidMarkup += "</div>";
        vidMarkup += "<div class='SNAPS--carouselCaption'><p class='MMM--variationTitle'>" + vid.name + "</p></div>";
        vidMarkup += "</div></li>";

        // The elements have to be visible for a moment to center the play icon
        $("body").append(vidMarkup);
		snapsManager.vars.bcVidCarouselIdx = thumbLength;
		
        // We need to keep track of how many video still images are loading so the JS can recalculate the carousel at the right time
        snapsManager.vars.bcLoading++;
        $(".js-uncentered .SNAPS--vidStill img").on("load", function(){
            snapsManager.vars.bcLoading--;
            snapsManager.centerElement($(".js-uncentered").find(".SNAPS--vidIcon"), $(".js-uncentered").find(".SNAPS--vidStill img"));
            vidMarkup = $(".js-uncentered").clone(true).removeClass("js-uncentered");
            $(".js-uncentered").remove();
            $carouselList.append(vidMarkup);			

            // Rebuild the carousel to account for the new items only if all images have loaded
            if(snapsManager.vars.bcLoading === 0) snapsManager.bcCarouselFix();
        });

        $carouselList.width(533*thumbLength);
        $(".js-slideTotal").text(thumbLength);
        
    },
    bcGetDimensions: function(video){
        var vidRatio = 1;        
        if (video.sources[0].width > 1 && video.sources[0].height > 1) vidRatio = video.sources[0].width / video.sources[0].height;		
        return vidRatio;
    },
    bcImagePosition: function(){
        $(".SNAPS--vidThumb img").each(function(){
            $(this).on("load", function(){
                snapsManager.centerElement($(this), $(this).parents("li"));
            });
        });
    },
    bcLoaded: function(experience){
        // Hide the loader gif if applicable
        $("#js-loaderGif").hide();
        snapsManager.vars.player = brightcove.api.getExperience(experience);
        snapsManager.vars.bcMod = snapsManager.vars.player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
        snapsManager.vars.bcExp = snapsManager.vars.player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    },
    bcReady: function(event){
        snapsManager.vars.bcMod.loadVideoByID(snapsManager.vars.bcVidId);
    },
    bcCarouselFix: function(){
        if(window.app.carousel) window.app.carousel.createChildren();
        if(window.app.carouselController){
            window.app.carouselController.disable();
            window.app.carouselController.$triggers = $(".js-variationList-trigger");
            window.app.carouselController.$triggers.off("click");
            window.app.carouselController.enable();
        }
    },
    shareInit: function(){
        var $shareContain = $(".SNAPS--share-container"),
            $topRow = $("<div class='SNAPS-toprow'><span class='socialtitle'></span><ul></ul></div>"),
            $expandRow = $("<ul class='SNAPS--sharerow SNAPS--rowfirst SNAPS--hide'></ul>"),
            customShares = {};

        //Gather custom share widgets from the page
        $.extend(true, customShares, window["snapsCustomShares"]);

        $shareContain.find(".SNAPS--share .SNAPS--social").each(function(i){
            var shareTxt = $(this).text(),
                shareTitle = $(this).attr("data-title"),
                $shareLi = $("<li></li>"),
                $shareItem = $("<a class='SNAPS--socialIcn SNAPS--hideBdrBottom' target='_blank' title='" + shareTitle + "'></a>"),
                delimiter = location.href.indexOf("?") > -1 ? "&" : "?";

            $shareLi.append($shareItem);

            switch(shareTxt){
                case "Email":
                    $shareItem.removeAttr("target").addClass("SNAPS--socialIcn_email").attr("href", "mailto:?body=" + location.href);
                    break;
                case "Facebook":
                    $shareItem.addClass("SNAPS--socialIcn_facebook").attr("href", "//www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(location.href + delimiter + "WT.mc_id=smb_facebook") + "&t=" + document.title);
                    break;
                case "Twitter":
                    $shareItem.addClass("SNAPS--socialIcn_twitter").attr("href", "//twitter.com/home?status=" + encodeURIComponent(location.href + delimiter + "WT.mc_id=smb_twitter"));
                    break;
                case "Youtube":
                    $shareItem.addClass("SNAPS--socialIcn_youtube").attr("href", $(this).attr("data-href"));
                    break;
                case "Linkedin":
                    $shareItem.addClass("SNAPS--socialIcn_linkedin").attr("href", "//www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(location.href + delimiter + "WT.mc_id=smb_linkedin"));
                    break;
                case "Googleplus":
                    $shareItem.addClass("SNAPS--socialIcn_googleplus").attr("href", "//plus.google.com/share?url=" + encodeURIComponent(location.href + delimiter + "WT.mc_id=smb_google"));
                    break;
                case "Pinterest":
                    $shareItem.addClass("SNAPS--socialIcn_pinterest").attr("href", "//pinterest.com/pin/create/button/?url=" + encodeURIComponent(location.href + delimiter + "WT.mc_id_smb_pinterest") + "&media=" + encodeURIComponent(snapsManager.vars.jsMainImage) + "&description=" + encodeURIComponent(document.title));
                    break;
                case "Reddit":
                    $shareItem.addClass("SNAPS--socialIcn_reddit").attr("href", "//www.reddit.com/submit?url=" + encodeURIComponent(location.href + delimiter + "WT.mc_id_smb_reddit"));
                    break;
                case "Flickr":
                    $shareItem.addClass("SNAPS--socialIcn_flickr").attr("href", "//www.flickr.com/photos/" + $(this).attr("data-href"));
                    break;
                case "Digg":
                    $shareItem.addClass("SNAPS--socialIcn_digg").attr("href", "//digg.com/submit?phase=2&url=" + encodeURIComponent(location.href + delimiter + "WT.mc_id_smb_digg") + "&title=" + encodeURIComponent(document.title));
                    break;                 
                default:
                    if(customShares[shareTxt]){
                        var share = customShares[shareTxt];
                        $shareItem.attr("class", share.shareClass).attr("href", share.shareHref);
                    }
                    break;
            }

            if(i < 3) $topRow.find("ul").append($shareLi);
            else $expandRow.append($shareLi);

            $(this).remove();
        });

        $topRow.find("ul").append("<li><a href='#' class='SNAPS--moreimg SNAPS--hideBdrBottom'></a></li><li class='SNAPS--hide'><a href='#' class='SNAPS--lessimg SNAPS--hideBdrBottom'></a></li>");
        $shareContain.find(".SNAPS--share").append($topRow).append($expandRow);

        $shareContain.find(".SNAPS--moreimg").on("click", function(e){
            e.preventDefault();
            $(this).parent().addClass("SNAPS--hide");
            $shareContain.find(".SNAPS--lessimg").parent().removeClass("SNAPS--hide");
            $shareContain.find(".SNAPS--rowfirst").removeClass("SNAPS--hide");
        });
        $shareContain.find(".SNAPS--lessimg").on("click", function(e){
            e.preventDefault();
            $(this).parent().addClass("SNAPS--hide");
            $shareContain.find(".SNAPS--moreimg").parent().removeClass("SNAPS--hide");
            $shareContain.find(".SNAPS--rowfirst").addClass("SNAPS--hide");
        });
    },
    searchInit: function(){
        $('#Product').addClass('MMM--isActive');
        $('.js-menuList-select').children(':contains(' + $('#Product').text() + ')').attr('selected', 'selected');
    },
    centerElement: function(centered, parent){
        parent = parent == undefined ? centered.parent() : parent;
        centered.css({top: (parent.height()-centered.height())/2 + "px", left: (parent.width()-centered.width())/2 + "px"});
    },
    cookieManager: {
        createCookie: function(name, value, days) {
            var expires = "";
            
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                var expires = "; expires=" + date.toGMTString();
            }
            document.cookie = name + "=" + escape(value) + expires + "; path=/";
        },
        readCookie: function(name) {
            var i, len, c,
                nameEQ = name + "=",
                ca = document.cookie.split(";");
            
            for(i=0,l=ca.length;i<l;i++) {
                c = ca[i];
                
                while (c.charAt(0) === " ")  {
                    c = c.substring(1, c.length);
                }
                
                if (c.indexOf(nameEQ) === 0) {
                    return unescape(c.substring(nameEQ.length, c.length));
                }
            }
            return null;
        },
        eraseCookie: function(name) {
            snapsManager.cookieManager.createCookie(name, "", -1);
        }
    },
    wtInit: function(){
        var wtArgs = $.extend(true, {}, snapsManager.vars.wt);

        $(".wt-link").each(function(){
            if(!$(this).hasClass("wtLoaded")){
                $(this).on("click", function(){
                    tag = $(this).attr("data-wt");
                    thisArgs = $.extend(true, {}, wtArgs);

                    // Run functions and replace placeholders
                    thisArgs[tag] = snapsManager.wtPlaceholders(thisArgs[tag], tag, $(this));

                    dcsMultiTrack.apply(null, thisArgs[tag]);
                });
                $(this).addClass("wtLoaded");
            }
        });

        $(".wt-change").each(function(){
            if(!$(this).hasClass("wtLoaded")){
                $(this).on("change", function(){
                    tag = $(this).attr("data-wt");
                    thisArgs = $.extend(true, {}, wtArgs);

                    // Run functions and replace placeholders
                    thisArgs[tag] = snapsManager.wtPlaceholders(thisArgs[tag], tag, $(this));

                    dcsMultiTrack.apply(null, thisArgs[tag]);
                });
                $(this).addClass("wtLoaded");
            }
        });

        // Fill in any dynamic meta tags
        $("meta[content]").each(function() {
			if($(this).attr("content").indexOf("[") > -1 && $(this).attr("content").indexOf("]") > -1) {
				var metaCon = $(this).attr("content"); 
				metaCon = metaCon.replace(/[\[\]']+/g,'');
				$(this).attr("content", metaCon);
			}
		});
    },
    wtPlaceholders: function(tagArgs, tag, clicked){
        var multisel_chk = (clicked.hasClass("js-multiselect")) ? true:false,
            dimValue;
        for(i=0,l=tagArgs.length;i<l;i++){
            if(tagArgs[i].indexOf("function:") > -1) tagArgs[i] = snapsEval(snapsEval(tagArgs[i].substring(9, tagArgs[i].length)));
            if(tagArgs[i].indexOf("[text]") > -1) tagArgs[i] = tagArgs[i].replace("[text]", clicked.text());
            if(tagArgs[i].indexOf("[value]") > -1) tagArgs[i] = tagArgs[i].replace("[value]", clicked.val());
            if(tagArgs[i].indexOf("[pageTitle]") > -1) tagArgs[i] = tagArgs[i].replace("[pageTitle]", jsPageTitle);
            if(tagArgs[i].indexOf("[productID]") > -1) tagArgs[i] = tagArgs[i].replace("[productID]", jsProductID);
            if(tagArgs[i].indexOf("[actionLabel]") > -1) tagArgs[i] = tagArgs[i].replace("[actionLabel]", clicked.parents(".MMM--actionLabel").text());
            if(tagArgs[i].indexOf("[attr:") > -1){
                var atr = tagArgs[i].substring(tagArgs[i].indexOf("[attr:")+6, tagArgs[i].indexOf("]"));
                tagArgs[i] = tagArgs[i].replace("[attr:" + atr + "]", clicked.attr(atr));
            }
            if(tagArgs[i].indexOf("[refinement]") > -1){ 
                var text = (multisel_chk == true) ? clicked.next('label').text():clicked.text();
                var index= text.indexOf('(');
                text = text.substr(0,index).trim();
                tagArgs[i] = tagArgs[i].replace("[refinement]", text);
            }
            if(tagArgs[i].indexOf("[dimensionKey]") > -1) {
                var dimensionKey = (multisel_chk == true) ? clicked.closest(".SNAPS--filterList").find('.MMM--actionLabel').text().trim():clicked.closest(".SNAPS--filterList").find('.MMM--actionLabel').text().trim();
                if("Product Category" == dimensionKey){
                    tagArgs[i] = tagArgs[i].replace("[dimensionKey]", "WT.z_snaps_cat");
                }else if ("Industries" == dimensionKey){
                    tagArgs[i] = tagArgs[i].replace("[dimensionKey]", "WT.z_snaps_ind");
                }else if ("Featured Brands" == dimensionKey){
                    tagArgs[i] = tagArgs[i].replace("[dimensionKey]", "WT.z_snaps_brnds");
                }
                else{
                    tagArgs[i] = tagArgs[i].replace("[dimensionKey]", "Else condition");
                }
            }
            if(tagArgs[i].indexOf("[dimensionValue]") > -1){
                dimValue = (multisel_chk == true) ? clicked.closest(".SNAPS--filterList").find('.MMM--actionLabel').text().trim():clicked.closest(".SNAPS--filterList").find('.MMM--actionLabel').text().trim();
                tagArgs[i] = tagArgs[i].replace("[dimensionValue]", dimValue);
            }
        }

        return tagArgs;
    },
    // This function will contain any resize event actions
    resize: function(){
        // If Brightcove is initialized the player may need to be resized
        if(snapsManager.vars.bcExp) {
            var ratio = $("#myExperience").width()/$("#myExperience").height(),
                baseDimension = 400,
                wRatio, hRatio;

            // Determine if width or height is greater based on the ratio, the taller one will have a multiplier of 1
            wRatio = (ratio >= 1) ? 1 : ratio;
            hRatio = (ratio <= 1) ? 1 : ratio;
                
            // If tablet portrait view or greater
            if($(window).width() > 767){
                // If tablet landscape or greater
                //if($(window).height() <= 768) baseDimension = 266;
            }
            // Otherwise mobile
            else baseDimension = 225;
        
            snapsManager.vars.bcExp.setSize(baseDimension/wRatio, baseDimension/hRatio);
            $("#myExperience").css({width: baseDimension/wRatio + "px", height: baseDimension/hRatio + "px"});
        }

        // Re-center the overlay icons as well but only if they're already visible
        if($(".SNAPS--vidStill img").length > 0){
            $(".SNAPS--vidStill img").each(function(){
                if($(this).width() > 0 && $(this).height() > 0) snapsManager.centerElement($(this).siblings(".SNAPS--vidIcon"));
            });
        }

        // Re-position navigation
        if($(".SNAPS--headerBanner").length > 0) snapsManager.positionNav();
    },  
    
    init360: function(){
        // Count the 360-type images
        $(".js-360Player").each(function(){        
            snapsManager.vars.img360Count++;
        });
        $(".js-360Player").each(function() {
            $.ajax({
                url: "//multimedia.3m.com/mws/media360/"+ $(this).data("celum") +"/properties.json?callback=snapsManager.create360Image",
                dataType: "jsonp",
                error: function(){
                    $(this).hide();
                }
            });
        }); 
    },
    
    create360Image: function(data){
    
        var fileUrl = data.firstfileurl,
            celumID = fileUrl.substring(fileUrl.indexOf("media360") + 9, fileUrl.indexOf("media360") + 16),
            $thumbnail = $("img[data-celum="+ celumID +"]");            
            if($thumbnail){
                $thumbnail.attr("src", fileUrl);
                $thumbnail.parent().parent().css({top:0});
            }
            $thumbnail.parent().append("<div class='SNAPS--H360Icon'></div>");
            snapsManager.vars.img360Count--;

            var magic360Options = "columns: "+data.columns+"; "+
                                  "rows: "+data.rows+"; "+                                
                                  "large-filename: "+data["large-filename"]+";"+
                                  "filename: "+data.filename+"; magnify: false; ";
            
            // multiple 360 image starts
            $(".Magic360.cbImg360[data-celum=" + celumID + "]").attr("data-magic360-options", magic360Options);
            $(".Magic360.cbImg360[data-celum=" + celumID + "]").attr("href", data.firstfileurl);
            $(".Magic360.cbImg360[data-celum=" + celumID + "]").find("img").attr("src", data.firstfileurl);     
            // multiple 360 image ends
            $(".Magic360.cbImg360[data-celum=" + celumID + "]").append("<img src="+data.firstfileurl+" class='mlItemImage'/>");
            
            if(snapsManager.vars.img360Count === 0) {
                snapsManager.magic360Load();
            }
    },
    
    magic360Load: function(){
        //We need to have the 360 image information before the JS is loaded
        $.getScript("/wps/wcm/connect/3M%20Restricted/SNAPS/Global/Magic360.js?subtype=javascript&presentationtemplate=3M%20Design%20Patterns/PT%20-%20JS&subtype=javascript"
        ,snapsManager.magic360LoadCallback);
    },
    
    magic360LoadCallback: function(){
        // onready method will get fired after completion of every 360 images loaded.
        Magic360.options = {
            onready: function(spin) { 
            }
        };
        Magic360.lang = {
            'hint-text': snapsManager.vars.txt_Img360Placeholder,
            'mobile-hint-text': snapsManager.vars.txt_Img360Placeholder
        };
        $('.js-variationList-trigger').on('click',function(){
            $('.Magic360').each(function(i){
                var columns = $(this).attr("data-magic360-options");
                // DDS-1322 - Check for existence of data-magic360-options
                if(columns){ //test to ensure columns returns data
                columns = (columns.split(';')[0].split(':')[1] )*2;
                Magic360.spin($(this).attr('id'),columns);
                }
            });
        });
    },
    loadVariantPage: function(refinement) {
        var refinementURL = $(refinement).attr("href"),
            currentURL = window.location.href,
            currURLWithoutParam = currentURL.substring(0, currentURL.indexOf("?")),
            loadURL;
            
        // If &app=pr is already in the URL we don't need to add it again
        (refinementURL.indexOf("&app=pr") > -1) ? addlParams = "":addlParams = "&app=pr";
        
        // Assemble the URL where the new table will come from
        if (currentURL.indexOf('~') < 0) {
            loadURL = currURLWithoutParam + '~/' + refinementURL.replace("rt=r3", "rt=rud").replace("&Nu=base_product_pk", "") + addlParams;
        } else {
            loadURL = currURLWithoutParam + refinementURL.replace("rt=r3", "rt=rud").replace("&Nu=base_product_pk", "") + addlParams;
        }
        
        var oMarkup, newMarkup,
            targetClass = $(refinement).attr("data-target"),
            $target = $("." + targetClass);

        $.ajax({
            url: loadURL,
            beforeSend: function(){
                // Capture the original markup just in case
                oMarkup = $target.html();
                $target.html("<img id='js-loaderGif' class='SNAPS--loaderImg' src='" + snapsManager.vars.jsLoaderImg + "' />");
                // Closing the light box
                $("#js-quickViewModal").hide();
                $(".js-overlay").remove();
            },
            success: function(data){
                newMarkup = $(data).find(".js-prodResultsTarget");
                $target.html(newMarkup);

                // Re-initialize the product results
                snapsManager.prodResultsInit();
                if($(data).find(".js-detailPageLoader")) snapsManager.nextProductsResults();
                if($(".js-moreProductRefinements").length > 0) snapsManager.moreProductRefinements();
                if(snapsManager.vars.allModelTotCount == 1) snapsManager.oneAvailableBtn(); 
            },
            error: function(){
                // Put the old markup back in place and closing the light box
                $target.html(oMarkup);
                $("#js-quickViewModal").hide();
                $(".js-overlay").remove();
            }
        });
    },
    adjustListHeight: function () {
      var devicewidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
      if (devicewidth >= 300)
      {
        var moduloIndex = 0;
        var listLength = $('#comparisonForm ul>li').length;
		if (devicewidth >= 300 && devicewidth <= 500)
			 moduloIndex = 2;
        else if (devicewidth >= 501 && devicewidth <= 958)
            moduloIndex = 3;
        else if (devicewidth >= 959 && devicewidth <= 1279)
            moduloIndex = 4;
        else if (devicewidth >= 1280)
            moduloIndex = 4;
        var highestTextBox = 0,highestMdlbx=0;
        var highestImagetBox = 0;
		var highestdiv=0;
        var startIndex = 0;
        var chckBVRRInline = 0;
        $('#comparisonForm ul>li,.SNAPS--products form ul>li').each(function (i) {
          i++;
          highestdiv=0;
          highestTextBox=0;
          $('#comparisonForm ul>li .SNAPS--prdtTitleContent,.SNAPS--products form ul>li .SNAPS--prdtTitleContent').slice(startIndex, i).each(function () {
            if ($(this).height() > highestTextBox )
            highestTextBox = $(this).height();
          });
          /*$('#comparisonForm ul>li .SNAPS--alignHeight').slice(startIndex, i).each(function () {
            if ($(this).height() > highestdiv )
            highestdiv = $(this).height();
          });*/
          $('.MMM--mediaListFigure', this).each(function () {
            if ($(this).height() > highestImagetBox)
            highestImagetBox = $(this).height();
          });
          $('.SNAPS--Modlcnt', this).each(function () {
            if ($(this).height() > highestMdlbx)
            highestMdlbx = $(this).height();
          });
          if (i % moduloIndex == 0)
          { 
            $('#comparisonForm ul>li .SNAPS--Modlcnt').slice(startIndex, i).height(highestMdlbx);
            //$('#comparisonForm ul>li .SNAPS--alignHeight').slice(startIndex, i).height(highestdiv);
            $('#comparisonForm ul>li .SNAPS--prdtTitleContent,.SNAPS--products form ul>li .SNAPS--prdtTitleContent').slice(startIndex, i).height(highestTextBox);
            $('#comparisonForm ul>li .MMM--mediaListFigure,.SNAPS--products form ul>li .MMM--mediaListFigure').slice(startIndex, i).height(highestImagetBox);
            chckBVRRInline = $('#comparisonForm ul>li .SNAPS--prdRatings').slice(startIndex, i).find('div[data-bv-show="rating_summary"]').length;
            if (chckBVRRInline > 0)
                $('#comparisonForm ul>li .SNAPS--prdRatings').slice(startIndex, i).height(38);
            else
                $('#comparisonForm ul>li .SNAPS--prdRatings').slice(startIndex, i).css('margin-bottom','15px');
            //highestTextBox = 0;
            highestImagetBox = 0;
            startIndex = startIndex + moduloIndex;
          }
        });
        if (listLength % moduloIndex != 0)
        {
          $('#comparisonForm ul>li .SNAPS--Modlcnt').slice(startIndex, listLength).height(highestMdlbx);
          //$('#comparisonForm ul>li .SNAPS--alignHeight').slice(startIndex, listLength).height(highestdiv);
          $('#comparisonForm ul>li .SNAPS--prdtTitleContent,.SNAPS--products form ul>li .SNAPS--prdtTitleContent').slice(startIndex, listLength).height(highestTextBox);
          $('#comparisonForm ul>li .MMM--mediaListFigure,.SNAPS--products form ul>li .MMM--mediaListFigure').slice(startIndex, listLength).height(highestImagetBox);
          chckBVRRInline = $('#comparisonForm ul>li .SNAPS--prdRatings').slice(startIndex, listLength).find('div[data-bv-show="rating_summary"]').length;
          if (chckBVRRInline > 0)
            $('#comparisonForm ul>li .SNAPS--prdRatings').slice(startIndex, listLength).height(38);
          else
            $('#comparisonForm ul>li .SNAPS--prdRatings').slice(startIndex, listLength).css('margin-bottom','15px');
        }
      }
    },
    appendTags: function(container){
        $("#" + container).find("meta").each(function(){
            $("head").prepend($(this).clone(true));
            $(this).remove();
        });

        // Fill in any dynamic meta tags
        $("meta[content]").each(function(){
            if($(this).attr("content").indexOf("[") > -1 && $(this).attr("content").indexOf("]") > -1){
                var metaCon = $(this).attr("content");
				metaCon = metaCon.replace(/[\[\]']+/g,'');				
                $(this).attr("content", metaCon);
            }
        });
    },
    spin360: function(){
        $('a[class^="js-carouselTrigger"]').on('click',function(){
            $('.Magic360').each(function(i){
                var columns = $(this).attr("data-magic360-options");
                // DDS-1322 - Check for existence of data-magic360-options
                if (columns) { //test to ensure columns returns data
                    columns = (columns.split(';')[0].split(':')[1] )*3;
                    Magic360.spin($(this).attr('id'),columns);
                }
            });
        });
    },
    detailsMenuInit: function(){
        
        if($('.js-sticky-menu-wrapper').length == 0 ) return;
        $('.js-menu-header-first').after($('<div class="MMM-arrow-right js-arrow-right" data-selected="'+$('.js-menu-header-first')[0].id+'"></div>'));
        $('.js-menu-header-first').addClass('MMM-menu-header-selected');
        $('.js-menu-header').on('click',function(){
            /*$('.js-arrow-right').remove();
            $('.js-menu-header').removeClass('MMM-menu-header-selected');
            $(this).addClass('MMM-menu-header-selected');
            $(this).after($('<div class="MMM-arrow-right js-arrow-right"></div>'));*/
            snapsManager.vars.clickControl = true;
            snapsManager.vars.scrollControl = false;
            $('.js-menu-header').removeClass('MMM-menu-header-selected');
            $('.js-arrow-right').remove();
            $(this).addClass('MMM-menu-header-selected');
            $(this).after($('<div class="MMM-arrow-right js-arrow-right"></div>'));
            var target = this.id;
            snapsManager.vars.scrlltrgt = target; 
            var x = $('div[data-content="'+target+'"]').offset().top;
            x = x-($('.js-sticky-title-wrapper').height() + $('.MMM--siteNav').height());
            if(snapsManager.vars.jsBVEnabled =="true") x = x-38;
            if($('.MMM--productSku').length > 0 ) x = x-($('.MMM--productSku').height() * $('.MMM--productSku').length);
            $('html, body').animate({scrollTop: x}, 1000,function(){
                snapsManager.vars.clickControl = false;
                snapsManager.vars.scrollControl = true;
            });
        });
        $(window).scroll(function(){
            var currentDiv = snapsManager.isScrolledIntoView();
            if(snapsManager.vars.scrollControl && !snapsManager.vars.clickControl ){
                if(currentDiv){
                    snapsManager.selectMenuOnScroll(currentDiv);
                }   
            }
            if(window.innerWidth > 991 && window.innerWidth<1200){
                $('.js-sticky-title-wrapper').css('width','98%');
            }
            if(window.innerWidth >= 1200){
                $('.js-sticky-title-wrapper').css('width','1170');
            }
            snapsManager.vars.showProdImg = $(this).scrollTop();
            var mainImgHeight = $('.MMM--content_media_large').height();
            var checkImgHeight = mainImgHeight + 200;
            
            if(checkImgHeight < snapsManager.vars.showProdImg){
                $('.MMM--contentDetailBlock-content_media').fadeIn("slow");
            }
            else{
                $('.MMM--contentDetailBlock-content_media').fadeOut();
            }   
            
            if($('.MMM--siteNav').parent().hasClass('is-sticky')){
                $('.MMM--siteNav').addClass('SNAPS--bgWhite');
            }
            else{
                $('.MMM--siteNav').removeClass('SNAPS--bgWhite');
            }
            if($('.js-sticky-title-wrapper').parent().hasClass('is-sticky')){
                $('.js-sticky-title-wrapper').addClass('MMM--stickyStart');
            }
            else{
                $('.js-sticky-title-wrapper').removeClass('MMM--stickyStart');
            }
            if($('.MMM-espaBreadcrumbs').parent().hasClass('is-sticky')){
                $('.MMM--breadcrumbs_clean').addClass('MMM--dentalStickyBreadcrumb');
            }
            else{
                $('.MMM--breadcrumbs_clean').removeClass('MMM--dentalStickyBreadcrumb');
            }   
        });
    },
    selectMenuOnScroll: function(currentDiv){
        $('.js-arrow-right').remove();
        $('.js-menu-header').removeClass('MMM-menu-header-selected');
        var currentDiv = currentDiv.getAttribute('data-content');
        if (snapsManager.vars.scrlltrgt != ""){
            currentDiv = snapsManager.vars.scrlltrgt;
            snapsManager.vars.scrlltrgt = "";
        }
        $("#"+currentDiv).addClass('MMM-menu-header-selected');
        $("#"+currentDiv).after($('<div class="MMM-arrow-right js-arrow-right"></div>'));
    },
    sectnToggleEffect: function(){
        var MMM_dvc_wdth = window.innerWidth;
        if(MMM_dvc_wdth >= 320 && MMM_dvc_wdth <= 767){
            
            $('.MMM--hdg.SNAPS--hdg_2').addClass('MMM--toggle_trggr');
            $('.MMM--tabSection .MMM--hdg.SNAPS--hdg_2').css('border-bottom','0px');
            $('.MMM--toggle_trggr').on('click',function(){
                $(this).find('.SNAPS--toggle_icon').toggleClass('MMM--icn_arrowUp MMM--icn_arrowDown');
                var visible = $(this).next().hasClass('MMM--isActive');
                if(visible){
                    $(this).next().removeClass('MMM--isActive');
                    $(this).css('border-bottom','0px');
                }
                else{
                    $(this).next().addClass('MMM--isActive');
                    $(this).css('border-bottom','1px solid grey');
                }
            });
            
        }
        else{
            $('.MMM--hdg.SNAPS--hdg_2').removeClass('MMM--toggle_trggr');
            $('.MMM--tabSection .MMM--hdg.SNAPS--hdg_2').next().addClass('MMM--isActive');
        }
    },
    initThumbnail: function(videoCount){
        if( $('.js-thumbList > li').length > 4){
          var temp = $('.js-thumbList > li');
          temp = temp.slice(4,temp.length);
          for(i=0;i<temp.length;i++){
            $(temp[i]).remove();
          }
        }
        var icount =  parseInt(snapsManager.vars.imageCount);
        var vcount =   videoCount == undefined? 0 : parseInt(videoCount);
        if(icount>=1 && vcount==0){
            $('#js-variationsModalTrigger').html(snapsManager.vars.txt_legacy_viewImages);
        } else if(snapsManager.vars.imagecelumId ==0){
			$('#js-variationsModalTrigger').html("");
		}
		else {
            $('#js-variationsModalTrigger').html(snapsManager.vars.txt_legacy_viewImages +" "+ snapsManager.vars.txt_legacy_viewImagesNVid);
        }
        
        /*if(icount==1 && vcount==0){
            $('#js-variationsModalTrigger').html(snapsManager.vars.txt_viewImage);
        }else if(icount>1 && vcount==0){
             $('#js-variationsModalTrigger').html(snapsManager.vars.txt_viewImages);
        }else if(icount==1 && vcount==1){
             $('#js-variationsModalTrigger').html(snapsManager.vars.txt_viewImgNdVid);
        }else if(icount>1 && vcount==1){
             $('#js-variationsModalTrigger').html(snapsManager.vars.txt_viewImgsNdVid);
        }else if(icount==1 && vcount>1){
             $('#js-variationsModalTrigger').html(snapsManager.vars.txt_viewImgNdVids);
        }else if(icount>1 && vcount>1){
             $('#js-variationsModalTrigger').html(snapsManager.vars.txt_viewImgsNdVids);
        }*/

    },
    detailsNormalizeDiv: function(){
        if($('.SNAPS--tabRow > div').length ==2 && window.innerWidth >= 768){
            $('.SNAPS--tabRow > .MMM--accordionPanel').css('width','63%');
        }
        if($('.SNAPS--allModelsSection--container').length == 0){
            $('.SNAPS--tabRow').css('margin-bottom','20px');
        } else if ($('.js--firstTab').length != 0) {
            $('.SNAPS--tabRow').css('margin-bottom','20px');
        }
    },

    stickyCalculate: function(){ //Calculate Sticky element options (top & bottom spacing)
        if(snapsManager.vars.jsBVEnabled =="true"){
            $('div[data-bv-show="rating_summary"]').css('height','38px');
        }
        var footerHeight ;
        if($('.MMM--theme-ft').length > 0 ){
            footerHeight = $('.MMM--theme-ft').height()+70; 
        }else if($('.MMM-site-ft').length > 0 ){
            footerHeight = $('.MMM-site-ft').height()+76; 
        }
        var headerHeight = $('.MMM--siteNav').height()+$('.js-sticky-title-wrapper').height()+40;
        if($('.MMM--productSku').length > 0 ) headerHeight = headerHeight+($('.MMM--productSku').height() * $('.MMM--productSku').length);
        if($('.SNAPS--disclaimerBlock').length > 0){
        $('.js-sticky-menu-wrapper').sticky({topSpacing: headerHeight ,bottomSpacing:footerHeight + $('.SNAPS--disclaimerBlock').height()});
        }
        else{
            $('.js-sticky-menu-wrapper').sticky({topSpacing: headerHeight ,bottomSpacing:footerHeight});
        }
        var breadheaderHeight;
        if($('.MMM--siteNav').length > 0){
            breadheaderHeight = $('.MMM--siteNav').height();
        }else if($('.MMM--breadcrumbs').length > 0){
            breadheaderHeight = $('.MMM-espaBreadcrumbs').height();
        }
        
        breadheaderHeight = breadheaderHeight - 1; //Substracting 1px to eliminate gap between sticky header and top of the page 

        $('.js-sticky-title-wrapper').sticky({topSpacing:breadheaderHeight});
        
        if(window.innerWidth < 768){
            $('.js-sticky-title-wrapper').unstick();
            $('.js-sticky-title-wrapper').sticky({topSpacing: 0});
        }
        
        if($('.MMM--siteNav').length > 0){
            $('.MMM--siteNav').sticky({topSpacing: 0});
        }
        else if($('.MMM--breadcrumbs').length > 0){
            $('.MMM-espaBreadcrumbs').sticky({topSpacing: 0});
        }
        snapsManager.detailsMenuInit();
    },

    detailsStickyInit: function(){
        snapsManager.vars.firstTab = $('.js--firstTab').attr('data-content');
        $.getScript("/wps/wcm/connect/3M%20Restricted/SNAPS/Global/Sticky.js?subtype=javascript&presentationtemplate=3M%20Design%20Patterns/PT%20-%20JS&subtype=javascript"
            ,function(){
                snapsManager.stickyCalculate();
                $(window).on('resize', snapsManager.stickyCalculate); //Recalculate after a resize
            });
            $('.js-viewAllDetails, .js-viewMore').on("click", function (e) {
                var x = $('div[data-content="'+this.getAttribute('data-url')+'"]').offset().top;
                x = x-153;
                $('html, body').animate({scrollTop: x}, 1000);
            });
            $('.js-viewLegalDisclaimer').on("click", function (e) {
                var x = $('div[data-content="'+this.getAttribute('data-url')+'"]').offset().top;
                x = x-140;
                $('html, body').animate({scrollTop: x}, 1000);
            });
    },
    
    formatAllmodels: function(){
        if($(".js-allModelsSection").length > 0 ){
            var headers = new Array(),previous,hcount,maxLimit=6,removeList = new Array();
            
            $(".js-allModelSection").find('.MMM-row-header').find('.js-dat-header').each(function(){
              headers.push(this.getAttribute('data-model'));
            });
            
            $(".js-allModelSection").find('.js-row-results').each(function(){
              $(this).find('.js-dat-result').each(function(){
                  var data = this.getAttribute('data-model');
                  if(headers.indexOf(data) == -1){
                      removeList.push(data);
                  }
                  else{
                      this.setAttribute('data-sort', headers.indexOf(data));
                  } 
              });
            });
            
            if(removeList.length >0){
                for(i=0;i<removeList.length;i++){
                    $('div[data-model="'+removeList[i]+'"]').remove();
                }
            }
            
            $(".js-allModelSection").find('.js-row-results').each(function(){

                
                var obj={}; 
                for(i=0;i<($(this).children().length)-1;i++)
                {            
                    obj[$(this).children()[i].getAttribute('data-model')] = $(this).children()[i];
                }
                // End: Modified for SNAPS-2395
                previous = null;
                hcount=1;
                if($(this).children().length-2 < headers.length){
                    previous = $(this).children()[0];
                    
                    
                    for(i=0;i<headers.length;i++){
                        // Start: Modified for SNAPS-2395
                        if(obj[headers[i]]!=null)
                        {
                            $(previous).after(obj[headers[i]]);
                        }
                        else
                        {
                        $(previous).after($('<div class=" MMM--dat-cell dat-cell_specHeader js-dat-empty" data-model="'+headers[i]+'" data-sort="'+i+'"> </div>'));
                        }
                        
                        previous = $(this).children()[hcount];
                        hcount++;
                    }

                    if($(this).find('.SNAPS--bdr').length){
                        $(this).find('.js-dat-empty').removeClass("dat-cell_specHeader").addClass("SNAPS--pb0 SNAPS--verticalTop");
                        $(this).find('.js-dat-empty').append('<div class="SNAPS--bdr SNAPS--pb0" style="margin-top:64px;"></div>');
                    }
              }
            });
            if(headers.length > maxLimit){
                var temp = headers.splice(maxLimit,headers.length);
                for(i=0;i<temp.length;i++){
                    $('div[data-model="'+temp[i]+'"]').remove();
                }
            }
            
            $(".js-allModelSection").find('.js-row-results').each(function(){
                var $divs=$(this).find(".MMM--dat-cell");
                var orderedColumns = $divs.sort(function(a, b) {
                    var contentA =parseInt( $(a).attr('data-sort'));
                    var contentB =parseInt( $(b).attr('data-sort'));
                    return contentA > contentB;
                }).appendTo($(this));
                //$(this).append(alphabeticallyOrderedDivs);
            });
            
            snapsManager.allmodelsWTb();
        }
    },
     allmodelsWTb: function(){
         if($(window).width() > 1024){
                  $('.js-row-results').each(function(){
                   var actualWTB,destinationCell,secondDestination,firstChildWTB,secondWTB;
                   var wtbSection = $(this).find('.hide');
                   var attrCount=$('.js-desktopHdr').length;
                   var actualWTBCount= wtbSection.find('.SNAPS--pb10').length;
                  if(actualWTBCount>1){
                     actualWTB = wtbSection.find('.SNAPS--pb10');
                     destinationCell= wtbSection.parent().prev();
                     secondDestination = wtbSection.parent().prev().prev();
                     actualWTB.addClass('SNAPS--mtop10 SNAPS--inlineBlock SNAPS--mb10');
                     actualWTB.removeClass('SNAPS--pb10');
                     actualWTB.first().addClass('SNAPS--mr5');
                     actualWTB.first().next().addClass('SNAPS--mt20 SNAPS--floatRight');
                     wtbSection.children().first().addClass('SNAPS--floatRight');
                     secondDestination.find('.SNAPS--bdr').append(wtbSection.children().first());
                     destinationCell.find('.SNAPS--bdr').append(wtbSection.children());
                   }
                   else{
                     actualWTB = wtbSection.find('.SNAPS--pb10');
                     destinationCell= wtbSection.parent().prev();
                     actualWTB.addClass('SNAPS--mt10 SNAPS--mb10 SNAPS--inlineBlock SNAPS--floatRight');
                     actualWTB.removeClass('SNAPS--pb10');
                     destinationCell.find('.SNAPS--bdr').append(wtbSection.children());
                   }
                   });
        }
        else if(($(window).width() > 767) && ($(window).width() < 1024)){
                   $('.js-row-results').each(function(){
                   var actualWTB,destinationCell,secondDestination,firstChildWTB,secondWTB;
                   var wtbSection = $(this).find('.hide');
                   var attrCount=$('.js-desktopHdr').length;
                   var actualWTBCount= wtbSection.find('.SNAPS--pb10').length;
                   if(actualWTBCount>1){
                     actualWTB = wtbSection.find('.SNAPS--pb10');
                     destinationCell= wtbSection.parent().prev();
                     secondDestination = wtbSection.parent().prev().prev();
                     actualWTB.addClass('SNAPS--mtop10 SNAPS--inlineBlock SNAPS--mb10');
                     actualWTB.removeClass('SNAPS--pb10');
                     actualWTB.first().addClass('SNAPS--mr5 SNAPS--floatRight');
                     secondDestination.find('.SNAPS--bdr').append(wtbSection.children().first());
                     wtbSection.children().addClass('SNAPS--wtbtablet');
                     destinationCell.find('.SNAPS--bdr').append(wtbSection.children());
                   }
                   else{
                     actualWTB = wtbSection.find('.SNAPS--pb10');
                     destinationCell= wtbSection.parent().prev();
                     actualWTB.addClass('SNAPS--mt10 SNAPS--mb10 SNAPS--inlineBlock SNAPS--floatRight');
                     actualWTB.removeClass('SNAPS--pb10');
                     destinationCell.find('.SNAPS--bdr').append(wtbSection.children());
                   }
                   });
    
        }
        else{
                   $('.js-row-results').each(function(){
                        
                        var wtbSection = $(this).find('.hide');
                        var childwtb=wtbSection.find('.SNAPS--pb10').length;
                        var actualWTB = wtbSection.find('.SNAPS--pb10');
                        wtbSection.removeClass("hide");
                        actualWTB.first().addClass('SNAPS--wtbMobile SNAPS--mr10 SNAPS--inlineBlock');
                        actualWTB.first().next().addClass('SNAPS--wtbMobile SNAPS--inlineBlock');
                        wtbSection.parent().addClass("SNAPS-width100");
                        if(childwtb==1)actualWTB.addClass("SNAPS--floatRight");
                        
                   });
       }
     snapsManager.normalizeAllmodels();
 },
    normalizeAllmodels: function(){
     var maxHeight = 14;
     $(".js-alignHeight, .js-dat-empty").each(function(){
        if($(this).height() > maxHeight){
           maxHeight = $(this).height();
           $(this).addClass("SNAPS--aligned");
        }
      }).height(maxHeight);
    },
    
    isScrolledIntoView: function(){
        var $elem;
        var arrayOfDiv =  $('div[data-content^="N"]')
        for(i=0;i<arrayOfDiv.length;i++){
            $elem = arrayOfDiv[i];
            var $window = $(window);

            var offsetDoc = $('.MMM-menu-header-selected').offset().top;
            var x = offsetDoc;
            var y = x + $('.MMM-menu-header-selected').height();
            //var y = x + 300;

            var a = $($elem).offset().top;
            var b = a + $($elem).height();

            var returnValue;
            
            if(!((b < x) || (a > y)))return $elem;
        }
    },
    moreRelatedProds:function(){
            $('.js-moreRelatedProds').on('click',function(){
                $(this).css('display','none');
                $(".MMM--moreRelated_products").css('display','inline-block');
                $(".MMM-RelatedProdClose").css('display','inline-block');
            });
            $(".js-close").on('click',function(){
                $(this).css('display','none');
                $(".MMM--moreRelated_products").css('display','none');
                $('.js-moreRelatedProds').css('display','inline-block');
                $('html, body').animate({scrollTop: $('.SNAPS--RelatedProducts').offset().top - 150}, 1000);
            });
    },
    moreWTB:function(moreWTBclass){
        $(moreWTBclass).on('change',function(){
            if($(this).val()){
                var url=$(this).val();
                if( $(this).find("option:selected a").attr('target') == '_blank' )
                {
                    window.open(url,'_blank');
                }
                else
                {
                   window.open(url,'_self');
                }
                
            }
            
        });
    },
    toolTipWTBInit:function(){
        $('a.SNAPS--childNode.SNAPS--activeBtn,a.SNAPS--childNode.SNAPS--activeLink,.MMM--fancyDropAnchor,a.SNAPS--activeBtn_disabled').parent(".SNAPS--options_more,.SNAPS--top_button,.SNAPS--wtb_section .MMM--isDisabled").click(function(e){
            
            if (($(".SNAPS--selectDimens .MMM--txt_bold").text() == "" && $(".js-availblCount").text() > 1) || $(".js-hiddenChildDPR").length) {
                $(".SNAPS--toolTipWTB").hide();
                return true;
            }
            
			// Setting the error message
			if ($(".SNAPS--allModel-one").length > 0 || $(".SNAPS--dimensionSelect select").length == 0) {
				$(".SNAPS--toolTipWTB").html(snapsManager.vars.txt_noInfoAvail_Selection);
			} else {
				$(".SNAPS--toolTipWTB").html(snapsManager.vars.txt_productDetails_wtbErrorMsg);
			}
			
            $(".SNAPS--toolTipWTB").hide();
            $(this).children(".SNAPS--toolTipWTB").show();

            $(".SNAPS--dimensionSelect select").each( function() {               
                var notDisabledLength = $(this).find("option:not(:disabled)").length;
                var notSelectedLength = $(this).find('option:selected[value="default"]').length;

                if( notDisabledLength > 0 && notSelectedLength > 0 ) {
                    $(this).closest("select").addClass("errorSelect");
                }                

            });
			
			//$('.SNAPS--options_more,.SNAPS--top_button,.SNAPS--wtb_section .MMM--isDisabled').click(function(e) { e.stopPropagation(); });

            //Stops event to show tooltip or not to allow the tracking work.
            if($(".SNAPS--availableBtn.SNAPS--singleSkuDet").length === 0){
                e.stopPropagation();
            }

            $('html').click(function(e) {                
                $(".SNAPS--toolTipWTB").hide();
                $(".SNAPS--dimensionSelect select").removeClass("errorSelect");
            });
            
        });
        
    },
    allWTB_sectionInit:function(){

        /* creating anchor tags for each wtbs */
        $(".SNAPS--whereToBuybtn .wtbs").each( function() {               
                
            var ctaButtonClass = $(this).attr('class') + ' wt-link';
            var ctaButtonId = $(this).attr('id');
            var ctaButtonName = $(this).attr('name');
            var ctaButtonLabel1 = $(this).attr('label');
			var ctaButtonLabel =  $('<textarea />').html(ctaButtonLabel1).text();
            var ctaButtonUrl = $(this).attr('url');
			/*Modified by Lohith for DDS-367 */
			if ((snapsManager.vars.baseUrl.indexOf("/my3M/")) > -1) {
												
				var res = ctaButtonUrl.substring(0, 4).toLowerCase();
				var link = ctaButtonUrl.split('/');
				
				/*if (link[3].toLowerCase() == "3m" ){ctaButtonUrl = ctaButtonUrl.replace("/3M/", "/my3M/");}*/
				if (res == "/3m/"){ctaButtonUrl = ctaButtonUrl.replace("/3M/", "/my3M/");}
				else{ctaButtonUrl = ctaButtonUrl.replace("/wps/portal/", "/wps/myportal/");}
	            }
			/*Modified by Lohith for DDS-367 */
			/*Modified by Lohith for DDS-446 */
			var ctaButtonWeight = $(this).attr('weight');
			var ewcd_urlParam = $("meta[name='DCSext.ewcd_url']").attr("content");
			var ewcd_urlParam = ewcd_urlParam.substr(0,ewcd_urlParam.indexOf('|'));
			var siteParam = $("meta[name='DCSext.site']").attr("content");
			var regionParam = $("meta[name='DCSext.region']").attr("content");
			var divisionParam = $("meta[name='DCSext.division']").attr("content");
			if(!(ctaButtonWeight==5 || ctaButtonWeight==7 || ctaButtonWeight==8))
			{
				ctaButtonUrl = ctaButtonUrl.concat("&DCSext.site="+siteParam+"&DCSext.ewcd_url="+ewcd_urlParam+"&DCSext.region="+regionParam+"&DCSext.division="+divisionParam);
			}
			/*Modified by Lohith for DDS-446 */
			
            
            var ctaButtonTarget = $(this).attr('target');
            var anchorTag = $('<a data-wt="where_to_buy_button">').appendTo( ".SNAPS--whereToBuybtn .SNAPS--wtb_section" );
            anchorTag.wrap("<div class='SNAPS--options_more' data-priority='" + ctaButtonWeight + "'></div>");
            anchorTag.attr({
                class:ctaButtonClass,
                id: ctaButtonId,
                name: ctaButtonName,
                label:ctaButtonLabel,
                href:ctaButtonUrl,
                target:ctaButtonTarget
            });

            
            anchorTag.text(ctaButtonLabel);
           
            
        });

        

        var p_GLOBALWTB=0,p_PS = 0,p_CC = 0,p_CWTB = 0,p_WTB = 0,p_S3M = 0,p_REQ = 0,c_GLOBALWTB = 0,c_PS = 0,c_CC = 0,c_CWTB = 0,c_WTB = 0,c_S3M = 0,c_REQ = 0, p_CONTACT_US=0;

        if( $(".SNAPS--parentNode[weight='1']").length ) { p_GLOBALWTB = 1 };
        if( $(".SNAPS--parentNode[weight='2']").length ) { p_PS = 1 };
        if( $(".SNAPS--parentNode[weight='3']").length ) { p_CC = 1 };
        if( $(".SNAPS--parentNode[weight='4']").length ) { p_CWTB = 1 };        
        if( $(".SNAPS--parentNode[weight='5']").length ) { p_WTB = 1 };
        if( $(".SNAPS--parentNode[weight='6']").length ) { p_S3M = 1 };
        if( $(".SNAPS--parentNode[weight='7']").length ) { p_REQ = 1 };        

        if( $(".SNAPS--childNode[weight='1']").length ) { c_GLOBALWTB = 1 };
        if( $(".SNAPS--childNode[weight='2']").length ) { c_PS = 1 };
        if( $(".SNAPS--childNode[weight='3']").length ) { c_CC = 1 };
        if( $(".SNAPS--childNode[weight='4']").length ) { c_CWTB = 1 };        
        if( $(".SNAPS--childNode[weight='5']").length ) { c_WTB = 1 };
        if( $(".SNAPS--childNode[weight='6']").length ) { c_S3M = 1 };
        if( $(".SNAPS--childNode[weight='7']").length ) { c_REQ = 1 };

        var allWTB_Pcount = p_GLOBALWTB + p_PS + p_CC + p_CWTB + p_WTB + p_S3M + p_REQ + p_CONTACT_US;
        var allWTB_Ccount = c_GLOBALWTB + c_PS + c_CC + c_CWTB + c_WTB + c_S3M + c_REQ ;

        if ((allWTB_Pcount == 0 && allWTB_Ccount == 0) || !$(".js-allModelRef").length) {
            if( $(".SNAPS--parentNode[weight='8']").length && allWTB_Ccount ==0 ) { allWTB_Pcount = 1 };
        }
        
        if ( allWTB_Pcount >= 1 )
        {
            snapsManager.allWTB_sectionInit_parentWTB(allWTB_Pcount);            
        }
        else
        {
			//snapsManager.allWTB_sectionInit_childWTB(allWTB_Ccount);
			if ((allWTB_Pcount + allWTB_Ccount) != 0 ) {
				snapsManager.allWTB_sectionInit_childWTB(allWTB_Ccount);
			} else {
				if ((isWTBPresent != 'false') && (snapsManager.vars.check_isParent == "true" && $(".SNAPS--dimensionSelect").length > 0) && $(".SNAPS--whereToBuybtn .SNAPS--top_button a").length == 0) {
					var defBtnsHtml = "<div class='SNAPS--wtb_section SNAPS--wtb_section_original'><div class='SNAPS--top_button'><a data-wt='where_to_buy_button' class='wtbs1 SNAPS--childNode SNAPS--activeBtn'  id='N10150' name='N10150' label="+snapsManager.vars.txt_whereToBuy+" href='javascript:void(0);'>"+snapsManager.vars.txt_whereToBuy+"</a><div class='SNAPS--toolTipWTB' style='display:none'>"+snapsManager.vars.txt_noInfoAvail_Selection+"</div></div></div>";
					$(".SNAPS--whereToBuybtn").html(defBtnsHtml);
					snapsManager.toolTipWTBInit();
				}
			}
            
        }

        if( snapsManager.vars.check_isParent == "true" && allWTB_Ccount >= 1 && snapsManager.vars.selector_navigation == "true" )
        {
            //$(".SNAPS--whereToBuybtn .SNAPS--options_more:eq(1)").remove();
			
            /* $(".SNAPS--whereToBuybtn .js-fancyDropDiv").remove();

            $(".SNAPS--whereToBuybtn .SNAPS--top_button a,.SNAPS--whereToBuybtn .SNAPS--options_more a").attr({
                href:'javascript:void(0);',
                target:''
            }).text(snapsManager.vars.txt_whereToBuy);

            $(".SNAPS--whereToBuybtn .SNAPS--top_button a,.SNAPS--whereToBuybtn .SNAPS--options_more a").addClass("SNAPS--activeBtn_disabled");

            $("<div class='SNAPS--toolTipWTB'>"+snapsManager.vars.txt_productDetails_wtbErrorMsg+"</div>").appendTo( ".SNAPS--whereToBuybtn .SNAPS--top_button,.SNAPS--whereToBuybtn .SNAPS--options_more" ); */
        }
		
		if (allWTB_Pcount == 0) {
			snapsManager.toolTipWTBInit();
		}
        $(".SNAPS--dimensionSelect .js-loadRefinement").prop('selectedIndex',0);
        snapsManager.wtInit();
        
        // If it is link then, bind with class name.
        $("a.SNAPS--ContactUsBtn").click(function() {
            var id = $(this).attr("id").split("_")[1];
            $("#"+id).click();
        });
    },
    allWTB_sectionInit_parentWTB:function(allWTB_Pcount){

        if ( allWTB_Pcount > 2 )
        {

            var selectOneTxt = $('input[name=selectOne]').val();

            $('<select name="selectbox" class="MMM--selectInput js-fancyDropDown js-Where_to_buy js_select_WTB SNAPS--select_WTB">').appendTo('.SNAPS--whereToBuybtn .SNAPS--wtb_section');
                $(".SNAPS--select_WTB").attr('data-options','{"truncateTxt": 13}');

            $('.SNAPS--whereToBuybtn .SNAPS--options_more').sort(function (a, b) {
                return +a.getAttribute('data-priority') - +b.getAttribute('data-priority');
            }).appendTo( ".SNAPS--select_WTB" );


            $(".SNAPS--whereToBuybtn div.SNAPS--options_more").replaceWith(function () {
                return $('<option/>', {
                    class: 'SNAPS--options_more',
                    value: $(this).children().attr("href"),
                    priority:$(this).attr("data-priority"),
                    html: this.innerHTML
                });
            });
            $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more .SNAPS--parentNode").eq(0).removeClass('SNAPS--childNode');
            $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more .SNAPS--parentNode").eq(0).addClass("SNAPS--activeBtn");			
            //$(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more").eq(0).removeClass('SNAPS--options_more').prependTo( ".SNAPS--whereToBuybtn .SNAPS--wtb_section" ).addClass("SNAPS--top_button");
			//$(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more a.SNAPS--childNode").parent().eq(0).removeClass('SNAPS--options_more').prependTo( ".SNAPS--whereToBuybtn .SNAPS--wtb_section" ).addClass("SNAPS--top_button");
			$(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more .SNAPS--parentNode").eq(0).removeClass('SNAPS--options_more').prependTo( ".SNAPS--whereToBuybtn .SNAPS--wtb_section" ).addClass("SNAPS--top_button");
            
            $(".SNAPS--whereToBuybtn option.SNAPS--top_button").replaceWith(function () {
                return $('<div/>', {
                    class: 'SNAPS--top_button',
                    priority:$(this).attr("priority"),
                    html: this.innerHTML
                });
            });
			
			$(".SNAPS--whereToBuybtn .SNAPS--childNode").parent(".SNAPS--options_more").remove();
			
			
            $(".SNAPS--whereToBuybtn .SNAPS--select_WTB option.SNAPS--options_more:first").replaceWith(function () {
                return $('<option/>', {
                    class: 'SNAPS--options_more',
                    value: '',
                    html:  selectOneTxt 
                });
            });
            $(".SNAPS--whereToBuybtn .SNAPS--select_WTB").val("");
			
			$(".SNAPS--top_button a").removeClass('SNAPS--childNode');
			$(".SNAPS--top_button a").addClass('SNAPS--activeBtn');			

            new mmmApp.FancyDropDown($(".SNAPS--whereToBuybtn .SNAPS--select_WTB"));			

            snapsManager.moreWTB('.js_select_WTB');                
            
        }
        else
        {
            $('.SNAPS--whereToBuybtn .SNAPS--options_more').sort(function (a, b) {
                return +a.getAttribute('data-priority') - +b.getAttribute('data-priority');
            }).appendTo( ".SNAPS--whereToBuybtn .SNAPS--wtb_section" );                

            $(".SNAPS--whereToBuybtn .SNAPS--childNode").parent(".SNAPS--whereToBuybtn .SNAPS--options_more").remove();

            $(".SNAPS--whereToBuybtn .SNAPS--options_more:first a").addClass("SNAPS--activeBtn");
            $(".SNAPS--whereToBuybtn .SNAPS--options_more:eq(1) a").addClass("SNAPS--activeLink");

        }

    },
    allWTB_sectionInit_childWTB:function(allWTB_Ccount){

        if ( allWTB_Ccount > 2 )
        {
            var selectOneTxt = $('input[name=selectOne]').val();

            $('<select name="selectbox" class="MMM--selectInput js-fancyDropDown js-Where_to_buy js_select_WTB SNAPS--select_WTB" disabled >').appendTo('.SNAPS--whereToBuybtn .SNAPS--wtb_section');
                $(".SNAPS--select_WTB").attr('data-options','{"truncateTxt": 13}');

            $('.SNAPS--whereToBuybtn .SNAPS--options_more').sort(function (a, b) {
                return +a.getAttribute('data-priority') - +b.getAttribute('data-priority');
            }).appendTo( ".SNAPS--select_WTB" );


            $(".SNAPS--whereToBuybtn div.SNAPS--options_more").replaceWith(function () {
                return $('<option/>', {
                    class: 'SNAPS--options_more',
                    value: $(this).children().attr("href"),
                    priority:$(this).attr("data-priority"),
                    disabled:"disabled",
                    html: this.innerHTML
                });
            });

            if( $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more[priority='1']").length > 1 ) {
                $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more[priority='1']").not(':first').remove();
            };
            if( $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more[priority='2']").length > 1 ) {
                $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more[priority='2']").not(':first').remove();
            };
            if( $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more[priority='3']").length > 1 ) {
                $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more[priority='3']").not(':first').remove();
            };
            if( $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more[priority='4']").length > 1 ) {
                $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more[priority='4']").not(':first').remove();
            };
            if( $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more[priority='5']").length > 1 ) {
                $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more[priority='5']").not(':first').remove();
            };
            if( $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more[priority='6']").length > 1 ) {
                $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more[priority='6']").not(':first').remove();
            };
			if( $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more[priority='7']").length > 1 ) {
                $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more[priority='7']").not(':first').remove();
            };
            
            $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more a").eq(0).addClass("SNAPS--activeBtn");
            $(".SNAPS--whereToBuybtn .SNAPS--select_WTB .SNAPS--options_more").eq(0).removeClass('SNAPS--options_more').prependTo( ".SNAPS--whereToBuybtn .SNAPS--wtb_section" ).addClass("SNAPS--top_button");
            
            $(".SNAPS--whereToBuybtn option.SNAPS--top_button").replaceWith(function () {
                return $('<div/>', {
                    class: 'SNAPS--top_button',
                    priority:$(this).attr("priority"),
                    html: this.innerHTML
                });
            });

            $('.SNAPS--whereToBuybtn .SNAPS--select_WTB').prepend($("<option></option>").attr({
                'value':'',
                'class':'SNAPS--options_more'
            }).text(selectOneTxt));


            $(".SNAPS--whereToBuybtn .SNAPS--select_WTB").val("");                

            //$(".SNAPS--whereToBuybtn .SNAPS--childNode").parent(".SNAPS--options_more").remove();
            $("<div class='SNAPS--toolTipWTB'>"+snapsManager.vars.txt_productDetails_wtbErrorMsg+"</div>").appendTo( ".SNAPS--whereToBuybtn .SNAPS--top_button" );

            new mmmApp.FancyDropDown($(".SNAPS--whereToBuybtn .SNAPS--select_WTB"));
            $("<div class='SNAPS--toolTipWTB'>"+snapsManager.vars.txt_productDetails_wtbErrorMsg+"</div>").appendTo( ".SNAPS--wtb_section_original .MMM--fancyDropDiv.MMM--isDisabled" );

            snapsManager.moreWTB('.js_select_WTB');
            
        }            
        else
        {
            $('.SNAPS--whereToBuybtn .SNAPS--options_more').sort(function (a, b) {
                return +a.getAttribute('data-priority') - +b.getAttribute('data-priority');
            }).appendTo( ".SNAPS--whereToBuybtn .SNAPS--wtb_section" );

            if( $(".SNAPS--whereToBuybtn .SNAPS--options_more[data-priority='1']").length > 1 ) {
                $(".SNAPS--whereToBuybtn .SNAPS--options_more[data-priority='1']").not(':first').remove();
            };
            if( $(".SNAPS--whereToBuybtn .SNAPS--options_more[data-priority='2']").length > 1 ) {
                $(".SNAPS--whereToBuybtn .SNAPS--options_more[data-priority='2']").not(':first').remove();
            };
            if( $(".SNAPS--whereToBuybtn .SNAPS--options_more[data-priority='3']").length > 1 ) {
                $(".SNAPS--whereToBuybtn .SNAPS--options_more[data-priority='3']").not(':first').remove();
            };
            if( $(".SNAPS--whereToBuybtn .SNAPS--options_more[data-priority='4']").length > 1 ) {
                $(".SNAPS--whereToBuybtn .SNAPS--options_more[data-priority='4']").not(':first').remove();
            };
            if( $(".SNAPS--whereToBuybtn .SNAPS--options_more[data-priority='5']").length > 1 ) {
                $(".SNAPS--whereToBuybtn .SNAPS--options_more[data-priority='5']").not(':first').remove();
            };
            if( $(".SNAPS--whereToBuybtn .SNAPS--options_more[data-priority='6']").length > 1 ) {
                $(".SNAPS--whereToBuybtn .SNAPS--options_more[data-priority='6']").not(':first').remove();
            };
			if( $(".SNAPS--whereToBuybtn .SNAPS--options_more[data-priority='7']").length > 1 ) {
                $(".SNAPS--whereToBuybtn .SNAPS--options_more[data-priority='7']").not(':first').remove();
            };

            $(".SNAPS--whereToBuybtn .SNAPS--options_more:first a").addClass("SNAPS--activeBtn");
            $(".SNAPS--whereToBuybtn .SNAPS--options_more:eq(1) a").addClass("SNAPS--activeLink");

            $(".SNAPS--whereToBuybtn .SNAPS--options_more .wtbs.SNAPS--childNode").not(".SNAPS--independentSku").attr({
                href:"javascript:void(0);",
                target:""
            });

            $("<div class='SNAPS--toolTipWTB'>"+snapsManager.vars.txt_productDetails_wtbErrorMsg+"</div>").appendTo( ".SNAPS--whereToBuybtn .SNAPS--options_more" );

            $( ".SNAPS--independentSku").next(".SNAPS--toolTipWTB").remove();
            
        }

    },
    allModelWTB_sectionInit:function(){
        $(".SNAPS--AllModel_wtb_section .SNAPS--wtb_section").each( function() {

            $(this).children('wtb.wtbs.SNAPS--childNode').each(function () {

                var ctaAllModBtnClass = $(this).attr('class') + ' wt-link';
                var ctaAllModBtnId = $(this).attr('id');
                var ctaAllModBtnName = $(this).attr('name');
                var ctaAllModBtnLabel1 = $(this).attr('label');
				var ctaAllModBtnLabel =  $('<textarea />').html(ctaAllModBtnLabel1).text();
                var ctaAllModBtnUrl = $(this).attr('url');
                var ctaAllModBtnWeight = $(this).attr('weight');
                var ctaAllModBtnTarget = $(this).attr('target');
				
				/*Modified by Lohith for DDS-367 */
				if ((snapsManager.vars.baseUrl.indexOf("/my3M/")) > -1) {
					var res = ctaAllModBtnUrl.substring(0, 4).toLowerCase();
					var link = ctaAllModBtnUrl.split('/');
					/*if (link[3].toLowerCase() == "3m" ){ctaAllModBtnUrl = ctaAllModBtnUrl.replace("/3M/", "/my3M/");}*/
					if (res == "/3m/" ){ctaAllModBtnUrl = ctaAllModBtnUrl.replace("/3M/", "/my3M/");}
					else{ctaAllModBtnUrl = ctaAllModBtnUrl.replace("/wps/portal/", "/wps/myportal/");}
				}
				/*Modified by Lohith for DDS-367 */
				/*Modified by Lohith for DDS-446 */
				var ewcd_urlParam = $("meta[name='DCSext.ewcd_url']").attr("content");
				var ewcd_urlParam = ewcd_urlParam.substr(0,ewcd_urlParam.indexOf('|'));
				var siteParam = $("meta[name='DCSext.site']").attr("content");
				var regionParam = $("meta[name='DCSext.region']").attr("content");
				var divisionParam = $("meta[name='DCSext.division']").attr("content");
				if(!(ctaAllModBtnWeight==5 || ctaAllModBtnWeight==7))
				{
				ctaAllModBtnUrl = ctaAllModBtnUrl.concat("&DCSext.site="+siteParam+"&DCSext.ewcd_url="+ewcd_urlParam+"&DCSext.region="+regionParam+"&DCSext.division="+divisionParam);
				}
				/*Modified by Lohith for DDS-446 */	
                var anchorTagAllMod = $('<a data-wt="where_to_buy_button">').appendTo( $(this).parent(".SNAPS--AllModel_wtb_section .SNAPS--wtb_section") );
                anchorTagAllMod.wrap("<span class='SNAPS--options_more' data-priority='" + ctaAllModBtnWeight + "'></span>");
                anchorTagAllMod.attr({
                    class:ctaAllModBtnClass,
                    id: ctaAllModBtnId,
                    name: ctaAllModBtnName,
                    label:ctaAllModBtnLabel,
                    href:ctaAllModBtnUrl,
                    target:ctaAllModBtnTarget
                });

                anchorTagAllMod.text(ctaAllModBtnLabel);

            });

            var allModelWTB_Ccount = $(this).children('wtb.wtbs.SNAPS--childNode').length;

            if ( allModelWTB_Ccount > 2 )
            {
                var selectOneTxt = $('input[name=selectOne]').val();

                $('<select name="selectbox" class="MMM--selectInput js-fancyDropDown js-Where_to_buy js_select_AllMod SNAPS--select_WTB_allMod">').prependTo(this);
                $(".SNAPS--select_WTB_allMod").attr('data-options','{"truncateTxt": 13}');
                if($(window).width() < 480){
                    $(".SNAPS--select_WTB_allMod").attr('data-options','{"truncateTxt": 5}');
                }

                $(this).children('.SNAPS--options_more').sort(function (a, b) {
                    return +a.getAttribute('data-priority') - +b.getAttribute('data-priority');
                }).appendTo( $(this).children('select') );

                $(this).find('.SNAPS--select_WTB_allMod span').replaceWith(function () {
                    return $('<option/>', {
                        class: 'SNAPS--options_more',
                        value: $(this).children('a').attr("href"),
                        html: this.innerHTML
                    });
                });
                
                //$(this).find('select').children('option.SNAPS--options_more').eq(0).children('a').addClass("SNAPS--activeBtn");
                $(this).find('select').children('option.SNAPS--options_more').eq(0).removeClass('SNAPS--options_more').prependTo(this).addClass("SNAPS--top_button");
                
                $(this).find('option.SNAPS--top_button').replaceWith(function () {
                    return $('<span/>', {
                        class: 'SNAPS--top_button',
                        html: this.innerHTML
                    });
                }); 

                $(this).find('select').prepend($('<option/>', {
                    class: 'SNAPS--options_more',
                    value: '',
                    html: 'Select one'
                }));

                $(this).find('select').val('');

                new mmmApp.FancyDropDown( $(this).children('select') );                
                
            }
            else
            {
                $(this).children('.SNAPS--options_more').sort(function (a, b) {
                    return +a.getAttribute('data-priority') - +b.getAttribute('data-priority');
                }).prependTo(this);

            }

        });

        snapsManager.moreWTB('.js_select_AllMod');
        snapsManager.wtInit();
        if ($("wtb.SNAPS--parentNode[mmm_id]").attr("mmm_id") || $(".js-hiddenChildDPR").length) {
            snapsManager.updateCCI_GTIN_Rule();
        }

        // Fire the "smart" WTB function
        if (typeof jsSmartWTB !== 'undefined' && jsSmartWTB) {
           snapsManager.smarWTBInit();
        }
    },
    allWTB_sectionOnChange:function(){

        var narrowedCount = $(".SNAPS--narrowedsku_one_section.active .SNAPS--narrowedsku_one").length;
		
		if ( narrowedCount==0 && $(".SNAPS--top_button .wtbs1").length!=0) {
			$(".SNAPS--wtb_section_original").removeClass("displayNone");
		}
		
		/*if (narrowedCount == 0) {
			var defBtnsHtml = "<div class='SNAPS--wtb_section SNAPS--wtb_section_original'><div class='SNAPS--top_button'><a data-wt='where_to_buy_button' class='wtbs1 SNAPS--childNode SNAPS--activeBtn'  id='N10160' name='N10160' label="+snapsManager.vars.txt_whereToBuy+" href='javascript:void(0);'>"+snapsManager.vars.txt_whereToBuy+"</a><div class='SNAPS--toolTipWTB' style='display:none'>"+snapsManager.vars.txt_noInfoAvail_Selection+"</div></div></div>";			
			$(".SNAPS--whereToBuybtn").html(defBtnsHtml);
			snapsManager.toolTipWTBInit();
		}*/
		
		/* if (narrowedCount > 0) {
			$(".SNAPS--whereToBuybtn .SNAPS--options_more a").remove();
		} else {
			if ($(".SNAPS--whereToBuybtn .SNAPS--options_more a").length == 0) {
				
				var defBtnsHtml = "<div class='SNAPS--options_more'><a data-wt='where_to_buy_button' class='wtbs SNAPS--childNode SNAPS--activeBtn'  id='N10150' name='N10150' label="+snapsManager.vars.txt_whereToBuy+" href='javascript:void(0);'>"+snapsManager.vars.txt_whereToBuy+"</a><div class='SNAPS--toolTipWTB' style='display:none'>"+snapsManager.vars.txt_noInfoAvail_Selection+"</div></div>";
				$(".SNAPS--whereToBuybtn").html(defBtnsHtml);
				snapsManager.toolTipWTBInit();
			}
		} */

        var p_GlobalWTBchnage = 0, p_PSchnage = 0,p_CCchnage = 0,p_CWTBchnage = 0,p_WTBchnage = 0,p_S3Mchnage = 0,p_REQchnage = 0,c_GlobalWTBchnage = 0,c_PSchnage = 0,c_CCchnage = 0,c_CWTBchnage = 0,c_WTBchnage = 0,c_S3Mchnage = 0,c_REQchnage = 0;

        if( $(".SNAPS--parentNode[weight='1']").length ) { p_GlobalWTBchnage = 1 };
        if( $(".SNAPS--parentNode[weight='2']").length ) { p_PSchnage = 1 };
        if( $(".SNAPS--parentNode[weight='3']").length ) { p_CCchnage = 1 };
        if( $(".SNAPS--parentNode[weight='4']").length ) { p_CWTBchnage = 1 };        
        if( $(".SNAPS--parentNode[weight='5']").length ) { p_WTBchnage = 1 };
        if( $(".SNAPS--parentNode[weight='6']").length ) { p_S3Mchnage = 1 };
        if( $(".SNAPS--parentNode[weight='7']").length ) { p_REQchnage = 1 };

        if( $(".SNAPS--childNode[weight='1']").length ) { c_GlobalWTBchnage = 1 };
        if( $(".SNAPS--childNode[weight='2']").length ) { c_PSchnage = 1 };
        if( $(".SNAPS--childNode[weight='3']").length ) { c_CCchnage = 1 };
        if( $(".SNAPS--childNode[weight='4']").length ) { c_CWTBchnage = 1 };        
        if( $(".SNAPS--childNode[weight='5']").length ) { c_WTBchnage = 1 };
        if( $(".SNAPS--childNode[weight='6']").length ) { c_S3Mchnage = 1 };
        if( $(".SNAPS--childNode[weight='7']").length ) { c_REQchnage = 1 };
       
        var allWTB_PcountChnage = p_GlobalWTBchnage + p_PSchnage + p_CCchnage + p_CWTBchnage + p_WTBchnage + p_S3Mchnage + p_REQchnage;
        var allWTB_CcountChnage = c_GlobalWTBchnage + c_PSchnage + c_CCchnage + c_CWTBchnage + c_WTBchnage + c_S3Mchnage + c_REQchnage ;


        $(".SNAPS--narrowedsku_one_section.active .SNAPS--narrowedsku_one").each( function() {

            var ctaButtonClass_oneSku = $(this).attr('class') + ' wt-link';
            var ctaButtonLabel_oneSku1 = $(this).attr('label');
			var ctaButtonLabel_oneSku =  $('<textarea />').html(ctaButtonLabel_oneSku1).text();
            var ctaButtonUrl_oneSku = $(this).attr('url');
            var ctaButtonWeight_oneSku = $(this).attr('weight');
            var ctaButtonTarget_oneSku = $(this).attr('target');
			
			/*Modified by Lohith for DDS-367 */
			if ((snapsManager.vars.baseUrl.indexOf("/my3M/")) > -1) {
				var res = ctaButtonUrl_oneSku.substring(0, 4).toLowerCase();
				var link = ctaButtonUrl_oneSku.split('/');
				/*if (link[3].toLowerCase() == "3m" ){ctaButtonUrl_oneSku = ctaButtonUrl_oneSku.replace("/3M/", "/my3M/");}*/
					if (res == "/3m/"){ctaButtonUrl_oneSku = ctaButtonUrl_oneSku.replace("/3M/", "/my3M/");}
					else{ctaButtonUrl_oneSku = ctaButtonUrl_oneSku.replace("/wps/portal/", "/wps/myportal/");}
				}
			/*Modified by Lohith for DDS-367 */
			/*Modified by Lohith for DDS-446 */
			var ewcd_urlParam = $("meta[name='DCSext.ewcd_url']").attr("content");
			var ewcd_urlParam = ewcd_urlParam.substr(0,ewcd_urlParam.indexOf('|'));
			var siteParam = $("meta[name='DCSext.site']").attr("content");
			var regionParam = $("meta[name='DCSext.region']").attr("content");
			var divisionParam = $("meta[name='DCSext.division']").attr("content");
			if(!(ctaButtonWeight_oneSku==5 || ctaButtonWeight_oneSku==7))
			{
			ctaButtonUrl_oneSku = ctaButtonUrl_oneSku.concat("&DCSext.site="+siteParam+"&DCSext.ewcd_url="+ewcd_urlParam+"&DCSext.region="+regionParam+"&DCSext.division="+divisionParam);
			}
			/*Modified by Lohith for DDS-446 */
			
            var anchorTag_oneSku = $('<a data-wt="where_to_buy_button">').appendTo( ".SNAPS--narrowedsku_one_section.active" );
            anchorTag_oneSku.wrap("<div class='SNAPS--options_more' data-priority='" + ctaButtonWeight_oneSku + "'></div>");
            anchorTag_oneSku.attr({
                class:ctaButtonClass_oneSku,
                label:ctaButtonLabel_oneSku,
                href:ctaButtonUrl_oneSku,
                target:ctaButtonTarget_oneSku
            });

            anchorTag_oneSku.text(ctaButtonLabel_oneSku);

        });


        if ( narrowedCount > 2 )
        {

            var selectOneTxt = $('input[name=selectOne]').val();

            $('<select name="selectbox" class="MMM--selectInput js-fancyDropDown js-Where_to_buy js_select_WTBnarrowed SNAPS--select_WTB_narrowed">').appendTo('.SNAPS--narrowedsku_one_section');
            $(".SNAPS--select_WTB_narrowed").attr('data-options','{"truncateTxt": 13}');

            $('.SNAPS--narrowedsku_one_section .SNAPS--options_more').sort(function (a, b) {
                return +a.getAttribute('data-priority') - +b.getAttribute('data-priority');
            }).appendTo( ".SNAPS--select_WTB_narrowed" );

            $(".SNAPS--narrowedsku_one_section div.SNAPS--options_more").replaceWith(function () {
                return $('<option/>', {
                    class: 'SNAPS--options_more',
                    value: $(this).children().attr("href"),
                    priority:$(this).attr("data-priority"),
                    html: this.innerHTML
                });
            });
            
            $(".SNAPS--select_WTB_narrowed .SNAPS--options_more a").eq(0).addClass("SNAPS--activeBtn");
            $(".SNAPS--select_WTB_narrowed .SNAPS--options_more").eq(0).removeClass('SNAPS--options_more').prependTo( ".SNAPS--narrowedsku_one_section" ).addClass("SNAPS--top_button");
            
            $(".SNAPS--narrowedsku_one_section option.SNAPS--top_button").replaceWith(function () {
                return $('<div/>', {
                    class: 'SNAPS--top_button',
                    priority:$(this).attr("priority"),
                    html: this.innerHTML
                });
            });

            $('.SNAPS--narrowedsku_one_section .SNAPS--select_WTB_narrowed').prepend($("<option></option>").attr({
                'value':'',
                'class':'SNAPS--options_more'
            }).text(selectOneTxt));
            
            $(".SNAPS--select_WTB_narrowed").val("");

            new mmmApp.FancyDropDown($(".SNAPS--select_WTB_narrowed"));

            snapsManager.moreWTB('.js_select_WTBnarrowed');
        }
        else
        {

            $(".SNAPS--narrowedsku_one_section.active .SNAPS--options_more:first a").addClass("SNAPS--activeBtn");
            $(".SNAPS--narrowedsku_one_section.active .SNAPS--options_more:eq(1) a").addClass("SNAPS--activeLink");
        }


        snapsManager.toolTipWTBInit();
        $("a.SNAPS--narrowedsku_one").removeClass("wtLoaded");
        snapsManager.wtInit();

        if ($("a.wtbs[href*='wtb=CCI']").length && $(".SNAPS--selectDimens .MMM--txt_bold").text() == "" && $(".js-availblCount").text() > 1) {
            // Swap the contact us label and href with fake WTB
            var parentWTBObjs = $("a.SNAPS--parentNode.SNAPS--activeBtn, a.SNAPS--parentNode.SNAPS--activeLink");
            if (parentWTBObjs.length == 1 && parentWTBObjs.hasClass("SNAPS--ContactUsBtn")) {
                var wtbLabel = $("wtb.SNAPS--ContactUsBtn:first").attr("fakewtblabel");
                parentWTBObjs.text(wtbLabel);
            }
            snapsManager.updateCCI_GTIN_Rule();
        } else {
            if ($("a.CCI--Fix").length) {
                if ($("a.CCI--Fix").hasClass("SNAPS--ContactUsBtn")) {
                    var wtbLabel = $("wtb.SNAPS--ContactUsBtn:first").attr("label");
                    $("a.CCI--Fix").attr("href", "javascript:snapsManager.jumpToSupportTab()");
                    $("a.CCI--Fix").text(wtbLabel);
                    $("a.CCI--Fix").removeClass("CCI--Fix");
                } else {
                    $("a.CCI--Fix").removeClass("CCI--Fix").addClass("SNAPS--childNode");
                }


            }

            if (Object.keys(snapsManager.vars.parentWTBObj).length) {
                $.each(Object.keys(snapsManager.vars.parentWTBObj), function (idx, wtbId) {
                    $(wtbId + "").attr("href", snapsManager.vars.parentWTBObj[wtbId]);
                });
            }
        }

        if (typeof jsSmartWTB !== 'undefined' && jsSmartWTB) {
			snapsManager.smarWTBInit();
		}

    },
	bcHTML5Init: function() {
	
		var accountID = "snapsManager.vars.bcPlayerInfo["+snapsManager.vars.bcPlayerId+"]['actId']";
		var nPID = "snapsManager.vars.bcPlayerInfo["+snapsManager.vars.bcPlayerId+"]['pId']";
		
		var videoObj = $("<div id='vidCont' style='margin:0 auto;width:100%; display:none'>"+
			"<div class='RespVideoCtnr'><video id='snapsHTML5Vid' data-account='"+snapsEval(accountID)+"' data-player='"+snapsEval(nPID)+"' data-embed='default' class='video-js' controls></video></div><div class='RespPlayListCtnr'><div class='playlistInnerCntr'><ol class='vjs-playlist'></ol></div><div></div>");

		$(".js-cntnt_media_lrg").append(videoObj);
		
		$.getScript("//players.brightcove.net/"+snapsEval(accountID)+"/"+snapsEval(nPID)+"_default/index.min.js", 
		function() {
			
			var myPlayer;
			videojs('snapsHTML5Vid').ready(function(){
				myPlayer = this;
				
				myPlayer.on('catalog_response',function(evt){
					var api_response = JSON.parse(evt.response.response);			 
					
					if (api_response.sources || api_response.videos.length > 0) {
						
						snapsManager.bcAddVids(api_response);
						
						if (api_response.videos) {						
							$(".SNAPS--vidThumb img").attr("src", snapsManager.getVideoThumbImg(api_response.videos[0]));
						} else {
							$(".SNAPS--vidThumb img").attr("src", snapsManager.getVideoThumbImg(api_response));
						}

						$(".SNAPS--vidThumb img").attr("style","top:5.7px;left:0.2px");
						
						$("#js-backdrop").click(function() {
							videojs('snapsHTML5Vid').pause(); 
						});
						
						$(".js-carouselTrigger_left").click(function() {
							videojs('snapsHTML5Vid').pause(); 
						});
						
						$(".js-carouselTrigger_right").click(function() {
							videojs('snapsHTML5Vid').pause(); 
						});					
						
						$(".js-closeLink").click(function() {
							videojs('snapsHTML5Vid').pause(); 
						});
						
					}
					
				});
				
				myPlayer.on('loadedmetadata',function(evt){
					snapsManager.moveVideoToContainer();
					
					$('.vjs-playlist-item').on('click touchstart tap', function () {
						$(".SNAPS--carouselCaption .MMM--variationTitle")[0].innerHTML  = $(this).find(".vjs-playlist-name")[0].title; 
					});
					
					var videoId = this.mediainfo.id,
						mediaInfoName = this.mediainfo.name,
						mediaDuration = this.mediainfo.duration,						
						videoDuration = Math.round(mediaDuration*100/60)/100;
						
					$('.MMM--carouselFigure').trigger('load', [mediaInfoName, videoId, videoDuration]);
				});
				
				try {
				  myPlayer.catalog.getPlaylist(snapsManager.vars.bcVideoId, function(error, pData) {
					if (error) {
					  myPlayer.catalog.getVideo(snapsManager.vars.bcVideoId, function(err, vData) {
						if(err) {
							snapsManager.initThumbnail();
							console.log("No Valid Video Information Found !");
						}else {							
							$(".RespVideoCtnr").attr("class", "singleVideoCtnr");
							$(".RespPlayListCtnr").hide();
							myPlayer.catalog.load(vData);
							snapsManager.moveVideoToContainer();
						}
					  });					  
					} else {
						if (pData.length > 0) {
							myPlayer.catalog.load(pData);
							snapsManager.moveVideoToContainer();
						} else {
							console.log("No more videos added into the Video Play list  !");
							snapsManager.initThumbnail();
						}
					}
				  });
				} catch(e){
					console.log("Exception Catched for the brightcove !!"+e);
				}
				
				myPlayer.on('playing', function(){
					var videoId = this.mediainfo.id,
						mediaInfoName = this.mediainfo.name,
						mediaDuration = this.mediainfo.duration,
						videoDuration = Math.round(mediaDuration*100/60)/100;

					$('.MMM--carouselFigure').trigger('playing', [
						mediaInfoName,
						videoId,
						videoDuration
					]);
				});

				myPlayer.on('ended', function(){
					$debug('Video ended...', 'mmmVideo');

					$('.MMM--carouselFigure').trigger('videoEnd');
				});

				myPlayer.on('pause', function(){
					var videoId = this.mediainfo.id,
						mediaInfoName = this.mediainfo.name,
						mediaDuration = this.mediainfo.duration,
						videoDuration = Math.round(mediaDuration*100/60)/100;

					$('.MMM--carouselFigure').trigger('pause', [
						mediaInfoName,
						videoId,
						videoDuration
					]);
				});

				myPlayer.on('timeupdate', function(){
					var mediaInfoName = this.mediainfo.name,
						mediaDuration = this.mediainfo.duration,
						videoDuration = Math.round(mediaDuration*100/60)/100;

					$('.MMM--carouselFigure').trigger('timeupdate', {
						'0': mediaInfoName,
						'1': this.tagAttributes['data-video-id'],
						'2': mediaDuration,
						'3': this.currentTime(),
						'4': videoDuration,
						length: 5
					});
				});
			});
		});
	},		
	getVideoThumbImg: function(vidData) {
		var thumProtocolIdx = 0;
		
		if (!vidData.thumbnail_sources) return snapsManager.vars.defVidImgUrl;
		
		if (vidData.thumbnail_sources.length > 1 && location.protocol == "https:") {
			thumProtocolIdx = 1;			
		}
		if (!vidData.thumbnail_sources[thumProtocolIdx] || !vidData.thumbnail_sources[thumProtocolIdx].src) {
			return snapsManager.vars.defVidImgUrl;
		}

		return vidData.thumbnail_sources[thumProtocolIdx].src;
	},
	moveVideoToContainer: function() {
		if ($(".js-carouselList.SNAPS--carousel > #variation"+snapsManager.vars.bcVidCarouselIdx).length == 0) {                        
			$("#variation"+snapsManager.vars.bcVidCarouselIdx).appendTo($(".js-carouselList.SNAPS--carousel"));
		}
		
		if ($('#vidCont') && $('#vidCont').parent("#videoWrapper").length == 0) {						
			
			// Moving the Video Player to light box
			$('#videoWrapper').html('');
			$('#vidCont').prependTo('#videoWrapper');
			$('#vidCont').show();
		}
		snapsManager.bcCarouselFix();
	},
	enableColorSwatches: function(){
		
		// Enable twisty when more than 6
		if ($(".clrBx").length > 6) {			
			var cbBxTop = 0;
			// Iterate each color swatches 
			$.each($("#clrSwatch").find("div"), function( idx, cbBxObj) {
				
				// taking first colorbox position and comparing to insert 
				// the twisty dynamically at last position in the first row 
				if (idx != 0) {
					
					if (cbBxTop != $(cbBxObj).position().top) {
						
						//Removing the existing twisty placeholder if any
						if ($(".cbBxTwisty").length != 0) {
							$(".cbBxTwisty").remove();
						}
						
						//Creating the new twisty placeholder
						var expandDiv =	$("<div class='clrBx cbBxTwisty' style='color:##a9a9a9;text-align:center;font-size:20px;font-weight:bold;'>+</div>");
						
						//Insering the above place holder at the end of the first row  
						expandDiv.insertAfter($("#clrSwatch").find("div")[idx-2]);
						
						//Halting the loop
						return false;					
						
					} 
				} else {
					// taking first color box postion
					cbBxTop = $(cbBxObj).position().top;
				}
			});
		
			$(".cbBxTwisty").click(function(){
				if ($("#clrSwatch").height() == 27) {
					$("#clrSwatch").animate({ height:'100%'});
				} else {
					$("#clrSwatch").animate({ height:'27px'});
				}
			});
		}
	},
    updateCCI_GTIN_Rule: function () {
        var parentGTIN = [];
        var childGTIN = [];
        var childSKU = [];
        var lookupType = "GTIN=";
        var sampleUrl = "";
        // Find CCI Parent SKU
        var parentWTBs = $("a.SNAPS--parentNode.SNAPS--activeBtn, a.SNAPS--parentNode.SNAPS--activeLink");
        $.each(parentWTBs, function (idx, elem) {
            var url = elem.href;
            var id = "a#" + elem.id;
            if (url.indexOf("wtb=CCI") != -1 && !$(elem).hasClass("SNAPS--ContactUsBtn")) {
                snapsManager.vars.parentWTBObj[id] = url;

                if (url.indexOf("GTIN") != -1) {
                    parentGTIN.push(snapsManager.getGTINValue(url, "GTIN="));
                }
            }
        });

        //Find & Collecting child GTINs
        var childWTBs = $(".MMM--isNotOnMobile.js-allModelSection a.wtbs.SNAPS--childNode");
        $.each(childWTBs, function (idx, elem) {
            var url = elem.href;
            if (url.indexOf("wtb=CCI") != -1 && url.indexOf("GTIN") != -1) {
                childGTIN.push(snapsManager.getGTINValue(url, "GTIN="));
                sampleUrl = url;
            }
            if (url.indexOf("wtb=CCI") != -1 && url.indexOf("SKU") != -1) {
                childSKU.push(snapsManager.getGTINValue(url, "SKU="));
                if (!sampleUrl) sampleUrl = url;
            }
        });

        // If not even single GTIN available in this product then, skip processing
        if ((childGTIN.length + childSKU.length + parentGTIN.length) == 0) {
            return false;
        }

        var mmmId = $("wtb.SNAPS--parentNode[mmm_id]").attr("mmm_id");

        if ((parentGTIN.length + childGTIN.length) == 0) {
            lookupType = "SKU=";
        } else if (mmmId && parentGTIN.length == 1) {
            var wtbId = Object.keys(snapsManager.vars.parentWTBObj);
            var url = $(wtbId + "").attr("href");
            var startIndx = url.indexOf("SKU=");
            var skuID = url.substring(startIndx, startIndx + url.substring(startIndx).indexOf("&"));
            url = url.replace(skuID, "SKU=" + mmmId);
            $(wtbId + "").attr("href", url);
        }

        var newUrl = "";

        //Update DPR WTBs
        if (Object.keys(snapsManager.vars.parentWTBObj).length) {
            $.each(Object.keys(snapsManager.vars.parentWTBObj), function (idx, wtbId) {

                if (lookupType != "SKU=") {
                    newUrl = snapsManager.updateGTINValue($(wtbId).attr("href"), childGTIN, lookupType)
                } else {
                    newUrl = snapsManager.updateGTINValue($(wtbId).attr("href"), childSKU, lookupType)
                }

                // Updating DPR CTA
                $(wtbId).attr("href", newUrl);
            });
        } else {
            // Change dummy button to active CTA
            var dummyCTA = $(".SNAPS--whereToBuybtn .SNAPS--options_more .wtbs");
            $(dummyCTA).removeClass("SNAPS--childNode").addClass("CCI--Fix");

            // Since URL took from child, so replacing the SKU ID with DPR ID.
            var startIndx = sampleUrl.indexOf("SKU=");
            var skuID = sampleUrl.substring(startIndx, startIndx + sampleUrl.substring(startIndx).indexOf("&"));
            var dprID = "SKU=" + snapsManager.vars.jsProductID;
            sampleUrl = sampleUrl.replace(skuID, dprID);

            if (lookupType != "SKU=") {
                newUrl = snapsManager.updateGTINValue(sampleUrl, childGTIN, lookupType)
            } else {
                newUrl = snapsManager.updateGTINValue(sampleUrl, childSKU, lookupType)
            }

            // Updating DPR CTA
            $(dummyCTA).attr("href", newUrl);
        }
    },
    getGTINValue: function (url, paramType) {
        var postUrl = url.split(paramType)[1];
        return postUrl.substring(0, postUrl.indexOf("&"));
    },
    updateGTINValue: function (url, lists, lookupType) {
        var startIndx = url.indexOf(lookupType);
        var searchTxt = url.substring(startIndx, startIndx + url.substring(startIndx).indexOf("&"));
        var pGTIN = "";
        var uniqueNums = [];
        
        if (lookupType == "SKU=") {
            pGTIN = snapsManager.vars.jsProductID;
        } else {
            pGTIN = snapsManager.getGTINValue(url, "GTIN=");
        }
        //Inserting the Parent SKU
        lists.splice(0, 0, pGTIN);

        $.each(lists, function (i, el) {
            if ($.inArray(el, uniqueNums) === -1) uniqueNums.push(el);
        });
        var replaceTxt = "";
        if (lookupType == "SKU=") {
            replaceTxt = "SKU=" + uniqueNums.join();
        } else {
            replaceTxt = "GTIN=" + uniqueNums.join();
        }
        return url.replace(searchTxt, replaceTxt);
    },
    jumpToSupportTab: function () {
        // If it is drop down then, bind with class name.
        var id = $("a.SNAPS--ContactUsBtn").attr("id").split("_")[1];
        $("#" + id).click();
    },
	smarWTBInit: function () {
		$('a.wtbs, a.SNAPS--narrowedsku_one').each(function () {
			if($(this).attr('href') !== undefined && $(this).attr('href').indexOf('wtb=CCI') > -1) {
			   snapsManager.smartWTB($(this));
			}
		});
	},
	smartWTB: function ($ccWTBBtn) {
		// Corporate version of "smart WTB" button first built by LATAM team
		// https://www.3m.com.br/wps/wcm/connect/Spanish/Group+A/CORP_FUZEExp/CORP_FUZEExp_CountryCatalog_SiteArea/SmartWTB_JS?presentationtemplate=3M%20Design%20Patterns/PT%20-%20JS&subtype=javascript
		
		var settings = {
				url : "https://api-retailer.global.commerce-connector.com/REST/2.0/ArticleReach/",
				method : "GET",
				data : {
					F_SubId : "",
					token : "3mtest_x11ajOOUUF27xKWgxnulK7trfZLLK",
					F_ManufacturerArticleNumber : "",
					Country : snapsManager.vars.jsLocale.substring(3, 5).toLowerCase(),
					Language : snapsManager.vars.jsLocale.substring(0, 2).toLowerCase(),
					"O_ResultAmount[Limit]" : 1
				}
			},
			ccHref = $ccWTBBtn.attr("href"),
			ccHrefParams = ccHref.split("&");
		
		// Get the subId and SKU parameter from the href attribute
		for (var i=0;i<ccHrefParams.length;i++) {
			if (ccHrefParams[i].indexOf("subId=") > -1) {
				settings.data.F_SubId = ccHrefParams[i].substring(6, ccHrefParams[i].length);
			}
			if (ccHrefParams[i].indexOf("SKU=") > -1) {
				settings.data.F_ManufacturerArticleNumber = ccHrefParams[i].substring(4, ccHrefParams[i].length);
			}
		}
		
		$(".SNAPS--whereToBuybtn").css('visibility','hidden'); // Hide the entire WTB button section while results are calculated

        $.ajax(settings).done(function (response) { // If there's at least one result, make the button visible again
            var localStores = parseInt(response.Channels.LocalStores);
            var onlineStores =  parseInt(response.Channels.OnlineShops);

			if (localStores || onlineStores) {
				$(".SNAPS--whereToBuybtn").css('visibility', 'visible'); 
			}
            else{ // If there are no dealer in CC, keep the button hidden
                $ccWTBBtn.hide(); // Hide the specific button
                if( !$(".SNAPS--whereToBuybtn .SNAPS--activeBtn:visible").length ){ // If there is already visible activeBtn, no need to add another - DOTCOM-495
                    $("a.wtbs.SNAPS--activeLink").first().removeClass("SNAPS--activeLink").addClass("SNAPS--activeBtn"); // If there is a link, remove activeLink class and add activeBtn class to first match
                }
            }
            
			$(".SNAPS--whereToBuybtn").css('visibility','visible'); // Un-hide the button regardless of results
		});			
	}
}

// Use corporate DOMReady event to fire when the DOM is loaded
domReady.snapsInit = function(){
    snapsManager.init();
    // Don't wait for the DOM to load to move the meta tags
    snapsManager.appendTags("SNAPS--wtTags");
} 

/*Added for 394 by Lohith*/
function snapsEval(input){
	
	if (input) {
		
		try {
			// Evaluating the values of the expression
			return eval(input);
		} catch(e) {  return input; }
	}
}

  
/*End for 394 by Lohith*/

function sendUsMsgTriggr(){
    var snapsFormID = snapsManager.vars.MailID;
     var isAjaxComplete = 0;
     
     // Removing the prefix word and restoring the form's original name
     var snapsFlds = $("#snaps--contactUs [name^='sContactUs']");
     $.each(snapsFlds, function( idx, frmObj) {
         frmObj.name = frmObj.name.replace("sContactUs_","");
     });
        
     snapsManager.snapsLIME(snapsFormID);
     
     $.ajax({
        method: "POST",
        url: "/L7/ebus/eForm/v1/submitMailForm",
        data: $("#snaps--contactUs").serialize(),
        datatype: "jsonp",
        timeout : 8000,

    beforeSend:function(){

        $targetModal=$("#js-quickViewModal");
        contentTarget=$("#js-quickViewModalContent");
        $targetModal.css('width','64%');
        $targetModal.show();
        $("body").append("<div class='js-overlay SNAPS--bgOverlay'></div>");
        snapsManager.overlayInit();
        modalTop = ($(window).height()-$targetModal.height())/2+$(window).scrollTop();
        if(modalTop < 0) modalTop = 0;
        $targetModal.css({"top": modalTop});
        contentTarget.prepend("<img id='js-loaderGif' class='SNAPS--loaderImg' src='" + snapsManager.vars.jsLoaderImg + "' />");
        //snapsManager.centerElement($("#js-loaderGif"));
        contentTarget.append("<div class='SNAPS--formsuccess'<div><span class='MMM--txt_bold SNAPS--txtCenter SNAPS--mb10' style='font-size:16px;'>"+snapsManager.vars.txt_thankyou_for_contacting +"</span><div style=''><span class='SNAPS--txtCenter'>"+snapsManager.vars.txt_response_message +"</span></div></div></div>");
        $('.MMM--modalContainer-inner').addClass('SNAPS--modalContainer-inner');
        $('#js-quickViewModal > .SNAPS--modalContainer-inner').css({'width':'97.5%','text-align':'center','padding': '10px'});
        $('#js-quickViewModalContent').css({'width':'94.5%','padding': '33px 20px','background':'#E4E4E4'});
        //snapsManager.centerElement($(".SNAPS--formsuccess"));
    },
    
    success : function(){
        setTimeout(function(){
        $targetModal.hide();
        $('.SNAPS--bgOverlay').remove();
              ajaxdone();
              $("#snaps--contactUs li input, #snaps--contactUs li textarea").val("").css('background','#fff');
              $(".SNAPS--formsuccess, #js-loaderGif").remove();
              
              // Appending the snaps prefix word with contact us form's fields
              var snapsFlds = $("#snaps--contactUs [id^='sContactUs']");
              $.each(snapsFlds, function( idx, frmObj) {
                  frmObj.name = frmObj.id;
              });
        },5000);
    },
    error : function(x,t,e){
    }
     });
     function ajaxdone(){
                    {
                    $('html, body').animate({scrollTop: $('.SNAPS--ContactContainer').offset().top - 300}, 1500,function(){
                    snapsManager.vars.clickControl = false;
                    snapsManager.vars.scrollControl = true;
            });
            $('.formContainer').slideUp( 1500, function() {
                $(this).removeAttr("style").addClass("hide");
            });
                    }
                          };
    return false;
    }
