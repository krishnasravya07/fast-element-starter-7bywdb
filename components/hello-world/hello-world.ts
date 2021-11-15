import { FASTElement } from "@microsoft/fast-element";

export class HelloWorld extends FASTElement {

  public form: HTMLFormElement | undefined;

  handleSubmit() {
    let valid = this.form?.checkValidity();
    console.log("valid", valid);
  }
}
