/*
|---------------------------------------------------------------
| SITE LOCAL PUBLIC FUNCTIONS
|---------------------------------------------------------------
|
*/


/*
|---------------------------------------------------------------
| RESET IE ELEMENT FUNCTIONS
|---------------------------------------------------------------
|
*/

this.reset_element_ie = function(){
	
	/* see if border-radius is available */
	if (!Modernizr.borderradius) {
		
		/* if not, then load in the jQuery Corners plugin and apply rounded corners to the article elements */
		$.getScript(http_root+"views/javascripts/jquery.corner/jquery.corner.js", function () {
			//$(".round-corner").corner();
			//DD_roundies.addRule('.round-corner', '10px', true);
		});
		
	}
	
	/* check if it is IE first and it is older than version 9 */
	if ($.browser.msie && parseInt($.browser.version) < 9) 
	{
		/* remove all the round-corner classes from slides since it is not working on IE (fixed - no need of this) */
		if($('.slide li').length > 1)
		{	
			//$('.slide li').removeClass('round-corner');
		}
		
		/* change the height to a fixed number (fixed - no need of this)*/
		if($('#home').length > 0)
		{	
			//$('#main').css({height:'837px'});
		}
		
		/* other essensial resets for IE */
		$("#lates-news .item-news:last").css({
			margin: '0px'
		});
		
		$("#menu-header li:last-child a").css({
			borderRight: '0px solid #000000'
		});
			
		$( '.slide li:first' ).css({
			display: 'block'
		});
		
		$(".column-global .item-global:last-child, .item-glossary:last-child, .item-search:last-child ").css({
			margin: '0px'
		});
		
		$(".item-expert:last-child").css({
			margin: '0px',
			border: '0px solid #000'
		});

		$("#body a").hover(function () {
			$(this).css({opacity: .4});
		}, function () {
			$(this).css({opacity: 1});
		});
		
		/*
		$(".item-content-event, .item-content-event .round-corner").css({
			width: 'auto',
			border: '0px solid #000'
		});
		*/
		
		/* varying radii, "all" browsers */	
		DD_roundies.addRule('.round-corner', '10px', true);
		DD_roundies.addRule('.round-corner-3px', '3px', true);
		DD_roundies.addRule('.round-corner-bottom-left-right', '0px 0px 10px 10px', true);
		DD_roundies.addRule('.round-corner-top-left-right', '10px 10px 0px 0px', true);
	}
	else
	{
		loadItem_global();
		loadItem_event();
	}

}

/*
|---------------------------------------------------------------
| SLIDE FUNCTIONS
|---------------------------------------------------------------
|
| apply to the slide on the home page
|
*/

function run_slide(target_slide) {

	//var target_slide = $('#slide');
	//var target_slide = $('"'+target_slide'"');
	
	//add a class the the first element
	$('li:first-child',target_slide).addClass('active');
	
	//Set the opacity of all images to 0
	$('.slide li').css({opacity: 0.0});
	
	//Get the first image and display it (set it to full opacity)
	$('.slide li:first-child').css({opacity: 1.0});
	
	//Set the caption background to semi-transparent
	//$('.slide .caption h2').css({opacity: 0.7});

	//Resize the width of the caption according to the image width
	//$('.slide .caption').css({width: $('.slide > li').find('img').css('width')});
	
	//var height = $('.slide li').find('img').css('height');
	//$('.slide').css({height:height});
	
	//Get the caption of the first image from longdesc attribute and display it
	//$('.caption h2',target_slide).html($('.slide li:first-child').find('img').attr('title'));
	$('.caption p',target_slide).html($('.slide li:first-child').find('img').attr('longdesc'));
	
	//Call the gallery function to run the slideshow, 6000 = change to next image after 6 seconds
	setInterval('loop_slide("'+target_slide+'")',5000);
	//setInterval('loop_slide(\''+target_slide+'\')',5000);
}

function loop_slide(target_slide) {
	
	//var target_slide = $('#slide');
	
	//if no IMGs have the show class, grab the first image
	var current = ($('.slide li.active')?  $('.slide li.active') : $('.slide li:first-child'));

	//Get next image, if it reached the end of the slideshow, rotate it back to the first image
	var next = ((current.next().length) ? ((current.next().hasClass('caption'))? $('.slide li:first-child') :current.next()) : $('.slide li:first-child'));	
	
	//Get next image caption
	//var caption_title = next.find('img').attr('title');
	var caption_description = next.find('img').attr('longdesc');
	//alert(caption_description);
	
	//Get next image height
	//var height = next.find('img').css('height');
	
	//Set the fade in effect for the next image, show class has higher z-index
	current.addClass('last-active');
	next.css({opacity: 0.0})
	.addClass('active')
	.animate({opacity: 1.0}, 1000, function(){
		current.animate({opacity: 0.0}, 1000).removeClass('active last-active');
		//$('.caption').animate({opacity: 1.0}, 1000);
		//$('#slides .caption h2').html(caption_title);
		$('.caption p',target_slide).html(caption_description);
	});

}

/*
|---------------------------------------------------------------
| BOUNCE HEADER FUNCTIONS
|---------------------------------------------------------------
|
| apply to the home page header
|
*/

this.bounce_header = function(){

	$('div#header p a#button-banner').animate({
		height: 'toggle',
		"opacity": "toggle"
	},{
		duration: 1000,
		specialEasing:{
			height: 'easeOutBounce'
		},
		complete: function() {
		  //$(this).after('<div>Animation complete.</div>');
		}
	});
	
	/*
	setTimeout(function(){
		$('div#header h1 a#button-banner').animate({
				height: 'toggle'
			},{
				duration: 1000,
				specialEasing:{
					height: 'easeOutBounce'
				},
			});
	},500);
	*/
}

/*
|---------------------------------------------------------------
| REPLACE ELEMENT FUNCTIONS
|---------------------------------------------------------------
|
| apply to the contact page, event page
|
*/

this.replace_element_selectbox = function(){

	/* select box replacement - loop through each element has the class of selectbox */
	$(".selectbox").each(function(){
		
		$(this).hide();
		$(this).after('<ul class="select-replacement"></ul>');
		
		if($(this).length > 0)
		{
			var parent = $(this).parent();
			var first = $("option:first",$(this));
			
			$(".select-replacement",parent).append("<li title='"+first.val()+"'>"+first.text()+"</li>");
			
			$("option",$(this)).each(function () {
                
				$(".select-replacement",parent).append("<li title='"+$(this).val()+"'>"+$(this).text()+"</li>");
				//alert($(this).text());
            });
			
			$(".select-replacement li",parent).not(':first').hide();
			
			$(".select-replacement li",parent).click(function(){
				//alert($(this).attr('title'));
				//alert($(this).index());
				//alert($(this).attr('class'));
				//alert($(".select-replacement li.current",parent).text());
				var title = $(this).attr('title');
				var current = $(".select-replacement li.current",parent).text();

				if($(this).index() != 0) 
				{
					$(".select-replacement li",parent).removeClass('current');
					$(".select-replacement li",parent).not(':first').hide();
					$(this).addClass('current');
				}
				else if($(this).siblings().is(":visible"))
				{
					$(".select-replacement li",parent).not(':first').hide();
				}
				else
				{
					$(".select-replacement li",parent).not(':first').show();
				}

				$(".select-replacement li:first",parent).text($(this).text());
				$(".select-replacement li:first",parent).attr('title',title);
				
				$("option[value='"+title+"']").attr('selected', 'selected');
				
				
			});

		}
	});
	
}

this.replace_element_checkbox = function(){

	/* check box replacement - loop through each element has the class of button-checkbox */
	$(".button-checkbox").each(function(){
	
		if($(this).length > 0)
		{
			$(this).hide();
			$(this).after('<span class="button-checkbox-replacement"></span>');
			var $each_check = $(this).attr('checked');
			
			if($each_check == true)
			{
				$('.button-checkbox-replacement').css({backgroundPosition:'0px -20px'});

				$('.button-checkbox-replacement').click(function(){
					
					var $this_parent = $(this).parent();
					var $this_check = $('.button-checkbox',$this_parent).attr('checked');

					if($this_check == false)
					{
						$('.button-checkbox',$this_parent).attr('checked', true);
						$(this).css({backgroundPosition:'0px -20px'});
					}
					else
					{
						$('.button-checkbox',$this_parent).attr('checked', false);
						$(this).css({backgroundPosition:'0px 0px'});
					}
					
				});
				
			}
			else
			{
				
				$('.button-checkbox-replacement').toggle(
					function (){
						var $this_parent = $(this).parent();
						$(this).css({backgroundPosition:'0px -20px'});
						$('.button-checkbox',$this_parent).attr('checked', true);
					},
					function (){
						var $this_parent = $(this).parent();
						$(this).css({backgroundPosition:'0px 0px'});
						$('.button-checkbox',$this_parent).attr('checked', false);
					}
				);

			}
		}
	});
	
	/*
	$(".button-checkbox").each(function(){
	
		if($(this).length > 0)
		{
			$(this).hide();
			$(this).after('<span class="button-checkbox-replacement"></span>');
			
			$('.button-checkbox-replacement').toggle(
				function (){
					var target = $(this).parent();
					$(this).css({backgroundPosition:'0px -20px'});
					$('.button-checkbox',target).attr('checked', true);
				},
				function (){
					var target = $(this).parent();
					$(this).css({backgroundPosition:'0px 0px'});
					$('.button-checkbox',target).attr('checked', false);
				}
			);
		}
	});
	*/
	
}

