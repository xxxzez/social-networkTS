// for reducers

export const updateObjectInArray = (
    items: any[],
    itemId: number,
    objPropName: any,
    newObjProps: any
) => {
    return items.map((i) => {
        if (i[objPropName] === itemId) {
            return {
                ...i,
                ...newObjProps,
            }
        }
        return i
    })
}
