const navbar = document.createElement("nav");
const mobileNav = document.createElement("nav")
const anchor = document.getElementById("navbar");
navbar.innerHTML = `
  <nav id="navbar" class="fixed top-0 h-16 flex z-10 flex-row justify-between items-center bg-black text-white border-b border-neutral-900 shadow w-full px-6 sm:px-10 lg:px-20">
    <div class="flex items-center justify-start">
      <img class="h-16 w-16 ms-2" src="/characterIcons/dehyaEmoji.webp" alt="Dehya Emoji">
      <a href="#top" class="flex justify-start h-full text-3xl font-bold me-3" style="font-family: 'Cinzel', serif;">TeyvatTactics</a>
      <a href="/index.html" class="lg:flex hidden justify-center text-white text-lg p-5">Home</a>
      <a href="/tierList.html" class="lg:flex hidden justify-center text-white text-lg p-5">Tier List</a>
      <a href="/talentFarming.html" class="lg:flex hidden justify-center text-white text-lg p-5">Talents</a>
      <a href="/abyssTips.html" class="lg:flex hidden justify-center text-white text-lg p-5">Abyss Tips</a>
    </div>
    <div class="hidden xl:flex xl:flex-row gap-2 items-center">
      <a href="https://www.youtube.com/channel/UCrDvYvwCD7e81g3oKAdXYAw" target="_blank" class="bg-red-600 h-13 p-3 rounded-sm text-lg text-center">
        <div class="fa-brands fa-youtube pe-2 hidden md:inline"></div>Youtube
      </a>
      <a href="https://discord.gg/EcXsT8wu62" target="_blank" class="bg-discord h-13 p-3 rounded-sm text-lg text-center">
        <div class="fa-brands fa-discord pe-2 hidden md:inline"></div>Discord
      </a>
      <a href="https://x.com/TeyvatTactics" target="_blank" class="bg-twitter h-13 p-3 rounded-sm text-lg text-center">
        <div class="fa-brands fa-x-twitter pe-2 hidden md:inline"></div>Twitter
      </a>
    </div>
    <div class="flex xl:hidden">
      <button class="text-white text-3xl focus:outline-none" onclick="toggleNav()">☰</button>
    </div>
  </nav>
`;

mobileNav.innerHTML = `
<nav id="mobileNav" class="menu-items bg-neutral-900 lg:hidden flex flex-col justify-start gap-2 fixed top-16 left-0 z-10 w-full text-lg text-white overflow-y-auto hidden">
  <!-- First Row of Links -->
  <div class="flex flex-row justify-center items-center w-full gap-2 px-2 pt-2">
    <a href="/index.html" class="flex justify-center items-center text-white   p-5 h-14 w-full text-center bg-neutral-700 hover:bg-neutral-600">Home</a>
    <a href="/tierList.html" class="flex justify-center items-center text-white  p-5 h-14 w-full text-center bg-neutral-700 hover:bg-neutral-600">Tier List</a>
  </div>

  <!-- Second Row of Links -->
  <div class="flex flex-row justify-center items-center w-full gap-2 px-2">
    <a href="/talentFarming.html" class="flex justify-center items-center text-white p-5 h-14  w-full text-center bg-neutral-700 hover:bg-neutral-600">Talents</a>
    <a href="/abyssTips.html" class="flex justify-center items-center text-white  p-5 h-14 w-full text-center bg-neutral-700 hover:bg-neutral-600">Abyss Tips</a>
  </div>

  <!-- Social Links -->
  <div class="flex justify-center items-center gap-3 mb-2">
    <a href="https://www.youtube.com/channel/UCrDvYvwCD7e81g3oKAdXYAw" target="_blank" class="bg-red-600 h-14 p-5 rounded-md  text-center flex items-center gap-2 hover:bg-red-500">
      <div class="fa-brands fa-youtube text-white"></div> Youtube
    </a>
    <a href="https://discord.gg/EcXsT8wu62" target="_blank" class="bg-discord h-14 p-5 rounded-md  text-center flex items-center gap-2 hover:bg-discordLight">
      <div class="fa-brands fa-discord text-white"></div> Discord
    </a>
    <a href="https://x.com/TeyvatTactics" target="_blank" class="bg-twitter h-14 p-5 rounded-md  text-center flex items-center gap-2 hover:bg-twitterLight">
      <div class="fa-brands fa-x-twitter text-white"></div> Twitter
    </a>
  </div>
</nav>`;


anchor.appendChild(navbar);
anchor.appendChild(mobileNav);

function toggleNav() {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.toggle("hidden");
  
}