this.replace_element_radio = function(){

	/* radio button replacement - loop through each element has the class of button-radio */
	$(".button-radio").each(function(){
	
		if($(this).length > 0)
		{
			$(this).hide();
			$(this).after('<span class="button-radio-replacement"></span>');
			var $each_check = $(this).attr('checked');
			
			if($each_check == true)
			{
				$('.button-radio-replacement').css({backgroundPosition:'0px -20px'});
			}
			else
			{
				$('.button-radio-replacement').click(function(){
					var $this_parent = $(this).parent();
					var $this_check = $('.button-radio',$this_parent).attr('checked');
					var $this_value = $('.button-radio',$this_parent).val();
					//alert($this_value);
					
					if($this_check == false)
					{
						$('.button-radio').attr('checked', false);
						$('.button-radio-replacement').css({backgroundPosition:'0px 0px'});
						$('.button-radio-replacement',$this_parent).css({backgroundPosition:'0px -20px'});
						$('.button-radio',$this_parent).attr('checked', true);
					}
					
					if($this_value == 3)
					{
						//alert($this_value);
						$('.select_forum').show();
					}
					else
					{
						$('.select_forum').hide();
					}
					
				});
			
			}	
		}
	});
	
}


this.replace_element_radio_size = function(){


	var replacement = $('<a href="#" class="button-size hide-text"></a>');
	
	/* set the first radio button to checked */
	$('.button-replace-size:first').attr('checked', true);

    /* loop each one has the class of button-replace-size */
	$('.button-replace-size').each(function(){
        
		/* set the $this variable and hide it */
		var $this = $(this);
		$this.hide();
			
		/* get the number of loop from title */
		var array_title = $this.attr('title').split('/'); 
		var last_title = $this.attr('title').split('/').pop(); 
		//alert(last_class);

        if (last_title.length > 1) {
			
			/* remove the whitespace from the beginning and end of a string */
			var space_trim = jQuery.trim(last_title);
			
			/* if you wish to replace all kind of whitespace characters the most efficient way */
			var space_replace = space_trim.replace( /\s{2,}/g, ' ' );
			
			/* replace the single space with hyphen */
			space_replace = space_replace.replace( /\s/g, '-' );

			var string_lowercase = space_replace.toLowerCase();
			
            $(this).after(
                replacement.clone()
                    .attr('id', 'button-' + string_lowercase)
                    .attr('title', 'Click here to select ' + last_title)
                    .text(string_lowercase)
            );
		}
		
		/* check if current radio button has checked, then add the class to its image replacement */
		var $this_check = $(this).attr('checked');
		//alert($(this).attr('checked'));
		if($this_check === 'checked')
		{
			//alert('1');
			$this.next().addClass('selected').attr('title', 'You selected size' + last_title);
		}
		
    });
	
	/* now when you click on each image replacement */
	$('.button-size').click(function(){
		
		var $this = $(this);
		var $this_parent = $(this).parent();
		var $this_check = $('.button-replace-size',$this_parent).attr('checked');
		var $this_title = $('.button-replace-size',$this_parent).attr('title').split('/').pop();
		var $this_value = $('.button-replace-size',$this_parent).val();
		//alert($this_title);
		
		if($this_check = 'undefined')
		{
			//alert('0');
			$('.button-size').removeClass('selected');
			$('.button-replace-size').attr('checked', false);
			
			$('.button-replace-size').each(function(){
				
				var $this = $(this);
				
				/* get the number of loop from title */
				var array_title = $this.attr('title').split('/'); 
				var last_title = $this.attr('title').split('/').pop();
				
				$this.next().attr('title', 'Click here to select' + last_title);
				
			});
			
			$this.addClass('selected');
			$this.attr('title', 'You selected size' + $this_title);
			$('input',$this_parent).attr('checked', true);
			
		}
		
		return false;
		
	});
	
}

/* this relies on the 3rd party plugin */
this.replace_element_scrollbar = function(){
	$('.scroll-box').jScrollPane({
		showArrows:false, 
		scrollbarWidth: 10,
		reinitialiseOnImageLoad: true
	});
};

/* this relies on the 3rd party plugin */
this.replace_element_textarea_autogrow = function(){
	
	/* function for auto grow */
	/* set the variable */
	var autogrow = $(".autogrow");
	
	autogrow.css({
	
		overflow: 'hidden', 
		display: 'block'
		
	});
	
	autogrow.focus(function () {
	
		$(this).prettyComments();
		//$(this).elastic();
	});
	
}
	

/*
|---------------------------------------------------------------
| FORUM FUNCTIONS
|---------------------------------------------------------------
|
| apply to the comment in a blog or a forum
|
*/

this.reset_element_item_pagination = function(){

	/* if .item-pagination-global exists */
	if($('.item-pagination-global').length > 0)
	{
		/* add the class of line-divider-public in the #pagination */
		if($('.item-pagination-global .line-divider-public').length == 0)
		{
			$(".item-pagination-global li:not(:last)").each(function(){
				$(this).after('<span class="line-divider-public">|</span>');
			});
		}
		
	}
}

this.replace_element_input_password = function(){

	/* password input field replacement - loop through each element has the class of input-password */
	$(".input-password").each(function(){
	
		if($(this).length > 0)
		{
			/* create the a dump-password-input-field next to the current input and hide the password input */
			var val_name = $(this).attr('name');
			var target = $(this).parent();
			$(this).after("<input name='"+val_name+"_dump' type='password' value=''/>");
			$(this).next().hide();
			
			/* on focus */
			$(this).focus(function () {
				
				/* hide the input and display the next input and put focus on it */
				$(this).hide();
				$(this).next().show().focus();
				
				/* get the value from the dump-password-input-field and put it into actual password input for database validation */
				$(this).next().keyup(function () {
					var value = $(this).val();
					$(this).prev().val(value);
				}).keyup();
				
			}).next().blur(function(){
				
				/* if the password input is empty */
				if($(this).val() == '')
				{
					$(this).hide();
					$(this).prev().show();
					$('form *[title]').inputHint();
				}
				//alert($(this).parent().html());
					
			});	
		}
	});
}

this.reset_element_string_interact = function(){
	
	/* if .item-pagination-global exists */	
	$('.string-interact').each(function(){	
	
		var $this = $(this);
		
		/* add the class of line-divider-public in the #pagination */
		if($('.middle-dot-string', $this).length == 0)
		{
			$("span:not(:last)", $this).each(function(){
				$(this).after('<span class="middle-dot-string">&#183;</span>');
			});
		}
		
	});
}

this.reset_element_string_comment_form = function(){

	/* hide the comment form if no comment has found yet */
	$('.item-string-global').each(function(){
		
		var $this = $(this);
		var thread_total = $('.item-thread-global',$this).length;
		if(thread_total == 1) 
		{
			//alert('1');
			$('.item-thread-global',$this).hide();
			$('.item-needle-global',$this).css({margin:'0px 0px 0px 0px'});
			$this.css({padding:'0px 0px 10px 0px'});
		}
		
	});
}

