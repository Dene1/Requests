export const addCaseInCases = (cases, casee) => {
    if (casee) {
        return [casee, ...cases]; // Просто добавляем новый случай, если он передан
    } else {
        return [...cases]; // Ничего не добавляем, если casee не передан (может быть,
                           // стоит бросить ошибку)
    }
};
