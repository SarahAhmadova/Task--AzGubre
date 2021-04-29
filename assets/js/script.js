$(document).ready(() => {
    $(".togler").click((e) => {
        e.preventDefault();
        $(".collapsed-menu").slideToggle();
    })
})
$(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,
    margin: 10,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        680: {
            items: 2,
            nav: true
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})


let pathes = document.querySelector("#region option");
$("#region").change(function () {
    pathes.forEach((e) => {
        if(e.getAttribute("id") == this.value){
            
            console.log(e.getAttribute("id"));
            console.log($(this).find("option:selected").text());
            
        }
    })
});
$("svg#map").mousemove(function (e) { 

        console.log(e.target);
        var offset = $(this).offset();
        var relativeX = (e.pageX - offset.left);
        var relativeY = (e.pageY - offset.top);

        document.querySelectorAll("#region option").forEach((el)=>{
            if(el.value==e.target.getAttribute("id")){
                console.log(el.textContent);
                $(".city-info .city").html(el.textContent);
                $(".city-info .address").html(`Ünvan: ${el.textContent}, Azərbaycan`);
                $(".city-info").css({
                    opacity: 1,
                    top: relativeY,
                    left: relativeX,
                    "display":"flex"
                });
            }
        })
        
        $(".picker").css({
            top: relativeY+20,
            left: relativeX+20,});

})

