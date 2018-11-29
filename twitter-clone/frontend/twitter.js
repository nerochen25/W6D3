const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$(() => {
  let $toggleButtons = $('.follow-toggle');
  $toggleButtons.each((i, el) => {
    new FollowToggle($(el));
  });
  
  let $userSearch = $('.users-search');
  new UsersSearch($userSearch);
  
});
