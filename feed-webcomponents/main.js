customElements.define('bastian-post',
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById('bastian-post');
      const templateContent = template.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);
