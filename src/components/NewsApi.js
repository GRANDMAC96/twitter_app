import React from 'react';
import { newsapi } from "../helpers";

class NewsApi extends React.Component {
    render() {
        return (
            <div>
                <p>{newsapi()}</p>
            </div>
        );
    }
}

export default NewsApi;