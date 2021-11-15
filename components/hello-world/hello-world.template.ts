import { html, ref } from "@microsoft/fast-element";
import { HelloWorld } from "./hello-world";

export const template = html<HelloWorld>`
  <form class="form" name="myForm" action="#" ${ref("form")}>
    <!-- In a form -->
    <h2>In a form</h2>
    <fast-text-field
      name="fname"
      aria-label="Text field with aria-label"
      maxlength="3"
    ></fast-text-field>
    <input type="button" value="submit" @click="${x => x.handleSubmit()}" />
  </form>
`;
