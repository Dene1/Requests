export const findCase = (cases, casesId) => {
    return cases.find((caseItem) => caseItem.id === casesId)
}
