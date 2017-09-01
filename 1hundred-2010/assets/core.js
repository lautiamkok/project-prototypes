// <![CDATA[
$(document).ready(function(){
	
	/*
	|---------------------------------------------------------------
	| SET GLOBAL VARIABLES
	|---------------------------------------------------------------
	|
	| rp = relative path
	| ap = absolute path
	|
	*/
	/*
	http_root = $("body").attr("title");
	rp_cms = 'applications/CMS/';
	rp_layout = 'views/local/includes/layouts/';
	rp_template = 'views/local/includes/templates/';
	rp_image_global = 'views/global/styles/images/';
	rp_image_local = 'views/local/styles/images/';
	img_loader = 'loader-2b.gif';
	$('body, div').removeAttr('title');
	*/
	
	/*
	|---------------------------------------------------------------
	| LOAD THE SITE GENERAL FUNCTIONS
	|---------------------------------------------------------------
	|
	*/
	/* 
	you must put this input hint plugin before any submit form or you will 
	get the post value from the input hint. 
	
	or when you are submitting the form, you can put the code below to check each of the input field - 
	if it has the same value as in its title - empty it 

	$('input',$this).each(function(){

		if ($(this).val() == '' || $(this).val() == $(this).attr('title'))
		{
			$(this).val('');
			//alert($(this).attr('name'));
		}
		
	});
	*/
	replace_element_radio_size();
	/*
	$('form *[title]').inputHint(); 
	
	replace_element_input_password();
	replace_element_selectbox();
	replace_element_checkbox();
	replace_element_radio();
	replace_element_scrollbar();
	replace_element_textarea_autogrow();
	
	
	reset_element_ie();
	reset_element_item_pagination();
	reset_element_string_interact();
	reset_element_string_comment_form();
	reset_element_autohide();
	tooltip_form();
	
	scroll_to_top();
	post_form_public();
	*/
	/*
	|---------------------------------------------------------------
	| LOAD THE SLIDE FUNCTION FOR HOME PAGE
	|---------------------------------------------------------------
	|
	*/
	
	run_slide('#slide');
	bounce_header();
	
	/*
	|---------------------------------------------------------------
	| LOAD THE FUNCTION FOR VIDEO PAGE
	|---------------------------------------------------------------
	|
	*/
	
	//toggle_tag_menu();
	
	/*
	|---------------------------------------------------------------
	| LOAD THE RESET ACCOUNT FUNCTIONS
	|---------------------------------------------------------------
	|
	*/
	
	//load_reset_account_request();
	
	/*
	|---------------------------------------------------------------
	| LOAD THE SITE MEMBER PROFILE FUNCTIONS
	|---------------------------------------------------------------
	|
	*/
	
	/*
	reset_element_image_profile();
	toggle_see_more_profile();
	
	load_edit_profile_picture();
	load_edit_profile_infomation();
	
	get_button_change_picture_profile();
	get_menu_profile_picture();
	*/
	
	/*
	|---------------------------------------------------------------
	| LOAD THE STRING FUNCTIONS: BLOG/ FORUM
	|---------------------------------------------------------------
	|
	*/
	/*
	comment_string();
	delete_string();
	approve_string();
	*/
	
	//pg_id = $(".item-blog").attr("title");
	//load_comments();
	//pagination_comment(pg_id);
	
	/*
	|---------------------------------------------------------------
	| LOAD THE CMS FUNCTIONS
	|---------------------------------------------------------------
	|
	*/
	
	//load_cms();
	
	/*
	|---------------------------------------------------------------
	| LOAD MISC
	|---------------------------------------------------------------
	|
	*/

	/* the last 4 items in the list to be displayed without the 5px space at their margin bottom. */
	$('#list li').slice(-4).css('margin-bottom', '0px'); 
	
	/* remove the default value/ text in the input of submit on product page */
	$('input#button-add-to-cart').val('');
	
	/* this code below to replace mailchimp error when you want to validate form */
	$("form").submit(function(){

		var target = $('.email');
		var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
		/*
		Don't use quotes around it its not actually a string!!!..

		broken down..  the bit in the middle
		[a-zA-Z0-9._-]

		means [lowercase a-z uppercase A-Z numbers 0-9 periods underscores & hyphens are all allowed]

		/ open up regex string

		^ string starts with

		[***]  first section of variables

		followed by a 'must have' "@" symbol then onto then next section of variables [***]

		followed by a 'must have'  " . "

		followed by third section  " [a-zA-Z]{2,4} "   this means it can only be letters between 2 & 4 chars long.

		$ string ends with

		/ end of regex string
		
		source: http://mdskinner.com/code/email-regex-and-validation-jquery
		
		option 2:
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		source: http://codeasp.net/blogs/raghav_khunger/microsoft-net/369/regular-expression-for-email-with-jquery
		
		if (!IsValidEmail(email)){ do something}
		
		function IsValidEmail(email)
		{
			var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
			return filter.test(email);
		}
		*/
		
		if ((target.val() == '' || target.val() <= 0))
		{
			alert('This field is required.');
		}
		else if(!email_regex.test(target.val()))
		{
			alert('Please enter a valid email address.');
		}
	});
	 
});

// ]]>