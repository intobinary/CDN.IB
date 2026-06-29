/***
document.getElementById("changeColorButton").addEventListener("click", function() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4F4F4", "#FFC300"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
***/

/*** INITIALIZION ***/
injectIBRIAD();
/*** END INITIALIZATION ***/

/*** FUNCTIONS ***/
function injectIBRIAD() {
    const companies = [
  {
    logo: 'https://raw.githack.com/intobinary/CDN.IB/main/IBRIADs/brand_inbuiltweb.png?v=1',
    logoAlt: 'INBUILTWEB',
    color: 'orange',
    marquee: 'HOST WEB APPLICATIONS: php, python, node.js, ruby, perl, go, rust, c/c++, java, asp.net. GET UNLIMITED RESOURCES: cpu, ram, bandwidth, storage, domain.',
    link: 'https://inbuiltweb.com',
    linkText: 'Visit'
  },
  {
    logo: 'https://raw.githack.com/intobinary/CDN.IB/main/IBRIADs/brand_aqualizwater.png?v=1',
    logoAlt: 'AQUALIZ WATER',
    color: 'steelblue',
    marquee: 'You can purchase AquaLiz dispenser machine. We can also supply water to your homes or offices. Whether renting or purchasing, all AquaLiz water dispenser is guaranteed for 12 months for inoperative compressor.',
    link: 'https://aqualizwater.co.za',
    linkText: 'Shop'
  },
  {
    logo: 'https://raw.githack.com/intobinary/CDN.IB/main/IBRIADs/brand_BENKISZN.png?v=1',
    logoAlt: 'BENKISZN',
    color: '#8b5cf6',
    marquee: 'Master Matric. Survive Varsity. BenkiSzn transforms boring schoolwork into a high-stakes academic e-sport backed by a 6-month university readiness simulator.',
    link: 'https://benkiszn.com',
    linkText: 'Register'
  }
];

// Pick random company
const randomAd = companies[Math.floor(Math.random() * companies.length)];

// Build the HTML with template literals
const IBRIADdom = `
  <div id="IBRInewad"><div class="CSSmidwrap">
    <a href="${randomAd.link}"><img id="IBRInewtag1" src="${randomAd.logo}" alt="${randomAd.logoAlt}" /></a>

    <marquee id="IBRInewtag2"><a href="${randomAd.link}">${randomAd.marquee}</a></marquee>

    <a id="IBRInewtag3" href="${randomAd.link}" target="_blank" style="background-color: ${randomAd.color};">${randomAd.linkText}</a>

    <span id="IBRInewtag4">AD</span>
  </div></div>
`;
  
    const IBRIADcss = `
    				#IBRInewad, #IBRInewad * { padding: 0; margin: 0; box-sizing: border-box; } a { color: black; text-decoration: none; }
    
    				#IBRInewad, #IBRInewtag4 { background-color: #AAA; }
    
    				#IBRInewad { font-family: 'Arial', sans-serif; line-height: 1.5em; } #IBRInewtag4 { font-size: .75em; }
    
html, body { width: 100%; height: 100%; }
    				#IBRIADhtml body,
								#IBRIADhtml #IBRInewad .CSSmidwrap { position: relative; }
    
    				#IBRInewad > div { display: flex; align-items: center; justify-content: center; } #IBRInewtag2 { flex: 1; }
    
    				#IBRInewtag3 { border-radius: 4px; } #IBRInewtag4 { border-radius: 4px 4px 0 0; }
    
    				#IBRInewad { position: absolute; bottom: 0; left: 0; width: 100%; padding: 1em; } #IBRInewtag1 { width: auto; height: 1.5em; border-radius: 4px; } #IBRInewtag2 { margin: 0 1em } #IBRInewtag3 { padding: 0 0.5em; } #IBRInewtag4 { position: absolute; top: -1.5em; left: 0; display: inline-block; padding: 0 .5em; }
    
    				@media screen and (max-width: 50em) {
    								#IBRInewad { font-size: 18px; }
    				}
    				@media screen and (min-width: 50em) {
    								#IBRInewad { font-size: 24px; }
    				}
    
    .IBRIADhtml body { padding-bottom: 4em !important; }
    
    .IBRIADhtml #IBRInewad { text-align: center !important; }
    .IBRIADhtml #IBRInewad .CSSmidwrap {
    				width: 100%; max-width: em;
    				display: flex; margin-left: auto !important; margin-right: auto !important;
    }
				`;

  
				document.body.insertAdjacentHTML('beforeend', IBRIADdom);
  
				var IBRIADstyle = document.createElement('style');
				IBRIADstyle.textContent = IBRIADcss;
  		document.head.appendChild(IBRIADstyle);
  
//    document.querySelector(".IBRIADhtml body").appendChild(IBRInewad);
}
/*** END FUNCTIONS ***/
