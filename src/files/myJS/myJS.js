

// from http://bootsnipp.com/snippets/featured/collapsible-panel
// to collapse/expand a Bootstrap panel
// Modified to remove the slide up/down functionality (done by Bootstrap)
// so this just swaps the up/down arrow on the heading.
// There may be a better BS way to detect the transition.
$(document).on('click', '.panel-heading span.clickable', function(e){
  var $this = $(this);
//	var $panel = $($this.parents('.panel').find('.panel-body'));  // BS now does this.
	if(!$this.hasClass('panel-collapsed')) {
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	} else {
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	}
})


// from http://jsfiddle.net/technotarek/3hj46/ 
// to allow a link (in one tab of a page) to link to (and switch to) a different tab.
$(window).load(function(){
    $("a[data-tab-destination]").on('click', function() {
        var tab = $(this).attr('data-tab-destination');
        $("#"+tab).click();
    });
})