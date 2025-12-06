import { User } from "@/interface/validator";

export const validator = (user: User) =>{
    if(!user || !user.name.trim()) return 'Ingrese el nombre, no debe estar vacio';
    return user.name;
}