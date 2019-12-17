import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axios/axiosWithAuth";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
        alert("couldnt get friends");
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>AGE</td>
            <td>EMAIL</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {friends.map(friend => {
            return (
              <tr key={friend.id}>
                <td>{friend.id}</td>
                <td>{friend.name}</td>
                <td>{friend.age}</td>
                <td>{friend.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
