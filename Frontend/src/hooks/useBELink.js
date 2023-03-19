
export const useBELink = (string) => {
    const parts = string?.split('\\n') || [];
    const returnValue = [];
    for (let i = 0; i < parts.length; i++) {
        if (i%2 === 0) {
            returnValue.push({url: parts?.[i+1], label: parts[i]?.replaceAll?.(':', '')});
            i++;
        }
    }
    return returnValue;
}