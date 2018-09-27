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
  
  $('.catetory').click(function(){

    $(this).next().slideToggle();
    // 单词不要拼错,点击当前元素的下一个子元素下滑切换类名
  })
})