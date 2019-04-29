'use babel';

import HitCountView from './hit-count-view';
import { CompositeDisposable } from 'atom';

export default {

  hitCountView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.hitCountView = new HitCountView(state.hitCountViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.hitCountView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'hit-count:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.hitCountView.destroy();
  },

  serialize() {
    return {
      hitCountViewState: this.hitCountView.serialize()
    };
  },

  toggle() {
    console.log('HitCount was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
