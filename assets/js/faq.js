
$(document).ready(function () {
    var arr = "show"
    var arr2 = "show"
    var arr3 = "show"
    var arr4 = "show"
    var arr5 = "show"
    var arr6 = "show"
    var arr7 = "show"
    var arr8 = "show"
    $(".ans-1").hide()
    $(".ans-2").hide()
    $(".ans-3").hide()
    $(".ans-4").hide()
    $(".ans-5").hide()
    $(".ans-6").hide()
    $(".ans-7").hide()
    $(".ans-8").hide()
    $(".faq-1").click(function () {

        if (arr == "show") {
            $(".ans-1").toggle(1000);
            $(".arrow-1").removeClass("down");
            $(".arrow-1").addClass("up");
            arr = "hide";

        }
        else if (arr == "hide") {
            $(".ans-1").hide()
            $(".arrow-1").removeClass("up");
            $(".arrow-1").addClass("down");
            arr = "show";
        }

    });

    $(".faq-2").click(function () {

        if (arr2 == "show") {
            $(".ans-2").toggle(1000);
            $(".arrow-2").removeClass("down");
            $(".arrow-2").addClass("up");
            arr2 = "hide";

        }
        else if (arr2 == "hide") {
            $(".ans-2").hide()
            $(".arrow-2").removeClass("up");
            $(".arrow-2").addClass("down");
            arr2 = "show";
        }

    });
    $(".faq-3").click(function () {

        if (arr3 == "show") {
            $(".ans-3").toggle(1000);
            $(".arrow-3").removeClass("down");
            $(".arrow-3").addClass("up");
            arr3 = "hide";

        }
        else if (arr3 == "hide") {
            $(".ans-3").hide()
            $(".arrow-3").removeClass("up");
            $(".arrow-3").addClass("down");
            arr3 = "show";
        }

    });

    $(".faq-4").click(function () {

        if (arr4 == "show") {
            $(".ans-4").toggle(1000);
            $(".arrow-4").removeClass("down");
            $(".arrow-4").addClass("up");
            arr4 = "hide";

        }
        else if (arr4 == "hide") {
            $(".ans-4").hide()
            $(".arrow-4").removeClass("up");
            $(".arrow-4").addClass("down");
            arr4 = "show";
        }

    });
    $(".faq-5").click(function () {

        if (arr5 == "show") {
            $(".ans-5").toggle(1000);
            $(".arrow-5").removeClass("down");
            $(".arrow-5").addClass("up");
            arr5 = "hide";

        }
        else if (arr5 == "hide") {
            $(".ans-5").hide()
            $(".arrow-5").removeClass("up");
            $(".arrow-5").addClass("down");
            arr5 = "show";
        }

    });
    $(".faq-6").click(function () {

        if (arr6 == "show") {
            $(".ans-6").toggle(1000);
            $(".arrow-6").removeClass("down");
            $(".arrow-6").addClass("up");
            arr6 = "hide";

        }
        else if (arr6 == "hide") {
            $(".ans-6").hide()
            $(".arrow-6").removeClass("up");
            $(".arrow-6").addClass("down");
            arr6 = "show";
        }

    });
    $(".faq-7").click(function () {

        if (arr7 == "show") {
            $(".ans-7").toggle(1000);
            $(".arrow-7").removeClass("down");
            $(".arrow-7").addClass("up");
            arr7 = "hide";

        }
        else if (arr7 == "hide") {
            $(".ans-7").hide()
            $(".arrow-7").removeClass("up");
            $(".arrow-7").addClass("down");
            arr7 = "show";
        }

    });
    $(".faq-8").click(function () {

        if (arr8 == "show") {
            $(".ans-8").toggle(1000);
            $(".arrow-8").removeClass("down");
            $(".arrow-8").addClass("up");
            arr8 = "hide";

        }
        else if (arr8 == "hide") {
            $(".ans-8").hide()
            $(".arrow-8").removeClass("up");
            $(".arrow-8").addClass("down");
            arr8 = "show";
        }

    });



});