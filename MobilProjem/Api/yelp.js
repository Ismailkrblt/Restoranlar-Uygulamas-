import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer w9qMdJszbTJlVNJOMXEEG_P0saNuIvnJ9WLkbAOZszj0hz3w6Aj_4TcN64ELaBv4puK0qk5AcI42Wyh9FC1IvebMBd1kmIgavKKwP47FntRvuLvEfVUu0ErnjSFbZnYx',
  },
});
