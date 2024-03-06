import React from "react";

export default function ButtonComponent() {
  return (
    <div className="container">
      <h1>Buttons - Bootstrap5 With React</h1>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button>

      <button type="button" class="btn btn-link">
        Link
      </button>

      <h1>Button Group - Bootstrap5 With React</h1>
      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" class="btn btn-danger">
          Left
        </button>
        <button type="button" class="btn btn-warning">
          Middle
        </button>
        <button type="button" class="btn btn-success">
          Right
        </button>
      </div>
      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" class="btn btn-danger">
          Left
        </button>
        <button type="button" class="btn btn-warning">
          Middle
        </button>
        <button type="button" class="btn btn-success">
          Right
        </button>
      </div>

      <div
        className="btn-group"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck1"
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" htmlFor="btncheck1">
          Checkbox 1
        </label>
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck2"
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" htmlFor="btncheck2">
          Checkbox 2
        </label>
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck3"
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" htmlFor="btncheck3">
          Checkbox 3
        </label>
      </div>

      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          defaultChecked=""
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          Radio 1
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          Radio 2
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio3">
          Radio 3
        </label>
      </div>
    </div>
  );
}