this.reset_element_autohide = function(){

	/* function for auto hide */
	$(".autohide").each(function(){
	
		/* set the variable and store its value */
		var $this = $(this);
		
		var value_default = $this.val();
		
		var parent_autohide = $this.parents('form');
		
		var parent_button = $('input[type=submit]',parent_autohide).parents("div:.item-form").hide();
		
		/* The CSS tag 'margin' is actually a shorthand for the four separate margin values, top/left/bottom/right. 
		Use css('marginTop'), etc. - note they will have 'px' on the end if you have specified them that way.

		Use parseInt() around the result to turn it in to the number value.*/
		var parent_marginbottom = parseInt($this.parents("div:.item-form").css("marginBottom"));
		//alert($this.parents("div:.item-form").css("marginTop").replace('px', ''));
		//alert($this.parents("div:.item-form").css("marginRight").replace('px', ''));
		//alert($this.parents("div:.item-form").css("marginBottom").replace('px', ''));
		//alert($this.parents("div:.item-form").css("marginLeft").replace('px', ''));
		//alert(parent_style);
		if(parent_marginbottom > 0)
		{

			$this.parents("div:.item-form").css({margin:'0px'});
			
			//alert(value_default); // I will get the string value of each textarea element

			$this.focus(function () {

				//alert(value_default); // I will get [object object]
				
				var $this = $(this);
				
				$this.elastic();
				
				$this.parents('div:.item-form').css({margin:'0px 0px '+parent_marginbottom+'px 0px'});
				
				var $this_parent = $this.parents('form');
				
				var $this_button =  $('input[type=submit]',$this_parent).parents("div:.item-form").show();


			}).blur(function(){
			
				//alert(value_default); // I will get [object object]
					
				var $this = $(this);

				var value_current = $this.val();
				
				if ( value_current == value_default) 
				{
					/* this line will create error on IE as IE6/ IE7 doesn't support the 'inherit' value - $this.css({height: 'inherit'}); */
					$this.css({height:''});
					
					$this.parents('div:.item-form').css({margin:'0px'});
					
					var $this_parent = $this.parents('form');
					
					var $this_button =  $('input[type=submit]',$this_parent).parents("div:.item-form").hide();
					
					//alert(value_default);
					
				}
			});
		
		}
	
	});
	
}

this.tooltip_form = function(){	
	
	/* CONFIG */		
	xOffset = 10;
	yOffset = 20;		
	// these 2 variable determine popup's distance from the cursor
	// you might want to adjust to get the right result		
	/* END CONFIG */

	$("input[type=text],input[type=password]").each(function(){
	
		if($(this).siblings('.input-defination').is(":hidden"))
		{
			//alert($(this).attr('name'));
			
			$(this).hover(function(e){											  
				
				/* get the text from its sibling which has the class of .input-defination */
				var text_sibling = $(this).siblings('.input-defination').text();
				
				/* 
				store the title data and then remove it
				or using data() - title_this = $(this).data("title", $(this).attr("title")).removeAttr("title");
				*/
				title_this = $(this).attr('title');
				$(this).removeAttr('title');
				
				/* append the popup */
				$("body").append("<p class='tooltip'>"+ text_sibling +"</p>");
				$(".tooltip")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");		
			},
			function(){
			
				/* 
				restore the removed title
				or using data() - $(this).attr('title', $(this).data("title"));
				*/				
				$(this).attr('title', title_this);
				$(".tooltip").remove();
				
			});	
			
			$(this).mousemove(function(e){
				$(".tooltip")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX + yOffset) + "px");
			});
		}
	});
	
	
};

/*
|---------------------------------------------------------------
| CLONE FUNCTIONS
|---------------------------------------------------------------
|
| apply to the news page, and resources page
|
*/

this.loadItem_global = function(){
	
	/*
	You can also use the live() method to enable/disable events.
	What will happen with this code is that when you click .load-item, it will add the class disabled to this element. 
	This will make it so that the selector no longer matches the element and the event will not be fired until 
	the 'disabled' class is removed making the .live() selector valid again.
	*/
	$('.load-item-global:not(.disabled)').live('click',function(){
        
		/* declare arrays */
		var left = new Array();
		var right = new Array();
		var clone = new Array();
		
		/* get the number of loop from class */
		var array_class = $(this).attr('class').split(' '); 
		var last_class = $(this).attr("class").split(' ').slice(-1); 

		/* scroll the page to the top at 170 px */
		$('html, body').animate({scrollTop:170}, 'slow');
		
		/* add a .current class to the target item */
		$(this).parentsUntil('.column-global').addClass('current');
		
		/* add .disabled class to each a tag in the .current element-div */
		$('.current a').addClass('disabled');
		
		/* cloning the elements */
		for( var i = 1; i <= last_class; i++){
			
			left.push($('.column-global.left .item-global').eq(i-1));
			right.push($('.column-global.right .item-global').eq(i-1));
			clone.push(right[i-1].clone().insertAfter(left[i-1]));
			right[i-1].hide();
			//alert(clone.length);
		}
		
		/*
		var $global_left = $('.column-global.left .item-global');
		var $global_right = $('.column-global.right .item-global');
		for( var i = 1; i <= last_class; i++){
			//$global_left[i-1];
			//$global_right[i-1];
			$global_left.eq(i-1);
			$global_right.eq(i-1);
		}

		var left_1 = $('.column-global.left .item-global').eq(0);
		var left_2 = $('.column-global.left .item-global').eq(1);
		var left_3 = $('.column-global.left .item-global').eq(2);
		
		var right_1 = $('.column-global.right .item-global').eq(0);
		var right_2 = $('.column-global.right .item-global').eq(1);
		var right_3 = $('.column-global.right .item-global').eq(2);

		var clone_1 = right_1.clone().insertAfter(left_1);
		var clone_2 = right_2.clone().insertAfter(left_2);
		var clone_3 = right_3.clone().insertAfter(left_3);
		
		right_1.hide();
		right_2.hide();
		right_3.hide();
		*/
		
		/* prepend a fresh div */
		$('.column-global.right').prepend('<div class="wrapper-item"></div>');

		//$(".item-global:not(.current)").css({opacity: 0.6});
		//$(".item-global:not(.current)").append('<div class="white-out"></div>');
		$(".item-global").not('.current').append('<div class="white-out round-corner"></div>');
		
		$(".white-out").css({
			background: '#ffffff',
			position: 'absolute',
			width: '365px',
			height: '175px',
			zIndex: '20',
			top:'0',
			left:'0',
			opacity: .6
		});
		
		var path_url = $(this).attr('href');
		var path_file = $(this).attr('rel');
		var item_wrapper = $('.wrapper-item');
		
		var array_url = path_url.split('/');
		var pg_url = $(array_url).last()[0];
		
		item_wrapper.load(http_root+rp_template+path_file+'?url='+pg_url, function(){
			
			/* hide the wrapper first then slide it down slow */
			item_wrapper.hide().slideDown(1000);
			
			/* reset the css of the item wrapper */
			$('.item-content-news, .item-content-page').css({margin:'0px 0px 15px 0px'});
			
			/* function that reset the css of the item pagination */
			reset_element_item_pagination();
			
			/* function pagination that allows you to click through the slices of the item */
			loop_item(item_wrapper, path_file, pg_url, clone, right);
			
			/* funstion button that returns you to the original */
			return_item(clone, right);
			
			/* 
			When you do this:

			$('.disabled').click(function(){return false;});
			
			...you do two things by returning false:

			You prevent the browser default (like event.preventDefault()), and

			You prevent the event from bubbling up the DOM (like event.stopPropagation()).

			If you only want to do one or the other (like just preventing the default), you can do that:

			$('.disabled').click(function(event){ event.preventDefault(); });
			That way you're preventing the default action but not stopping bubbling, and 
			so any live handler you have should eventually be triggered.

			But I wonder if you really want to be doing this. I'm guessing if a link can have the class "disabled", 
			that it can be "enabled" sometimes? Just removing the "disabled" class won't turn off that 
			click handler (that's part of what live is for, handling changes for you). For instance:

			$('.disabled').live('click', function(event){ event.preventDefault(); });
						// ^^^^^^^^^^^^^-- Note the change
			...tells jQuery that rather than looking for elements that have the class "disabled" now, 
			you want it to check when the click occurs and only run the handler if the element matches at that point in time.
			*/
			$('.disabled').live('click', function(event){ event.preventDefault(); });
			
			
			/*
			issues with using AddThis on an all AJAX site and was able to come up with a couple of solutions for this issue.

			It turns out there is a variable that you can pass when loading the AJAX script as well as a way to re-initialize the script 
			if the DOM is reloaded via AJAX.
			
			To briefly summarize, the solution is loading AddThis with the variable domready=1 appended, and re-initializing the script 
			by deleting the initial load and then reloading the script dynamically:
			*/
			getScript_Addthis();

		});

        return false;
    });
}

/* load the AddThis script through ajax */
function getScript_Addthis(){
	
	/*
	issues with using AddThis on an all AJAX site and was able to come up with a couple of solutions for this issue.

	It turns out there is a variable that you can pass when loading the AJAX script as well as a way to re-initialize the script 
	if the DOM is reloaded via AJAX.
	
	To briefly summarize, the solution is loading AddThis with the variable domready=1 appended, and re-initializing the script 
	by deleting the initial load and then reloading the script dynamically:
	*/
	
	var script_addthis = 'http://s7.addthis.com/js/250/addthis_widget.js#domready=1';
			
	if (window.addthis){
		window.addthis = null;
	}
	
	$.getScript(script_addthis, function() {
	  //alert('Load was performed.');
	});

}

