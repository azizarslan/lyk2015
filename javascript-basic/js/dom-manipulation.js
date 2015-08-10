var menu = document.getElementById("mainmenu");

var menuItems = [
  {
    link: "#",
    title: "ANA SAYFA"
  },
  {
    link: "#",
    title: "HAKKIMIZDA"
  },
  {
    link: "#",
    title: "ÜRÜNLERİMİZ"
  },
  {
    link: "#",
    title: "REFERANSLARIMIZ"
  },
  {
    link: "#",
    title: "HİZMETLERİMİZ"
  },
  {
    link: "#",
    title: "GALERİ"
  },
  {
    link: "#",
    title: "İLETİŞİM"
  },
  {
    link: "#",
    title: "HABERLER"
  }
];

for (var i = 0; i < menuItems.length; i++) {
  menu.innerHTML += "<li><a href='" + menuItems[i].link + "'>" + menuItems[i].title + "</a></li>";
}

/* menuItems.forEach(function(item, index) {
  menu.innerHTML += "<li><a href='" + item.link + "'>" + item.title + "</a></li>";
}); */
