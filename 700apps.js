jQuery(document).ready(function($){
	//open hamburger menu on mobile
	$('.hamburger-menu').on('click', function(){
		$('header').toggleClass('nav-is-visible');
	});

	//fix socials/demo bar on scrolling
	if ($('#single-product-bar').length > 0) {
		$('.prev-next').addClass('is-hidden');
		$(window).load(function(){
			var barTop = $('#single-product-bar .cd-container').offset().top;
			fixSocialBar(barTop);
			$(window).scroll(function() {
				(!window.requestAnimationFrame) 
					? fixSocialBar(barTop) 
					: window.requestAnimationFrame(function(){ fixSocialBar(barTop) });
			});
		});
	}

	function fixSocialBar(barTop) {
		if( $(window).scrollTop() >= barTop) {
			$('#single-product-bar').addClass('is-fixed');
			$('.prev-next').removeClass('is-hidden');
		} else {
			$('#single-product-bar').removeClass('is-fixed');
			$('.prev-next').addClass('is-hidden');
		}
	}



var duoshuoQuery = {short_name:"700apps"};
  (function() {
    var ds = document.createElement('script');
    ds.type = 'text/javascript';ds.async = true;
    ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
    ds.charset = 'UTF-8';
    (document.getElementsByTagName('head')[0] 
     || document.getElementsByTagName('body')[0]).appendChild(ds);
  })();


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-6546661-4', 'auto');
  ga('send', 'pageview');