/* function pagination that allows you to click through the slices of the item */
function loop_item(item_wrapper, path_file, pg_url, clone, right) {

	/* pagination that allows you to click through the slices of the item */
	$('.item-pagination-global li a').click(function(){
		var path_item_pagination = $(this).attr('href');
		var array_item_pagination = path_item_pagination.split('?');
		var last_item_pagination = $(array_item_pagination).last()[0];
		item_wrapper.load(http_root+rp_template+path_file+'?url='+pg_url+'&'+last_item_pagination, function(){
		
			/* reset the css of the item wrapper */
			$('.item-content-news, .item-content-page').css({margin:'0px 0px 15px 0px'});
			
			/* function that reset the css of the item pagination */
			reset_element_item_pagination();
			
			/* function pagination that allows you to click through the slices of the item */
			loop_item(item_wrapper, path_file, pg_url, clone, right);
			
			/* funstion button that returns you to the original */
			return_item(clone, right);
			
			getScript_Addthis();
			
		})
		//alert(last_item_pagination);
		return false;
	});	
}

/* funstion button that returns you to the original */
function return_item(clone, right) {

	$('.button-return').click(function(){
	
		//alert(clone);
		//alert(clone.length);
		//alert(right);
		//alert(right.length);

		/* remove all the clones 
		clone_1.remove();
		clone_2.remove();
		clone_3.remove();
		*/
		
		for( var i = 1; i <= (clone.length); i++){

			clone[i-1].remove();
		
		}

		/* remove all the .disabled class if any exists */
		$('.current a').removeClass('disabled');
		
		/* remove the content wrapper and all the white-out */
		$('.wrapper-item, .white-out').remove();

		/* remove all the .current class if any exists */
		$('.item-global').removeClass('current');
		
		/* return all the clone parents 	
		right_1.show();
		right_2.show();
		right_3.show();
		*/
		
		for( var i = 1; i <= (right.length); i++){

			right[i-1].show();
		
		}

	
	return false;

	});
	
}

/*
|---------------------------------------------------------------
| EVENT FUNCTION
|---------------------------------------------------------------
|
| apply to the event page (note that it doesn't work according on ie below version 9)
|
*/

this.loadItem_event = function(){
	
	$(".load-item-event:not(.disabled)").live('mouseenter',function(e){
		
		/* remover anything from the previous activities */
		$('.wrapper-item-outer').remove();
		$('td div').removeClass('current');
		
		/* append a fresh div */
		$("body").append('<div class="wrapper-item-outer"><div class="wrapper-item-inner"></div></div>');
		
		/* set variables */
		var $this = $(this);
		var $parent = $this.parent();
		var parent_top = $parent.offset().top-0;
		var parent_left = $parent.offset().left+0;
		
		var path_url = $this.attr('href');
		var path_file = $this.attr('rel');
		var item_wrapper_outer = $('.wrapper-item-outer');
		var item_wrapper_inner = $('.wrapper-item-inner');
		
		var array_url = path_url.split('/');
		var pg_url = $(array_url).last()[0];
		
		/* add .disabled class to each a tag in the .current element-div */
		$this.addClass('disabled');
		$parent.addClass('current');
		
		/* set the css for the appended div */
		item_wrapper_outer.css({
			top: parent_top,
			left: parent_left,
			position: 'absolute',
			zIndex: '100',
			width: '430px',
			height: '80px',
			overflow: 'visible',
			border: '0px solid #000'
		});
		
		item_wrapper_inner.css({
			position: 'absolute',
			zIndex: '101',
			width: '430px',
			height: '100%',
			overflow: 'visible',
			marginTop: '-170px',
			border: '0px solid #000'
		});
		
		/* load the page */
		item_wrapper_inner.load(http_root+rp_template+path_file+'?url='+pg_url, function(){

			$('.item-content-event .round-corner').css({
				width: '260px',
				border: '0px solid #000'
			});
		
			item_wrapper_outer.hover(
				function() 
				{
					item_wrapper_outer.addClass('mouseenter');
				},
				function()
				{
					item_wrapper_outer.removeClass('mouseenter');
					$parent.removeClass('current');
					item_wrapper_outer.remove();
					
					/* remove all the .disabled class if any exists */
					$this.removeClass('disabled');
				}
			);	
			
			/*
			$('.current').trigger('focus');
			$('.current').focus(function() {
				
				//alert('x');
				
			}).blur(function() {
				//item_wrapper.addClass('mouseenter');
				if(item_wrapper.hasClass('mouseenter'))
				{
					alert('has mouseenter');
				}
				else
				{
					alert('has no mouseenter');
					//parent.removeClass('current');
					//item_wrapper.remove();
				}
			});
			
			$parent.focusout(function() {
			  alert('has mouseenter');
			}).blur(function() {
			 alert('has x mouseenter');
			  
			});
			
			*/
			/*
			$parent.hover(function() {
				//something
			},function(){
				
				$this.removeClass('disabled');
			});
			
			$parent.blur(function() {
			  alert('Handler for .blur() called.');
			});
			*/

		});
		
    });	
	
}

/*
|---------------------------------------------------------------
| TOGGLE TAG MENU FUNCTION
|---------------------------------------------------------------
|
| apply to the tag menu on video page
|
*/

this.toggle_tag_menu = function(){

	var target_button = $('#page-video .button-browse-categories');
	
	if($('#page-video #item-menu-video').is(":visible"))
	{
		target_button.css({backgroundPosition:'0px -14px'}).addClass('expanded');
	}
	
	target_button.click(function (){
			
		if($(this).hasClass('expanded'))
		{
			$(this).removeClass('expanded');
			$(this).css({backgroundPosition:'0px 0px'});
			$('#item-menu-video').slideUp(function(){
				$(this).removeClass('scroll-box');
			});
			
		}
		else
		{
			$(this).addClass('expanded');
			$(this).css({backgroundPosition:'0px -14px'});
			$('#item-menu-video').slideDown(function(){
				$(this).addClass('scroll-box');
				replace_element_scrollbar();
			});
		}
		return false;
	});
}


/*
$('#page-video .button-browse-categories').toggle(
	function (){
		$(this).css({backgroundPosition:'0px -14px'});
		$('#item-menu-video').slideDown(function(){
			$(this).addClass('scroll-box');
			replace_element_scrollbar();
		});	
	},
	function (){
		$(this).css({backgroundPosition:'0px 0px'});
		$('#item-menu-video').slideUp('fast', function(){
			$(this).removeClass('scroll-box');
		});
	}
);
*/


/*
|---------------------------------------------------------------
| STRING FUNCTIONS
|---------------------------------------------------------------
|
| apply to the comment in a blog or a forum
|
*/

this.comment_string = function(){

	/* when you click the 'string-comment' button if there is any there */
	$(".string-comment").click(function(){
		
		var $this = $(this);
		var $this_parent = $this.parents("div:.item-string-global");
		$('.item-thread-global:last',$this_parent).show();
		$('.item-needle-global',$this_parent).css({margin:'0px 0px 10px 0px'});
		$this_parent.css({padding:'0px 0px 20px 0px'});
		
		/* see if border-radius is available */
		if (!Modernizr.borderradius) {
			
			/* add a class on the text area for loading the jquery.corner on it */
			$("textarea", $this_parent).addClass('round-corner-ie');
			
			/* if not, then load in the jQuery Corners plugin and apply rounded corners to the article elements */
			$.getScript(http_root+"views/javascripts/jquery.corner/jquery.corner.js", function () {
				$(".round-corner-ie").corner();
				//DD_roundies.addRule('.round-corner', '10px', true);
			});
			
		}
		
		$("textarea", $this_parent).trigger("focus");
		return false;
		
	});

}

