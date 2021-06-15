import React from "react";
import Header from "./Header";
import AddTweetForm from "./AddTweetForm";
import TweetDashboard from "./TweetDashboard";
import NewsApi from "./NewsApi";
import sample from "../sample";

class App extends React.Component {
  state = {
    tweets: {}
  };

  loadSampleTweets = () => {
    this.setState({
      tweets: sample
    })
  };

  addTweet = tweet => {
    // Options you may think would work to add things to state
    // this.state.fishes.push(fish) for an array
    // this.state.fishes.fish1 = fish for an object
    // Neither work!!

    // Instead you need to use setState()
    // 1. take a copy of existing state
    const tweets = { ...this.state.tweets };
    // 2. add our new fish to the fishes variable
    tweets[`tweet${Date.now()}`] = tweet;
    // 3. set the new fishes object to state
    this.setState({
      tweets: tweets
    });
  };

  render() {
    return (
      <>
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-3">

          </div>
          <div className="col-6">
            <AddTweetForm addTweet={this.addTweet} />
            <TweetDashboard
              loadSampleTweets={this.loadSampleTweets}
              tweets={this.state.tweets}
            />
          </div>
          <div className="col-3">
            <NewsApi />
          </div>

        </div>
      </>

    );
  }
}

export default App;
