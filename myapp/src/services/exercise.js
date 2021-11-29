import { api } from "./myFetch";

export function GetByHandle(handle) { return  api('exercise/byhandle/' + handle); } 

export function Add(log) {
     return api('exercise', log);
}
