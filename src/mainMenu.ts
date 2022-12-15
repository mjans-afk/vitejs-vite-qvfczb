import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('main-menu')
export class MainMenu extends LitElement {
  render() {
    return html`
  <bx-header aria-label="aNewSpring">
    
  <bx-header-name href="javascript:void 0" prefix="Home"></bx-header-name>
  <bx-header-nav menu-bar-label="Ans [Platform]">
    <bx-header-nav-item href="javascript:void 0">Catalog</bx-header-nav-item>
    <bx-header-menu styles="left:500px;" menu-label="Account" trigger-content="User name">
      <bx-header-menu-item href="javascript:void 0">Results overview</bx-header-menu-item>
      <bx-header-menu-item href="javascript:void 0">Account settings</bx-header-menu-item>
      <bx-header-menu-item href="javascript:void 0">Log out</bx-header-menu-item>
    </bx-header-menu>

    <bx-header-menu-button button-label-active="Close menu" button-label-inactive="Open menu"></bx-header-menu-button>
  </bx-header-nav>
</bx-header>
`;
  }
}
