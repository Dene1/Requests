export const setCaseInCases = (cases, casee) =>
    cases.map((caseItem) => caseItem.id === casee.id ? {
            ...caseItem,
            ...casee
        } : caseItem
    )
