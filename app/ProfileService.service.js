"use strict";
//service is always init as a function - that's how it's done
function ProfileService($location) {
    const self = this;
    self.userObject = {
        name: "Cam",
        contact: "cameronmcouch@gmail.com",
        bio: "I love to draw. I am married, and I have two cats. I live in Howell, MI."
    };
    self.getUserProfile = function() {
        return self.userObject;
    };
    self.setUserProfile = function(userObject) {
        $location.path("/profile");
        console.log(self.userObject);
        self.userObject = userObject;
    };
    self.editProfile = function() {
        $location.path("/edit");
    };
}
// function ProfileService($location) {
//     let userObject = {};
//     function getUserProfile() {
//         return userObject;
//     };
//     function setUserProfile(userObject) {
//         userObject = userObject;
//         $location.path("/profile");
//     };
//     function editProfile() {

//     };
//     return {getUserProfile, setUserProfile};
// }
angular.module("ProfileApp").service("ProfileService", ProfileService);