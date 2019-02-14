// --------------------------------------------------------------------------------------
// AppComponent

const template = `
    <h1>AngularJS 1.7.7</h1>
    <h2>Works with object</h2>
    <pre>{{ $ctrl.user | json }}</pre>
    <!--<user user="$ctrl.user"></user>-->
    <!--<user2 name="$ctrl.user.name" age="$ctrl.user.age"></user2>-->

    <hr />
    <h2>Works with primitives</h2>
    <pre>{{ name | json }}</pre>
    <pre>{{ age | json }}</pre>
    <!--<user user="{name: name, age: age}"></user>-->
    <user2 name="name" age="age"></user2>
    
`;

class AppController {
    constructor($scope) {
        // old way
        $scope.name = 'Iliya';
        $scope.age = 14;
    }

    $onInit() {
        this.user = {
            name: 'Georgy',
            age: 30
        };
    }

    // Bonus
    // $doCheck() {
    //     console.log(+new Date(), `change detector was running`);
    // }
}

// --------------------------------------------------------------------------------------

class UserComponent {
    constructor() {
        this.template = `
            <input type="text" ng-model="$ctrl.user.name"/>
            <input type="number" ng-model="$ctrl.user.age"/>
            <pre>{{ $ctrl.user | json }}</pre>
        `
        ;
        this.bindings = {
            user: '='
        };
    }
}

class User2Component {
    constructor() {
        this.template = `
            <input type="text" ng-model="$ctrl.name"/>
            <input type="number" ng-model="$ctrl.age"/>
            <pre>{{ $ctrl.name | json }}</pre>
            <pre>{{ $ctrl.age | json }}</pre>
        `
        ;
        this.bindings = {
            name: '=',
            age: '='
        };
    }
}

// --------------------------------------------------------------------------------------

angular.module('myApp', [])
    .component('app', {template, controller: AppController})
    .component('user', new UserComponent())
    .component('user2', new User2Component());

angular.element(() => {
    angular.bootstrap(document, ['myApp']);
});
