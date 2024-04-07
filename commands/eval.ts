
export default function(code: string){
    return eval?.(`"use strict";(${code})`) ?? '';
}