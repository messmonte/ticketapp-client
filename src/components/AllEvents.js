import React, { Component } from "react";
import { getEvents } from "../store/actions/event";
import { getUsers } from "../store/actions/users";
import EventCard from "./EventCard";
import { connect } from "react-redux";

class AllEvents extends Component {
  state = {
    load: true
  };
  async componentDidMount() {
    await this.props.getUsers();
    await this.props.getEvents();
    this.setState({ load: false });
    // console.log(`eeeeeeeee`, this.props.users.all);
  }
  // componentDidMount() {
  //   console.log(`kuxrx`, this.props.users.all);
  // }
  render() {
    // console.log(`my props in allevents`, this.props);
    if (this.state.load === false) {
      return this.props.events.map(event => {
        const eventAuthorId = event.userId;
        console.log(`hello`, this.props.users);
        const eventAuthor = this.props.users.find(
          user => user.id === eventAuthorId
        );
        return (
          <div key={event.id}>
            <EventCard user={eventAuthor} event={event} />
          </div>
        );
      });
    }
    return <p>Loading...</p>;
  }
}

function mapStateToProps(state) {
  console.log(`hello again`, state.users.all);
  return {
    users: state.users.all,
    events: state.event.all
  };
}
const mapDispatchToProps = { getEvents, getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(AllEvents);
