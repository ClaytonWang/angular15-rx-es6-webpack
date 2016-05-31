/**
 * Created by Darcy on 31/05/2016.
 */
/// <reference path="../../typings/index.d.ts" />
import * as angular from 'angular';
import todoItemComponent from './TodoItem.component';

export default angular.module('app.components',[])
                      .component('todoItem',todoItemComponent);