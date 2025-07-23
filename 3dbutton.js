class custom3dButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        button {
          padding: 12px 24px;
          font-size: 18px;
          border: 2px solid white;
          background-color: black;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s ease-in-out;
          box-shadow: 0 4px 0 white;
        }

        button:hover {
          background-color: #222;
        }

        button:active {
          transform: translateY(4px);
          box-shadow: 0 0 0 white;
        }
      </style>
      <button onclick="window.open('https://your-link.com', '_self')">
        CLICK ME
      </button>
    `;
  }
}

customElements.define('custom3dButton', custom3dButton);
