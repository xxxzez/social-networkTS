import React from "react";
import "./Profile.css";

function Profile() {
    return (
        <div className='profile'>
            <div>
                <img src="https://media.wired.com/photos/5a602bd0dcebae339730ba65/master/w_2560%2Cc_limit/eslcologne.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                    <div>
                        post 3
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
