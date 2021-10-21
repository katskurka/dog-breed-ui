import React, { Component } from 'react'
import './Breeds.css'
import { Link } from 'react-router-dom'

class Breeds extends Component {
  render() {
    return (
      <div className="allbreeds">
        <h1 className="display-1 text-center">Puppies</h1>
          <div className="row">
            {this.props.breeds.map(data => (
            <div className=" breed col-4 text-center" key={data.breed}>
              <img src={data.src} alt={data.breed} />
              <h3 className='mt-3'>
              <Link className='underline' to={`/breeds/${data.breed}`}>
                  {data.breed}
                </Link>
              </h3>
              </div>
            ))}
           
          </div>
        </div>
    )
  }
}

export default Breeds