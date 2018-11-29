const APIUtil = {
  followUser: id =>{
    return $.ajax({
      method: 'post',
      url: `/users/${id}/follow`,
      dataType: 'JSON'
    });
  },
  unfollowUser: id =>{
    return $.ajax({
      method: 'delete',
      url: `/users/${id}/follow`,
      dataType: 'JSON'
    })
    ;
  },
  searchUsers: (query, succsess) => {
    return $.ajax({
      method: 'get',
      url: '/users/search',
      dataType: 'JSON',
      data: {query}
    });
  }
};


module.exports = APIUtil;