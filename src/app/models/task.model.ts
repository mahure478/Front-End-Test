import { SubTasks } from "./subTask.model";

export class Tasks {
    id: number = 0
    name: string = ''
    status: string =''
    description:string = ''
    children: SubTasks[] = []
}