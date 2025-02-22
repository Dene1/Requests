export const setCaseInCases = (cases, caseToSet) => {
    return cases.map((c) =>
        (c.id === caseToSet.id ? {...c, ...caseToSet} : c))
};
