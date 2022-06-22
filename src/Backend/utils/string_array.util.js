const StringList = {
	unpack: function (str) {
		str = String(str)
		return str.split(',').map(function (item) {
			return parseInt(item.trim());
		});
	},

	pack: function (arr) {
		return arr.join(',');
	},

	contains: function (str, item) {
		return StringList.unpack(str).indexOf(item) > -1;
	},

	add: function (str, item) {
		var arr = StringList.unpack(str);
		if (arr.indexOf(item) === -1) {
			arr.push(item);
		}
		return StringList.pack(arr);
	},

	remove: function (str, item) {
		var arr = StringList.unpack(str);
		var index = arr.indexOf(item);
		if (index > -1) {
			arr.splice(index, 1);
		}
		return StringList.pack(arr);
	},

	matchs: function (str1, str2) {
		var arr1 = StringList.unpack(str1);
		var arr2 = StringList.unpack(str2);
		return arr1.filter(function (item) {
			return arr2.indexOf(item) > -1;
		});
	},

	matchsPorcent: function (str1, str2) {
		var arr1 = StringList.unpack(str1);
		var matchs = StringList.matchs(str1, str2);
		return ((matchs.length / arr1.length) * 100).toFixed(2);
	},

	remains: function (str1, str2) {
		var arr1 = StringList.unpack(str1);
		var arr2 = StringList.unpack(str2);
		return arr1.filter(function (item) {
			return arr2.indexOf(item) === -1;
		});
	},
};

export default StringList;
