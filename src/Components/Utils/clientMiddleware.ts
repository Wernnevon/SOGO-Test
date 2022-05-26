export function isEmpty(client:any):boolean{
    return Object.values(client).some(x => x !== null && x !== '');
}