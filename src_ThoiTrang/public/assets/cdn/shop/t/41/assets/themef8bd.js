$(document).on("shopify:section:load",function(e){$("#"+e.target.id).find("[data-section]").sectionJs()}).ready(function(){$("[data-section]").each(function(){$(this).sectionJs()})}),$.fn.sectionJs=function(){var $this=this;$this.data("section")=="FullWidthSlider"?$this.FullWidthSliderActive():$this.data("section")=="FeaturedCategories"?$this.find(".airi-element-carousel").FeaturedCategories():$this.data("section")=="FeaturedCollection"?$this.find(".airi-element-carousel").FeaturedCollection():$this.data("section")=="ProductCategory"?$this.find(".airi-element-carousel").ProductCategory():$this.data("section")=="Testimonial"?$this.find(".airi-element-carousel").Testimonial():$this.data("section")=="Testimonial_2"?$this.find(".airi-element-carousel").Testimonial_2():$this.data("section")=="BannerArea"?$this.find(".airi-element-carousel").BannerArea():$this.data("section")=="BannerArea_2"?$this.find(".airi-element-carousel").BannerArea_2():$this.data("section")=="BannerArea_3"?$this.find(".airi-element-carousel").BannerArea_3():$this.data("section")=="BannerArea_4"?$this.find(".airi-element-carousel").BannerArea_4():$this.data("section")=="LatestBlog"?$this.find(".airi-element-carousel").LatestBlog():$this.data("section")=="LatestBlog_2"?$this.find(".airi-element-carousel").LatestBlog_2():$this.data("section")=="LatestBlog_3"?$this.find(".airi-element-carousel").LatestBlog_3():$this.data("section")=="BrandLogo"?$this.find(".airi-element-carousel").BrandLogo():$this.data("section")=="DealProduct"?$this.find(".airi-element-carousel").DealProduct():$this.data("section")=="TrendingProduct"?$this.find(".airi-element-carousel").TrendingProduct():$this.data("section")=="Instagram"?$this.InstagramSection():$this.data("section")=="ListCollection"?$this.find(".airi-element-carousel").ListCollection():$this.data("section")=="TeamArea"?$this.find(".airi-element-carousel").TeamArea():$this.data("section")=="UpsellProduct"?$this.find(".airi-element-carousel").UpsellProduct():$this.data("section")=="RelatedProduct"?$this.find(".airi-element-carousel").RelatedProduct():$this.data("section")=="HeaderSections"?$this.HeaderSectionsActivation():$this.data("section")=="ProductWIthSidebar_1"?$this.find(".product_slick_column4").ProductWIthSidebar_1():$this.data("section")=="ProductTemplate"&&$this.ProductTemplate()},$.fn.FeaturedCategories=function(){var $FeaturedCategoriesVAR=this;$FeaturedCategoriesVAR.slick({adaptiveHeight:!0,speed:1e3,prevArrow:'<span class="slick-btn slick-prev"><i class="dl-icon-left"></i></span>',nextArrow:'<span class="slick-btn slick-next"><i class="dl-icon-right"></i></span>'})},$.fn.FeaturedCollection=function(){var $FeaturedCollectionVAR=this;$FeaturedCollectionVAR.slick({adaptiveHeight:!0,speed:1e3,arrows:!1,dots:!0,infinite:!0,centerMode:!0})},$.fn.ProductCategory=function(){var $ProductCategoryVAR=this;$ProductCategoryVAR.slick({adaptiveHeight:!0,speed:1e3,prevArrow:'<span class="slick-btn slick-prev"><i class="dl-icon-left"></i></span>',nextArrow:'<span class="slick-btn slick-next"><i class="dl-icon-right"></i></span>'})},$.fn.Testimonial=function(){var $TestimonialVAR=this;$TestimonialVAR.slick({adaptiveHeight:!0,speed:1e3,dots:!1,arrows:!1})},$.fn.Testimonial_2=function(){var $Testimonial_2VAR=this;$Testimonial_2VAR.slick({adaptiveHeight:!0,speed:1e3,dots:!1,arrows:!1})},$.fn.BannerArea=function(){var $BannerAreaVAR=this;$BannerAreaVAR.slick({adaptiveHeight:!0,speed:1e3,dots:!1,arrows:!1})},$.fn.BannerArea_2=function(){var $BannerArea_2VAR=this;$BannerArea_2VAR.slick({adaptiveHeight:!0,speed:1e3,dots:!1,arrows:!1})},$.fn.BannerArea_3=function(){var $BannerArea_3VAR=this;$BannerArea_3VAR.slick({adaptiveHeight:!0,speed:1e3,dots:!1,arrows:!1})},$.fn.BannerArea_4=function(){var $BannerArea_4VAR=this;$BannerArea_4VAR.slick({adaptiveHeight:!0,speed:1e3,dots:!1,arrows:!1})},$.fn.LatestBlog=function(){var $LatestBlogVAR=this;$LatestBlogVAR.slick({adaptiveHeight:!0,speed:1e3,infinite:!0,dots:!0,arrows:!1})},$.fn.LatestBlog_2=function(){var $LatestBlog_2VAR=this;$LatestBlog_2VAR.slick({adaptiveHeight:!0,speed:1e3,dots:!1,arrows:!1})},$.fn.LatestBlog_3=function(){var $LatestBlog_3VAR=this;$LatestBlog_3VAR.slick({adaptiveHeight:!0,speed:1e3,dots:!1,arrows:!1})},$.fn.BrandLogo=function(){var $BrandLogoVAR=this;$BrandLogoVAR.slick({adaptiveHeight:!0,speed:1e3,dots:!1,arrows:!1})},$.fn.DealProduct=function(){var $DealProductVAR=this;$DealProductVAR.slick({adaptiveHeight:!0,speed:1e3,dots:!0,arrows:!1})},$.fn.TrendingProduct=function(){var $TrendingProductVAR=this;$TrendingProductVAR.slick({adaptiveHeight:!0,speed:1e3,dots:!1,arrows:!0,prevArrow:'<span class="slick-btn slick-prev"><i class="fa fa-angle-left"></i></span>',nextArrow:'<span class="slick-btn slick-next"><i class="fa fa-angle-right"></i></span>'})},$.fn.InstagramSection=function(){var activation=this.find("[data-username]"),activeId=activation.attr("id"),clientUsername=activation.attr("data-username"),instagramHastag=activation.attr("data-hashtag"),ItemsLimit=activation.attr("data-limit"),imageSize=activation.attr("data-size"),instaslider=".instagram-carousel";$.instagramFeed({tag:instagramHastag,username:clientUsername,container:"#"+activeId,display_profile:!1,display_biography:!1,display_gallery:!0,styling:!1,items:ItemsLimit,margin:1,image_size:imageSize})},$.fn.ListCollection=function(){var $ListCollectionVAR=this;$ListCollectionVAR.slick({adaptiveHeight:!0,speed:1e3,dots:!1,arrows:!0,prevArrow:'<span class="slick-btn slick-prev"><i class="dl-icon-left"></i></span>',nextArrow:'<span class="slick-btn slick-next"><i class="dl-icon-right"></i></span>'})},$.fn.TeamArea=function(){var $TeamAreaVAR=this;$TeamAreaVAR.slick({adaptiveHeight:!0,speed:1e3,dots:!1,arrows:!1})},$.fn.UpsellProduct=function(){var $UpsellProductVAR=this;$UpsellProductVAR.slick({adaptiveHeight:!0,speed:1e3,dots:!1,arrows:!0,prevArrow:'<span class="slick-btn slick-prev"><i class="dl-icon-left"></i></span>',nextArrow:'<span class="slick-btn slick-next"><i class="dl-icon-right"></i></span>'})},$.fn.RelatedProduct=function(){var $RelatedProductVAR=this;$RelatedProductVAR.slick({adaptiveHeight:!0,speed:1e3,dots:!1,arrows:!0,prevArrow:'<span class="slick-btn slick-prev"><i class="dl-icon-left"></i></span>',nextArrow:'<span class="slick-btn slick-next"><i class="dl-icon-right"></i></span>'})},$.fn.ProductTemplate=function(){var $window_2=$(window);$window_2.on("scroll",function(){var scroll=$window_2.scrollTop();scroll<500?$(".product-addtocart-sticky").removeClass("is-sticky-2"):$(".product-addtocart-sticky").addClass("is-sticky-2")})},function($2){"use strict";jQuery(document).ready(function(){$2.fn.elExists=function(){return this.length>0};var $html,window_width,pageUrl,header,topBarHeight,mainHeaderHeight,innerHeaderHeight,headerTotalHeight,mobileHeader,mobileHeaderHeight,pageUrl,$body,$galleryWithThumbs,$window;$body=$2("body"),$html=$2("html"),header=$2(".header"),mobileHeader=$2(".header-mobile"),$window=$2(window),window_width=$2(window).width(),pageUrl=window.location.href.substr(window.location.href.lastIndexOf("/")+1),topBarHeight=$2("header .top-bar").elExists()?$2("header .top-bar")[0].getBoundingClientRect().height:0,mainHeaderHeight=$2(".header").elExists()?$2(".header")[0].getBoundingClientRect().height:0,innerHeaderHeight=$2(".header .header-inner").elExists()?$2(".header .header-inner")[0].getBoundingClientRect().height:0,headerTotalHeight=topBarHeight+mainHeaderHeight,mobileHeaderHeight=$2(".header-mobile").elExists()?$2(".header-mobile")[0].getBoundingClientRect().height:0,pageUrl=window.location.href.substr(window.location.href.lastIndexOf("/")+1),$galleryWithThumbs=$2(".gallery-with-thumbs"),$2("#dl-menu").dlmenu({animationClasses:{classin:"dl-animate-in-2",classout:"dl-animate-out-2"}}),$2(".menu-btn").on("click",function(e){e.preventDefault(),$2(this).toggleClass("open"),$2(".mobile-navigation").toggleClass("open-mobile-menu"),$2(".dl-menu").toggleClass("dl-menuopen")}),$2(".main-navigation-2 a").each(function(){$2(this).attr("href")===pageUrl||$2(this).attr("href")===""?($2(this).closest("li").addClass("active"),$2(this).parents("li.mainmenu__item-2").addClass("active")):(window.location.pathname==="/"||window.location.pathname==="/index.html")&&$2('.main-navigation a[href="index.html"]').parent("li").addClass("active")}),$2("[data-countdown]").each(function(){var $this=$2(this),finalDate=$2(this).data("countdown");$this.countdown(finalDate,function(event){$this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hours</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Minutes</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Seconds</span></div>'))})});function toolbarExpand(){$2(".toolbar-btn").on("click",function(e){e.preventDefault(),e.stopPropagation();var target=$2(this).attr("href"),prevTarget=$2(".toolbar-btn").attr("href");console.log(prevTarget);var prevTarget=$2(this).parent().siblings().children(".toolbar-btn").attr("href");$2(target).addClass("open"),$2(prevTarget).removeClass("open"),$2(this).is(".search-btn")||$2(".ai-global-overlay").addClass("overlay-open"),$2(".main-navigation").removeClass("open-mobile-menu"),$2(".dl-menu").removeClass("dl-menuopen"),$2(".menu-btn").removeClass("open")})}function clickDom(){$body.on("click",function(e){var $target=e.target,dom=$2(".wrapper").children();!$2($target).is(".toolbar-btn")&&!$2($target).is(".product-filter-btn")&&!$2($target).parents().is(".open")&&(dom.removeClass("open"),dom.find(".open").removeClass("open"),$2(".ai-global-overlay").removeClass("overlay-open"))})}function closeItems(){$2(".btn-close").on("click",function(e){e.preventDefault(),$2(this).parents(".open").removeClass("open"),$2(".ai-global-overlay").hasClass("overlay-open")&&$2(".ai-global-overlay").removeClass("overlay-open")})}function transparentHeaderSpacing(){$2(".wrapper").hasClass("enable-header-transparent")&&$2(window).on({load:function(){window_width>991?$2(".main-content-wrapper").css("margin-top",-mainHeaderHeight):$2(".main-content-wrapper").css("margin-top",0)},resize:function(){var mainHeaderHeightResize=$2(".header").elExists()?$2(".header")[0].getBoundingClientRect().height:0,ww=$2(window).width();ww>991?$2(".main-content-wrapper").css("margin-top",-mainHeaderHeightResize):$2(".main-content-wrapper").css("margin-top",0)}})}function mobileHeaderPosition(){$2(window).on({load:function(){mobileHeaderPositionInner(mainHeaderHeight)},resize:function(){var mainHeaderHeightResize=$2(".header").elExists()?$2(".header")[0].getBoundingClientRect().height:0;mobileHeaderPositionInner(mainHeaderHeightResize)}});function mobileHeaderPositionInner(height){$2("header .top-bar").elExists()?$2(".header-mobile").css("margin-top",-(height-topBarHeight)):$2(".header-mobile").css("margin-top",-height)}}function stickyHeader(){$2(window).on({load:function(){window_width<992?stickyConditional(".header-mobile-2",mobileHeaderHeight):stickyConditional(".fixed-header-2",mainHeaderHeight)},resize:function(){var ww=$2(window).width();ww<992?stickyConditional(".header-mobile-2",mobileHeaderHeight):stickyConditional(".fixed-header-2",mainHeaderHeight)}});function stickyConditional(selector,height){$2(window).on("scroll",function(){$2(window).scrollTop()>=height?($2(selector).addClass("sticky-header"),$2(".header-mobile-2").css("margin-top",0)):($2(selector).removeClass("sticky-header"),$2("header .top-bar").elExists()?$2(".header-mobile-2").css("margin-top",-(mainHeaderHeight-topBarHeight)):$2(".header-mobile-2").css("margin-top",-mainHeaderHeight))})}}function stickySocial(stickyArg){if($2(stickyArg.selector).elExists()){var sticky=$2(stickyArg.selector),container=$2(stickyArg.container),topPosition=sticky.offset().top,leftPosition=sticky.offset().left,height=sticky.outerHeight(),containerHeight=container.outerHeight(),containerTop=container.offset().top,stickyPosition=topPosition-height,topSpacing=stickyArg.topSpacing,defaultTopSpacing=topPosition-containerTop,columnWidth=parseInt(stickyArg.columnWidth),className=stickyArg.selector.substr(1);$2(window).on("scroll",function(){var windowTop=$2(window).scrollTop();windowTop>=stickyPosition&&windowTop<=containerHeight?sticky.addClass("fixed").css({left:leftPosition,top:topSpacing}):sticky.removeClass("fixed").css({left:"auto",top:defaultTopSpacing+"px"})}),$2(window).on({load:function(){window_width<columnWidth?sticky.removeClass(className).addClass("no-sticky"):sticky.addClass(className).removeClass("no-sticky")},resize:function(){var ww=$2(window).width();ww<columnWidth?sticky.removeClass(className).addClass("no-sticky"):sticky.addClass(className).removeClass("no-sticky")}})}}var SocialStickyArg={selector:".sticky-social",container:".single-post",topSpacing:"100px",columnWidth:"992"};stickySocial(SocialStickyArg);function asideHeaderSpacing(){$2(".wrapper").not(".enable-header-transparent")&&$2(".wrapper").hasClass("enable-header-aside")&&$2(window).on({load:function(){var asideHeaderWidth=$2(".header-aside").elExists()?$2(".header-aside")[0].getBoundingClientRect().width:0;$2(".wrapper").css("padding-left",asideHeaderWidth)},resize:function(){var asideHeaderWidth=$2(".header-aside").elExists()?$2(".header-aside")[0].getBoundingClientRect().width:0;$2(".wrapper").css("padding-left",asideHeaderWidth)}})}function closeNotice(){$2(".close-notice").on("click",function(e){e.preventDefault(),$2(".notice-text-wrapper").slideUp("500").addClass("notice-text-close")})}function dropdownAnimation(){$2(".dropdown").on("show.bs.dropdown",function(e){$2(this).find(".dropdown-menu").first().stop(!0,!0).slideDown(300)}),$2(".dropdown").on("hide.bs.dropdown",function(e){$2(this).find(".dropdown-menu").first().stop(!0,!0).slideUp(200)})}$2(".product-tab__link").on("click",function(){var parent=$2(this).parent(".product-tab__item");parent.addClass("active"),parent.siblings().removeClass("active")});function expandAction(){$2(".expand-btn").on("click",function(e){e.preventDefault();var target=$2(this).attr("href");$2(target).slideToggle("slow")})}function expandShippingInfo(){$2("#shipdifferetads").on("change",function(){$2("#shipdifferetads").prop("checked"),$2(".ship-box-info").slideToggle("slow")})}function expandPaymentInfo(){$2('input[name="payment-method"]').on("click",function(){var $value=$2(this).attr("value");$2(this).parents(".payment-group").siblings(".payment-group").children(".payment-info").slideUp("300"),$2('[data-method="'+$value+'"]').slideToggle("300")})}function popupClose(){$2(".popup-close").on("click",function(e){e.preventDefault(),$2("#subscribe-popup").fadeOut("slow")}),$2(".ai-newsletter-popup-modal").on("click",function(e){e.stopPropagation()})}function productFilterExpand(){$2(".product-filter-btn").on("click",function(e){e.preventDefault(),e.stopPropagation(),$2(this).toggleClass("open"),$2(".advanced-product-filters").slideToggle("slow")})}var imagePopup=$2(".popup-btn"),videoPopup=$2(".video-popup");imagePopup.magnificPopup({type:"image",gallery:{enabled:!0}}),videoPopup.magnificPopup({type:"iframe",closeMarkup:'<button type="button" class="custom-close mfp-close"><i class="dl-icon-close mfp-close"></i></button type="button">'}),$2(".product-gallery-image-carousel").slick({slidesToShow:1,arrows:!0,prevArrow:'<span class="slick-btn slick-prev"><i class="dl-icon-left"></i></span>',nextArrow:'<span class="slick-btn slick-next"><i class="dl-icon-right"></i></span>'});function galleryWithThumb(){if($galleryWithThumbs.elExists()){var navSliderSelector=$2(".nav-slider");navSliderSelector.each(function(index,element){var options=$2(".nav-slider")[0].getAttribute("data-options"),optionsObj=JSON.parse(options),vertical=optionsObj.vertical?optionsObj.vertical:!1,vertical_md=optionsObj.vertical_md?optionsObj.vertical_md:!1,arrows=optionsObj.arrows?optionsObj.arrows:!1,dots=optionsObj.dots?optionsObj.dots:!1,infinite=optionsObj.infinite?optionsObj.infinite:!1,infinite_md=optionsObj.infinite_md?optionsObj.infinite_md:!1,arrowPrev=optionsObj.arrowPrev?optionsObj.arrowPrev:"",arrowNext=optionsObj.arrowNext?optionsObj.arrowNext:"",arrowPrev_md=optionsObj.arrowPrev_md?optionsObj.arrowPrev_md:"",arrowNext_md=optionsObj.arrowNext_md?optionsObj.arrowNext_md:"",slideToShow=optionsObj.slideToShow?optionsObj.slideToShow:3,slideToShow_md=optionsObj.slideToShow_md?optionsObj.slideToShow_md:3,slideToShow_sm=optionsObj.slideToShow_sm?optionsObj.slideToShow_sm:3,slideToShow_xs=optionsObj.slideToShow_xs?optionsObj.slideToShow_xs:3,slideToScroll=optionsObj.slideToScroll?optionsObj.slideToScroll:1,slideToScroll_md=optionsObj.slideToScroll_md?optionsObj.slideToScroll_md:1,slideToScroll_sm=optionsObj.slideToScroll_sm?optionsObj.slideToScroll_sm:1,slideToScroll_xs=optionsObj.slideToScroll_xs?optionsObj.slideToScroll_xs:1;navSliderSelector.slick({slidesToShow:slideToShow,slidesToScroll:slideToScroll,vertical:vertical,dots:dots,infinite:infinite,arrows:arrows,focusOnSelect:!0,mobileFirst:!1,prevArrow:'<span class="slick-btn slick-prev"><i class="'+arrowPrev+'"></i></span>',nextArrow:'<span class="slick-btn slick-next"><i class="'+arrowNext+'"></i></span>',responsive:[{breakpoint:1200,settings:{slidesToShow:slideToShow}},{breakpoint:992,settings:{slidesToShow:slideToShow_md,vertical:vertical_md,infinite:infinite_md,prevArrow:'<span class="slick-btn slick-prev"><i class="'+arrowPrev_md+'"></i></span>',nextArrow:'<span class="slick-btn slick-next"><i class="'+arrowNext_md+'"></i></span>'}},{breakpoint:767,settings:{slidesToShow:slideToShow_sm,vertical:vertical_md,infinite:infinite_md,prevArrow:'<span class="slick-btn slick-prev"><i class="'+arrowPrev_md+'"></i></span>',nextArrow:'<span class="slick-btn slick-next"><i class="'+arrowNext_md+'"></i></span>'}},{breakpoint:576,settings:{slidesToShow:slideToShow_xs,vertical:vertical_md,infinite:infinite_md,prevArrow:'<span class="slick-btn slick-prev"><i class="'+arrowPrev_md+'"></i></span>',nextArrow:'<span class="slick-btn slick-next"><i class="'+arrowNext_md+'"></i></span>'}}]})})}}for(var productThumb=$2(".product-gallery__image img"),imageSrcLength=productThumb.length,images=[],indexNumbArray=[],i=0;i<productThumb.length;i++)images[i]={src:productThumb[i].src};$2(".stars a").on("click",function(e){e.preventDefault(),$2(this).addClass("active"),$2(this).siblings().removeClass("active")}),$2('[data-toggle="tooltip"]').tooltip();function productMasonryActivation(){var $masonry=$2(".masonry-produtct-layout"),$grid=$2(".grid-item");$grid.hide(),$masonry.imagesLoaded({background:!0},function(){$grid.fadeIn(),$masonry.masonry({itemSelector:".grid-item",layoutMode:"fitRows",fitWidth:!0,initLayout:!0,stagger:30})})}function blogMasonryActivation(){var $masonry=$2(".masonary-blog-layout"),$grid=$2(".blog-item");$grid.hide(),$masonry.imagesLoaded({background:!0},function(){$grid.fadeIn(),$masonry.masonry({itemSelector:".grid-item",columnWidth:".grid-sizer",percentPosition:!0})})}$2("#sticky-sidebar").theiaStickySidebar({additionalMarginTop:80});function productVariation(){$2(".variation-btn").on("click",function(e){e.preventDefault();var $attr=$2(this).data("original-title");$2(this).parents(".variation-wrapper").siblings().children().text($attr).css("opacity","1"),$2(".reset_variations").css("display","block")}),$2(".reset_variations").on("click",function(e){e.preventDefault(),$2(".swatch-label strong").text(""),$2(this).css("display","none")})}function airiAccordion(){$2(".accordion__link").on("click",function(e){var $target=$2(this).data("target");$2($target).slideToggle(300)})}$2(window).on("load",function(){$2(".ai-preloader").removeClass("active"),productMasonryActivation(),blogMasonryActivation()}),$2(document).ready(function(){galleryWithThumb(),transparentHeaderSpacing(),asideHeaderSpacing(),mobileHeaderPosition(),dropdownAnimation(),expandAction(),expandShippingInfo(),expandPaymentInfo(),stickyHeader(),popupClose(),closeItems(),toolbarExpand(),closeNotice(),clickDom(),productVariation(),airiAccordion(),productFilterExpand()})})}(jQuery);
//# sourceMappingURL=/cdn/shop/t/41/assets/theme.js.map?v=87166446093406222691703599493
