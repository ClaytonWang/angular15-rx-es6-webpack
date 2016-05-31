import * as angular from 'angular';
/// <reference path="../../typings/index.d.ts" />
import {ITask} from '../models/ITask';
import {Task} from '../models/Task';
import IComponentOptions = angular.IComponentOptions;

class TodoItemComponent {
    public onComplete: Function;
    public task: ITask;
    
    constructor() {
        "ngInject";

        console.log('TodoItemComponent');
    }

    public get isComplete():boolean {
        return this.task.isComplete;
    }
    public set isComplete(complete:boolean) {
        var task = new Task(
            this.task.title,
            this.task.description,
            complete
        );
        this.onComplete(task);
    }
}

var options: IComponentOptions = {
    bindings: {
        'task': '<',
        'onComplete': '='
    },
    template: [
        '<li>',
            '<input type="checkbox" ng-model="vm.isComplete" ng-model-options="{getterSetter: true}" />',
            '<label>{{vm.task.title}} - {{vm.task.description}}</label>',
        '</li>'
    ].join(''),
    controller: TodoItemComponent,
    controllerAs: 'vm'
};

export default options;