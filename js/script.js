const characters = [
    {
        name: "Albedo",
        src: "characterIcons/ui-avataricon-albedo.png",
        element: "Geo",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "true",
        guideSrc: "characterGuides/AlbedoGuide.html",
        rarity: 5
    },

    {
        name: "Alhaitham",
        src: "characterIcons/ui-avataricon-alhatham.png",
        element: "Dendro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        guideSrc: "characterGuides/AlhaithamGuide.html",
        rarity: 5
    },
    {
        name: "Aloy",
        src: "characterIcons/ui-avataricon-aloy.png",
        element: "Cryo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        guideSrc: "characterGuides/AloyGuide.html",

        rarity: 5
    },
    {
        name: "Amber",
        src: "characterIcons/ui-avataricon-ambor.png",
        element: "Pyro",
        roles: ["Support"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Arataki Itto",
        src: "characterIcons/ui-avataricon-itto.png",
        element: "Geo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Arlecchino",
        src: "characterIcons/ui-avatarIcon-arlecchino.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Baizhu",
        src: "characterIcons/ui-avataricon-baizhuer.png",
        element: "Dendro",
        roles: [ "Healer", "Support", "Off-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Barbara",
        src: "characterIcons/ui-avataricon-barbara.png",
        element: "Hydro",
        roles: ["Healer", "Support"],
        guideCompleted: "false",
        rarity: 5
    },

    {
        name: "Beidou",
        src: "characterIcons/ui-avataricon-beidou.png",
        element: "Electro",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Bennett",
        src: "characterIcons/ui-avataricon-bennett.png",
        element: "Pyro",
        roles: ["Healer", "Support"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Candace",
        src: "characterIcons/ui-avataricon-candace.png",
        element: "Hydro",
        roles: ["Support", "Off-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Charlotte",
        src: "characterIcons/ui-avataricon-charlotte.png",
        element: "Cryo",
        roles: ["Healer", "Support"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Chevreuse",
        src: "characterIcons/Chevreuse_Icon.webp",
        element: "Pyro",
        roles: ["Healer", "Support"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Chiori",
        src: "characterIcons/Chiori_Icon.webp",
        element: "Geo",
        roles: ["Healer", "Support"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Chongyun",
        src: "characterIcons/ui-avataricon-chongyun.png",
        element: "Cryo",
        roles: ["Support"],
        guideCompleted: "false",
        rarity: 4

    },
    {
        name: "Collei",
        src: "characterIcons/ui-avataricon-collei.png",
        element: "Dendro",
        roles: ["Support", "Off-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Cyno",
        src: "characterIcons/ui-avataricon-cyno.png",
        element: "Electro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Dehya",
        src: "characterIcons/ui-avataricon-barbara.png",
        element: "Hydro",
        roles: ["Support", "DPS", "On-Field", "Off-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Diluc",
        src: "characterIcons/ui-avataricon-diluc.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Diona",
        src: "characterIcons/ui-avataricon-diona.png",
        element: "Cryo",
        roles: ["Healer", "Shielder", "Support"],
        guideCompleted: "false",
        rarity: 4
    },

    {
        name: "Dori",
        src: "characterIcons/ui-avataricon-dori.png",
        element: "Electro",
        roles: ["Healer", "Support"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Eula",
        src: "characterIcons/ui-avataricon-eula.png",
        element: "Cryo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Faruzan",
        src: "characterIcons/ui-avataricon-faruzan.png",
        element: "Anemo",
        roles: ["Support", "Off-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Fischl",
        src: "characterIcons/ui-avataricon-fischl.png",
        element: "Electro",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Freminet",
        src: "characterIcons/ui-avataricon-freminet.png",
        element: "Cryo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Furina",
        src: "characterIcons/ui-avataricon-furina.png",
        element: "Hydro",
        roles: ["Support", "DPS", "Off-Field", "Healer"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Gaming",
        src: "characterIcons/UI_AvatarIcon_Gaming.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Ganyu",
        src: "characterIcons/ui-avataricon-ganyu.png",
        element: "Cryo",
        roles: ["DPS", "On-Field", "Off-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Gorou",
        src: "characterIcons/ui-avataricon-gorou.png",
        element: "Geo",
        roles: ["Support"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Hutao",
        src: "characterIcons/ui-avataricon-hutao.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Jean",
        src: "characterIcons/ui-avataricon-qin.png",
        element: "Anemo",
        roles: ["Healer", "Support"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Kazuha",
        src: "characterIcons/ui-avataricon-kazuha.png",
        element: "Anemo",
        roles: ["Grouper", "Support"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Kaeya",
        src: "characterIcons/ui-avataricon-kaeya.png",
        element: "Cryo",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Ayaka",
        src: "characterIcons/ui-avataricon-ayaka.png",
        element: "Cryo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Ayato",
        src: "characterIcons/ui-avataricon-ayato.png",
        element: "Hydro",
        roles: ["DPS", "On-Field", "Off-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Kaveh",
        src: "characterIcons/ui-avataricon-kaveh.png",
        element: "Dendro",
        roles: ["Support", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Keqing",
        src: "characterIcons/ui-avataricon-keqing.png",
        element: "Electro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Kirara",
        src: "characterIcons/ui-avataricon-momoka.png",
        element: "Dendro",
        roles: ["Shielder", "Support"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Klee",
        src: "characterIcons/ui-avataricon-klee.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Kujou Sara",
        src: "characterIcons/ui-avataricon-sara.png",
        element: "Electro",
        roles: ["Support"],
        guideCompleted: "false",
        rarity: 4
    },
   
    {
        name: "Kuki Shinobu",
        src: "characterIcons/ui-avataricon-shinobu.png",
        element: "Electro",
        roles: ["DPS", "Healer", "Support", "Off-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Layla",
        src: "characterIcons/ui-avataricon-layla.png",
        element: "Cryo",
        roles: ["Shielder", "Support"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Lisa",
        src: "characterIcons/ui-avataricon-lisa.png",
        element: "Electro",
        roles: ["Support", "Off-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Lynette",
        src: "characterIcons/ui-avataricon-linette.png",
        element: "Anemo",
        roles: ["Support"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Lyney",
        src: "characterIcons/ui-avataricon-liney.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Mika",
        src: "characterIcons/ui-avataricon-mika.png",
        element: "Cryo",
        roles: ["Healer", "Support"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Mona",
        src: "characterIcons/ui-avataricon-mona.png",
        element: "Hydro",
        roles: ["Support"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Nahida",
        src: "characterIcons/ui-avataricon-nahida.png",
        element: "Dendro",
        roles: ["DPS", "Support", "On-Field", "Off-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Navia",
        src: "characterIcons/Navia_Icon.webp",
        element: "Geo",
        roles: ["On-Field", "DPS", "Off-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Neuvillette",
        src: "characterIcons/ui-avataricon-neuvillette.png",
        element: "Hydro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Nilou",
        src: "characterIcons/ui-avataricon-nilou.png",
        element: "Hydro",
        roles: ["Support"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Ningguang",
        src: "characterIcons/ui-avataricon-ningguang.png",
        element: "Geo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Noelle",
        src: "characterIcons/ui-avataricon-noel.png",
        element: "Geo",
        roles: ["Sheilder",  "Healer", "DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Qiqi",
        src: "characterIcons/ui-avataricon-qiqi.png",
        element: "Cryo",
        roles: ["Healer"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Raiden Shogun",
        src: "characterIcons/ui-avataricon-shougun.png",
        element: "Electro",
        roles: ["DPS", "Support",  "On-Field", "Off-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Razor",
        src: "characterIcons/ui-avataricon-razor.png",
        element: "Electro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Rosaria",
        src: "characterIcons/ui-avataricon-rosaria.png",
        element: "Cryo",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Sangonomia Kokomi",
        src: "characterIcons/ui-avataricon-kokomi.png",
        element: "Hydro",
        roles: ["Healer", "DPS", "Support"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Sayu",
        src: "characterIcons/ui-avataricon-sayu.png",
        element: "Anemo",
        roles: ["Healer"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Shenhe",
        src: "characterIcons/ui-avataricon-shenhe.png",
        element: "Cryo",
        roles: ["Support"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Heizou",
        src: "characterIcons/ui-avataricon-heizo.png",
        element: "Anemo",
        roles: ["DPS", "Support", "On-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Sucrose",
        src: "characterIcons/ui-avataricon-sucrose.png",
        element: "Anemo",
        roles: ["Support", "Grouper"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Tartaglia",
        src: "characterIcons/ui-avataricon-tartaglia.png",
        element: "Hydro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Thoma",
        src: "characterIcons/ui-avataricon-tohma.png",
        element: "Pyro",
        roles: ["Shielder" , "Support", "Off-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Anemo Traveler",
        src: "characterIcons/Aether_Icon.webp",
        element: "Anemo",
        roles: [ "Grouper", "Support"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Geo Traveler",
        src: "characterIcons/Aether_Icon.webp",
        element: "Geo",
        roles: ["DPS", "Support"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Electro Traveler",
        src: "characterIcons/Aether_Icon.webp",
        element: "Electro",
        roles: ["Support"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Dendro Traveler",
        src: "characterIcons/Aether_Icon.webp",
        element: "Dendro",
        roles: ["Support", "Off-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Hydro Traveler",
        src: "characterIcons/Aether_Icon.webp",
        element: "Hydro",
        roles: ["DPS"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Venti",
        src: "characterIcons/ui-avataricon-venti.png",
        element: "Anemo",
        roles: ["Grouper", "Support"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Wanderer",
        src: "characterIcons/ui-avataricon-wanderer.png",
        element: "Anemo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Wriothesley",
        src: "characterIcons/ui-avataricon-wriothesley.png",
        element: "Cryo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Xiangling",
        src: "characterIcons/ui-avataricon-xiangling.png",
        element: "Pyro",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Xianyun",
        src: "characterIcons/UI_AvatarIcon_Liuyun.png",
        element: "Anemo",
        roles: ["Support", "Healer"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Xiao",
        src: "characterIcons/ui-avataricon-xiao.png",
        element: "Anemo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Xingqiu",
        src: "characterIcons/ui-avataricon-xingqiu.png",
        element: "Hydro",
        roles: ["DPS", "Support","Off-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Xinyan",
        src: "characterIcons/ui-avataricon-xinyan.png",
        element: "Pyro",
        roles: ["Shield", "Support", "DPS"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Yae Miko",
        src: "characterIcons/ui-avataricon-yae.png",
        element: "Electro",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Yanfei",
        src: "characterIcons/ui-avataricon-feiyan.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 4

    },
    {
        name: "Yaoyao",
        src: "characterIcons/ui-avataricon-yaoyao.png",
        element: "Dendro",
        roles: ["Healer", "Support", "Off-Field"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Yelan",
        src: "characterIcons/ui-avataricon-yelan.png",
        element: "Hydro",
        roles: ["DPS", "Support", "Off-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Yoimiya",
        src: "characterIcons/ui-avataricon-yoimiya.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false",
        rarity: 5
    },
    {
        name: "Yun Jin",
        src: "characterIcons/ui-avataricon-yunjin.png",
        element: "Geo",
        roles: ["Support"],
        guideCompleted: "false",
        rarity: 4
    },
    {
        name: "Zhongli",
        src: "characterIcons/ui-avataricon-zhongli.png",
        element: "Geo",
        roles: ["Shield", "Support"],
        guideCompleted: "false",
        rarity: 5
    }, 
];

document.addEventListener("DOMContentLoaded", () => {
    buildTable();
    
});


function buildTable(){
    const grid = document.getElementById("characterCardsGrid");
    
    for(let i = 0; i < characters.length; i++){
        
        const character = characters[i];
        if(character.guideCompleted == "true"){
            const card = document.createElement("a");
            const name = document.createElement("div");
            const image = document.createElement("img")
            const element = document.createElement("img");

            card.style = "display: flex; flex-direction: column; position: relative; font-family:sans-serif; text-align:center; justify-content: center; width: 7rem;"
            card.setAttribute("href", character.guideSrc);
            card.setAttribute("id", character.name);


            element.setAttribute("src", "elementIcons/" + character.element.toLowerCase() +".png");
            element.style = "position: absolute; top:  0%; left: 0%; width: 2rem;"

            name.style = "width: 100%; text-align: center; font-size: 1.3rem;  color:black; font-weight: 500;"
            //name.classList.add("bg-" + character.element.toLowerCase());
            name.innerHTML = character.name;

            image.setAttribute("src", character.src);
            image.style= "display: flex; justify-content: center; width: 100%;"
            
            if(character.rarity == 5){
                image.style.background = "linear-gradient(135deg, #f4d03f, #b9842f)";
            } else{
                image.style.background = "linear-gradient(135deg, #9b59b6, #8e44ad)";
            }
            image.addEventListener("mouseover", function () {
                image.style.borderColor = "gold";
            });
            image.addEventListener("mouseout", function () {
                image.style.borderColor = "black";
            });
            //card.appendChild(name);
            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(element);

            







            grid.appendChild(card);
        }
    }
}
//SEARCH FUNCTION
const pyroButton = document.getElementById("pyroButton");
let pyroClicked = false;
const hydroButton = document.getElementById("hydroButton");
let hydroClicked = false;
const electroButton = document.getElementById("electroButton");
let electroClicked = false;
const anemoButton = document.getElementById("anemoButton");
let anemoClicked = false;
const dendroButton = document.getElementById("dendroButton");
let dendroClicked = false;
const geoButton = document.getElementById("geoButton");
let geoClicked = false;
const cryoButton = document.getElementById("cryoButton");
let cryoClicked = false;

function toggleAll(inQuestion){
    for(i = 0; i < elements.length; i++ ){

    }
}
pyroButton.addEventListener("click", function(){
    
    pyroButton.classList.toggle("bg-gray-200");
    if(pyroClicked = false){
        pyroClicked = true;
        cryoClicked = false;
        dendroclicked = false;
        electroClicked = false;
        geoClicked = false;
        hydroClicked = false;
        anemoClicked = false
    }else{
        pyroClicked = false;
    }
    
});
anemoButton.addEventListener("click", function(){
    
    anemoButton.classList.toggle("bg-gray-200");
    if(anemoClicked = false){
        pyroClicked = false;
        cryoClicked = false;
        dendroclicked = false;
        electroClicked = false;
        geoClicked = false;
        hydroClicked = true;
        anemoClicked = false
    }else{
        anemoClicked = false;
    }
    
});
hydroButton.addEventListener("click", function(){
    hydroButton.classList.toggle("bg-gray-200");
    if(hydroClicked = false){
        pyroClicked = false;
        cryoClicked = false;
        dendroclicked = false;
        electroClicked = false;
        geoClicked = false;
        hydroClicked = true;
        anemoClicked = false
        
    }else{
        hydroClicked = false;
    }
    
});
geoButton.addEventListener("click", function(){
    geoButton.classList.toggle("bg-gray-200");
    if(geoClicked = false){
        pyroClicked = false;
        cryoClicked = false;
        dendroclicked = false;
        electroClicked = false;
        geoClicked = true;
        hydroClicked = false;
        anemoClicked = false
    }else{
        geoClicked = false;
    }
    
});
electroButton.addEventListener("click", function(){
    electroButton.classList.toggle("bg-gray-200");
    if(electroClicked = false){
        pyroClicked = false;
        cryoClicked = false;
        dendroclicked = false;
        electroClicked = true;
        geoClicked = false;
        hydroClicked = false;
        anemoClicked = false
    }else{
        electroClicked = false;
    }
    
});
cryoButton.addEventListener("click", function(){
    cryoButton.classList.toggle("bg-gray-200");
    if(cryoClicked = false){
        pyroClicked = false;
        cryoClicked = true;
        dendroclicked = false;
        electroClicked = false;
        geoClicked = false;
        hydroClicked = false;
        anemoClicked = false
    }else{
        cryoClicked = false;
    }
    
});
dendroButton.addEventListener("click", function(){
    dendroButton.classList.toggle("bg-gray-200");
    if(dendroClicked = false){
        pyroClicked = false;
        cryoClicked = false;
        dendroclicked = true;
        electroClicked = false;
        geoClicked = false;
        hydroClicked = false;
        anemoClicked = false

    }else{
        dendroClicked = false;
    }
    
});
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", () =>{
    const text = document.getElementById("searchBar").value;
    for(let i = 0; i < characters.length; i++){
        if(characters[i].name.toLowerCase().includes(text.toLowerCase())){
            //console.log(text);
            document.getElementById(characters[i].name).style.display = "flex";
        }else{
            document.getElementById(characters[i].name).style.display = "none";

        }
    }
   
});












