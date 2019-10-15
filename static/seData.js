(function main() {

  handleData();

  async function handleData() {

    var objs = await xhrServer();
    var tags = "<h1>Collection of Fine Cakes</h1>"; L = ""; R = "";
    

    objs.data.forEach(function (S, oddEven) {

      tags = tags
        + '<div class="oneLine"><h4 id="'
        + S.name
        + '"> \u25E2 '
        + S.title
        + ' \u25E3</h4>'

      R = '<div class="twoColumn"><p>'
        + S.salesPitch
        + '</p><img src="static/boilerFlask.svg" class="bf" /><ul><li>Weight: '
        + S.weight
        + " gr</li>"
        + declaration(S.declaration)
        + '</ul></div>'

      L = '<div class="twoColumn">'
        + '<img src="'
        + S.imageurl
        + '" /></div>';

      (oddEven % 2 === 0)
        ? tags = tags + L + R + '</div>'
        : tags = tags + R + L + '</div>'

    })
    zCakes.innerHTML = tags;
  }
  function declaration(D) {
    var xyz = "";
    D.forEach((T) => { xyz = xyz + '<li>' + T + '</li>' })
    return xyz;
  }
  function xhrServer() {
    return new Promise(function (serverData, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "seCakes.php", true);
      xhr.onreadystatechange = function () { if (xhr.readyState === 4) serverData(JSON.parse(xhr.responseText)) };
      xhr.send();
    });
  }
}
)();
