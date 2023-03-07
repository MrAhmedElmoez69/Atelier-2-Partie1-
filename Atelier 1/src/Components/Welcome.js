import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: "Ali",
      count : 0,
      departs: [
        {
          id: 1,
          nom: "test1",
        },
        {
          id: 2,
          nom: "test2",
        },
        {
          id: 3,
          nom: "test3",
        },
      ],
    };
  }

incrementer =()=>
{
  this.setState(
    {
      count : this.state.count +1 ,
      departs : [...this.state.departs , {id : 4 , nom: "genie"}]


    }
  )
}

  render() {
    return (
      <div>
        <h1>Bonjour ! {this.state.txt} </h1>

        <h2>Count : {this.state.count} </h2>

        <ul>
          {this.state.departs.map((e) => {
            return <li key={e.id}> {e.nom} </li>;
          })}
        </ul>

            <button onClick={this.incrementer}>Incrementer</button>

      </div>
    );
  }
}

export default Welcome;