this.delete_string = function(){

	/* when you click the 'string-delete' button if there is any there */
	$(".string-delete").click(function(){
		
		/* set the varible */
		var $this = $(this);
		var $this_path = $this.attr('href');
		var $this_parent = $this.parent();
		var html_parent = $this.parent().html();
		
		/* get the second value of the class in delete class and store it in a variable called catagory */
		var catagory = $this.attr("class").split(' ').slice(1,2);
		
		/* display the loading */
		$this_parent.html('<img src="'+http_root+rp_image_global+img_loader+'" style="float:none; border:0px solid #000; margin:0px;"/> loading');
		
		/* load the form */
		$this_parent.load( $this_path, function(){
		
			// when the no/cancel button is triggered.
			$("input[type=button][name=no]").click(function(){
				$this_parent.html(html_parent);
				delete_string();
				return false;
			});
		
			$("form.form-string-delete",$this_parent).submit(function(){
				
				var $this = $(this);
				var $this_path = $this.attr('action');
				var $this_parent = $this.parents('.item-global');
				//alert($this.serialize());
				//alert($this_path);
				
				$.post($this_path, $this.serialize(), function(xml){
				
					/* append the popup */
					$(document.body).prepend("<div id='popup-result-public' class='popup-public'><div class='close'><a href='#' class='close'>x close</a></div><div class='result'></div></div>");
		
					/* set the target's value and set the target's width */
					var target = $('#popup-result-public').width(400);
					
					/* loop each of the result from the xml */
					$("result", xml).each(function(){
		
						/* set the local variable */
						var message = $(this).attr('message');
						//alert(message);
						
						/* append the message to the .result class */
						$(".result").append("<img src='"+http_root+rp_image_global+"info.png' style='float:none !important;' /> " + message);

					});
					
					/* check if the node of result exists, then show the message */
					if($(xml).find("result").length > 0)
					{
						//alert('result');
						ieShadowClass = 'ie-shadow-2';
						ieShadowzIndex = 29;
						set_center_public(target);
						closePopup_public(target);
						
						/* remove the popup after a timeout */
						setTimeout(function(){
							
							/* remove IE shadow */
							$('.ie-shadow-2').remove();
							
							/* fade out the popup and remove it */													
							target.fadeOut("slow",function(){
								target.remove();
							});	
						},1000);
					}
					
					
				});
				
				/* check whether the string is a needle or a thread then set which parent to remove */
				if (catagory == 'needle') var $this_remove =  $this.parents('.item-string-global');
					else var $this_remove =  $this.parents('.item-thread-global');
				
				/* slide up the parent */
				$this_remove.slideUp('slow', function() {
					
					/* remove the parent element */
					$this_remove.remove();
					
					/* check if there is no more string left */
					if($('.item-string-global').length == 0)
					{					
						
						if($('.form-needle').length > 0)
						{
							/* put this as a message */
							$this_parent.html('<p>It is now empty here. Start <a href="#" class="be-first">posting</a> something.</p>');
						}
						else
						{
							/* put this as a message */
							$this_parent.html('<p>It is now empty here.</p>');
						}
						
						/* attach the click function */
						$(".be-first",$this_parent).click(function(){
		
							var $this = $(this);
							var $this_prev = $this.parents("div:.item-global").siblings();
							$("textarea", $this_prev).trigger("focus");
							return false;
							
						});
						
					}
					
				});
				return false;
			});
		});
		
		return false;
	});
	
}

this.approve_string = function(){
	
	/* when you click the 'string-approved' button if there is any there */
	$(".string-approved").click(function(){
		
		var $this = $(this);
		alert($this.attr('title'));
		return false;
		
	});
	
	/* when you click the 'string-approve' button if there is any there */
	$(".string-approve").click(function(){
		
		var $this_timer;
		var $this = $(this);
		var $this_parent = $this.parent();
		var $this_path = $this.attr('href');
		var $this_parents = $this.parents('.string-interact');
		
		/* append a procesing */
		$this_parents.append('<span class="processing"> processing</span>');
		var $this_processing = $('.processing', $this_parents).css({fontSize:'11px', display:'none', margin:'0px 0px 0px 10px'});
		
		/* animate the processing */
		$this_processing.fadeIn('fast', function(){
			$this_timer = setInterval('animate_processing()',500);
		});

		$.post($this_path+'1',function(xml){
			
			clearInterval($this_timer);
			process_form_public(xml);
			//alert(data);
			
			if($(xml).find("result").length > 0)
			{
				/* remove the processing*/
				$this_processing.remove();
				
				$this_parent.html('<a href="#" title="This post has been approved" class="string-approved">Approved</a>');
		
				$(".string-approved",$this_parent).click(function(){
				
					var $this = $(this);
					alert($this.attr('title'));
					return false;
					
				});
				
				/* set the target's value and set the target's width */
				var target = $('#popup-result-public');
				
				/* remove the popup after a timeout */
				setTimeout(function(){
					
					/* remove IE shadow */
					$('.ie-shadow-2').remove();
					
					/* fade out the popup and remove it */													
					target.fadeOut("slow",function(){
						target.remove();
					});	
				},1500);
				
			}
		});
		
		return false;
	});
}

/*
|---------------------------------------------------------------
| POST PUBLIC FORM FUNCTIONS
|---------------------------------------------------------------
|
*/

this.post_form_public = function(){
	
	/* function for auto grow */
	/* set the variable */
	var autogrow = $(".autogrow");
	
	autogrow.css({
	
		overflow: 'hidden', 
		display: 'block'
		
	});
	
	autogrow.focus(function () {
	
		$(this).prettyComments();
		//$(this).elastic();
	});
	
	/* when you click the cancel button if there is any cancel button */
	$("input[type=button][name=cancel]").click(function(){
		
		var $this = $(this);
		var parent_cancel = $this.parents('form');
		clear_form(parent_cancel);
		//alert('cancel');
		
	});
	
	/* when you click the 'be the first' button if there is any there */
	$(".be-first").click(function(){
		
		var $this = $(this);
		var $this_prev = $this.parents("div:.item-global").siblings();
		//var $this_prev = $this.parents("div:.item-global").prev().css({background:'red'}); // doesnt work on IE
		//$this_prev.siblings().css({background:'red'});
		$("textarea", $this_prev).trigger("focus");
		return false;
		
	});
	
	/* when you submit the form that has the class of form-public-global */
	//$('form.form-public-global').submit(function(){
	$('form.form-public-global').live('submit',function(){
	
		//alert('1');
		
		var timer;
		var $this = $(this);
		
		$("#popup-result-public").remove();
		$(".ie-shadow-2").remove();
		$(".blackout-public").remove();
		
		var path = $(this).attr('action');
		var processing = $('.processing', $this);
		//alert(processing.length);
		
		if(processing.length > 0)
		{

			/* set the css for processing */
			processing.css({
				margin:"5px 0px 0px 0px",
				visibility:"visible"
			});
				
			/* add text to the processing div and animate it */
			processing.html('processing');
			processing.fadeIn('fast', function(){
				timer = setInterval('animate_processing()',500);
			});
		
		}
		else
		{
			make_blackout();
		
		}
			
		/* load the requested page */
		$.post(path, $this.serialize(),function(xml){
				
			clearInterval(timer);
			
			//var str = $this.serialize();
			//alert(str);
			
			if(processing.length > 0)
			{
				$("label").removeClass('error');
				$("form img").css({visibility:'hidden'});
				processing.css({
					visibility:"hidden"
				});
			}
			else
			{
				global_blackout.fadeOut('slow');
				global_loading.remove();
			}

			process_form_public(xml,$this);
		});
		
		/* disable the submit button so that you won't click it twice while the ajax is processing the form */	
		$('input[type=submit]', $this).attr('disabled', 'disabled').css({opacity:0.4});
		
		return false;
	});
}

