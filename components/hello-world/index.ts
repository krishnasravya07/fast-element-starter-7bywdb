import { customElement } from "@microsoft/fast-element";
import { HelloWorld } from './hello-world';
import { template } from './hello-world.template';
import { styles } from './hello-world.styles';

@customElement({ name: "hello-world", template, styles })
export class HelloWorldElement extends HelloWorld {}
