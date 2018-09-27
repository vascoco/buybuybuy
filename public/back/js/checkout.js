

// 验证用户是否登录过

$(function(){
  $.ajax({
    type: 'get',
    url: '/employee/checkRootLogin',
    dataType: 'json',
    success: function(info){
      console.log(info);
      if(info.error === 400){
        location.href = "login.html";
      }
    }
  })
})