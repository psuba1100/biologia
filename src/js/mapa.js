import { SmartObject } from "./interactivly.js";

let mapa = new SmartObject("mapa")

mapa.createClickingRegions()
    .addClickableArea(0, 0, 217, 151, function(){
        window.location.href = "./src/pages/cajovykutik.html"
    })
    .addClickableArea(14, 151, 231, 302, function(){
        window.location.href = "./src/pages/sochahrdinov.html"
    })
    .addClickableArea(28, 302, 394, 602, function(){
        window.location.href = "./src/pages/chatovadedinka.html"
    })
    .addClickableArea(217, 0, 669, 126, function(){
        window.location.href = "./src/pages/alejpokoja.html"
    })
    .addClickableArea(274, 126, 640, 263, function(){
        window.location.href = "./src/pages/hravyostrov.html"
    })
    .addClickableArea(429, 311, 624, 459, function(){
        window.location.href = "./src/pages/srdceparku.html"
    })
    .addClickableArea(581, 479, 776, 602, function(){
        window.location.href = "./src/pages/bicyklovastojanka.html"
    })
    .addClickableArea(669, 0, 1035, 243, function(){
        window.location.href = "./src/pages/zelenytravnik.html"
    })
    .addClickableArea(776, 316, 1009, 559, function(){
        window.location.href = "./src/pages/vrboveudolie.html"
    })