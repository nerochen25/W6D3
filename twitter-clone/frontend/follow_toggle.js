const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor($el) {
    this.$el = $el;
    this.userId = $el.data('user-id');
    this.followState = $el.data('initial-follow-state');
    this.render();
    $el.on('click', this.handleClick.bind(this));
  }
  
  render() {
    if (this.followState === 'followed') {
      this.$el.text('follow');
    } else {
      this.$el.text('unfollow');
    }
  }
  
  handleClick(e) {
    e.preventDefault();

    if (this.followState === 'unfollowed') {
      APIUtil.followUser(this.userId)
      .then(
        (res) => {
          this.followState = 'followed';
          this.render();
        },
        (res) => {
          alert('Unfollow We messed up sorry');
        });
      
    } else {
      APIUtil.unfollowUser(this.userId)
      .then(
        (res) => {
          this.followState = 'unfollowed';
          this.render();
        },
        (res) => {
          alert('Unfollow We messed up sorry');
        });
      
    }
  }
}

module.exports = FollowToggle;