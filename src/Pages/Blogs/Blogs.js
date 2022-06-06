import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-text'>
            <div className='blogs'>
                <h1>Q:1:- Difference between `authorization` and `authentication`?</h1>
                <p>Ans:- <h6 className='text-primary'>Authentication:-</h6> in the form of a key. The lock on the door only grants access to someone with the correct key in much the same way that a system only    grants access to users who have the correct credentials.
                    <h6 className='text-primary'>Authorization:-</h6> in the form of permissions. Once inside, the person has the authorization to access the kitchen and open the cupboard that holds the pet food. The person may not have permission to go into the bedroom for a quick nap.  </p>
            </div>
            <div className='blogs'>
                <h1>Q:2:- Why are you using `firebase`? What other options do you have to implement authentication?..?</h1>
                <p> Ans:- Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps.Firebase is, essentially, a key-value store that you can use to quickly prototype and run a simple application, either native mobile or in-browser javascript.Authentication is the process of identifying users that request access to a system, network, or device. Access control often determines user identity according to credentials like username and password. Other authentication technologies like biometrics and authentication apps are also used to authenticate user identity. authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </p>
            </div>
            <div className='blogs'>
                <h1>Q:3:- What other services does `firebase` provide other than authentication..?</h1>
                <p> Ans:- Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.Firebase Authentication. Allow users to sign in to your app with their Facebook, Twitter, Google, or GitHub account with less than 5 minutes of work.The goal of every developer is to create awesome apps.  If your a developer, we are here to help you discover some of the best alternatives to Firebase to help take your mobile app development a notch higher.Firebase continues to innovate and dominate the backend as a service (BaaS) market. It has grown so much that it has become a key component of Google mobile strategy. I was a Firebase enthusiastic user in the past, but my concerns about its complexity and cost led me to explore other cloud alternatives.
                </p>
            </div>
        </div>
    );
};

export default Blogs;