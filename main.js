


//prevents website freezing in the middle on refresh 
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  //window load
document.addEventListener("DOMContentLoaded", function(){
     document.getElementById("body").className = "main-page loaded";




    
    //this click handler changes dark and light
    $("#darkmode").click(function(){
        $("body").toggleClass("dark-mode");
        if($("body").hasClass("dark-mode")){
            $("#darkmode").html("light mode");
        } else {
            $("#darkmode").html("dark mode");
        }
    });

    //This is main transition from landing page to list view of works
    $(".main-page .main-bg").click(function(){
        if(!$("body").hasClass("in-transition") && $("body").hasClass("main-page")){
            $("body").addClass("in-transition");

                $("body").removeClass("main-page ");

            setTimeout(function(){
                $(".main-bg-wrapper, .click-any, .explore").remove();
                $(".bg").removeClass("main-bg");
                $("body").removeClass(" in-transition");
                $("body").addClass("list");


            }, 650);
            
        }
    })

    //gets mouse position, used for image title parallax, and mouse click hint
    var EventHandlers = (function() {
    
        
        var screenSizes = {
            width : $(window).width(),
            height : $(window).height()
        }

        var coors = {
            x : null,
            y : null
        }
            
        var dimTimeout = null;
        var scrollTimeout = 0;


        document.addEventListener('mousemove', onMouseUpdate, false);
        document.addEventListener('mouseenter', onMouseUpdate, false);
            

        //mouse click hint 
        function updateClickAnywhere(){
            $(".click-any").css("transform" , "translateX(" + (coors.x - 17) + "px) translateY("+ (coors.y - 10) + "px)");   
            
        }


        //title parallax 
        function updateMainTitlePosition(){
            var x = (coors.x - screenSizes.width/2) / 200 * (-1)
            var y =  (coors.y - screenSizes.height/2) / 200 * (-1)

            $(".main-page .img-para").css("transform" , "translateX(" + x + "px) translateY(" + y + "px) translateZ(0)");  
        }


        //dims item
        function dimItems(){
            $("body").removeClass("dim");
            clearTimeout(dimTimeout);
            dimTimeout = setTimeout(function() {
                $("body").addClass("dim");
            }, 3500);
        }

        function scrollHide(){
            $(".scroll").addClass("hidden");
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                $(".scroll").removeClass("hidden");
            }, 2000);
        }



        //mouse update event,
        function onMouseUpdate(e) {
            coors.x = e.pageX;
            coors.y = e.pageY;
            
            if($("body").hasClass("main-page")){

                updateClickAnywhere();
                updateMainTitlePosition();
            } else if(!$("body").hasClass("info")){
                dimItems();
                
            }
        }





        var elementCount = $('.main-image').length;
        var imgSize = $(".main-image").height();
        imagePosition = [];
        var windowHeight = $(window).height();

        for(var i = 0; i < elementCount; i++){
            imagePosition.push($($('.main-image')[i]).offset().top);
        }
        $(window).scroll(function() { //when window is scrolled
            dimItems();

            for(var i = 0; i< elementCount; i++){
                if(imagePosition[i] - $(window).scrollTop() < -100){
                    $(".bg:nth-child("+(i+1)+")").removeClass("active");
                } else if (imagePosition[i] - $(window).scrollTop() > windowHeight*3/4){
                    $(".bg:nth-child("+(i+1)+")").removeClass("active");
                     if(i+1 == elementCount){
                        $(".scroll").removeClass("hidden");
                    }
                } else {
                    if(!$(".bg:nth-child("+(i+1)+")").hasClass("active")) $(".bg:nth-child("+(i+1)+")").addClass("active");
                   
                    if(i+1 == elementCount){
                        if(!$(".scroll").hasClass("hidden"))$(".scroll").addClass("hidden");
                    }
                }
            }
        });
    
        function getMouseX() {
            return coors.x;
        }
    
        function getMouseY() {
            return coors.y;
        }
        
        return {
            getMousePosition: coors,
            clearDimTimeout : function(){
                clearTimeout(dimTimeout);
            }
        };
    
    })();



    var infoHandler = (function() {


        var currentImages = null;
        var about = {
            title: "Sculptor, Master",
            eductation: "EDUCTAION",
            exhibition: "EXHIBITIONS AND FESTIVALS",
            desc : [
                "Papuna Dabrundashvili is a contemporary Georgian sculptor based in Brooklyn, New York. ",
                "He graduated from Tbilisi State Academy of Arts in 2010. Since then he has participated in ", 
                "numerous projects including restoration of historical monuments as well as creating urban",
                "sculpture. He has actively participated in several exhibitions and festivals, both, in Tbilisi and",
            "New York. ",
                "The key features of Dabrundashvili’s work include paradoxical coexistence of extreme precision ",
                "and strong generalization; monumental expression of spacial sculptural forms and emphasizing ",
                "the importance of flat surface. Emotion, even subtle sensations are metaphorically conveyed ",
                "through extremely generalized minimalist abstract forms. Reflections on several psychological ",
                "aspects of human being and expanding certain concepts farther basing them on personal ",
                "experience is crucial to the artist. He consistently explores the possibilities of the material and ",
                "different techniques while pursuing his quest for meanings. The exquisite mixture of diverse ",
                "textures together with refined abstract structures in Dabrundashvili’s work combined with clear ",
                "conceptual and formal expression reveal his original artistic vision. "],
            edu: [
                "Georgia 1992-2003 Tbilisi 55# hight school",
                'Georgia 1996-1997 Yang sculpture center in “Republican palace”. ',
                'Georgia 1997-2002 School of ceramic& sculptures for children “Hands in clay”',
                'Georgia 2003-2007 Tbilisi State Academy of Art Bachelor of sculpture.',
                'Georgia 2008-2010- Tbilisi State Arts Academy. Post graduate Study Master of sculpture.',
                'Profetional of “Traditional Georgian Closion Enamel”',  
            ],
            exh: [
                '1998 - Georgia Tbilisi “Art internationational Center”',
                '2000 - Georgia Tbilisi “Art internationational Center”',
                '2002 - Georgia Tbilisi “Art internationational Center”',
                '2004 - Georgia “Akademi of art” student Group exhibition',
                '2006 - Georgia “Akademi of art” winer from 50 sculptore Competition ',
                '2008 - Georgia “Georgian national Olimpic committee” sculpture For 2008 olimpic games” 3 place.    ' ,      
                '2007 - France  In Council of Europe  “Cloisonne enamel from the land of the golden fleece”',
                '2016 - Azerbaijan  “BaquBuild”',
                '2016 - Georgia “Expo Georgia”',
                '2016 - New york   “Phenix Galerry”',
                '2016 - New York   “Emmanuel Fremin Gallery”' ,
                '2016 - New York  “2nd street cathedral”',
                '2016 - New York    “Artifact Gallery”',
                '2018 - New York   “Susan Eley Fine Art”	',
                '2018 - New York  Art Fair “Reveal”',
                '2018 - New York “World Trade Gallery”',
                '2019 - New York “Artifact Gallery”',
                '2019-New Jersey  Museum  “Mora” ',
                '2019-New York “George Billis Gallery” '

            ],
            images : ["main.jpg","main.jpg","main.jpg","main.jpg", "main.jpg"],

        }
    
        var data = [
            {
                main_image : "main.jpg",
                title: "DANCE DANCE DANCE",
                main_details: "2010 / NY / Sold",
                details: "Materials: Basalt, Stone, &nbsp; &nbsp; &nbsp; Size: 12x41",
                description: "it was made 3 yaers ego",
                images : ["main.jpg","papuna.jpg","horse.jpg","sadness.jpg", "monk.jpg"],
                color : "#507292"

            },
            {
                main_image : "Socious.jpg",
                title: "SOCIOUS",
                main_details: "2010 / NY / Sold",
                details: "Materials: Basalt, Stone, &nbsp; &nbsp; &nbsp; Size: 12x41",
                description: "it was made 3 yaers ego",
                images : ["Socious.jpg","separation.jpg"],
                color : "#77482e"

            },
            {
                main_image : "separation.jpg",
                title: "SEPARATION OF SUBCONSCIOUSNESS",
                main_details: "2010 / NY / Sold",
                details: "Materials: Basalt, Stone, &nbsp; &nbsp; &nbsp; Size: 12x41",
                description: '"If someone talks of subconsciousness, I cannot tell whether he means the term topographically – to indicate something lying in the mind beneath consciousness – or qualitatively – to indicate another consciousness, a subterranean one, as it were. He is probably not clear about any of it. The only trustworthy antithesis is between conscious and unconscious." Sigmund Freud',
                images : ["main.jpg","main.jpg","main.jpg"],
                color : "#507292"

            },
            {
                main_image : "fromparallelworld.jpg",
                title: "FROM PARALLEL WORLD",
                main_details: "2010 / NY / Sold",
                details: "Materials: Basalt, Stone, &nbsp; &nbsp; &nbsp; Size: 12x41",
                description: "it was made 3 yaers ego",
                images : ["main.jpg","main.jpg"],
                color : "#77482e"

            },
            {
                main_image : "sadness.jpg",
                title: "SADNESS",
                main_details: "2010 / NY / Sold",
                details: "Materials: Basalt, Stone, &nbsp; &nbsp; &nbsp; Size: 12x41",
                description: "it was made 3 yaers ego",
                images : ["main.jpg","main.jpg"],
                color : "#77482e"

            },
            {
                main_image : "lovestory.jpg",
                title: "LOVESTORY",
                main_details: "2010 / NY / Sold",
                details: "Materials: Basalt, Stone, &nbsp; &nbsp; &nbsp; Size: 12x41",
                description: "it was made 3 yaers ego",
                images : ["main.jpg","main.jpg"],
                color : "#646d89"

            },
            {
                main_image : "horse.jpg",
                title: "HORSE",
                main_details: "2010 / NY / Sold",
                details: "Materials: Basalt, Stone, &nbsp; &nbsp; &nbsp; Size: 12x41",
                description: "it was made 3 yaers ego",
                images : ["main.jpg","main.jpg"],
                color : "#646d89"

            },
            {
                main_image : "monk.jpg",
                title: "MONK",
                main_details: "2010 / NY / Sold",
                details: "Materials: Basalt, Stone, &nbsp; &nbsp; &nbsp; Size: 12x41",
                description: "it was made 3 yaers ego",
                images : ["main.jpg","main.jpg"],
                color : "#524d4d"

            },
            {
                main_image : "lesscomunication.jpg",
                title: "LESS COMMUNICATION",
                main_details: "2010 / NY / Sold",
                details: "Materials: Basalt, Stone, &nbsp; &nbsp; &nbsp; Size: 12x41",
                description: "it was made 3 yaers ego",
                images : ["main.jpg","main.jpg"],
                color : "#7a350a"

            },
            {
                main_image : "ellevation.jpg",
                title: "ELLEVATION",
                main_details: "2010 / NY / Sold",
                details: "Materials: Basalt, Stone, &nbsp; &nbsp; &nbsp; Size: 12x41",
                description: "it was made 3 yaers ego",
                images : ["main.jpg","main.jpg"],
                color : "#c59244"

            },
        ];


        
        var loadList = null;

        function setValuesForInfo(id){
            currentImages = data[id-1].images;
            $(".image>img").attr("src", data[id-1].main_image);
            $(".desc-title").html(data[id-1].title);
            $(".desc-title").attr("style" , "color:" + data[id-1].color);
            $(".desc-main-details").html(data[id-1].main_details);
            $(".desc-details").html(data[id-1].details);
            $(".desc").html(data[id-1].description)
            var appendString = ""
            for(var i = 0; i < data[id-1].images.length; i++){
            
                appendString += "<div class='item' data-id='"+i+"'><div class='actual-img' style='background: url("+data[id-1].images[i]+"); background-position: center center; background-size: cover'><div class='expand'><img class='hidden-img' style='display:none' src='"+data[id-1].images[i]+"'><span class='hint'>click to expand</span></div></div></div>";
            }

            imgLoadCounter = 0;
           
            function loadListener(event){
                var elm = event.target;
                if($(elm).hasClass('hidden-img')){ // or any other filtering condition
                    imgLoadCounter++;
    
                    if(imgLoadCounter == data[id-1].images.length) {  
                        setTimeout(function(){
                            $(".info-container.work").addClass("show");
                        }, 500);  
                    }
                }
            }

            loadList=loadListener;


            document.addEventListener(
                'load',
                loadListener,
                true // Capture event
            );
            $(".images").html(appendString);


            


            

        }

        function removeWorkInfo(){
            document.removeEventListener("load", loadList, true);      // Succeeds
            $(".info-container").removeClass("show");
            setTimeout(function(){
                $(".image>img").attr("src", "");
                $(".desc-title").html(" ");
                $(".desc-main-details").html(" ");
                $(".desc-details").html(" ");
                $(".desc").html(" ");
                $(".work .images").html(" ");
                $(".info-container").removeClass("active");
                $(".about .right-content").html(" ");
                $("body").removeClass("info");
                $(".pre-cont").removeClass("active");
                
            }, 2100);
        }

        $(".work .go-back").click(function(){
            removeWorkInfo();
        });


        $(".about .go-back").click(function(){
            removeWorkInfo();
            removeAboutInfo();
        });


        function removeAboutInfo(){
            $(".info-container").removeClass("show");


            $(".about .right-content p").map(function(index){
                setTimeout(function(index){
                    $(".about .right-content p:nth-child(" +(index+1)+ ")").attr("style"," animation: fadeOut .5s ease forwards;");
                }, 70*index, index)
            });

            

        }

        function addImagesToAbout(){
            var appendString = ""
            for(var i = 0; i < about.images.length; i++){
            
                appendString += "<div class='item' data-id='"+i+"'><div class='actual-img' style='background: url("+about.images[i]+"); background-position: center center; background-size: cover'><div class='expand'><img class='hidden-img' style='display:none' src='"+about.images[i]+"'><span class='hint'>click to expand</span></div></div></div>";
            }
            $(".about .right-content").append("<div class='images' style='margin-top=3em'>"+appendString+"</div>");
            
        }


        function setValuesForAbout(){
            currentImages = about.images;

            $(".image>img").attr("src", "papuna.jpg");

            $(".info-container").addClass("show");
            setTimeout(function(){
                $(".info-container.about .right-content").append("<p class='about-title'>"+about.title+"</p>");
                for(var i = 0; i<about.desc.length; i++){
                    setTimeout(function(i){
                        $(".info-container.about .right-content").append("<p class='about-desc'>"+about.desc[i]+"</p>");
                    },i*80,i);
                }
                setTimeout(function(){
                    $(".info-container.about .right-content").append("<p class='about-edu'>"+about.eductation+"</p>");
                    for(var j = 0; j<about.edu.length; j++){
                        setTimeout(function(j){
                            $(".info-container.about .right-content").append("<p class='edu-list'>"+about.edu[j]+"</p>");
                        },j*80,j);
                    }
                    setTimeout(function(){
                        $(".info-container.about .right-content").append("<p class='about-exh'>"+about.exhibition+"</p>");
                        for(var k = 0; k<about.exh.length; k++){
                            setTimeout(function(k){
                                $(".info-container.about .right-content").append("<p  class='exh-list'>"+about.exh[k]+"</p>");
                            },k*80, k);
                        }
                        setTimeout(function(){
                            addImagesToAbout();
                        }, about.exh.length*80);
                    }, about.edu.length*80);
                }, about.desc.length*80);
            },80);
            

        }


        $("#about").click(function(){
            if($("body").hasClass("list")){
                $(".info-container.about, .pre-cont").addClass("active");
                setTimeout(function(){
                    setValuesForAbout();
                }, 700);
                $("body").addClass("info");
                EventHandlers.clearDimTimeout();
                $("body").removeClass("dim");
            }  
        })

        $(".main-image").click(function(){
            var id = parseInt($(this).attr("data-id"));

            if($("body").hasClass("list")){
                $(".info-container.work").addClass("active");
                setTimeout(function(){
                    setValuesForInfo(id);
                }, 700);
                $("body").addClass("info");
                EventHandlers.clearDimTimeout();
                $("body").removeClass("dim");
            }  
        });
        
        

        $("#contact").click(function(){
            $(".contact-overlay").show();
            setTimeout(function(){
                $(".contact-overlay, .contact").addClass("active");
                setTimeout(function(){
                    $(".contact").addClass("show");
                }, 700);
            }, 200);

          
            

        });


        $(".contact .exit, .contact-overlay").click(function(){
            $(".contact").removeClass("show");
            setTimeout(function(){
                $(".contact-overlay, .contact").removeClass("active");
                setTimeout(function(){
                    $(".contact-overlay").hide();
                }, 700);
            }, 700);
        })



        //slider handlers
        $(".exit-slider").click(function(){
            $(".slider").removeClass("show");
            setTimeout(function(){
                $(".slider").removeClass("active");
                setTimeout(function(){
                    $(".slider").hide();
                },700);
            },700);
        });


        function updateSliderCounter(index){
            index= currentImageIndex + 1;
            var indextext = index;
            if(index<10) indextext = "0" + index; 
            var sliderSize = currentImages.length;
            if(sliderSize<10) sliderSize = "0" + sliderSize; 
            $(".slider-counter").text(indextext + "/" + sliderSize);
        }


        var currentImageIndex = null;
        $(".right-content").on("click",".images .item", function(){
            currentImageIndex = parseInt($(this).attr("data-id"));
            $("#slider-img").attr("src", currentImages[currentImageIndex]);
            updateSliderCounter(currentImageIndex);
            $(".slider").show();
            setTimeout(function(){
                $(".slider").addClass("active");
                setTimeout(function(){
                    $(".slider").addClass("show");
                },700);
            },200);
        });


        $(".next").click(function(){
            currentImageIndex++;
            if(currentImageIndex==currentImages.length) currentImageIndex = 0;
            $(".slider-image").addClass("hide");
            setTimeout(function(){
                $("#slider-img").attr("src", currentImages[currentImageIndex]);
                setTimeout(function(){
                    $(".slider-image").removeClass("hide");
                    updateSliderCounter(currentImageIndex);
                },50);
            },650);

        });


        $(".previous").click(function(){
            currentImageIndex++;
            if(currentImageIndex<0) currentImageIndex = currentImages.length-1;
            $(".slider-image").addClass("hide");
            setTimeout(function(){
                $("#slider-img").attr("src", currentImages[currentImageIndex]);
                setTimeout(function(){
                    $(".slider-image").removeClass("hide");
                    updateSliderCounter(currentImageIndex);
                },50);
            },650);
        });

    })();





    

   
});