this.process_form_public = function(xml,$this){

	$(document.body).prepend("<div id='popup-result-public' class='popup-public'><div class='close'><a href='#' class='close'>x close</a></div><div class='result'></div><div class='form-confirm'></div></div>");
	
	/* set the target's value and set the target's width */
	var target = $('#popup-result-public').width(400);
	
	$("error", xml).each(function(){
			
		/* set the local variable */
		var elementid = $(this).attr('elementid');
		var message = $(this).attr('message');

		/* add an error class to each error element */
		$("#"+elementid+"_label",$this).addClass('error');
		
		/* append the message to the .result class */
		$(".result").append("<img src='"+http_root+rp_image_global+"attention.png' style='float:none !important;' /> " + message + "<br />");
		
	});
		
	$("confirm", xml).each(function(){
		
		/* set the local variable */
		var message = $(this).attr('message');
		path = $(this).attr('path');
		//alert(path);
		
		/* append the message to the .result class */
		$(".result").append("<img src='"+http_root+rp_image_global+"attention.png' style='float:none !important;' /> " + message + "");
		
	});
			
	$("result", xml).each(function(){
		
		/* set the local variable */
		var message = $(this).attr('message');
		var search = $(this).attr('search');
		//alert(message);
		
		/* append the message to the .result class */
		$(".result").append("<img src='"+http_root+rp_image_global+"info.png' style='float:none !important;' /> " + message);
		
		if(search) setTimeout(function(){ document.location = http_root+'search?search='+search;}, 3000 ); 
		
	});
	
	$("login", xml).each(function(){
		
		/* set the local variable */
		var processing = $('.processing',$this);
		var message = $(this).attr('message');
		var path = $(this).attr('path');
		//alert(path);

		/* set the css of processing's visibility to be visible */
		processing.css({
			visibility:"visible"
		});
		
		/* fade out the processing text */
		processing.fadeTo(200,0.1,function(){ 
				
			/* fade in the processing text */
			processing.html(message).fadeTo(900,1,function(){  
			
				/* redirect to secure page */
				document.location = http_root+path; 
				//setTimeout(function(){ document.location = http_root+'forum';}, 3000 ); 
			
			});			  
		});
		
	});
		
	if($(xml).find("error").length > 0)
	{
		//alert('error');
		ieShadowClass = 'ie-shadow-2';
		ieShadowzIndex = 29;
		set_center_public(target);
		$('form *[title]').inputHint();
		closePopup_public(target);	
	}
	else if($(xml).find("confirm").length > 0)
	{
		//alert('confirm');
		/* load the confirmation form and attach the post_form_confirmation() function */
		$(".form-confirm").load(http_root+rp_layout+"form_confirm.php?path_return="+path, {}, function(){
			
			//alert(target.height());
			ieShadowClass = 'ie-shadow-2';
			ieShadowzIndex = 29;
			post_form_confirmation($this);
			set_center_public(target);
			$('form *[title]').inputHint();
			closePopup_public(target);
			
		});
	}
	else if($(xml).find("result").length > 0)
	{
		var path = $("result", xml).attr('path');
		//alert(path);
		//alert('result');
		
		ieShadowClass = 'ie-shadow-2';
		ieShadowzIndex = 29;
		set_center_public(target);
		clear_form($this);

		$(".input-password").each(function(){
			if($(this).length > 0)
			{
				/* trigger the blur event so that you can replace the password input again */
				$(this).next().trigger("blur");
				//$(this).next().blur();
				//$(this).show();
				//$(this).next().hide();
				//alert($(this).next().attr('name'));
			}
		});

		$('form *[title]').inputHint();
		closePopup_public(target);
		
		if(path)
		{
			/* remove the popup after a timeout */
			setTimeout(function(){
				
				/* remove IE shadow */
				$('.ie-shadow-2').remove();
				
				/* fade out the popup and remove it */													
				target.fadeOut("slow",function(){
					target.remove();
					document.location = path;
				});	
			},1500);
		}
	}
	else if($(xml).find("resultString").length > 0)
	{
		$("resultString", xml).each(function(){
			var str_id = $(this).attr('stringID');
			var type = $(this).attr('type');
			var path = $(this).attr('path');
			//alert(path);
			
			/* check if the type is a thread */
			if(type == 'thread')
			{
				/* get the parent of this form and store it in the variable */
				var $this_parent = $this.parents('.item-thread-global');

				/* inset a temporary div before the form's parent */
				$($this_parent).before('<div class="item-temp"></div>');
				
				/* hide the last item of .item-temp */
				$('.item-temp:last').hide();
				
				/* load the requested string into the last item of .item-temp */
				$('.item-temp:last').load( http_root+path, {}, function(){
					
					/* clear the form's input */
					clear_form($this);
					
					/* enable the submit button again after processing the xml output */	
					$('input[type=submit]',$this).attr('disabled', '').css({opacity:1});
					
					/* side down the last item of .item-temp */
					$(this).slideDown('slow');
					
					/* attach the comment string function */
					comment_string();
					
					/* attach the delete string function */
					delete_string();
					
					
				});
			}
			else
			{
				
				/* count the needle, if it is empty, this injection must be the first, then must clear up its parent's html content */
				var total_needle = $('.item-needle-global').length;
				if(total_needle == 0) $('.item-global:last').empty();
				
				/* get the parent of this form and store it in the variable */
				var $this_parent = $this.parents('.item-global').siblings();
				
				$($this_parent).prepend('<div class="item-string-global"></div>');
				
				/* hide the first item of .item-temp */
				$('.item-string-global:first').hide();
				
				/* load the requested string into the last item of .item-temp */
				$('.item-string-global:first').load( http_root+path, {}, function(){
					
					/* clear the form's input */
					clear_form($this);
					
					/* enable the submit button again after processing the xml output */	
					$('input[type=submit]',$this).attr('disabled', '').css({opacity:1});
					
					/* attach the string interact function */
					reset_element_string_interact();
					reset_element_string_comment_form();
					reset_element_autohide();
					
					/* side down the last item of .item-temp */
					$(this).slideDown('slow', function(){
						
						/* attach the comment string function */
						comment_string();
						
						/* attach the delete string function */
						delete_string();
						
						post_form_public();
						
					});
					
				});
			}
			
		});
	}
}

this.post_form_confirmation = function($this){
	
	var target = $("#popup-result-public");
	
	$("input[name=yes]").click(function(){
	
		$("#form-confirm").submit(function(){
			
			var timer;
			
			var path_return = $(this).attr('action');
			var processing = $('.processing',$(this));
			//alert(path_return);
			
			/**
			set the css for processing
			**/
			processing.css({
				margin:"5px 0px 0px 10px"
			});
			
			/**
			add text to the processing div and animate it
			**/
			processing.html('processing');
			processing.fadeIn('fast', function(){
				timer = setInterval('animate_processing()',500);
			});
			
			/*
			target.fadeOut('fast', function(){
				target.remove();
			});
			*/
			
			/* check each of the input field - if it has the same value as in its title - empty it */
			$('input',$this).each(function(){
		
				if ($(this).val() == '' || $(this).val() == $(this).attr('title'))
				{
					$(this).val('');
					//alert($(this).attr('name'));
				}
				
			});
			
			$.post(path_return, $this.serialize(),function(xml){
				
				clearInterval(timer);
				
				//var str = $this.serialize();
				//alert(str);
				$('.ie-shadow-2').remove();
				
				target.fadeOut('slow', function(){
					target.remove();
					process_form_public(xml,$this);
				});
				
				
			});
			
			return false;
		});
	});	
	
	$("input[name=no]").click(function(){

		$("#form-confirm").submit(function(){
			target.fadeOut('fast', function(){
				
				$('.ie-shadow-2').remove();
				target.remove();
				
				/**
				enable the submit button again after processing the xml output
				**/	
				$('input[type=submit]').attr('disabled', '').css({opacity:1});
			});
			return false;
		})	
	});
	
}

this.set_center_public = function(target){
	
	var width = target.width();
	var height = target.height();
	var windowHeight = $(window).height();
	var scrollTop = $(window).scrollTop();
	var scrollLeft = $(window).scrollLeft();
	var scrollHeight = $("body").attr("scrollHeight");
	
	/* do the calculation */
	var scrollBottom = scrollTop + windowHeight;
	var top = (windowHeight/2)-(height/2) - 20;
	var marginLeft = "-"+((scrollLeft + width)/2);
	var marginTop = ((scrollTop + height)/2);
	marginTop = "-" + (marginTop + 25);
	//alert(scrollTop);
	//alert(scrollHeight);
	//alert(windowHeight);
	//alert(top);
			
	target.css({
		top: top + scrollTop + "px",
		//marginTop: marginTop + "px",
		marginLeft:marginLeft + "px",
		width:width + "px",
		color:"#ffffff",
		background:"#0099ff",
		border:"0px solid #fff",			
		zIndex:"30",
		opacity: 0.9, // for IE, you must not use something like this '0.8'
		display: 'none'
		});
	
	target.fadeIn('slow', function(){
		make_boxshadow_ie(target);
	});

}

/*****************/

function animate_processing() {

	//Fade out the current content
	$('.processing,.loading').fadeOut('fast',function(){
		//Display the content
		$('.processing,.loading').fadeIn('fast');									   
	});
	
}


/*
|---------------------------------------------------------------
| MEMBER PROFILE FUNCTIONS
|---------------------------------------------------------------
|
*/

this.reset_element_image_profile = function(load){
	
	$('.image-profile img').each(function(){
		
		/* set the variable and store the value */
		var $this = $(this);
		
		/* the img element is 0x0 wide until the image is loaded. you should wait until the image is entirely loaded. 
		to ensure images are loaded, use the image's load event or the window load event. jQuery ready happens a lot earlier than that.
		
		So this should work:
		
		$(window).bind('load', function() {
			var img = $("#theimage");
			log("Width: " + img.width());
			log("Height: " + img.height());
		});
		
		or
		
		$(document).ready(function() {
			$("#theimage").bind('load', function() { // BUT SEE NOTE BELOW
				var img = $(this);
				log("Width: " + img.width());
				log("Height: " + img.height());
			});
		});
		
		*/
		
		/* must use $(window) otherwise it only works in chrome but not firefox, etc */
		$(window).bind('load', function() {
		//$this.bind('load', function() { 
				
			/* now grab the height of the image after the image is loaded */
			var $this_parentheight = $this.parent().parent().height();
			var $this_height = $this.height();
			//alert($this_height);
			
			/* change the margin top */
			$this.parent().css({
				marginTop: ($this_parentheight-$this_height)/2 + 'px'
			});
		});

	});
}

