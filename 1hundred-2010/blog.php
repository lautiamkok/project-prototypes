<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	
	<title>1hundred &#124; Welcome</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<!-- css -->
	<link rel="stylesheet" media="screen" type="text/css" href="assets/global.css" />
	<link rel="stylesheet" media="screen" type="text/css" href="assets/local.css" />
	<link rel="stylesheet" media="screen" type="text/css" href="assets/font-face.css" />
	
	<!-- javascript:AddThis -->
	<script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#username=lauthiamkok"></script>
	
</head>

<body>
	
	<!--container-->
	<div id="container">
	
		<!--header-->
		<div id="header">
			
			<div id="menu-header">
				
				<h1><a href="index.php" title="1hundred" id="button-home" class="hide-text">1hundred</a></h1>
				
				<ul>
					<li><a href="/cart"><span id="icon-service"></span><span class="button-text">CUSTOMER SERVICE</span></a></li>
					<li class="last"><a href="/cart"><span id="icon-cart"></span><span class="button-text">YOUR CART IS EMPTY</span><span class="cart-amount">&#124; 0.00 &#124;</span></a></li>
				</ul>
			</div>
			
		</div>
		<!--header-->
		
		<!--body-->
		<div id="body" class="round-corner-10px">
		
			<!--menu-body-->
			<div id="menu-body" class="left">
				<ul>
					<li>01<a href="collection.php">SHIRTS</a></li>
					<li>02<a href="collection.php">PRINTS</a></li>
					<li>03<a href="collection.php">DIGITAL</a></li>
				</ul>
				
				<div id="cutout-menu">
				
					<span id="deco-menu"></span>
					
					<h4 id="label-newsletter"><span class="hide">NEWSLETTER SIGN UP FOR UPDATES</span></h4>
					
					<form>
						<div id="item-form-signup" class="round-corner-2px">
							<input type="text" name="email"/>
						</div>
					</form>
					
					<a href="/cart" id="button-creed"><span class="hide">CREED</span></a>
				</div>
				
				<ul>
					<li>04<a href="#">STORY</a></li>
					<li>05<a href="follow_us.php">FOLLOW</a></li>
					<li>06<a href="blog.php">BLOG</a></li>
					<li>07<a href="faq.php">FAQ'S</a></li>
					<li>08<a href="contact_us.php">CONTACT</a></li>
				</ul>
			</div>
			<!--menu-body-->
			
			<!--liquid template-->
			<div id="blog" class="right">
			
				<!--main-blog-->
				<div id="main-blog" class="left">
				
					<!--item-blog-->
					<div class="item-blog">
						
						<h3 class="font-chunkfiveroman"><a href="article.php" class="hover-opacity-04">Big Launch blog party</a></h3>
						
						<h4>October 29th 2011 By Tom </h4>
						
						<p>Is it bad form to show off your own wedding invites? I don't know, I guess I don't care. Here they are! This design took some work, so much detail, a modernist's worst nightmare. It took around 5 Saturdays to complete but I got there in the end. I aimed to create a fun, colourful, celebratory vibe through the piece, definitely didn't want anything traditional and peach! The final design was printed digitally on a lovely textured stock by Rik at Ripe. As usual, came out cracking!</p>
						<p><img src="contents/blog-pic-1.jpg" alt="pic"/></p>
						
						<a class="addthis_button button-share-blog hover-opacity-04" addthis:url="lauthiamkok.net" addthis:title="blog" addthis:description="#" href="http://www.addthis.com/bookmark.php?v=250&amp;username=lauthiamkok">
							<img src="http://s7.addthis.com/static/btn/sm-plus.gif" width="16" height="16" border="0" alt="Share" style="visibility:hidden;"/>
						</a>
						
						<p class="footer-item">POSTED IN <a href="#">PROCESS</a> <span>&#124;</span> <a href="#">COMMENTS 1</a></p>
						
						<a href="#" class="button-more-blog hover-opacity-04"><span class="hide">MORE</span></a>
					</div>
					<!--item-blog-->
					
					<!--item-blog-->
					<div class="item-blog">
						
						<h3 class="font-chunkfiveroman"><a href="#" class="hover-opacity-04">Big Launch blog party</a></h3>
						
						<h4>October 29th 2011 By Tom </h4>
						
						<p>Is it bad form to show off your own wedding invites? I don't know, I guess I don't care. Here they are! This design took some work, so much detail, a modernist's worst nightmare. It took around 5 Saturdays to complete but I got there in the end. I aimed to create a fun, colourful, celebratory vibe through the piece, definitely didn't want anything traditional and peach! The final design was printed digitally on a lovely textured stock by Rik at Ripe. As usual, came out cracking!</p>
						<p><img src="contents/blog-pic-2.jpg" alt="pic"/></p>
						
						<a class="addthis_button button-share-blog hover-opacity-04" addthis:url="lauthiamkok.net" addthis:title="blog" addthis:description="#" href="http://www.addthis.com/bookmark.php?v=250&amp;username=lauthiamkok">
							<img src="http://s7.addthis.com/static/btn/sm-plus.gif" width="16" height="16" border="0" alt="Share" style="visibility:hidden;"/>
						</a>
						
						<p class="footer-item">POSTED IN <a href="#">PROCESS</a> <span>&#124;</span> <a href="#">COMMENTS 1</a></p>
						
						<a href="#" class="button-more-blog hover-opacity-04"><span class="hide">MORE</span></a>
					</div>
					<!--item-blog-->
					
					<a href="#" class="button-next-page hover-opacity-04"><span class="hide">NEXT PAGE</span></a>
					
				</div>
				<!--main-blog-->
				
				<!--side-blog-->
				<div id="side-blog" class="right">
				
					<h5 id="heading-twitter-updates"><span class="hide">TWITTER UPDATES</span></h5>
					
					<?php
					$xml = ("http://twitter.com/statuses/user_timeline/35757833.rss");
					$xmlDoc = new DOMDocument();
					$xmlDoc -> load($xml);

					# get elements from "<channel>"
					$channel = $xmlDoc -> getElementsByTagName('channel') -> item(0);
					$channel_title = $channel -> getElementsByTagName('title') -> item(0) -> childNodes -> item(0) -> nodeValue;
					$channel_link = $channel -> getElementsByTagName('link') -> item(0) -> childNodes -> item(0) -> nodeValue;
					$channel_desc = $channel -> getElementsByTagName('description') -> item(0) -> childNodes -> item(0) -> nodeValue;

					# output elements from "<channel>"
					/*
					echo("<p><a href='" . $channel_link
					  . "'>" . $channel_title . "</a>");
					echo("<br />");
					echo($channel_desc . "</p>");
					*/
					?>
					
					<p class="item-twitter"><a href="<?php echo $channel_link;?>" target="_blank" class="hover-opacity-04"><?php echo $channel_title;?></a></p>
					<?php

					# get and output "<item>" elements
					$x = $xmlDoc -> getElementsByTagName('item');

					for ($i=0; $i<=2; $i++)
					{
						$item_title = $x -> item($i) -> getElementsByTagName('title') -> item(0) -> childNodes -> item(0) -> nodeValue;
						$item_link = $x -> item($i) -> getElementsByTagName('link') -> item(0) -> childNodes -> item(0) -> nodeValue;
						$item_date = $x -> item($i) -> getElementsByTagName('pubDate') -> item(0) -> childNodes -> item(0) -> nodeValue;
						$item_desc = $x -> item($i) -> getElementsByTagName('description') -> item(0) -> childNodes -> item(0) -> nodeValue;

						# NOTE: use this code for the server runs PHP5.3
						# DateTime::add — Adds an amount of days, months, years, hours, minutes and seconds to a DateTime object
						$date = new DateTime($item_date);
						
						# change the date format into Y-m-d H:i:s
						$item_date = $date -> format('Y-m-d H:i:s');
						
						# count time ago from the published date
						//$time_ago = time_ago($date -> format('Y-m-d H:i:s'));
					?>
					<p class="item-twitter"><a href="<?php echo $item_link;?>" target="_blank" class="hover-opacity-04"><?php echo $item_desc;?></a><br/><span class="date-twitted-ago"><?php echo $item_date;?></span></p>	 
					<?php
					}
					?>
					
					<a href="#" class="button-follow-facebook-ffffff hover-opacity-04"><span class="hide">facebook</span></a>
					<a href="#" class="button-follow-twitter-ffffff hover-opacity-04"><span class="hide">twitter</span></a>
					
					<h5 id="heading-categories"><span class="hide">CATEGORIES</span></h5>
					
					<ul>
						<li><a href="#">Epherma</a></li>
						<li><a href="#">New Ranges</a></li>
						<li><a href="#">Process</a></li>
						<li><a href="#">Stores</a></li>
						<li><a href="#">Competions</a></li>
					</ul>
					
					<h5 id="heading-archived-posts"><span class="hide">ARCHIVED POSTS</span></h5>
					
					<ul id="list-archived-posts">
						<li><a href="#"><span class="left">December <em>2011</em></span><span class="right">(3)</span></a></li>
						<li><a href="#"><span class="left">January <em>2011</em></span><span class="right">(5)</span></a></li>
						<li><a href="#"><span class="left">February <em>2011</em></span><span class="right">(1)</span></a></li>
						<li><a href="#"><span class="left">March <em>2011</em></span><span class="right">(6)</span></a></li>
						<li><a href="#"><span class="left">April <em>2011</em></span><span class="right">(2)</span></a></li>
					</ul>
					
				</div>
				<!--side-blog-->
					
			</div>
			<!--liquid template-->
		
		</div>
		<!--body-->
		
		<!--footer-->
		<div id="footer">
			<p id="left-foot"><span class="footer-text">All contents &copy; 2011 Tom Lane, unless otherwise stated. Please play nice!</span>  </p>
			<p id="right-foot"><span id="icon-ginger-monkey"></span> <span class="footer-text">1HUNDRED IS AN IDEA FROM <a href="http://gingermonkeydesign.com/" target="_blank">GINGER MONKEY</a></span></p>
		</div>
		<!--footer-->
		
	</div>
	<!--container-->
	
</body>
</html>