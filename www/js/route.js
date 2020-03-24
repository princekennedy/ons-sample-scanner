// define route configurations inside app.config 
// injecting dependencies 
app.config(
  function(
    $stateProvider, 
    $locationProvider,  
    $urlRouterProvider
  ){ 
    // creating routes or states 
    $stateProvider 

        .state('Home', { 
            url : '/home', 
            templateUrl : "html/home.html", 
            controller : "HomeCtrl"
        }) 

        .state('Login', { 
            url : '/login', 
            templateUrl : "html/login.html", 
            controller : "LoginCtrl"
        })         

        .state('AddSample', { 
            url : '/addSample', 
            templateUrl : "html/add-sample.html", 
            controller : "SampleCtrl"
        }) 

        .state('Signup', { 
            url : '/signup', 
            template : "<h1>Signup Page</h1>", 
            controller : "SignupCtrl"
        }); 
  
    // Redirect to home page if url does not  
    // matches any of the three mentioned above 
    $urlRouterProvider.otherwise("/home"); 
}); 


app.controller('SignupCtrl', function($scope) {}); 
