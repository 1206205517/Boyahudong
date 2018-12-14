	$(function(){
		class Carousel{
			constructor(config){
				this.config = Object.assign({
					index:0,
					swiperName:'.swiper-slide',
				},config)
				this.timer = null;
				var that = this;
				$(this.config.swiperName).each(function(i,e){
					var li = $('<li>');
					$('.hd ul').append(li);
				})
				$(this.config.swiperName).eq(this.config.index).show();
				this.eventBind();
			}
			run(){
				var that = this;
				this.timer = setInterval(function(){
					that.config.index = (that.config.index ==$(that.config.swiperName).length - 1?0:that.config.index + 1)
					$('.hd ul li').eq(that.config.index).addClass('on').siblings().removeClass('on')
					$(that.config.swiperName).eq(that.config.index).fadeIn().siblings().fadeOut();
				},3000)
			}
			stop(){
				clearInterval(this.timer);
			}
			eventBind(){
				var that = this;
				$('.hd ul li').eq(0).addClass('on').siblings().removeClass('on')
				$('.hd').on('click','li',function(){
					that.config.index = $(this).index();
					$('.hd ul li').eq(that.config.index).addClass('on').siblings().removeClass('on');
					$(that.config.swiperName).eq(that.config.index).fadeIn().siblings().fadeOut();
				})
				$(that.config.swiperName).hover(function(){
					that.stop()
				},function(){
					that.run()
				})
			}
		}
		var carousel = new Carousel()
		carousel.run();
		var index = 0;
		
	    var cloneSlide = $('.slideImg').eq(0).clone();
	    $('.tempwrap ul').append(cloneSlide);
	    $('.tempwrap').width(1042*$('.slideImg').length)
	    function move(){
	        $('.tempwrap').stop().animate({
	            left:-1042 * index
	        },800,function(){
	            if(index == 2){
	                index = 0;
	                $('.tempwrap').css({
	                    left:0
					})
					
	            }
	        })
	    }
	    timer = setInterval(function(){
			
				canSwiper=false;
				index++;
				move()
			

	    },4000)
	    $('.dot ul li').click(function(){
	        index = $(this).index();
	        move();
	    })
	    $('.content-top').hover(function(){
	        clearInterval(timer);
	    },function(){
	        timer = setInterval(function(){
	        index++;
	        move()
	    },4000)
		})
		$('.gameBox-right').eq(0).show()
		$('.gameBox-left li').click(function(){
			index = $(this).index();
			$('.gameBox-right').eq(index).show().siblings().hide();
			$('.gameBox-left').show();
			$('.gameBox-left li').eq(index).attr('id','current').siblings().removeAttr('id','current')
		})
		$('.tright').eq(0).show()
		$('.tleft li').click(function(){
			index = $(this).index();
			$('.tright').eq(index).show().siblings().hide();
			$('.tleft').show()
			$('.tleft li').eq(index).attr('id','current').siblings().removeAttr('id','current')
		})
		$('.gotop').click(function(){
			$('html').animate({
				scrollTop:0
			},500)
		})
		$('.gqr').mouseenter(function(){
			$('.gqr i').css('display','block')
		})
		$('.gqr').mouseleave(function(){
			$('.gqr i').css('display','none')
		})
	})