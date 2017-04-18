$.extend($.fn.validatebox.defaults.rules, {
    equals: {
        validator: function(value,param){
            return value == $(param[0]).val();
        },
        message: '两次输入内容不一致'
    },
	minLength: {
        validator: function(value, param){
            return value.length >= param[0];
        },
        message: 'Please enter at least {0} characters.'
    },
	//手机号码
	mobile: {
		validator: function(value, param){
			return /^0{0,1}1[3,8,5][0-9]{9}$/.test(value);
		},
		message: "手机号码格式不正确"
	},
	//身份证
	IDCard: {
		validator: function(value, param){
			return /^\d{15}(\d{2}[A-Za-z0-9])?$/i.test(value);
		},
		message: "请输入正确的身份证号码"
	},
	//比较时间选择器
	compareDate: {
		validator: function(value, param){
			return dateCompare($(param[0]).datebox("getValue"), value);
		},
		message: "结束日期不能小于开始日期"
	},
	// 验证是否包含空格和非法字符
    unnormal: {
        validator: function (value) {
            return /^[a-zA-Z0-9]/i.test(value);

        },
        message: '输入值不能为空和包含其他非法字符'
    },
    //过滤特殊字符
    filterSpecial:{
        validator: function(value, param){

            //过滤空格
            var flag = /\s/.test(value);
            //过滤特殊字符串
            var pattern  = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】’‘《》；：”“'。，、？]");
            var specialFlag = pattern.test(value);
                return !flag && !specialFlag;
        },
        message: "非法字符，请重新输入"
    },
	checkNum: {
		validator: function(value, param) {
			return /^([0-9]+)$/.test(value);
		},
		message: '请输入整数'
	},
	checkFloat: {
		validator: function(value, param) {
			return /^[+|-]?([0-9]+\.[0-9]+)|[0-9]+$/.test(value);
		},
		message: '请输入合法数字'
	},
    length:{validator:function(value,param){
		var len=$.trim(value).length;
		return len>=param[0]&&len<=param[1];
	},
		message:"输入内容长度必须介于{0}和{1}之间."
	},
    phone : {// 验证电话号码
        validator : function(value) {
            return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
        },
        message : '格式不正确,请使用下面格式:020-88888888'
    },
    intOrFloat : {// 验证整数或小数
        validator : function(value) {
            return /^\d+(\.\d+)?$/i.test(value);
        },
        message : '请输入数字，并确保格式正确'
    },
    qq : {// 验证QQ,从10000开始
        validator : function(value) {
            return /^[1-9]\d{5,9}$/i.test(value);
        },
        message : 'QQ号码格式不正确'
    },
    age : {// 验证年龄
        validator : function(value) {
            return /^(?:[1-9][0-9]?|1[01][0-9]|120)$/i.test(value);
        },
        message : '年龄必须是0到120之间的整数'
    },

    chinese : {// 验证中文
        validator : function(value) {
            return /^[\Α-\￥]+$/i.test(value);
        },
        message : '请输入中文'
    },
    english : {// 验证英语
        validator : function(value) {
            return /^[A-Za-z]+$/i.test(value);
        },
        message : '请输入英文'
    },
    username : {// 验证用户名
        validator : function(value) {
            return /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/i.test(value);
        },
        message : '用户名不合法（字母开头，允许6-16字节，允许字母数字下划线）'
    },
    faxno : {// 验证传真
        validator : function(value) {
//            return /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/i.test(value);
            return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
        },
        message : '传真号码不正确'
    },
    zip : {// 验证邮政编码
        validator : function(value) {
            return /^[1-9]\d{5}$/i.test(value);
        },
        message : '邮政编码格式不正确'
    },
    ip : {// 验证IP地址
        validator : function(value) {
            return /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/i.test(value);
        },
        message : 'IP地址格式不正确'
    },
    name : {// 验证姓名，可以是中文或英文
            validator : function(value) {
                return /^[\Α-\￥]+$/i.test(value)|/^\w+[\w\s]+\w+$/i.test(value);
            },
            message : '请输入中文或英文的姓名'
    },
    date : {// 输入合适的日期格式 yyyy-MM-dd或yyyy-M-d
        validator : function(value) {
         //格式yyyy-MM-dd或yyyy-M-d
            return /^(?:(?!0000)[0-9]{4}([-]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-]?)0?2\2(?:29))$/i.test(value);
        },
        message : '清输入合适的日期格式'
    }
});

/*
 * 比较两个日期的大小
 * 传入的参数推荐是"yyyy-mm-dd"的格式，其他的日期格式也可以，但要保证一致
 */
var dateCompare = function(date1, date2){
	if(date1 && date2){
		var a = new Date(date1);
		var b = new Date(date2);
		return a < b;
	}
}
