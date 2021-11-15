import { html } from "@microsoft/fast-element";
import { GreetingTag } from './greeting-tag';

export const template = html<GreetingTag>`
  <div>Greeting John Doe</div>
  <div>Slide count is: ${x => x.slideCount}</div>
`;