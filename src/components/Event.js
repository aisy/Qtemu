import React, { Component } from 'react'
import { findByLabelText } from '@testing-library/react'

export default class Event extends Component {
  render() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "space-content",
        backgroundColor: "red",
        padding: 20
      }}
      >
        <div style={{
          width: 200,
          height: 200,
          backgroundColor: "grey",
          marginRight: 20
        }} />
        <div>
          <p style={{ fontWeight: "bold", marginTop: 0, marginBottom: 10 }}>Hacktiv8 Indonesia</p>
          <div style={{ justifyContent: "space-content", display: "flex" }}>
            <p style={{ marginRight: 40, marginTop: 0 }}>Lokasi</p>
            <p style={{ margin: 0 }}>Jakarta</p>
          </div>
          <div style={{ justifyContent: "space-content", display: "flex" }}>
            <p style={{ marginRight: 40, marginTop: 0 }}>Member</p>
            <p style={{ margin: 0 }}>1078</p>
          </div>
          <div style={{ justifyContent: "space-content", display: "flex" }}>
            <p style={{ marginRight: 40, marginTop: 0 }}>Organizer</p>
            <p style={{ margin: 0 }}>Jakarta</p>
          </div>
          <button style={{
            width: 100,
            padding: 10
          }}>Join us</button>
        </div>
      </div>
    )
  }
}
