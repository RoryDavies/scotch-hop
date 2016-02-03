

// from http://bootsnipp.com/snippets/featured/collapsible-panel
// to collapse/expand a Bootstrap panel
$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
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