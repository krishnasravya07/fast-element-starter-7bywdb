import { FASTElement, attr, ValueConverter } from "@microsoft/fast-element";

const numberConverter: ValueConverter = {
  toView(value: number): string {
    console.log(`numberConverter:toView: ${value}`);
    return `${value}`;
  },

  fromView(value: string): number {
    console.log(`numberConverter:fromView: ${value}`);
    return parseInt(value);
  }
};

export class GreetingTag extends FASTElement {
  @attr greeting: string = 'Hello';

  @attr({converter: numberConverter}) slideCount: number = 10;

  greetingChanged() {
    console.log(this.greeting);
  }

  slideCountChanged() {
    console.log(`slideCountChanged ${this.slideCount}`);
  }
}
