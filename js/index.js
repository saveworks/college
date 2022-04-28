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
});