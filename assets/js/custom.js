/**	
	* Inspired by http://www.markups.io/

	Custom JS
	
	1. FIXED MENU
	2. FEATURED SLIDE ( TYPED SLIDER )
	3. SKILL PROGRESS BAR
	4. COLLAPSIBLE
	5. MENU SMOOTH SCROLLING
	6. MOBILE MENU CLOSE  
	7. BUTTON SMOOTH SCROLL ( VIEW MY WORK )
	
**/



(function( $ ){


	/* ----------------------------------------------------------- */
	/*  1. FIXED MENU
	/* ----------------------------------------------------------- */


	jQuery(window).bind('scroll', function () {

    if ($(window).scrollTop() > 100) {

        $('#mu-header').addClass('mu-fixed-nav');
        
	    } else {
	        $('#mu-header').removeClass('mu-fixed-nav');
	    }
	});

		
	/* ----------------------------------------------------------- */
	/*  2. FEATURED SLIDE (TYPED SLIDER)
	/* ----------------------------------------------------------- */

		var typed = new Typed('#typed', {
		    stringsElement: '#typed-strings',
		    typeSpeed: 20,
		    backSpeed: 20,
		    startDelay: 1000,
		    loop: true,
		    loopCount: Infinity
		});

		
	/* ----------------------------------------------------------- */
	/*  3. SKILL PROGRESS BAR
	/* ----------------------------------------------------------- */

		$('.mu-skill-progress-bar').appear(function() {

		 	$('.mu-java-bar').LineProgressbar({
				percentage: 90,
				triggerOnce: true
			});

			$('.mu-sql-bar').LineProgressbar({
				percentage: 85,
				triggerOnce: true
			});

			$('.mu-c-bar').LineProgressbar({
				percentage: 80,
				triggerOnce: true
			});

			$('.mu-python-bar').LineProgressbar({
				percentage: 75,
				triggerOnce: true
			});

			$('.mu-linux-bar').LineProgressbar({
				percentage: 60,
				triggerOnce: true
			});

		});
		
		
    
    /* ----------------------------------------------------------- */
	/*  4. COLLAPSIBLE
	/* ----------------------------------------------------------- */  

        var coll = document.getElementsByClassName("content-collapsible");
        var i;
        
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("content-active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            }
          });
        }

	/* ----------------------------------------------------------- */
	/*  5. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 

		//MENU SCROLLING WITH ACTIVE ITEM SELECTED

		// Cache selectors
		var lastId,
		topMenu = $(".mu-menu"),
		topMenuHeight = topMenu.outerHeight()+13,
		// All list items
		menuItems = topMenu.find('a[href^=\\#]'),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
		  var href = $(this).attr("href"),
		      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+22;
		  jQuery('html, body').stop().animate({ 
		      scrollTop: offsetTop
		  }, 1500);
		  e.preventDefault();
		});

		// Bind to scroll
		jQuery(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;
		   
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
		       lastId = id;
		       // Set/remove active class
		       menuItems
		         .parent().removeClass("active")
		         .end().filter("[href=\\#"+id+"]").parent().addClass("active");
		   }           
		});


	/* ----------------------------------------------------------- */
	/*  6. MOBILE MENU CLOSE 
	/* ----------------------------------------------------------- */ 

		jQuery('.mu-menu').on('click', 'li a', function() {
		  $('.in').collapse('hide');
		});


	/* ----------------------------------------------------------- */
	/*  7. BUTTON SMOOTH SCROLL ( VIEW MY WORK )
	/* ----------------------------------------------------------- */

		$('.view-my-work-btn').on('click',function (e) {
		    e.preventDefault();
		    var target = this.hash,
		    $target = $(target);
		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 1000, 'swing', function () {
		        window.location.hash = target;
			});
		});



	
})( jQuery );



  
	