import React, { Component } from 'react'
import axios from 'axios'

class Movie extends Component {
  state = {
    searchResults: []
  }

  movie = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=f7444116aaa4f6597eca4d78450764da`
    )
    this.setState({
      searchResults: resp.data.results
    })
    console.log(this.state.searchResults)
  }
  componentDidMount() {
    this.movie()
  }

  render() {
    return (
      <div>
        <header>Party Like it's 1989!!!</header>
        <section className="main-body">
          <ul>
            {this.state.searchResults.map(results => {
              return (
                <li key={results.id}>
                  <img
                    className="image"
                    src={
                      ['https://image.tmdb.org/t/p/w185_and_h278_bestv2'] +
                      results['poster_path']
                    }
                  />
                  <p className="title">{results['original_title']}</p>
                  <p className="overview">{results['overview']}</p>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    )
  }
}
export default Movie
