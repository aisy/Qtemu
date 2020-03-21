import React, { Component } from 'react'

export default class MeetupInfo extends Component {
  render() {
    return (
      <div>
        <h3>Next Meetup</h3>
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <div style={{ backgroundColor: "grey", padding: 20 }}>
            Awesome Meetup and Event
            <br />
            <p style={{ color: "#bebebe" }}>25 Maret 2020</p>
            <p>Hello, Javascript & Node.js Ninjas!
            Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018</p>
          </div>
        </div>
      </div>
    )
  }
}
