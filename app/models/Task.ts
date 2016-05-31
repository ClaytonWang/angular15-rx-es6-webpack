/// <reference path="../../typings/index.d.ts" />
import {ITask} from "./ITask";
export class Task implements ITask {
    constructor(title:string, description:string, isComplete:boolean) {
        this._title = title;
        this._description = description;
        this._isComplete = isComplete;
    }

    public get title():string {
        return this._title;
    }
    public get description():string {
        return this._description;
    }
    public get isComplete():boolean {
        return this._isComplete;
    }

    private _title;
    private _description;
    private _isComplete;
}