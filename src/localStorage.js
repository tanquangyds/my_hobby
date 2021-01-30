export const loadStage = () => {
    try {
        const serializedStage = localStorage.getItem('state');
        if (serializedStage === null) {return undefined}
        return JSON.parse(serializedStage);
    } catch (e) {
        return undefined;
    }     
    
} 

export const saveStage = (state) => {
    try {
        const serializedStage = JSON.stringify(state);
        localStorage.setItem('state', serializedStage)
    } catch (e) {
        // ...
    } 
}