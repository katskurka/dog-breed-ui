import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"
import Routes from "./Routes"
import Navbar from "./Navbar"


class App extends Component {
  static defaultProps = {
    breeds: [
      {
        breed: "Belgian Tervuren",
        Size: "Medium",
        src: belgianterv,
        characteristics: [
          "The Belgian Tervuren, also referred to as a Terv, is an intelligent breed originating from (unsurprisingly) the Belgian town of Tervuren, where the dogs are known as Chien de Berger Belge. This medium sized herding breed is known for its love of hard work, as well as for its brilliant Shepherd coat."
        ]
      },
      {
        breed: "Akita",
        Size: "Large",
        src: akita,
        characteristics: [
          "The Akita is a large breed of dog originating from the mountainous regions of northern Japan. There are two separate varieties of Akita: a Japanese strain, commonly called Akita Inu or Japanese Akita, and an American strain, known as the Akita or American Akita."
        ]
      },
      {
        breed: "Australian Shepherd",
        Size: "Medium",
        src: aussie,
        characteristics: [
          "The Australian Shepherd is a breed of herding dog from the United States. Developed in California in the 19th century, it is claimed the breed descends from a variety of herding breeds including collies imported into California alongside sheep imported from Australia and New Zealand, the breed taking its name from the former. Originally used solely as a herding dog, the Australian Shepherd has become one of the most popular companion dog breeds in North America."
        ]
      },
      {
        breed: "Siberian Husky",
        Size: "Medium",
        src: husky,
        characteristics: [
          "The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than the similar-looking Alaskan Malamute."
        ]
      },
      {
        breed: "Weimaraner",
        Size: "Large",
        src: weimaraner,
        characteristics: [
          "The Weimaraner is a large dog that was originally bred as a hunting dog in the early 19th century. Early Weimaraners were used by royalty for hunting large game such as boar, bear and deer."
        ]
      },
      {
        breed: "Border Collie",
        Size: "Medium",
        src: bordercollie,
        characteristics: [
          "The Border Collie is a working and herding dog breed. They come from the Anglo-Scottish border region and are used to herd livestock, specifically sheep. The Border Collie is considered a highly intelligent, extremely energetic, acrobatic and athletic dog."
        ]
      }
    ]
  }
  return (
    <div className="App">
     <h1 className="display-1">Dog Breeds</h1>
    </div>
  );
}

export default App;
