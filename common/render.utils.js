import { getUser } from './local-storage-utils.js';
import { renderHeader } from '../common/'

export function renderHeader() {
    const header = document.querySelector('header');
    const user = getUser();
}

const div = document.createElement('div');

div.textContent = `name: ${user.name}, class: ${user.class}, HP: ${user.hp}, gold: ${user.gold}`;

header.append(div);



// PUT THIS IN LOCAL STORAGE

export function areAllQuestComplete {
    let(quest of quests) {
        // if use hasnt completed this quest. return with false, this will stop the function from continuing to run. 
        if (!user.completed[quest.id]) {
            return false;

        }
    }
    return true;
}