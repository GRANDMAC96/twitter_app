import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class AddTweetForm extends React.Component {
    tweetRef = React.createRef();


    createTweet = e => {
        e.preventDefault();
        console.log(this.tweetRef.current.value);
        const tweet = {
            tweet: this.tweetRef.current.value,
        }
        this.props.addTweet(tweet);
        // Finally refresh the page
        // Here currentTarget refers to the form tag and the reset() method resets the form.
        // NB* state resets when you refresh the page.
        e.currentTarget.reset();
    }
    render() {
        return (
            <Form onSubmit={this.createTweet}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Whats on your mind...?" ref={this.tweetRef} />
                </Form.Group>
                <Button variant="primary" type="submit">+ Add Tweet</Button>
            </Form>
        );
    }
}

export default AddTweetForm;