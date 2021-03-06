import React, { Component } from 'react';
import './App.css';
import favicon from './favicon.ico';
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

    // this is multi-line code:
    function anotherExample(firstLine, lastLine) {
      if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
      }
    }


You can also make text **bold** ...whoa!
Or _italic_.
Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com) and 

>Block Quotes!

And, if you want to get really crazy, even tables:

| Wild Header | Crazy Header | Another Header?|
| ----------- |:------------:| --------------:|
| Your content can | be here, and it | can be here...|
| And here. | Okay. | I think we get it.|

- And of course there are lists. 
    - Some are bulleted.
      - With different indentation levels.
          - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
  1. But the list goes on...
  -Even if you use dashes or asterisks.
  
And last but not least, let's not forget embedded images:

  ![React Logo w / Text](https://goo.gl/Umyytc)`
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  
  render() {
    let rawMarkup = marked(this.state.text, {
      gfm: true,
      tables: true,
      breaks: true
    });
    return (
      <div className="Container">
        <section className="Editor">
          <header className="Editor-header">
            <img src={favicon} className="Favicon" alt="favicon" />
            <h6>
              Editor
            </h6>
          </header>
          <textarea value={this.state.text} onChange={this.handleChange} name="editor" id="editor" cols="30" rows="10">
            { this.state.text }
          </textarea>
        </section>
        <section className="Previewer">
          <header className="Previewer-header">
            <img src={favicon} className="Favicon" alt="favicon" />
            <h6>
              Previewer
            </h6>
          </header>
          < main id = "preview"
          dangerouslySetInnerHTML = {{__html: rawMarkup}}
          />
        </section>
      </div>
    );
  }
}

export default App;
