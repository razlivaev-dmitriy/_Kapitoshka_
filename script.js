window.onload = function () {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        let mou = $("<img src='images/mouse_center.png' class='mouse' style='position: absolute;z-index: 10000;pointer-events: none;'>")
        document.addEventListener("mousemove", function(e) {
            mou.css({left: e.pageX - 25 + "px", top: e.pageY + "px"});
            $("body").append(mou);
        });
        document.addEventListener("click", function(e) {
            document.elementFromPoint(e.pageX, e.pageY);
        });
    }

    let moveUp = document.querySelector(".moveUp");
    moveUp.addEventListener("click", function() {
        document.querySelector("#up").scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    });

    let media_menu = window.matchMedia("(max-width: 992px)");
    if (media_menu.matches) {
        $("ul").html('<ul><li class="start_href" title="Главная страница"><a href="index.html" >Главная</a></li><li title="Информация для родителей"><a href="relatives.html">Для родителей</a></li><li title="Информация о нас"><a href="about.html">О нас</a></li><li title="Как с нами связаться?"><a href="contact.html">Контакты</a></li></ul>')
    }

    let media_menu1 = window.matchMedia("(max-width: 400px)");
    if (media_menu1.matches) {
        $(".by_menu").html('<a href="index.html" class="item" id="first_item_by_menu">Главная</a><a href="relatives.html" class="item">Для родителей</a><a href="about.html" class="item">О нас</a><a href="contact.html" class="item">Контакты</a>');
    }

    let isGlaz = false;
    let parol1 = [];
    let parol2 = [];
    $(document).on("keyup", funParol1)
    $(document).on("keyup", funParol2)
    function funParol1(e) {
        if ($("#parol1")[0].value.length > parol1.length) {
            parol1.push($("#parol1")[0].value.slice(-1));
        } else if ($("#parol1")[0].value.length < parol1.length) {
            for (let count = parol1.length - $("#parol1")[0].value.length; count > 0; count -= 1)
                parol1.pop();
        }
        if (!isGlaz) {
            $("#parol1")[0].value = "•".repeat($("#parol1")[0].value.length);
        }
        return parol1
    };
    function funParol2(e) {
        if ($("#parol2")[0].value.length > parol2.length) {
            parol2.push($("#parol2")[0].value.slice(-1));
        } else if ($("#parol2")[0].value.length < parol2.length) {
            for (let count = parol2.length - $("#parol2")[0].value.length; count > 0; count -= 1)
                parol2.pop();
        }
        if (!isGlaz) {
            $("#parol2")[0].value = "•".repeat($("#parol2")[0].value.length);
        }
        return parol2
    };
    $("#glaz").on("click", function() {
        if (!isGlaz) {
            $("#glaz").attr("src", "images/glaz.png");
            let newParol = "";
            for (let eValue of parol1) {
                eValue.split("");
                for (let bukv of eValue) {
                    newParol += bukv;
                }
                $("#parol1")[0].value = newParol;
            }
            document.getElementById("parol1").focus();
            isGlaz = true;
        } else {
            $("#glaz").attr("src", "images/unglaz.png");
            $("#parol1")[0].value = "•".repeat($("#parol1")[0].value.length);
            document.getElementById("parol1").focus();
            isGlaz = false;
        }
    })
    $("#glaz2").on("click", function() {
        if (!isGlaz) {
            $("#glaz2").attr("src", "images/glaz.png");
            let newParol = "";
            for (let eValue of parol2) {
                eValue.split("");
                for (let bukv of eValue) {
                    newParol += bukv;
                }
                $("#parol2")[0].value = newParol;
            }
            document.getElementById("parol2").focus();
            isGlaz = true;
        } else {
            $("#glaz2").attr("src", "images/unglaz.png");
            $("#parol2")[0].value = "•".repeat($("#parol2")[0].value.length);
            document.getElementById("parol2").focus();
            isGlaz = false;
        }
    })
    let uL = "admin";
    let uP = "qwerty";
    $(".vhod_name").on("click", function() {
        $("#vhod").css({"display": "flex"})
        $("#reg").css({"display": "none"})
        $(".vhod_name").css({"color": "#fff"})
        $(".reg_name").css({"color": "#a5a2a2"})
    })
    $(".reg_name").on("click", function() {
        $("#vhod").css({"display": "none"})
        $("#reg").css({"display": "flex"})
        $(".vhod_name").css({"color": "#a5a2a2"})
        $(".reg_name").css({"color": "#fff"})
    })
    function func1() {
        let newParol = "";
        for (let eValue of parol2) {
            eValue.split("");
            for (let bukv of eValue) {
                newParol += bukv;
            }
            uP = newParol;
        }
        let ins = $(".input1");
        let vals = [];
        for(let i=0; i < ins.length; i++) {
            vals.push(ins[i].value);
        }
        if (vals[0] == uL && vals[1] == uP) {
            alert("Вход прошёл успешно!")
        } else {
            alert("Неправильный логин или пароль!")
        }
    }
    function func2() {
        let ins = $(".input2");
        let vals = [];
        let pols = [];
        for(let i=0; i < ins.length; i++) {
            vals.push(ins[i].value);
            pols.push(ins[i]);
        }
        uL = vals[0];
        uP = vals[1];
    }
    $("#form_but1").on("click", func1);
    $("#form_but2").on("click", func2);

    let show = false;
    let start;
    let end;

    function tuda() {
        anime({
            targets: ".by_menu",
            translateX: ["-100%", "-10%"],
            easing: "easeInOutQuad",
            duration: 500
        });
        anime({
            targets: ".burger",
            rotate: 90,
            duration: 500,
            easing: "easeInOutQuad"
        })
        anime({
            targets: ".stick",
            rotate: 180,
            duration: 500,
            easing: "easeInOutQuad"
        })
        show = true;
    }

    function ottuda() {
        anime({
            targets: ".by_menu",
            translateX: ["-10%", "-100%"],
            easing: "easeInOutQuad",
            duration: 500
        });
        anime({
            targets: ".burger",
            rotate: 0,
            duration: 500,
            easing: "easeInOutQuad"
        })
        anime({
            targets: ".stick",
            rotate: 0,
            duration: 500,
            easing: "easeInOutQuad"
        })
        show = false;
    }

    $(".burger").on("click", function menu() {
        if (show) {
            ottuda();
        } else {
            tuda();
        }
    });


    $(document).on("touchstart", function(event) {
        start = event.originalEvent.touches[0].pageX;
    })

    $(document).on("touchend", function(event) {
        end = event.originalEvent.changedTouches[0].pageX;
        if (end - start >= 100 && !show) {
            tuda();
        } else if(start - end >= 100 && show) {
            ottuda();
        }
    })

    $('.slider').bxSlider({
        pagerCustom: '.slider_min',
        infiniteLoop: true,
        speed: 250,
        easing: "linear"
    });
}