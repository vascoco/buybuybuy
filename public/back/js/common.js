$(function(){

  // 进度条功能----------
  $(document).ajaxStart(function(){
    // 当第一个ajax请求发送时调用
    NProgress.start();
    // 开启进度条
  })


  setInterval(function(){
    // 当所有ajax请求完成时会调用
    $(document).ajaxStop(function(){
      NProgress.done();
      // 完成进度条
    })
  },500)
  // 因为是一瞬间完成的所以需要添加定时器,模拟网略延迟
})


$(function(){
  // 侧边栏二级导航切换
  $('.catetory').click(function(){

    $(this).next().slideToggle();
    // 单词不要拼错,点击当前元素的下一个子元素下滑切换类名
  })

  // 顶端功能栏切换-------
  $('.icon-menu').click(function(){
    // 通过切换类名来移动
    $('.lt-aside').toggleClass("hidemenu");
    // 侧边栏只需要left改为负的宽度
    $('.lt-topbar').toggleClass('hidemenu');
    $('.lt-main').toggleClass('hidemenu');
    // main和topbar 只需要修改padding 值为0 就可以实现
  })


  // 模态框出现功能---------
  $('.logout').click(function(){
    $('.modal').modal("show");
  })

  // 模态框退出功能---------
  $('#logoutBtn').click(function(){
    $.ajax({
      url: "/employee/employeeLogout",
      dataType: 'json',
      type: 'GET',
      success: function(info){
        console.log(info);
        if(info.success){
          // 发送ajax请求如果是成功就退出首页跳转到登录页面
          location.href = "login.html";
        }
      }
    })
  })

})