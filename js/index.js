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

        let parentW = $ul.parentW().width();

        //set width
        if(totalW > parentW){
        $ul.css({
            width: totalW +"px"
        })
    }else{
        $ul.removeAttribute("style")
    }


      });
      });


});