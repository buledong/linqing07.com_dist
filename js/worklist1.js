if("object"!=typeof lancer)var lancer={};lancer.workList=function(){var i=$("#work-list"),t=$("#work-list li"),e=$(".big-pic");this.waterFall=function(){i.gridalicious({width:175,gutter:20,selector:"li",animate:!0,animationOptions:{queue:!0,speed:200,duration:300,effect:"fadeInOnAppear"}})},this.showBigPic=function(){var i=function(i,t,n){var o=$(i).find("img").attr("src"),a="<img src="+o.slice(0,-4)+"_big.jpg />";e.html(a),e.appendTo("body").show().css({top:n,left:t})};t.bind("mousemove",function(t){t.preventDefault();var e=t.pageY+20,n=t.pageX+20;i(this,n,e)}),t.bind("mouseout",function(i){i.preventDefault(),e.hide().empty()})},this.onReady=function(){this.waterFall(),this.showBigPic()}},$(function(){(new lancer.workList).onReady()});