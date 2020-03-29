import Debug from 'debug';

const debug = Debug('index');

function onLoad(): void {
  debug('loaded');
}

window.addEventListener('load', onLoad);
