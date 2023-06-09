import React from "react";

export default function BadgeComponent() {
  return (
    <div className="container">
      <h1>Badge - Bootstrap5 With React</h1>
      <h1>
        Example heading <span className="badge bg-secondary">New</span>
      </h1>
      <h2>
        Example heading <span className="badge bg-secondary">New</span>
      </h2>
      <h3>
        Example heading <span className="badge bg-secondary">New</span>
      </h3>
      <h4>
        Example heading <span className="badge bg-secondary">New</span>
      </h4>
      <h5>
        Example heading <span className="badge bg-secondary">New</span>
      </h5>
      <h6>
        Example heading <span className="badge bg-secondary">New</span>
      </h6>

      <h1> Notification Button</h1>
      <button type="button" className="btn btn-primary">
        Notifications <span className="badge bg-secondary">4</span>
      </button>

      <div className="pt-4">
        <button type="button" className="btn btn-primary position-relative">
          Inbox
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>

      <div className="pt-4">
        <button type="button" className="btn btn-primary position-relative">
          Profile
          <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
            <span className="visually-hidden">New alerts</span>
          </span>
        </button>
      </div>

      <div className="pt-4">
        <span className="badge bg-primary">Primary</span>
        <span className="badge bg-secondary">Secondary</span>
        <span className="badge bg-success">Success</span>
        <span className="badge bg-danger">Danger</span>
        <span className="badge bg-warning text-dark">Warning</span>
        <span className="badge bg-info text-dark">Info</span>
        <span className="badge bg-light text-dark">Light</span>
        <span className="badge bg-dark">Dark</span>
      </div>

      <div className="pt-4">
        <span className="badge rounded-pill bg-primary">Primary</span>
        <span className="badge rounded-pill bg-secondary">Secondary</span>
        <span className="badge rounded-pill bg-success">Success</span>
        <span className="badge rounded-pill bg-danger">Danger</span>
        <span className="badge rounded-pill bg-warning text-dark">Warning</span>
        <span className="badge rounded-pill bg-info text-dark">Info</span>
        <span className="badge rounded-pill bg-light text-dark">Light</span>
        <span className="badge rounded-pill bg-dark">Dark</span>
      </div>
    </div>
  );
}
