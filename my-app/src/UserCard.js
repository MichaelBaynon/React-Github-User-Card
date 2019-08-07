import React from "react";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followersCard: []
    };
  }

  componentDidMount() {
    this.fetchFollowers();
  }

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/MichaelBaynon/followers`)
      .then(res => {
        return res.json();
      })
      .then(followers => this.setState({ followersCard: followers }))
      .catch(err => {
        console.log("error");
      });
  };

  render() {
    return (
      <>
        <div className="card">
          <h2> {this.props.user.login}</h2>
          <img src={this.props.user.avatar_url} width={150} />
          <h3>Location: {this.props.user.location || "N/A"}</h3>
          <h3>
            <a href={this.props.user.html_url || "N/A"}>Visit Profile</a>
          </h3>
          <h3>Following {this.props.user.following || "N/A"} </h3>
          <h3> {this.props.user.followers || "N/A"} followers</h3>
          <h3>Bio: {this.props.user.bio || "N/A"}</h3>
        </div>

        <h1>Followers</h1>
        {this.state.followersCard.map(mres => {
          return (
            <div className="followers">
              <h2 key={mres.login}>{mres.login}</h2>
              <img
                top
                key={mres.avatar_url}
                src={mres.avatar_url}
                alt="avatar"
                width={150}
              />
              <h3>
                <a href={mres.html_url || "N/A"}>Visit Profile</a>
              </h3>
            </div>
          );
        })}
      </>
    );
  }
}

export default UserCard;
