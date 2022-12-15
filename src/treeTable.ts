import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('tree-table')
export class TreeTable extends LitElement{


static styles = css`
.myCLass{
background-color: red;
}
`
;  

render() {
  return html`
  <div class="myClass">
  <bx-table styles="text-style:bold">
  <bx-table-head>
    <bx-table-header-row>
      <bx-table-header-cell> </bx-table-header-cell>
      <bx-table-header-cell>Name</bx-table-header-cell>
      <bx-table-header-cell>Condition</bx-table-header-cell>
      <bx-table-header-cell>External ID</bx-table-header-cell>
      <bx-table-header-cell>Status</bx-table-header-cell>
    </bx-table-header-row>
  </bx-table-head>
  <bx-table-body color-scheme="zebra">
    <bx-table-row>
      <bx-table-cell></bx-table-cell>
      <bx-table-cell>Bar1</bx-table-cell>
      <bx-table-cell>Baz1</bx-table-cell>
      <bx-table-cell>Baz1</bx-table-cell>
      <bx-table-cell>Baz1</bx-table-cell>
    </bx-table-row>
    <bx-table-row>
      <bx-table-cell>Foo2</bx-table-cell>
      <bx-table-cell>Bar2</bx-table-cell>
      <bx-table-cell>Baz2</bx-table-cell>
      <bx-table-cell>Baz1</bx-table-cell>
      <bx-table-cell>Baz1</bx-table-cell>
    </bx-table-row>
    <bx-table-row>
      <bx-table-cell>Foo3</bx-table-cell>
      <bx-table-cell>Bar3</bx-table-cell>
      <bx-table-cell>Baz3</bx-table-cell>
      <bx-table-cell>Baz1</bx-table-cell>
    
      <bx-table-cell>Baz1</bx-table-cell>
    </bx-table-row>
  </bx-table-body>
</bx-table>
</div>
  `;
}
}