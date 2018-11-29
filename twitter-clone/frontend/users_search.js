const ApiUtil = require('./api_util.js')

class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.$input = $('.users-search-input');
    this.$ul = $('.users-search-ul'); 
    console.log(this.$input);
    console.log(this.$ul);
    this.$input.on('input', this.handleInput.bind(this));
  }
  
  handleInput(e) {
    
    ApiUtil.searchUsers(this.$input.val())
    .then(this.renderResults.bind(this));
  }
  renderResults(users) {
    console.log('hi');
    console.log(this.$ul)
    this.$ul.empty();
    console.log(users);
    users.forEach((user) =>{
      this.$ul.append($(`<li><a href="/users/${user.id}">${user.username}</a></li>`));
    });
  }
  
}

module.exports = UsersSearch;