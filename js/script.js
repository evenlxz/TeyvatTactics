const characters = [
    {
        name: "Albedo",
        src: "characterIcons/ui-avataricon-albedo.png",
        element: "Geo",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "true"
    },

    {
        name: "Alhaitham",
        src: "characterIcons/ui-avataricon-alhatham.png",
        element: "Dendro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "true"
    },
    {
        name: "Aloy",
        src: "characterIcons/ui-avataricon-aloy.png",
        element: "Cryo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Amber",
        src: "characterIcons/ui-avataricon-ambor.png",
        element: "Pyro",
        roles: ["Support"],
        guideCompleted: "false"
    },
    {
        name: "Arataki Itto",
        src: "characterIcons/ui-avataricon-itto.png",
        element: "Geo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Arlecchino",
        src: "characterIcons/ui-avatarIcon-arlecchino.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Baizhu",
        src: "characterIcons/ui-avataricon-baizhuer.png",
        element: "Dendro",
        roles: [ "Healer", "Support", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Barbara",
        src: "characterIcons/ui-avataricon-barbara.png",
        element: "Hydro",
        roles: ["Healer", "Support"],
        guideCompleted: "false"
    },
    {
        name: "Beidou",
        src: "characterIcons/ui-avataricon-beidou.png",
        element: "Electro",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Bennett",
        src: "characterIcons/ui-avataricon-bennett.png",
        element: "Pyro",
        roles: ["Healer", "Support"],
        guideCompleted: "false"
    },
    {
        name: "Candace",
        src: "characterIcons/ui-avataricon-candace.png",
        element: "Hydro",
        roles: ["Support", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Charlotte",
        src: "characterIcons/ui-avataricon-charlotte.png",
        element: "Cryo",
        roles: ["Healer", "Support"],
        guideCompleted: "false"
    },
    {
        name: "Chevreuse",
        src: "characterIcons/Chevreuse_Icon.webp",
        element: "Pyro",
        roles: ["Healer", "Support"],
        guideCompleted: "false"
    },
    {
        name: "Chiori",
        src: "characterIcons/Chiori_Icon.webp",
        element: "Geo",
        roles: ["Healer", "Support"],
        guideCompleted: "false"
    },
    {
        name: "Chongyun",
        src: "characterIcons/ui-avataricon-chongyun.png",
        element: "Cryo",
        roles: ["Support"],

    },
    {
        name: "Collei",
        src: "characterIcons/ui-avataricon-collei.png",
        element: "Dendro",
        roles: ["Support", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Cyno",
        src: "characterIcons/ui-avataricon-cyno.png",
        element: "Electro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Dehya",
        src: "characterIcons/ui-avataricon-barbara.png",
        element: "Hydro",
        roles: ["Support", "DPS", "On-Field", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Diluc",
        src: "characterIcons/ui-avataricon-diluc.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Diona",
        src: "characterIcons/ui-avataricon-diona.png",
        element: "Cryo",
        roles: ["Healer", "Shielder", "Support"],
        guideCompleted: "false"
    },

    {
        name: "Dori",
        src: "characterIcons/ui-avataricon-dori.png",
        element: "Electro",
        roles: ["Healer", "Support"],
        guideCompleted: "false"
    },
    {
        name: "Eula",
        src: "characterIcons/ui-avataricon-eula.png",
        element: "Cryo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Faruzan",
        src: "characterIcons/ui-avataricon-faruzan.png",
        element: "Anemo",
        roles: ["Support", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Fischl",
        src: "characterIcons/ui-avataricon-fischl.png",
        element: "Electro",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Freminet",
        src: "characterIcons/ui-avataricon-freminet.png",
        element: "Cryo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Furina",
        src: "characterIcons/ui-avataricon-furina.png",
        element: "Hydro",
        roles: ["Support", "DPS", "Off-Field", "Healer"],
        guideCompleted: "false"
    },
    {
        name: "Gaming",
        src: "characterIcons/UI_AvatarIcon_Gaming.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Ganyu",
        src: "characterIcons/ui-avataricon-ganyu.png",
        element: "Cryo",
        roles: ["DPS", "On-Field", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Gorou",
        src: "characterIcons/ui-avataricon-gorou.png",
        element: "Geo",
        roles: ["Support"],
        guideCompleted: "false"
    },
    {
        name: "Hutao",
        src: "characterIcons/ui-avataricon-hutao.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Jean",
        src: "characterIcons/ui-avataricon-qin.png",
        element: "Anemo",
        roles: ["Healer", "Support"],
        guideCompleted: "false"
    },
    {
        name: "Kazuha",
        src: "characterIcons/ui-avataricon-kazuha.png",
        element: "Anemo",
        roles: ["Grouper", "Support"],
        guideCompleted: "false"
    },
    {
        name: "Kaeya",
        src: "characterIcons/ui-avataricon-kaeya.png",
        element: "Cryo",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Ayaka",
        src: "characterIcons/ui-avataricon-ayaka.png",
        element: "Cryo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Ayato",
        src: "characterIcons/ui-avataricon-ayato.png",
        element: "Hydro",
        roles: ["DPS", "On-Field", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Kaveh",
        src: "characterIcons/ui-avataricon-kaveh.png",
        element: "Dendro",
        roles: ["Support", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Keqing",
        src: "characterIcons/ui-avataricon-keqing.png",
        element: "Electro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Kirara",
        src: "characterIcons/ui-avataricon-momoka.png",
        element: "Dendro",
        roles: ["Shielder", "Support"],
        guideCompleted: "false"
    },
    {
        name: "Klee",
        src: "characterIcons/ui-avataricon-klee.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Kujou Sara",
        src: "characterIcons/ui-avataricon-sara.png",
        element: "Electro",
        roles: ["Support"],
        guideCompleted: "false"
    },
   
    {
        name: "Kuki Shinobu",
        src: "characterIcons/ui-avataricon-shinobu.png",
        element: "Electro",
        roles: ["DPS", "Healer", "Support", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Layla",
        src: "characterIcons/ui-avataricon-layla.png",
        element: "Cryo",
        roles: ["Shielder", "Support"],
        guideCompleted: "false"
    },
    {
        name: "Lisa",
        src: "characterIcons/ui-avataricon-lisa.png",
        element: "Electro",
        roles: ["Support", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Lynette",
        src: "characterIcons/ui-avataricon-linette.png",
        element: "Anemo",
        roles: ["Support"],
        guideCompleted: "false"
    },
    {
        name: "Lyney",
        src: "characterIcons/ui-avataricon-liney.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Mika",
        src: "characterIcons/ui-avataricon-mika.png",
        element: "Cryo",
        roles: ["Healer", "Support"],
        guideCompleted: "false"
    },
    {
        name: "Mona",
        src: "characterIcons/ui-avataricon-mona.png",
        element: "Hydro",
        roles: ["Support"],
        guideCompleted: "false"
    },
    {
        name: "Nahida",
        src: "characterIcons/ui-avataricon-nahida.png",
        element: "Dendro",
        roles: ["DPS", "Support", "On-Field", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Navia",
        src: "characterIcons/Navia_Icon.webp",
        element: "Geo",
        roles: ["On-Field", "DPS", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Neuvillette",
        src: "characterIcons/ui-avataricon-neuvillette.png",
        element: "Hydro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Nilou",
        src: "characterIcons/ui-avataricon-nilou.png",
        element: "Hydro",
        roles: ["Support"],
        guideCompleted: "false"
    },
    {
        name: "Ningguang",
        src: "characterIcons/ui-avataricon-ningguang.png",
        element: "Geo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Noelle",
        src: "characterIcons/ui-avataricon-noel.png",
        element: "Geo",
        roles: ["Sheilder",  "Healer", "DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Qiqi",
        src: "characterIcons/ui-avataricon-qiqi.png",
        element: "Cryo",
        roles: ["Healer"],
        guideCompleted: "false"
    },
    {
        name: "Raiden Shogun",
        src: "characterIcons/ui-avataricon-shougun.png",
        element: "Electro",
        roles: ["DPS", "Support",  "On-Field", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Razor",
        src: "characterIcons/ui-avataricon-razor.png",
        element: "Electro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Rosaria",
        src: "characterIcons/ui-avataricon-rosaria.png",
        element: "Cryo",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Sangonomia Kokomi",
        src: "characterIcons/ui-avataricon-kokomi.png",
        element: "Hydro",
        roles: ["Healer", "DPS", "Support"],
        guideCompleted: "false"
    },
    {
        name: "Sayu",
        src: "characterIcons/ui-avataricon-sayu.png",
        element: "Anemo",
        roles: ["Healer"],
        guideCompleted: "false"
    },
    {
        name: "Shenhe",
        src: "characterIcons/ui-avataricon-shenhe.png",
        element: "Cryo",
        roles: ["Support"],
        guideCompleted: "false"
    },
    {
        name: "Heizou",
        src: "characterIcons/ui-avataricon-heizo.png",
        element: "Anemo",
        roles: ["DPS", "Support", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Sucrose",
        src: "characterIcons/ui-avataricon-sucrose.png",
        element: "Anemo",
        roles: ["Support", "Grouper"],
        guideCompleted: "false"
    },
    {
        name: "Tartaglia",
        src: "characterIcons/ui-avataricon-tartaglia.png",
        element: "Hydro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Thoma",
        src: "characterIcons/ui-avataricon-tohma.png",
        element: "Pyro",
        roles: ["Shielder" , "Support", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Anemo Traveler",
        src: "characterIcons/Aether_Icon.webp",
        element: "Anemo",
        roles: [ "Grouper", "Support"],
        guideCompleted: "false"
    },
    {
        name: "Geo Traveler",
        src: "characterIcons/Aether_Icon.webp",
        element: "Geo",
        roles: ["DPS", "Support"],
        guideCompleted: "false"
    },
    {
        name: "Electro Traveler",
        src: "characterIcons/Aether_Icon.webp",
        element: "Electro",
        roles: ["Support"],
        guideCompleted: "false"
    },
    {
        name: "Dendro Traveler",
        src: "characterIcons/Aether_Icon.webp",
        element: "Dendro",
        roles: ["Support", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Hydro Traveler",
        src: "characterIcons/Aether_Icon.webp",
        element: "Hydro",
        roles: ["DPS"],
        guideCompleted: "false"
    },
    {
        name: "Venti",
        src: "characterIcons/ui-avataricon-venti.png",
        element: "Anemo",
        roles: ["Grouper", "Support"],
        guideCompleted: "false"
    },
    {
        name: "Wanderer",
        src: "characterIcons/ui-avataricon-wanderer.png",
        element: "Anemo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Wriothesley",
        src: "characterIcons/ui-avataricon-wriothesley.png",
        element: "Cryo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Xiangling",
        src: "characterIcons/ui-avataricon-xiangling.png",
        element: "Pyro",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Xianyun",
        src: "characterIcons/UI_AvatarIcon_Liuyun.png",
        element: "Anemo",
        roles: ["Support", "Healer"],
        guideCompleted: "false"
    },
    {
        name: "Xiao",
        src: "characterIcons/ui-avataricon-xiao.png",
        element: "Anemo",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Xingqiu",
        src: "characterIcons/ui-avataricon-xingqiu.png",
        element: "Hydro",
        roles: ["DPS", "Support","Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Xinyan",
        src: "characterIcons/ui-avataricon-xinyan.png",
        element: "Pyro",
        roles: ["Shield", "Support", "DPS"],
        guideCompleted: "false"
    },
    {
        name: "Yae Miko",
        src: "characterIcons/ui-avataricon-yae.png",
        element: "Electro",
        roles: ["DPS", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Yanfei",
        src: "characterIcons/ui-avataricon-feiyan.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Yaoyao",
        src: "characterIcons/ui-avataricon-yaoyao.png",
        element: "Dendro",
        roles: ["Healer", "Support", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Yelan",
        src: "characterIcons/ui-avataricon-yelan.png",
        element: "Hydro",
        roles: ["DPS", "Support", "Off-Field"],
        guideCompleted: "false"
    },
    {
        name: "Yoimiya",
        src: "characterIcons/ui-avataricon-yoimiya.png",
        element: "Pyro",
        roles: ["DPS", "On-Field"],
        guideCompleted: "false"
    },
    {
        name: "Yun Jin",
        src: "characterIcons/ui-avataricon-yunjin.png",
        element: "Geo",
        roles: ["Support"],
        guideCompleted: "false"
    },
    {
        name: "Zhongli",
        src: "characterIcons/ui-avataricon-zhongli.png",
        element: "Geo",
        roles: ["Shield", "Support"],
        guideCompleted: "false"
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

            card.className = "bg-neutral-800 rounded-md border border-black hover:border-white hover:cursor-pointer shadow-lg items-center";
            card.setAttribute("id", character.name);
            card.setAttribute("href", "./characterGuides/" +character.name.replace(/ /g, "") + "Guide.html");
            
            
            card.style = "width: 17rem; height:17rem; padding: 2px; padding-top: 20px; text-align:center; display: flex; justify-content:center; align-items: center; background-color: white; ";

            const rolesHTML = character.roles.map(role => `
                <div class="text-sm text-center align-middle items-center h-5 px-3 bg-neutral-400 rounded-md">
                    <p>${role}</p>
                </div>
            `).join('');


            cardContent = 
            `<div class="flex flex-col flex-grow items-center h-full">
                <img class="h-36 w-36 rounded-md" src="${character.src}" alt="${character.name}">
                <p class = "py-2 text-2xl text-white text-center text-bold text-wrap">${character.name}</p>

                <div class = "flex flex-row flex-wrap justify-center gap-1 pb-3 font-semibold">
                    <div class="flex bold text-sm text-center align-middle items-center h-5 px-3 mx-1 bg-${character.element.toLowerCase()} rounded-md">
                    <p>${character.element}</p>
                    </div>
                    ${rolesHTML}
                </div>
            </div>`

            card.innerHTML = cardContent;
            grid.appendChild(card);
        }
    }
}
//SEARCH FUNCTION
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











