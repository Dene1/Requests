export const removeCase = (cases, casesId) =>
    cases.filter(({id}) => id !== casesId)
