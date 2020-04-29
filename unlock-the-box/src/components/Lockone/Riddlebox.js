import React from 'react';
// Created a dummy Component here because we're this component doesn't need to know anything other than the fact that it's rendering the header

const Riddlebox = () => {
    return (
        <div>
            <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow-4">
                <h1 className="f4 bg-light-green br3 br--top black-60 mv0 pv2 ph3 tc">Challenge 1</h1>
                <div className="pa3 bt b--black-10 bg-near-white">
                    <p className="f6 f5-ns lh-copy measure">
                        Appearances are not what they seem. Perhaps there is a tool that can help us look a little closer at our webpage. Click <a href="https://anrax.github.io/challenge-one/" target="_blank" rel="noopener noreferrer">here</a> to access the first challenge! Remember, Google is your friend.
                    </p>
                    {/* <ol className="f6 f5-ns lh-copy measure">
                        <li>Hint 1</li>
                        <li>Hint 2</li>
                        <li>Hint 3</li>
                    </ol> */}
                </div>
            </article>
            <article className="pa5">
                <ul className="list pl0 ml0 center mw4 ba b--white br2 bg-white">
                    <li className="tc mv1 pv3 ba br3 b--black grow pointer bg-green"><a href="/">Lock One</a></li>
                    <li className="tc mv1 pv3 ba br3 b--black grow pointer bg-yellow"><a href="/locktwo">Lock Two</a></li>
                    <li className="tc mv1 pv3 ba br3 b--black grow pointer bg-orange"><a href="/lockthree">Lock Three</a></li>
                    <li className="tc mv1 pv3 ba br3 b--black grow pointer bg-red"><a href="/lockfour">Lock Four</a></li>
                </ul>
            </article>
        </div>
    );
}

export default Riddlebox;