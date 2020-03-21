import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{
        width: "100%",
        backgroundColor: "blue",
        color: "white",
        top: 0,
        position: "fixed",
      }}
      >
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
        }}>
          <div style={{ display: "flex", alignContent: "space-content" }}>
            <div style={{ marginRight: 30 }}>Qtemu</div>
            <div style={{ marginRight: 30 }}>Create Meetup</div>
            <div>Exploler</div>
          </div>
          <div>Login</div>
        </div>
      </div>
    )
  }
}
