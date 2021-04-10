import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./SearchMovies";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <SearchMovies/>
              <footer>
       This web app was created with the help of Scrimba. All code belongs to them 
       and their creators. API provided by <a href='https://www.themoviedb.org/'>TMDB</a>.
      </footer>
      </div>

    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));