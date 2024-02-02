import React, { Component } from 'react';
import { TiTick } from "react-icons/ti";
import Header from '../Header';
import './index.css';

class PoemSubmission extends Component {
  
    state = {
      title: '',
      body: '',
      author: '',
      submitted: false,
    };
  

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission (you can send data to backend here)
    console.log('Title:', this.state.title);
    console.log('Body:', this.state.body);
    console.log('Author:', this.state.author);
    // Reset form fields and set submitted to true
    this.setState({
      title: '',
      body: '',
      author: '',
      submitted: true,
    });
  };

  reSubmit=()=>{
    this.setState({ submitted: false })
  }

  render() {
    const {submitted}=this.state
    return (
      <>
        <Header />
        <div className="submission-page">
          <h1 className="submission-head">Poem Submission Platform</h1>
          {submitted ? (
            <div className="submission-message">
                <div className="submission-tick" >
                <TiTick size={60}/>
                </div>

              <p className="re-submit-para">Your poem was submitted successfully.</p>
              <button
                className="re-submit-button"
                onClick={this.reSubmit}
              >
                Submit Another Poem
              </button>
            </div>
          ) : (
            <form onSubmit={this.handleSubmit} className="submission-form">
              <div className="form-group">
                <label htmlFor="title" className="title">Title</label>
                <input
                  type="text"
                  id="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  className="text-head-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="body" className="title">Poem</label>
                <textarea
                  id="body"
                  value={this.state.body}
                  onChange={this.handleChange}
                  className="text-input"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="author" className="title">Author</label>
                <input
                  type="text"
                  id="author"
                  value={this.state.author}
                  onChange={this.handleChange}
                  className="text-head-input"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Submit Poem
              </button>
            </form>
          )}
        </div>
      </>
    );
  }
}

export default PoemSubmission;
