$(function(){
    $(window).on("resize", function(){

        //size

        let clientW = $(window).width();

        //set
        let isShowBigImage = clientW>=800;

        //get item

        let $allItem = $("#lk_carousel .item");

        //each
        $allItem.each(function(index, item){

            let src = isShowBigImage?($(item).data("lg-img")):($(item).data("sm-img"));
            let imgUrl='url("' + src +'")';

            //set background
                $(item).css({
                    backgroundImage: imgUrl

                });

            // set img tag
            if(!isShowBigImage){
                let $img = "<img src='" + src + "'>";
                $(item).empty().append($img);
            }else{
                $(item).empty();
            }

        });
    });
    $(window).trigger("resize");

    //tools tips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

      // width
      $(window).on("resize", function(){
        let $ul = $("#lk_product .nav");
        let $allLis =$("[role='presentation']", $ul);
        //console.log($allLis);

         //each
      let totalW =0;
      $allLis.each(function(index, item){
        totalW +=$(item).width();
        //console.log(totalW);

        let parentW = $ul.parent().width();

        //set width
        if(totalW > parentW){
        $ul.css({
            width: totalW +"px"
        })
    }else{
        $ul.removeAttr("style")
    }


      });
      });



      //导航

      let allLis = $("#lk_nav li");

      $(allLis[0]).on("click", function(){
        $("html,body").animate({scrollTop: $("#lk_about").offset().top}, 1000);

      })

      $(allLis[1]).on("click", function(){
        $("html,body").animate({scrollTop: $("#lk_product").offset().top}, 1000);

      })

      $(allLis[2]).on("click", function(){
        $("html,body").animate({scrollTop: $("#lk_hot").offset().top}, 1000);

      })

      $(allLis[5]).on("click", function(){
        $("html,body").animate({scrollTop: $("#lk_footer").offset().top}, 1000);

      });
});