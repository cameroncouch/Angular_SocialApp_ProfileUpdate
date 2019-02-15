"use strict";
const profile = {
    template:`
    <section class="firstsection">
        <section class="secondsection">
            <section class="imgwrapper">
                <img src="/app/_MG_4939.JPG"></img>
            </section>
                <section class="textwrapper">
                    <h3>{{$ctrl.userObject.name}}</h3>
                    <p class="email">{{$ctrl.userObject.contact}}</p>
                    <p>{{$ctrl.userObject.bio}}</p>
                    <button ng-click="$ctrl.updateProfile();">Update</button>
            </section>
        </section>
    </section>
    `,
    controller:["ProfileService", function(ProfileService) {
        const vm = this;
        vm.userObject = ProfileService.getUserProfile();
        vm.updateProfile = function(userObject) {
            ProfileService.editProfile(userObject);
        }
    }]
};
angular.module("ProfileApp").component("profile", profile);