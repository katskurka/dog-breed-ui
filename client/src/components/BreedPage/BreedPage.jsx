import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class BreedPage extends Component {
  render() {
    let { breed } = this.props
    return (
      <div className='BreedPage row justify-content-center mt-5'>
        <div className='col-11 col-lg-5'>
          <div className='BreedPage-card card'>
            <img className='card-img-top' src={breed.src} alt={breed.name} />
            <div className='card-body'>
              <h2 className='card-title'>{breed.name}</h2>
              <h4 className='card-size'>{breed.size}</h4>
            </div>
            <p className='breed-description'>{breed.description}</p>
            <div className='card-body'>
              <Link to='/breeds' className='btn btn-dark'>
                All Breeds
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BreedPage
