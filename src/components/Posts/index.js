import React from 'react'

export default function Post({ dados }) {
    const imageUrl = `https://api.adorable.io/avatars/285/${dados.name}@adorable.png`
    return (
            <div className="post">
              <div className="post-header">
                <img
                  className="post-profile-img"
                  src={imageUrl}
                  alt={dados.name}
                />
                <div className="name-container">
                  <a href="/#"> {dados.name} </a>
                  <small>1 min</small>
                </div>
              </div>
              <p> {dados.content} </p>
              <div className="actions">
                <a href="/#">Like</a>
                <a href="/#">Comment</a>
                <a href="/#">Share</a>
              </div>

              <div className="post-comment">
                <img
                  className="comment-profile-img"
                  src="https://api.adorable.io/avatars/285/abott@adorable.png"
                  alt="img"
                />
                <div className="comment-container">
                  <input
                    className="comment-field"
                    placeholder="Write a comment..."
                  />
                  <i className="fas fa-camera post-container-icon" />
                </div>
              </div>
            </div>
    )
}
