import React from "react";
import { friends } from './friends'
import Friend from "./Friend";
import Button from "./Button";

function App() {
  let text = "5 birthdays today"
  const [friend, setFriend] = React.useState(friends)
  const [value, setValue] = React.useState(text)
  const removeFriends = () => {
    setFriend([])
    setValue("0 birthdays today")
  }

  const removeFriend = (id) => {
    let newFriends = friend.filter((friendID) => {
      return friendID.id !== id
    })
    setFriend(newFriends)
    if (friend.length == 1) {
      setValue("0 birthdays today")  
    }
  }
  
  return (
    <div className="container">
      <div className="wrapper">
        <h1>{value}</h1>
        <div className="friends-wrapper">
          {friend.map((friend) => {
            return <Friend key={friend.id} img={friend.img} name={friend.name} age={friend.age} remove={() => removeFriend(friend.id)} />
          })
          }
        </div>
        <Button remove={removeFriends}/>
      </div>
    </div>
  );
}

export default App;
