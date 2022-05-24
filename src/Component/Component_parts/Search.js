import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
        <form method="GET" className="form-inline tm-mb-80 tm-search-form">                
        <input className="form-control tm-search-input" name="query" type="text" placeholder="Search..." aria-label="Search"/>
        <button className="tm-search-button" type="submit">
            <i className="fas fa-search tm-search-icon" aria-hidden="true"></i>
        </button>                                
    </form>
    )
  }
}
