let me = {adjectives:['Bleach','Devilman Crybaby','Saiki K','Fire Force','Haikyuu']}
function recommendMe() {
  document.querySelector("#recommendation"). innerHTML= " Some of my favorite animes I recomend,  " + getRandomItem(me.adjectives)


// The java below i got from https://www.w3schools.com/howto/howto_js_accordion.asp
// i was testing it out but it seems  there's something in my code preventing me to use the javascript
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
