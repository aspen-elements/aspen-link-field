import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { afterNextRender } from "@polymer/polymer/lib/utils/render-status.js";
import { AspenLinkFieldMixin } from "./aspen-link-field-mixin.js";
import "./aspen-field-wrapper.js";

/**
 * `asp-link-fld` Description
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspenLinkField extends AspenLinkFieldMixin(PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <aspen-field-wrapper label="[[label]]" icon="[[icon]]" name="[[label]]">
        <div>
          <a href="[[url]]" target="_blank">[[id]]</a>
        </div>
      </aspen-field-wrapper>
    `;
  }

  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
    return "aspen-link-field";
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Use for one-time configuration of your component after local DOM is initialized.
   */
  ready() {
    super.ready();

    afterNextRender(this, function() {});
  }
}

window.customElements.define(AspenLinkField.is, AspenLinkField);
