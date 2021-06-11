import React from 'react';

class Tweet extends React.Component {
    render() {

        const { tweet } = this.props.tweet;

        return (
            <li>
                {tweet}
            </li>
        );
    }
}

export default Tweet;