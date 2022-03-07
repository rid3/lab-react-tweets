import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message"
import Actions from "./Actions";

function Tweet(props) {

  return (
    <div className="tweet">
      {/* <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      /> */}

      <ProfileImage image = {props.tweet.user.image} />

      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">{props.tweet.user.handle}</span>
          </span> */}
           <User name = {props.tweet.user.name} handle = {props.tweet.user.handle}/> 

          {/* <span className="timestamp">{props.tweet.timestamp}</span> */}
          <Timestamp timestamp = {props.tweet.timestamp} />
        </div>

        {/* <p className="message">
          {props.tweet.message}
        </p> */}

        <Message message= {props.tweet.message} />

        <div className="actions">
          {/* Font Awesome icons */}
          {/* <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i> */}

          <Actions />
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
