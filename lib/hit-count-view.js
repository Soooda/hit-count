'use babel';

export default class HitCountView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('hit-count');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'HitCount package activated!';
    message.classList.add('message');
    this.element.appendChild(message);

    // Create
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {
      return


  }

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
