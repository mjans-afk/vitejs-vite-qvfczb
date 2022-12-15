import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-tabs')
export class Tabs extends LitElement {
  render() {
    return html`
    <bx-tabs trigger-content="Select an item" value="staging">
    <bx-tab id="tab-all" target="panel-all" value="all">Bunlde Content</bx-tab>
    <bx-tab id="tab-staging" target="panel-staging" value="staging">Bundle courses</bx-tab>
  </bx-tabs>
  <div class="bx-ce-demo-devenv--tab-panels">
    <div id="panel-all" role="tabpanel" aria-labelledby="tab-all" hidden>
      <tree-table></tree-table>
    </div>
    <div id="panel-cloudFoundry" role="tabpanel" aria-labelledby="tab-cloudFoundry" hidden>
      <h4>Content for option 2</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div id="panel-staging" role="tabpanel" aria-labelledby="tab-staging" hidden>
      <h4>Content for option 3</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div id="panel-dea" role="tabpanel" aria-labelledby="tab-dea" hidden>
      <h4>Content for option 4</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div id="panel-router" role="tabpanel" aria-labelledby="tab-router" hidden>
      <h4>Content for option 5</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
    `
  }
}