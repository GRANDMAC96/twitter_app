import React from 'react';
import Button from 'react-bootstrap/Button';
import Tweet from './Tweet';


class TweetDashboard extends React.Component {
    render() {
        return (
            <div>
                {Object.keys(this.props.tweets).map(key => (
                    <Tweet
                        key={key}
                        index={key}
                        tweet={this.props.tweets[key]}
                    />
                ))}
                <Button onClick={this.props.loadSampleTweets}>Load Sample Tweets</Button>
            </div>

        );
    }
}

export default TweetDashboard;