this.toggle_see_more_profile = function(){

	$('.button-more-profile').click(function(){
		
		/* set the variable and store the value */
		var $this = $(this);
		var $this_text = $this.text();
		var $this_parent = $this.parents('.info-profile');
		//alert($(this).text());
		
		/* toggle the target */
		$(".more-profile",$this_parent).slideToggle("slow", function(){
			
			/* change the text in the button */
			if( $this_text == 'See More')
				$this.text('See Less');
			else $this.text('See More');
			
		});
		
		return false;
		
	});
}

this.get_button_change_picture_profile = function(){

	/* The short version is just to toggle here: */
	//$('.image-profile').live('hover',function(){
	$('.image-profile').hover(function () {
		$('.button-change-picture-profile',this).toggle();
	});
	
	/* To have it available in each handler (as a more general solution) define it outside when looping (using .each() for example), like this: 
	
	$('.image-profile').each(function() {
		var target = $('.button-change-picture-profile',this);
		$(this).hover(function () {
			target.show();
			
		},function () {
			target.hide();
			alert('1');
		});
	});
	*/
}

this.get_menu_profile_picture = function(){

	/* bind the click event to the .button-change-picture-profile */
	$('.button-change-picture-profile').click(function(){
	
		/* set the variable */
		var $this = $(this).hide();
		var target_menu = $('.menu-profile-picture').show();
		var target_profile = $('.image-profile').unbind('mouseenter mouseleave');
		//var target_profile = $('.image-profile').die("hover")
		//target_profile.unbind('mouseenter mouseleave'); $("#theone").die("click", aClick)
		
		/* when the .button-close is clicked */
		$('.button-close').click(function(){
			
			/* hide the menu, show the button of .button-change-picture-profile again */
			target_menu.hide();
			$this.show();

			/* bind the event of mouseleave and mouseenter to the profile picture when the mouse leaves the profile picture immediately */
			target_profile.mouseleave(function(){
				$this.hide();
				target_profile.mouseenter(function(){
					$this.show();
				});
			});
			
			return false;
			
		});
		
		return false;
		
	});
}

this.load_edit_profile_infomation = function(){
	
	$('.edit-profile').click(function(){
		
		/* set the variable and store the value */
		var $this = $(this);
		var $this_path = $this.attr('rel');

		var target = $('.item-member');
		var target_menu = $('.menu-profile-picture').hide();
		var target_html = target.html();

		//alert(target_html);
		//alert('1');
		
		/* display the loading */
		target.html('<img src="'+http_root+rp_image_global+img_loader+'" style="float:none; border:0px solid #000; margin:0px;"/> loading');
		
		target.load($this_path, function(){
			
			target.hide().slideDown('fast');
			replace_element_input_password();
			tooltip_form();
			
			$('form *[title]',$(this)).inputHint();
			
			/* when you click the cancel button if there is any cancel button */
			$("input[type=button][name=cancel]").click(function(){

				$('html, body').animate({scrollTop:0}, 'slow', function(){
					
					$('.tooltip').remove();
					target.html(target_html).hide().slideDown('fast');
					
					toggle_see_more_profile();
					
					load_edit_profile_picture();
					load_edit_profile_infomation();
					
					get_button_change_picture_profile();
					get_menu_profile_picture();

				});

			});
		});
		
		
		return false;
		
	});
	
}


this.load_edit_profile_picture = function(){
	
	$('.edit-profile-picture').click(function(){
		
		var timer;
		
		/* remove #popup-edit-profile-picture first if any of it exisits */
		$(".popup-outer").remove();
		$(".blackout-public").remove();
		//$(".close").remove();
		
		/* then append a fresh #popup-edit-profile-picture */
		$(document.body).prepend("<div id='popup-edit-profile-picture' class='popup-outer'><div class='popup-inner'><div class='close'><a href='#' class='close'>x close</a></div><div id='wrapper-form-upload-image-profile'></div></div></div>");
		
		/* set the variable and store the value */
		var $this = $(this);
		var $this_parent = $this.parent();
		var $this_path = $this.attr("rel");
		var $this_name = $this.attr("name");
		var $this_loading = $('.loading-reset', $this_parent);
		var target = $('#popup-edit-profile-picture').width(400).hide();
		//alert($this_path);
		
		if($this_loading.length > 0)
		{

			/* set the css for $this_loading */
			$this_loading.css({
				margin:"5px 0px 0px 0px",
				visibility:"visible"
			});
				
			/* add text to the $this_loading div and animate it */
			$this_loading.html('loading');
			$this_loading.fadeIn('fast', function(){
				timer = setInterval('animate_processing()',500);
			});
		
		}
		else
		{
			make_blackout();
		}

		/* load the form into the the form area then fade the entire wrapper in */
		$('#wrapper-form-upload-image-profile',target).load($this_path, {}, function(){

			clearInterval(timer);
			//var str = $this.serialize();
			//alert(str);
			
			if($this_loading.length > 0)
			{
				/* hide the loading */
				$this_loading.css({
					visibility:"hidden"
				});
			}
			else
			{
				global_blackout.fadeOut('slow');
				global_loading.remove();
			}
			
			/* get the pop up */
			set_center(target);
			//alert(target.height());
			
			/* fade in the pop up */
			target.fadeIn('fast', function(){
			
				$('form *[title]').inputHint();
				target.fadeIn('slow');
				closePopup(target);
				
				if($this_name == 'upload') get_ajax_upload();
				if($this_name == 'delete') post_image_delete();
				
			});
		
		});
		return false;
	});
}

this.get_ajax_upload = function(){
	
	var upload_button = $('.ajax-upload');
	var upload_path = upload_button.parent().attr("action");
	var upload_category =  upload_button.attr("name");
	var upload_status = $('.status-upload');
	//alert(path)
	
		new AjaxUpload(upload_button, {
			action: upload_path,
			name: upload_category,
			onSubmit: function(file, ext){
				if(upload_category == 'image')
				{
					if (! (ext && /^(jpg|png|jpeg|gif)$/.test(ext))){
						
						// extension is not allowed 
						upload_status.text('Only JPG, PNG or GIF files are allowed');
						return false;
						
					}
					else
					{
						/* disable the button so that you won't click it twice while the ajax is processing the form */	
						$('input[type=button]', upload_button.parent()).attr('disabled', 'disabled').css({opacity:0.4});
						//$('.close', upload_button.parents('.popup-outer')).unbind('click');
					}
				}
				else if(upload_category == 'document')
				{
					if (! (ext && /^(doc|pdf|zip)$/.test(ext))){
						
						// extension is not allowed 
						upload_status.text('Only DOC, PDF or ZIP files are allowed');
						return false;
						
					}
					else
					{
						/* disable the button so that you won't click it twice while the ajax is processing the form */	
						$('input[type=button]', upload_button.parent()).attr('disabled', 'disabled').css({opacity:0.4});
					}
				}
				else if(upload_category == 'video')
				{
					if (! (ext && /^(avi|mov|swf)$/.test(ext))){
						
						// extension is not allowed 
						upload_status.text('Only AVI, MOV or SWF files are allowed');
						return false;
						
					}
					else
					{
						/* disable the button so that you won't click it twice while the ajax is processing the form */	
						$('input[type=button]', upload_button.parent()).attr('disabled', 'disabled').css({opacity:0.4});
					}
				}
				upload_status.html('<img src="'+http_root+rp_image_global+img_loader+'"/> processing');
				
			},
			onComplete: function(file, response){
				
				//On completion clear the status
				upload_status.text('');
				
				//Add uploaded file to list
				if(response){
				
					$("error", response).each(function(){
						var message = $(this).attr('message');
						alert(message);
						
						/* disable the button so that you won't click it twice while the ajax is processing the form */	
						$('input[type=button]', upload_button.parent()).attr('disabled', '').css({opacity:1.0});
					});
					
					$("result", response).each(function(){
						
						var itemid = $(this).attr('itemid');
						var itemcat = $(this).attr('itemcat');
						var itemtitle = $(this).attr('itemtitle');
						var itempath = $(this).attr('itempath');
						var message = $(this).attr('message');
						
						//alert(message);
						
						/* then append a fresh #popup-edit-profile-picture */
						$(document.body).prepend("<div id='popup-upload-result' class='popup-outer'><div class='popup-inner'><div class='close'><a href='#' class='close'>x close</a></div><div id='wrapper-result'>"+message+"</div></div></div>");
						
						var target_result = $('#popup-upload-result').width(400).hide();
						var target_form = $("#popup-edit-profile-picture");
						
						set_center(target_result);

						target_form.fadeOut(function(){
							$(this).remove();
							target_result.fadeIn();
						});
						
						
					});

				}
			}
	});
}

