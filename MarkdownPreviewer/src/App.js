import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';


const initialState = `
This is a paragraph 

**This is bolded text**

>Block Quotes!

# Heading
## Heading 2

- list item 1
- list item 2
- list item 3

[Visit my Github](https://github.com/mkieft)

 This is an inline \`<div></div>\`
                  
This is a block of code:

\`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
\`\`\`

This is an image:

![react logo](https://cdn.glitch.com/team-avatar/55/small?2020-04-02T16:01:58.848Z)
                  
 `

let marked = require("marked");

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      markdown: initialState,
    };
  }
  updateMarkdown(markdown){
    this.setState({markdown});
  }
  render(){
    var inputStyle = {
      width: "40vw",
      height: "120vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    };
    var outputStyle = {
      width: "40vw",
      height: "120vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    };
    var bodyStyle = {
      backgroundColor: "#e08989"
    };
    var headStyle = {
      backgroundColor: "#e08989",
      textTransform: "uppercase",
    };
    
  
  return (
    <div className="App" style={bodyStyle}>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col text-center">
            <h1>
              {" "}
              <Badge className='text-align-center' id ="preview" variant='light' style={headStyle}>
                Markdown Previewer
              </Badge>
            </h1>
            <h6>Created by Maura Kieft</h6>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            {" "}
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Markdown Input
                </Badge>
              </h4>
            </div>
            <div className="input" style={inputStyle}>
              <textarea className = "input" id="editor"style={inputStyle} value={this.state.markdown} onChange={(e)=>{this.updateMarkdown(e.target.value);}}></textarea>
              {" "}
          </div>
          </div>

          <div className="col-md-6">
            {" "}
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Preview 
                </Badge>
              </h4>
            </div>
            <div style={outputStyle} dangerouslySetInnerHTML={{__html: marked(this.state.markdown),}}></div>
          </div>
        </div>

        
      </div>
      
    </div>
    
  );
  }
}

