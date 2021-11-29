import { api } from "./myFetch";

export function Follow(follower, followee) {
     return api('users/' + follower + '/follow/' + followee, {follower, followee});
}

export function UnFollow(follower, followee) {
    return api('users/' + follower + '/unfollow/' + followee, {}, 'DELETE');
}

export function Approve(follower, followee, shouldApprove) {
    return api('users/' + follower + '/approve/' + followee, {followee, shouldApprove}, 'PATCH');
}
