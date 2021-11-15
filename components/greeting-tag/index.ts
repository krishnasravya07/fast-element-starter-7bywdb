import { customElement } from "@microsoft/fast-element";
import { GreetingTag } from './greeting-tag';
import { template } from './greeting-tag.template';
import { styles } from './greeting-tag.styles';

@customElement({ name: "greeting-tag", template, styles })
export class GreetingTagElement extends GreetingTag {}
