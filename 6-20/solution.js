function mutateMyStrings(stringOne, stringTwo) {
    let wordOne = stringOne.split('');
    let wordTwo = stringTwo.split('');
    let change = stringOne.concat('\n');
    for (let i = 0; i < wordOne.length; i++) {
        if (wordOne[i] !== wordTwo[i]) {
            wordOne[i] = wordTwo[i];
            change = change.concat(`${wordOne.join('')}\n`);
        }
    }
    return change;
}
