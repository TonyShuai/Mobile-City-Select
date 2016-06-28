function mobileCitySelectinit (){
    //初始化省市插件
    for(var i=0;i<LAreaData1.length;i++){
        var temp =LAreaData1[i];
        $(".leftSelect").append("<a href='javascript:void(0);' json-data='"+JSON.stringify(temp.child)+"'>"+temp.name+"</a>");
    }
    $(".leftSelect,.rightSelect").on("click","a",function(){
        var obj = eval($(this).attr("json-data"));
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        if($(this).attr("json-data")){
            $(".rightSelect").html("");
            for(var ii=0;ii<obj.length;ii++){
            $(".rightSelect").append("<a href='javascript:void(0);' id='"+obj[ii].id+"'>"+obj[ii].name+"</a>");
            }
        }else{
            alert($(this).attr("id"));
            alert($(this).text());
            $('#cityBody').slideUp(200);  //列表隐藏
        }
    });    
}
