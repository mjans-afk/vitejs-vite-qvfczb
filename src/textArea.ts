import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('text-area')
export class TextArea extends LitElement {
  render() {
    return html`<bx-textarea> placeholder="Optional placeholder text" rows="4" cols="50">
  <span slot="label-text">Label text</span>
  <span slot="helper-text">Optional helper text</span>
  <span slot="validity-message">Something isn't right</span>
</bx-textarea>
   ` 
  }
}