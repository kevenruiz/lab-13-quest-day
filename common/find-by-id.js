export function findById(array, id) {
    for (let index = 0; index < array.lenght; index++) {
        const item = array[index];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}
