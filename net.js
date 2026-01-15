const movies1 = [
  { title: "Stranger Things", image: "https://tse2.mm.bing.net/th/id/OIF.w2OiPwZnGPOrGkjMVqSwTA?w=231&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { title: "Money Heist", image: "https://tse3.mm.bing.net/th/id/OIP.SyTMFRUiraSQ28Xft01Q0QHaEK?w=322&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { title: "Dark", image: "https://tse1.mm.bing.net/th/id/OIP.asSDJBz87vBOSSQeT0ZF1gHaEK?w=304&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { title: "The Witcher", image: "https://tse1.mm.bing.net/th/id/OIP.WQ0vmO3bMHnX71E7TbLYwwHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"},
  { title: "The Crown", image: "https://tse4.mm.bing.net/th/id/OIP.L0C13yyVW5UbEhgF0QH3DAHaD7?rs=1&pid=ImgDetMain&o=7&rm=3" }
];

const movies2 = [
  { title: "Bridgerton", image: "https://tse2.mm.bing.net/th/id/OIP.x3IGIQrSAqFGCxo59u_9VwHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { title: "Ozark", image: "https://tse1.mm.bing.net/th/id/OIP.EnmKIIEtEm3wmFbg5F8A9wAAAA?w=474&h=237&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { title: "Lucifer", image: "https://th.bing.com/th/id/R.e0be9dee8f2a6b448df8f277d667edab?rik=6OlL9v%2b4Z5gfgw&riu=http%3a%2f%2fpersonaunesp.com.br%2fwp-content%2fuploads%2f2020%2f08%2fEstacao-Nerd-Lucifer-1.jpg&ehk=Fit0Uu97j6QX9skw9rgGuR7idQwdHn47OOPS4ctQz%2fY%3d&risl=&pid=ImgRaw&r=0" },
  { title: "Narcos", image: "https://www.giztele.com/wp-content/uploads/2016/10/serie-narcos-scaled.jpg" },
  { title: "13 Reasons Why", image: "https://tse3.mm.bing.net/th/id/OIP.lPTQZjD_gI75gTKKuDMzcAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { title: "Emily in Paris", image: "https://ntvb.tmsimg.com/assets/p18761121_b_h8_ak.jpg?w=480&h=270" }
];

const movies3 = [
  { title: "The Umbrella Academy", image: "https://www.bingewatcherscouncil.com/wp-content/uploads/2019/02/umbrella_2.png" },
  { title: "Sex Education", image: "https://tse1.mm.bing.net/th/id/OIP.NKBnbsWOhTlguogpXCdIEwHaEL?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { title: "You", image: "https://worldsbeststory.com/wp-content/uploads/2023/04/you-series-on-netflix.jpg" },
  { title: "The Queen's Gambit", image: "https://bingeddata.s3.amazonaws.com/uploads/2020/10/The-Queens-Gambit-Review-Netflix-tv-series.jpg" },
  { title: "Locke & Key", image: "https://blog.vidangel.com/wp-content/uploads/2022/08/LockeAndKey_Blog_Image.jpg" },
  { title: "Shadow and Bone", image: "https://images.squarespace-cdn.com/content/v1/5efce5920d28887981c5bd9b/1611768464951-86DKXJWF9U2AYF4M5RZ1/Shadow+and+Bone+banner.jpg" }
];

const movies4 = [
  { title: "Ginny & Georgia", image: "https://i.ytimg.com/vi/DiGifkrlWuA/maxresdefault.jpg" },
  { title: "Outer Banks", image: "https://tse3.mm.bing.net/th/id/OIP.IOt8Kq4kpboBnLT5YO3m9QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { title: "Cobra Kai", image: "https://tse2.mm.bing.net/th/id/OIP.TGo5j6aGmuZAwxrPucOHIAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { title: "Peaky Blinders", image: "https://i.pinimg.com/originals/e9/90/4a/e9904ad04389b2654f6a395271bb8211.jpg" },
  { title: "Stranger Things 2", image: "https://s41921.pcdn.co/wp-content/uploads/2017/07/strangerthings2splash.jpg" },
  { title: "Money Heist Part 2", image: "https://tse3.mm.bing.net/th/id/OIP.tkI7FRAv3r4RqDIJWBH1jgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" }
];

// Function to render movies
function renderMovies(containerId, movies) {
  const container = document.getElementById(containerId);
  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
      <img src="${movie.image}">
      <p>${movie.title}</p>
    `;

    container.appendChild(card);
  });
}

// Render all 4 rows
renderMovies("movies1", movies1);
renderMovies("movies2", movies2);
renderMovies("movies3", movies3);
renderMovies("movies4", movies4);
