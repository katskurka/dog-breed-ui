import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"

import Navig from "./components/Navbar"
import belgianterv from "./images/belgianterv.jpg"
import akita from "./images/akita.jpg"
import aussie from "./images/aussie.jpg"
import husky from "./images/husky.jpg"
import weimaraner from "./images/weimaraner.jpg"
import bordercollie from "./images/bordercollie.jpg"
import { Route, Switch } from 'react-router-dom'
import Breeds from './components/Breeds/Breeds'
import BreedPage from './components/BreedPage/BreedPage'


class App extends Component {
  static defaultProps = {
    breeds: [
      {
        name: "Belgian Tervuren",
        Size: "Medium",
        src: belgianterv,
        description: [
          "The Belgian Tervuren, also referred to as a Terv, is an intelligent breed originating from (unsurprisingly) the Belgian town of Tervuren, where the dogs are known as Chien de Berger Belge. This medium sized herding breed is known for its love of hard work, as well as for its brilliant Shepherd coat."
        ]
      },
      {
        name: "Akita",
        Size: "Large",
        src: akita,
        description: [
          "The Akita is a large breed of dog originating from the mountainous regions of northern Japan. There are two separate varieties of Akita: a Japanese strain, commonly called Akita Inu or Japanese Akita, and an American strain, known as the Akita or American Akita."
        ]
      },
      {
        name: "Australian Shepherd",
        Size: "Medium",
        src: aussie,
        description: [
          "The Australian Shepherd is a breed of herding dog from the United States. Developed in California in the 19th century, it is claimed the breed descends from a variety of herding breeds including collies imported into California alongside sheep imported from Australia and New Zealand, the breed taking its name from the former. Originally used solely as a herding dog, the Australian Shepherd has become one of the most popular companion dog breeds in North America."
        ]
      },
      {
        name: "Siberian Husky",
        Size: "Medium",
        src: husky,
        description: [
          "The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than the similar-looking Alaskan Malamute."
        ]
      },
      {
        name: "Weimaraner",
        Size: "Large",
        src: weimaraner,
        description: [
          "The Weimaraner is a large dog that was originally bred as a hunting dog in the early 19th century. Early Weimaraners were used by royalty for hunting large game such as boar, bear and deer."
        ]
      },
      {
        name: "Border Collie",
        Size: "Medium",
        src: bordercollie,
        description: [
          "The Border Collie is a working and herding dog breed. They come from the Anglo-Scottish border region and are used to herd livestock, specifically sheep. The Border Collie is considered a highly intelligent, extremely energetic, acrobatic and athletic dog."
        ]
      }
    ]
  }
  render() {
    const findBreed = props => {
      let name = props.match.params.name
      let onebreed = this.props.breeds.find(
        breed => breed.name.toLowerCase() === name.toLowerCase()
      )
      return <BreedPage {...props} breed={onebreed} />
    }
    return (
      <>
      <Navig breeds={this.props.breeds} />
      <Switch>
        <Route exact path ='/breeds' render={() => <Breeds breeds={this.props.breeds} />} />
        <Route exact path ='/breeds/:name' render={findBreed} />
      </Switch>
      </>
    )
  }
}

export default App;
