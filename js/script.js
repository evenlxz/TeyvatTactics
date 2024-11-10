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
        guideCompleted: "true",
        guideSrc: "characterGuides/AloyGuide.html",

        rarity: 5
    },
    {
        name: "Amber",
        src: "characterIcons/ui-avataricon-ambor.png",
        element: "Pyro",
        roles: ["Support"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Arataki Itto",
        src: "characterIcons/ui-avataricon-itto.png",
        element: "Geo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Arlecchino",
        src: "characterIcons/ui-avatarIcon-arlecchino.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Baizhu",
        src: "characterIcons/ui-avataricon-baizhuer.png",
        element: "Dendro",
        roles: [ "Healer", "Support", "Off-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Barbara",
        src: "characterIcons/ui-avataricon-barbara.png",
        element: "Hydro",
        roles: ["Healer", "Support"],
        guideCompleted: "true",
        rarity: 5
    },

    {
        name: "Beidou",
        src: "characterIcons/ui-avataricon-beidou.png",
        element: "Electro",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Bennett",
        src: "characterIcons/ui-avataricon-bennett.png",
        element: "Pyro",
        roles: ["Healer", "Support"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Candace",
        src: "characterIcons/ui-avataricon-candace.png",
        element: "Hydro",
        roles: ["Support", "Off-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Charlotte",
        src: "characterIcons/ui-avataricon-charlotte.png",
        element: "Cryo",
        roles: ["Healer", "Support"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Chevreuse",
        src: "characterIcons/Chevreuse_Icon.webp",
        element: "Pyro",
        roles: ["Healer", "Support"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Chiori",
        src: "characterIcons/Chiori_Icon.webp",
        element: "Geo",
        roles: ["Healer", "Support"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Chongyun",
        src: "characterIcons/ui-avataricon-chongyun.png",
        element: "Cryo",
        roles: ["Support"],
        guideCompleted: "true",
        rarity: 4

    },
    {
        name: "Collei",
        src: "characterIcons/ui-avataricon-collei.png",
        element: "Dendro",
        roles: ["Support", "Off-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Cyno",
        src: "characterIcons/ui-avataricon-cyno.png",
        element: "Electro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Dehya",
        src: "characterIcons/ui-avataricon-barbara.png",
        element: "Hydro",
        roles: ["Support", "DPS", "On-Field", "Off-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Diluc",
        src: "characterIcons/ui-avataricon-diluc.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Diona",
        src: "characterIcons/ui-avataricon-diona.png",
        element: "Cryo",
        roles: ["Healer", "Shielder", "Support"],
        guideCompleted: "true",
        rarity: 4
    },

    {
        name: "Dori",
        src: "characterIcons/ui-avataricon-dori.png",
        element: "Electro",
        roles: ["Healer", "Support"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Eula",
        src: "characterIcons/ui-avataricon-eula.png",
        element: "Cryo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Faruzan",
        src: "characterIcons/ui-avataricon-faruzan.png",
        element: "Anemo",
        roles: ["Support", "Off-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Fischl",
        src: "characterIcons/ui-avataricon-fischl.png",
        element: "Electro",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Freminet",
        src: "characterIcons/ui-avataricon-freminet.png",
        element: "Cryo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Furina",
        src: "characterIcons/ui-avataricon-furina.png",
        element: "Hydro",
        roles: ["Support", "DPS", "Off-Field", "Healer"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Gaming",
        src: "characterIcons/UI_AvatarIcon_Gaming.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Ganyu",
        src: "characterIcons/ui-avataricon-ganyu.png",
        element: "Cryo",
        roles: ["DPS", "On-Field", "Off-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Gorou",
        src: "characterIcons/ui-avataricon-gorou.png",
        element: "Geo",
        roles: ["Support"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Hutao",
        src: "characterIcons/ui-avataricon-hutao.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Jean",
        src: "characterIcons/ui-avataricon-qin.png",
        element: "Anemo",
        roles: ["Healer", "Support"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Kazuha",
        src: "characterIcons/ui-avataricon-kazuha.png",
        element: "Anemo",
        roles: ["Grouper", "Support"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Kaeya",
        src: "characterIcons/ui-avataricon-kaeya.png",
        element: "Cryo",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Ayaka",
        src: "characterIcons/ui-avataricon-ayaka.png",
        element: "Cryo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Ayato",
        src: "characterIcons/ui-avataricon-ayato.png",
        element: "Hydro",
        roles: ["DPS", "On-Field", "Off-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Kaveh",
        src: "characterIcons/ui-avataricon-kaveh.png",
        element: "Dendro",
        roles: ["Support", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Keqing",
        src: "characterIcons/ui-avataricon-keqing.png",
        element: "Electro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Kirara",
        src: "characterIcons/ui-avataricon-momoka.png",
        element: "Dendro",
        roles: ["Shielder", "Support"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Klee",
        src: "characterIcons/ui-avataricon-klee.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Kujou Sara",
        src: "characterIcons/ui-avataricon-sara.png",
        element: "Electro",
        roles: ["Support"],
        guideCompleted: "true",
        rarity: 4
    },
   
    {
        name: "Kuki Shinobu",
        src: "characterIcons/ui-avataricon-shinobu.png",
        element: "Electro",
        roles: ["DPS", "Healer", "Support", "Off-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Layla",
        src: "characterIcons/ui-avataricon-layla.png",
        element: "Cryo",
        roles: ["Shielder", "Support"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Lisa",
        src: "characterIcons/ui-avataricon-lisa.png",
        element: "Electro",
        roles: ["Support", "Off-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Lynette",
        src: "characterIcons/ui-avataricon-linette.png",
        element: "Anemo",
        roles: ["Support"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Lyney",
        src: "characterIcons/ui-avataricon-liney.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Mika",
        src: "characterIcons/ui-avataricon-mika.png",
        element: "Cryo",
        roles: ["Healer", "Support"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Mona",
        src: "characterIcons/ui-avataricon-mona.png",
        element: "Hydro",
        roles: ["Support"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Nahida",
        src: "characterIcons/ui-avataricon-nahida.png",
        element: "Dendro",
        roles: ["DPS", "Support", "On-Field", "Off-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Navia",
        src: "characterIcons/Navia_Icon.webp",
        element: "Geo",
        roles: ["On-Field", "DPS", "Off-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Neuvillette",
        src: "characterIcons/ui-avataricon-neuvillette.png",
        element: "Hydro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Nilou",
        src: "characterIcons/ui-avataricon-nilou.png",
        element: "Hydro",
        roles: ["Support"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Ningguang",
        src: "characterIcons/ui-avataricon-ningguang.png",
        element: "Geo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Noelle",
        src: "characterIcons/ui-avataricon-noel.png",
        element: "Geo",
        roles: ["Sheilder",  "Healer", "DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Qiqi",
        src: "characterIcons/ui-avataricon-qiqi.png",
        element: "Cryo",
        roles: ["Healer"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Raiden Shogun",
        src: "characterIcons/ui-avataricon-shougun.png",
        element: "Electro",
        roles: ["DPS", "Support",  "On-Field", "Off-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Razor",
        src: "characterIcons/ui-avataricon-razor.png",
        element: "Electro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Rosaria",
        src: "characterIcons/ui-avataricon-rosaria.png",
        element: "Cryo",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Sangonomia Kokomi",
        src: "characterIcons/ui-avataricon-kokomi.png",
        element: "Hydro",
        roles: ["Healer", "DPS", "Support"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Sayu",
        src: "characterIcons/ui-avataricon-sayu.png",
        element: "Anemo",
        roles: ["Healer"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Shenhe",
        src: "characterIcons/ui-avataricon-shenhe.png",
        element: "Cryo",
        roles: ["Support"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Heizou",
        src: "characterIcons/ui-avataricon-heizo.png",
        element: "Anemo",
        roles: ["DPS", "Support", "On-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Sucrose",
        src: "characterIcons/ui-avataricon-sucrose.png",
        element: "Anemo",
        roles: ["Support", "Grouper"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Tartaglia",
        src: "characterIcons/ui-avataricon-tartaglia.png",
        element: "Hydro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Thoma",
        src: "characterIcons/ui-avataricon-tohma.png",
        element: "Pyro",
        roles: ["Shielder" , "Support", "Off-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Anemo Traveler",
        src: "characterIcons/Aether_Icon.webp",
        element: "Anemo",
        roles: [ "Grouper", "Support"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Geo Traveler",
        src: "characterIcons/Aether_Icon.webp",
        element: "Geo",
        roles: ["DPS", "Support"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Electro Traveler",
        src: "characterIcons/Aether_Icon.webp",
        element: "Electro",
        roles: ["Support"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Dendro Traveler",
        src: "characterIcons/Aether_Icon.webp",
        element: "Dendro",
        roles: ["Support", "Off-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Hydro Traveler",
        src: "characterIcons/Aether_Icon.webp",
        element: "Hydro",
        roles: ["DPS"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Venti",
        src: "characterIcons/ui-avataricon-venti.png",
        element: "Anemo",
        roles: ["Grouper", "Support"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Wanderer",
        src: "characterIcons/ui-avataricon-wanderer.png",
        element: "Anemo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Wriothesley",
        src: "characterIcons/ui-avataricon-wriothesley.png",
        element: "Cryo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Xiangling",
        src: "characterIcons/ui-avataricon-xiangling.png",
        element: "Pyro",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Xianyun",
        src: "characterIcons/UI_AvatarIcon_Liuyun.png",
        element: "Anemo",
        roles: ["Support", "Healer"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Xiao",
        src: "characterIcons/ui-avataricon-xiao.png",
        element: "Anemo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Xingqiu",
        src: "characterIcons/ui-avataricon-xingqiu.png",
        element: "Hydro",
        roles: ["DPS", "Support","Off-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Xinyan",
        src: "characterIcons/ui-avataricon-xinyan.png",
        element: "Pyro",
        roles: ["Shield", "Support", "DPS"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Yae Miko",
        src: "characterIcons/ui-avataricon-yae.png",
        element: "Electro",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Yanfei",
        src: "characterIcons/ui-avataricon-feiyan.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 4

    },
    {
        name: "Yaoyao",
        src: "characterIcons/ui-avataricon-yaoyao.png",
        element: "Dendro",
        roles: ["Healer", "Support", "Off-Field"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Yelan",
        src: "characterIcons/ui-avataricon-yelan.png",
        element: "Hydro",
        roles: ["DPS", "Support", "Off-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Yoimiya",
        src: "characterIcons/ui-avataricon-yoimiya.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true",
        rarity: 5
    },
    {
        name: "Yun Jin",
        src: "characterIcons/ui-avataricon-yunjin.png",
        element: "Geo",
        roles: ["Support"],
        guideCompleted: "true",
        rarity: 4
    },
    {
        name: "Zhongli",
        src: "characterIcons/ui-avataricon-zhongli.png",
        element: "Geo",
        roles: ["Shield", "Support"],
        guideCompleted: "true",
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

            card.style = "display: flex; flex-direction: column; position: relative; font-family:sans-serif; text-align:center; border-radius: 1rem; justify-content: center; margin: 0.7rem; width: 6rem;"
            card.setAttribute("href", character.guideSrc);
            card.setAttribute("id", character.name);


            element.setAttribute("src", "elementIcons/" + character.element.toLowerCase() +".png");
            element.style = "position: absolute; top:  0%; left: 0%; width: 2rem;"

            name.style = "width: 100%; text-align: center; font-size: 1.0rem;  color:black; font-weight: 700;"
            //name.classList.add("bg-" + character.element.toLowerCase());
            name.innerHTML = character.name;

            image.setAttribute("src", character.src);
            image.style= "display: flex; justify-content: center; width: 100%; border-radius: 1rem;"
            
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

let activeElement = null;
const elementButtons = [
    document.getElementById("pyroButton"),
    document.getElementById("hydroButton"),
    document.getElementById("electroButton"),
    document.getElementById("anemoButton"),
    document.getElementById("dendroButton"),
    document.getElementById("geoButton"),
    document.getElementById("cryoButton")
];

elementButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        elementButtons.forEach(function(btn) {
            btn.classList.remove("bg-gray-200");
        });
        if(button.getAttribute("data-element") == activeElement){
            activeElement = null;
            button.classList.remove("bg-gray-200")
            sort();

        } else{
            button.classList.add("bg-gray-200");
            activeElement = button.getAttribute("data-element");
            //alert(activeElement);
            sort();

        }
    });
});



const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", () =>{
    sort();
});

function sort(){
    const text = document.getElementById("searchBar").value.toLowerCase();
    for(let i = 0; i < characters.length; i++){
        const element = characters[i].element.toLowerCase();
        const name = characters[i].name.toLowerCase();

        if(name.includes(text.toLowerCase()) && (element == activeElement || activeElement == null)){
            //console.log(text);
            document.getElementById(characters[i].name).style.display = "flex";
        }else{
            document.getElementById(characters[i].name).style.display = "none";

        }
    }
}












