/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import { List, Container } from 'semantic-ui-react'

class FileListings extends React.Component{
    
    constructor (props) {
        super(props);
        this.state = {
            user_titles: ["title1", "title2"],
            heater_models: {
                "parma10": {
                    "name": "Parma 10",
                    "files": {
                        "Document 1": {
                            "title": "Document 10",
                            "file": "foo.pdf"
                        }
                    }
                }
            }
        };
    }

    displayFileListing = () =>
        this.state.user_titles.map((el,l ) => (
            <List.Item active> Parma 10 </List.Item>
    ));

    render() {
        return <div>
             <p> </p>
             <h3 className="ui header">Tiedostot</h3>
               <Container textAlign='justified'> Nämä tiedostot on saatu useiden yksityisten käyttäjien toimesta pitkän ajan kuluessa. Nämä näyttävät oikeilta päällisin puolin ... mutta ... En kuitenkaan pysty takaamaan esim sähkökaavioiden tai muiden tiedostojen oikeellisuutta sekä turvallisuutta joten ymmärtänet sen että käytät näitä tiedostoja omalla vastuulla.  </Container>
               <p> </p>
                <Container textAlign={"justified"}>Erittäin suuret kiitokset tiedostojen lähettäjille.</Container>
                <List link>
                    {this.displayFileListing()}
                </List>
            </div>
    }

}

// const FileListings = () => <div>
//     <p> </p>
//     <h3 className="ui header">Tiedostot</h3>
//     <Container textAlign='justified'> Nämä tiedostot on saatu useiden yksityisten käyttäjien toimesta pitkän ajan kuluessa. Nämä näyttävät oikeilta päällisin puolin ... mutta ... En kuitenkaan pysty takaamaan esim sähkökaavioiden tai muiden tiedostojen oikeellisuutta sekä turvallisuutta joten ymmärtänet sen että käytät näitä tiedostoja omalla vastuulla.  </Container>
//     <p> </p>
//     <Container textAlign={"justified"}>Erittäin suuret kiitokset tiedostojen lähettäjille.</Container>
//     <List link>
//         <List.Item active> Parma 10</List.Item>
//         <List.Item as='a'>About</List.Item>
//     </List>
// </div>

// class App extends React.Component {
//     state = {
//         user_titles: ["title1", "title2"],
//         user_entries: ["entry1", "entry2"]
//     };
//
//     displayListPosts = () =>
//         this.state.user_titles.map((el, i) => (
//             // Maybe, there is a better key :D
//             <div key={`${el}-${this.state.user_entries[i]}`}>
//                 <p>Title: {el}</p>
//                 <p>Entry: {this.state.user_entries[i]}</p>
//             </div>
//         ));
//     render() {
//         return <div>{this.displayListPosts()}</div>;
//     }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

export default FileListings