var headings = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");

for (var i = 0; i < headings.length; i++) {
  headings[i].innerHTML =
    '<div class="anchorwrap post-headings">' +
      headings[i].innerText +
    '<a class="anchorlinks" href="#' + headings[i].id + '"><span id="anchoricon"><i class="fas fa-link"></i></span></a>' +
    '</div>'
    ;
}