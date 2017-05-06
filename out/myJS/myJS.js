

// Based on code from http://bootsnipp.com/snippets/featured/collapsible-panel
// BS does the actual expand/collapse (with its own html markup requirements).
// This just swaps the up/down arrow on the heading, 
// It expects the html to be something like the following ...
//  <div class="panel-heading"> .....
//            <span class="clickable panel-collapsed"> ...
//              <i class="glyphicon glyphicon-chevron-down "></i> ...
$(document).on('click', '.panel-heading span.clickable', function(e){
  var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	} else {
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	}
})


// from http://jsfiddle.net/technotarek/3hj46/ 
// to allow a link (in one tab of a page) to link to (and switch to) a different tab in the same page.
// The link must include <a data-tab-destination="..." ...> with the id of the tab (header, not content).
// The code causes the link to have the same effect as clicking on the tab, as we want.
$(window).load(function(){
    $("a[data-tab-destination]").on('click', function() {
        var tab = $(this).attr('data-tab-destination');
        $("#"+tab).click();
    });
})

/* The Twitter script below should perhaps be elsewhere for tidiness, but here for now alongside the twitter html etc 
*/
/* 
!function(d,s,id){
 var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
 if(!d.getElementById(id)){
  js=d.createElement(s);
  js.id=id;
  js.src=p+"://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js,fjs);
 }
}
(document,"script","twitter-wjs");
 */


/* The Facebook script below should perhaps be elsewhere for tidiness, but here for now alongside the twitter html etc 
*/
/*
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.6";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
*/
