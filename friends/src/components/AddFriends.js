import React from "react";
import "./FriendsList.css";

export default function AddFriends({ handleSubmit, handleInput, friend }) {
  return (
    <form onSubmit={handleSubmit}>
      <h4>ADD FRIENDS</h4>
      <div>
        <div>
          <input
            required
            name="name"
            placeholder="Name"
            value={friend.name}
            onChange={handleInput}
            className="lg-form-input"
          />
        </div>
        <div>
          <input
            required
            name="age"
            value={friend.age}
            type="number"
            placeholder="age"
            onChange={handleInput}
            className="lg-form-input"
          />
        </div>
        <div>
          <input
            required
            name="email"
            value={friend.email}
            type="email"
            placeholder="Email"
            onChange={handleInput}
            className="lg-form-input"
          />
        </div>
        <div>
          <button type="submit" className="lg-form-button">
            {"ADD"}
          </button>
        </div>
      </div>
    </form>
  );
}
