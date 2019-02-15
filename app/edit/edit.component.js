"use strict";
const edit = {
    template: `
        <section class="modul">
            <h3>Use the form below to update your profile.</h3>
            <form ng-submit="$ctrl.notPopulated($ctrl.userObject);">
                <p>Name</p>
                <input ng-model="$ctrl.userObject.name" type="text">
                <p>Contact</p>
                <input ng-model="$ctrl.userObject.contact" type="text">
                <p>Bio</p>
                <textarea ng-model="$ctrl.userObject.bio"></textarea>
                <button>Update</button>
            </form>
        </section>
    `,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.notPopulated = function(userObject) {
            ProfileService.setUserProfile(userObject);
            console.log(userObject);
        }
    }]
};

angular.module("ProfileApp").component("edit", edit);