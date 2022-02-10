import React from 'react';

class SearchAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    }
    this.grabUserInput = this.grabUserInput.bind(this);
  }

  grabUserInput(e) {
    this.setState({
      userInput: e.target.value
    })
    console.log(this.state.userInput)
  }

  render() {
    return(
      <div>
        <form>
        <input
        className='search-answers'
        placeholder='Search Answers'
        onChange={this.grabUserInput}></input>
        </form>
      </div>
    )
  }
}
export default SearchAnswers;