import { ClassConstructor } from "class-transformer";
export declare const validateIt: <T>(data: any, classType: ClassConstructor<T>, groups: any) => Promise<T>;
