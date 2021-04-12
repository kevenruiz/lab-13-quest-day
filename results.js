import { getUser } from '../data/api.js';
import { renderHeader } from '../render-utils.js';
import { isFainted } from './common/is-fainted.js';

const user = getUser();

renderHeader();


let goldStatus;

if (user.gold < 20) {
    goldStatus = 'poor';
} else if (user.gold > 20 && user.gold < 50) {

} else {
    goldStatus = 'rich';
}




const button = document.querySelector('button');

button.addEventListener('click', () => {
    localStorage.clear();

    window.location = '../';
});