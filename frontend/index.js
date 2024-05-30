const movielist = document.querySelector('.movie-list');
 const url = document.getElementById('iframe');
// fetch('http://localhost:3700/api/video')
// .then(response=>response.json())
// .then(data=>{
//     url.src = data;
// })
// .catch(err =>{
//     console.log(err);
// });
async function fetchVideoUrl() {
    try {
      const res = await fetch('http://localhost:3700/api/video', {
        method: 'GET',      
      });
      const data = await res.json();   
      url.src = data;
    } catch (err) {
      console.log(err);
    }
  }
fetchVideoUrl();

async function getmovie() {
    try {
      const res = await fetch('http://localhost:3700/api/movies', {
        method: 'GET',      
      });
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  }

  async function addMovieToHTML() {
    movielist.innerHTML = '';
    try {
      const data = await getmovie();
      if (data && Array.isArray(data)) {
        data.forEach(movie => {
          let newitem = document.createElement('a');
          newitem.classList.add('movie-item');
          newitem.href = '#';
          newitem.innerHTML = `
            <img src="${movie.posterUrl}" alt="${movie.title}">
            <h3>${movie.description}</h3>`;
          movielist.appendChild(newitem);
        });
        console.log('data',data);
      } else {
        console.error('Data returned from API is not an array.');
        
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  async function getmovie() {
    try {
      const res = await fetch('http://localhost:3700/api/movies', {
        method: 'GET',
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
addMovieToHTML();

