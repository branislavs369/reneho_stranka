var buttons = document.getElementsByClassName("blog-btn");
var remButtons = document.getElementsByClassName("glyph-remove");
var blogContent = document.getElementsByClassName("blog-post-content");
var blogPost = document.getElementsByClassName("blog-post");

Object.values(buttons).forEach(function(button, i) {
	button.addEventListener("click", function(e) {
		blogPost[i].style.margin = "0";
		blogPost[i].style.order = "-1";	
		blogPost[i].classList.toggle("toggled");
		var notToggledPosts = Object.values(blogPost).filter(post => post.className != "blog-post toggled");
		console.log(notToggledPosts);
		notToggledPosts.forEach(function(post) {
			if ((notToggledPosts.indexOf(post) + 1) % 3 === 2 ) {
				post.style.margin = "10px 4%";
			} else {
				post.style.margin = "10px 1px";
			}
		});
	});

	remButtons[i].addEventListener("click",function(e) {
		blogPost[i].style.order = "0";
		blogContent[i].style.overflow = "hidden";
		blogPost[i].classList.toggle("toggled");
		var postArr = document.getElementsByClassName("blog-post");
		Object.values(postArr).forEach(function(post) {	
			if ((Object.values(postArr).indexOf(post) + 1) % 3 === 2 ) {
				post.style.margin = "10px 4%";
			} else {
				post.style.margin = "10px 1px";
			}
		});
	});
});

var root = window.getComputedStyle(document.getElementById("side-nav-wrapper"));
var headerHeight = root.getPropertyValue("top");
document.getElementById("demo").innerHTML = headerHeight;

window.addEventListener("scroll", function(e) {
	if (scrollY <= parseInt(headerHeight)) {
		document.getElementById("side-nav-wrapper").style.top = parseInt(headerHeight) - scrollY + "px";
	} else if (scrollY >= parseInt(headerHeight)) {
		document.getElementById("side-nav-wrapper").style.top = "px";
	}
});