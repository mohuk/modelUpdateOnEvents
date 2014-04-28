modelUpdateOnEvents
===================

Directive to update angular's ng-model on different and custom events

USAGE:

  Blur:
    <input uk-update-model-on blur ng-model="updateModel"> -- updates value on $scope on blur
    
  Enter:
    <input uk-update-model-on enter ng-model="updateModel"> -- updates value on $scope on pressing Enter
    
  Submit:
    <input uk-update-model-on submit="someEvent" ng-model="updateModel"> -- updates value on $scope on firing of someEvent
  
  Submit [with func and args]:
    <input uk-update-model-on submit="someEvent" on-submit="func()" args="['one', 'two']" ng-model="updateModel"> -- updates value on $scope on firing of someEvent and then triggering func with args as independent function arguments

