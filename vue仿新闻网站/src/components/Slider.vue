<template>
	<div class="banner">
        <ul class="clearfix">
            <li><img src="../assets/images/img_1.jpg" alt=""/>
            	<div class="text-box">
                	<h2>我是超人！</h2>
                    <p>twathit / 文</p>
                </div>
            </li>
            <li><img src="../assets/images/img_2.jpg" alt=""/>
            	<div class="text-box">
                	<h2>我是蝙蝠侠！</h2>
                    <p>twathit / 文</p>
                </div>
            </li>
            <li><img src="../assets/images/img_3.jpg" alt=""/>
            	<div class="text-box">
                	<h2>我是闪电侠！</h2>
                    <p>twathit/ 文</p>
                </div>
            </li>
            <li><img src="../assets/images/img_4.jpg" alt=""/>
            	<div class="text-box">
                	<h2>我是神奇女侠！</h2>
                    <p>twathit / 文</p>
                </div>
            </li>
        </ul>
        <ol>
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </div>
</template>
<script>
	export default {
	mounted(){
      this.slider();
    },
    methods:{
      slider(){
        $(function(){
          var mySwipe=Swipe($('.banner')[0],{
            auto:2000,
            continuous:true,
            stopPropation:true,
            callback:function(index,element){
              $('.banner ol li').removeClass('active');
              $('.banner ol li').eq(index).addClass('active');
            }
          });
          $('.banner ol li').click(function(){
            mySwipe.slide($(this).index());
    });
        });

      }
    }
	}
</script>