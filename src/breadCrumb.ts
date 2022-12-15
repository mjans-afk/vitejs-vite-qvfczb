import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement("bread-crumb")
export class breadCrumb extends LitElement {
  @property()
  render() {
    return html`
  <ul>
  <li> <a href="/#">Bundles</a>
  </li> /
  <li>
    <a>Bundle name</a>
  </li>
  </ul>`
  }
  static styles = css`
  ul { 
    margin-top: -250px;
    margin-left:0px;
    position: absolute;
  }
  li {
  display:inline;
  }
  li a:hover {
    color:gray;
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'bread-crumb': breadCrumb
  }
}