$(document).ready(function(){
    // Search tool
    $(".tools .img1").on("click",function(){
        $(".search input").toggle(2000);
    });
    // buying
    $(".tools .img2").on("click",function(){
        $(".buying").slideToggle(1000);
    });
    
    // 1
    $(".buying1 button").on("click",function(){
        $(".buying1").css("display","none");
    });
    $(".product-parent .product-child1 button").on("click",function(){
        $(".buying").html($(".buying1").css("display","grid"));
    });
    // 2
    $(".buying2 button").on("click",function(){
        $(".buying2").css("display","none");
    });
    $(".product-parent .product-child2 button").on("click",function(){
        $(".buying").html($(".buying2").css("display","grid"));
    });
    // 3
    $(".buying3 button").on("click",function(){
        $(".buying3").css("display","none");
    });
    $(".product-parent .product-child3 button").on("click",function(){
        $(".buying").html($(".buying3").css("display","grid"));
    });
    // 4
    $(".buying4 button").on("click",function(){
        $(".buying4").css("display","none");
    });
    $(".product-parent .product-child4 button").on("click",function(){
        $(".buying").html($(".buying4").css("display","grid"));
    });
    // 5
    $(".buying5 button").on("click",function(){
        $(".buying5").css("display","none");
    });
    $(".product-parent .product-child5 button").on("click",function(){
        $(".buying").html($(".buying5").css("display","grid"));
    });
    // 6
    $(".buying6 button").on("click",function(){
        $(".buying6").css("display","none");
    });
    $(".product-parent .product-child6 button").on("click",function(){
        $(".buying").html($(".buying6").css("display","grid"));
    });
    // 7
    $(".buying7 button").on("click",function(){
        $(".buying7").css("display","none");
    });
    $(".product-parent .product-child7 button").on("click",function(){
        $(".buying").html($(".buying7").css("display","grid"));
    });
    // 8
    $(".buying8 button").on("click",function(){
        $(".buying8").css("display","none");
    });
    $(".product-parent .product-child8 button").on("click",function(){
        $(".buying").html($(".buying8").css("display","grid"));
    });
    // 9
    $(".buying9 button").on("click",function(){
        $(".buying9").css("display","none");
    });
    $(".Categories-parent .Categories-child1 button").on("click",function(){
        $(".buying").html($(".buying9").css("display","grid"));
    });
    // 10
    $(".buying10 button").on("click",function(){
        $(".buying10").css("display","none");
    });
    $(".Categories-parent .Categories-child2 button").on("click",function(){
        $(".buying").html($(".buying10").css("display","grid"));
    });
    // 11
    $(".buying11 button").on("click",function(){
        $(".buying11").css("display","none");
    });
    $(".Categories-parent .Categories-child3 button").on("click",function(){
        $(".buying").html($(".buying11").css("display","grid"));
    });
    // 12
    $(".buying13 button").on("click",function(){
        $(".buying8").css("display","none");
    });
    $(".Categories-parent .Categories-child4 button").on("click",function(){
        $(".buying").html($(".buying12").css("display","grid"));
    });

    // Personal
    $(".tools .img3").on("click",function(){
        $(".personal").slideToggle(1000);
    });
    // Menu mob
    $(".tools .img4").on("click",function(){
        $(".navbar-mobile nav ul").slideDown(1000);
        $(".tools .img4").css("display","none");
        $(".tools .img5").css("display","inline-block");
    });
    $(".tools .img5").on("click",function(){
        $(".navbar-mobile nav ul").slideUp(1000);
        $(".tools .img5").css("display","none");
        $(".tools .img4").css("display","inline-block");
    });
    $(".navbar-mobile nav ul li a").on("click",function(){
        $(".navbar-mobile nav ul").slideUp(1000);
        $(".tools .img5").css("display","none");
        $(".tools .img4").css("display","inline-block");
    });
    // Start home
    $(".home button").hover(function(){
        $(".home button").css({
           "backgroundColor":"#130f40",
           "transition":"all .4s ease",
           "cursor":"pointer"
        });
        $(".home button a").css({
            "color":"#f9f8fa"
        });
    },function(){
        $(".home button").css({
            "background":"none",
            "transition":"all .4s ease"
         });
         $(".home button a").css({
            "color":"#130f40"
        });
    });
    // End Home

    // start feature
    $(".feature-parent .feature-child1 button").hover(function(){
        $(".feature-parent .feature-child1 button").css({
           "backgroundColor":"#130f40",
           "transition":"all .4s ease",
           "cursor":"pointer"
        });
        $(".feature-parent .feature-child1 button a").css({
            "color":"#f9f8fa"
        });
    },function(){
        $(".feature-parent .feature-child1 button").css({
            "background":"none",
            "transition":"all .4s ease"
         });
         $(".feature-parent .feature-child1 button a").css({
            "color":"#130f40"
        });
    });
    // 2
    $(".feature-parent .feature-child2 button").hover(function(){
        $(".feature-parent .feature-child2 button").css({
           "backgroundColor":"#130f40",
           "transition":"all .4s ease",
           "cursor":"pointer"
        });
        $(".feature-parent .feature-child2 button a").css({
            "color":"#f9f8fa"
        });
    },function(){
        $(".feature-parent .feature-child2 button").css({
            "background":"none",
            "transition":"all .4s ease"
         });
         $(".feature-parent .feature-child2 button a").css({
            "color":"#130f40"
        });
    });
    // 3
    $(".feature-parent .feature-child3 button").hover(function(){
        $(".feature-parent .feature-child3 button").css({
           "backgroundColor":"#130f40",
           "transition":"all .4s ease",
           "cursor":"pointer"
        });
        $(".feature-parent .feature-child3 button a").css({
            "color":"#f9f8fa"
        });
    },function(){
        $(".feature-parent .feature-child3 button").css({
            "background":"none",
            "transition":"all .4s ease"
         });
         $(".feature-parent .feature-child3 button a").css({
            "color":"#130f40"
        });
    });
    // end feature

    // start product
    //hover
    $(".product-child1").hover(function(){
        $(".product-child1 img").css({
            "transform":"scale(1.1,1.1)",
            "transition":".3s ease-in-out"
        });
        $(".product-child1").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #ff7800",
            "border":"#ff7800 solid 1px"
        });
    },function(){
        $(".product-child1 img").css({
            "transform":"rotate(0deg)",
            "transition":".3s ease-in-out"
        });
        $(".product-child1").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #bdbdbd",
            "border":"#130f40 solid 1px"
        });
    });
    // 2
    $(".product-child2").hover(function(){
        $(".product-child2 img").css({
            "transform":"scale(1.1,1.1)",
            "transition":".3s ease-in-out"
        });
        $(".product-child2").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #ff7800",
            "border":"#ff7800 solid 1px"
        });
    },function(){
        $(".product-child2 img").css({
            "transform":"rotate(0deg)",
            "transition":".3s ease-in-out"
        });
        $(".product-child2").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #bdbdbd",
            "border":"#130f40 solid 1px"
        });
    });
    // 3
    $(".product-child3").hover(function(){
        $(".product-child3 img").css({
            "transform":"scale(1.1,1.1)",
            "transition":".3s ease-in-out"
        });
        $(".product-child3").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #ff7800",
            "border":"#ff7800 solid 1px"
        });
    },function(){
        $(".product-child3 img").css({
            "transform":"rotate(0deg)",
            "transition":".3s ease-in-out"
        });
        $(".product-child3").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #bdbdbd",
            "border":"#130f40 solid 1px"
        });
    });
    // 4
    $(".product-child4").hover(function(){
        $(".product-child4 img").css({
            "transform":"scale(1.1,1.1)",
            "transition":".3s ease-in-out"
        });
        $(".product-child4").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #ff7800",
            "border":"#ff7800 solid 1px"
        });
    },function(){
        $(".product-child4 img").css({
            "transform":"rotate(0deg)",
            "transition":".3s ease-in-out"
        });
        $(".product-child4").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #bdbdbd",
            "border":"#130f40 solid 1px"
        });
    });
    // 5
    $(".product-child5").hover(function(){
        $(".product-child5 img").css({
            "transform":"scale(1.1,1.1)",
            "transition":".3s ease-in-out"
        });
        $(".product-child5").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #ff7800",
            "border":"#ff7800 solid 1px"
        });
    },function(){
        $(".product-child5 img").css({
            "transform":"rotate(0deg)",
            "transition":".3s ease-in-out"
        });
        $(".product-child5").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #bdbdbd",
            "border":"#130f40 solid 1px"
        });
    });
    // 6
    $(".product-child6").hover(function(){
        $(".product-child6 img").css({
            "transform":"scale(1.1,1.1)",
            "transition":".3s ease-in-out"
        });
        $(".product-child6").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #ff7800",
            "border":"#ff7800 solid 1px"
        });
    },function(){
        $(".product-child6 img").css({
            "transform":"rotate(0deg)",
            "transition":".3s ease-in-out"
        });
        $(".product-child6").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #bdbdbd",
            "border":"#130f40 solid 1px"
        });
    });
    // 7
    $(".product-child7").hover(function(){
        $(".product-child7 img").css({
            "transform":"scale(1.1,1.1)",
            "transition":".3s ease-in-out"
        });
        $(".product-child7").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #ff7800",
            "border":"#ff7800 solid 1px"
        });
    },function(){
        $(".product-child7 img").css({
            "transform":"rotate(0deg)",
            "transition":".3s ease-in-out"
        });
        $(".product-child7").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #bdbdbd",
            "border":"#130f40 solid 1px"
        });
    });
    // 8
    $(".product-child8").hover(function(){
        $(".product-child8 img").css({
            "transform":"scale(1.1,1.1)",
            "transition":".3s ease-in-out"
        });
        $(".product-child8").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #ff7800",
            "border":"#ff7800 solid 1px"
        });
    },function(){
        $(".product-child8 img").css({
            "transform":"rotate(0deg)",
            "transition":".3s ease-in-out"
        });
        $(".product-child8").css({
            "transition":".3s ease-in-out",
            "outline":"5px solid #bdbdbd",
            "border":"#130f40 solid 1px"
        });
    });
    // Section 1
    $(".section1 .next").on("click",function(){
        $(".section1 .product-child4").css({
            "display":"grid",
            "transition":"all .3s ease"
        });
        $(".section1 .product-child1").css("display","none");
    });
    $(".section1 .previous").on("click",function(){
        $(".section1 .product-child1").css({
            "display":"grid",
            "transition":"all .3s ease"
        });
        $(".section1 .product-child4").css("display","none");
    });
    $(".section1 .previous").on("click",function(){
        $(".section1 .product-child4").css({
            "display":"grid",
            "transition":"all .3s ease"
        });
        $(".section1 .product-child1").css("display","none");
        $(".section1 .next").css("visibility","visible");
        $(".section1 .previous").css("visibility","hidden");
    });
    $(".section1 .next").on("click",function(){
        $(".section1 .product-child1").css({
            "display":"grid",
            "transition":"all .3s ease"
        });
        $(".section1 .product-child4").css("display","none");
        $(".section1 .next").css("visibility","hidden");
        $(".section1 .previous").css("visibility","visible");
    });
    // Section 2
    $(".section2 .next-sec2").on("click",function(){
        $(".section2 .product-child8").css({
            "display":"grid",
            "transition":"all .3s ease"
        });
        $(".section2 .product-child5").css("display","none");
    });
    $(".section2 .previous-sec2").on("click",function(){
        $(".section2 .product-child5").css({
            "display":"grid",
            "transition":"all .3s ease"
        });
        $(".section2 .product-child8").css("display","none");
    });
    $(".section2 .previous-sec2").on("click",function(){
        $(".section2 .product-child8").css({
            "display":"grid",
            "transition":"all .3s ease"
        });
        $(".section2 .product-child5").css("display","none");
        $(".section2 .next-sec2").css("visibility","visible");
        $(".section2 .previous-sec2").css("visibility","hidden");
    });
    $(".section2 .next-sec2").on("click",function(){
        $(".section2 .product-child5").css({
            "display":"grid",
            "transition":"all .3s ease"
        });
        $(".section2 .product-child8").css("display","none");
        $(".section2 .next-sec2").css("visibility","hidden");
        $(".section2 .previous-sec2").css("visibility","visible");
    });
    // end product

    // start review
    $(".review-child1").hover(function(){
        $(".review-child1 img").css({
            "transition":"all .3s ease",
            "transform":"scale(1.1,1.1)",
        });
        $(".review-child1").css({
            "outline":"2px solid #130f40",
            "transition":"all .3s ease",
            "cursor":"pointer"
        });
    },function(){
        $(".review-child1 img").css({
            "transition":"all .3s ease",
            "transform":"scale(1,1)",
        });
        $(".review-child1").css({
            "outline":"5px solid #bdbdbd",
            "transition":"all .3s ease"
        });
    });
    $(".review-child2").hover(function(){
        $(".review-child2 img").css({
            "transition":"all .3s ease",
            "transform":"scale(1.1,1.1)",
        });
        $(".review-child2").css({
            "outline":"2px solid #130f40",
            "transition":"all .3s ease",
            "cursor":"pointer"
        });
    },function(){
        $(".review-child2 img").css({
            "transition":"all .3s ease",
            "transform":"scale(1,1)",
            "cursor":"pointer"
        });
        $(".review-child2").css({
            "outline":"5px solid #bdbdbd",
            "transition":"all .3s ease"
        });
    });
    // End review

    // Start Blogs

    //1
    $(".blogs-parent .blogs-child1").hover(function(){
        $(".blogs-child1").css({
            "outline":"2px solid #130f40",
            "transition":".3s ease all",
            "cursor":"pointer"
        });
        $(".blogs-child1 img").css({
            "transform":"scale(1.1,1.1)",
            "transition":".3s ease all"
        });
    },function(){
        $(".blogs-child1").css({
            "outline":"5px solid #bdbdbd",
            "transition":".3s ease all"
        });
        $(".blogs-child1 img").css({
            "transform":"scale(1,1)",
            "transition":".3s ease all"
        });
    });
    // 2
    $(".blogs-parent .blogs-child2").hover(function(){
        $(".blogs-child2").css({
            "outline":"2px solid #130f40",
            "transition":".3s ease all",
            "cursor":"pointer"
        });
        $(".blogs-child2 img").css({
            "transform":"scale(1.1,1.1)",
            "transition":".3s ease all"
        });
    },function(){
        $(".blogs-child2").css({
            "outline":"5px solid #bdbdbd",
            "transition":".3s ease all"
        });
        $(".blogs-child2 img").css({
            "transform":"scale(1,1)",
            "transition":".3s ease all"
        });
    });
    // 3
    $(".blogs-parent .blogs-child3").hover(function(){
        $(".blogs-child3").css({
            "outline":"2px solid #130f40",
            "transition":".3s ease all",
            "cursor":"pointer"
        });
        $(".blogs-child3 img").css({
            "transform":"scale(1.1,1.1)",
            "transition":".3s ease all"
        });
    },function(){
        $(".blogs-child3").css({
            "outline":"5px solid #bdbdbd",
            "transition":".3s ease all"
        });
        $(".blogs-child3 img").css({
            "transform":"scale(1,1)",
            "transition":".3s ease all"
        });
    });
    // End Blogs


});