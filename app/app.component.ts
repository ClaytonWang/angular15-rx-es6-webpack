/**
 * Created by Darcy on 31/05/2016.
 */
/// <reference path="../typings/index.d.ts" />
import * as angular from 'angular';
import {ITask} from "./models/ITask";
import {Task} from "./models/Task";
import IComponentOptions = angular.IComponentOptions;

class AppComponent {
    public todos: Array<ITask>;

    constructor() {
        "ngInject";
        this.todos = new Array<ITask>();
        this.todos.push(new Task('work','go to work',false));
        this.todos.push(new Task('home','go home',false));
        
        console.log('AppComponent');
    }

    public onComplete(task: ITask) {
        console.log(`onComplete(${JSON.stringify(task)})`);
    }
}

var options: IComponentOptions = {
    template: [
        '<ul>',
            '<todo-item task="todo" on-complete="vm.onComplete" ng-repeat="todo in vm.todos" />',
        '</ul>'
    ].join(''),
    controller: AppComponent,
    controllerAs: 'vm'
};

export default options;