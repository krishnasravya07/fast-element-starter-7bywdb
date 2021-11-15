import { css } from "@microsoft/fast-element";

export const normalize = css`
  :host {
    display: block;
    contain: content;
  }

  :host([hidden]) {
    display: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