this.post_image_delete = function(){
	
	$(".form-public").submit(function(){
		
		/* set the variable */
		var $this = $(this);
		var $this_path = $this.attr('action');
		//alert($this.serialize());
		
		/* disable the button so that you won't click it twice */	
		$('input[type=button],input[type=submit]', $this).attr('disabled', 'disabled').css({opacity:0.4});
		
		/* post the form */
		$.post($this_path, $this.serialize(), function(xml){
			
			if($(xml).find("result").length > 0)
			{
				var message = $("result", xml).attr('message');
				var path_image = $("result", xml).attr('pathimage');
				//alert(path_image);
				
				/* then append a fresh popup */
				$(document.body).prepend("<div id='popup-delete-result' class='popup-outer'><div class='popup-inner'><div class='close'><a href='#' class='close'>x close</a></div><div id='wrapper-result'>"+message+"</div></div></div>");
				
				var target_result = $('#popup-delete-result').width(400).hide();
				var target_form = $("#popup-edit-profile-picture");
				
				set_center(target_result);

				target_form.fadeOut(function(){
					
					$(this).remove();
					
					target_result.fadeIn(function(){
					
						/* remove the button of Delete this picture which has a delete in its name attribute */
						$('.menu-profile-picture-right a[name="delete"]').remove();
						
						/* remove profile picture on the screen and replace it with the path sent from the xml result */
						$('.image-profile img').fadeOut(function(){
							
							/* set the variable */
							var $this = $(this);
							$this.attr("src", path_image).fadeIn(function(){

								/* now grab the height of the image after the image is loaded */
								var $this_parentheight = $this.parent().parent().height();
								var $this_height = $this.height();
								//alert($this_height);
								
								/* change the margin top */
								$this.parent().css({
									marginTop: ($this_parentheight-$this_height)/2 + 'px'
								});
							})
						});
					
					});
				});
				
			}
			
		});
				
		return false;
	});
}


/*
|---------------------------------------------------------------
| HANDY FUNCTIONS
|---------------------------------------------------------------
|
*/

/**************************************

 --- function set_center() ---
 
 to set a popup to the center of 
 the page verticaly and horizontally
 
**************************************/

this.set_center = function(target){
	
	/* set the pop up variable */
	var width = target.width();
	var height = target.height();
	var windowHeight = $(window).height();
	var scrollTop = $(window).scrollTop();
	var scrollLeft = $(window).scrollLeft();
	var scrollHeight = $("body").attr("scrollHeight");
	
	/* do the calculation */
	var scrollBottom = scrollTop + windowHeight;
	var top = (windowHeight/2)-(height/2) - 5;
	var marginLeft = "-"+((scrollLeft + width)/2);
	
	target.css({
		top:(scrollTop + top) + "px", 
		left:"50%",
		marginLeft:marginLeft + "px",
		width:width + "px",
		zIndex:"21",
		display:"none"
	});
	
	target.fadeIn('slow', function(){
		closePopup_public(target);
		//make_boxshadow_ie(target);
	});
	
}

/**************************************

 --- function make_blackout() ---
 
 to get/ create a black out element 
 over the page
 
**************************************/

this.make_blackout = function(){

	$(document.body).append("<div class='blackout-public'></div>");
	$(document.body).prepend("<div class='loading'>loading</div>");

	/* set global blacout and global loading */
	global_blackout = $('.blackout-public');
	global_loading = $('.loading');

	/* set the variable and get the value for .loading */
	var width_loading = global_loading.width();
	var height_loading = global_loading.height();
	var windowHeight = $(window).height();
	var scrollTop = $(window).scrollTop();
	var scrollLeft = $(window).scrollLeft();
	var scrollHeight = $("body").attr("scrollHeight");

	/* do the calculation for .loading */
	var scrollBottom = scrollTop + windowHeight;
	var top_loading = (windowHeight/2)-(height_loading/2);
	var marginLeft_loading = "-"+((scrollLeft + width_loading)/2);

	/* set the variable and get the value for the blackout */
	var height_document = $(document).height();

	/* set the css for blackout */
	global_blackout.css({
		height:height_document,
		zIndex:'100',
		opacity: 0.3,
		display:'none'
	});
			
	/* set the css for .loading */
	global_loading.css({
		top: scrollTop + top_loading + "px",
		width: width_loading + "px",
		height: height_loading + "px",
		marginLeft:marginLeft_loading + "px",
		color:"#ffffff",			
		zIndex:"101",
		display: 'none'
	});

	/* fade in the blackout */
	global_blackout.fadeIn('fast', function(){
		//setInterval('animate_processing()',500);
	});

	/* fade in the loading and animate it */
	global_loading.fadeIn('fast', function(){
		timer = setInterval('animate_processing()',500);
	});

}

/**************************************

 --- function make_boxshadow_ie() ---
 
 to make/ create a box shadow element 
 for ie below version 9
 
**************************************/

this.make_boxshadow_ie = function(target){
	
	/**
	check if it is IE first
	**/
	if ($.browser.msie && parseInt($.browser.version) < 9) 
	{
		/**
		check which version it is.
		Often you only care about the "major number," the whole number. 
		This can be accomplished with JavaScript's built-in parseInt() function.	
		**/
		if ($.browser.msie && parseInt($.browser.version) < 9) {
			//alert($.browser.version);
			//alert(parseInt($.browser.version));
		}
		
		var width = target.width();
		var height = target.height();
		var windowHeight = $(window).height();
		var scrollTop = $(window).scrollTop();
		var scrollLeft = $(window).scrollLeft();
		var scrollHeight = $("body").attr("scrollHeight");
		//alert(height);

		/* do the calculation */
		var scrollBottom = scrollTop + windowHeight;
		var top = (windowHeight/2)-(height/2) - 30;
		var marginLeft_shadow = ((scrollLeft + width)/2);
		var marginTop_shadow = ((scrollLeft + height)/2);
		
		top_shadow = top + scrollTop;
		marginLeft_shadow = "-"+(marginLeft_shadow + 10);
		marginTop_shadow = "-"+(marginTop_shadow + 35);

		/**
		create a div for ie-shadow
		place the #pop-out after the .ie-shadow
		set the css of .ie-shadow
		**/
		target.after("<div class='"+ieShadowClass+"'></div>");
		$("."+ieShadowClass+"").width(target.width()+40).height(target.height()+40).css({
			top:top_shadow + "px",	
			marginLeft:marginLeft_shadow + "px",
			//marginTop:marginTop_shadow + "px",					
			zIndex:ieShadowzIndex
		});
	}
}

/**************************************

 --- function clear_form() ---
 
 to clear all the form element
 
**************************************/

this.clear_form = function(target){ //  ==  function clear_form_elements(target) {
    $(target).find(':input').each(function() {
        switch(this.type) {
            case 'password':
            case 'select-multiple':
            case 'select-one':
            case 'text':
            case 'textarea':
                $(this).val('');
                break;
            case 'checkbox':
            case 'radio':
                this.checked = false;
        }
		$('form *[title]').inputHint();
    });
}

/*
|---------------------------------------------------------------
| GENERAL FUNCTIONS
|---------------------------------------------------------------
|
| apply to the comment in a blog or a forum
|
*/

this.closePopup_public = function(target){

	$(".close",target).click(function(){
		
		if($(this).hasClass('ie-box-shadow'))
		{
			alert('ie-drop-shadow');
			/**
			if it is IE and older than version 9, run this code
			**/
			if ($.browser.msie && parseInt($.browser.version) < 9) 
			{	
				$('.ie-shadow-1').remove();
				$('.ie-shadow-2').remove();
			}
		
		}
		
		if ($.browser.msie && parseInt($.browser.version) < 9) 
		{	
			$('.ie-shadow-1').remove();
			$('.ie-shadow-2').remove();
			//$('.ie-shadow-3').remove();
		}
		
		target.fadeOut('fast', function(){
			target.remove();
		});
		
		/**
		enable the submit button again after processing the xml output
		**/	
		$('input[type=submit]').attr('disabled', '').css({opacity:1});
		
	return false;
	
	});
	
}

/*****************/

this.scrollToBottom = function(){
	
	$('.scroll-to-bottom').click(function(){
        $('html, body').animate({scrollTop:$('html, body').height()}, 'slow', function(){
		   /**
		   cannot put the jquery highlight here or it will highlight the element twice
		   **/
		});
		
		/** 
		highlight the form
		**/
		$('#form-comment').effect("highlight",{color:"#ffff99"}, 3000);
		
        return false;
    });
}

/*****************/

this.scroll_to_top = function(){
	$('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
}

/*****************/

this.scrollbar = function(){	
$('#pane1').jScrollPane();
$('.scrollbar').bind('scroll',function(event){
	console.log(event.target);
	});
};


this.scrollbarImg_option = function(){
$('#content-shop').jScrollPane({
	showArrows:false, 
	scrollbarWidth: 10,
	reinitialiseOnImageLoad: true
	});
}