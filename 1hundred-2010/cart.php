<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<title>1hundred &#124; Welcome</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" media="screen" type="text/css" href="assets/global.css" />
	<link rel="stylesheet" media="screen" type="text/css" href="assets/local.css" />
	<link rel="stylesheet" media="screen" type="text/css" href="assets/font-face.css" />
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
					
					<!--<a href="/cart" id="button-creed"><span class="hide">CREED</span></a>-->
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
			<div id="cart" class="right "> 
				
			<h3 class="font-chunkfiveroman">Shopping Cart</h3>
			
			<!--cart-form-->
			<form action="/cart" method="post" id="cartform" name="cartform"> 
				
				<table border="0">
					
					<thead>
					<!--cart header-->
					<tr>
						<th id="cart-title-product" width="380"><h4 class="font-chunkfiveroman">Product</h4></th>
						<th id="cart-title-quantity" width="110" align="center"><h4 class="font-chunkfiveroman">Quantity</h4></th>
						<th id="cart-title-price" width="180" align="center"><h4 class="font-chunkfiveroman">Price</h4></th>
						<th id="cart-title-remove" width="100"><h4 class="font-chunkfiveroman">Remove</h4></th>
					</tr>
					<!--cart header-->
					</thead>
					
					<tbody>
					<!--cart item-->
					<tr>
						<td>
						
							
							<table border="0">
								<tbody>
									<tr>
										<td><a href="/products/macross" class="hover-opacity-04"><img src="http://cdn.shopify.com/s/files/1/0062/2662/products/Macross_0009_medium.jpg?2" alt="Macross - S / Small" /></a></td>
										<td><h5><a href="/products/macross">Macross - S / Small <span>&pound;1.00</span></a></h5></td>
									</tr>
								</tbody>
							</table>
							
						
						</td>
						
						<td>
							<input type="text" class="field" name="updates[]" id="updates_71002602" value="1" onfocus="this.select();" /> 
							<input type="hidden" name="id" value="71002602" /> 
						</td>
						
						<td><b>&pound;1.00</b></td>
						
						<td class="inherit"><a href="/cart/change/71002602?quantity=0" class="button-remove hide-text hover-opacity-04">Remove</a></td>
						
					</tr>
					<!--cart item-->
					
					<!--cart item-->
					<tr>
						<td>
						
							<table border="0">
								<tbody>
									<tr>
										<td><a href="/products/macross" class="hover-opacity-04"><img src="http://cdn.shopify.com/s/files/1/0062/2662/products/Macross_0009_medium.jpg?2" alt="Macross - S / Small" /></a></td>
										<td><h5><a href="/products/macross">Macross - S / Small <span>&pound;1.00</span></a></h5></td>
									</tr>
								</tbody>
							</table>
						
						</td>
						
						<td>
							<input type="text" class="field" name="updates[]" id="updates_71002602" value="1" onfocus="this.select();" /> 
							<input type="hidden" name="id" value="71002602" /> 
						</td>
						
						<td><b>&pound;1.00</b></td>
						
						<td class="inherit"><a href="/cart/change/71002602?quantity=0" class="button-remove hide-text hover-opacity-04">Remove</a></td>
						
					</tr>
					<!--cart item-->
					</tbody>
					
					
				</table>
				
				
				<div id="cart-checkout" class="row"> 
					
					<div id="cart-checkout-subtotal">
						<h6 class="font-chunkfiveroman">Subtotal:</h6><p><b>&pound;2.00 GBP</b></p>
					</div>
					
					<div id="cart-checkout-buttons">
						<input type="button" name="update" id="keep-shopping" class="cart-button hover-opacity-04" value="Keep Shopping"/> 
						<input type="submit" name="update" id="update-cart" class="cart-button hover-opacity-04" value="Update Cart"/> 
						<input type="submit" name="checkout" id="getout" class="cart-button hover-opacity-04" value="* Check Out *"/>
						<!--<input type="image"  name="goto_pp" value="paypal_express" src="https://www.paypal.com/en_US/i/btn/btn_xpressCheckoutsm.gif" />
						-->
					</div>
				</div> 
				
				
			</form>
			<!--cart-form-->
			
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