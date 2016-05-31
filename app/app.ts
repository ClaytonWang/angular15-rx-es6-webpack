/**
 * Created by Darcy on 31/05/2016.
 */
/// <reference path="../typings/index.d.ts" />
import * as angular from 'angular';
import components from './components';

import AppComponent from './app.component';

angular.module('app',[
    components.name
])
.component('app',AppComponent);

angular.bootstrap(document.body,['app']);