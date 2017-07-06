export function changeValue(e) {
    console.log('chagedValue')
    return {type: 'VALUE_CHANGED', payload: e.target.value}
}