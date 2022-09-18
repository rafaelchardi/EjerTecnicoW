import { opMenu } from '../interfaces/opMenu';

export const creaArbol = (elementos:opMenu[], parentId:Number | null  ):opMenu[]  => {
    const hijos = elementos.filter(el => el.parentId === parentId );
    hijos.forEach(ele => {
            ele.children=creaArbol(elementos,ele.id)
           });    
    return hijos; 
};    
