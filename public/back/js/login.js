  $(function(){
  // console.log($('#form'));
  $('#form').bootstrapValidator({
    // 输入款验证显示的图标
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      // 通过
      invalid: 'glyphicon glyphicon-remove',
      // 未通过
      validating: 'glyphicon glyphicon-refresh'
      // 验证中
    },
    
    fields: {
      // 对字段进行校对
      username: {
        validators: {  
          // 验证规则
          // 这里的validators 需要加s,需注意
          notEmpty: {
            message:"请输入用户名" 
          },
          // 非空验证
          stringLength: {
            min:2,
            max:6,
            message:"用户名至少2-6位"
          },
          callback: {
            message: "用户名不存在"
          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: "密码不能为空"
          },
          stringLength: {
            min:6,
            max:12,
            message: "密码不能少于6-12位"
          },
          callback: {
            message: "密码错误"
          }
        }
      }
    }
  });


  $('#form').on('success.form.bv',function(e) {
    // 阻止表单提交的默认行为
    e.preventDefault();
    $.ajax({
      type: "post",
      data: $('#form').serialize(),
      url: '/employee/employeeLogin',
      dataType: "json",
      success: function(info){
        console.log(info); 
        if(info.success){
          location.href = "index.html"
        } 
        if(info.error ==1000){ 
          $('#form').data("bootstrapValidator").updateStatus("username","INVALID","callback")
        }
        if(info.error ==1001){
          $('#form').data("bootstrapValidator").updateStatus("password","INVALID","callback")
        }
      }
    })
  })


  $('[type=reset]').click(function(){
    // 获取到type属性为reset的元素注册点击事件
    $('#form').data("bootstrapValidator").resetForm();
    // 创建出这个实例然后调用原型上的resetForm方法
  })
});