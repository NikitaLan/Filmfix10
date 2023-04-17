import noPosterImg from '../images/noImage-placeholder.jpg';
import { createGenresFromTrend } from '../js/genre/createGenresFromTrend';

function createYear(release_date) {
  return release_date ? release_date.split('-')[0] : '';
}

export const makeGalleryMarkUp = films => {
  return films
    .map(
      ({ genre_ids, release_date, vote_average, poster_path, title, id }) => {
        const genre = createGenresFromTrend(genre_ids);
        const filmYear = createYear(release_date);
        const filmRate = vote_average.toFixed(1);
        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : noPosterImg;
        return `
        <li class='gallery-home__item'>  
      <article class='gallery-home__card'>
        <a class='gallery-home__link'>
          <div class='gallery-home__card-thumb'>
            <img
              src='${poster}'
              loading="lazy"
              alt='${title}'
              title='${title}'
              data-id='${id}'
              loading='lazy'
              width='395'
              height='500'
            />
            <span class="gallery-home__card-rate">${filmRate}</span>
          </div>
          <div class='gallery-home__card-info'>
            <h3 class='gallery-home__card-title' data-id='${id}'>${title}</h3>
  
            <p class='gallery-home__card-text' data-id='${id}'>
            ${genre}
              |
              ${filmYear}
            </p>
          </div>
        </a>
      </article>
    </li>
        `;
      }
    )
    .join('');
};

export const makeFilmMarkUp = ({
  genre_ids,
  release_date,
  vote_average,
  poster_path,
  title,
  id,
}) => {
  const genre = createGenresFromTrend(genre_ids);
  const filmYear = createYear(release_date);
  const filmRate = vote_average.toFixed(1);
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : noPosterImg;
  return `
        <li class='gallery-home__item'>  
      <article class='gallery-home__card'>
        <a class='gallery-home__link'>
          <div class='gallery-home__card-thumb'>
            <img
              src='${poster}'
              loading="lazy"
              alt='${title}'
              title='${title}'
              data-id='${id}'
              loading='lazy'
              width='395'
              height='500'
            />
            <span class="gallery-home__card-rate">${filmRate}</span>
          </div>
          <div class='gallery-home__card-info'>
            <h3 class='gallery-home__card-title' data-id='${id}'>${title}</h3>
  
            <p class='gallery-home__card-text' data-id='${id}'>
            ${genre}
              |
              ${filmYear}
            </p>
          </div>
        </a>
      </article>
    </li>
        `;
};
