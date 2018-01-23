(this || (0, eval)("(this)")).bdor = [];
(function (b) {
	function c(b) {
		b = f.match(b);
		if (null == b || 0 == b.length) return 0;
		b = b[0];
		var c = b.indexOf("/");
		b = b.substring(c + 1, b.length);
		return "" == b ? 0 : parseInt(b)
	}

	function d(b) {
		b = f.match(b);
		if (null == b || 0 == b.length) return 0;
		b = b[0].replace("_", ".").match(/\d+\.?\d?/);
		if (null == b || 0 == b.length) return 0;
		b = b[0];
		return "" == b ? 0 : parseFloat(b)
	}
	var f = navigator.userAgent.toLowerCase();
	b.browser = {};
	b.browser.webkit = /webkit/.test(f);
	b.browser.mozilla = /firefox/.test(f);
	b.browser.firefox = b.browser.mozilla;
	b.browser.msie = /msie/.test(f) ||
		/trident/.test(f);
	b.browser.opera = /opera/.test(f) || /opr/.test(f);
	b.browser.chrome = /chrome/.test(f) && !b.browser.opera;
	b.browser.uc = /ucbrowser/.test(f);
	b.browser.safari = /safari/.test(f) && !b.browser.chrome && !b.browser.uc && !b.browser.opera;
	b.browser.version = 0;
	bdor[1] = "p";
	b.browser.firefox && (b.browser.version = c(/firefox\/\d+/));
	if (b.browser.msie) {
		var g = f.match(/msie\s?\d+\.0/);
		null == g ? (g = f.match(/trident\/\d+\.0/), null != g && 0 < g.length && (g = parseInt(g[0].replace("trident/", "")), b.browser.version = g + 4)) : (g =
			parseInt(g[0].replace("msie", "")), b.browser.version = g)
	}
	b.browser.opera && (b.browser.version = c(/opera\/\d+/) || c(/opr\/\d+/));
	b.browser.chrome && (b.browser.version = c(/chrome\/\d+/));
	b.browser.uc && (b.browser.version = c(/ucbrowser\/\d+/));
	b.browser.safari && (b.browser.version = c(/safari\/\d+/));
	if (void 0 == b.browser.device) {
		b.browser.DEVICE_PC = 0;
		b.browser.DEVICE_PAD = 1;
		b.browser.DEVICE_PHONE = 2;
		var g = /pad/.test(f) || /ipod/.test(f),
			h = /iphone/.test(f),
			k = /wpdesktop/.test(f) || /windows phone/.test(f),
			l = /blackberry/.test(f),
			m = /mobile/.test(f) || /phone/.test(f);
		b.browser.device = b.browser.DEVICE_PC;
		if (g) b.browser.device = b.browser.DEVICE_PAD;
		else if (h || k || l || m) b.browser.device = b.browser.DEVICE_PHONE
	}
	void 0 == b.browser.prefix && (b.browser.prefix = "", !0 == b.browser.webkit && (b.browser.prefix = "-webkit-"), !0 == b.browser.mozilla && (b.browser.prefix = "-moz-"), !0 == b.browser.opera && (b.browser.prefix = "-webkit-"), !0 == b.browser.uc && (b.browser.prefix = "-webkit-"), !0 == b.browser.msie && (b.browser.prefix = "-ms-"));
	if (void 0 == b.system) {
		b.system = {
			name: "",
			version: 0
		};
		b.system.WINDOWS = "Windows";
		b.system.WP = "WinPhone";
		b.system.WP_DESKTOP = "WinPhoneDesktop";
		b.system.MAC = "Mac OS";
		b.system.IOS = "iPhone OS";
		b.system.LINUX = "Linux";
		b.system.ANDROID = "Android";
		b.system.BLACKBERRY = "BlackBerry";
		/windows/.test(f) && (b.system.name = b.system.WINDOWS, b.system.version = d(/windows nt\s?\d+\.?\d?/));
		/windows phone/.test(f) && (b.system.name = b.system.WP, b.system.version = d(/windows phone\s?\d+\.?\d?/));
		/wpdesktop/.test(f) && (b.system.name = b.system.WP_DESKTOP, b.system.version = d(/wpdesktop\s?\d+\.?\d?/));
		if (b.system.name != b.system.WP) {
			if (/iphone/.test(f) || /ipad/.test(f)) b.system.name = b.system.IOS, b.system.version = d(/os\s?\d+_?\d?/);
			/android/.test(f) && (b.system.name = b.system.ANDROID, b.system.version = d(/android\s?\d+\.?\d?/))
		}
		/mac/.test(f) && b.browser.system != b.browser.IOS && (b.system.name = b.system.MAC, b.system.version = d(/os x\s?\d+\.?\d?/));
		/linux/.test(f) && !/android/.test(f) && (b.system.name = b.system.LINUX);
		/blackberry/.test(f) && (b.system.name = b.system.BLACKBERRY, b.system.version = d(/blackberry\s?\d+/))
	}
})(jQuery);

var bookConfig = { //全局配置
	totalPageCount: window.Wxx.images.length || 0,
	largePageWidth: 1080,
	largePageHeight: 1440,
	bgMRotation: 45,
	topMargin: 10,
	bottomMargin: 10,
	leftMargin: 10,
	rightMargin: 10,
	LinkAlpha: 0.5,
	maxWidthToSmallMode: "400",
	maxHeightToSmallMode: "300",
	showDoublePage: "Yes",
	securityType: "1",
	FlipStyle: 'Flip',
	retainBookCenter: "Yes",
	flippingTime: "0.3",
	LeftShadowWidth: '90',
	LeftShadowAlpha: '0.6',
	RightShadowAlpha: '0.6',
	RightShadowWidth: '55',
	HardPageEnable: "No",
	hardCoverBorderWidth: '8',
	outerCoverBorder: 'Yes',
	cornerRound: '8',
	BindingType: '0.3',
	RightToLeft: 'No'
};


var global = function () {
	return this || (0, eval)("(this)")
}();

virtual_function = function () { };

function getPackageByName(b) {
	if (void 0 == b || "" == b) return global;
	var c = global;
	b = b.split(".");
	for (var d = 0; d < b.length; d++) {
		var f = b[d];
		c[f] || (c[f] = {
			IS_PACKAGE_OBJECT: !0
		});
		c = c[f]
	}
	return c
}

function getClassByFullName(b) {
	if (-1 == b.indexOf(".")) return global[b];
	var c = b.split(".");
	b = c.pop();
	c = c.join(".");
	return getPackageByName(c)[b]
}

function classof(b, c) {
	if (!b) return "";
	c || (c = global);
	"string" == typeof c && (c = getPackageByName(c));
	for (var d in c)
		if (c[d] instanceof Function) try {
			if (b instanceof c[d]) return d
		} catch (f) { }
	for (d in c)
		if ("object" == typeof c[d] && c[d].IS_PACKAGE_OBJECT) {
			var g = classof(b, c[d]);
			if ("" != g) return d + "." + g
		}
	return ""
}

function Class(b, c) {
	if ("string" === typeof b) {
		var d = c,
			f = getPackageByName(d.Package);
		f[b] = Class(d);
		return f[b]
	}
	d = function () {
		if (this.Import) {
			"string" == typeof this.Import && (this.Import = [this.Import]);
			for (var b = 0; b < this.Import.length; b++) {
				var c = this.Import[b],
					d = getPackageByName(c);
				if (d instanceof Function) this[c.split(".").pop()] = d;
				else
					for (var f in d) d[f] instanceof Function && (this[f] = d[f])
			}
		}
		d = getPackageByName(this.Package);
		if (d != global)
			for (f in d) this.getClassName() != f && d[f] instanceof Function && (this[f] =
				d[f]);
		this.create && this.create instanceof Function && this.create.apply(this, arguments)
	};
	d.prototype = b || {};
	d.prototype.getClassName = function () {
		return classof(this, this.Package)
	};
	d.prototype.getClass = function () {
		var b = this.getClassName();
		return getPackageByName(this.Package)[b]
	};
	f = d.prototype.statics;
	if (void 0 != f) {
		for (var g in f) void 0 == d[g] && (d[g] = f[g]);
		delete d.prototype.statics
	}
	return d
}
Function.prototype.extend = function (b) {
	if (!b) return this;
	if ("string" == typeof b)
		if (-1 < b.indexOf(".")) {
			if (b = getClassByFullName(b), !b) return this
		} else {
			var c = this.prototype.Package,
				d = b,
				f = b;
			c && "" != c && (f = c + "." + d);
			if (c = getClassByFullName(f)) b = c;
			else if (c = getClassByFullName(d)) b = c;
			else return this
		}
	if (b instanceof Function) {
		for (var g in b) void 0 == this[g] && (this[g] = b[g]);
		for (g in b.prototype) void 0 == this.prototype[g] ? b.prototype[g] == virtual_function ? console && console.error && console.error("virtual function [%s] must be override.",
			g) : this.prototype[g] = b.prototype[g] : (d = /xyz/.test(function () {
				xyz
			}) ? /\b_super\b/ : /.*/, this.prototype[g] instanceof Function && b.prototype[g] instanceof Function && d.test(this.prototype[g]) && (this.prototype[g] = function (c, d) {
				return function () {
					var f = this._super;
					this._super = b.prototype[c];
					var g = d.apply(this, arguments);
					this._super = f;
					return g
				}
			}(g, this.prototype[g])));
		if (b.prototype.Import)
			for (this.prototype.Import || (this.prototype.Import = []), g = b.prototype.Import, d = 0; d < g.length; d++) this.prototype.Import.push(g[d]);
		b.prototype.Package && this.prototype.Package != b.prototype.Package && (this.prototype.Import || (this.prototype.Import = []), this.prototype.Import.push(b.prototype.Package));
		return this
	}
	return "object" !== typeof b ? this : this.extend(Class(b))
};
Function.prototype.expand = function (b, c) {
	if ("object" === typeof b)
		if (void 0 == c && (c = !1), !0 === c)
			for (var d in b) this.prototype[d] = b[d];
		else this.extend(Class(b))
};
var Instance = {
	copy: function (b) {
		if (!b) return null;
		var c = {};
		b instanceof Array && (c = []);
		for (property in b) c[property] = "object" == typeof b[property] ? Instance.copy(b[property]) : b[property];
		return c
	},
	create: function (b, c) {
		c || (c = []);
		var d = b;
		"string" == typeof b && (d = getClassByFullName(d));
		if (!d) return null;
		var f = d.prototype.create;
		d.prototype.create = function () { };
		var g = new d;
		d.prototype.create = f;
		g.create && g.create instanceof Function && g.create.apply(g, c);
		return g
	},
	JSON: function (b) {
		if (void 0 == b || null == b) return b;
		if (b instanceof Array) {
			for (var c = "[", d = 0; d < b.length; d++) c = c + Instance.JSON(b[d]) + ", ";
			1 < c.length && (c = c.substr(0, c.length - 2));
			return c + "]"
		}
		if (b instanceof Function) return b;
		if ("string" === typeof b) return '"' + b.toString() + '"';
		if ("number" === typeof b) return Number(b).toString();
		if ("boolean" === typeof b) return Boolean(b).toString();
		if ("object" === typeof b) {
			c = "{";
			for (d in b) sPropStr = '"' + d + '":' + Instance.JSON(b[d]) + ", ", c += sPropStr;
			1 < c.length && (c = c.substr(0, c.length - 2));
			return c += "}"
		}
	},
	parse: function (b, c) {
		return b &&
			"undefined" != b && "null" != b && "" != b ? eval("(" + b + ")") : c
	}
};
Object.create = Object.create || function () {
	function b() { }
	return function (c) {
		if (1 != arguments.length) throw Error("Object.create implementation only accepts one parameter.");
		b.prototype = c;
		return new b
	}
}();
Object.keys = Object.keys || function (b) {
	if (b !== Object(b)) throw new TypeError("Object.keys called on a non-object");
	var c = [],
		d;
	for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(d);
	return c
};
(function () {
	for (var b = 0, c = ["webkit", "moz"], d = 0; d < c.length && !window.requestAnimationFrame; ++d) window.requestAnimationFrame = window[c[d] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c[d] + "CancelAnimationFrame"] || window[c[d] + "CancelRequestAnimationFrame"];
	window.requestAnimationFrame || (window.requestAnimationFrame = function (c) {
		var d = (new Date).getTime(),
			h = Math.max(0, 16.7 - (d - b)),
			k = window.setTimeout(function () {
				c(d + h)
			}, h);
		b = d + h;
		return k
	});
	window.cancelAnimationFrame || (window.cancelAnimationFrame =
		function (b) {
			clearTimeout(b)
		})
})();
(function () {
	var b = {
		supportsFullScreen: !1,
		isFullScreen: function () {
			return !1
		},
		requestFullScreen: function () { },
		cancelFullScreen: function () { },
		fullScreenEventName: "-",
		prefix: ""
	},
		c = ["webkit", "moz", "o", "ms"];
	if ("undefined" != typeof document.exitFullscreen) b.supportsFullScreen = !0;
	else if ("undefined" != typeof document.cancelFullScreen) b.supportsFullScreen = !0;
	else
		for (var d = 0, f = c.length; d < f; d++)
			if (b.prefix = c[d], "undefined" != typeof document[b.prefix + "CancelFullScreen"]) {
				b.supportsFullScreen = !0;
				break
			}
	b.supportsFullScreen &&
		(b.fullScreenEventName = b.prefix + "fullscreenchange", b.isFullScreen = function () {
			switch (this.prefix) {
				case "":
					return document.fullScreen;
				case "webkit":
					return document.webkitIsFullScreen;
				default:
					return document[this.prefix + "FullScreen"]
			}
		}, b.requestFullScreen = function (b) {
			b[this.prefix + "RequestFullScreen"]()
		}, b.cancelFullScreen = function (b) {
			return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
		});
	window.fullScreenApi = b
})();
Function.expand({
	bind: function (b) {
		var c = this;
		return function () {
			return c.apply(b, arguments)
		}
	},
	delay: function (b, c, d) {
		"object" !== typeof b && (d = c, c = b, b = {});
		c = c || 1;
		d = d || [];
		return setTimeout(function () {
			this.apply(b, d)
		}.bind(this), c)
	},
	interval: function (b, c, d) {
		"object" !== typeof b && (d = c, c = b, b = {});
		c = c || 1;
		d = d || [];
		var f = this;
		return {
			intervalId: setInterval(function () {
				this.apply(b, d)
			}.bind(this), c),
			stop: function () {
				clearInterval(this.intervalId);
				this.intervalId = void 0
			},
			isRunning: function () {
				return void 0 != this.intervalId
			},
			start: function () {
				this.intervalId = setInterval(function () {
					f.apply(b, d)
				}, c)
			}
		}
	},
	runInAnimate: function (b, c) {
		"object" !== typeof b && (c = b, b = {});
		var d = {
			stopFlag: !1,
			stop: function () {
				this.stopFlag = !0
			}
		},
			f = this,
			g = 0,
			h = Math.ceil(c / 16.7),
			k = function () {
				g++;
				!1 !== f.apply(b, [g, h]) && !0 !== d.stopFlag && (g < h || void 0 == c) && window.requestAnimationFrame(k)
			};
		k();
		return d
	},
	executeOnce: function () {
		this.executed || (this.executed = !1);
		this.executed || (this(), this.executed = !0)
	}
});
String.expand({
	trim: function () {
		return this.replace(/(^\s*)|(\s*$)/g, "")
	},
	replaceAll: function (b, c, d) {
		void 0 == d && (d = !1);
		if (RegExp && !d) return this.replace(RegExp(b, "g"), c);
		var f = this.indexOf(b);
		d = [];
		for (var g = this; - 1 != f;) {
			var f = f + b.length,
				h = g.substring(0, f),
				g = g.substring(f),
				h = h.replace(b, c);
			d.push(h);
			f = g.indexOf(b)
		}
		"" !== g && d.push(g);
		return d.join("")
	},
	subBetween: function (b, c) {
		if (void 0 == b || void 0 == c) return "";
		var d = this.length,
			f = this.indexOf(b);
		if (-1 == f) return "";
		f += b.length;
		d = this.substring(f, d).indexOf(c);
		return -1 == d ? "" : this.substring(f, d + f)
	},
	html2Text: function () {
		return this.replaceAll("<[.[^<]]*>", "")
	},
	HTMLLabel2Text: function () {
		return this.replaceAll("<", "&lt;").replaceAll(">", "&gt;")
	},
	isUrl: function () {
		return "" != this && this.match(/(http\:\/\/)?([\w.]+)(\/[\w-   \.\/\?%&=]*)?/gi) ? !0 : !1
	},
	isEmail: function () {
		return "" != this && this.match(/^([A-Za-z0-9])(\w)+@(\w)+(\.)(com|com\.cn|net|cn|net\.cn|org|biz|info|gov|gov\.cn|edu|edu\.cn)/) ? !0 : !1
	},
	toArray: function (b) {
		b || (b = "");
		return this.split(b)
	},
	reverse: function () {
		var b =
			this.split("");
		b.reverse();
		return b.join("")
	},
	equals: function (b) {
		return this.trim() == b.trim()
	},
	equalsIgnoreCase: function (b) {
		return this.toLowerCase().trim() == b.toLowerCase().trim()
	},
	startWith: function (b) {
		return "" === b ? !1 : this.substr(0, b.length) === b
	},
	endWith: function (b) {
		return "" === b ? !1 : this.substr(-b.length, b.length) === b
	},
	isEnglish: function () {
		return /[\x00-\xff]/.test(this)
	},
	overflow: function (b) {
		if (void 0 == b) return this.toString();
		var c = 2;
		/[^\x00-\xff]/.test(this) && (b = Math.floor(b / 2), c = Math.floor(c /
			2));
		return this.length - b > c ? this.substr(0, b) + "..." : this.toString()
	},
	extract: function () {
		if (0 == this.length || 0 == arguments.length) return [];
		for (var b = [], c = this.toString(), d = 0; d < c.length;) {
			for (var f = !1, g = 0; g < arguments.length; g++) {
				var h = arguments[g];
				if (c.substr(d, h.length) == h) {
					b.push(h);
					d += h.length;
					f = !0;
					break
				}
			}
			f || d++
		}
		return b
	},
	remove: function (b) {
		if ("string" == typeof b && b) {
			var c = this.indexOf(b);
			if (!(0 > c)) return b = b.length, this.substring(0, c) + this.substring(c + b, this.length)
		}
	},
	removeStartWidth: function (b) {
		if ("string" ==
			typeof b && b && (b = this.indexOf(b), !(0 > b))) return this.substring(0, b)
	},
	cycle: function (b) {
		if (!isNaN(b)) {
			for (var c = parseInt(b / this.length), d = this; 0 < c;) d += this, c--;
			return d.substring(0, b)
		}
	},
	statics: {
		format: function () {
			if (0 == arguments.length) return "";
			if (1 == arguments.length) return arguments[0];
			for (var b = arguments[0], c = b.extract("%s", "%d", "%f"), d = 1; d < arguments.length; d++) {
				var f = arguments[d],
					g = c[d - 1];
				"%s" == g && ("string" == typeof f ? b = b.replace("%s", f) : b = b.replace("%s", ""));
				if ("%d" == g) {
					isNaN(f) && (f = 0);
					var h;
					h = "number" ==
						typeof f ? -1 == Number(f).toString().indexOf(".") : !1;
					h ? b = b.replace("%d", f + "") : b = b.replace("%d", "")
				}
				"%f" == g && (isNaN(f) && (f = 0), "number" == typeof f ? b = b.replace("%f", f + "") : b = b.replace("%f", ""))
			}
			return b
		}
	},
	riseAWord: function (b, c) {
		-1 == this.indexOf(b) && (b = b.toLowerCase());
		if (-1 != this.indexOf(b)) return this.replaceAll(b, "<font color=red><strong>" + b + "</strong></font>")
	}
});
Array.expand({
	remove: function (b) {
		return isNaN(b) || b > this.length ? !1 : this.splice(b, 1)[0]
	},
	indexOf: function (b) {
		for (var c = 0; c < this.length; c++)
			if (this[c] === b) return c;
		return -1
	},
	removeElement: function (b) {
		b = this.indexOf(b); - 1 < b && this.remove(b)
	},
	lastIndexOf: function (b) {
		for (var c = -1, d = 0; d < this.length; d++) this[d] === b && (c = d);
		return c
	},
	statics: {
		isArray: function (b) {
			return "[object Array]" == Object.prototype.toString.call(b)
		}
	}
});
Date.expand({
	format: function (b, c) {
		c = c || !0;
		var d = {
			"y+": this.getYear(),
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			S: this.getMilliseconds()
		};
		/(y+)/.test(b) && (b = b.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
		for (var f in d) RegExp("(" + f + ")").test(b) && (b = !0 === c ? b.replace(RegExp.$1, d[f]) : b.replace(RegExp.$1, 1 == RegExp.$1.length ? d[f] : ("00" + d[f]).substr(("" + d[f]).length)));
		return b
	},
	statics: {
		now: function () {
			return (new Date).getTime()
		}
	}
});
Number.expand({
	statics: {
		between: function (b, c, d) {
			b < c && (b = c);
			b > d && (b = d);
			return b
		},
		fixed: function (b, c) {
			var d = Math.pow(10, c);
			return Math.round(b * d) / d
		}
	}
});
var Color = function (b) {
	return {
		value: b,
		toString: function () {
			function b(c, d, h) {
				if (c.length < h && c.length > d)
					for (; c.length < h;) c = "0" + c;
				return c
			}
			var d = this.value;
			d || (d = 0);
			if ("string" == typeof d) {
				if (0 == d.indexOf("#")) return d;
				if (0 == d.indexOf("0x")) return d.replace("0x", "#")
			}
			d = parseInt(d).toString(16);
			8 < d.length && (d = d.substr(0, 8));
			d = b(d, 6, 8);
			d = b(d, 3, 6);
			d = b(d, 0, 3);
			return "#" + d
		},
		valueOf: toString,
		split: function () {
			var b = {
				r: 0,
				g: 0,
				b: 0,
				a: 255
			};
			if (!this.value) return b;
			var d = this.toString(),
				f = "FF",
				g = "FF",
				h = "FF",
				k = "FF";
			switch (d.length) {
				case 9:
					k =
						d.substr(1, 2);
					f = d.substr(3, 2);
					g = d.substr(5, 2);
					h = d.substr(7, 2);
					break;
				case 7:
					f = d.substr(1, 2);
					g = d.substr(3, 2);
					h = d.substr(5, 2);
					break;
				case 4:
					f = d.substr(1, 1);
					g = d.substr(2, 1);
					h = d.substr(3, 1);
					f += f;
					g += g;
					h += h;
					break;
				default:
					return b
			}
			return {
				r: parseInt(f, 16),
				g: parseInt(g, 16),
				b: parseInt(h, 16),
				a: parseInt(k, 16)
			}
		},
		add: function (b) {
			var d = this.split(),
				f = Math.min(d.r + b, 255).toString(16).toUpperCase(),
				g = Math.min(d.g + b, 255).toString(16).toUpperCase();
			b = Math.min(d.b + b, 255).toString(16).toUpperCase();
			d = Number(d.a).toString(16).toUpperCase();
			f = 1 >= f.length ? "0" + f : f;
			g = 1 >= g.length ? "0" + g : g;
			b = 1 >= b.length ? "0" + b : b;
			d = 1 >= d.length ? "0" + d : d;
			return "FF" == d ? "#" + f + g + b : "#" + d + f + g + b
		},
		reduce: function (b) {
			return this.add(-b)
		},
		rgba: function (b) {
			var d = this.split();
			b = void 0 == b || "" === b ? d.a : parseFloat(b);
			1 < b && (b = Number.fixed(b / 255, 2));
			return String.format("rgba(%d,%d,%d,%f)", d.r, d.g, d.b, b)
		}
	}
};

function equals(b, c) {
	return 1E-7 > Math.abs(b - c)
}
var Point = function (b, c) {
	return {
		x: b,
		y: c,
		isNearTo: function (b, c) {
			if (!b) return !1;
			void 0 == c && (c = 5);
			return Math.abs(this.x - b.x) < c && Math.abs(this.y - b.y) < c
		},
		equals: function (b) {
			return b ? equals(this.x, b.x) && equals(this.y, b.y) : !1
		},
		toString: function () {
			return "(" + this.x + "," + this.y + ")"
		},
		clone: function () {
			return Point(this.x, this.y)
		},
		getX: function () {
			return this.x
		},
		getY: function () {
			return this.y
		},
		isNaP: function () {
			return isNaN(this.x) || isNaN(this.y)
		}
	}
};
Point.NaP = function () {
	return Point(Number.NaN, Number.NaN)
};
$.browser.mozilla && (HTMLElement.prototype.__defineGetter__("innerText", function () {
	return this.textContent
}), HTMLElement.prototype.__defineSetter__("innerText", function (b) {
	this.textContent = b
}));
bdor[30] = function (b, c) {
	return bdor[b] - c
};
(function (b) {
	b.fn.slider = function (c) {
		if (void 0 != c.value) try {
			this.setRange(c.value)
		} catch (d) { } else if (void 0 != c.maxValue) try {
			this.duration = c.maxValue, this.setRange(this.range)
		} catch (f) { } else {
			var g = this;
			this.duration = c.max;
			this.onChange = c.onChange;
			this.direction = c.direction;
			var h = b('<div class="slider-total"></div>'),
				k = b('<div class="slider-range"></div>'),
				l = b('<div class="slider-handle"></div>');
			this.append(h);
			this.append(k);
			this.append(l);
			this.setRange = function (b) {
				if (void 0 != b) {
					g.range = b;
					b = h.offset().left -
						g.offset().left;
					var c = parseInt(k.css("bottom").replace("px", "")),
						d = l.width();
					if ("horizontal" == g.direction) {
						var f = h.width() - d,
							c = Math.floor(g.range * f / g.duration),
							c = Math.min(c, f),
							d = c + d / 2;
						l.css({
							left: c + b
						});
						k.css({
							width: d
						})
					} else f = h.height() - d, b = Math.floor(g.range * f / g.duration), b = Math.min(b, f), d = b + d / 2, l.css({
						bottom: b + c
					}), k.css({
						height: d
					})
				}
			};
			this.setRange(c.range);
			c = function (c) {
				c = isTouch ? c.originalEvent ? c.originalEvent.changedTouches : c.changedTouches : [c];
				c = c[0];
				if (void 0 != c) {
					var d = b(c.target),
						f = 0;
					"horizontal" ==
						g.direction ? (f = c.offsetX, void 0 == f && (f = c.pageX - d.offset().left), f = f / h.width() * g.duration) : (f = c.offsetY, void 0 == f && (f = c.pageY - d.offset().top), f = (d.height() - f) / h.height() * g.duration);
					g.setRange.apply(g, [f]);
					g.onChange(f);
					return !1
				}
			};
			h.bind(_event._click, c);
			k.bind(_event._click, c)
		}
	}
})(jQuery);

function parsHexToNormalString(b) {
	for (var c = ""; 2 <= b.length;) c += String.fromCharCode(parseInt(b.substring(0, 2), 16)), b = b.substring(2, b.length);
	return c
}


jQuery.fn.zoom = function (b) {
	this.options = b;
	this.middleScale = 3;
	this.maxScale = 6;
	this.windowWidth = windowWidth;
	this.windowHeight = windowHeight;
	this.parameters = {
		width: $(this).width() || 0,
		height: $(this).height() || 0,
		naturalWidth: $(this).width() || 0,
		naturalHeight: $(this).height() || 0,
		left: $(this).offset().left || 0,
		top: $(this).offset().top || 0,
		scale: 1,
		rotate: 0,
		toScale: 1,
		tran: {
			x: 0,
			y: 0
		},
		origin: {
			x: 50,
			y: 50
		},
		zoomFlag: !1,
		zoomming: !1,
		zoonOut: !1,
		resize: !1,
		eventCancel: !1
	};
	b = new Hammer.Manager($(this)[0]);
	b.add(new Hammer.Pan);
	b.add((new Hammer.Swipe({
		velocity: 0.15
	})).recognizeWith(b.get("pan")));
	b.add(new Hammer.Pinch);
	b.add(new Hammer.Tap({
		event: "doubletap",
		taps: 2,
		interval: 400,
		posThreshold: 30
	}));
	b.on("panstart panmove panend pancancel", onPan.bind(this));
	if (isPhone() || isPad() || isSlideBook()) b.on("pinchstart pinchmove pinchcancel pinchend", onPinch.bind(this));
	b.on("swipe swipeup", onSwipe.bind(this));
	if (!isAndroidWeChat()) b.on("doubletap", onDoubleTap.bind(this))
};

function onPan(b) {
	if (!this.parameters.resize && !this.parameters.eventCancel && !this.parameters.zoomming && b && b.pointers && 1 == b.pointers.length && (this.swipeInterval && this.swipeInterval.stop(), this.animateInterval && this.animateInterval.stop(), this.parameters.zoomFlag)) {
		var c = panForMove(this, b.deltaX, b.deltaY, !0);
		if (this.options && this.options.onPan) this.options.onPan();
		if ("panend" == b.type || "pancancel" == b.type) setZoomParameters(this, c), restrictInBoundary(this)
	}
}

function onSwipe(b) {
	if (!this.parameters.resize && !this.parameters.eventCancel && !this.parameters.zoomming)
		if (this.parameters.zoomFlag) {
			var c = this.parameters.tran,
				d = tranLimit(this, this.parameters.scale, this.parameters.tran);
			if (d.x == parseInt(c.x) && d.y == parseInt(c.y)) {
				this.animateInterval && this.animateInterval.stop();
				this.swipeInterval && this.swipeInterval.stop();
				var f = 0,
					g = 0;
				0 != b.velocityX && (f = b.velocityX);
				0 != b.velocityY && (g = b.velocityY);
				this.swipeInterval = function (b, c) {
					var d = this.parameters.tran,
						m = tranLimit(this,
							this.parameters.scale, this.parameters.tran);
					m.x != parseInt(d.x) || m.y != parseInt(d.y) ? (this.swipeInterval.stop(), restrictInBoundary(this)) : (d = (c - b) / c, d = panForMove(this, f * d * 16.7, g * d * 16.7, !0), setZoomParameters(this, d), b >= c && (this.swipeInterval.stop(), restrictInBoundary(this)))
				}.runInAnimate(this, 320)
			}
		} else b.direction & Hammer.DIRECTION_RIGHT && (c = "right"), b.direction & Hammer.DIRECTION_LEFT && (c = "left"), b.direction & Hammer.DIRECTION_UP && (c = "up"), b.direction & Hammer.DIRECTION_DOWN && (c = "down"), this.options && this.options.swipeend &&
			this.options.swipeend(c)
}

function onDoubleTap(b) {
	if (!(BookInfo.getBook().status_resize || BookInfo.getBook().flipping || (BookInfo.getBook().endFlip(), global.windowTapInterval && window.clearTimeout(global.windowTapInterval), this.parameters.resize || this.parameters.eventCancel || this.parameters.zoomming)))
		if (this.status_zoom = !0, !this.parameters.zoomFlag) zoomIn(this), this.parameters.origin = mathOrigin(this, b), originObj(this, this.parameters.origin), this.parameters.zoomOut = !1, animateToScale(this, this.middleScale, b);
		else if (this.parameters.zoomFlag) {
			var c =
				this.parameters.naturalWidth / this.parameters.width;
			this.parameters.zoomOut = !0;
			animateToScale(this, c, b)
		}
}

function onPinch(b) {
	"pinchstart" == b.type && (this.pinchStart = !0);
	if (!(this.parameters.resize || this.parameters.eventCancel || this.parameters.zoomming || !this.parameters.zoomFlag && 1 >= b.scale) && b && b.pointers) {
		this.animateInterval && this.animateInterval.stop();
		this.swipeInterval && this.swipeInterval.stop();
		var c = function () {
			this.pinchStart = !1;
			this.parameters.zoomFlag || (this.parameters.zoomOut = !1, zoomIn(this));
			this.scale = this.parameters.toScale;
			this.parameters.origin = mathOrigin(this, b);
			originObj(this, this.parameters.origin);
			pinchMoveIn(this, parseFloat(this.scale) * parseFloat(b.scale), b, this.parameters.origin)
		}.bind(this);
		"pinchstart" == b.type && c(b);
		"pinchend" == b.type && (this.parameters.scale = this.parameters.toScale, exceedScale(this, b), this.pinchStart = !1);
		"pinchmove" == b.type && (this.pinchStart && c(b), pinchMoveIn(this, parseFloat(this.scale) * parseFloat(b.scale), b, this.parameters.origin));
		"pinchcancel" == b.type && (this.parameters.scale = this.parameters.toScale, exceedScale(this, b), this.pinchStart = !1)
	}
}

function exceedScale(b, c) {
	var d = b.parameters.width * b.parameters.toScale / b.parameters.naturalWidth,
		f = b.parameters.width * b.parameters.toScale,
		g = b.parameters.height * b.parameters.toScale,
		h = b.parameters.naturalWidth * b.maxScale / b.parameters.width,
		k = b.parameters.naturalWidth / b.parameters.width,
		l = b.parameters.toScale;
	d > b.maxScale && (l = h);
	if (1 > d || f < b.windowWidth && g < b.windowHeight) b.parameters.zoomOut = !0, l = k;
	animateToScale(b, l, c)
}

function zoomIn(b) {
	b.parameters.tran = getTransform(b[0]);
	b.parameters.left = $(b).offset().left - b.parameters.tran.x;
	b.parameters.top = $(b).offset().top - b.parameters.tran.y;
	b.parameters.width = $(b).width();
	b.parameters.height = $(b).height();
	b.parameters.naturalWidth = $(b).width();
	b.parameters.naturalHeight = $(b).height();
	b.parameters.zoomFlag = !0;
	b.parameters.zoomOut = !1;
	b.options && b.options.zoomIn && b.options.zoomIn()
}

function zoomOut(b) {
	b.swipeInterval && b.swipeInterval.stop();
	b.animateInterval && b.animateInterval.stop();
	b.parameters.zoomFlag = !1;
	b.parameters.zoomOut = !0;
	b.parameters.toScale = 1;
	b.parameters.scale = 1;
	b.options && b.options.zoomOut && b.options.zoomOut()
}

function tranLimit(b, c, d) {
	if (d) {
		if (!isAndroidWeChat() && b.parameters.zoomOut) {
			d = {
				x: 0,
				y: 0
			};
			d.x = b.parameters.width * (c - 1) * b.parameters.origin.x / 100;
			d.y = b.parameters.height * (c - 1) * b.parameters.origin.y / 100;
			if (bookType == BookType.normal_book && bookConfig.retainBookCenter) {
				var f = BookInfo.getBook().getCurrentPageIndex();
				if (1 == f && !rightToLeft || rightToLeft && f == totalPageCount) d.x -= b.parameters.width * c / 4;
				if (1 == f && rightToLeft || !rightToLeft && f == totalPageCount) d.x += b.parameters.width * c / 4
			}
			return d
		}
		b.parameters.origin ||
			(b.parameters.origin = {
				x: 0,
				y: 0
			});
		f = d.x;
		d = d.y;
		var g, h, k, l;
		g = b.parameters.width;
		h = b.parameters.height;
		k = b.parameters.left - b.parameters.origin.x * (c - 1) * g / 100;
		l = b.parameters.top - b.parameters.origin.y * (c - 1) * h / 100;
		var m = 0,
			n = 0,
			p = 0,
			q = 0,
			n = c * g;
		c *= h;
		n > b.windowWidth ? (m = b.windowWidth - n - k, p = -k) : (m = -k, p = b.windowWidth - n - k);
		c > b.windowHeight ? (n = b.windowHeight - c - l, q = -l) : (n = -l, q = b.windowHeight - c - l);
		f = Number.between(f, m, p);
		d = Number.between(d, n, q);
		return {
			x: parseInt(f),
			y: parseInt(d)
		}
	}
}

function pinchMoveIn(b, c, d) {
	if (!b.parameters.eventCancel && !b.parameters.zoomming && d && d.pointers && 2 == d.pointers.length) {
		var f = {};
		f.scale = c;
		f.tran = mathTran(b, d, b.parameters.origin);
		transformSetting(b, f);
		b.parameters.toScale = c
	}
}

function mathTran(b, c, d) {
	if (!c || !c.pointers || 0 >= c.pointers.length || !d) return {
		x: 0,
		y: 0
	};
	var f, g;
	1 == c.pointers.length && (f = c.pointers[0].pageX, g = c.pointers[0].pageY);
	1 < c.pointers.length && (f = (c.pointers[0].pageX + c.pointers[1].pageX) / 2, g = (c.pointers[0].pageY + c.pointers[1].pageY) / 2);
	var h, k;
	k = b.parameters.width;
	c = b.parameters.height;
	h = b.parameters.left;
	b = b.parameters.top;
	h = (d.x * k / 100 + h).toFixed(2);
	d = (d.y * c / 100 + b).toFixed(2);
	tranX = f - parseFloat(h);
	tranY = g - parseFloat(d);
	return {
		x: parseFloat(tranX.toFixed(2)),
		y: parseFloat(tranY.toFixed(2))
	}
}

function mathOrigin(b, c) {
	if (!c || !c.pointers || 0 >= c.pointers.length) return {
		x: 50,
		y: 50
	};
	var d, f;
	1 == c.pointers.length && (d = c.pointers[0].pageX, f = c.pointers[0].pageY);
	1 < c.pointers.length && (d = (c.pointers[0].pageX + c.pointers[1].pageX) / 2, f = (c.pointers[0].pageY + c.pointers[1].pageY) / 2);
	var g, h;
	g = b.parameters.width;
	h = b.parameters.height;
	d = (d - parseInt(b.offset().left)) / (g * b.parameters.toScale);
	f = (f - parseInt(b.offset().top)) / (h * b.parameters.toScale);
	return {
		x: (100 * d).toFixed(2),
		y: (100 * f).toFixed(2)
	}
}

function animateToScale(b, c, d) {
	if (!b.parameters.eventCancel && !b.parameters.zoomming) {
		b.options && b.options.zoomStart && b.options.zoomStart();
		b.parameters.zoomming = !0;
		var f = {};
		f.origin = b.parameters.origin;
		f.scale = c;
		f.tran = mathTran(b, d, f.origin);
		f.tran = tranLimit(b, c, f.tran);
		d = transformCSS(f);
		originObj(b, f.origin);
		animateOnce(b, d, 300, function () {
			getTransform(b[0]);
			transformSetting(b, f);
			b.parameters.scale = c;
			b.parameters.toScale = c;
			b.parameters.zoomming = !1;
			if (b.options.onZoomed) b.options.onZoomed(f);
			1 >= b.parameters.width *
				b.parameters.toScale / b.parameters.naturalWidth && zoomOut(b)
		}.bind(b), "%stransform", "ease-in-out")
	}
}

function restrictInBoundary(b) {
	if (!b.parameters.eventCancel && !b.parameters.zoomming) {
		var c = b.parameters.tran,
			d = tranLimit(b, b.parameters.scale, c);
		if (d.x != parseInt(c.x) || d.y != parseInt(c.y)) {
			b.animateInterval && b.animateInterval.stop();
			var f = 0,
				g = 0,
				h = 0;
			d.x != c.x && (f = d.x - c.x);
			d.y != c.y && (g = d.y - c.y);
			b.animateInterval = function (c, d) {
				var m = $.easing.easeOutBack(null, h, 0, f, 20),
					n = $.easing.easeOutBack(null, h, 0, g, 20);
				0 < h && (m -= $.easing.easeOutBack(null, h - 1, 0, f, 20), n -= $.easing.easeOutBack(null, h - 1, 0, g, 20));
				m = panForMove(b,
					m, n);
				setZoomParameters(b, m);
				h++;
				(20 <= h || c >= d) && b.animateInterval.stop()
			}.runInAnimate(this, 320)
		}
	}
}

function transformSetting(b, c) {
	setZoomParameters(b, c);
	var d = transformCSS(c);
	b.css(d)
}

function panForMove(b, c, d, f) {
	var g = b.parameters ? b.parameters.tran : {
		x: 0,
		y: 0
	};
	f = b.parameters ? b.parameters.scale : 1;
	g || (g = {
		x: 0,
		y: 0
	});
	f || 0 == f || (f = 1);
	c = {
		x: g.x + c,
		y: g.y + d
	};
	d = transformCSS({
		tran: c,
		scale: f
	});
	b.css(d);
	return {
		tran: c,
		scale: f
	}
}

function originObj(b, c) {
	b.css({
		"-webkit-transform-origin": c.x + "% " + c.y + "%",
		"-moz-transform-origin": c.x + "% " + c.y + "%",
		"-ms-transform-origin": c.x + "% " + c.y + "%",
		"-o-transform-origin": c.x + "% " + c.y + "%"
	})
}

function setZoomParameters(b, c) {
	function d(d) {
		return void 0 === c[d] || null === c[d] || isNaN(c[d]) ? b.parameters[d] : c[d]
	}

	function f(d) {
		return void 0 !== c[d] && null !== c[d] ? c[d] : b.parameters[d]
	}
	b && b.parameters && c && (b.parameters = {
		width: d("width"),
		height: d("height"),
		naturalWidth: d("naturalWidth"),
		naturalHeight: d("naturalHeight"),
		left: d("left"),
		top: d("top"),
		scale: d("scale"),
		rotate: d("rotate"),
		toScale: d("toScale"),
		tran: f("tran"),
		origin: f("origin"),
		zoomFlag: f("zoomFlag"),
		zoomming: f("zoomming"),
		zoomOut: f("zoomOut"),
		resize: f("resize"),
		eventCancel: f("eventCancel")
	})
}
bdor[7] = "m";

(function (b) {
	b.fn.addVideoSkin = function (c) {
		var d = this;
		this.theme = void 0;
		for (var f = 0; f < videoThemes.length; f++) videoThemes[f].name == c && (this.theme = videoThemes[f]);
		void 0 == this.theme && (this.theme = videoThemes[0]);
		c = this.find("video:first");
		var g = c[0];
		if (void 0 != g && null != g) {
			this.addClass("video-player").addClass(this.theme.name);
			var h = b('<div class="video-controls slider-action"></div>');
			this.append(h);
			f = b('<div class="control-border"></div>');
			h.append(f);
			var k = b('<div class="video-play"></div>');
			h.append(k);
			f = b('<div class="bevel"></div>');
			h.append(f);
			f = function (b) {
				!1 == g.paused ? g.pause() : g.play();
				stopEvent(b);
				return !1
			};
			c.bind(_event._click, f);
			k.bind(_event._click, f);
			c.bind("play", function () {
				k.addClass("paused-button")
			});
			c.bind("pause", function () {
				k.removeClass("paused-button")
			});
			c.bind("ended", function () {
				k.removeClass("paused-button")
			});
			h.playButton = k;
			var l = b('<div class="video-timer">00:00</div>');
			h.append(l);
			c.bind("timeupdate", function () {
				var b = g.currentTime,
					c = g.duration;
				if (0 == c || void 0 == c) c = 100;
				m.slider({
					maxValue: c
				});
				m.slider({
					value: b
				});
				l.text(timeFormat(b))
			});
			h.videoTimer = l;
			var m = b('<div class="video-seek"></div>');
			h.append(m);
			(function () {
				var b = g.duration;
				if (0 == b || void 0 == b) b = 100;
				m.slider({
					range: 0,
					max: b,
					direction: "horizontal",
					onChange: function (b) {
						try {
							g.currentTime = b
						} catch (c) { }
					}
				});
				h.show();
				d.controlbarWidth = h.width()
			})();
			h.videoSeek = m;
			f = b('<div class="bevel"></div>');
			h.append(f);
			var n = b('<div class="volume-seek"></div>');
			h.append(n);
			this.volume_value = 1;
			n.slider({
				range: 1,
				max: 1,
				direction: "vertical",
				onChange: function (b) {
					try {
						d.volume_value =
							b, 0 == b ? (g.muted = !0, p.addClass("volume-mute")) : (g.muted = !1, p.removeClass("volume-mute")), g.volume = b
					} catch (c) { }
				}
			});
			h.volumeSeek = n;
			var p = b('<div class="volume-button"></div>');
			h.append(p);
			p.bind(_event._click, function () {
				!0 == g.muted ? (g.muted = !1, n.slider({
					value: d.volume_value
				}), p.removeClass("volume-mute")) : (g.muted = !0, n.slider({
					value: 0
				}), p.addClass("volume-mute"));
				return !1
			});
			p.bind("mouseenter", function () {
				n.css({
					visiblity: "visible",
					opacity: "1"
				})
			});
			p.bind("mouseleave", function () {
				n.css({
					visiblity: "hidden",
					opacity: "0"
				})
			});
			n.bind("mouseenter", function () {
				n.css({
					visiblity: "visible",
					opacity: "1"
				})
			});
			n.bind("mouseleave", function () {
				n.css({
					visiblity: "hidden",
					opacity: "0"
				})
			});
			h.volumeButton = p;
			var q = b('<div class="player-fullscreen"></div>');
			h.append(q);
			q.bind(_event._click, function () {
				fullScreenApi.supportsFullScreen ? fullScreenApi.isFullScreen() ? fullScreenApi.cancelFullScreen() : fullScreenApi.requestFullScreen(g) : g.webkitSupportsFullscreen && g.webkitEnterFullscreen();
				return !1
			});
			c.bind(fullScreenApi.fullScreenEventName,
				function () {
					fullScreenApi.isFullScreen() ? q.addClass("player-exit-fullscreen") : q.removeClass("player-exit-fullscreen")
				});
			h.fullscreenButton = q;
			this.controlbar = h;
			this.resizeVideoSkin()
		}
	};
	bdor.i = function (b) {
		return bdor[b]
	};
	b.fn.resizeVideoSkin = function () {
		var b = this.find("video:first")[0],
			d = this.controlbar;
		if (void 0 != d) {
			var f = d.videoSeek,
				g = d.volumeSeek,
				h = d.volumeButton,
				k = d.fullscreenButton,
				l = this.width(),
				m = Math.max(0, l - this.theme.seekWidth);
			0 >= m ? f.css({
				display: "none"
			}) : (f.css({
				width: m,
				display: "block"
			}),
				f.slider({
					value: b.currentTime
				}));
			d = h.offset().left - d.offset().left + (h.width() - g.width()) / 2;
			l < this.theme.fullscreenWidth ? (k.css({
				display: "none"
			}), l < this.theme.volumeWidth ? (h.css({
				display: "none"
			}), g.css({
				left: "-45px"
			})) : (h.css({
				display: "block"
			}), g.css({
				left: d + "px"
			}))) : (h.css({
				display: "block"
			}), k.css({
				display: "block"
			}), g.css({
				left: d + "px"
			}));
			!0 == b.muted ? g.slider({
				value: 0
			}) : g.slider({
				value: this.volume_value
			})
		}
	};
	bdor.f = "f";
	b.fn.resizeAudioSkin = function () {
		var b = this.find("audio:first")[0];
		if (null != this.theme && void 0 != this.theme) {
			var d = Math.max(0, this.width() - this.theme.audioSeek);
			0 >= d ? this.audio_seek.css({
				display: "none"
			}) : (this.audio_seek.css({
				width: d,
				display: "block"
			}),
				this.audio_seek.slider({
					value: b.currentTime
				}));
			d = this.theme.wolumnWidth;
			void 0 != d && (this.width() < d ? (this.volume_btn.css({
				display: "none"
			}), this.volume_seek.css({
				display: "none"
			})) : (this.volume_btn.css({
				display: "block"
			}), this.volume_seek.css({
				display: "block"
			})), !1 == b.muted ? this.volume_seek.slider({
				value: this.volume_value
			}) : this.volume_seek.slider({
				value: 0
			}))
		}
	};
	b.fn.refreshAudioSeek = function () {
		var b = this.find("audio:first")[0];
		null != this.theme && void 0 != this.theme && null != b && (this.audio_seek.slider({
			value: b.currentTime
		}), !1 == b.muted ? this.volume_seek.slider({
			value: this.volume_value
		}) : this.volume_seek.slider({
			value: 0
		}))
	};
	this.skin = this.bdor
})(jQuery);
var videoThemes = [{
	name: "default",
	seekWidth: 150,
	volumeWidth: 105,
	fullscreenWidth: 130
}, {
	name: "round",
	seekWidth: 225,
	volumeWidth: 145,
	fullscreenWidth: 150
}, {
	name: "classic",
	seekWidth: 195,
	volumeWidth: 135,
	fullscreenWidth: 170
}, {
	name: "smallblack",
	seekWidth: 135,
	volumeWidth: 85,
	fullscreenWidth: 110
}, {
	name: "circle",
	seekWidth: 70,
	volumeWidth: 105,
	fullscreenWidth: 60
}],
	timeFormat = function (b) {
		var c = 10 > Math.floor(b / 60) ? "0" + Math.floor(b / 60) : Math.floor(b / 60);
		return c + ":" + (10 > Math.floor(b - 60 * c) ? "0" + Math.floor(b - 60 * c) : Math.floor(b - 60 * c))
	},
	stopEvent = function (b) {
		b = b || window.event;
		b.preventDefault ? (b.preventDefault(), b.stopPropagation()) : (b.returnValue = !1, b.cancelBubble = !0)
	};
bdor[8] = "o";
(function (b, c, d) {
	function f(b, c) {
		var d = (b[0] || 0) - (c[0] || 0);
		return 0 < d || !d && 0 < b.length && f(b.slice(1), c.slice(1))
	}

	function g(b) {
		if (typeof b != k) return b;
		var c = [],
			d = "",
			f;
		for (f in b) d = typeof b[f] == k ? g(b[f]) : [f, l ? encodeURI(b[f]) : b[f]].join("="), c.push(d);
		return c.join("&")
	}

	function h(b) {
		var c = [],
			d;
		for (d in b) c.push(['<param name="', d, '" value="', g(b[d]), '" />'].join(""));
		return c.join("")
	}
	var k = "object",
		l = !0;
	try {
		var m = d.description || (new d("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
	} catch (n) {
		m = "Unavailable"
	}
	var p =
		m.match(/\d+/g) || [0];
	b[c] = {
		available: 0 < p[0],
		activeX: d && !d.name,
		version: {
			original: m,
			array: p,
			string: p.join("."),
			major: parseInt(p[0], 10) || 0,
			minor: parseInt(p[1], 10) || 0,
			release: parseInt(p[2], 10) || 0
		},
		hasVersion: function (b) {
			b = /string|number/.test(typeof b) ? b.toString().split(".") : /object/.test(typeof b) ? [b.major, b.minor] : b || [0, 0];
			return f(p, b)
		},
		encodeParams: !0,
		expressInstall: "expressInstall.swf",
		expressInstallIsActive: !1,
		create: function (b) {
			if (!b.swf || this.expressInstallIsActive || !this.available && !b.hasVersionFail) return !1;
			if (!this.hasVersion(b.hasVersion || 1)) {
				this.expressInstallIsActive = !0;
				if ("function" == typeof b.hasVersionFail && !b.hasVersionFail.apply(b)) return !1;
				b = {
					swf: b.expressInstall || this.expressInstall,
					height: 137,
					width: 214,
					flashvars: {
						MMredirectURL: location.href,
						MMplayerType: this.activeX ? "ActiveX" : "PlugIn",
						MMdoctitle: document.title.slice(0, 47) + " - Flash Player Installation"
					}
				}
			}
			attrs = {
				data: b.swf,
				type: "application/x-shockwave-flash",
				id: b.id || "flash_" + Math.floor(999999999 * Math.random()),
				width: b.width || 320,
				height: b.height ||
					180,
				style: b.style || ""
			};
			l = "undefined" !== typeof b.useEncode ? b.useEncode : this.encodeParams;
			b.movie = b.swf;
			b.wmode = b.wmode || "opaque";
			delete b.fallback;
			delete b.hasVersion;
			delete b.hasVersionFail;
			delete b.height;
			delete b.id;
			delete b.swf;
			delete b.useEncode;
			delete b.width;
			var c = document.createElement("div"),
				d;
			d = attrs;
			var f = [],
				g;
			for (g in d) d[g] && f.push([g, '="', d[g], '"'].join(""));
			d = f.join(" ");
			c.innerHTML = ["<object ", d, ">", h(b), "</object>"].join("");
			return c.firstChild
		}
	};
	b.fn[c] = function (d) {
		var f = this.find(k).andSelf().filter(k);
		/string|object/.test(typeof d) && this.each(function () {
			var f = b(this),
				g;
			d = typeof d == k ? d : {
				swf: d
			};
			d.fallback = this;
			if (g = b[c].create(d)) f.children().remove(), f.html(g)
		});
		"function" == typeof d && f.each(function () {
			var f = this;
			f.jsInteractionTimeoutMs = f.jsInteractionTimeoutMs || 0;
			660 > f.jsInteractionTimeoutMs && (f.clientWidth || f.clientHeight ? d.call(f) : setTimeout(function () {
				b(f)[c](d)
			}, f.jsInteractionTimeoutMs + 66))
		});
		return f
	}
})(jQuery, "flash", navigator.plugins["Shockwave Flash"] || window.ActiveXObject);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function (b, c, d, f, g) {
		return jQuery.easing[jQuery.easing.def](b, c, d, f, g)
	},
	easeInQuad: function (b, c, d, f, g) {
		return f * (c /= g) * c + d
	},
	easeOutQuad: function (b, c, d, f, g) {
		return -f * (c /= g) * (c - 2) + d
	},
	easeInOutQuad: function (b, c, d, f, g) {
		return 1 > (c /= g / 2) ? f / 2 * c * c + d : -f / 2 * (--c * (c - 2) - 1) + d
	},
	easeInCubic: function (b, c, d, f, g) {
		return f * (c /= g) * c * c + d
	},
	easeOutCubic: function (b, c, d, f, g) {
		return f * ((c = c / g - 1) * c * c + 1) + d
	},
	easeInOutCubic: function (b, c, d, f, g) {
		return 1 > (c /= g / 2) ? f / 2 * c * c * c + d :
			f / 2 * ((c -= 2) * c * c + 2) + d
	},
	easeInQuart: function (b, c, d, f, g) {
		return f * (c /= g) * c * c * c + d
	},
	easeOutQuart: function (b, c, d, f, g) {
		return -f * ((c = c / g - 1) * c * c * c - 1) + d
	},
	easeInOutQuart: function (b, c, d, f, g) {
		return 1 > (c /= g / 2) ? f / 2 * c * c * c * c + d : -f / 2 * ((c -= 2) * c * c * c - 2) + d
	},
	easeInQuint: function (b, c, d, f, g) {
		return f * (c /= g) * c * c * c * c + d
	},
	easeOutQuint: function (b, c, d, f, g) {
		return f * ((c = c / g - 1) * c * c * c * c + 1) + d
	},
	easeInOutQuint: function (b, c, d, f, g) {
		return 1 > (c /= g / 2) ? f / 2 * c * c * c * c * c + d : f / 2 * ((c -= 2) * c * c * c * c + 2) + d
	},
	easeInSine: function (b, c, d, f, g) {
		return -f * Math.cos(c /
			g * (Math.PI / 2)) + f + d
	},
	easeOutSine: function (b, c, d, f, g) {
		return f * Math.sin(c / g * (Math.PI / 2)) + d
	},
	easeInOutSine: function (b, c, d, f, g) {
		return -f / 2 * (Math.cos(Math.PI * c / g) - 1) + d
	},
	easeInExpo: function (b, c, d, f, g) {
		return 0 == c ? d : f * Math.pow(2, 10 * (c / g - 1)) + d
	},
	easeOutExpo: function (b, c, d, f, g) {
		return c == g ? d + f : f * (-Math.pow(2, -10 * c / g) + 1) + d
	},
	easeInOutExpo: function (b, c, d, f, g) {
		return 0 == c ? d : c == g ? d + f : 1 > (c /= g / 2) ? f / 2 * Math.pow(2, 10 * (c - 1)) + d : f / 2 * (-Math.pow(2, -10 * --c) + 2) + d
	},
	easeInCirc: function (b, c, d, f, g) {
		return -f * (Math.sqrt(1 - (c /= g) *
			c) - 1) + d
	},
	easeOutCirc: function (b, c, d, f, g) {
		return f * Math.sqrt(1 - (c = c / g - 1) * c) + d
	},
	easeInOutCirc: function (b, c, d, f, g) {
		return 1 > (c /= g / 2) ? -f / 2 * (Math.sqrt(1 - c * c) - 1) + d : f / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + d
	},
	easeInElastic: function (b, c, d, f, g) {
		b = 1.70158;
		var h = 0,
			k = f;
		if (0 == c) return d;
		if (1 == (c /= g)) return d + f;
		h || (h = 0.3 * g);
		k < Math.abs(f) ? (k = f, b = h / 4) : b = h / (2 * Math.PI) * Math.asin(f / k);
		return -(k * Math.pow(2, 10 * (c -= 1)) * Math.sin(2 * (c * g - b) * Math.PI / h)) + d
	},
	easeOutElastic: function (b, c, d, f, g) {
		b = 1.70158;
		var h = 0,
			k = f;
		if (0 == c) return d;
		if (1 ==
			(c /= g)) return d + f;
		h || (h = 0.3 * g);
		k < Math.abs(f) ? (k = f, b = h / 4) : b = h / (2 * Math.PI) * Math.asin(f / k);
		return k * Math.pow(2, -10 * c) * Math.sin(2 * (c * g - b) * Math.PI / h) + f + d
	},
	easeInOutElastic: function (b, c, d, f, g) {
		b = 1.70158;
		var h = 0,
			k = f;
		if (0 == c) return d;
		if (2 == (c /= g / 2)) return d + f;
		h || (h = 0.3 * g * 1.5);
		k < Math.abs(f) ? (k = f, b = h / 4) : b = h / (2 * Math.PI) * Math.asin(f / k);
		return 1 > c ? -0.5 * k * Math.pow(2, 10 * (c -= 1)) * Math.sin(2 * (c * g - b) * Math.PI / h) + d : k * Math.pow(2, -10 * (c -= 1)) * Math.sin(2 * (c * g - b) * Math.PI / h) * 0.5 + f + d
	},
	easeInBack: function (b, c, d, f, g, h) {
		void 0 ==
			h && (h = 1.70158);
		return f * (c /= g) * c * ((h + 1) * c - h) + d
	},
	easeOutBack: function (b, c, d, f, g, h) {
		void 0 == h && (h = 1.70158);
		return f * ((c = c / g - 1) * c * ((h + 1) * c + h) + 1) + d
	},
	easeInOutBack: function (b, c, d, f, g, h) {
		void 0 == h && (h = 1.70158);
		return 1 > (c /= g / 2) ? f / 2 * c * c * (((h *= 1.525) + 1) * c - h) + d : f / 2 * ((c -= 2) * c * (((h *= 1.525) + 1) * c + h) + 2) + d
	},
	easeInBounce: function (b, c, d, f, g) {
		return f - jQuery.easing.easeOutBounce(b, g - c, 0, f, g) + d
	},
	easeOutBounce: function (b, c, d, f, g) {
		return (c /= g) < 1 / 2.75 ? 7.5625 * f * c * c + d : c < 2 / 2.75 ? f * (7.5625 * (c -= 1.5 / 2.75) * c + 0.75) + d : c < 2.5 / 2.75 ?
			f * (7.5625 * (c -= 2.25 / 2.75) * c + 0.9375) + d : f * (7.5625 * (c -= 2.625 / 2.75) * c + 0.984375) + d
	},
	easeInOutBounce: function (b, c, d, f, g) {
		return c < g / 2 ? 0.5 * jQuery.easing.easeInBounce(b, 2 * c, 0, f, g) + d : 0.5 * jQuery.easing.easeOutBounce(b, 2 * c - g, 0, f, g) + 0.5 * f + d
	}
});
(function (b) {
	var c = [],
		d = function () { },
		f = 0,
		g = [],
		h = function () {
			f++;
			f >= c.length && (d(g), d = function () { })
		},
		k = function (c) {
			var d = new Image;
			b(d).load(function () {
				g.push({
					url: c,
					img: d
				});
				h()
			}).error(function () {
				g.push(d);
				h()
			}).attr("src", c)
		};
	b.fn.loader = function (f, g, h) {
		f && b.extend(c, f);
		"function" == typeof g && (d = g);

		for (f = 0; f < c.length; f++) k(c[f])
	}
})(jQuery);

(function (b) {
	var c = function () {
		return Hammer.HAS_TOUCHEVENTS && navigator.userAgent.match(Hammer.MOBILE_REGEX)
	};
	bdor[3] = "f";
	var d = function (b) {
		var f = this;
		this.theButton = b;
		this.eventSource = b[0];
		c() ? (b.bind("touchstart", function () {
			d.prototype.mouseDown.apply(f, arguments)
		}), b.bind("touchend", function () {
			d.prototype.mouseUp.apply(f, arguments)
		})) : (b.bind("mousedown", function () {
			d.prototype.mouseDown.apply(f, arguments)
		}), b.bind("mouseleave", function () {
			d.prototype.mouseUp.apply(f, arguments)
		}), b.bind("mouseup",
			function () {
				d.prototype.mouseUp.apply(f, arguments)
			}))
	};
	d.prototype.mouseDown = function () {
		this.setAlpha(70)
	};
	d.prototype.mouseUp = function () {
		var b = this;
		window.setTimeout(function () {
			d.prototype.setAlpha.apply(b, [100])
		}, 100)
	};
	d.prototype.setAlpha = function (b) {
		0 > b && (b = 0);
		100 <= b && (b = 100);
		this.theButton.css("opacity", b / 100)
	};
	b.fn.asButton = function () {
		new d(this);
		return this
	};
	bdor[4] = "h";
	var f = function (b) {
		this.eventSource = b[0];
		this.origPicture = b[0].src;
		var d = this.origPicture.lastIndexOf("."),
			g = this.origPicture.substr(0,
				d),
			d = this.origPicture.substring(d);
		this.pictureDown = g + "_down" + d;
		var h = this;
		c() ? (b.bind("touchstart", function () {
			f.prototype.mouseDown.apply(h, arguments)
		}), b.bind("touchend", function () {
			f.prototype.mouseUp.apply(h, arguments)
		})) : (b.bind("mouseenter", function () {
			f.prototype.mouseOver.apply(h, arguments)
		}), b.bind("mousedown", function () {
			f.prototype.mouseDown.apply(h, arguments)
		}), b.bind("mouseup", function () {
			f.prototype.mouseUp.apply(h, arguments)
		}), b.bind("mouseleave", function () {
			f.prototype.mouseUp.apply(h,
				arguments)
		}))
	};
	f.prototype.mouseOver = function () {
		this.eventSource.src = this.pictureDown
	};
	f.prototype.mouseDown = function () {
		this.eventSource.src = this.pictureDown
	};
	f.prototype.mouseUp = function () {
		var b = this;
		window.setTimeout(function () {
			b.eventSource.src = b.origPicture
		}, 100)
	};
	b.fn.asImageButton = function () {
		new f(this);
		return this
	};
	var g = function (b) {
		this.eventSource = b[0];
		this.origPicture = b[0].src;
		var d = this.origPicture.lastIndexOf("."),
			f = this.origPicture.substr(0, d),
			d = this.origPicture.substring(d);
		this.pictureDown =
			f + "_down" + d;
		var h = this;
		c() ? (b.bind("touchstart", function () {
			g.prototype.mouseOver.apply(h, arguments)
		}), b.bind("touchend", function () {
			g.prototype.mouseUp.apply(h, arguments)
		})) : (b.bind("mouseenter", function () {
			g.prototype.mouseOver.apply(h, arguments)
		}), b.bind("mousedown", function () {
			g.prototype.mouseDown.apply(h, arguments)
		}), b.bind("mouseup", function () {
			g.prototype.mouseUp.apply(h, arguments)
		}), b.bind("mouseleave", function () {
			g.prototype.mouseUp.apply(h, arguments)
		}))
	};
	bdor[10] = "l";
	g.prototype.mouseOver = function () {
		this.eventSource.src =
			this.pictureDown
	};
	g.prototype.mouseDown = function () {
		this.eventSource.src = this.pictureDown
	};
	g.prototype.mouseUp = function () {
		var b = this;
		window.setTimeout(function () {
			b.eventSource.src = b.origPicture
		}, 100)
	};
	b.fn.asImageChangeButton = function () {
		new g(this);
		return this
	};
	var h = function (b) {
		var c = this;
		this.theButton = b;
		this.eventSource = b[0];
		var d = this.theButton.css("top");
		this.iOrigTop = parseInt(d.replace("px", ""));
		this.iJumpTop = this.iOrigTop - 5;
		b.bind("mouseenter", function () {
			h.prototype.MouseEnter.apply(c, arguments)
		});
		b.bind("mouseleave", function () {
			h.prototype.MouseLeave.apply(c, arguments)
		})
	};
	h.prototype.MouseEnter = function () {
		this.theButton.animate({
			top: this.iJumpTop
		}, 50)
	};
	h.prototype.MouseLeave = function () {
		this.theButton.animate({
			top: this.iOrigTop
		}, 50)
	};
	b.fn.mouseEnterJump = function () {
		new h(this);
		return this
	};
	b.fn.mouseOverCursor = function () {
		new k(this);
		return this
	};
	var k = function (b) {
		b.bind("mouseover", function () {
			b.css({
				cursor: "pointer"
			})
		})
	},
		l = function (b) {
			var c = this;
			this.theButton = b;
			this.eventSource = b[0];
			var d = this.theButton.css("top");
			this.iOrigTop = parseInt(d.replace("px", ""));
			d = this.theButton.css("left");
			this.iOrigLeft = parseInt(d.replace("px", ""));
			this.iZoomTop = this.iOrigTop - 3;
			this.iZoomLeft = this.iOrigLeft - 1;
			b.bind("mouseenter", function () {
				l.prototype.MouseEnter.apply(c, arguments)
			});
			b.bind("mouseleave", function () {
				l.prototype.MouseLeave.apply(c, arguments)
			})
		};
	l.prototype.MouseDown = function () {
		this.theButton.css({
			left: this.iZoomLeft + "px",
			top: this.iZoomTop + "px",
			"-webkit-transform": "scale(1.1)",
			"-moz-transform": "scale(1.1)",
			transform: "scale(1.1)",
			"-ms-transform": "scale(1.1)",
			"-o-transform": "scale(1.1)"
		})
	};
	l.prototype.MouseEnter = function () {
		this.theButton.css({
			left: this.iZoomLeft + "px",
			top: this.iZoomTop + "px",
			"-webkit-transform": "scale(1.2)",
			"-moz-transform": "scale(1.2)",
			transform: "scale(1.2)",
			"-ms-transform": "scale(1.2)",
			"-o-transform": "scale(1.2)"
		})
	};
	l.prototype.MouseLeave = function () {
		this.theButton.css({
			left: this.iOrigLeft + "px",
			top: this.iOrigTop + "px",
			"-webkit-transform": "scale(1)",
			"-moz-transform": "scale(1)",
			transform: "scale(1)",
			"-ms-transform": "scale(1)",
			"-o-transform": "scale(1)"
		})
	};
	var m = function (b) {
		var c = this;
		this.theButton = b;
		this.eventSource = b[0];
		var d = this.theButton.css("top");
		this.iOrigTop = parseInt(d.replace("px", ""));
		d = this.theButton.css("left");
		this.iOrigLeft = parseInt(d.replace("px", ""));
		this.iZoomTop = this.iOrigTop - 1;
		this.iZoomLeft = this.iOrigLeft - 1;
		b.bind("mouseenter", function () {
			m.prototype.MouseEnter.apply(c, arguments)
		});
		b.bind("mouseleave", function () {
			m.prototype.MouseLeave.apply(c, arguments)
		})
	};
	m.prototype.MouseEnter = function () {
		this.theButton.css({
			left: this.iZoomLeft +
				"px",
			top: this.iZoomTop + "px",
			"-webkit-transform": "scale(1.1)",
			"-moz-transform": "scale(1.1)",
			transform: "scale(1.1)",
			"-ms-transform": "scale(1.1)",
			"-o-transform": "scale(1.1)"
		})
	};
	m.prototype.MouseLeave = function () {
		this.theButton.css({
			left: this.iOrigLeft + "px",
			top: this.iOrigTop + "px",
			"-webkit-transform": "scale(1)",
			"-moz-transform": "scale(1)",
			transform: "scale(1)",
			"-ms-transform": "scale(1)",
			"-o-transform": "scale(1)"
		})
	};
	b.fn.mouseEnterZoom = function () {
		new m(this);
		return this
	};
	b.fn.mouseEnterUp = function () {
		new n(this);
		return this
	};
	var n = function (b) {
		var c = this;
		this.theButton = b;
		this.eventSource = b[0];
		var d = this.theButton.css("bottom");
		this.iOrigTop = parseInt(d.replace("px", ""));
		d = this.theButton.css("left");
		this.iOrigLeft = parseInt(d.replace("px", ""));
		this.iZoomTop = this.iOrigTop - 1;
		this.iZoomLeft = this.iOrigLeft - 1;
		b.bind("mouseenter", function () {
			n.prototype.MouseEnter.apply(c, arguments)
		});
		b.bind("mouseleave", function () {
			n.prototype.MouseLeave.apply(c, arguments)
		})
	};
	n.prototype.MouseEnter = function () {
		this.theButton.css({
			bottom: this.iZoomTop +
				"px",
			"-webkit-transform": "scale(1.1)",
			"-moz-transform": "scale(1.1)",
			transform: "scale(1.1)",
			"-ms-transform": "scale(1.1)",
			"-o-transform": "scale(1.1)"
		})
	};
	n.prototype.MouseLeave = function () {
		this.theButton.css({
			bottom: this.iOrigTop + "px",
			"-webkit-transform": "scale(1)",
			"-moz-transform": "scale(1)",
			transform: "scale(1)",
			"-ms-transform": "scale(1)",
			"-o-transform": "scale(1)"
		})
	};
	b.fn.mouseZoomUp = function () {
		new l(this);
		return this
	};
	b.fn.mouseEnterLight = function () {
		var b = this;
		this.bind(_event._enter, function () {
			b.css({
				background: "#EEEEEE"
			})
		});
		this.bind(_event._down, function () {
			b.css({
				background: "#EEEEEE"
			})
		});
		c() ? this.bind(_event._end, function () {
			b.css({
				background: "transparent"
			})
		}) : this.bind(_event._end, function () {
			b.css({
				background: "#EEEEEE"
			})
		});
		this.bind(_event._leave, function () {
			b.css({
				background: "transparent"
			})
		});
		return this
	};
	b.fn.mouseEnterShine = function (b, d, f) {
		var g = this,
			h = colorDiv(b, 10);
		this.bind(_event._enter, function () {
			g.css({
				background: h
			});
			g.css({
				border: ""
			});
			g.css({
				"border-left": "1px solid " + f,
				"border-top": "1px solid " + f
			});
			g.css({
				"border-right": "1px solid " +
					d,
				"border-bottom": "1px solid " + d
			})
		});
		this.bind(_event._down, function () {
			g.css({
				background: h
			});
			g.css({
				border: ""
			});
			g.css({
				"border-left": "1px solid " + d,
				"border-top": "1px solid " + d
			});
			g.css({
				"border-right": "1px solid " + f,
				"border-bottom": "1px solid " + f
			})
		});
		c() ? this.bind(_event._end, function () {
			g.css({
				background: "transparent"
			});
			g.css({
				border: ""
			})
		}) : this.bind(_event._end, function () {
			g.css({
				background: h
			});
			g.css({
				border: ""
			});
			g.css({
				"border-left": "1px solid " + f,
				"border-top": "1px solid " + f
			});
			g.css({
				"border-right": "1px solid " +
					d,
				"border-bottom": "1px solid " + d
			})
		});
		this.bind(_event._leave, function () {
			g.css({
				background: "transparent"
			});
			g.css({
				border: ""
			})
		});
		return this
	};
	b.fn.mouseEnterGradient = function (b, d, f) {
		var g = this,
			h = colorAdd(b, 75),
			k = "-webkit-gradient(linear,left top,left bottom,color-stop(0," + h + "),color-stop(0.19," + colorAdd(h, 2) + "),color-stop(0.35," + colorAdd(h, 28) + "),color-stop(0.55, " + colorAdd(h, 6) + "),color-stop(0.75," + colorAdd(h, 4) + "),color-stop(0.85," + colorAdd(h, 2) + "),color-stop(1, " + h + "))";
		this.bind(_event._enter, function () {
			g.css("background",
				k);
			g.css({
				border: ""
			});
			g.css({
				"border-left": "1px solid " + f,
				"border-top": "1px solid " + f
			});
			g.css({
				"border-right": "1px solid " + d,
				"border-bottom": "1px solid " + d
			})
		});
		this.bind(_event._down, function () {
			g.setGradient(h, !1);
			g.css({
				border: ""
			});
			g.css({
				"border-left": "1px solid " + d,
				"border-top": "1px solid " + d
			});
			g.css({
				"border-right": "1px solid " + f,
				"border-bottom": "1px solid " + f
			})
		});
		c() ? this.bind(_event._end, function () {
			g.css({
				background: "transparent"
			});
			g.css({
				border: ""
			})
		}) : this.bind(_event._end, function () {
			g.css("background",
				k);
			g[0].style.removeAttribute && g[0].style.removeAttribute("filter");
			g.css({
				border: ""
			});
			g.css({
				"border-left": "1px solid " + f,
				"border-top": "1px solid " + f
			});
			g.css({
				"border-right": "1px solid " + d,
				"border-bottom": "1px solid " + d
			})
		});
		this.bind(_event._leave, function () {
			g[0].style.removeAttribute && g[0].style.removeAttribute("filter");
			g.css({
				background: "transparent"
			});
			g.css({
				border: ""
			})
		});
		return this
	};
	b.fn.dragToMove = function (c, d, f) {
		var g = !1,
			h = 0,
			k = 0,
			l = 0,
			m = 0;
		b(this).bind(_event._down, function (d) {
			var f = b(this)[0];
			f.setCapture ? f.setCapture() : window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
			d = isTouch ? d.originalEvent.changedTouches : [d];
			g = !0;
			h = d[0].pageX;
			k = d[0].pageY;
			l = b(c).offset().left;
			m = b(c).offset().top
		});
		b(this).bind(_event._end, function (c) {
			c = b(this)[0];
			c.releaseCapture ? c.releaseCapture() : window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
			g = !1
		});
		b(this).bind(_event._move, function (n) {
			n = isTouch ? n.originalEvent.touches : [n];
			if (g) {
				var x = l + (n[0].pageX - h);
				n = m + (n[0].pageY - k);
				void 0 != d && (x = Math.max(d.x, x), x = Math.min(d.y,
					x));
				void 0 != f && (n = Math.max(f.x, n), n = Math.min(f.y, n));
				b(c).css({
					left: x + "px",
					top: n + "px"
				})
			}
		});
		b(this).bind("mouseleave", function () {
			return g = !1
		})
	};
	b.fn.slideFlipButtonShine = function (c) {
		b(this).bind(_event._over, function () {
			b(this).css({
				cursor: "pointer"
			})
		});
		b(this).bind(_event._enter, function () {
			b(this).css({
				background: "#000000"
			})
		});
		b(this).bind(_event._leave, function () {
			b(this).css({
				background: "#888888"
			})
		})
	};
	bdor[31] = function (b, c) {
		return bdor[b] - bdor[c]
	};
	b.fn.slideZoomButtonShine = function (c) {
		b(this).bind(_event._enter,
			function () {
				b(this).css({
					cursor: "pointer"
				});
				b(this).css({
					background: "#555555"
				})
			});
		b(this).bind(_event._leave, function () {
			b(this).css({
				background: ""
			})
		})
	};
	b.fn.mouseEnterChange = function (c, d, f) {
		var g = this;
		this.bind(_event._enter, function () {
			var h = b("<img src='" + f + "'>");
			g.empty().append(h);
			g.css({
				background: d
			});
			g.changeButtonColor(c)
		});
		this.bind(_event._end, function () {
			var c = b("<img src='" + f + "'>");
			g.empty().append(c);
			g.css({
				background: "transparent"
			});
			g.changeButtonColor(d)
		});
		this.bind(_event._leave, function () {
			var c =
				b("<img src='" + f + "'>");
			g.empty().append(c);
			g.css({
				background: "transparent"
			});
			g.changeButtonColor(d)
		});
		return this
	};
	b.fn.clickExceptMove = function (b) {
		var c = !1,
			d = !1,
			f = new Point(0, 0);
		this.bind(_event._down, function (b) {
			b = isTouch ? b.originalEvent.touches : [b];
			c = !0;
			d = !1;
			f.x = b[0].pageX;
			f.y = b[0].pageY;
			1 < b.length && (c = !1)
		});
		this.bind(_event._move, function (b) {
			b = isTouch ? b.originalEvent.touches : [b];
			d = 1 >= Math.abs(b[0].pageX - f.x) && 1 >= Math.abs(b[0].pageY - f.y) ? !1 : !0
		});
		this.bind(_event._end, function (f) {
			c && !d && b();
			d = c = !1
		})
	};
	b.fn.enterToChange = function (b, c, d, f, g) {
		var h = this.children(),
			k = this;
		this.bind(_event._down, function (l) {
			c = k.attr("id");
			h.cssSprite(b, c + "_down", d, f, g)
		});
		this.bind(_event._enter, function (l) {
			c = k.attr("id");
			h.cssSprite(b, c + "_down", d, f, g)
		});
		this.bind(_event._leave, function (l) {
			c = k.attr("id");
			h.cssSprite(b, c, d, f, g)
		})
	};
	b.fn.addCssSprite = function (c, d, f, g, h) {
		var k = b("<div></div>");
		k.cssSprite(c, d, f, g, h);
		this.append(k)
	};
	b.fn.changeCssSprite = function (b, c, d, f, g) {
		this.children().cssSprite(b, c, d, f, g)
	};
	bdor[6] = "l"
})(jQuery);
var hddr = [];
! function (b, c, d, f) {
	function g(b, c, d) {
		return Array.isArray(b) ? (h(b, d[c], d), !0) : !1
	}

	function h(b, c, d) {
		var g;
		if (b)
			if (b.forEach) b.forEach(c, d);
			else if (b.length !== f)
				for (g = 0; g < b.length;) c.call(d, b[g], g, b), g++;
			else
				for (g in b) b.hasOwnProperty(g) && c.call(d, b[g], g, b)
	}

	function k(c, d, f) {
		var g = "DEPRECATED METHOD: " + d + "\n" + f + " AT \n";
		return function () {
			var d = Error("get-stack-trace"),
				d = d && d.stack ? d.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") :
					"Unknown Stack Trace",
				f = b.console && (b.console.warn || b.console.log);
			return f && f.call(b.console, g, d), c.apply(this, arguments)
		}
	}

	function l(b, c, d) {
		var f = c.prototype;
		c = b.prototype = Object.create(f);
		c.constructor = b;
		c._super = f;
		d && S(c, d)
	}

	function m(b, c) {
		return function () {
			return b.apply(c, arguments)
		}
	}

	function n(b, c) {
		return typeof b == Ma ? b.apply(c ? c[0] || f : f, c) : b
	}

	function p(b, c, d) {
		h(r(c), function (c) {
			"undefined" != typeof window.addEventListener ? b.addEventListener(c, d, !1) : b.attachEvent(c, d)
		})
	}

	function q(b, c, d) {
		h(r(c),
			function (c) {
				"undefined" != typeof window.removeEventListener ? b.removeEventListener(c, d, !1) : b.detachEvent(c, d)
			})
	}

	function t(b, c) {
		for (; b;) {
			if (b == c) return !0;
			b = b.parentNode
		}
		return !1
	}

	function r(b) {
		return b.trim().split(/\s+/g)
	}

	function s(b, c, d) {
		if (b.indexOf && !d) return b.indexOf(c);
		for (var f = 0; f < b.length;) {
			if (d && b[f][d] == c || !d && b[f] === c) return f;
			f++
		}
		return -1
	}

	function u(b) {
		return Array.prototype.slice.call(b, 0)
	}

	function v(b, c, d) {
		for (var f = [], g = [], h = 0; h < b.length;) {
			var k = c ? b[h][c] : b[h];
			0 > s(g, k) && f.push(b[h]);
			g[h] = k;
			h++
		}
		return d && (f = c ? f.sort(function (b, d) {
			return b[c] > d[c]
		}) : f.sort()), f
	}

	function w(b, c) {
		for (var d, g, h = c[0].toUpperCase() + c.slice(1), k = 0; k < za.length;) {
			if (d = za[k], g = d ? d + h : c, g in b) return g;
			k++
		}
		return f
	}

	function y(c) {
		c = c.ownerDocument || c;
		return c.defaultView || c.parentWindow || b
	}

	function x(b, c) {
		var d = this;
		this.manager = b;
		this.callback = c;
		this.element = b.element;
		this.target = b.options.inputTarget;
		this.domHandler = function (c) {
			n(b.options.enable, [b]) && d.handler(c)
		};
		this.init()
	}

	function A(b) {
		var c = b.options.inputClass;
		return new (c ? c : Na ? I : Oa ? G : Aa ? J : D)(b, E)
	}

	function E(b, c, d) {
		var g = d.pointers.length,
			h = d.changedPointers.length,
			k = c & N && 0 === g - h,
			g = c & (L | O) && 0 === g - h;
		d.isFirst = !!k;
		d.isFinal = !!g;
		k && (b.session = {});
		d.eventType = c;
		c = b.session;
		k = d.pointers;
		g = k.length;
		c.firstInput || (c.firstInput = F(d));
		1 < g && !c.firstMultiple ? c.firstMultiple = F(d) : 1 === g && (c.firstMultiple = !1);
		var h = c.firstInput,
			l = (g = c.firstMultiple) ? g.center : h.center,
			m = d.center = z(k);
		d.timeStamp = sa();
		d.deltaTime = d.timeStamp - h.timeStamp;
		d.angle = K(l, m);
		d.distance = B(l,
			m);
		var h = d.center,
			l = c.offsetDelta || {},
			m = c.prevDelta || {},
			n = c.prevInput || {};
		d.eventType !== N && n.eventType !== L || (m = c.prevDelta = {
			x: n.deltaX || 0,
			y: n.deltaY || 0
		}, l = c.offsetDelta = {
			x: h.x,
			y: h.y
		});
		d.deltaX = m.x + (h.x - l.x);
		d.deltaY = m.y + (h.y - l.y);
		d.offsetDirection = C(d.deltaX, d.deltaY);
		h = d.deltaX / d.deltaTime || 0;
		l = d.deltaY / d.deltaTime || 0;
		d.overallVelocityX = h;
		d.overallVelocityY = l;
		d.overallVelocity = Y(h) > Y(l) ? h : l;
		d.scale = g ? B(k[0], k[1], ka) / B(g.pointers[0], g.pointers[1], ka) : 1;
		d.rotation = g ? K(k[1], k[0], ka) + K(g.pointers[1],
			g.pointers[0], ka) : 0;
		d.maxPointers = c.prevInput ? d.pointers.length > c.prevInput.maxPointers ? d.pointers.length : c.prevInput.maxPointers : d.pointers.length;
		l = c.lastInterval || d;
		k = d.timeStamp - l.timeStamp;
		d.eventType != O && (k > Pa || l.velocity === f) ? (h = d.deltaX - l.deltaX, l = d.deltaY - l.deltaY, m = h / k || 0, n = l / k || 0, k = m, g = n, m = Y(m) > Y(n) ? m : n, h = C(h, l), c.lastInterval = d) : (m = l.velocity, k = l.velocityX, g = l.velocityY, h = l.direction);
		d.velocity = m;
		d.velocityX = k;
		d.velocityY = g;
		d.direction = h;
		c = b.element;
		t(d.srcEvent.target, c) && (c = d.srcEvent.target);
		d.target = c;
		b.emit("hammer.input", d);
		b.recognize(d);
		b.session.prevInput = d
	}

	function F(b) {
		for (var c = [], d = 0; d < b.pointers.length;) c[d] = {
			clientX: ba(b.pointers[d].clientX),
			clientY: ba(b.pointers[d].clientY)
		}, d++;
		return {
			timeStamp: sa(),
			pointers: c,
			center: z(c),
			deltaX: b.deltaX,
			deltaY: b.deltaY
		}
	}

	function z(b) {
		var c = b.length;
		if (1 === c) return {
			x: ba(b[0].clientX),
			y: ba(b[0].clientY)
		};
		for (var d = 0, f = 0, g = 0; c > g;) d += b[g].clientX, f += b[g].clientY, g++;
		return {
			x: ba(d / c),
			y: ba(f / c)
		}
	}

	function C(b, c) {
		return b === c ? la : Y(b) >= Y(c) ? 0 > b ?
			ea : fa : 0 > c ? ga : ha
	}

	function B(b, c, d) {
		d || (d = Ba);
		var f = c[d[0]] - b[d[0]];
		b = c[d[1]] - b[d[1]];
		return Math.sqrt(f * f + b * b)
	}

	function K(b, c, d) {
		d || (d = Ba);
		return 180 * Math.atan2(c[d[1]] - b[d[1]], c[d[0]] - b[d[0]]) / Math.PI
	}

	function D() {
		this.evEl = Qa;
		this.evWin = Ra;
		this.pressed = !1;
		x.apply(this, arguments)
	}

	function I() {
		this.evEl = Ca;
		this.evWin = Da;
		x.apply(this, arguments);
		this.store = this.manager.session.pointerEvents = []
	}

	function H() {
		this.evTarget = Sa;
		this.evWin = Ta;
		this.started = !1;
		x.apply(this, arguments)
	}

	function G() {
		this.evTarget =
			Ua;
		this.targetIds = {};
		x.apply(this, arguments)
	}

	function M(b, c) {
		var d = u(b.touches),
			f = this.targetIds;
		if (c & (N | Z) && 1 === d.length) return f[d[0].identifier] = !0, [d, d];
		var g, h = u(b.changedTouches),
			k = [],
			l = this.target;
		if (g = d.filter(function (b) {
			return t(b.target, l)
		}), c === N)
			for (d = 0; d < g.length;) f[g[d].identifier] = !0, d++;
		for (d = 0; d < h.length;) f[h[d].identifier] && k.push(h[d]), c & (L | O) && delete f[h[d].identifier], d++;
		return k.length ? [v(g.concat(k), "identifier", !0), k] : void 0
	}

	function J() {
		x.apply(this, arguments);
		var b = m(this.handler,
			this);
		this.touch = new G(this.manager, b);
		this.mouse = new D(this.manager, b);
		this.primaryTouch = null;
		this.lastTouches = []
	}

	function ia(b) {
		b = b.changedPointers[0];
		if (b.identifier === this.primaryTouch) {
			var c = {
				x: b.clientX,
				y: b.clientY
			};
			this.lastTouches.push(c);
			var d = this.lastTouches;
			setTimeout(function () {
				var b = d.indexOf(c); - 1 < b && d.splice(b, 1)
			}, Va)
		}
	}

	function W(b, c) {
		this.manager = b;
		this.set(c)
	}

	function Wa(b) {
		if (-1 < b.indexOf(ca)) return ca;
		var c = -1 < b.indexOf(ma),
			d = -1 < b.indexOf(na);
		return c && d ? ca : c || d ? c ? ma : na : -1 < b.indexOf(ta) ?
			ta : Ea
	}

	function T(b) {
		this.options = S({}, this.defaults, b || {});
		this.id = Xa++;
		this.manager = null;
		this.options.enable = this.options.enable === f ? !0 : this.options.enable;
		this.state = oa;
		this.simultaneous = {};
		this.requireFail = []
	}

	function Fa(b) {
		return b & ja ? "cancel" : b & X ? "end" : b & da ? "move" : b & P ? "start" : ""
	}

	function Ga(b) {
		return b == ha ? "down" : b == ga ? "up" : b == ea ? "left" : b == fa ? "right" : ""
	}

	function pa(b, c) {
		var d = c.manager;
		return d ? d.get(b) : b
	}

	function Q() {
		T.apply(this, arguments)
	}

	function qa() {
		Q.apply(this, arguments);
		this.pY = this.pX =
			null
	}

	function ua() {
		Q.apply(this, arguments)
	}

	function va() {
		T.apply(this, arguments);
		this._input = this._timer = null
	}

	function wa() {
		Q.apply(this, arguments)
	}

	function xa() {
		Q.apply(this, arguments)
	}

	function ra() {
		T.apply(this, arguments);
		this.pCenter = this.pTime = !1;
		this._input = this._timer = null;
		this.count = 0
	}

	function U(b, c) {
		return c = c || {}, c.recognizers = c.recognizers === f ? U.defaults.preset : c.recognizers, new ya(b, c)
	}

	function ya(b, c) {
		this.options = S({}, U.defaults, c || {});
		this.options.inputTarget = this.options.inputTarget ||
			b;
		this.handlers = {};
		this.session = {};
		this.recognizers = [];
		this.element = b;
		this.input = A(this);
		this.touchAction = new W(this, this.options.touchAction);
		Ha(this, !0);
		h(this.options.recognizers, function (b) {
			var c = this.add(new b[0](b[1]));
			b[2] && c.recognizeWith(b[2]);
			b[3] && c.requireFailure(b[3])
		}, this)
	}

	function Ha(b, c) {
		var d = b.element;
		d.style && h(b.options.cssProps, function (b, f) {
			d.style[w(d.style, f)] = c ? b : ""
		})
	}

	function Ya(b, d) {
		var f = c.createEvent("Event");
		f.initEvent(b, !0, !0);
		f.gesture = d;
		d.target.dispatchEvent(f)
	}
	var S, za = " webkit Moz MS ms o".split(" "),
		Za = c.createElement("div"),
		Ma = "function",
		ba = Math.round,
		Y = Math.abs,
		sa = Date.now;
	S = "function" != typeof Object.assign ? function (b) {
		if (b === f || null === b) throw new TypeError("Cannot convert undefined or null to object");
		for (var c = Object(b), d = 1; d < arguments.length; d++) {
			var g = arguments[d];
			if (g !== f && null !== g)
				for (var h in g) g.hasOwnProperty(h) && (c[h] = g[h])
		}
		return c
	} : Object.assign;
	var Ia = k(function (b, c, d) {
		for (var g = Object.keys(c), h = 0; h < g.length;)(!d || d && b[g[h]] === f) && (b[g[h]] =
			c[g[h]]), h++;
		return b
	}, "extend", "Use `assign`."),
		$a = k(function (b, c) {
			return Ia(b, c, !0)
		}, "merge", "Use `assign`."),
		Xa = 1,
		ab = /mobile|tablet|ip(ad|hone|od)|android/i,
		Aa = "ontouchstart" in b,
		Na = w(b, "PointerEvent") !== f,
		Oa = Aa && ab.test(navigator.userAgent),
		Pa = 25,
		N = 1,
		Z = 2,
		L = 4,
		O = 8,
		la = 1,
		ea = 2,
		fa = 4,
		ga = 8,
		ha = 16,
		R = ea | fa,
		aa = ga | ha,
		Ja = R | aa,
		Ba = ["x", "y"],
		ka = ["clientX", "clientY"];
	x.prototype = {
		handler: function () { },
		init: function () {
			this.evEl && p(this.element, this.evEl, this.domHandler);
			this.evTarget && p(this.target, this.evTarget,
				this.domHandler);
			this.evWin && p(y(this.element), this.evWin, this.domHandler)
		},
		destroy: function () {
			this.evEl && q(this.element, this.evEl, this.domHandler);
			this.evTarget && q(this.target, this.evTarget, this.domHandler);
			this.evWin && q(y(this.element), this.evWin, this.domHandler)
		}
	};
	var bb = {
		mousedown: N,
		mousemove: Z,
		mouseup: L
	},
		Qa = "mousedown",
		Ra = "mousemove mouseup";
	l(D, x, {
		handler: function (b) {
			var c = bb[b.type];
			c & N && 0 === b.button && (this.pressed = !0);
			c & Z && 1 !== b.which && (c = L);
			this.pressed && (c & L && (this.pressed = !1), this.callback(this.manager,
				c, {
					pointers: [b],
					changedPointers: [b],
					pointerType: "mouse",
					srcEvent: b
				}))
		}
	});
	var cb = {
		pointerdown: N,
		pointermove: Z,
		pointerup: L,
		pointercancel: O,
		pointerout: O
	},
		db = {
			2: "touch",
			3: "pen",
			4: "mouse",
			5: "kinect"
		},
		Ca = "pointerdown",
		Da = "pointermove pointerup pointercancel";
	b.MSPointerEvent && !b.PointerEvent && (Ca = "MSPointerDown", Da = "MSPointerMove MSPointerUp MSPointerCancel");
	l(I, x, {
		handler: function (b) {
			var c = this.store,
				d = !1,
				f = b.type.toLowerCase().replace("ms", ""),
				f = cb[f],
				g = db[b.pointerType] || b.pointerType,
				h = "touch" == g,
				k = s(c, b.pointerId, "pointerId");
			f & N && (0 === b.button || h) ? 0 > k && (c.push(b), k = c.length - 1) : f & (L | O) && (d = !0);
			0 > k || (c[k] = b, this.callback(this.manager, f, {
				pointers: c,
				changedPointers: [b],
				pointerType: g,
				srcEvent: b
			}), d && c.splice(k, 1))
		}
	});
	var eb = {
		touchstart: N,
		touchmove: Z,
		touchend: L,
		touchcancel: O
	},
		Sa = "touchstart",
		Ta = "touchstart touchmove touchend touchcancel";
	l(H, x, {
		handler: function (b) {
			var c = eb[b.type];
			if (c === N && (this.started = !0), this.started) {
				var d, f = u(b.touches);
				d = u(b.changedTouches);
				d = (c & (L | O) && (f = v(f.concat(d),
					"identifier", !0)), [f, d]);
				c & (L | O) && 0 === d[0].length - d[1].length && (this.started = !1);
				this.callback(this.manager, c, {
					pointers: d[0],
					changedPointers: d[1],
					pointerType: "touch",
					srcEvent: b
				})
			}
		}
	});
	var fb = {
		touchstart: N,
		touchmove: Z,
		touchend: L,
		touchcancel: O
	},
		Ua = "touchstart touchmove touchend touchcancel";
	l(G, x, {
		handler: function (b) {
			var c = fb[b.type],
				d = M.call(this, b, c);
			d && this.callback(this.manager, c, {
				pointers: d[0],
				changedPointers: d[1],
				pointerType: "touch",
				srcEvent: b
			})
		}
	});
	var Va = 2500;
	l(J, x, {
		handler: function (b, c, d) {
			var f =
				"touch" == d.pointerType,
				g = "mouse" == d.pointerType;
			if (!(g && d.sourceCapabilities && d.sourceCapabilities.firesTouchEvents)) {
				if (f) c & N ? (this.primaryTouch = d.changedPointers[0].identifier, ia.call(this, d)) : c & (L | O) && ia.call(this, d);
				else {
					if (f = g) a: {
						for (var f = d.srcEvent.clientX, g = d.srcEvent.clientY, h = 0; h < this.lastTouches.length; h++) {
							var k = this.lastTouches[h],
								l = Math.abs(f - k.x),
								k = Math.abs(g - k.y);
							if (25 >= l && 25 >= k) {
								f = !0;
								break a
							}
						}
						f = !1
					}
					if (f) return
				}
				this.callback(b, c, d)
			}
		},
		destroy: function () {
			this.touch.destroy();
			this.mouse.destroy()
		}
	});
	var Ka = w(Za.style, "touchAction"),
		La = Ka !== f,
		Ea = "auto",
		ta = "manipulation",
		ca = "none",
		ma = "pan-x",
		na = "pan-y";
	W.prototype = {
		set: function (b) {
			"compute" == b && (b = this.compute());
			La && this.manager.element.style && (this.manager.element.style[Ka] = b);
			this.actions = b.toLowerCase().trim()
		},
		update: function () {
			this.set(this.manager.options.touchAction)
		},
		compute: function () {
			var b = [];
			return h(this.manager.recognizers, function (c) {
				n(c.options.enable, [c]) && (b = b.concat(c.getTouchAction()))
			}), Wa(b.join(" "))
		},
		preventDefaults: function (b) {
			if (!La) {
				var c =
					b.srcEvent,
					d = b.offsetDirection;
				if (!this.manager.session.prevented) {
					void c.preventDefault();
					var f = this.actions,
						g = -1 < f.indexOf(ca),
						h = -1 < f.indexOf(na),
						f = -1 < f.indexOf(ma);
					if (g) {
						var k = 2 > b.distance,
							l = 250 > b.deltaTime;
						if (1 === b.pointers.length && k && l) return
					}
					if (!f || !h) return g || h && d & R || f && d & aa ? this.preventSrc(c) : void 0
				}
			}
		},
		preventSrc: function (b) {
			this.manager.session.prevented = !0;
			b.preventDefault()
		}
	};
	var oa = 1,
		P = 2,
		da = 4,
		X = 8,
		V = X,
		ja = 16;
	T.prototype = {
		defaults: {},
		set: function (b) {
			return S(this.options, b), this.manager &&
				this.manager.touchAction.update(), this
		},
		recognizeWith: function (b) {
			if (g(b, "recognizeWith", this)) return this;
			var c = this.simultaneous;
			return b = pa(b, this), c[b.id] || (c[b.id] = b, b.recognizeWith(this)), this
		},
		dropRecognizeWith: function (b) {
			return g(b, "dropRecognizeWith", this) ? this : (b = pa(b, this), delete this.simultaneous[b.id], this)
		},
		requireFailure: function (b) {
			if (g(b, "requireFailure", this)) return this;
			var c = this.requireFail;
			return b = pa(b, this), -1 === s(c, b) && (c.push(b), b.requireFailure(this)), this
		},
		dropRequireFailure: function (b) {
			if (g(b,
				"dropRequireFailure", this)) return this;
			b = pa(b, this);
			b = s(this.requireFail, b);
			return -1 < b && this.requireFail.splice(b, 1), this
		},
		hasRequireFailures: function () {
			return 0 < this.requireFail.length
		},
		canRecognizeWith: function (b) {
			return !!this.simultaneous[b.id]
		},
		emit: function (b) {
			function c(f) {
				d.manager.emit(f, b)
			}
			var d = this,
				f = this.state;
			X > f && c(d.options.event + Fa(f));
			c(d.options.event);
			b.additionalEvent && c(b.additionalEvent);
			f >= X && c(d.options.event + Fa(f))
		},
		tryEmit: function (b) {
			return this.canEmit() ? this.emit(b) : void (this.state =
				32)
		},
		canEmit: function () {
			for (var b = 0; b < this.requireFail.length;) {
				if (!(this.requireFail[b].state & (32 | oa))) return !1;
				b++
			}
			return !0
		},
		recognize: function (b) {
			b = S({}, b);
			return n(this.options.enable, [this, b]) ? (this.state & (V | ja | 32) && (this.state = oa), this.state = this.process(b), void (this.state & (P | da | X | ja) && this.tryEmit(b))) : (this.reset(), void (this.state = 32))
		},
		process: function (b) { },
		getTouchAction: function () { },
		reset: function () { }
	};
	l(Q, T, {
		defaults: {
			pointers: 1
		},
		attrTest: function (b) {
			var c = this.options.pointers;
			return 0 ===
				c || b.pointers.length === c
		},
		process: function (b) {
			var c = this.state,
				d = b.eventType,
				f = c & (P | da);
			b = this.attrTest(b);
			return f && (d & O || !b) ? c | ja : f || b ? d & L ? c | X : c & P ? c | da : P : 32
		}
	});
	l(qa, Q, {
		defaults: {
			event: "pan",
			threshold: 10,
			pointers: 1,
			direction: Ja
		},
		getTouchAction: function () {
			var b = this.options.direction,
				c = [];
			return b & R && c.push(na), b & aa && c.push(ma), c
		},
		directionTest: function (b) {
			var c = this.options,
				d = !0,
				f = b.distance,
				g = b.direction,
				h = b.deltaX,
				k = b.deltaY;
			return g & c.direction || (c.direction & R ? (g = 0 === h ? la : 0 > h ? ea : fa, d = h != this.pX,
				f = Math.abs(b.deltaX)) : (g = 0 === k ? la : 0 > k ? ga : ha, d = k != this.pY, f = Math.abs(b.deltaY))), b.direction = g, d && f > c.threshold && g & c.direction
		},
		attrTest: function (b) {
			return Q.prototype.attrTest.call(this, b) && (this.state & P || !(this.state & P) && this.directionTest(b))
		},
		emit: function (b) {
			this.pX = b.deltaX;
			this.pY = b.deltaY;
			var c = Ga(b.direction);
			c && (b.additionalEvent = this.options.event + c);
			this._super.emit.call(this, b)
		}
	});
	l(ua, Q, {
		defaults: {
			event: "pinch",
			threshold: 0,
			pointers: 2
		},
		getTouchAction: function () {
			return [ca]
		},
		attrTest: function (b) {
			return this._super.attrTest.call(this,
				b) && (Math.abs(b.scale - 1) > this.options.threshold || this.state & P)
		},
		emit: function (b) {
			1 !== b.scale && (b.additionalEvent = this.options.event + (1 > b.scale ? "in" : "out"));
			this._super.emit.call(this, b)
		}
	});
	l(va, T, {
		defaults: {
			event: "press",
			pointers: 1,
			time: 251,
			threshold: 9
		},
		getTouchAction: function () {
			return [Ea]
		},
		process: function (b) {
			var c = this.options,
				d = b.pointers.length === c.pointers,
				f = b.distance < c.threshold,
				g = b.deltaTime > c.time;
			if (this._input = b, !f || !d || b.eventType & (L | O) && !g) this.reset();
			else if (b.eventType & N) this.reset(),
				this._timer = setTimeout(m(function () {
					this.state = V;
					this.tryEmit()
				}, this), c.time);
			else if (b.eventType & L) return V;
			return 32
		},
		reset: function () {
			clearTimeout(this._timer)
		},
		emit: function (b) {
			this.state === V && (b && b.eventType & L ? this.manager.emit(this.options.event + "up", b) : (this._input.timeStamp = sa(), this.manager.emit(this.options.event, this._input)))
		}
	});
	l(wa, Q, {
		defaults: {
			event: "rotate",
			threshold: 0,
			pointers: 2
		},
		getTouchAction: function () {
			return [ca]
		},
		attrTest: function (b) {
			return this._super.attrTest.call(this, b) &&
				(Math.abs(b.rotation) > this.options.threshold || this.state & P)
		}
	});
	l(xa, Q, {
		defaults: {
			event: "swipe",
			threshold: 10,
			velocity: 0.3,
			direction: R | aa,
			pointers: 1
		},
		getTouchAction: function () {
			return qa.prototype.getTouchAction.call(this)
		},
		attrTest: function (b) {
			var c, d = this.options.direction;
			return d & (R | aa) ? c = b.overallVelocity : d & R ? c = b.overallVelocityX : d & aa && (c = b.overallVelocityY), this._super.attrTest.call(this, b) && d & b.offsetDirection && b.distance > this.options.threshold && b.maxPointers == this.options.pointers && Y(c) > this.options.velocity &&
				b.eventType & L
		},
		emit: function (b) {
			var c = Ga(b.offsetDirection);
			c && this.manager.emit(this.options.event + c, b);
			this.manager.emit(this.options.event, b)
		}
	});
	l(ra, T, {
		defaults: {
			event: "tap",
			pointers: 1,
			taps: 1,
			interval: 300,
			time: 250,
			threshold: 9,
			posThreshold: 10
		},
		getTouchAction: function () {
			return [ta]
		},
		process: function (b) {
			var c = this.options,
				d = b.pointers.length === c.pointers,
				f = b.distance < c.threshold,
				g = b.deltaTime < c.time;
			if (this.reset(), b.eventType & N && 0 === this.count) return this.failTimeout();
			if (f && g && d) {
				if (b.eventType !=
					L) return this.failTimeout();
				d = this.pTime ? b.timeStamp - this.pTime < c.interval : !0;
				f = !this.pCenter || B(this.pCenter, b.center) < c.posThreshold;
				this.pTime = b.timeStamp;
				this.pCenter = b.center;
				f && d ? this.count += 1 : this.count = 1;
				this._input = b;
				if (0 === this.count % c.taps) return this.hasRequireFailures() ? (this._timer = setTimeout(m(function () {
					this.state = V;
					this.tryEmit()
				}, this), c.interval), P) : V
			}
			return 32
		},
		failTimeout: function () {
			return this._timer = setTimeout(m(function () {
				this.state = 32
			}, this), this.options.interval), 32
		},
		reset: function () {
			clearTimeout(this._timer)
		},
		emit: function () {
			this.state == V && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
		}
	});
	U.VERSION = "2.0.7";
	U.defaults = {
		domEvents: !1,
		touchAction: "compute",
		enable: !0,
		inputTarget: null,
		inputClass: null,
		preset: [
			[wa, {
				enable: !1
			}],
			[ua, {
				enable: !1
			},
				["rotate"]
			],
			[xa, {
				direction: R
			}],
			[qa, {
				direction: R
			},
				["swipe"]
			],
			[ra],
			[ra, {
				event: "doubletap",
				taps: 2
			},
				["tap"]
			],
			[va]
		],
		cssProps: {
			userSelect: "none",
			touchSelect: "none",
			touchCallout: "none",
			contentZooming: "none",
			userDrag: "none",
			tapHighlightColor: "rgba(0,0,0,0)"
		}
	};
	ya.prototype = {
		set: function (b) {
			return S(this.options, b), b.touchAction && this.touchAction.update(), b.inputTarget && (this.input.destroy(), this.input.target = b.inputTarget, this.input.init()), this
		},
		stop: function (b) {
			this.session.stopped = b ? 2 : 1
		},
		recognize: function (b) {
			var c = this.session;
			if (!c.stopped) {
				this.touchAction.preventDefaults(b);
				var d, f = this.recognizers,
					g = c.curRecognizer;
				(!g || g && g.state & V) && (g = c.curRecognizer = null);
				for (var h = 0; h < f.length;) d = f[h], 2 === c.stopped || g && d != g && !d.canRecognizeWith(g) ? d.reset() :
					d.recognize(b), !g && d.state & (P | da | X) && (g = c.curRecognizer = d), h++
			}
		},
		get: function (b) {
			if (b instanceof T) return b;
			for (var c = this.recognizers, d = 0; d < c.length; d++)
				if (c[d].options.event == b) return c[d];
			return null
		},
		add: function (b) {
			if (g(b, "add", this)) return this;
			var c = this.get(b.options.event);
			return c && this.remove(c), this.recognizers.push(b), b.manager = this, this.touchAction.update(), b
		},
		remove: function (b) {
			if (g(b, "remove", this)) return this;
			if (b = this.get(b)) {
				var c = this.recognizers;
				b = s(c, b); - 1 !== b && (c.splice(b, 1),
					this.touchAction.update())
			}
			return this
		},
		on: function (b, c) {
			var d = this.handlers;
			return h(r(b), function (b) {
				d[b] = d[b] || [];
				d[b].push(c)
			}), this
		},
		off: function (b, c) {
			var d = this.handlers;
			return h(r(b), function (b) {
				c ? d[b] && d[b].splice(s(d[b], c), 1) : delete d[b]
			}), this
		},
		emit: function (b, c) {
			this.options.domEvents && Ya(b, c);
			var d = this.handlers[b] && this.handlers[b].slice();
			if (d && d.length) {
				c.type = b;
				c.preventDefault = function () {
					c.srcEvent.preventDefault()
				};
				for (var f = 0; f < d.length;) d[f](c), f++
			}
		},
		destroy: function () {
			this.element &&
				Ha(this, !1);
			this.handlers = {};
			this.session = {};
			this.input.destroy();
			this.element = null
		}
	};
	S(U, {
		INPUT_START: N,
		INPUT_MOVE: Z,
		INPUT_END: L,
		INPUT_CANCEL: O,
		STATE_POSSIBLE: oa,
		STATE_BEGAN: P,
		STATE_CHANGED: da,
		STATE_ENDED: X,
		STATE_RECOGNIZED: V,
		STATE_CANCELLED: ja,
		STATE_FAILED: 32,
		DIRECTION_NONE: la,
		DIRECTION_LEFT: ea,
		DIRECTION_RIGHT: fa,
		DIRECTION_UP: ga,
		DIRECTION_DOWN: ha,
		DIRECTION_HORIZONTAL: R,
		DIRECTION_VERTICAL: aa,
		DIRECTION_ALL: Ja,
		Manager: ya,
		Input: x,
		TouchAction: W,
		TouchInput: G,
		MouseInput: D,
		PointerEventInput: I,
		TouchMouseInput: J,
		SingleTouchInput: H,
		Recognizer: T,
		AttrRecognizer: Q,
		Tap: ra,
		Pan: qa,
		Swipe: xa,
		Pinch: ua,
		Rotate: wa,
		Press: va,
		on: p,
		off: q,
		each: h,
		merge: $a,
		extend: Ia,
		assign: S,
		inherit: l,
		bindFn: m,
		prefixed: w
	});
	("undefined" != typeof b ? b : "undefined" != typeof self ? self : {}).Hammer = U;
	"function" == typeof define && define.amd ? define(function () {
		return U
	}) : "undefined" != typeof module && module.exports ? module.exports = U : b[d] = U
}(window, document, "Hammer");
var flipping = !1;
(function (b) {
	bdor[5] = "i";
	var c = function (c, f, g, h, k) {
		if (void 0 != c && null != c) {
			0 >= h.length && (k = b.extend({
				background: "green",
				cornersTop: !0,
				scale: "noresize"
			}, k));
			c.prev();
			var l = 0,
				m = !1,
				n = k.background,
				p = k.cornersTop,
				q = k.gradientColors || ["#ddd", "#eee", "#fff"],
				t = k.scale,
				r = 0,
				s = [],
				u, v, w;
			try {
				u = c.clone(), v = u[0].getContext("2d"), w = c[0].getContext("2d"), r = 0
			} catch (y) {
				w = v = u = null
			}
			h = h.each(function (c) {
				if (!s[c] && null != w) {
					var d = this;
					d.onload = function () {
						var k = 1;
						if ("noresize" != t) {
							var l = 0 == this.width ? this.naturalWidth : this.width,
								n = 0 == this.height ? this.naturalHeight : this.height,
								x = f / l,
								A = g / n;
							"fit" == t && (k = 1 > x || 1 > A ? Math.min(x, A) : 1);
							"fill" == t && (k = Math.min(x, A))
						}
						b(d).data("flip.scale", k);
						s[c] = w.createPattern(d, "no-repeat");
						s[c].width = l;
						s[c].height = n;
						r++;
						r != h.length || m || (m = !0, I())
					};
					d.complete && window.setTimeout(function () {
						d.onload()
					}, 10)
				}
			}).get();
			var x = f,
				A = g,
				E = b.browser.msie ? c.offset() : null,
				F, z, C, B;
			b.browser.msie && function () {
				var h = b("<div>").width(f).height(g).css({
					position: "absolute",
					cursor: "default",
					zIndex: 1
				}).appendTo(tmpContainer);
				7 == parseInt(b.browser.version) && h.css({
					opacity: 1E-6,
					background: "#FFF"
				});
				var k = function () {
					E = c.offset();
					return h.css({
						left: E.left + "px",
						top: E.top + "px"
					})
				};
				b(window).resize(k);
				return k()
			}();
			setInterval(function () {
				window.clearInterval(F);
				z = (new Date).getTime();
				C = x;
				B = A / 50;
				F = window.setInterval(K, 0);
				l += 1;
				0 > l && (l = h.length - 1);
				l == h.length && (l = 0)
			}, 3E3);
			var K = function () {
				var b = (new Date).getTime() - z;
				700 <= b ? (window.clearInterval(F), h.push(h.shift()), s.push(s.shift()), x = f, A = g) : (x = C - 2 * f * b / 700, A = B + 2 * g * b / 700 / 3);
				I()
			},
				D = function (c, d) {
					if (null != w) {
						var h = c * f + d,
							k = -d / c;
						b.browser.msie && (h = Math.round(h), k = Math.round(k));
						w.beginPath();
						w.moveTo(f, Math.min(h, g));
						w.lineTo(f, 0);
						w.lineTo(Math.max(k, 0), 0);
						0 > k ? (w.lineTo(0, Math.min(d, g)), d < g && w.lineTo((g - d) / c, g), w.lineTo(f, g)) : h < g ? w.lineTo(f, h) : (w.lineTo((g - d) / c, g), w.lineTo(f, g))
					}
				},
				I = function () {
					if (m && null != w && null != v) {
						b.browser.msie && w.clearRect(0, 0, f, g);
						w.fillStyle = n;
						w.fillRect(0, 0, f, g);
						var c = h[0],
							d = b(c).data("flip.scale");
						if (b.browser.msie) try {
							w.drawImage(c, 0, 0, c.width, c.height,
								0, 0, f, g)
						} catch (k) {
							w.fillStyle = s[0], w.fillStyle.width2 = w.fillStyle.width * d, w.fillStyle.height2 = w.fillStyle.height * d, w.fillRect(0, 0, f, g)
						} else w.drawImage(c, (f - c.width * d) / 2, (g - c.height * d) / 2, c.width * d, c.height * d);
						if (A && x != f && (c = (A - 2 * (x + f)) / 2, m2 = A / (f - x), q2 = x * m2, 2 != m2)) {
							var l = 1,
								E = 0;
							w.save();
							p || (E = g, l = -1);
							w.translate(0, E);
							w.scale(1, l);
							var z = (q2 - c) / (2 - m2),
								r = 2 * z + c,
								F = (2 * r + z + 4 * x - 2 * A) / 5,
								t = -F / 2 + r + z / 2,
								d = Math.sqrt(Math.pow(z - F, 2) + Math.pow(r - t, 2)),
								C = Math.min(0.5 * d, 30),
								B;
							b.browser.mozilla && 1.9 > parseFloat(b.browser.version) ?
								(B = v, B.clearRect(0, 0, f, g), B.save(), B.translate(1, 0)) : B = w;
							z = B.createLinearGradient(z, r, F, t);
							z.addColorStop(0, q[0]);
							z.addColorStop(C / d, q[1]);
							z.addColorStop(1, q[2]);
							B.fillStyle = z;
							B.beginPath();
							B.moveTo(-c / 2, 0);
							B.quadraticCurveTo((-c / 2 + x) / 2 + 0.02 * x, A / 2, x, A);
							B.quadraticCurveTo((f + x) / 2, (2 * f + c + A) / 2 - 0.02 * (g - A), f, 2 * f + c);
							b.browser.mozilla && 1.9 > parseFloat(b.browser.version) ? (B.save(), B.clip(), B.fillRect(0, 0, f, g), B.restore(), w.drawImage(u[0], 0, 0), B.restore()) : B.fill();
							w.fillStyle = n;
							D(2, c);
							w.fill();
							D(2, c);
							b.browser.safari ||
								b.browser.opera || w.restore();
							h[1] || (h[1] = h[0]);
							c = h[1];
							d = b(c).data("flip.scale");
							if (b.browser.msie) w.fillStyle = s[1], w.fillStyle.width2 = w.fillStyle.width * d, w.fillStyle.height2 = w.fillStyle.height * d, w.fill();
							else {
								w.save();
								w.clip();
								if (b.browser.safari || b.browser.opera) w.scale(1, 1 / l), w.translate(-0, -E);
								w.drawImage(c, (f - c.width * d) / 2, (g - c.height * d) / 2, c.width * d, c.height * d);
								w.restore();
								(b.browser.safari || b.browser.opera) && w.restore()
							}
						}
					}
				}
		}
	};
	b.fn.jFlip = function (d, f, g, h, k) {
		return this.each(function () {
			b(this).wrap("<div class='bannerdiv' style='position: absolute;width:" +
				d + "px;height:" + f + "px;top:" + k + "px;left:" + h + "px'>");
			var l = b(this).find("img"),
				m = b(document.createElement("canvas")).attr({
					width: d,
					height: f
				}).css({
					margin: 0,
					width: d + "px",
					height: f + "px"
				});
			b(this).css({
				position: "absolute",
				left: "-9000px",
				top: "-9000px",
				display: "none"
			}).after(m);
			new c(b(this).next(), d || 300, f || 300, l, g)
		})
	}
})(jQuery);

var getHost = function (b) {
	var c;
	b || (b = window.location.href);
	var d = b.match(/(.*\:\/\/)([^\/]*)\/([^\/]*).*/);
	d && (c = "s3.amazonaws.com" === d[2] ? d[1] + d[2] + "/" + d[3] : d[1] + d[2]);
	return c
};
$.fn.changeButtonColor = function (b, c, d) {
	var f = this;
	if ("none" != this.css("display")) {
		var g = this;
		0 < this.children().length && (g = this.find("img:first"));
		if (window.ActiveXObject) {
			if ("complete" != g[0].readyState) {
				$(g).load(function () {
					try {
						f.changeButtonColor(b, c, d)
					} catch (g) { }
				});
				return
			}
		} else if (!g[0].complete) {
			$(g).load(function () {
				try {
					f.changeButtonColor(b, c, d)
				} catch (g) { }
			});
			return
		}
		if (void 0 != g[0]) {
			var h, k;
			try {
				h = $("<canvas></canvas>")[0], k = h.getContext("2d")
			} catch (l) {
				return
			}
			var m = g.width(),
				n = g.height(),
				g = g[0];
			void 0 == c && (c = !1);
			var p = getHost(g.src),
				q = getHost();
			if (p && q !== p) h = g.src.replace(p, q), g.src = h, !1 == c && $(g).load(function () {
				try {
					f.changeButtonColor(b, !0, d)
				} catch (c) { }
			});
			else {
				h.width = m;
				h.height = n;
				try {
					k.drawImage(g, 0, 0, g.naturalWidth, g.naturalHeight, 0, 0, m, n);
					var t = k.getImageData(0, 0, m, n),
						r = k.getImageData(0, 0, m, n);
					if (!0 != g.colorChanged && (g.colorChanged = !0, t)) {
						for (var s = Color(b).split(), m = 0, u = t.data.length; m < u; m += 4) 0 < r.data[m + 3] && (t.data[m] != s.r && (r.data[m] = t.data[m] / 255 * s.r), t.data[m + 1] != s.g && (r.data[m +
							1] = t.data[m + 1] / 255 * s.g), t.data[m + 2] != s.b && (r.data[m + 2] = t.data[m + 2] / 255 * s.b));
						k.putImageData(r, 0, 0);
						g.src = h.toDataURL("image/png");
						void 0 != d && d(f)
					}
				} catch (v) {
					!1 == c && $(g).load(function () {
						try {
							f.changeButtonColor(b, !0, d)
						} catch (c) { }
					})
				}
			}
		}
	}
};
$.fn.rotate = function (b) {
	if (!(4 < browserType && 1 > browserType)) {
		switch (browserType) {
			case 1:
				this.css({
					"-webkit-transform": "rotate(" + b + "deg)"
				});
				break;
			case 2:
				this.css({
					"-moz-transform": "rotate(" + b + "deg)"
				});
				break;
			case 3:
				this.css({
					"-ms-transform": "rotate(" + b + "deg)"
				});
				break;
			case 4:
				this.css({
					"-o-transform": "rotate(" + b + "deg)"
				})
		}
		this.css({
			transform: "rotate(" + b + "deg)"
		})
	}
};
$.fn.scale = function (b, c) {
	void 0 == c && (c = "50% 50% 0");
	this.css({
		"-webkit-transform": "scale(" + b + ")",
		"-moz-transform": "scale(" + b + ")",
		"-ms-transform": "scale(" + b + ")",
		"-o-transform": "scale(" + b + ")",
		transform: "scale(" + b + ")",
		"-webkit-transform-origin": c,
		"-moz-transform-origin": c,
		"-ms-transform-origin": c,
		"-o-transform-origin": c,
		"transform-origin": c
	})
};
$.fn.transition3D = function () {
	this.css({
		"-ms-transform": "translate3d(0,0,0)",
		"-webkit-transform": "translate3d(0,0,0)",
		"-moz-transform": "translate3d(0,0,0)",
		"-o-transform": "translate3d(0,0,0)",
		transform: "translate3d(0,0,0)"
	});
	return this
};
$.fn.setAnimation = function (b, c, d) {
	if (void 0 != b) {
		100 > b && (b *= 1E3);
		if (void 0 == c || "" == c) c = "all";
		void 0 == d && (d = "ease-in-out");
		d = c + " %dms " + d;
		0 < b ? "all" != c ? this.css({
			"-moz-transition": String.format(d, "-moz-", b),
			"-webkit-transition": String.format(d, "-webkit-", b),
			"-o-transition": String.format(d, "-o-", b),
			"-ms-transition": String.format(d, "-ms-", b),
			transition: String.format(d, "", b)
		}) : this.css({
			"-moz-transition": String.format(d, b),
			"-webkit-transition": String.format(d, b),
			"-o-transition": String.format(d, b),
			"-ms-transition": String.format(d,
				b),
			transition: String.format(d, b)
		}) : this.css({
			"-moz-transition": "",
			"-webkit-transition": "",
			"-o-transition": "",
			"-ms-transition": "",
			transition: ""
		})
	}
};
$.fn.animateOnce = function (b, c, d, f, g) {
	var h = this;
	if (b)
		if (void 0 == c || 0 === c) h.css({
			"-moz-transition": "",
			"-webkit-transition": "",
			"-o-transition": "",
			"-ms-transition": "",
			transition: ""
		}), d && d instanceof Function && d();
		else {
			var k = !1;
			setAnimation(h, c, f, g);
			h.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
				!0 != k && (k = !0, h.setAnimation(0), d && d instanceof Function && d())
			});
			h.css(b)
		}
};
var LanguageTool = {
	isEnglish: function (b) {
		return /[\x00-\xff]/.test(b)
	},
	isChinese: function (b) {
		return /[\u4E00-\u9FBF]/.test(b)
	},
	isArabic: function (b) {
		return /[\u0600-\u06FF]|[\u0750-\u077F]/.test(b)
	},
	isUrdu: function (b) {
		return this.isArabic(b) || /[\uFE70-\uFEFF]/.test(b)
	},
	isHebrew: function (b) {
		return /[\u0590-\u05FF]|[\uFB00-\uFB4F]/.test(b)
	},
	isFarsi: function (b) {
		return this.isUrdu(b) || /[\u0400-\u04FF]|[\u0500-\u052F]/.test(b)
	},
	isTai: function (b) {
		return /[\u0E00-\u0E7F]/.test(b)
	},
	isHindi: function (b) {
		return /[\u0900-\u097F]/.test(b)
	},
	isTamil: function (b) {
		return /[\u0B80-\u0BFF]/.test(b)
	},
	isHimalayaRahm: function (b) {
		return /[\u0D00-\u0D7F]/.test(b)
	},
	isRightToLeft: function (b) {
		return this.isArabic(b) || this.isUrdu(b) || this.isHebrew(b) || this.isFarsi(b) || this.isTai(b) || this.isHindi(b) || this.isTamil(b) || this.isHimalayaRahm(b)
	}
},
	colorTo0x = function (b) {
		var c = b += "";
		if (null == b || void 0 == b) return c;
		"#" != b.substr(0, 1) && "0x" != b.substr(0, 2) && (c = "#" + parseInt(b).toString(16));
		"0x" == b.substr(0, 2) && (c = b.replace("0x", "#"));
		return c
	};
bdor[2] = "e";

function Metacharacter(b) {
	if (null != b && "" != b) return b = b.replaceAll("%", "%25", !0), b = b.replaceAll("+", "%2B", !0), b = b.replaceAll("/", "%2F", !0), b = b.replaceAll("?", "%3F", !0), b = b.replaceAll(" ", "%20", !0), b = b.replaceAll("#", "%23", !0), b = b.replaceAll("&", "%26", !0), b = b.replaceAll("=", "%3D", !0), b = b.replaceAll(":", "%3A", !0), b = b.replaceAll("\r", "%0D", !0), b = b.replaceAll("\n", "%0A", !0)
}

function colorSplit(b) {
	var c = {
		r: 0,
		g: 0,
		b: 0
	},
		d = "FF",
		f = "FF",
		g = "FF";
	switch (b.length) {
		case 7:
			d = b.substr(1, 2);
			f = b.substr(3, 2);
			g = b.substr(5, 2);
			break;
		case 4:
			d = b.substr(1, 1), f = b.substr(2, 1), g = b.substr(3, 1), d += d, f += f, g += g
	}
	c.r = parseInt(d, 16);
	c.g = parseInt(f, 16);
	c.b = parseInt(g, 16);
	return c
}

function colorAdd(b, c) {
	var d = colorSplit(b);
	d.r = Math.min(d.r + c, 255).toString(16);
	d.g = Math.min(d.g + c, 255).toString(16);
	d.b = Math.min(d.b + c, 255).toString(16);
	d.r = 1 >= d.r.length ? "0" + d.r : d.r;
	d.g = 1 >= d.g.length ? "0" + d.g : d.g;
	d.b = 1 >= d.b.length ? "0" + d.b : d.b;
	return "#" + d.r + d.g + d.b
}

function colorDiv(b, c) {
	var d = colorSplit(b);
	d.r = Math.max(d.r - c, 0).toString(16);
	d.g = Math.max(d.g - c, 0).toString(16);
	d.b = Math.max(d.b - c, 0).toString(16);
	d.r = 1 >= d.r.length ? "0" + d.r : d.r;
	d.g = 1 >= d.g.length ? "0" + d.g : d.g;
	d.b = 1 >= d.b.length ? "0" + d.b : d.b;
	return "#" + d.r + d.g + d.b
}
var reflection = function (b) {
	var c = new Image,
		d = document.createElement("canvas"),
		f = d.getContext("2d");
	b[0].appendChild(d);
	c.onload = function () {
		c.onload = c.onerror = null;
		var b = this.width,
			h = this.height,
			k = 0.7 * h;
		try {
			d.style.width = b + "px";
			d.style.height = k + "px";
			d.width = b;
			d.height = k;
			d.className = "reflect";
			$(d).css({
				transform: "translateY(-1px)"
			});
			f.save();
			f.translate(0, h);
			f.scale(1, -1);
			f.drawImage(c, 0, 0, b, h);
			f.restore();
			f.globalCompositeOperation = "destination-out";
			var l = f.createLinearGradient(0, 0, 0, k);
			l.addColorStop(1,
				"rgba(255, 0, 0, 1.0)");
			l.addColorStop(0, "rgba(255, 0, 0, 0)");
			f.fillStyle = l;
			f.rect(0, 0, b, 2 * k);
			f.fill()
		} catch (m) { }
	};
	c.onerror = function () {
		c.onload = c.onerror = null
	};
	c.src = b.children("img")[0].src
};
$.fn.allowNumberOnly = function () {
	$(this).keypress(function (b) {
		b = b || e;
		b = b.keyCode || b.which;
		return 48 <= b && 57 >= b ? !0 : !1
	}).focus(function () {
		this.style.imeMode = "disabled"
	}).bind("paste", function () {
		var b = window.clipboardData.getData("Text");
		return /^\d+$/.test(b) ? !0 : !1
	})
};
var fullScreenEvent = function () {
	isPhone() ? alert(getLanguage("", "")) : !0 == $.browser.msie ? alert(getLanguage("")) : (fullscreenFun(), $(document).bind(fullScreenApi.fullScreenEventName, function () {
		console.log('fullScreenEvent')
	}))
};

function DeString(b, c) {
	if ("" == b) return "";
	c && "" != c || (c = "fb5");
	c = escape(c);
	if (null == b || 8 > b.length) alert("A salt value could not be extracted from the encrypted message because it's length is too short. The message cannot be decrypted.");
	else if (null == c || 0 >= c.length) alert("Please enter a password with which to decrypt the message.");
	else {
		for (var d = "", f = 0; f < c.length; f++) d += c.charCodeAt(f).toString();
		var g = Math.floor(d.length / 5),
			g = parseInt(d.charAt(g) + d.charAt(2 * g) + d.charAt(3 * g) + d.charAt(4 * g) + d.charAt(5 *
				g)),
			h = Math.round(c.length / 2),
			k = Math.pow(2, 31) - 1,
			f = parseInt(b.substring(b.length - 8, b.length), 16);
		b = b.substring(0, b.length - 8);
		for (d += f; 10 < d.length;) d = (parseInt(d.substring(0, 10)) + parseInt(d.substring(10, d.length))).toString();
		for (var d = (g * d + h) % k, l = "", m = "", f = 0; f < b.length; f += 2) l = parseInt(parseInt(b.substring(f, f + 2), 16) ^ Math.floor(d / k * 255)), m += String.fromCharCode(l), d = (g * d + h) % k;
		// console.log(m);
		return unescape(m)
	}
}
var divHint = Class({
	create: function (b, c, d, f) {
		this.instance = $("<div class='hint'></div>");
		this.setText(b);
		void 0 == f && (f = $("body"));
		f.append(this.instance);
		this.instance.css({
			display: "none",
			opacity: 0
		});
		this.moveto(c, d);
		this.animation = !1;
		this.className = "hint"
	},
	setAnimate: function (b) {
		this.animation = b;
		!0 == b && this.instance.css({
			"-moz-transition": "all 0.2s ease-in-out",
			"-webkit-transition": "all 0.2s ease-in-out",
			"-o-transition": "all 0.2s ease-in-out",
			"-ms-transition": "all 0.2s ease-in-out",
			transition: "all 0.2s ease-in-out"
		})
	},
	setStyle: function (b) {
		this.instance.removeClass(this.className);
		this.instance.addClass(b);
		this.className = b
	},
	setText: function (b) {
		this.instance.html(b)
	},
	moveto: function (b, c) {
		this.instance.css({
			left: b,
			top: c
		})
	},
	show: function () {
		this.instance.css({
			display: "block",
			opacity: 1
		})
	},
	hide: function () {
		!0 == this.animation ? this.instance.css({
			display: "none",
			opacity: 0
		}) : this.instance.css({
			display: "none",
			opacity: 1
		})
	},
	destroy: function () {
		this.hide();
		this.instance.empty();
		this.instance.remove()
	},
	width: function () {
		return this.instance.width() +
			3 * this.padding()
	},
	height: function () {
		return this.instance.height() + 3 * this.padding()
	},
	padding: function () {
		var b = this.instance.css("padding");
		return void 0 == b || null == b || "" == b ? 0 : iPadding = parseInt(b.replace("px", ""))
	}
});

function loadJavascript(b, c, d) {
	var f = this,
		g = document.createElement("script");
	g.type = "text/javascript";
	g.async = !0;
	g.onload = g.onreadystatechange = function () {
		f.readyState && "loaded" != f.readyState && "complete" != f.readyState || (g.onload = g.onreadystatechange = null, void 0 != c && c(g))
	};
	g.onerror = function () {
		void 0 != d && d(g)
	};
	$("body")[0].appendChild(g);
	// g.src = b;  //sdk文件地址已坏
	return g
}

function addProgressBar(b, c, d) {
	if (void 0 != b && null != b && (void 0 == b.progressBar || null == b.progressBar)) {
		var f = $("<div></div>"),
			g = $("<div></div>");
		c = void 0 == c || null == c ? $(b).outerWidth() : c;
		d = void 0 == d || null == d ? $(b).outerHeight() : d;
		var h = $("<img src='" + uiBaseURL + "progress.gif' style='position:absolute;' />");
		g.css({
			background: "#000000",
			opacity: "0.3",
			width: c + "px",
			height: d + "px",
			"z-index": "0"
		});
		f.css({
			width: c + "px",
			height: d + "px",
			"z-index": "100"
		});
		h.css({
			left: (c - 31) / 2 + "px",
			top: (d - 31) / 2 + "px",
			"z-index": "1"
		});
		f.append($(g));
		f.append($(h));
		b.append($(f));
		b.progressBar = f
	}
}

function clearProgressBar(b) {
	void 0 != b.progressBar && null != b.progressBar && b.progressBar.remove()
}

function setAnimation(b, c, d, f) {
	if (b && void 0 != c) {
		100 > c && (c *= 1E3);
		if (void 0 == d || "" == d) d = "all";
		void 0 == f && (f = "ease-in-out");
		f = d + " %dms " + f;
		0 < c ? "all" != d ? b.css({
			"-moz-transition": String.format(f, "-moz-", c),
			"-webkit-transition": String.format(f, "-webkit-", c),
			"-o-transition": String.format(f, "-o-", c),
			"-ms-transition": String.format(f, "-ms-", c),
			transition: String.format(f, "", c)
		}) : b.css({
			"-moz-transition": String.format(f, c),
			"-webkit-transition": String.format(f, c),
			"-o-transition": String.format(f, c),
			"-ms-transition": String.format(f,
				c),
			transition: String.format(f, c)
		}) : b.css({
			"-moz-transition": "",
			"-webkit-transition": "",
			"-o-transition": "",
			"-ms-transition": "",
			transition: ""
		})
	}
}

function animateOnce(b, c, d, f, g, h) {
	if (b && c)
		if (void 0 == d || 0 === d) b.css(c), f && f instanceof Function && f();
		else {
			var k = !1;
			setAnimation(b, d, g, h);
			b.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
				!0 != k && (k = !0, setAnimation(b, 0), f && f instanceof Function && f())
			});
			b.css(c)
		}
}

function ScrollFunction(b, c, d, f) {
	var g = this,
		h;
	$(c).transform(0, 0);
	$(c).bind(_event._down, function (b) {
		g.scrollMouseDown = !0;
		d.isDrag = !1;
		b = isTouch ? b.originalEvent.touches : [b];
		g.mouseDownY = b[0].pageY;
		h = getPoint(c).y;
		$.browser.msie ? event.cancelBubble = !0 : event.stopPropagation();
		return !1
	});
	$(c).bind(_event._move, function (k) {
		if (g.scrollMouseDown) {
			k = isTouch ? k.originalEvent.touches : [k];
			k = g.mouseDownY - k[0].pageY;
			var l = h - k,
				l = Math.min(0, l),
				l = Math.max(b.outerHeight() - c.outerHeight(), l);
			b.outerHeight() < c.outerHeight() &&
				(c.transform(0, l), void 0 != f && f());
			1 > Math.abs(k) ? d.isDrag = !1 : d.isDrag = !0
		} else d.isDrag = !1;
		return !1
	});
	$(c).bind(_event._mousewheel, function (d) {
		d.preventDefault();
		d = d.originalEvent;
		var g = -30;
		0 < Math.max(-1, Math.min(1, d.wheelDelta || -d.detail)) && (g = 30);
		h = getPoint(c).y;
		d = h + g;
		d = Math.min(0, d);
		d = Math.max(b.outerHeight() - c.outerHeight(), d);
		b.outerHeight() < c.outerHeight() && c.transform(0, d);
		void 0 != f && f();
		return !1
	});
	$(c).bind(_event._end, function (b) {
		return g.scrollMouseDown = !1
	});
	$(c).bind(_event._leave, function (b) {
		return g.scrollMouseDown = !1
	})
}

function autoCenter(b, c, d, f) {
	if (b && !(0 >= b.length)) {
		var g = b.length;
		c = Math.max((c - d * g) / (g - 1), 0);
		void 0 == f && (f = 0);
		for (var h = 0; h < g; h++) b[h].css("left", c * h + d * h + f)
	}
}

function fullscreenFun() {
	if ($.browser.msie) alert("Press F11 to View FlipBook in Full Screen");
	else {
		var b = $("body")[0];
		fullScreenApi.supportsFullScreen && (fullScreenApi.isFullScreen() ? fullScreenApi.cancelFullScreen() : fullScreenApi.requestFullScreen(b));
		b.webkitSupportsFullscreen && b.webkitEnterFullscreen(Element.ALLOW_KEYBOARD_INPUT)
	}
}
$.fn.speed = function (b) {
	function c(b) {
		b = void 0 == b.originalEvent.touches ? [b] : b.originalEvent.touches;
		if (1 < b.length) return q = !0;
		g = k = b[0].pageX;
		h = l = b[0].pageY;
		m = new Date; - 1 != p && window.clearInterval(p);
		p = window.setInterval(function () {
			g = k;
			h = l;
			m = new Date
		}, 300)
	}

	function d(b) {
		if (-1 == p || !0 == q) return !0;
		b = void 0 == b.originalEvent.touches ? [b] : b.originalEvent.touches;
		k = b[0].pageX;
		l = b[0].pageY
	}

	function f(c) {
		if (-1 == p) return !0;
		c = void 0 != c.originalEvent.touches == !1 ? [c] : c.originalEvent.touches;
		if (!0 == q) return q = 1 < c.length, !0;
		n = new Date;
		c = (n - m) / 20;
		var d = k - g,
			f = l - h;
		0 == c ? iSpeedY = iSpeedX = 0 : (iSpeedX = d / c, iSpeedY = f / c);
		void 0 != b && b(iSpeedX, iSpeedY);
		window.clearInterval(p);
		p = -1
	}
	var g, h, k, l, m, n, p = -1,
		q = !1;
	try {
		this.bind("mousedown", c), this.bind("mousemove", d), this.bind("mouseup", f), this.bind("mouseleave", f)
	} catch (t) { }
	try {
		this.bind("touchstart", c), this.bind("touchmove", d), this.bind("touchend", f), this.bind("touchleave", f)
	} catch (r) { }
};
Class("ObjectPool", {
	objects: null,
	length: 0,
	create: function () {
		this.objects = []
	},
	add: function (b) {
		this.objects.push(b);
		this.length = this.objects.length
	},
	remove: function (b) {
		this.objects.removeElement(b);
		this.length = this.objects.length
	},
	find: function () {
		for (var b = arguments, c = new ObjectPool, d = 0; d < b.length; d++) {
			var f = b[d];
			if ("string" == typeof f && "" != f)
				for (var f = f.toLowerCase(), g = 0; g < this.objects.length; g++) {
					var h = this.objects[g];
					h.getClassName && -1 < h.getClassName().toLowerCase().indexOf(f) && c.add(h)
				}
		}
		return c
	},
	match: function () {
		for (var b = arguments, c = new ObjectPool, d = 0; d < b.length; d++) {
			var f = b[d];
			if ("string" == typeof f && "" != f)
				for (var g = 0; g < this.objects.length; g++) {
					var h = this.objects[g];
					h.getClassName && h.getClassName() == f && c.add(h)
				}
		}
		return c
	},
	clone: function () {
		for (var b = new ObjectPool, c = 0; c < this.objects.length; c++) b.add(this.get(c));
		return b
	},
	get: function (b) {
		return this.objects[b]
	},
	each: function (b) {
		for (var c = 0; c < this.objects.length; c++) {
			var d = this.objects[c];
			d && b && b instanceof Function && b(d)
		}
	}
});
var BookType = {
	normal_book: 0,
	single_book: 1,
	slide_book: 3,
	phone_slide_book: 4,
	singlePhone_slide_book: 5,
	singleSlide_book: 6,
	catalog_book: 7,
	singleCatalog_book: 8
},
	normalBookStatu = {
		book_statu_ready: 0,
		book_statu_auto_flip: 1,
		book_statu_mouse_flip: 2,
		book_statu_mag_flip: 3
	},
	singleBookStatu = {
		book_statu_ready: 0,
		book_statu_auto_flip: 1,
		book_statu_mouse_flip: 2,
		book_statu_mag_flip: 3
	},
	bookCorner = {
		top_left: 0,
		top_right: 1,
		bottom_left: 2,
		bottom_right: 3
	},
	BrowserType = {
		WEBKIT: 1,
		OPERA: 1,
		MOZ: 2,
		MS: 3
	},
	bookEvent = {
		onCurrentPageIndexChanged: "BE_PIC",
		onCurrentPageIndexWillChange: "BE_PIWC",
		onNoNextPage: "BE_NNP",
		onNoPreviousPage: "BE_NPP"
	},
	PLUGIN_MAGNETICS =
		"AbPIMagneticSlider",
	PLUGIN_ROTATE3D = "AbPIRotationPhotoFor3D",
	PLUGIN_VIDEO1 = "VideoPlayerExemple01",
	PLUGIN_VIDEO2 = "VideoPlayerExemple02",
	PLUGIN_CLASSAUDIO = "",
	KEY_CODE_ENTER = 13,
	KEY_CODE_LEFT = 37,
	KEY_CODE_UP = 38,
	KEY_CODE_RIGHT = 39,
	KEY_CODE_DOWN = 40,
	KEY_CODE_HOME = 36,
	KEY_CODE_END = 35,
	KEY_CODE_PAGEUP = 33,
	KEY_CODE_PAGEDOWN = 34,
	KEY_CODE_DELETE = 46,
	KEY_CODE_F11 = 122,
	MOUSE_LEFT = 1,
	MOUSE_MIDDLE = 2,
	MOUSE_RIGHT = 3,
	LOADING_WIDTH = 30,
	LOADING_HEIGHT = 30,
	COIL_PAGE_WIDTH = 500,
	ICON_BACKGROUND = 0,
	ICON_LAST = 1,
	ICON_NEXT = 2,
	ICON_PREV = 3,
	ICON_FIRST = 4,
	ICON_ZOOMIN = 5,
	ICON_ZOOMOUT = 6,
	ICON_AUTOPLAY = 7,
	ICON_STOPAUTOPLAY = 8,
	ICON_THUMB = 9,
	ICON_SHARE = 10,
	ICON_SEARCH = 11,
	ICON_DOWNLOAD = 12,
	ICON_HOME = 13,
	ICON_BOOKMARK = 14,
	ICON_SOUNDON = 15,
	ICON_SOUNDOFF = 16,
	ICON_PREV_NORMAL = 17,
	ICON_PREV_NORMAL_DOWN = 18,
	ICON_NEXT_NORMAL = 19,
	ICON_NEXT_NORMAL_DOWN = 20,
	ICON_PRINT = 21,
	ICON_HELP = 22,
	ICON_ABOUT = 23,
	ICON_MOREBAR = 24,
	ICON_LANGUAGE = 25,
	ICON_THUMB_DOWN = 26,
	ICON_FULLSCREEN = 27,
	ICON_EXIT_FULLSCREEN = 28,
	ICON_MOVE_POSITION = 29,
	ICON_MOVE_DRAG = 30,
	ICON_ANNOTATION = 31,
	ICON_TOC = 32,
	ICON_VIDEOGALLERY =
		33,
	ICON_PHOTOGALLERY = 34,
	isTouchDevice = function () {
		var b = "ontouchstart" in window,
			c = navigator.userAgent.match(/mobile|tablet|ip(ad|hone|od)|android/i),
			c = c && 0 < c.length;
		return b && c
	},
	isTouch = isTouchDevice(),
	_event;
_event = isTouchDevice() ? {
	_down: "touchstart",
	_move: "touchmove",
	_end: "touchend",
	_click: "touchend",
	_leave: "touchleave",
	_out: "touchleave",
	_enter: "touchmove",
	_mousewheel: "mousewheel",
	_over: "touchover"
} : {
		_down: "mousedown",
		_move: "mousemove",
		_end: "mouseup",
		_click: "click",
		_leave: "mouseleave",
		_out: "mouseout",
		_enter: "mouseenter",
		_mousewheel: "mousewheel",
		_over: "mouseover"
	};
$.browser.mozilla && (_event._mousewheel = "DOMMouseScroll");
var WebScheme = {
	HTTP: "http",
	HTTPS: "https",
	FTP: "ftp",
	MAILTO: "mailto",
	IDAP: "idap",
	FILE: "file",
	NEWS: "news",
	GOPHER: "gopher",
	TELNET: "telnet"
},
	resizePlugin = function () {
		windowWidth > windowHeight && window.plugin && window.plugin.show();
		windowWidth < windowHeight && window.plugin && window.plugin.hide()
	},
	transformCSS = function (b) {
		var c = "";
		b.tran && ($.browser.msie && (c = c + "translate(" + b.tran.x + "px," + b.tran.y + "px) "), $.browser.msie || (c = c + "translate3d(" + b.tran.x + "px," + b.tran.y + "px,0px) "));
		b.rotate && (c = c + "rotate(" + b.rotate +
			"deg)");
		b.rotateY && (c = c + "rotateY(" + b.rotateY + "deg)");
		b.perspective && (c = c + "perspective(" + b.perspective + "px)");
		b.scale && (c = c + "scale3d(" + b.scale + "," + b.scale + ",1) ");
		b.scaleX && (c = c + "scaleX(" + b.scaleX + ") ");
		b.scaleY && (c = c + "scaleY(" + b.scaleY + ") ");
		var d = {
			"-webkit-transform": c,
			"-moz-transform": c,
			"-ms-transform": c,
			"-o-transform": c,
			transform: c
		};
		b.origin && (d = b.origin.x + "% " + b.origin.y + "%", d = {
			"-webkit-transform": c,
			"-moz-transform": c,
			"-ms-transform": c,
			"-o-transform": c,
			transform: c,
			"-webkit-transform-origin": d,
			"-moz-transform-origin": d,
			"-ms-transform-origin": d,
			"-o-transform-origin": d,
			"transform-origin": d
		});
		b.obj && b.obj.css(d);
		return d
	},
	initBookTye = function () {
		var b = "normal_book";
		if ("slide" == bookConfig.FlipStyle.toLowerCase() || isBelowIE9()) b = "slide_book";
		"flip" != bookConfig.FlipStyle.toLowerCase() || isBelowIE9() || (b = "flip_book");
		"" != bookConfig.FlipStyle || isBelowIE9() || (b = "flip_book");
		"catalog" != bookConfig.FlipStyle.toLowerCase() || isBelowIE9() || (b = "catalog_book");
		isPhoneBook() && (b = "phone_slide_book");
		return b
	},
	rotate = function (b) {
		return " rotate(" + b + "deg)"
	},
	translate = function (b, c) {
		return $.browser.msie ? "translate(" + b + "px," + c + "px)" : "translate3d(" + b + "px," + c + "px,0px)"
	},
	tranScale = function (b) {
		return $.browser.msie ? " scale(" + b + ")" : " scale3d(" + b + "," + b + ",1)"
	},
	cssTranslate = function (b, c, d) {
		if ($.browser.msie) {
			if (void 0 == b.getOrigin || null == b.getOrigin) b.getOrigin = !1;
			if (!b.getOrigin) {
				b.getOrigin = !0;
				b.originX = parseInt(b.css("left"));
				b.originY = parseInt(b.css("top"));
				if (void 0 == b.originX || null == b.originX || isNaN(b.originX)) b.originX =
					0;
				if (void 0 == b.originY || null == b.originY || isNaN(b.originY)) b.originY = 0
			}
			b = {
				left: b.originX + c + "px",
				top: b.originY + d + "px"
			}
		} else b = translate(c, d), b = {
			"-webkit-transform": b,
			"-moz-transform": b,
			"-ms-transform": b,
			"-o-transform": b,
			transform: b
		};
		return b
	},
	translate2D = function (b, c) {
		return " translate(" + b + "px," + c + "px)"
	},
	horizontalMirror = function (b) {
		b && b.css({
			"-moz-transform": "scaleX(-1)",
			"-webkit-transform": "scaleX(-1)",
			"-o-transform": "scaleX(-1)",
			transform: "scaleX(-1)",
			filter: "FlipH"
		})
	};
$.fn.transform = function (b, c) {
	if ($.browser.msie) {
		if (void 0 == this.getOrigin || null == this.getOrigin) this.getOrigin = !1;
		if (!this.getOrigin) {
			this.getOrigin = !0;
			this.originX = parseInt(this.css("left"));
			this.originY = parseInt(this.css("top"));
			if (void 0 == this.originX || null == this.originX || isNaN(this.originX)) this.originX = 0;
			if (void 0 == this.originY || null == this.originY || isNaN(this.originY)) this.originY = 0
		}
		this.css({
			left: this.originX + b + "px",
			top: this.originY + c + "px"
		});
		return this
	}
	var d = $.browser.msie ? " translate(" + b +
		"px," + c + "px)" : " translate3d(" + b + "px," + c + "px,0px)";
	this.css({
		"-webkit-transform": d,
		"-moz-transform": d,
		"-ms-transform": d,
		"-o-transform": d,
		transform: d
	})
};
var scaleTran = function (b) {
	return " scale(" + b + ")"
},
	isLeft = function (b) {
		return 0 == b || 2 == b
	},
	isRight = function (b) {
		return 1 == b || 3 == b
	},
	isTop = function (b) {
		return 0 == b || 1 == b
	},
	isBottom = function (b) {
		return 2 == b || 3 == b
	},
	flipAudio, playFlipSound = function () {
		if ((!isPlaying || $.system.name != $.system.ANDROID) && parseBool(bookConfig.FlipSound, !0) && void 0 != global.flipAudio && null != flipAudio && void 0 != flipAudio[0].play) try {
			flipAudio[0].play()
		} catch (b) { }
	},
	nextPageFun = function () {
		switch (bookType) {
			case BookType.normal_book:
				gotoPageFun(2 *
					Math.floor(flipBook.getCurrentPageIndex() / 2 + 1));
				break;
			case BookType.single_book:
				gotoPageFun(parseInt(singlePageBook.currentPageIndex) + 1);
				break;
			case BookType.slide_book:
				gotoPageFun(2 * Math.floor(slideBook.getRealPageIndex() / 2 + 1));
				break;
			case BookType.singleSlide_book:
				gotoPageFun(parseInt(singleSlideBook.getRealPageIndex()) + 1);
				break;
			case BookType.catalog_book:
				gotoPageFun(2 * Math.floor(catalogBook.getCurrentPageIndex() / 2 + 1));
				break;
			case BookType.singleCatalog_book:
				gotoPageFun(parseInt(singleCatalogBook.currentIndex) +
					1);
				break;
			case BookType.phone_slide_book:
				gotoPageFun(2 * Math.floor(phoneSlideBook.getRealPageIndex() / 2 + 1));
				break;
			case BookType.singlePhone_slide_book:
				gotoPageFun(parseInt(singlePhoneSlideBook.getRealPageIndex()) + 1)
		}
	},
	previousPageFun = function () {
		switch (bookType) {
			case BookType.normal_book:
				gotoPageFun(2 * Math.floor(flipBook.getCurrentPageIndex() / 2 - 1) + 1);
				break;
			case BookType.catalog_book:
				gotoPageFun(2 * Math.floor(catalogBook.getCurrentPageIndex() / 2 - 1) + 1);
				break;
			case BookType.single_book:
				gotoPageFun(parseInt(singlePageBook.currentPageIndex) -
					1);
				break;
			case BookType.slide_book:
				gotoPageFun(2 * Math.floor(slideBook.getRealPageIndex() / 2 - 1) + 1);
				break;
			case BookType.singleSlide_book:
				gotoPageFun(singleSlideBook.getRealPageIndex() - 1);
				break;
			case BookType.singleCatalog_book:
				gotoPageFun(parseInt(singleCatalogBook.currentIndex) - 1);
				break;
			case BookType.phone_slide_book:
				gotoPageFun(2 * Math.floor(phoneSlideBook.getRealPageIndex() / 2 - 1) + 1);
				break;
			case BookType.singlePhone_slide_book:
				gotoPageFun(singlePhoneSlideBook.getRealPageIndex() - 1)
		}
	},
	firstPageFun = function () {
		gotoPageFun(1)
	},
	lastPageFun = function () {
		gotoPageFun(originTotalPageCount)
	},
	gotoPageFun = function (b) {
		window.Wxx.touchPage(b);
		window.Wxx.pageIndex = b;
		sendvisitinfo(1, b);
		b = parseInt(b);
		if (passwardType() && bookConfig.excludeFrontPages && b > parseInt(bookConfig.excludeFrontPages) && !verifyPassward()) passwardPannel.show();
		else {
			(0 > BookInfo.getCurrentPages().indexOf(b) || 1 >= originTotalPageCount);
			switch (bookType) {
				case BookType.normal_book:
					flipBook.gotoPage(b);
					break;
				case BookType.single_book:
					singlePageBook.gotoPage(b);
					break;
				case BookType.slide_book:
					slideBook.gotoPage(b);
					break;
				case BookType.singleSlide_book:
					singleSlideBook.gotoPage(b);
					break;
				case BookType.catalog_book:
					catalogBook.gotoPage(b);
					break;
				case BookType.singleCatalog_book:
					singleCatalogBook.gotoPage(b);
					break;
				case BookType.phone_slide_book:
					phoneSlideBook.gotoPage(b);
					break;
				case BookType.singlePhone_slide_book:
					singlePhoneSlideBook.gotoPage(b)
			}
			global.phoneBookmark && global.phoneBookmark.lightBookmarkButton(b)
		}
	},
	fillCurrentPageContent = function () {
		for (var b = getShownPage(), c = 0; c < b.length; c++) BookInfo.getBook().fillPage(b[c]);
		thumbnail && thumbnail.show && thumbnail.fillContent && thumbnail.fillContent()
	},
	setPageURL = function (b, c, d) {
		var f = parseInt(b) - 1;
		global.fliphtml5_pages || (global.fliphtml5_pages = []);
		global.fliphtml5_pages[f] || (global.fliphtml5_pages[f] = {});
		getShownPage();
		switch (c) {
			case 0:
				global.fliphtml5_pages[f].l = d;
				break;
			case 1:
				global.fliphtml5_pages[f].n = d;
				BookInfo.getBook().fillPage(b, !0);
				break;
			case 2:
				global.fliphtml5_pages[f].t = d
		}
	},
	getFileFormat = function (b) {
		return !passwardType() || !bookConfig.excludeFrontPages || b <= parseInt(bookConfig.excludeFrontPages) ? ".jpg" : ".js"
	},
	decodeBase64 = function (b, c) {
		var d = encodeDatabasePrefix(c);
		if (global[d + b] && "string" == typeof global[d + b]) {
			var f =
				getRealkey();
			if (f) return d = base64.decode(global[d + b]), f = rc4(f, d), base64.encode(f)
		}
	},
	dataBase64Str = function (b, c, d) {
		if (verifyPassward()) {
			var f = decodeDatabasePrefix(c),
				g = encodeDatabasePrefix(c);
			if (global[f + b]) return global[g + b] = null, d && $(d).remove(), global[f + b];
			c = "data:image/jpg;base64," + decodeBase64(b, c);
			global[f + b] = c;
			global[g + b] = null;
			d && $(d).remove();
			return c
		}
	},
	decodeDatabasePrefix = function (b) {
		switch (b) {
			case "normal":
				return "dataBase";
			case "large":
				return "dataBase";
			case "thum":
				return "dataBaseThum"
		}
	},
	encodeDatabasePrefix = function (b) {
		switch (b) {
			case "normal":
				return "page";
			case "large":
				return "page";
			case "thum":
				return "thumb"
		}
	},
	userList, getRealkey = function () {
		if (1 == passwardType()) return getSingleRealKey();
		if (userList && document.getElementById("passward") && "" != $("#passward").val() && document.getElementById("username") && "" != $("#username").val()) {
			var b = $("#passward").val(),
				c = $("#username").val();
			if (userList && "string" == typeof userList[c]) return getListRealKey(c, b, userList[c])
		}
	},
	getSingleRealKey = function () {
		if (bookConfig.singlePasswordKey &&
			"string" == typeof bookConfig.singlePasswordKey && document.getElementById("passward") && "" != $("#passward").val()) {
			var b = parsHexToNormalString(bookConfig.singlePasswordKey);
			return rc4($("#passward").val(), b)
		}
	},
	getListRealKey = function (b, c, d) {
		b = (b + String.fromCharCode(9) + c).MD5(32);
		b = parsHexToNormalString(b);
		b = base64.encode(b);
		d = d.remove(b);
		d = d.replace(/==?$/, "");
		if (d = base64.decode(d)) return c = (b + c).cycle(128), rc4(c, d)
	},
	verifyPassward = function () {
		if (1 == passwardType()) {
			if (!document.getElementById("passward") ||
				"" == $("#passward").val()) return;
			var b = $("#passward").val();
			return b.MD5(32).toLowerCase() === bookConfig.singlePasswordMD5.toLowerCase()
		}
		if (bookConfig.userListPath && (userList || loadJavascript(bookConfig.userListPath, verifyPassward, function () { }), userList && document.getElementById("passward") && "" != $("#passward").val() && document.getElementById("username") && "" != $("#username").val())) {
			var b = $("#passward").val(),
				c = $("#username").val();
			if ("string" == typeof userList[c]) return b = (c + String.fromCharCode(9) + b).MD5(32),
				b = parsHexToNormalString(b), b = base64.encode(b), userList[c].substring(0, 24) === b
		}
	},
	passwardType = function () {
		if (!bookConfig.securityType || 1 == parseInt(bookConfig.securityType)) return 0;
		if (bookConfig.securityType && 2 == parseInt(bookConfig.securityType)) return 1;
		if (bookConfig.securityType && 3 == parseInt(bookConfig.securityType)) return 2
	},
	fillImageOrNot = function (b, c) {
		return !b || "string" != typeof b || passwardType() && bookConfig.excludeFrontPages && c > parseInt(bookConfig.excludeFrontPages) && !verifyPassward() ? !1 : !0
	},
	fillImage =
		function (b, c, d, f, g) {
			c && "string" == typeof c && b && d && f && fillImageOrNot(c, d) && (-1 < c.indexOf(".js") ? global[decodeDatabasePrefix(f) + d] && "string" == typeof global[decodeDatabasePrefix(f) + d] ? (b.attr("src", dataBase64Str(d, f)), g && g()) : loadJavascript(c, function (c) {
				b.attr("src", dataBase64Str(d, f, c));
				g && g()
			}, function () { }) : (b.attr("src", c), g && g()))
		},
	getPageWidthHeight = function (b, c, d, f) {
		var g = Point(0, 0);
		b / c > d / f ? (g.x = 2 * parseInt(d * c / (2 * f)), g.y = c) : (g.x = 2 * parseInt(b / 2), g.y = b * f / d);
		return g
	},
	getPageWidthHeightByWidth = function (b,
		c, d, f) {
		c = Point(0, 0);
		c.x = b;
		c.y = b * f / d;
		return c
	},
	slideShowImagesAdapter = function (b, c) {
		if (b[0]) return b;
		for (var d = [], f = c[0], g = c[1], h = b[f].length, k = 0; k < h; k++) d.push(b[f][k][g]);
		return d
	},
	pointToLineDistance = function (b, c, d, f, g, h) {
		var k = h - f,
			l = d - g;
		return Math.abs(k * b + l * c + (g * f - d * h)) / Math.sqrt(k * k + l * l)
	},
	globalToBook = function (b, c, d) {
		var f;
		switch (bookType) {
			case BookType.single_book:
				f = Point(c - singlePageBook.getLeft(), d - singlePageBook.getTop());
				break;
			case BookType.normal_book:
				f = Point(c - ((b ? 0 : flipBook.getPageWidth()) +
					flipBook.getLeft()), d - flipBook.getTop());
				break;
			case BookType.catalog_book:
				f = catalogBook.getTran(), b = c - ((b ? 0 : catalogBook.getPageWidth()) + catalogBook.getCssLeft()) - f.x, d = d - catalogBook.getCssTop() - f.y, f = Point(b, d)
		}
		return f
	};
bdor[32] = function (b, c) {
	return b + c
};
var changeShowBook = function (b) {
	switch (b) {
		case 0:
			bookType = BookType.normal_book;
			singlePageBook.hide();
			flipBook.show();
			break;
		case 1:
			bookType = BookType.single_book;
			singlePageBook.show();
			flipBook.hide();
			break;
		case 3:
			bookType = BookType.slide_book;
			slideBook.show();
			break;
		case 4:
			bookType = BookType.phone_slide_book;
			singlePhoneSlideBook.hide();
			phoneSlideBook.show();
			break;
		case 5:
			bookType = BookType.singlePhone_slide_book;
			singlePhoneSlideBook.show();
			phoneSlideBook.hide();
			break;
		case 6:
			bookType = BookType.singleSlide_book;
			singleSlideBook.show();
			break;
		case 7:
			bookType = BookType.catalog_book;
			catalogBook.show();
			break;
	}
},
	computePoint = function (b, c, d, f, g) {
		if (!f || !g) return {
			rotate: 0,
			pageTranX: 0,
			maskTranX: 0,
			maskTranY: 0
		};
		g.x > b && (g.x = b);
		g.x < -b && (g.x = -b);
		isAndroidDefault() && (f.y = g.y);
		if (f.x == g.x) {
			var h = 0;
			0 > f.x && (h += 180);
			return {
				rotate: h,
				pageTranX: 0,
				maskTranX: f.x,
				maskTranY: 0
			}
		}
		var k = Math.sqrt(Math.pow(g.y - c, 2) + Math.pow(g.x - 0, 2)),
			h = Math.sqrt(Math.pow(f.y - c, 2) + Math.pow(f.x - 0, 2));
		if (k > h) {
			var l = Math.atan((g.y - c) / (g.x -
				0)),
				k = Math.abs(Math.sin(l) * h),
				h = Math.abs(Math.cos(l) * h);
			g.y = c - k;
			g.x = 0 < g.x ? h : -h
		}
		k = Math.sqrt(Math.pow(g.y - 0, 2) + Math.pow(g.x - 0, 2));
		h = Math.sqrt(Math.pow(f.y - 0, 2) + Math.pow(f.x - 0, 2));
		k > h && (l = Math.atan((g.y - 0) / (g.x - 0)), k = Math.abs(Math.sin(l) * h), h = Math.abs(Math.cos(l) * h), g.y = k, g.x = 0 < g.x ? h : -h);
		var m = (g.y - f.y) / (g.x - f.x),
			n = Math.atan(m),
			h = 180 * n / Math.PI,
			p = (g.x + f.x) / 2,
			q = (g.y + f.y) / 2,
			k = c / 2,
			l = b / 2,
			t = c / 2;
		0 > f.x && (h += 180, l = -b / 2);
		g = Math.sqrt(Math.pow(f.y - g.y, 2) + Math.pow(f.x - g.x, 2)) / 2;
		g = 0 <= h && 180 > h ? Math.abs((c - Math.abs(f.y)) *
			Math.sin(n)) + g : Math.abs(f.y * Math.sin(n)) + g;
		c = Math.atan(b / c);
		d = Math.abs(g / (Math.sin(c + Math.abs(n)) * d));
		d = Math.min(1, d);
		c = ((p - l) * m + t + Math.pow(m, 2) * q) / (1 + Math.pow(m, 2));
		f = m * (q - c) + p;
		t = Math.sqrt(Math.pow(l - f, 2) + Math.pow(t - c, 2));
		Math.abs(f) < Math.abs(l) && (t = -t);
		return {
			frontShadowDistance: g,
			shadowRate: d,
			rotate: h,
			pageTranX: t - b / 2,
			maskTranX: f - 0,
			maskTranY: c - k
		}
	},
	supports = function () {
		var b = document.createElement("div"),
			c = ["Khtml", "Ms", "O", "Moz", "Webkit"];
		return function (d) {
			if (d in b.style) return !0;
			d = d.replace(/^[a-z]/,
				function (b) {
					return b.toUpperCase()
				});
			for (var f = c.length; f--;)
				if (c[f] + d in b.style) return !0;
			return !1
		}
	}(),
	setCurrentIndexTextField = function (b, c) {
		var d = bookConfig.totalPagesCaption,
			f = bookConfig.pageNumberCaption;
		void 0 == d && (d = "");
		void 0 == f && (f = "");
		if ("" != f)
			if (1 != b && b != originTotalPageCount && c) {
				var f = 2 * Math.floor(b / 2),
					g = getShownPageNumber(f),
					h = getShownPageNumber(f + 1);
				b = rightToLeft ? h + "-" + g : g + "-" + h
			} else f = b = getShownPageNumber(b);
		else 1 != b && b != originTotalPageCount && c ? (g = f = 2 * Math.floor(b / 2), h = f + 1, b = rightToLeft ?
			h + "-" + g : g + "-" + h) : f = b;
		"" == d ? (d = originTotalPageCount, c || (d = originTotalPageCount)) : isNaN(d) || (d = g = parseInt(d), c || (d = originTotalPageCount - originTotalPageCount + g));
		f = bookConfig.RightToLeft ? d + "/" + f : f + "/" + d;
		$("#guidPageIndex").html("<b>" + f + "</b>");
		void 0 != $("#currentPageIndexTextField") && null != $("#currentPageIndexTextField") && void 0 != $("#currentPageIndexTextField")[0] && null != $("#currentPageIndexTextField")[0] && $("#currentPageIndexTextField").val(rightToLeft ? d + "/" + b : b + "/" + d)
	},
	getShownPageArray = function () {
		var b =
			bookConfig.pageNumberCaption + "",
			c = originTotalPageCount;
		";" == b.substr(b.length - 1, 1) && (b = b.substr(0, b.length - 1));
		for (var b = b.split(";"), d = [], f = 0, g = 0; g < b.length; g++)
			if ("" != b[g] && void 0 != b[g] && (f = b[g].split(":"), f[0]))
				if (f[1] || (f[1] = ""), -1 < f[1].indexOf("+")) {
					var h = f[0];
					h.indexOf("-");
					for (var h = h.split("-"), k = h[1], h = parseInt(h[0]), k = k ? parseInt(k) : c, f = parseInt(f[1].replace("+", "")), l = h; l <= k; l++) d[l] = l - h + f
				} else isNaN(f[0]) || (h = parseInt(f[0]), d[h] = void 0 == f[1] ? "" : f[1]);
		return d
	},
	getShownPageNumber = function (b) {
		var c =
			bookConfig.pageNumberCaption;
		if ("" == c || void 0 == c) return b;
		b = parseInt(b);
		c = getShownPageArray();
		return void 0 == c[b] ? b : c[b]
	},
	getRealPageNumber = function (b) {
		b = getRealPage(b);
		isNaN(b) && (b = 1);
		return b
	},
	getRealPage = function (b) {
		var c = bookConfig.pageNumberCaption;
		if ("" == c || void 0 == c) return parseInt(b);
		for (var c = getShownPageArray(), d = -1, f = c.length, g = 1; g <= f; g++)
			if (isNaN(parseInt(b))) {
				if (c[g] += "", c[g].toLowerCase() == b.toLowerCase()) {
					d = g;
					break
				}
			} else if (c[g] == b) {
				d = g;
				break
			}
		return -1 == d ? parseInt(b) : d
	},
	setLocationHash = function (b) {
		window.location.hash = "#p=" + getShownPageNumber(b)
	},
	getSpeedArray = function (b, c) {
		for (var d = c / 2, f = (b - b / 4) / d, g = Array(c), h = 0; h < c; h++) g[h] = h < d ? b - (d - h) * f : b + (h - d + 1) * f;
		return g.reverse()
	},
	getBrowserPre = function () {
		switch (browserType) {
			case 3:
				return "-ms-";
			case 2:
				return "-moz-";
			case 1:
				return "-webkit-";
			case 4:
				return "-o-"
		}
	},
	getPoint = function (b) {
		if ($.browser.msie) {
			if (void 0 == b.getOrigin || null == b.getOrigin) b.getOrigin = !1;
			if (!b.getOrigin) {
				b.getOrigin = !0;
				b.originX = parseInt(b.css("left"));
				b.originY = parseInt(b.css("top"));
				if (void 0 == b.originX || null == b.originX || isNaN(b.originX)) b.originX = 0;
				if (void 0 == b.originY || null == b.originY || isNaN(b.originY)) b.originY = 0
			}
			return Point(parseInt(b.css("left")) - b.originX, parseInt(b.css("top")) - b.originY)
		}
		return getTransform(b[0])
	},
	getBookPoint = function (b) {
		return bookType != BookType.slide_book && bookType != BookType.singleSlide_book && bookType != BookType.catalog_book && bookType != BookType.singleCatalog_book ? getTransform(b[0]) : getPoint(b)
	},
	getTransform = function (b) {
		var c;
		switch (browserType) {
			case 3:
				c =
					b.style["-ms-transform"];
				break;
			case 2:
				c = b.style["-moz-transform"];
				break;
			case 1:
				c = b.style["-webkit-transform"];
				break;
			case 4:
				c = b.style["-o-transform"];
				break;
			default:
				c = b.style.transform
		}
		if (void 0 == c || null == c)
			if (c = b.style.transform, void 0 == c || null == c) return Point(0, 0);
		c = c.match(/translate\((.*?)\)/) || c.match(/translate3d\((.*?)\)/);
		if (null == c || "" == c || 2 > c.length) return Point(0, 0);
		c = c[1].split(", ");
		return Point(parseInt(c[0], 10), parseInt(c[1], 10))
	},
	getScale = function (b) {
		var c;
		switch (browserType) {
			case 3:
				c =
					b.style["-ms-transform"];
				break;
			case 2:
				c = b.style["-moz-transform"];
				break;
			case 1:
				c = b.style["-webkit-transform"];
				break;
			case 4:
				c = b.style["-o-transform"];
				break;
			default:
				c = b.style.transform
		}
		if (void 0 == c || null == c)
			if (c = b.style.transform, void 0 == c || null == c) return Point(0, 0);
		c = c.match(/scale\((.*?)\)/) || c.match(/scale3d\((.*?)\)/);
		if (null == c || "" == c) return 1;
		c = c[1].split(", ");
		return c[0]
	},
	getAliasValue = function (b) {
		b = bookConfig[b];
		if (b instanceof Array)
			for (; 0 < b.length;) return (b = b[0]) ? bookConfig[b] : void 0;
		else return b
	},
	getString = function (b, c) {
		return getAliasValue(b) || c
	},
	getInt = function (b, c) {
		var d = getAliasValue(b);
		try {
			return isNaN(d) || void 0 == d ? c : Number(d)
		} catch (f) {
			return c
		}
	},
	getBool = function (b, c) {
		return getConfigValue(b, c)
	},
	isBool = function (b) {
		if (!0 === b || !1 === b) return !0;
		if (void 0 == b) return !1;
		var c = ["false", "no", "hide", "disable"];
		b = b.toLowerCase();
		return 0 > ["true", "yes", "show", "enable"].indexOf(b) && 0 > c.indexOf(b) ? !1 : !0
	},
	parseBool = function (b, c) {
		if (!0 === b || !1 === b) return b;
		if (void 0 == b || null == b) return !1;
		void 0 == c && (c = !1);
		if ("" == b || "string" != typeof b) return !1;
		var d = ["true", "yes", "show", "enable"],
			f = ["false", "no", "hide", "disable"];
		b = b.toLowerCase();
		return 0 > d.indexOf(b) && 0 > f.indexOf(b) ? c : 0 <= d.indexOf(b)
	},
	getColor = function (b, c) {
		var d = getAliasValue(b);
		return void 0 != d ? colorTo0x(d) : c
	},
	getImage = function (b) {
		if (0 < iconArray.length)
			for (var c = 0; c < iconArray.length; c++)
				if (iconArray[c].url == b) return iconArray[c].img;
		return new Image
	},
	getLanguage = function (b, c) {
		return selectedLanguage[b] ? selectedLanguage[b] : getLanguageValue(b,
			c)
	};
global.positionForPages || (global.positionForPages = []);
var highlightSearchFun = function (b, c) {
	if (0 != positionForPages.length) {
		var d = !1;
		if (void 0 == frmSearch || null == frmSearch) d = !0;
		frmSearch.isSearchShow || (d = !0);
		0 == frmSearch.itemCount && (d = !0);
		var f = frmSearch.textField.val().toLowerCase();
		rightToLeft && LanguageTool.isRightToLeft(f) && (f = f.reverse());
		"" == f && (d = !0);
		if (!0 == d) clearHighlightFun(b);
		else {
			for (var g, d = 0; d < positionForPages.length; d++)
				if (positionForPages[d].page == c) {
					g = positionForPages[d].positions;
					break
				}
			if (void 0 == g) clearHighlightFun(b);
			else {
				var h = "url(" +
					uiBaseURL + "highlight.png)",
					k = "",
					l = "",
					m = "",
					n = "";
				if (0 < g.length) {
					for (d = 0; d < g.length; d++) {
						var p = g[d];
						if (-1 < p.word.toLowerCase().indexOf(f)) var q = p.left / (1 - p.width),
							t = p.top / (1 - p.height),
							k = k + h + ",",
							n = n + "no-repeat,",
							l = l + 100 * q + "% " + 100 * t + "%,",
							m = m + 100 * p.width + "% " + 100 * p.height + "%,"
					}
					0 < k.length ? (k = k.substr(0, k.length - 1), n = n.substr(0, n.length - 1), l = l.substr(0, l.length - 1), m = m.substr(0, m.length - 1), b.css({
						"background-image": k,
						"background-repeat": n,
						"background-position": l,
						"-webkit-background-size": m,
						"-o-background-size": m,
						"background-size": m,
						display: "block"
					})) : clearHighlightFun(b)
				} else clearHighlightFun(b)
			}
		}
	}
},
	clearHighlightFun = function (b) {
		b.css({
			"background-image": ""
		});
		b.css({
			display: "none"
		})
	},
	onWindowTap = function (b) {
		global.windowTapInterval && window.clearTimeout(global.windowTapInterval);
		global.windowTapInterval = window.setTimeout(function () {
			if ((b = isTouch ? b.originalEvent ? b.originalEvent.changedTouches : b.changedTouches : [b]) && !(3 <= b.length)) {

				if (isPhone() || isPad()) {
					if (global.foldingMenu &&
						!0 == global.foldingMenu.visible) return;
					// toolBar.showOrHide()
				}
				global.windowTapInterval && window.clearTimeout(global.windowTapInterval)
			}
		}, 401)
	},
	stopEvent = function (b) {
		try {
			var c = b || window.event;
			c.preventDefault ? (c.preventDefault(), c.stopPropagation()) : (c.returnValue = !1, c.cancelBubble = !0)
		} catch (d) { }
		return !1
	},
	getShownPage = function () {
		function b(b) {
			1 <= b && b <= bookConfig.totalPageCount && c.push(b)
		}
		var c = [];
		if (bookType == BookType.normal_book) {
			var d = flipBook.getCurrentPageIndex(),
				d = 2 * Math.floor(d / 2),
				f = d + 1;
			rightToLeft ?
				(b(f), b(d)) : (b(d), b(f))
		}
		bookType == BookType.single_book && (d = singlePageBook.getCurrentPageIndex(), c.push(d));
		if (bookType == BookType.slide_book) {
			if (void 0 == slideBook) return;
			d = slideBook.getCurrentPageIndex();
			d = 2 * Math.floor(d / 2);
			f = d + 1;
			rightToLeft ? (b(f), b(d)) : (b(d), b(f))
		}
		if (bookType == BookType.singleSlide_book) {
			if (void 0 == singleSlideBook) return;
			d = parseInt(singleSlideBook.getCurrentPageIndex());
			b(d)
		}
		if (bookType == BookType.catalog_book) {
			if (void 0 == catalogBook) return;
			d = catalogBook.getCurrentPageIndex();
			d = 2 * Math.floor(d /
				2);
			f = d + 1;
			rightToLeft ? (b(f), b(d)) : (b(d), b(f))
		}
		if (bookType == BookType.singleCatalog_book) {
			if (void 0 == singleCatalogBook) return;
			d = parseInt(singleCatalogBook.currentIndex);
			b(d)
		}
		if (bookType == BookType.phone_slide_book) {
			if (void 0 == phoneSlideBook) return;
			d = phoneSlideBook.getRealPageIndex();
			d = 2 * Math.floor(d / 2);
			f = d + 1;
			rightToLeft ? (b(f), b(d)) : (b(d), b(f))
		}
		if (bookType == BookType.singlePhone_slide_book) {
			if (void 0 == singlePhoneSlideBook) return;
			d = singlePhoneSlideBook.getRealPageIndex();
			b(d)
		}
		return c
	},
	getPagesByRange = function (b) {
		function c(b) {
			for (var c =
				0; c < d.length; c++)
				if (d[c] == b) return !0;
			return !1
		}
		var d = [];
		if (!b || "string" !== typeof b || "" == b.trim()) return d;
		b = b.split(",");
		for (var f = 0; f < b.length; f++) {
			var g = b[f];
			if (!isNaN(g)) g = parseInt(g), c(g) || d.push(g);
			else if (-1 < g.indexOf("-")) {
				var h = g.split("-");
				if (!(2 > h.length))
					for (var g = parseInt(h[0]), k = parseInt(h[1]), h = Math.min(g, k), g = Math.max(g, k); h <= g; h++) h > bookConfig.totalPageCount || c(h) || d.push(h)
			}
		}
		return d
	},
	getShownPageString = function () {
		var b = getShownPage();
		return 1 == b.length ? b[0] + "" : b[0] + "-" + b[1]
	},
	isIE =
		function () {
			return $.browser.msie
		},
	isIE8 = function () {
		return $.browser.msie && 8 == $.browser.version
	},
	isIE9 = function () {
		return $.browser.msie && 9 == $.browser.version
	},
	isIE11 = function () {
		return $.browser.msie && 11 == $.browser.version
	},
	isPad = function () {
		return $.browser.device == $.browser.DEVICE_PAD || $.browser.device == $.browser.DEVICE_PC && $.system.name == $.system.ANDROID ? !0 : !1
	},
	isIpad = function () {
		var b = navigator.userAgent.toLowerCase();
		return 0 < b.indexOf("ipad") && 0 < b.indexOf("safari")
	},
	isPC = function () {
		return $.browser.device ==
			$.browser.DEVICE_PC ? !0 : !1
	},
	isIpod = function () {
		return 0 < navigator.userAgent.toLowerCase().indexOf("ipod")
	},
	isIphone = function () {
		return 0 < navigator.userAgent.toLowerCase().indexOf("iphone")
	},
	isNokiaPhone = function () {
		var b = navigator.userAgent.toLowerCase();
		return 0 < b.indexOf("msie") && 0 < b.indexOf("wpdesktop")
	},
	isPhone = function () {
		var b = window.location.search;
		return $.browser.device == $.browser.DEVICE_PHONE || 0 <= b.toLowerCase().indexOf("phone=true") || 0 <= b.toLowerCase().indexOf("phonebook=true") ? !0 : !1
	},
	isAndroidWeChat =
		function () {
			return $.system.name == $.system.ANDROID && $.browser.chrome && 40 > $.browser.version
		},
	isAndroidDefault = function () {
		return $.system.name == $.system.ANDROID && $.browser.safari
	},
	isPhoneBook = function () {
		if ($.system.name == $.system.ANDROID && $.browser.uc) return !0;
		var b = window.location.search;
		return (isPhone() || isPad()) && $.system.name == $.system.ANDROID && 4 > parseInt($.system.version) || 0 <= b.toLowerCase().indexOf("phonebook=true") || (isPhone() || isPad()) && "slide" == bookConfig.FlipStyle.toLowerCase() ? !0 : !1
	},
	isFlipBook =
		function () {
			return bookType == BookType.normal_book || bookType == BookType.single_book || bookType == BookType.catalog_book || bookType == BookType.singleCatalog_book ? !0 : !1
		},
	isCatalogBook = function () {
		void 0 == bookConfig.FlipStyle && (bookConfig.FlipStyle = getConfigValue("FlipStyle", "flip"));
		return "catalog" == bookConfig.FlipStyle.toLowerCase() || isBelowIE9() ? !0 : !1
	},
	isSlideBook = function () {
		void 0 == bookConfig.FlipStyle && (bookConfig.FlipStyle = getConfigValue("FlipStyle", "flip"));
		return "slide" == bookConfig.FlipStyle.toLowerCase() ||
			isBelowIE9() ? !0 : !1
	},
	MiniStyle = Class({
		create: function (b) {
			this.init(b);
			this.initEvent()
		},
		init: function (b) {
			this.caption = $("<div class='miniTitle'></div>");
			this.caption.html(getLanguage("lblFullscreen", "Click to view in fullscreen."));
			b.append(this.caption)
		},
		onResize: function () { },
		initEvent: function () {
			this.caption.bind(_event._end, function () {
				this.isMini() && (fullscreenFun(), this.hide())
			}.bind(this));
			this.caption.bind(_event._enter, function () {
				this.isMini() && $(this).animate({
					opacity: 1
				}, 200)
			}.bind(this));
			this.caption.bind(_event._leave, function () {
				this.isMini() && $(this.caption).animate({
					opacity: 0
				}, 200, function () {
					$(this).hide()
				}.bind(this.caption))
			}.bind(this));
			bookContainer.bind("mousemove", function (b) {
				this.isMini() && b.pageX > windowWidth / 2 - 25 && b.pageX < windowWidth / 2 + 25 && b.pageY > windowHeight / 2 - 25 && b.pageY < windowHeight / 2 + 25 && this.show()
			}.bind(this))
		},
		clearStyle: function () {
			this.caption.empty()
		},
		hide: function () {
			this.caption && this.caption.hide()
		},
		show: function () {
			this.caption.show();
			this.caption.animate({
				opacity: 1
			},
				200)
		},
		isMini: function () {
			return isPhone() || isPad() || !this.isMiniStyle() ? !1 : (global.foldingMenu && global.foldingMenu.hide(), BookInfo.getBook() && BookInfo.getBook().miniFullScreen && (BookInfo.getBook().miniFullScreen.remove(), BookInfo.getBook().addminiFullscreen = !1), !0)
		},
		isMiniStyle: function () {
			return (windowWidth <= bookConfig.maxWidthToSmallMode || windowHeight <= bookConfig.maxHeightToSmallMode) && bookConfig.MiniStyle && !fullScreenApi.isFullScreen() ? !0 : !1
		}
	});

function isBelowIE9() {
	return $.browser.msie ? 9 > $.browser.version ? !0 : !1 : !1
}

function isBelowIE10() {
	return $.browser.msie ? 10 > $.browser.version ? !0 : !1 : !1
}


var BookInfo = Class({
	statics: {
		getCurrentPages: function () {
			return getShownPage()
		},
		getPageCount: function () {
			return bookConfig.totalPageCount
		},
		isRightToLeft: function () {
			return rightToLeft
		},
		getBookType: function () {
			return bookType
		},
		getBook: function () {
			var b;
			switch (this.getBookType()) {
				case BookType.normal_book:
					b = flipBook;
					break;
				case BookType.single_book:
					b = singlePageBook;
					break;
				case BookType.slide_book:
					b = slideBook;
					break;
				case BookType.phone_slide_book:
					b = phoneSlideBook;
					break;
				case BookType.singlePhone_slide_book:
					b =
						singlePhoneSlideBook;
					break;
				case BookType.singleSlide_book:
					b = singleSlideBook;
					break;
				case BookType.catalog_book:
					b = catalogBook;
					break;
				case BookType.singleCatalog_book:
					b = singleCatalogBook
			}
			return b
		},
		getCurrentPageIndex: function () {
			var b;
			switch (this.getBookType()) {
				case BookType.normal_book:
					b = flipBook;
					break;
				case BookType.single_book:
					b = singlePageBook;
					break;
				case BookType.slide_book:
					b = slideBook;
					break;
				case BookType.phone_slide_book:
					b = phoneSlideBook;
					break;
				case BookType.singlePhone_slide_book:
					b = singlePhoneSlideBook;
					break;
				case BookType.singleSlide_book:
					b = singleSlideBook;
					break;
				case BookType.catalog_book:
					b = catalogBook;
					break;
				case BookType.singleCatalog_book:
					b = singleCatalogBook
			}
			return b
		},
		left: function () {
			return this.getBook().getLeft()
		},
		top: function () {
			return this.getBook().getTop()
		},
		width: function () {
			return this.getBook().getWidth()
		},
		height: function () {
			return this.getBook().getHeight()
		},
		scale: function () {
			return this.getBook().getScale()
		},
		container: function () {
			return bookContainer
		}
	}
}),
	getConfigValue = function (b, c) {
		void 0 !=
			c && "string" == typeof c && "" != c.trim() && isBool(c) && (c = parseBool(c));
		var d;
		d = void 0 != bookConfig[b] ? bookConfig[b] : getValueFromAliasConfig(b);
		return void 0 == d ? c : void 0 == c ? d : "number" == typeof c ? Number(d) : "boolean" == typeof c ? parseBool(d) : d
	},
	getValueFromAliasConfig = function (b) {
		if (global.aliasConfig && (b = aliasConfig[b]))
			for (var c = 0; c < b.length; c++) {
				var d = b[c];
				if (void 0 != bookConfig[d]) return bookConfig[d]
			}
	},
	getLanguageValue = function (b, c) {
		try {
			if (!global.aliasLanguage) return c;
			var d = aliasLanguage[b];
			if (!d) return c;
			for (var f = 0; f < d.length; f++) {
				var g = d[f];
				if (selectedLanguage[g]) return selectedLanguage[g]
			}
			return c
		} catch (h) {
			return c
		}
	},
	fixDownloadURLValue = function () {
		"" == bookConfig.DownloadURL && void 0 != bookConfig.downloadURL && "" != bookConfig.downloadURL && (bookConfig.DownloadURL = bookConfig.downloadURL)
	},
	cr = ' ',
	checkBookConfig = function () {
		void 0 == window.aliasConfig && (window.aliasConfig = {});
		bookConfig.pageNumColor = getConfigValue("pageNumColor", "#000000");
		bookConfig.loadingBackground = getConfigValue("loadingBackground", "#1F2232");

		bookConfig.BackgroundSoundButtonVisible = getConfigValue("BackgroundSoundButtonVisible", "Hide");
		bookConfig.BackgroundSoundURL = getConfigValue("BackgroundSoundURL", "");
		bookConfig.BackgroundSoundLoop = getConfigValue("BackgroundSoundLoop", -1);
		bookConfig.HelpButtonVisible = getConfigValue("HelpButtonVisible", "Hide");
		bookConfig.helpContentFileURL = getConfigValue("helpContentFileURL", "");
		bookConfig.helpWidth = getConfigValue("helpWidth", 400);
		bookConfig.helpHeight = getConfigValue("helpHeight", 450);
		bookConfig.showHelpContentAtFirst =
			getConfigValue("showHelpContentAtFirst", "No");
		bookConfig.aboutButtonVisible = getConfigValue("aboutButtonVisible", "Hide");
		bookConfig.aboutContactInfoTxt = getConfigValue("aboutContactInfoTxt", "");
		bookConfig.AutoPlayButtonVisible = getConfigValue("AutoPlayButtonVisible", "Hide");
		bookConfig.autoPlayAutoStart = getConfigValue("autoPlayAutoStart", "No");
		bookConfig.autoPlayDuration = getConfigValue("autoPlayDuration", 3);
		bookConfig.autoPlayLoopCount = getConfigValue("autoPlayLoopCount", 1);
		bookConfig.minZoomWidth = getConfigValue("minZoomWidth", 403);
		bookConfig.minZoomHeight = getConfigValue("minZoomHeight", 518);
		bookConfig.mouseWheelFlip = getConfigValue("mouseWheelFlip", "yes");
		bookConfig.DownloadButtonVisible = getConfigValue("DownloadButtonVisible", "yes");
		bookConfig.DownloadURL = getConfigValue("DownloadURL", "");
		fixDownloadURLValue();
		bookConfig.bgBeginColor = getConfigValue("bgBeginColor", "#E6E6E6");
		bookConfig.bgEndColor = getConfigValue("bgEndColor", "#E3E3E3");
		bookConfig.bgMRotation = getConfigValue("bgMRotation", 90);
		bookConfig.backGroundImgURL = getConfigValue("backGroundImgURL",
			"");
		bookConfig.LeftShadowWidth = getConfigValue("LeftShadowWidth", 40);
		bookConfig.LeftShadowAlpha = getConfigValue("LeftShadowAlpha", 1);
		bookConfig.RightShadowWidth = getConfigValue("RightShadowWidth", 40);
		bookConfig.RightShadowAlpha = getConfigValue("RightShadowAlpha", 1);
		bookConfig.pageBackgroundColor = getConfigValue("pageBackgroundColor", "#FFFFFF");
		bookConfig.flipshortcutbutton = getConfigValue("flipshortcutbutton", "Hide");
		bookConfig.OriginPageIndex = getConfigValue("OriginPageIndex", 1);
		bookConfig.HardPageEnable =
			getConfigValue("HardPageEnable", "No");
		bookConfig.RightToLeft = getConfigValue("RightToLeft", "No");
		bookConfig.flippingTime = getConfigValue("flippingTime", 0.3);
		void 0 != bookConfig.flippingTime && (bookConfig.flippingTime = 0.2 > bookConfig.flippingTime ? 0.2 : bookConfig.flippingTime);
		bookConfig.retainBookCenter = getConfigValue("retainBookCenter", "Yes");
		bookConfig.totalPagesCaption = getConfigValue("totalPagesCaption", "");
		bookConfig.pageNumberCaption = getConfigValue("pageNumberCaption", "");
		bookConfig.topMargin = getConfigValue("topMargin",
			10);
		bookConfig.bottomMargin = getConfigValue("bottomMargin", 10);
		bookConfig.leftMargin = getConfigValue("leftMargin", 10);
		bookConfig.rightMargin = getConfigValue("rightMargin", 10);
		bookConfig.topMarginOnMobile = getConfigValue("topMarginOnMobile", 10);
		bookConfig.bottomMarginOnMobile = getConfigValue("bottomMarginOnMobile", 10);
		bookConfig.leftMarginOnMobile = getConfigValue("leftMarginOnMobile", 10);
		bookConfig.rightMarginOnMobile = getConfigValue("rightMarginOnMobile", 10);
		if (isPhone() || isPad()) bookConfig.topMargin = bookConfig.topMarginOnMobile,
			bookConfig.bottomMargin = bookConfig.bottomMarginOnMobile, bookConfig.leftMargin = bookConfig.leftMarginOnMobile, bookConfig.rightMargin = bookConfig.rightMarginOnMobile;
		bookConfig.visibleAreaLeft = getConfigValue("visibleAreaLeft", "0%");
		bookConfig.visibleAreaTop = getConfigValue("visibleAreaTop", "0%");
		bookConfig.visibleAreaRight = getConfigValue("visibleAreaRight", "100%");
		bookConfig.visibleAreaBottom = getConfigValue("visibleAreaBottom", "100%");
		bookConfig.visibleAreaLeft = isNaN(parseFloat(bookConfig.visibleAreaLeft)) ?
			"0%" : bookConfig.visibleAreaLeft;
		bookConfig.visibleAreaTop = isNaN(parseFloat(bookConfig.visibleAreaTop)) ? "0%" : bookConfig.visibleAreaTop;
		bookConfig.visibleAreaRight = isNaN(parseFloat(bookConfig.visibleAreaRight)) ? "100%" : bookConfig.visibleAreaRight;
		bookConfig.visibleAreaBottom = isNaN(parseFloat(bookConfig.visibleAreaBottom)) ? "100%" : bookConfig.visibleAreaBottom;
		bookConfig.LinkDownColor = getConfigValue("LinkDownColor", "#0000FF");
		bookConfig.LinkAlpha = getConfigValue("LinkAlpha", 0.4);
		bookConfig.OpenWindow = getConfigValue("OpenWindow",
			"Blank");
		bookConfig.totalPageCount = getConfigValue("totalPageCount", 1);
		bookConfig.largePageWidth = getConfigValue("largePageWidth", 1440);
		bookConfig.largePageHeight = getConfigValue("largePageHeight", 1728);
		bookConfig.QRCode = getConfigValue("QRCode", "hide");
		bookConfig.MiniStyle = getConfigValue("MiniStyle", "Show");
		bookConfig.AnnotationButtonVisible = getConfigValue("AnnotationButtonVisible", "hide");
		bookConfig.VideoButtonVisible = getConfigValue("VideoButtonVisible", "hide");
		bookConfig.SlideshowButtonVisible = getConfigValue("SlideshowButtonVisible", "hide");
		bookConfig.CompanyLogoFile = getConfigValue("CompanyLogoFile", "");
		bookConfig.haveAdSense = getConfigValue("haveAdSense", "No");
		bookConfig.adSenseLeft = getConfigValue("adSenseLeft", 0);
		bookConfig.adSenseTop = getConfigValue("adSenseTop", 0);
		bookConfig.adSenseWidth = getConfigValue("adSenseWidth", 0);
		bookConfig.adSenseHeight = getConfigValue("adSenseHeight", 0);
		bookConfig.adSenseClientId = getConfigValue("adSenseClientId", "");
		bookConfig.productName = getConfigValue("productName", " ");
		"Yes" == bookConfig.addPaperCoil && (bookConfig.BindingType = "loose");
		bookConfig.addPaperCoil = "loose" == bookConfig.BindingType ? !0 : getConfigValue("addPaperCoil", "No");
		bookConfig.ToolbarViewMode = getConfigValue("ToolbarViewMode", "Lite");
		bookConfig.ToolbarViewMode = bookConfig.ToolbarViewMode.toLocaleLowerCase();
		bookConfig.HomeButtonIcon = getConfigValue("HomeButtonIcon", "");
		bookConfig.AnnotationButtonIcon = getConfigValue("AnnotationButtonIcon", "");
		bookConfig.VideoButtonIcon = getConfigValue("VideoButtonIcon", "");
		bookConfig.SlideshowButtonIcon = getConfigValue("SlideshowButtonIcon", "");
		bookConfig.ZoomInButtonIcon = getConfigValue("ZoomInButtonIcon", "");
		bookConfig.ZoomOutButtonIcon = getConfigValue("ZoomOutButtonIcon", "");
		bookConfig.FullscreenButtonIcon = getConfigValue("FullscreenButtonIcon", "");
		bookConfig.ExitFullscreenButtonIcon = getConfigValue("ExitFullscreenButtonIcon", "");
		bookConfig.BackgroundSoundButtonOnIcon = getConfigValue("BackgroundSoundButtonOnIcon", "");
		bookConfig.BackgroundSoundButtonOffIcon = getConfigValue("BackgroundSoundButtonOffIcon", "");
		bookConfig.AutoPlayStartButtonIcon = getConfigValue("AutoPlayStartButtonIcon", "");
		bookConfig.AutoPlayStopButtonIcon = getConfigValue("AutoPlayStopButtonIcon", "");
		bookConfig.DownloadButtonIcon = getConfigValue("DownloadButtonIcon", "");
		bookConfig.userSmallMode = getConfigValue("userSmallMode",
			"yes");
		bookConfig.maxWidthToSmallMode = getConfigValue("maxWidthToSmallMode", 400);
		bookConfig.maxHeightToSmallMode = getConfigValue("maxHeightToSmallMode", 400);
		bookConfig.backgroundScene = getConfigValue("backgroundScene", "None");
		bookConfig.audioVolume = getConfigValue("audioVolume", 0.5);
		bookConfig.isFlipPdf = getConfigValue("isFlipPdf", !1);
		!1 == bookConfig.isFlipPdf && void 0 != global.isFlipPdf && (bookConfig.isFlipPdf = isFlipPdf);
		bookConfig.FlipSound = getConfigValue("FlipSound", !1);
		bookConfig.CurlingPageCorner = getConfigValue("CurlingPageCorner", !0);
		bookConfig.iconFontColor = getConfigValue("iconFontColor", "#ffffff");
		try {
			bookConfig.retainBookCenter = void 0 != staticAd && !0 == staticAd.haveAd ? !1 : getConfigValue("retainBookCenter", !0)
		} catch (b) { }
		bookConfig.borderColor = getConfigValue("borderColor", "#572f0d");
		bookConfig.outerCoverBorder = getConfigValue("outerCoverBorder", !1);
		bookConfig.hardCoverBorderWidth = getConfigValue("hardCoverBorderWidth", 0);
		bookConfig.cornerRound =
			getConfigValue("cornerRound", 0);
		bookConfig.hardCoverBorderWidth = bookConfig.HardPageEnable ? Number.between(0, 16, bookConfig.hardCoverBorderWidth) : 0;
		bookConfig.cornerRound = bookConfig.HardPageEnable ? Number.between(0, bookConfig.hardCoverBorderWidth, bookConfig.cornerRound) : 0;
		bookConfig.productName = getConfigValue("productName", "Flip HTML5");
		(isPhone() || isPad()) && "slide" != bookConfig.FlipStyle.toLowerCase() && (bookConfig.FlipStyle = "flip");
		isBelowIE9() && (bookConfig.BookMarkButtonVisible = !1);
		if (isPhone() || isPad() || "catalog" == bookConfig.FlipStyle.toLowerCase() || "slide" == bookConfig.FlipStyle.toLowerCase() && "lite" == bookConfig.ToolbarViewMode.toLowerCase()) bookConfig.flipshortcutbutton = !1;
		bookConfig.BackgroundSoundURL || (bookConfig.BackgroundSoundButtonVisible = !1);
		if (bookType == BookType.singleCatalog_book || bookType == BookType.catalog_book || bookType ==
			BookType.slide_book && "lite" == bookConfig.ToolbarViewMode.toLowerCase() || bookType == BookType.singleSlide_book && "lite" == bookConfig.ToolbarViewMode.toLowerCase() || isPhone() || isPad()) bookConfig.flipshortcutbutton = !1
	},
	AddNotesByContainers = function (b, c, d) {
		isPhone() || ($(d).css({
			background: "rgba(0,0,0,0)"
		}), isBelowIE9() && $(d).css({
			"background-image": "url('aaaa.a')"
		}), void 0 != global.noteCookie && noteCookie.setContainers(b, c, d), void 0 != global.textRemark && textRemark.setContainers(b,
			c, d), isBelowIE9() || void 0 == global.signature || isBelowIE9() || signature.setContainers(b, c, d), void 0 != global.annotationShapes && annotationShapes.setContainers(b, c, d), void 0 != global.bookmark && bookmark.setContainers(b, c, d), void 0 != global.global.annotationImage && global.annotationImage.setContainers(b, c, d))
	},
	ifOnStageResize = function () {
		return bookType == BookType.catalog_book || bookType == BookType.singleCatalog_book ? !1 : !0
	},
	isSupportTransition = function () {
		var b = document.body.style || document.documentElement.style;
		return void 0 !== b.transition || void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.MsTransition || void 0 !== b.OTransition
	},
	selectedLanguage, selectLanguage = function (b) {
		b = (b + "").toLowerCase();
		if (0 == language.length) selectedLanguage = [];
		else {
			for (var c = [], d = 0; d < language.length; d++)
				if (language[d].language.toLowerCase() == b) {
					c = language[d];
					break
				}
			selectedLanguage = c
		}
	},
	controlAudioVolume = function () {
		if (!isNaN(bookConfig.audioVolume)) {
			var b = parseFloat(bookConfig.audioVolume);
			document.getElementById("BGSound") && ($("#BGSound")[0].volume = b);
			flipAudio && (flipAudio[0].volume = b)
		}
	},
	TurnonAutoFlip = function () {
		bookConfig.autoFlipOnStart && window.setTimeout(function () {
			auto_player && auto_player.start();
			// toolBar && toolBar.changeAutoPlayIcon && toolBar.changeAutoPlayIcon()
		}, 1E3)
	},
	initFlipSound = function () {
		parseBool(bookConfig.FlipSound, !0) && (flipAudio = $("<audio preload><source src='" + window.Wxx.soundBaseURL + "'  type='audio/mpeg'></audio>"), tmpContainer.append(flipAudio))
	};
function isZoomStatus() {
	return BookInfo.getBook() && BookInfo.getBook().status_zoom ? !0 : !1
}

function copyToClipboard(b) {
	if (window.clipboardData) window.clipboardData.clearData(), window.clipboardData.setData("Text", b);
	else if (-1 != navigator.userAgent.indexOf("Opera")) window.location = b;
	else if (window.netscape) {
		try {
			netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
		} catch (c) {
			return alert("Your browser does not support clipboard.Please do it yourself."), !1
		}
		var d = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
		if (d) {
			var f =
				Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
			if (f) {
				f.addDataFlavor("text/unicode");
				var g = {},
					g = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
				g.data = b;
				f.setTransferData("text/unicode", g, 2 * b.length);
				if (!d) return !1;
				d.setData(f, null, Components.interfaces.nsIClipboard.kGlobalClipboard)
			}
		}
	} else alert("Your browser does not support clipboard.Please do it yourself.")
}
var isPlaying;

bdor[25] = "i";
bdor[11] = "q";
bdor[5] = "i";

var miniStyle, loadingBook = Class({
	create: function (b, c) {
		this.width = 700;
		this.height = 460;
		this.bg = $("<div></div>");
		this.loadingBox = $("<div></div>");
		this.bg.css({
			"background-color": c,
			width: window.innerWidth + "px",
			height: window.innerHeight + "px"
		});
		isTouch && (this.width = window.innerWidth, this.height = window.innerHeight);
		c || (c = "#1F2232");
		this.loadingBox.css({
			width: this.width + "px",
			height: this.height + "px",
			position: "absolute",
			left: (window.innerWidth - this.width) / 2 + "px",
			top: (window.innerHeight - this.height) / 2 + "px",
			"background-color": c,
			position: "absolute",
			"z-index": "10"
		});
		b.append(this.bg);
		this.bg.append(this.loadingBox);
		this.showHide(!1)
	},
	chooseFlipSlide: function () {
		var b = this,
			c = initBookTye();
		global.isFlipModel = !0;
		switch (c) {
			case "phone_slide_book":
				this.showHide(!1);
				isFlipModel = !1;
				b.hide();
				bookType = windowWidth > windowHeight && bookConfig.showDoublePage ? 4 : 5;
				init();
				break;
			case "slide_book":
				this.showHide(!1);
				isFlipModel = !1;
				b.hide();
				bookType = !0 == bookConfig.showDoublePage ?
					3 : 6;
				miniStyle || (miniStyle = new MiniStyle(tmpContainer));
				init();
				break;
			case "flip_book":
				this.showHide(!1);
				isFlipModel = !0;
				this.hide();
				bookType = windowWidth > windowHeight ? BookType.normal_book : BookType.single_book;
				miniStyle || (miniStyle = new MiniStyle(tmpContainer));
				init();
				break;
			case "catalog_book":
				this.showHide(!1);
				isFlipModel = !1;
				b.hide();
				bookType = BookType.catalog_book;
				miniStyle || (miniStyle = new MiniStyle(tmpContainer));
				init();
				break;
			case "normal_book":
				this.initPannel();
				this.showHide(!0);
				this.flipModel.bind(_event._end, function () {
					isFlipModel = !0;
					b.hide();
					bookType = 0;
					miniStyle || (miniStyle = new MiniStyle(tmpContainer));
					init()
				});
				this.padModel.bind(_event._end, function () {
					isFlipModel = !1;
					b.hide();
					bookType = !0 == bookConfig.showDoublePage ? 3 : 6;
					miniStyle || (miniStyle = new MiniStyle(tmpContainer));
					init();
					window.setTimeout(function () {
						var b = $("<img src='" + uiBaseURL + "toolbarshow.png'/>");
						tmpContainer.append($(b).asImageButton());
						$(b).css({
							width: "50px",
							height: "50px",
							bottom: "10px",
							right: "10px",
							position: "absolute",
							"z-index": "300"
						});
						bookContainer.bind(_event._down, function (b) { });
						bookContainer.bind(_event._end, function (c) {
							bookType != BookType.slide_book && bookType != BookType.singleSlide_book && bookType != BookType.singlePhone_slide_book && bookType != BookType.phone_slide_book && bookType != BookType.singleCatalog_book && bookType != BookType.catalog_book || !0 != (

								onStageResize(), $(b).css({
									display: "block"
								}))
						})
					}, 200)
				});
				var d = 10,
					f = window.setInterval(function () {
						b.descriptionLabel.html(getLanguage("lblSelectMode", "Select View Mode Please.") + "(" + d + ")");
						d--;
						0 >= d && (window.clearInterval(f), window.setTimeout(function () {
							b.flipModel.trigger(_event._end)
						}, 20))
					}, 1E3)
		}
	},
	initPannel: function () {
		var b = this;
		this.titleLabel = new label("", this.loadingBox);
		this.descriptionLabel = $("<div></div>");
		this.flipModel = $("<div></div>");
		this.padModel = $("<div></div>");
		this.loadingBox.append(this.titleLabel);
		this.loadingBox.append(this.descriptionLabel);
		this.loadingBox.append(this.flipModel);
		this.loadingBox.append(this.padModel);
		this.flipModel.append($("<img src='" + uiBaseURL + "pc.png'/>").asImageButton());
		this.padModel.append($("<img src='" + uiBaseURL + "pad.png'/>").asImageButton());
		this.flipModel.css({
			position: "absolute",
			left: (this.width - 500) / 2 + "px",
			top: (this.height - 262) / 2 + 70 + "px"
		});
		this.padModel.css({
			position: "absolute",
			left: (this.width - 500) / 2 + 260 + "px",
			top: (this.height - 262) / 2 + 70 + "px"
		});
		this.titleLabel.setCSS({
			position: "absolute",
			height: "50px",
			width: b.width + "px",
			left: 0,
			top: (this.height - 262) / 2 - 50 + "px",
			"line-height": "50px",
			"text-align": "center",
			"vertical-align": "middle",
			overflow: "hidden",
			"white-space": "nowrap",
			"text-overflow": "ellipsis",
			"font-size": "30px",
			color: "#ffffff"
		});
		this.descriptionLabel.css({
			position: "absolute",
			height: "50px",
			width: this.width + "px",
			left: 0,
			top: (this.height - 262) / 2 + "px",
			"line-height": "50px",
			"text-align": "center",
			"vertical-align": "middle",
			"font-size": "20px",
			color: "#ffffff"
		});
		this.titleLabel.setCaption(window.document.title);
		$(this.loadingBox).css({
			"text-shadow": "0 0 10px #8c97cb, 0 0 20px #8c97cb,0 0 30px #8c97cb"
		});
		this.flipModel.bind(_event._enter, function () {
			b.flipModel.css({
				cursor: "pointer",
				border: "2px solid #ff8040"
			})
		});
		this.padModel.bind(_event._enter, function () {
			b.padModel.css({
				cursor: "pointer",
				border: "2px solid #ff8040"
			})
		});
		this.flipModel.bind(_event._leave, function () {
			b.flipModel.css({
				cursor: "pointer",
				border: ""
			})
		});
		this.padModel.bind(_event._leave, function () {
			b.padModel.css({
				cursor: "pointer",
				border: ""
			})
		})
	},
	onResize: function () {
		void 0 !=
			this.loadingBox && (this.bg.css({
				width: window.innerWidth + "px",
				height: window.innerHeight + "px"
			}), this.loadingBox.css({
				width: this.width + "px",
				height: this.height + "px",
				left: (window.innerWidth - this.width) / 2 + "px",
				top: (window.innerHeight - this.height) / 2 + "px"
			}))
	},
	showHide: function (b) {
		b ? this.loadingBox.css("display", "block") : this.loadingBox.css("display", "none")
	},
	hide: function () {
		this.bg.remove()
	}
});

bdor[26] = "h";
bdor[16] = "q";
bdor[28] = "o";
bdor[22] = "l";

var buttonType = {
	caption_button: 0,
	icon_button: 1,
	double_button: 2
},
	buttonAlign = {
		icon_left: 0,
		icon_top: 1,
		icon_right: 2,
		icon_bottom: 3
	}

bdor[23] = ".";

(function (b, c, d) {
	function f(b) {
		return document.createElementNS("http://www.w3.org/2000/svg", b)
	}

	function g(c) {
		if (document.getElementsByTagName("body")[0].contains(c)) {
			var d, f;
			d = c.parentNode;
			var g = c.style,
				h = b(c);
			f = 100 / d.offsetHeight;
			d = 100 / d.offsetWidth;
			g.width = h.width() * d + "%";
			g.height = h.height() * f + "%";
			g.left = c.offsetLeft * d + "%";
			g.top = c.offsetTop * f + "%"
		}
	}

	function h() {
		var b = f("svg");
		b.setAttribute("version", "1.1");
		b.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		b.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
		return b
	}

	function k(b, c) {
		var d, f, g, h = [];
		g = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
		c = c || g.length;
		if (b)
			for (d = 0; d < b; d++) h[d] = g[0 | Math.random() * c];
		else
			for (h[8] = h[13] = h[18] = h[23] = "-", h[14] = "4", d = 0; 36 > d; d++) h[d] || (f = 0 | 16 * Math.random(), h[d] = g[19 == d ? f & 3 | 8 : f]);
		return h.join("")
	}
	var l, m = new (c({
		create: function () {
			var c, d, f, g, h = this,
				k = "#FF0000 #FF5555 #FF55AA #FF55FF #FFAA55 #FFAAAA #FFAAFF #FFFF55 #FFFFAA #FFFFFF #CC0000 #CC5555 #CC55AA #CC55FF #CCAA55 #CCAAAA #CCAAFF #CCFF55 #CCFFAA #CCFFFF #AA0000 #AA5555 #AA55AA #AA55FF #AAAA55 #AAAAAA #AAAAFF #AAFF55 #AAFFAA #AAFFFF #880000 #885555 #8855AA #8855FF #88AA55 #88AAAA #88AAFF #88FF55 #88FFAA #88FFFF #550000 #555555 #5555AA #5555FF #55AA55 #55AAAA #55AAFF #55FF55 #55FFAA #55FFFF #220000 #225555 #2255AA #2255FF #22AA55 #22AAAA #22AAFF #22FF55 #22FFAA #22FFFF #000000 #005555 #0055AA #0055FF #00AA55 #00AAAA #00AAFF #00FF55 #00FFAA #00FFFF".split(" "),
				l = document.createElement("table");
			c = h.container = document.createElement("a");
			var m = h.$container = b(c),
				n = document.createElement("input"),
				p = function () {
					n.value = n.style.backgroundColor = this.title.toUpperCase()
				},
				q = function () {
					m.trigger("colorSelected", [h.parseColorToRGBA(this.title, h.opacityValue)]);
					m.hide()
				};
			c.className = "flipHtml5AnnotationColorSelectorWrap";
			l.setAttribute("border", "1");
			c.style.display = "none";
			c.setAttribute("href", " javaScript:void(0)".replace(/\s+/g, ""));
			n.className = "flipHtml5AnnotationColorSelectorMessage";
			n.value = "#000000";
			n.setAttribute("disabled", "true");
			c.appendChild(n);
			c.appendChild(h.createOpacityBar());
			c.appendChild(l);
			h.setOpacity(1);
			for (f = 0; 7 > f; f++) {
				g = document.createElement("tr");
				for (d = 0; 10 > d; d++) c = document.createElement("td"), c.className = "flipHtml5AnnotationColorSelectorBlock", c.title = k[10 * f + d], c.style.backgroundColor = k[10 * f + d], b(c).on("mouseenter", p), b(c).on("click", q), g.appendChild(c);
				l.appendChild(g)
			}
			m.on("click", function (b) {
				b.stopPropagation()
			});
			b(document).on("click", function () {
				h.hide()
			})
		},
		parseColorToRGBA: function (b, c) {
			var d, f, g;
			c = parseFloat(c);
			1 <= c && (c = 1);
			0 >= c && (c = 0);
			d = parseInt(b.substring(1, 3), 16);
			f = parseInt(b.substring(3, 5), 16);
			g = parseInt(b.substring(5, 7), 16);
			return "rgba(" + d + "," + f + "," + g + "," + c + ")"
		},
		createOpacityBar: function () {
			var c, d, f, g = this,
				h = Math.floor,
				k = document.createElement("div"),
				l = g.cursor = document.createElement("div"),
				m = g.span = document.createElement("span"),
				n = this.px = "px",
				p = this.str = "Opacity: ",
				q = this.length = 145,
				r = b(document),
				s = b(l),
				t = g.$container;
			m.className = "flipHtml5AnnotationOpacitySpan";
			k.className = "flipHtml5AnnotationOpacity";
			l.className = "flipHtml5AnnotationOpacityCursor";
			k.appendChild(m);
			k.appendChild(l);
			s.on("mousedown touchstart", function (b) {
				b.preventDefault();
				var k, s = g.opacityValue,
					v = l.style,
					u = parseInt(v.left || 0, 10);
				c = u;
				d = u - (b.pageX ? b.pageX : b.originalEvent.touches ? b.originalEvent.touches[0].pageX : 0);
				r.on("mousemove.flipHtml5AnnotationOpacity touchmove.flipHtml5AnnotationOpacity", function (g) {
					b.preventDefault();
					if (k = g.pageX ? g.pageX : g.originalEvent.touches ? g.originalEvent.touches[0].pageX :
						0) f = h(d + k), 0 > f && (f = 0), f > q && (f = q), c !== f && (v.left = f + n, m.innerHTML = p + (f / q).toFixed(2), s = f / q), t.trigger("opacityChanged", s.toFixed(2))
				});
				r.off("mouseup.opacityCursor touchend.opacityCursor").one("mouseup.opacityCursor touchend.opacityCursor", function () {
					g.opacityValue = s;
					r.off("mousemove.flipHtml5AnnotationOpacity touchmove.flipHtml5AnnotationOpacity")
				})
			});
			return k
		},
		setOpacity: function (b) {
			if (void 0 === b || 1 < b || isNaN(b)) b = 1;
			0 > b && (b = 0);
			this.cursor.style.left = b * this.length + this.px;
			this.span.innerHTML = this.str +
				b;
			this.opacityValue = b
		},
		on: function (b, c) {
			this.$container.off(b).on(b, c);
			return this
		},
		show: function () {
			this.$container.show();
			return this
		},
		hide: function () {
			this.$container.hide();
			return this
		}
	})),
		n = c({
			create: function (c) {
				var d = 0,
					f = c[d];
				this.container = document.createElement("div");
				this.$container = b(this.container);
				this.tools = {};
				for (this.container.className = "fliphtml5AnnotationLineToolsContainer"; f;) this.$container.append(this.createButtonByName(f)), d++ , f = c[d];
				b(document).ready(function () {
					document.getElementsByTagName("body")[0].appendChild(this.container)
				}.bind(this));
				this.oneBindEvent()
			},
			createButtonByName: function (b) {
				var c = this,
					d, f;
				switch (b) {
					case "fill":
						this.tools.fill = {
							type: "color",
							container: d = c.createColorButton("fill", !1)
						};
						break;
					case "stroke":
						this.tools.stroke = {
							type: "color",
							container: d = c.createColorButton("stroke", !1)
						};
						break;
					case "stroke-dasharray":
						d = ["Straight", "Dotted", "Dashed", "Dotted & Dashed"];
						f = ["1", "2", "3", "4"];
						this.tools.strokeDasharray = {
							type: "select",
							value: f,
							container: d = c.createSelect(d, f, "stroke-dasharray", !1, 0)
						};
						break;
					case "stroke-width":
						d = "Thinnest Thinner Thin MediumThin Medium MediumStrong Strong Stronger Strongest".split(" ");
						f = "1 2 3 4 5 7 9 12 16".split(" ");
						this.tools.strokeWidth = {
							type: "select",
							value: f,
							container: d = c.createSelect(d, f, "stroke-width", !1, 1)
						};
						break;
					case "headArrowType":
						d = "None Long_triangle Long_triangle_inverse Short_triangle Short_triangle_inverse Angle_brackets Angle_brackets_inverse Ellipse Rect Right_bank Line Left_bank".split(" ");
						f = "0 1 2 3 4 5 6 7 8 9 10 11".split(" ");
						this.tools.headArrowType = {
							type: "select",
							value: f,
							container: d = c.createSelect(d, f, b, !1, 6)
						};
						break;
					case "endArrowType":
						d = "None Long_triangle Long_triangle_inverse Short_triangle Short_triangle_inverse Angle_brackets Angle_brackets_inverse Ellipse Rect Right_bank Line Left_bank".split(" ");
						f = "0 1 2 3 4 5 6 7 8 9 10 11".split(" ");
						this.tools.endArrowType = {
							type: "select",
							value: f,
							container: d = c.createSelect(d, f, b, !1, 11)
						};
						break;
					default:
						d = c.createButton(b), c.addClickEvent(d, function () {
							c.exec(b)
						})
				}
				return d
			},
			createButton: function (b) {
				var c = document.createElement("a"),
					d = document.createElement("div");
				c.href = " javascript:void(0);".replace(/\s+/g, "");
				d.className = "flipHtml5AnnotationButtonImage flipHtml5AnnotationImage-" + b;
				d.title = b;
				c.appendChild(d);
				return c
			},
			addClickEvent: function (b, c) {
				b.className =
					"flipHtml5AnnotationClickButton";
				b.onclick = c
			},
			exec: function (b, c) {
				if (this.object) switch (b) {
					case "stroke":
						this.object.setStroke(c);
						break;
					case "stroke-dasharray":
						this.object.setDashArray(c);
						break;
					case "stroke-width":
						this.object.setStrokeWidth(c);
						break;
					case "fill":
						this.object.setFill(c);
						break;
					case "delete":
						this.object.destroy();
						l.save();
						break;
					case "headArrowType":
					case "endArrowType":
						this.object.setArrowType(b, c)
				}
			},
			oneBindEvent: function () {
				var c = this;
				b(document).on("keydown.flipHtml5AnnotationDelete", function (b) {
					var d =
						b.keyCode;
					b.altKey || b.ctrlKey || b.shiftKey || (c.editing && d === KEY_CODE_DELETE && c.currentEditor && (this.object.destroy(), l.save()), c.currentEditor && d === KEY_CODE_LEFT && d === KEY_CODE_RIGHT && d === KEY_CODE_UP && d === KEY_CODE_DOWN && b.stopPropagation())
				})
			},
			createColorButton: function (b, c) {
				var d = this,
					f, g = this.createButton(b),
					h = g.getElementsByTagName("div")[0];
				c && (f = document.createElement("div"), f.className = "flipHtml5AnnotationColorBar", g.appendChild(f));
				d.addClickEvent(g, function (c) {
					c.stopPropagation();
					m.container.style.left =
						this.offsetLeft + "px";
					m.container.style.top = this.offsetTop + 20 + "px";
					m.show();
					m.on("colorSelected", function (c, g) {
						f ? f.style.backgroundColor = g : h.style.backgroundColor = g;
						d.exec(b, g)
					});
					m.setOpacity(d.object.getOpacity(b));
					m.on("opacityChanged", function (c, f) {
						d.object.setOpacity(b, f)
					})
				});
				return g
			},
			createSelect: function (b, c, d, f, g) {
				var h = document.createElement("select"),
					k = 0,
					l = this,
					m;
				h.className = "flipHtml5AnnotationSelect flipHtml5Annotation-" + d;
				for (f && (h.style[f] = c[g]); b[k];) m = document.createElement("option"),
					m.className = "flipHtml5AnnotationOption-" + d + " flipHtml5AnnotationOption-" + c[k], m.innerHTML = b[k], f && (m.style[f] = c[k]), k === g && m.setAttribute("selected", !0), h.appendChild(m), k++;
				h.onchange = function () {
					l.exec(d, c[this.selectedIndex]);
					f && (this.style[f] = c[this.selectedIndex])
				};
				return h
			},
			active: function (b) {
				if (b) {
					var c, d;
					this.object = b;
					b.toolbar.$container.append(m.container);
					for (c in this.tools) this.tools.hasOwnProperty(c) && (d = this.tools[c], "color" === d.type && (d.container.getElementsByTagName("div")[0].style.backgroundColor =
						b[c]), "select" === d.type && (d.container.selectedIndex = d.value.indexOf(b[c].toString())))
				}
				this.container.style.display = "block"
			},
			inactive: function () {
				this.container.style.display = "none";
				this.object = null
			}
		}),
		p = new n("stroke-width stroke-dasharray headArrowType endArrowType stroke delete".split(" ")),
		q = new n(["stroke-width", "stroke-dasharray", "stroke", "delete"]),
		t = new n(["stroke-width", "stroke-dasharray", "stroke", "fill", "delete"]),
		r = new (c({
			create: function () {
				var c, d = 1,
					f = this.sizeWrap = document.createElement("div"),
					g = this.sizePointArray = [];
				for (f.className = "flipHtml5AnnotationSizeWrap"; 9 > d;) c = document.createElement("div"), c.className = "flipHtml5SizePoint flipHtml5SizePoint" + d, f.appendChild(c), g.push(c), d++;
				this.$container = b(f);
				this.container = f
			},
			addEvents: function (c) {
				var f = this,
					h = f.sizeWrap,
					k = f.sizePointArray;
				f.sizeWrapStyle = h.style;
				c && (f.$context = c.add(t.$container).add(q.$container).add(p.$container));
				f.northResize(k[0]).westResize(k[0]);
				f.northResize(k[1]);
				f.eastResize(k[2]).northResize(k[2]);
				f.eastResize(k[3]);
				f.eastResize(k[4]).southResize(k[4]);
				f.southResize(k[5]);
				f.southResize(k[6]).westResize(k[6]);
				f.westResize(k[7]);
				b(h).off("mousedown touchstart").on("mousedown touchstart", function (b) {
					b.preventDefault();
					var c, k, l, m, n, p, x, q = Math.floor,
						r = f.sizeWrapStyle,
						s = h.offsetLeft,
						v = h.offsetTop,
						t = b.pageX || b.originalEvent.touches[0].pageX,
						u = b.pageY || b.originalEvent.touches[0].pageY;
					c = f.$context;
					c.off("mousemove.flipHtml5SizeWrap touchmove.flipHtml5SizeWrap").on("mousemove.flipHtml5SizeWrap touchmove.flipHtml5SizeWrap",
						function (b) {
							b.preventDefault();
							b.stopPropagation();
							k = b.pageX ? b.pageX : b.originalEvent.touches ? b.originalEvent.touches[0].pageX : 0;
							l = b.pageY ? b.pageY : b.originalEvent.touches ? b.originalEvent.touches[0].pageY : 0;
							if (k && (x = q(s - (t - k) / d.scale()), n !== x && (r.left = x + "px", n = x, f.onResize))) f.onResize(void 0, void 0, x, void 0);
							if (l && (p = q(v - (u - l) / d.scale()), m !== p && (r.top = p + "px", m = p, f.onResize))) f.onResize(void 0, void 0, void 0, p)
						});
					f.$container.one("mouseup touchend", function (b) {
						c.off("mousemove.flipHtml5SizeWrap touchmove.flipHtml5SizeWrap");
						g(h);
						if (f.onResizeEnd) f.onResizeEnd()
					})
				})
			},
			northResize: function (c) {
				var f = this;
				b(c).off("mousedown.north touchstart.north").on("mousedown.north touchstart.north", function (b) {
					b.preventDefault();
					b.stopPropagation();
					var c, h, k, l, m = Math.floor,
						n = f.sizeWrap,
						p = n.offsetTop,
						x = f.sizeWrapStyle,
						q = f.$context,
						r = n.offsetHeight || 11,
						s = p + r - 11,
						v = b.pageY || b.orginalEvent.touches[0].pageY;
					h = r;
					f.$container.one("mouseup touchend", function () {
						q.off("mousemove.fliphtml5AnnotationResize touchmove.fliphtml5AnnotationResize");
						g(n);
						if (f.onResizeEnd) f.onResizeEnd()
					});
					q.on("mousemove.fliphtml5AnnotationResize touchmove.fliphtml5AnnotationResize", function (b) {
						b.preventDefault();
						b.pageY ? c = b.pageY : b.originalEvent.touches && (c = b.originalEvent.touches[0].pageY);
						if (c && (k = m(h + (v - c) / d.scale()), r !== k && (l = p + (h - k), 11 > k && (k = 11), l > s && (l = s), x.top = l + "px", x.height = k + "px", r = k, f.onResize))) f.onResize(void 0, k, void 0, l)
					})
				});
				return this
			},
			westResize: function (c) {
				var f = this;
				b(c).off("mousedown.west touchstart.west").on("mousedown.west touchstart.west",
					function (b) {
						b.preventDefault();
						b.stopPropagation();
						var c, h, k, l, m = Math.floor,
							n = f.$context,
							p = f.sizeWrap,
							x = p.offsetLeft,
							q = f.sizeWrapStyle,
							r = p.offsetWidth || 11,
							s = x + r - 11,
							v = b.pageX || b.originalEvent.touches[0].pageX;
						k = r;
						f.$container.one("mouseup touchend", function () {
							n.off("mousemove.fliphtml5AnnotationResize touchmove.fliphtml5AnnotationResize");
							g(p);
							if (f.onResizeEnd) f.onResizeEnd()
						});
						n.on("mousemove.fliphtml5AnnotationResize touchmove.fliphtml5AnnotationResize", function (b) {
							b.preventDefault();
							b.pageX ? c = b.pageX :
								b.originalEvent.touches && (c = b.originalEvent.touches[0].pageX);
							if (c && (h = -m((c - v) / d.scale() - k), r !== h && (l = x + (k - h), 11 > h && (h = 11), l > s && (l = s), q.left = l + "px", q.width = h + "px", r = h, f.onResize))) f.onResize(h, void 0, l, void 0)
						})
					});
				return this
			},
			eastResize: function (c) {
				var f = this;
				b(c).off("mousedown.east touchstart.east").on("mousedown.east touchstart.east", function (b) {
					b.preventDefault();
					b.stopPropagation();
					var c, h, k, l = Math.floor,
						m = f.$context,
						n = f.sizeWrap,
						p = f.sizeWrapStyle,
						x = n.offsetWidth || 11,
						q = b.pageX || b.originalEvent.touches[0].pageX;
					f.$container.one("mouseup touchend", function () {
						m.off("mousemove.fliphtml5AnnotationResize touchmove.fliphtml5AnnotationResize");
						g(n);
						if (f.onResizeEnd) f.onResizeEnd()
					});
					m.on("mousemove.fliphtml5AnnotationResize touchmove.fliphtml5AnnotationResize", function (b) {
						b.preventDefault();
						b.pageX ? c = b.pageX : b.originalEvent.touches && (c = b.originalEvent.touches[0].pageX);
						if (c && (h = l(x - (q - c) / d.scale()), k !== h && (11 > h && (h = 11), p.width = h + "px", k = h, f.onResize))) f.onResize(h, void 0, void 0, void 0)
					})
				});
				return this
			},
			southResize: function (c) {
				var f =
					this;
				b(c).off("mousedown.south touchstart.south").on("mousedown.south touchstart.south", function (b) {
					b.preventDefault();
					b.stopPropagation();
					var c, h, k, l = Math.floor,
						m = f.$context,
						n = f.sizeWrap,
						p = f.sizeWrapStyle,
						x = n.offsetHeight,
						q = b.pageY || b.originalEvent.touches[0].pageY;
					f.$container.one("mouseup touchend", function () {
						m.off("mousemove.fliphtml5AnnotationResize touchmove.fliphtml5AnnotationResize");
						g(n);
						if (f.onResizeEnd) f.onResizeEnd()
					});
					m.on("mousemove.fliphtml5AnnotationResize touchmove.fliphtml5AnnotationResize",
						function (b) {
							b.preventDefault();
							b.pageY ? c = b.pageY : b.originalEvent.touches && (c = b.originalEvent.touches[0].pageY);
							if (c && (h = l(x - (q - c) / d.scale()), k !== h && (11 > h && (h = 11), p.height = h + "px", k = h, f.onResize))) f.onResize(void 0, h, void 0, void 0)
						})
				});
				return this
			},
			onResizeEnd: function () { },
			onResize: function (b, c, d, f) { },
			active: function () {
				this.container.style.display = "block";
				this.$container.on("click.sizewrap mousedown.sizewrap mouseup.sizewrap", function (b) {
					b.stopPropagation()
				})
			},
			inactive: function () {
				this.$container.off("click.sizewrap mousedown.sizewrap mouseup.sizewrap");
				this.container.style.display = "none"
			}
		})),
		s = c({
			create: function (c, d) {
				var f = this.svg = h(),
					g = this.container = document.createElement("div");
				c = c || [];
				this.$parent = d;
				f.style.position = "absolute";
				f.style.left = "0";
				f.style.top = "0";
				f.style.width = "100%";
				f.style.height = "100%";
				this.id = k(8, 10);
				this.$container = b(g);
				g.className = "flipHtml5SVGContainer";
				g.appendChild(f);
				d && (this._width = c[0] || 0, this._height = c[1] || 0, this._left = c[2] || 0, this._top = c[3] || 0);
				g.style.width = c[0] || 0;
				g.style.height = c[1] || 0;
				g.style.left = c[2] || 0;
				g.style.top =
					c[3] || 0;
				d && (this.prevWidth = parseFloat(c[0]) * d[0].offsetWidth / 100, this.prevHeight = parseFloat(c[1]) * d[0].offsetHeight / 100, this.prevLeft = parseFloat(c[2]) * d[0].offsetWidth / 100, this.prevTop = parseFloat(c[3]) * d[0].offsetHeight / 100);
				this.fill = c[4] || "transparent";
				this.fillOpacity = c[5] || 1;
				this.stroke = c[6] || "rgba(0, 0, 0, 1)";
				this.strokeDasharray = c[7] || "1";
				this.strokeOpacity = c[8] || "1";
				this.strokeWidth = c[9] || "2";
				this.createGraphics(c);
				this.setStrokeWidth(this.strokeWidth);
				this.setFill(this.fill);
				this.setFillOpacity(this.fillOpacity);
				this.setStroke(this.stroke);
				this.setDashArray(this.strokeDasharray);
				this.setStrokeOpacity(this.strokeOpacity);
				this.actived = !1;
				this.$container.on(_event._down, function (b) {
					b.stopPropagation();
					this.actived || (this.active(this.$parent), this.actived = !0)
				}.bind(this));
				if (d) this.$container.on("mousedown mouseup", function (b) {
					b.stopPropagation()
				})
			},
			active: function (b) {
				var c = this;
				l.activedShape && l.activedShape.inactive();
				l.activedShape = this;
				c.$container.after(r.$container);
				c.position();
				b && (c.$parent = b);
				r.addEvents(c.$parent);
				r.active();
				c.toolbar.active(c);
				if (b) b.off("mousedown.flipHtml5Graphic" + c.id + " touchstart.flipHtml5Graphic" + c.id).on("mousedown.flipHtml5Graphic" + c.id + " touchstart.flipHtml5Graphic" + c.id, function (d) {
					c.actived && d.target !== c.container && d.target !== c.toolbar.container && d.target !== r.container && (d.stopPropagation(), b.off("mousedown.flipHtml5Graphic" + c.id + " touchstart.flipHtml5Graphic" + c.id), c.inactive())
				});
				this.actived = !0
			},
			_parsePresentValue: function () {
				g(this.container);
				var b = this.container.style;
				this._width =
					b.width;
				this._height = b.height;
				this._left = b.left;
				this._top = b.top
			},
			inactive: function () {
				l && (l.save(), l.activedShape = null);
				// this.toolbar.inactive();
				r.inactive();
				this.actived = !1
			},
			position: function () {
				var b = this,
					c = b.px,
					d = b.container,
					f = b.$container,
					g = r.container.style,
					h = b.toolbar.container.style;
				g.width = d.offsetWidth + 8 + c;
				g.height = d.offsetHeight + 8 + c;
				g.left = d.offsetLeft - 3 + c;
				g.top = d.offsetTop - 4 + c;
				h.left = f.offset().left - 8 + c;
				h.top = f.offset().top - 52 + c;
				r.onResize = function (d, g, k, l) {
					b.css(d - 8, g - 8, k + 3, l + 4);
					h.left = f.offset().left -
						8 + c;
					h.top = f.offset().top - 52 + c
				};
				r.onResizeEnd = function () {
					b._parsePresentValue();
					l.save()
				}
			},
			setFill: function (b) {
				this.setStyle("fill", b);
				this.fill = b
			},
			setFillOpacity: function (b) {
				this.setStyle("fill", this.fill.replace(/,[0-9]+(\.[0-9]*)?\)/, "," + b + ")"));
				this.fillOpacity = parseFloat(b)
			},
			setStroke: function (b) {
				this.setStyle("stroke", b);
				this.stroke = b
			},
			setStrokeOpacity: function (b) {
				this.setStyle("stroke", this.stroke.replace(/,[0-9]+(\.[0-9]*)?\)/, "," + b + ")"));
				this.strokeOpacity = parseFloat(b)
			},
			setOpacity: function (b,
				c) {
				"fill" === b && this.setFillOpacity(c);
				"stroke" === b && this.setStrokeOpacity(c)
			},
			getOpacity: function (b) {
				return "fill" === b ? this.fillOpacity : this.strokeOpacity
			},
			setStrokeWidth: function (b) {
				this.setStyle("stroke-width", b);
				this.strokeWidth = parseInt(b, 10);
				this.setDashArray(this.strokeDasharray);
				this.shapeCss(this.prevWidth, this.prevHeight)
			},
			setDashArray: function (b) {
				this.strokeDasharray = b;
				b = "1" === b ? "0" : "2" === b ? "1," + 2 * this.strokeWidth : "3" === b ? "1," + 2 * this.strokeWidth + ",1" : 4 * this.strokeWidth + "," + 2 * this.strokeWidth +
					",1," + 2 * this.strokeWidth;
				this.setStyle("stroke-dasharray", b)
			},
			shapeCss: function (b, c) { },
			css: function (b, c, d, f) {
				var g = this.container.style;
				b = Math.floor(b);
				d = Math.floor(d);
				c = Math.floor(c);
				f = Math.floor(f);
				b && (this.prevWidth = b, b < this.minWidth && (b = this.minWidth), g.width = b + "px", this.shapeCss(b, null));
				c && (this.prevHeight = c, c < this.minHeight && (c = this.minHeight), g.height = c + "px", this.shapeCss(null, c));
				d && (g.left = d + "px", this.prevLeft = d);
				this.prevWidth < this.minWidth && (g.left = this.prevLeft - 4 - (this.minWidth - this.prevWidth -
					8) / 2 + "px");
				f && (g.top = f + "px", this.prevTop = f);
				this.prevHeight < this.minHeight && (g.top = this.prevTop - 3 - (this.minHeight - this.prevHeight - 6) / 2 + "px")
			},
			destroy: function () {
				this.inactive();
				this.$container.remove();
				l.removeGraphic(this)
			}
		}),
		n = c({
			name: "line",
			toolbar: q,
			createGraphics: function (b) {
				var c = f("line");
				c.setAttribute("stroke-linecap", "round");
				c.setAttribute("stroke-linejoin", "round");
				this.italic = parseInt(b[10] || 1, 10);
				this.svg.appendChild(c);
				this.line = c;
				this.px = "px"
			},
			setStyle: function (b, c) {
				(c || 0 === c) && this.line.setAttribute(b,
					c);
				return this
			},
			setStrokeWidth: function (b) {
				b = parseInt(b, 10);
				this._super(b);
				this.minHeight = this.minWidth = b
			},
			draw: function (b, c, d, f, g, h, k) {
				var l = this.strokeWidth / 2,
					m = this.strokeWidth,
					n, p = c - b,
					q = f - d;
				c > b ? (n = p + m, g = b - g - l) : (n = -p + m, g = c - g - l);
				f > d ? (b = q + m, h = d - h - l) : (b = -q + m, h = f - h - l);
				0 < p && 0 < q && (this.italic = 1);
				0 > p && 0 < q && (this.italic = 2);
				0 > p && 0 > q && (this.italic = 3);
				0 < p && 0 > q && (this.italic = 4);
				this.css(n / k, b / k, g / k, h / k)
			},
			shapeCss: function (b, c) {
				var d, f;
				1 === this.italic || 3 === this.italic ? (d = "x1", f = "x2") : (d = "x2", f = "x1");
				this.setStyle(d,
					this.strokeWidth / 2);
				b && this.setStyle(f, b - this.strokeWidth / 2);
				this.setStyle("y1", this.strokeWidth / 2);
				c && this.setStyle("y2", c - this.strokeWidth / 2)
			}
		}).extend(s),
		u = c({
			name: "ellipse",
			toolbar: t,
			createGraphics: function (b) {
				this.ellipse = f("ellipse");
				this.svg.appendChild(this.ellipse);
				this.px = "px";
				this.ellipse.setAttribute("stroke-linecap", "round");
				this.ellipse.setAttribute("stroke-linejoin", "round");
				this.ellipse.setAttribute("cx", "50%");
				this.ellipse.setAttribute("cy", "50%");
				this.setFillOpacity(b[5] || "0.5")
			},
			setStyle: function (b, c) {
				this.ellipse.setAttribute(b, c);
				return this
			},
			setStrokeWidth: function (b) {
				b = parseInt(b, 10);
				this._super(b);
				this.minWidth = 2 * b;
				this.minHeight = 2 * b
			},
			draw: function (b, c, d, f, g, h, k) {
				var l = this.strokeWidth / 2,
					m = this.strokeWidth,
					n;
				c > b ? (n = c - b + m, g = b - g - l) : (n = b - c + m, g = c - g - l);
				f > d ? (b = f - d + m, h = d - h - l) : (b = d - f + m, h = f - h - l);
				this.css(n / k, b / k, g / k, h / k)
			},
			shapeCss: function (b, c) {
				b && this.setStyle("rx", b / 2 - this.strokeWidth / 2);
				c && this.setStyle("ry", c / 2 - this.strokeWidth / 2)
			}
		}).extend(s),
		s = c({
			name: "rect",
			toolbar: t,
			createGraphics: function () {
				this.rect = f("rect");
				this.rect.setAttribute("stroke-linecap", "round");
				this.rect.setAttribute("stroke-linejoin", "round");
				this.svg.appendChild(this.rect);
				this.px = "px"
			},
			setStrokeWidth: function (b) {
				b = parseInt(b, 10);
				this._super(b);
				this.setStyle("x", b / 2);
				this.setStyle("y", b / 2);
				this.minWidth = 2 * b;
				this.minHeight = 2 * b
			},
			setStyle: function (b, c) {
				this.rect.setAttribute(b, c);
				return this
			},
			draw: function (b, c, d, f, g, h, k) {
				var l = this.strokeWidth / 2,
					m = this.strokeWidth,
					n;
				c > b ? (n = c - b + m, g = b - g - l) : (n = b - c +
					m, g = c - g - l);
				f > d ? (b = f - d + m, h = d - h - l) : (b = d - f + m, h = f - h - l);
				this.css(n / k, b / k, g / k, h / k)
			},
			shapeCss: function (b, c) {
				b && this.setStyle("width", b - this.strokeWidth);
				c && this.setStyle("height", c - this.strokeWidth)
			}
		}).extend(s),
		v = c({
			create: function (c, d, g) {
				var k = this.svg = h(),
					l = this.path = f("path"),
					m = this.line = f("line"),
					n = this.rect = f("rect"),
					p = this.ellipse = f("ellipse");
				k.style.position = "absolute";
				m.style.display = "none";
				n.style.display = "none";
				p.style.display = "none";
				k.appendChild(n);
				k.appendChild(l);
				k.appendChild(m);
				k.appendChild(p);
				this.container = k;
				this.$container = b(k);
				p.setAttribute("cx", "50%");
				p.setAttribute("cy", "50%");
				this.setStyle("stroke-linecap", "round");
				this.setStyle("stroke-linejoin", "round");
				this.type = 0;
				this.inverse = "true" == d;
				this.position = c;
				this.currentType = "path";
				this.setCurrentType(g[10] || "path");
				this.backgroundTransparent = !1;
				this.deg = g[11] || 0;
				this.italic = parseInt(g[12] || 1, 10)
			},
			setStyle: function (b, c) {
				this.path.setAttribute(b, c);
				this.line.setAttribute(b, c);
				this.ellipse.setAttribute(b, c);
				this.rect.setAttribute(b,
					c)
			},
			setStrokeWidth: function (b) {
				var c = b = parseInt(b, 10);
				this.lineStrokeWidth = b;
				this.strokeWidth = c;
				this.setType(this.type);
				this.setPosition(this.deg, this.italic);
				this.setStyle("stroke-width", c)
			},
			getDegByItalic: function (b, c) {
				var d = this.inverse ? 180 : 0;
				switch (c) {
					case 1:
						b += d;
						break;
					case 2:
						b = 180 - b + d;
						break;
					case 3:
						b = 180 + b + d;
						break;
					case 4:
						b = 360 - b + d
				}
				return b
			},
			setPosition: function (b, c) {
				var d = this.svg.style,
					f = (-this.width - this.lineStrokeWidth / 2) / 2 + "px",
					g = (-this.height - this.lineStrokeWidth / 2) / 2 + "px";
				this.italic = c;
				this.deg = b;
				for (var h = "rotate(" + this.getDegByItalic(b, c) + "deg)", k = 0, l = this.svg.style, m = ["transform", "webkitTransform", "mozTransform", "msTransform"]; m[k];) l[m[k]] = h, k++;
				this.position && (c = (c + 2) % 4, 0 === c && (c = 4));
				switch (c) {
					case 1:
						d.left = "100%";
						d.top = "100%";
						d.right = "auto";
						d.bottom = "auto";
						d.margin = g + " auto auto " + f;
						break;
					case 2:
						d.left = "auto";
						d.top = "100%";
						d.right = "100%";
						d.bottom = "auto";
						d.margin = g + " " + f + " auto auto";
						break;
					case 3:
						d.left = "auto";
						d.top = "auto";
						d.right = "100%";
						d.bottom = "100%";
						d.margin = "auto " + f + " " +
							g + " auto";
						break;
					case 4:
						d.left = "100%", d.top = "auto", d.right = "auto", d.bottom = "100%", d.margin = "auto auto " + g + " " + f
				}
			},
			setCurrentType: function (b) {
				var c, d;
				b !== this.currentType && (c = this.svg.getElementsByTagName(b)[0], d = this.svg.getElementsByTagName(this.currentType)[0], this.currentType = b, d.style.display = "none", c.style.display = "block")
			},
			setType: function (b) {
				this.type = parseInt(b, 10);
				this.inverse = !1;
				var c, d;
				b = this.strokeWidth;
				var f = this.path,
					g = b / 2;
				switch (this.type) {
					case 0:
						this.setCurrentType("path");
						c = d = 0;
						break;
					case 2:
						this.inverse = !0;
					case 1:
						this.setCurrentType("path");
						d = 20 + 5 * b;
						c = 30 + 4 * b;
						this.backgroundTransparent = !1;
						f.setAttribute("d", "M " + g + " " + 0.3 * c + " L " + (d - b / 2) + " " + 0.5 * c + " L " + g + " " + 0.7 * c + " Z");
						break;
					case 4:
						this.inverse = !0;
					case 3:
						this.setCurrentType("path");
						this.backgroundTransparent = !1;
						d = 5 + 4 * b;
						c = 20 + 5 * b;
						f.setAttribute("d", "M " + g + " " + 0.2 * c + " L " + (d - g) + " " + 0.5 * c + " L " + g + " " + 0.8 * c + " Z");
						break;
					case 6:
						this.inverse = !0;
					case 5:
						this.setCurrentType("path");
						this.backgroundTransparent = !0;
						d = 10 + 4 * b;
						c = 30 + 3 * b;
						this.path.setAttribute("d",
							"M " + g + " " + 0.2 * c + " L " + (d - b) / 2 + " " + 0.5 * c + " L " + g + " " + 0.8 * c);
						break;
					case 7:
						this.setCurrentType("ellipse");
						this.backgroundTransparent = !1;
						d = c = 10 + 4 * b;
						this.ellipse.setAttribute("rx", d / 2 - g);
						this.ellipse.setAttribute("ry", c / 2 - g);
						break;
					case 8:
						this.setCurrentType("rect");
						this.backgroundTransparent = !1;
						d = c = 10 + 4 * b;
						this.rect.setAttribute("x", g);
						this.rect.setAttribute("y", g);
						this.rect.setAttribute("width", d - b);
						this.rect.setAttribute("height", c - b);
						break;
					case 9:
						this.setCurrentType("line");
						this.backgroundTransparent = !0;
						d = c = 10 + 4 * b;
						this.line.setAttribute("x1", g);
						this.line.setAttribute("y1", g);
						this.line.setAttribute("x2", d - g);
						this.line.setAttribute("y2", c - g);
						break;
					case 10:
						this.setCurrentType("line");
						this.backgroundTransparent = !0;
						d = c = 10 + 4 * b;
						this.line.setAttribute("x1", d / 2 - g);
						this.line.setAttribute("y1", g);
						this.line.setAttribute("x2", d / 2 - g);
						this.line.setAttribute("y1", c - g);
						break;
					case 11:
						this.setCurrentType("line"), this.backgroundTransparent = !0, d = c = 10 + 4 * b, this.line.setAttribute("x1", g), this.line.setAttribute("y2",
							g), this.line.setAttribute("x2", d - g), this.line.setAttribute("y1", c - g)
				}
				this.svg.setAttribute("width", d);
				this.svg.setAttribute("height", c);
				this.width = d;
				this.height = c;
				this.setColor(this.color);
				this.setPosition(this.deg, this.italic)
			},
			setColor: function (b) {
				this.color = b;
				this.setStyle("stroke", b);
				this.backgroundTransparent ? this.setStyle("fill", "transparent") : this.setStyle("fill", b)
			}
		}),
		w = c({
			name: "arrow",
			toolbar: p,
			createGraphics: function (b) {
				this._super(b);
				this.italic = parseInt(b[12] || 1, 10);
				this.headArrow = new v(!1,
					"false", b);
				this.endArrow = new v(!0, "false", b);
				this.deg = parseInt(b[11], 10);
				this.headArrow.setPosition(this.deg, this.italic);
				this.endArrow.setPosition(this.deg, this.italic);
				this.container.appendChild(this.headArrow.container);
				this.container.appendChild(this.endArrow.container);
				this.setStrokeWidth(b[9] || "1");
				this.setStroke(b[6] || "rgba(0, 0, 0, 1)");
				this.setArrowType("endArrowType", b[14] || 10);
				this.setArrowType("headArrowType", b[13] || 5)
			},
			setArrowType: function (b, c) {
				var d;
				"endArrowType" === b ? (d = this.endArrow,
					this.endArrowType = c) : (d = this.headArrow, this.headArrowType = c);
				d.setType(c);
				d.setStrokeWidth(this.strokeWidth)
			},
			setStroke: function (b) {
				this._super(b);
				this.headArrow.setColor(b);
				this.endArrow.setColor(b)
			},
			setStrokeWidth: function (b) {
				b = parseInt(b, 10);
				this._super(b);
				this.headArrow.setStrokeWidth(b);
				this.endArrow.setStrokeWidth(b)
			},
			css: function (b, c, d, f) {
				this._super(b, c, d, f);
				b = 180 * Math.atan(this.prevHeight / this.prevWidth) / Math.PI;
				this.prevHeight <= this.minHeight && (b = 0);
				this.prevWidth <= this.minWidth && (b = 90);
				this.deg = b;
				this.headArrow.setPosition(b, this.italic);
				this.endArrow.setPosition(b, this.italic)
			}
		}).extend(n),
		y = {
			shapes: {
				ellipse: u,
				rect: s,
				line: n,
				arrow: w
			},
			getShape: function (b, c, d) {
				return this.shapes[b] ? new this.shapes[b](c, d) : null
			}
		};
	c = c({
		create: function () {
			this.containerArray = {};
			this.graphics = {};
			this.activedShape = null
		},
		bindOnCreated: function (b, c) {
			this.onCreated = [b, c]
		},
		addEvent: function (b, c, f) {
			var g = this,
				h = y.getShape(f);
			this.containers = this.containers ? this.containers.add(c) : c;
			c.css("cursor", "crosshair");
			c.one("contextmenu.draw", function (b) {
				b.preventDefault();
				return !1
			});
			c.off("mousedown.draw touchstart.draw").one("mousedown.draw touchstart.draw", function (f) {
				f.stopPropagation();
				f.preventDefault();
				var k, l, m, n, p, q = f.button,
					r = c.offset().top,
					s = c.offset().left;
				if (!document.implementation.hasFeature("MouseEvents", "2.0")) switch (event.button) {
					case 0:
					case 1:
					case 3:
					case 5:
					case 7:
						q = 0;
						break;
					case 2:
					case 6:
						q = 2;
						break;
					case 4:
						q = 1
				}
				q ? (h._parsePresentValue(), g.delEvents(), g.popUpButton()) : (f.pageX ? (k = f.pageX, l = f.pageY) :
					f.originalEvent.touches && (p = !0, k = f.originalEvent.touches[0].pageX, l = f.originalEvent.touches[0].pageY), c.append(h.$container), g.groupGraphicByIndex(b, h), h.draw(k, k, l, l, s, r), c.off("mousemove.draw touchmove.draw").on("mousemove.draw touchmove.draw", function (b) {
						b.preventDefault();
						b.stopPropagation();
						p ? (m = b.originalEvent.touches[0].pageX, n = b.originalEvent.touches[0].pageY) : (m = b.pageX, n = b.pageY);
						h.draw(k, m, l, n, s, r, d.scale())
					}), c.off("mouseup.draw touchend.draw").one("mouseup.draw touchend.draw", function () {
						h._parsePresentValue();
						g.delEvents();
						g.popUpButton();
						h.active(c);
						h.$container.on("mousedown mouseup", function (b) {
							b.stopPropagation()
						});
						g.save()
					}))
			})
		},
		groupGraphicByIndex: function (b, c) {
			this.graphics[b] || (this.graphics[b] = []);
			this.graphics[b].push(c)
		},
		removeGraphicByIndex: function (b) {
			var c, d = this.graphics,
				f, g;
			for (c in d)
				if (d.hasOwnProperty(c) && c == b) {
					g = d[c];
					for (f = 0; g[f];) g[f].$container.remove(), f++;
					d[c] = []
				}
		},
		removeGraphic: function (b) {
			var c, d, f, g = this.graphics;
			for (d in g)
				if (g.hasOwnProperty(d) && g[d])
					for (c = 0, f = g[d]; f[c];) f[c] ===
						b && f.splice(c, 1), c++
		},
		popUpButton: function () {
			this.onCreated && this.onCreated[1].call(this.onCreated[0])
		},
		delEvents: function () {
			this.containers && this.containers.off("mousedown.draw touchstart.draw contextmenu.draw mousemove.draw touchmove.draw").css("cursor", "auto");
			this.containers = null
		},
		getPageContent: function (b) {
			for (var c, d = 0, f, g, h, k, l = this.graphics[b]; l && (c = l[d]);) {
				switch (c.name) {
					case "line":
						b = [c._width, c._height, c._left, c._top, c.fill, c.fillOpacity, c.stroke, c.strokeDasharray, c.strokeOpacity, c.strokeWidth,
						c.italic
						];
						f || (f = []);
						f.push(b.join("$$"));
						break;
					case "arrow":
						b = [c._width, c._height, c._left, c._top, c.fill, c.fillOpacity, c.stroke, c.strokeDasharray, c.strokeOpacity, c.strokeWidth, c.currentType, c.deg, c.italic, c.headArrowType, c.endArrowType];
						g || (g = []);
						g.push(b.join("$$"));
						break;
					case "rect":
						b = [c._width, c._height, c._left, c._top, c.fill, c.fillOpacity, c.stroke, c.strokeDasharray, c.strokeOpacity, c.strokeWidth];
						h || (h = []);
						h.push(b.join("$$"));
						break;
					case "ellipse":
						b = [c._width, c._height, c._left, c._top, c.fill, c.fillOpacity,
						c.stroke, c.strokeDasharray, c.strokeOpacity, c.strokeWidth
						], k || (k = []), k.push(b.join("$$"))
				}
				d++
			}
			b = [f && f.join("@@"), g && g.join("@@"), h && h.join("@@"), k && k.join("@@")];
			return b.join("##")
		},
		saveByIndex: function (b) {
			var c = new Date,
				d = this.getPageContent(b) || "";
			try {
				window.localStorage ? (window.localStorage.removeItem(window.location.href.replace(window.location.hash, "") + "flipHtml5Shapes" + b), "" !== d && "######" !== d && window.localStorage.setItem(window.location.href.replace(window.location.hash, "") + "flipHtml5Shapes" +
					b, d)) : ("" === d || "######" === d ? c = new Date("01 Jan 1970 00:00:01") : (c = new Date, c.setDate(c.getDate() + this.expires)), document.cookie = window.location.href.replace(window.location.hash, "") + "flipHtml5Shapes" + b + "=" + d + ";expires=" + c.toUTCString() + ";")
			} catch (f) { }
		},
		save: function () {
			var b, c = d.getCurrentPages();
			for (b = 0; b < c.length; b++) this.containerArray[d.getBookType()][c[b]] && this.saveByIndex(c[b])
		},
		restoreByIndex: function (b, c) {
			var d, f;
			this.removeGraphicByIndex(b);
			try {
				if (window.localStorage ? d = window.localStorage.getItem(window.location.href.replace(window.location.hash,
					"") + "flipHtml5Shapes" + b) || "" : (f = RegExp("(?:(?:^|.*;\\s*)" + window.location.href.replace(window.location.hash, "") + "flipHtml5Shapes" + b + "\\s*\\=\\s*([^;]*).*$)|^.*$"), d = (document.cookie || "").replace(f, "$1")), d && 0 !== d.length) {
					var g, h;
					f = 0;
					for (var k = d.split("##"), l = k[0].split("@@"), m = k[1].split("@@"), n = k[2].split("@@"), p = k[3].split("@@"); g = l[f++];) h = y.getShape("line", g.split("$$"), c), c.append(h.container), this.groupGraphicByIndex(b, h);
					for (f = 0; g = m[f++];) h = y.getShape("arrow", g.split("$$"), c), c.append(h.container),
						this.groupGraphicByIndex(b, h);
					for (f = 0; g = n[f++];) h = y.getShape("rect", g.split("$$"), c), c.append(h.container), this.groupGraphicByIndex(b, h);
					for (f = 0; g = p[f++];) h = y.getShape("ellipse", g.split("$$"), c), c.append(h.container), this.groupGraphicByIndex(b, h)
				}
			} catch (q) {
				throw q;
			}
		},
		restore: function (b, c, f) {
			var g = this.containerArray;
			r.inactive();
			t.inactive();
			q.inactive();
			p.inactive();
			g[b] || (g[b] = {});
			g[b][c] = f;
			b === d.getBookType() && this.restoreByIndex(c, f)
		},
		setContainers: function (b, c, d) {
			document.createElementNS && this.restore(b,
				c, d)
		},
		addEvents: function (b) {
			var c, f = -1,
				g = d.getCurrentPages(),
				h = this.containerArray[d.getBookType()];
			if (document.createElementNS && h)
				for (; f++ < g.length;) c = g[f], h[c] && this.addEvent(c, h[c], b)
		}
	});
	l = window.AnnotationShapes = new c
})(window.jQuery, window.Class, window.BookInfo);
var NoteCookie = Class({
	statics: {
		noteCookie: function (b) {
			void 0 == this._noteCookie && (this._noteCookie = new NoteCookie(b));
			return this._noteCookie
		}
	},
	create: function (b) {
		this.noteImgs = {};
		this.rowObjs = {};
		this.noteTexts = {};
		this.svgObjs = {};
		this.notes = [];
		this.cookieName = window.location.href.replace(window.location.hash, "") + "NoteCookie";
		this.rows = [];
		this.noteImgContainers = {};
		this.showFlag = !1;
		this.container = b;
		this.address = uiBaseURL;
		this.noteButtonIsShow = !0;
		this.createNote(b);
		this.bindEvents()
	},
	createNote: function (b) {
		var c =
			this;
		this.note = $("<div class='noteCookie-note'></div>").css({
			left: "40%"
		}).appendTo(b).hide();
		this.noteTitle = $("<div class='noteCookie-noteTitle'></div>").append($("<span class='noteCookie-noteTitle-text'></span>").html("Notes")).appendTo(this.note);
		this.noteTitleShowBtn = $("<div class='noteCookie-noteTitle-showBtn'></div>").css({
			right: 32
		}).attr("title", "Minimize").append($("<img style='margin-left: 3px;margin-top: 3px;'/>").attr("src", this.address + "note_narrow.png")).appendTo(this.noteTitle);
		this.noteTitleCloseBtn =
			$("<div class='noteCookie-noteTitle-closeBtn'></div>").css({
				right: 3
			}).attr("title", "Close").append($("<img style='margin-left: 3px;margin-top: 3px;'/>").attr("src", this.address + "note_close.png")).appendTo(this.noteTitle);
		this.noteButton = $("<div class='noteCookie-noteButton'></div>").appendTo(this.note);
		var d = $("<div style='position: relative;width: 100%;height: 158px;'></div>").appendTo(this.noteButton);
		this.noteBottomTop = $("<div class='noteCookie-noteButton-top'></div>").appendTo(d);
		this.inputText =
			$("<textarea class='noteCookie-noteButton-inputText'></textarea>").appendTo(this.noteBottomTop);
		this.addBtn = $("<div class='noteCookie-noteButton-addBtn'></div>").css({
			left: 10
		}).html("Add").appendTo(this.noteBottomTop);
		this.removeAllBtn = $("<div class='noteCookie-noteButton-removeAllBtn'></div>").css({
			left: "auto",
			right: 20
		}).html("Remove All").appendTo(this.noteBottomTop);
		this.noteLists = $("<div class='noteCookie-noteList'></div>").appendTo(this.noteButton);
		var d = $("<div class='noteCookie-noteTable-row-th'></div>"),
			f = $("<span class='noteCookie-noteTable-cellLeft-th'></span>").html("Page"),
			g = $("<div class='noteCookie-noteTable-cellRight-th'></div>");
		g.append($("<div style='position: absolute;width: 1px;height: 22px;left: 0px;top: 3px;background-color: #FFFFFF;'></div>")).append($("<span style='position: absolute;width: 319px;height: 100%;left: 1px;text-indent: 6px;'></span>").html("Title")).append($("<div style='position: absolute;width: 1px;height: 22px;left: auto;right: 89px;top: 3px;background-color: #FFFFFF;'></div>")).append($("<span style='position: absolute;width: 34px;height: 100%;left: auto;right: 55px;text-indent: 4px;'></span>").html("Edit")).append($("<div style='position: absolute;width: 1px;height: 22px;left: auto;right: 54px;top: 3px;background-color: #FFFFFF;'></div>")).append($("<span style='position: absolute;width: 54px;height: 100%;left: auto;right: 0px;text-indent: 4px;'></span>").html("Delete"));
		d.append(f).append(g);
		this.noteLists.append(d);
		this.noteTable = $("<div class='noteCookie-noteTable'></div>").css({
			maxHeight: 188
		}).appendTo(this.noteLists);
		this.noteTableInner = $("<div class='noteCookie-noteTable-inner'></div>").appendTo(this.noteTable);
		isTouch || this.note.transition3D();
		this.createScrollBar(this.noteTable);
		try {
			var h = this.getLocalStorage(this.cookieName),
				k = eval(h);
			if (k)
				for (this.downJSonArrByKey(k, "page"), h = 0; h < k.length; h++) this.addListData($.extend(k[h], {
					firstDown: !0
				}))
		} catch (l) { }
		for (h =
			0; h < this.rows.length; h++) this.rows[h].rowObj.css({
				backgroundColor: 0 == h % 2 ? "" : "#bababa"
			});
		this.scrollBarShowHide();
		var m, n;
		this.noteTitle.on("mousedown touchstart", function (d) {
			d.preventDefault();
			d.stopPropagation();
			d = d.originalEvent.touches ? d.originalEvent.touches[0] : d;
			m = d.clientX - c.note.position().left;
			n = d.clientY - c.note.position().top;
			b.add(c.noteImgContainers[BookInfo.getBookType()][BookInfo.getCurrentPages()[0]]).add(c.noteImgContainers[BookInfo.getBookType()][BookInfo.getCurrentPages()[1]]).on("mousemove.noteMove touchmove.noteMove",
				function (b) {
					b.preventDefault();
					b.stopPropagation();
					c.noteTitle.css({
						cursor: "move"
					});
					b = b.originalEvent.touches ? b.originalEvent.touches[0] : b;
					c.note.css({
						left: b.clientX - m,
						top: b.clientY - n
					})
				});
			b.on("mouseup.noteMove touchend.noteMove", function (d) {
				d.preventDefault();
				d.stopPropagation();
				c.noteTitle.css({
					cursor: "default"
				});
				b.add(c.noteImgContainers[BookInfo.getBookType()][BookInfo.getCurrentPages()[0]]).add(c.noteImgContainers[BookInfo.getBookType()][BookInfo.getCurrentPages()[1]]).off("mousemove.noteMove touchmove.noteMove");
				b.off("mouseup.noteMove touchend.noteMove")
			});
			return !1
		})
	},
	isNoteListShowHide: function () {
		0 < this.noteTableInner.children("div").length ? this.noteLists.show() : this.noteLists.hide()
	},
	updateListDataText: function (b, c) {
		var d = this.noteTexts[b],
			f = this.noteImgs[b].find(".noteCookie-eachNote-img"),
			d = d.find(".noteCookie-eachNote-textList-text");
		f.attr("title", c);
		d.val(c)
	},
	updateNoteImgText: function (b, c) {
		this.rowObjs[b].find(".noteCookie-noteTable-cellRight-text").val(c)
	},
	deleteListData: function (b) {
		var c = this.noteTexts[b],
			d = this.svgObjs[b];
		this.noteImgs[b].remove();
		c.remove();
		d.remove();
		delete this.noteImgs[b];
		delete this.rowObjs[b];
		delete this.noteTexts[b];
		delete this.svgObjs[b]
	},
	deleteNoteImg: function (b) {
		this.rowObjs[b].remove();
		delete this.noteImgs[b];
		delete this.rowObjs[b]
	},
	revertNoteImgText: function (b) {
		var c = this.noteTexts[b].find(".noteCookie-eachNote-textList-text");
		b = this.rowObjs[b].find(".noteCookie-noteTable-cellRight-text");
		c.val(b.val())
	},
	addListData: function (b) {
		var c = this,
			d = !0,
			f = $("<div class='noteCookie-noteTable-row' style='position: relative;cursor: pointer;'></div>").css({
				height: 28
			}).attr("data-key",
				b.key).attr("data-page", b.page).append($("<span class='noteCookie-noteTable-cellLeft'></span>").html(b.page)).appendTo(c.noteTableInner),
			g = $("<span class='noteCookie-noteTable-cellRight' style=' position: absolute;width: 410px;height: 100%;left: 54px;z-index: 2;'></span>").appendTo(f),
			h = $("<input class='noteCookie-noteTable-cellRight-text' disabled='true'/>").attr("disabled", d).val(b.value).appendTo(g),
			k = $("<div class='noteCookie-noteTable-cellRight-edit'></div>").css({
				right: 60
			}).attr("title", "Edit").append($("<img style='margin-left: 3px;margin-top: 3px;'/>").attr("src",
				c.address + "note_edit.png")).appendTo(g);
		$("<div class='noteCookie-noteTable-cellRight-del'></div>").css({
			right: 15
		}).attr("title", "Delete").append($("<img style='margin-left: 0px;margin-top: 3px;'/>").attr("src", c.address + "note_del.png")).appendTo(g).on("click touchend", function (b) {
			f.remove();
			var d = f.attr("data-key");
			c.deleteListData(d);
			c.delArrayOrderKey(c.rows, d);
			c.delArrayOrderKey(c.notes, d);
			c.addLocalStorage(c.cookieName, c.parseJSONArrayToString(c.notes));
			for (d = 0; d < c.rows.length; d++) c.rows[d].rowObj.css({
				backgroundColor: 0 ==
					d % 2 ? "" : "#bababa"
			});
			c.scrollBarShowHide();
			b.preventDefault();
			b.stopPropagation();
			return !1
		});
		f.on("click touchend", function (b) {
			gotoPageFun($(this).attr("data-page"))
		});
		k.on("click touchend", function (b) {
			if (d) d = !1, h.css({
				backgroundColor: "#ffffff",
				color: "#000000"
			}), k.children("img").attr("src", c.address + "note_save.png"), h.attr("disabled", d), h[0].focus(), k.attr("title", "Save");
			else {
				d = !0;
				h.css({
					backgroundColor: "transparent",
					color: "#1a1a1a"
				});
				h.attr("disabled", d);
				k.attr("title", "Edit");
				var g = h.val();
				k.children("img").attr("src",
					c.address + "note_edit.png");
				var n = f.attr("data-key");
				c.updateListDataText(n, g);
				c.updateArrayOrderKey(c.notes, n, {
					value: g
				});
				c.addLocalStorage(c.cookieName, c.parseJSONArrayToString(c.notes))
			}
			b.preventDefault();
			b.stopPropagation();
			return !1
		});
		c.rows.push($.extend(b, {
			rowObj: f
		}));
		c.rowObjs[b.key] = f;
		c.scrollBarShowHide();
		c.notes.push(b);
		c.addLocalStorage(c.cookieName, c.parseJSONArrayToString(c.notes))
	},
	addNoteImg: function (b, c) {
		var d = this,
			f = !0,
			g = $("<div class='noteCookie-eachNote'></div>").attr("data-key",
				b.key).attr("data-page", b.page).css({
					left: "" + b.left + "",
					top: "" + b.top + ""
				}).appendTo(c),
			h = $("<img class='noteCookie-eachNote-img' style=' position: absolute;width: 56px;height: 56px;z-index: 2;'/>").attr("src", d.address + "note.png").attr("title", b.value).attr("data-key", b.key).attr("data-page", b.page).appendTo(g);
		isTouch || g.transition3D();
		try {
			var k = $(document.createElementNS("http://www.w3.org/2000/svg", "svg")).css({
				zIndex: 140,
				position: "absolute"
			}).attr("class", "noteCookie-eachNote-svg noteCookie-eachNote-svg" +
			b.page).appendTo(BookInfo.container()),
				l = $(document.createElementNS("http://www.w3.org/2000/svg", "path")).css({
					fill: "#FFF4A1",
					stroke: "#C99F1D",
					strokeWidth: 1
				}).appendTo(k)
		} catch (m) {
			k = $("<svg></svg>").css({
				zIndex: 140,
				position: "absolute"
			}).attr("class", "noteCookie-eachNote-svg noteCookie-eachNote-svg" + b.page).appendTo(BookInfo.container()), l = $("<path></path>").css({
				fill: "#FFF4A1",
				stroke: "#C99F1D",
				strokeWidth: 1
			}).appendTo(k)
		}
		k.css({
			left: 0,
			top: 0,
			width: 0,
			height: 0
		}).hide();
		var n = $("<div class='noteCookie-eachNote-textList noteCookie-eachNote-text" +
			b.page + "'></div>").attr("data-key", b.key).attr("data-page", b.page).hide().appendTo(BookInfo.container());
		n.css({
			left: g.offset().left,
			top: g.offset().top
		});
		n.on("click mousedown touchstart", function (b) {
			b.preventDefault();
			b.stopPropagation();
			return !1
		});
		var p = $("<div class='noteCookie-eachNote-textList-top' style='position: absolute;width: 100%;height: 20px;left: 0px;top: 0px;background-color: #373737;border-top-left-radius: 2px;border-top-right-radius: 2px;z-index: 2;'></div>").appendTo(n),
			q = $("<div style='position: absolute;left: 4px;top: 0px;width: 24px;height: 20px;cursor: pointer;'></div>").append($("<img style='margin-top: 2px;margin-left: 4px;'/>").attr("src",
				d.address + "showNoteList.png")).appendTo(p),
			t = $("<div class='noteCookie-eachNote-textList-topClose'></div>").css({
				right: 2
			}).attr("title", "Close").append($("<img style='margin-top: 1px;margin-left: 1px;'/>").attr("src", d.address + "noteImg_close.png")).appendTo(p),
			r = $("<div class='noteCookie-eachNote-textList-topSave'></div>").css({
				right: 24
			}).attr("title", "Save").append($("<img style='margin-top: 1px;margin-left: 0px;'/>").attr("src", d.address + "noteImg_save.png")).appendTo(p),
			s = $("<div class='noteCookie-eachNote-textList-topDel'></div>").css({
				right: 46
			}).attr("title",
				"Delete").append($("<img style='margin-top: 1px;margin-left: 0px;'/>").attr("src", d.address + "noteImg_del.png")).appendTo(p),
			u = $("<div class='noteCookie-eachNote-textList-textDiv' style='height: 120px;position: absolute;width: 100%;left: 0px;top: 20px;margin: 0px;border: 0px;padding: 0px;border-bottom-left-radius: 2px;border-bottom-right-radius: 2px;background-color: #FFF4A1;z-index: 2;'></div>").appendTo(n),
			v = $("<textarea class='noteCookie-eachNote-textList-text'></textarea>").val(b.value).appendTo(u);
		$("<span class='noteCookie-eachNote-textList-topTitle'></span>").html(b.time).appendTo(u);
		v.on("mousedown click", function (b) {
			b.stopPropagation()
		});
		isTouch || n.transition3D();
		q.on("click touchend", function () {
			d.noteButtonIsShow && d.showFlag ? (d.hide(), d.showFlag = !1) : (d.show(), d.showFlag = !0)
		});
		var w, y, x, A, E, F;
		p.on("mousedown.note touchstart.note", function (b) {
			x = g.offset().left;
			A = g.offset().top;
			E = n.offset().left;
			F = n.offset().top;
			w = (b.pageX || b.originalEvent.touches[0].pageX) - E;
			y = (b.pageY || b.originalEvent.touches[0].pageY) -
				F;
			BookInfo.container().add(k).add(d.noteImgContainers[BookInfo.getBookType()][BookInfo.getCurrentPages()[0]]).add(d.noteImgContainers[BookInfo.getBookType()][BookInfo.getCurrentPages()[1]]).on("mousemove.noteB touchmove.noteB", function (b) {
				p.css({
					cursor: "move"
				});
				b = isTouch ? b.originalEvent.touches[0] : b;
				n.css({
					left: Math.floor(b.clientX - w),
					top: b.clientY - y
				});
				d.drawSVG(x, A, n.offset().left, n.offset().top, k, l)
			});
			BookInfo.container().add(k).add(p).on("mouseup.noteB touchend.noteB", function () {
				p.css({
					cursor: "default"
				});
				BookInfo.container().add(k).add(d.noteImgContainers[BookInfo.getBookType()][BookInfo.getCurrentPages()[0]]).add(d.noteImgContainers[BookInfo.getBookType()][BookInfo.getCurrentPages()[1]]).off("mousemove.noteB touchmove.noteB");
				BookInfo.container().add(k).add(p).off("mouseup.noteB touchend.noteB")
			});
			b.stopPropagation();
			b.preventDefault();
			return !1
		});
		var z, C, B;
		t.on("click touchend", function (b) {
			d.revertNoteImgText(g.attr("data-key"));
			n.hide();
			k.hide();
			D = !1
		});
		r.on("click touchend", function (b) {
			b = v.val();
			h.attr("title", b);
			var c = g.attr("data-key");
			d.updateNoteImgText(c, b);
			d.updateArrayOrderKey(d.notes, c, {
				value: b
			});
			d.addLocalStorage(d.cookieName, d.parseJSONArrayToString(d.notes));
			n.hide();
			k.hide();
			D = !1
		});
		s.on("click touchend", function (b) {
			z || (z = $("<div class='noteCookie-eachNote-textList-textDiv-bg' style='height: 100%;position: absolute;width: 100%;left: 0px;top: 0px;margin: 0px;border: 0px;padding: 0px;cursor: default;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;background-color: #cccccc;z-index: 2;'></div>").appendTo(u),
				$("<span class='noteCookie-eachNote-textList-textDiv-bgText' style=' position: absolute;left: 0px;top: 36px;font-family: Arial;font-size: 11px;width: 100%;text-align: center;height: 20px;line-height: 20px;color: #0A0A0A;z-index: 2;'></span>").html("Delete This Note!").appendTo(z), C = $("<div class='noteCookie-eachNote-textList-textDiv-bgYes'></div>").css({
					left: 40
				}).html("Yes").appendTo(z), B = $("<div class='noteCookie-eachNote-textList-textDiv-bgNo'></div>").css({
					left: 97
				}).html("No").appendTo(z), C.on("click touchend",
					function (b) {
						b = g.attr("data-key");
						d.deleteNoteImg(b);
						n.remove();
						k.remove();
						g.remove();
						b = g.attr("data-key");
						d.delArrayOrderKey(d.rows, b);
						d.delArrayOrderKey(d.notes, b);
						d.addLocalStorage(d.cookieName, d.parseJSONArrayToString(d.notes));
						d.scrollBarShowHide();
						for (b = 0; b < d.rows.length; b++) d.rows[b].rowObj.css({
							backgroundColor: 0 == b % 2 ? "" : "#bababa"
						});
						z = null
					}), B.on("click touchend", function () {
						z.remove();
						z = null
					}))
		});
		var K = b.firstDown ? !1 : !0,
			D = !1,
			I = !1;
		h.on("mouseup.noteImgShowHide touchend.noteImgShowHide", function (b) {
			if (isTouch ||
				1 == b.which)
				if (K) K = !1;
				else return I ? I = !1 : D ? (n.hide(), k.hide(), D = !1) : (f && (n.css({
					left: g.offset().left,
					top: g.offset().top
				}), f = !1), n.show(), k.show(), D = !0, d.drawSVG(g.offset().left, g.offset().top, n.offset().left, n.offset().top, k, l)), b.preventDefault(), b.stopPropagation(), !1
		});
		$(document).add(c).on("mousedown.noteImgShowHide touchstart.noteImgShowHide", function () {
			D && (n.hide(), k.hide(), D = !1)
		});
		n.add(k).on("mousedown.noteImgShowHide touchstart.noteImgShowHide", function (b) {
			b.preventDefault();
			b.stopPropagation();
			return !1
		});
		var H, G, M, J, ia, W = !1;
		h.bind(_event._down, function (b) {
			b.stopPropagation();
			b.preventDefault();
			b = isTouch ? b.originalEvent.touches[0] : b;
			H = parseFloat(g[0].offsetLeft);
			G = parseFloat(g[0].offsetTop);
			M = b.clientX;
			J = b.clientY;
			ia = h.attr("data-key");
			W = !0;
			if (D) var f = n.offset().left,
				l = n.offset().top,
				m = k.offset().left,
				p = k.offset().top;
			c.on("mousemove.noteObj touchmove.noteObj", function (b) {
				b.stopPropagation();
				b.preventDefault();
				if (W) {
					g.css({
						cursor: "move"
					});
					b = isTouch ? b.originalEvent.touches[0] : b;
					var h = H * BookInfo.scale() -
						(M - b.clientX),
						q = G * BookInfo.scale() - (J - b.clientY),
						h = h / (c.width() * BookInfo.scale()) * 100 + "%",
						q = q / (c.height() * BookInfo.scale()) * 100 + "%";
					g.css({
						left: h,
						top: q
					});
					D && (n.css({
						left: f + (b.clientX - M),
						top: l + (b.clientY - J)
					}), k.css({
						left: m + (b.clientX - M),
						top: p + (b.clientY - J)
					}));
					if (8 < Math.abs(b.clientX - M) || 8 < Math.abs(b.clientY - J)) I = !0;
					d.updateArrayOrderKey(d.notes, ia, {
						left: h,
						top: q
					});
					d.addLocalStorage(d.cookieName, d.parseJSONArrayToString(d.notes))
				}
			});
			c.add(h).on("mouseup.noteObj touchend.noteObj", function (b) {
				W && (g.css({
					cursor: "default"
				}),
					I = W = !1, c.off("mousemove.noteObj touchmove.noteObj"), c.add(h).off("mouseup.noteObj touchend.noteObj"))
			});
			return !1
		});
		p.bind(_event._down, function () {
			$(".noteCookie-eachNote-textList").removeClass("noteCookie-eachNote-textList-current");
			$(".noteCookie-eachNote").removeClass("noteCookie-eachNote-textList-current");
			n.addClass("noteCookie-eachNote-textList-current");
			g.addClass("noteCookie-eachNote-textList-current")
		});
		d.noteImgs[b.key] = g;
		d.noteTexts[b.key] = n;
		d.svgObjs[b.key] = k
	},
	addNoteImgByPageIndex: function (b,
		c) {
		c.find(".noteCookie-eachNote").remove();
		$(".noteCookie-eachNote-text" + b).remove();
		$(".noteCookie-eachNote-svg" + b).remove();
		for (var d = 0; d < this.notes.length; d++) this.notes[d].page === b && this.addNoteImg(this.notes[d], c)
	},
	addListDataAndNoteImg: function (b, c) {
		this.addListData(b);
		this.addNoteImg(b, c)
	},
	drawSVG: function (b, c, d, f, g, h) {
		var k, l, m, n, p, q;
		b + 28 >= d + 90.5 && c + 28 <= f ? (q = c + 28, f -= q, b + 28 <= d + 109 ? (p = b + 28, n = d + 181 - 24 - b + 28, c = b = 0, k = d + 181 - 24 - 48 - p, l = f, d = d + 181 - 24 - p) : (p = d + 109, d + 181 - 24 >= b + 28 ? (n = 48, b = b + 28 - p) : b = n = b +
			28 - p, k = c = 0, l = f, d = 48), m = f) : b + 28 < d + 90.5 && c + 28 <= f ? (q = c + 28, f -= q, b + 28 <= d + 24 ? (p = b + 28, n = d + 24 + 48 - p, c = b = 0, k = n - 48, l = f, d = n) : (p = d + 24, d + 24 + 48 <= b + 28 ? b = n = b + 28 - p : (n = 48, b = b + 28 - p), k = c = 0, l = f, d = 48), m = f) : b + 28 >= d + 90.5 && c >= f + 141 - 28 ? (q = f + 141, f = c + 28 - q, b + 28 <= d + 109 ? (p = b + 28, n = d + 181 - 24 - b + 28, b = 0, c = f, k = d + 181 - 24 - 48 - p, l = 0, d = d + 181 - 24 - p) : (p = d + 109, d + 181 - 24 >= b + 28 ? (n = 48, b = b + 28 - p) : b = n = b + 28 - p, c = f, l = k = 0, d = 48), m = 0) : b + 28 < d + 90.5 && c >= f + 141 - 28 ? (q = f + 141, f = c + 28 - q, b + 28 <= d + 24 ? (p = b + 28, n = d + 24 + 48 - p, b = 0, c = f, k = n - 48, l = 0, d = n) : (p = d + 24, d + 24 + 48 <= b + 28 ? b = n =
				b + 28 - p : (n = 48, b = b + 28 - p), c = f, l = k = 0, d = 48), m = 0) : d + 181 <= b + 28 && c + 28 >= f && c + 28 <= f + 70.5 ? (p = d + 181, n = b + 28 - p, c + 28 <= f + 20 ? (q = c + 28, f = f + 20 + 48 - q, b = n, k = c = 0, l = f - 48, d = 0, m = f) : f + 20 + 48 <= c + 28 ? (q = f + 20, f = c + 28 - q, b = n, c = f, d = l = k = 0, m = 48) : (q = f + 20, f = 48, b = n, c = c + 28 - q, d = l = k = 0, m = f)) : d + 181 <= b + 28 && c + 28 <= f + 141 && c + 28 >= f + 70.5 ? (p = d + 181, n = b + 28 - p, c + 28 <= f + 141 - 20 - 48 ? (q = c + 28, f = f + 141 - 20 - q, b = n, k = c = 0, l = f - 48, d = 0, m = f) : f + 141 - 20 <= c + 28 ? (q = f + 141 - 68, f = c + 28 - q, b = n, c = f, d = l = k = 0, m = 48) : (q = f + 141 - 68, f = 48, b = n, c = c + 28 - q, d = l = k = 0, m = f)) : d >= b + 28 && c + 28 >= f && c + 28 <= f + 70.5 ?
					(p = b + 28, n = d - p, c + 28 <= f + 20 ? (q = c + 28, f = f + 20 + 48 - q, c = b = 0, k = n, l = f - 48, d = n, m = f) : f + 20 + 48 <= c + 28 ? (q = f + 20, f = c + 28 - q, b = 0, c = f, k = n, l = 0, d = n, m = 48) : (q = f + 20, f = 48, b = 0, c = c + 28 - q, k = n, l = 0, d = n, m = f)) : d >= b + 28 && c + 28 <= f + 141 && c + 28 >= f + 70.5 ? (p = b + 28, n = d - p, c + 28 <= f + 141 - 20 - 48 ? (q = c + 28, f = f + 141 - 20 - q, c = b = 0, k = n, l = f - 48, d = n, m = f) : f + 141 - 20 <= c + 28 ? (q = f + 141 - 68, f = c + 28 - q, b = 0, c = f, k = n, l = 0, d = n, m = 48) : (q = f + 141 - 68, f = 48, b = 0, c = c + 28 - q, k = n, l = 0, d = n, m = f)) : (l = k = c = b = n = f = q = p = 0, d = 48, m = 0);
		g.show().css({
			width: n,
			height: f,
			left: p,
			top: q
		});
		h.attr("d", "M" + d + "," + m + " L" + b +
			"," + c + " L" + k + "," + l)
	},
	bindEvents: function () {
		var b = this,
			c = !1,
			d = function () {
				$.each(BookInfo.getCurrentPages(), function (c, d) {
					if (b.noteImgContainers[BookInfo.getBookType()]) {
						var h = b.noteImgContainers[BookInfo.getBookType()][d];
						h && (h.css({
							cursor: ""
						}), h.off("mousedown.addNote touchstart.addNote"))
					}
				});
				c = !1
			};
		BookInfo.container().on("mousedown.addNote touchstart.addNote", function () {
			d()
		});
		b.addBtn.bind(_event._end, function (f) {
			var g = b.inputText.val();
			if (g) {
				b.noteButtonIsShow = !1;
				b.noteTitleShowBtn.children("img").attr("src",
					b.address + "note_revert.png");
				b.noteButton.css({
					maxHeight: 0,
					paddingBottom: 0
				});
				c = !0;
				var h = BookInfo.getCurrentPages();
				$.each(h, function (f, h) {
					var m = b.noteImgContainers[BookInfo.getBookType()][h];
					if (m) m.css({
						cursor: "url(" + b.address + "note.png),auto"
					}).on(_event._down, function (f) {
						b.noteButtonIsShow = !1;
						b.noteTitleShowBtn.children("img").attr("src", b.address + "note_revert.png");
						b.noteButton.css({
							maxHeight: 0
						});
						if (c) {
							if (!f.which || 3 != f.which) {
								var k = (f.pageX || f.originalEvent.touches[0].pageX) - m.offset().left;
								f =
									(f.pageY || f.originalEvent.touches[0].pageY) - m.offset().top;
								k = k / (m.width() * BookInfo.scale()) * 100 + "%";
								f = f / (m.height() * BookInfo.scale()) * 100 + "%";
								k = {
									key: (new Date).getTime(),
									time: (new Date).format("yyyy-MM-dd hh:mm:ss", !0),
									value: g,
									left: k,
									top: f,
									page: h
								};
								b.addListDataAndNoteImg(k, $(this));
								b.downJSonArrByKey(b.rows, "page");
								$(".noteCookie-noteTable-row").detach();
								for (k = 0; k < b.rows.length; k++) b.rows[k].rowObj.css({
									backgroundColor: 0 == k % 2 ? "" : "#bababa"
								}), b.rows[k].rowObj.appendTo(b.noteTableInner);
								b.scrollBarShowHide();
								b.inputText.val("")
							}
							d()
						}
					})
				})
			}
			f.preventDefault();
			f.stopPropagation();
			return !1
		});
		b.noteTitleShowBtn.on(_event._down, function () {
			b.noteButtonIsShow ? (b.noteButtonIsShow = !1, b.noteTitleShowBtn.children("img").attr("src", b.address + "note_revert.png"), b.noteButton.css({
				maxHeight: 0,
				paddingBottom: 0
			})) : (b.noteButtonIsShow = !0, b.noteTitleShowBtn.children("img").attr("src", b.address + "note_narrow.png"), b.noteButton.css({
				maxHeight: 9999,
				paddingBottom: 6
			}))
		});
		b.noteTitleCloseBtn.on("click.note touchend.note", function (c) {
			void 0 !=
				b.onCreated ? b.onCreated[1].call(b.onCreated[0]) : b.hide();
			c.preventDefault();
			c.stopPropagation();
			return !1
		});
		b.removeAllBtn.on("click.note touchend.note", function () {
			$(".noteCookie-eachNote").remove();
			$(".noteCookie-eachNote-svg").remove();
			$(".noteCookie-eachNote-textList").remove();
			$(".noteCookie-noteTable-row").remove();
			b.notes = [];
			b.rowObjs = {};
			b.noteImgs = {};
			b.noteTexts = {};
			b.svgObjs = {};
			b.rows = [];
			b.addLocalStorage(b.cookieName, b.parseJSONArrayToString(b.notes));
			b.scrollBarShowHide()
		})
	},
	setContainers: function (b,
		c, d) {
		void 0 == this.noteImgContainers[b] && (this.noteImgContainers[b] = {});
		this.noteImgContainers[b][c] = d;
		b == BookInfo.getBookType() && ($(".noteCookie-eachNote-textList").hide(), $(".noteCookie-eachNote-svg").hide(), this.addNoteImgByPageIndex(c, d))
	},
	show: function () {
		this.showFlag = !0;
		this.note.show();
		parseInt(this.note.css("left")) > this.container.width() && this.note.css({
			left: "50%"
		});
		0 > parseInt(this.note.css("top")) && this.note.css({
			top: 24
		});
		this.noteButtonIsShow = !0;
		this.noteTitleShowBtn.children("img").attr("src",
			this.address + "note_narrow.png");
		this.noteButton.css({
			maxHeight: 9999,
			paddingBottom: 6
		});
		this.scrollBarShowHide()
	},
	hide: function () {
		this.showFlag = !1;
		this.note.hide()
	},
	bindOnCreated: function (b, c) {
		this.onCreated = [b, c]
	},
	showHide: function () {
		this.showFlag ? this.hide() : this.show()
	},
	parseJSONArrayToString: function (b) {
		if (0 != b.length) {
			for (var c = "[", d = 0; d < b.length; d++) c += "{key:'" + b[d].key + "',value:'" + b[d].value + "',page:" + b[d].page + ",time:'" + b[d].time + "',left:'" + b[d].left + "',top:'" + b[d].top + "'},";
			c = c.substring(0,
				c.length - 1);
			return c + "]"
		}
	},
	delArrayOrderKey: function (b, c) {
		if (b)
			for (var d = 0; d < b.length; d++) b[d].key && b[d].key == c && b.remove(d)
	},
	updateArrayOrderKey: function (b, c, d) {
		if (b)
			for (var f = 0; f < b.length; f++) b[f].key && b[f].key == c && $.extend(b[f], d)
	},
	downJSonArrByKey: function (b, c) {
		b.sort(function (b, f) {
			return parseInt(b[c]) > parseInt(f[c]) ? 1 : parseInt(b[c]) == parseInt(f[c]) ? 0 : -1
		})
	},
	isArray: function (b) {
		return "[object Array]" == Object.prototype.toString.call(b)
	},
	getLocalStorage: function (b) {
		try {
			if (window.localStorage) return window.localStorage.getItem(b);
			for (var c = document.cookie.split("; "), d = 0; d < c.length; d++) {
				var f = c[d].split("=");
				if (f[0] == b) return unescape(f[1])
			}
			return ""
		} catch (g) { }
	},
	addLocalStorage: function (b, c) {
		try {
			if (window.localStorage) window.localStorage.setItem(b, c);
			else {
				var d = b + "=" + escape(c),
					f = new Date;
				f.setTime(f.getTime() + 864E8);
				d += "; expires=" + f.toGMTString();
				document.cookie = d
			}
		} catch (g) { }
	},
	createScrollBar: function (b) {
		b = $("<div>", {
			"class": "ScrollBar",
			css: {
				position: "absolute",
				width: 6,
				height: "100%",
				backgroundColor: "#a8a8a8",
				borderRadius: 0,
				right: 0,
				top: 0,
				zIndex: 99,
				borderLeft: "1px solid #ffffff"
			}
		}).appendTo(b);
		var c = $("<div>", {
			"class": "OuterScroll",
			css: {
				position: "absolute",
				width: 6,
				height: "100%",
				left: 0,
				top: 0,
				backgroundColor: "transparent",
				borderRadius: 0,
				overflow: "hidden",
				cursor: "pointer"
			}
		}).appendTo(b);
		$("<div>", {
			"class": "InnerScroll",
			css: {
				position: "absolute",
				width: 6,
				height: "100%",
				marginLeft: 0,
				marginRight: 0,
				left: 0,
				top: 0,
				backgroundColor: "#5e5e5e",
				borderRadius: 0,
				cursor: "pointer"
			}
		}).appendTo(c);
		this.scrollBar = b;
		this.outerScroll = c;
		this.bindScrollBarEvents(b,
			c, this.noteTable, this.noteTableInner)
	},
	scrollBarShowHide: function () {
		var b = this.noteTable.outerHeight() * this.scrollBar.outerHeight() / this.noteTableInner.outerHeight();
		this.outerScroll.css({
			height: b
		});
		this.isNoteListShowHide();
		this.noteTable.height() >= this.noteTableInner.height() ? (this.scrollBar.hide(), this.noteTableInner.css({
			top: 0
		})) : (this.scrollBar.show(), Math.abs(parseFloat(this.noteTableInner.css("top"))) > this.noteTableInner.outerHeight() - this.noteTable.outerHeight() && (this.noteTableInner.css({
			top: -(this.noteTableInner.outerHeight() -
				this.noteTable.outerHeight())
		}), this.outerScroll.css({
			top: this.scrollBar.outerHeight() - this.outerScroll.outerHeight()
		})))
	},
	bindScrollBarEvents: function (b, c, d, f) {
		var g = this;
		c.on(_event._down, function (b) {
			var d = b || event,
				l = d.clientY - g.outerScroll.position().top,
				m = b.which;
			b.stopPropagation();
			1 == m && ($(document).on("mousemove.scrollBar touchmove.scrollBar", function (b) {
				b.preventDefault();
				b.stopPropagation();
				d = b || event;
				b = d.clientY - l;
				0 >= b ? b = 0 : b >= g.scrollBar.outerHeight() - g.outerScroll.outerHeight() && (b = g.scrollBar.outerHeight() -
					g.outerScroll.outerHeight());
				c.css({
					top: b
				});
				f.css({
					top: -b / (g.scrollBar.outerHeight() - g.outerScroll.outerHeight()) * (g.noteTableInner.outerHeight() - g.noteTable.outerHeight())
				})
			}), $(document).on("mouseup.scrollBar touchend.scrollBar", function (b) {
				b = b || event;
				b.preventDefault();
				b.stopPropagation();
				$(document).off("mousemove.scrollBar touchmove.scrollBar");
				$(document).off("mouseup.scrollBar touchend.scrollBar")
			}))
		});
		d.bind($.browser.mozilla ? "DOMMouseScroll" : "mousewheel", function (g) {
			if (!(d.outerHeight() >=
				f.outerHeight())) {
				var k = g.originalEvent,
					k = k.wheelDelta || -k.detail,
					l = f.position().top,
					m;
				f.stop(!1, !1);
				0 < k ? m = 0 > l + d.outerHeight() / 11 ? l + d.outerHeight() / 11 : 0 : 0 > k && (m = f.outerHeight() - d.outerHeight() > -(l - d.outerHeight() / 11) ? l - d.outerHeight() / 11 : -(f.outerHeight() - d.outerHeight()));
				f.css({
					top: m
				});
				c.css({
					top: -m / (f.outerHeight() - d.outerHeight()) * (b.outerHeight() - c.outerHeight())
				});
				g.stopPropagation();
				g.preventDefault();
				return !1
			}
		})
	}
})

function grayBackground(b, c, d, f, g) {
	this.sw = f;
	this.sh = g;
	this.background = $("<div ></div>");
	this.background.css({
		width: f + "px",
		height: g + "px",
		background: c,
		opacity: d,
		"z-index": 200,
		position: "absolute",
		left: "0px",
		top: "0px"
	});
	b.append(this.background)
}
grayBackground.prototype.onResize = function (b, c) {
	this.sw = b;
	this.sh = c;
	this.background.css({
		width: b + "px",
		height: c + "px"
	})
};
bdor[25] = "i";
grayBackground.prototype.setPosition = function (b, c, d) {
	void 0 == d && (d = ["left", "top"]);
	this.background.css(d[0], b + "px");
	this.background.css(d[1], c + "px")
};
grayBackground.prototype.show = function () {
	this.father.append(this.background)
};
grayBackground.prototype.hide = function () {
	this.background.remove()
};
grayBackground.prototype.setZindex = function (b) {
	this.background.css({
		"z-index": b
	})
};
grayBackground.prototype.onMouseUp = function (b, c) {
	$(this.background).bind(_event._down, function (d) {
		c.call(b)
	})
};
var textWidth = function (b, c) {
	var d = $("<pre>" + b + "</pre>").css({
		color: bookConfig.iconColor,
		display: "none",
		"font-size": c.size,
		"font-family": c.fontName
	});
	$("body").append(d);
	var f = Point(d.width(), d.height());
	d.remove();
	return f
};
bdor[27] = "f";
var tipsBox = Class({
	create: function (b, c) {
		this.visible = !1;
		this.caption = b;
		this.background = $("<span class='tipsBox tipsBoxShadow tipsBoxRadius'></span>");
		$(c).append(this.background)
	},
	setTimer: function () {
		this.timer = window.setInterval(function () {
			this.hideTipsBox();
			window.clearInterval(this.timer)
		}.bind(this), 1500)
	},
	resetTimer: function () {
		window.clearInterval(this.timer);
		this.setTimer()
	},
	setPosition: function (b, c, d) { },
	onResize: function (b, c) { },
	getWidth: function () {
		return this.background.width()
	},
	getHeight: function () {
		return this.background.height()
	},
	setCaption: function (b) {
		this.background.html(b)
	},
	showTipsBox: function () {
		this.visible ? this.resetTimer() : (this.setTimer(), this.visible = !0, $(this.background).show(), $(this.background).animate({
			opacity: 0.5
		}, 300))
	},
	hideTipsBox: function () {
		this.visible && (this.visible = !1, $(this.background).animate({
			opacity: 0
		}, 300, function () {
			$(this.background).hide()
		}.bind(this)))
	}
});

function initProgressBar(b, c) {
	this.width = 60;
	this.height = 30;
	this.progress = new label("Loading", b);
	this.caption = this.originCaption = c;
	this.captionLength = this.caption.length;
	this.progress.setCSS({
		display: "none"
	})
}
initProgressBar.prototype.setPosition = function (b, c) {
	this.progress.setLabelPosition((b - this.width) / 2, (c - this.height) / 2)
};
initProgressBar.prototype.addTimer = function () {
	var b = this;
	this.timerId = window.setInterval(function () {
		b.caption += ".";
		b.caption.length > b.captionLength + 3 && (b.caption = originCaption);
		b.progress.setCaption(b.caption)
	}, 600)
};
initProgressBar.prototype.removeTimer = function () {
	window.clearInterval(this.timerId)
};
initProgressBar.prototype.show = function () {
	this.progress.setCSS({
		display: "block"
	});
	this.caption = this.originCaption;
	this.addTimer()
};
initProgressBar.prototype.hide = function () {
	this.progress.setCSS({
		display: "none"
	});
	this.removeTimer()
};
initProgressBar.prototype.setIndex = function (b) {
	this.progress.setCSS({
		"z-index": b
	})
};
var BookShadow = Class({
	create: function (b) {
		this.background = $("<div class='bookShadow'></div>");
		$(b).append(this.background);
		this.visible = !0
	},
	doubleWidth: function (b) {
		$(this.background).attr("class", b ? "doubleWidth" : "singleWidth");
		$(this.background).addClass("bookShadow")
	},
	right: function (b) {
		$(this.background).css({
			right: "auto"
		});
		b && $(this.background).css({
			right: "0px"
		})
	},
	show: function () {
		this.visible || ($(this.background).show(), this.visible = !0)
	},
	hide: function () {
		this.visible && ($(this.background).hide(), this.visible = !1)
	}
});
bdor[26] = "h";

bdor[18] = "t";

bdor[21] = "f";
bdor.m = bdor[7];

function createComparisonFunction(b) {
	return function (c, d) {
		var f = c[b],
			g = d[b];
		return f < g ? -1 : f > g ? 1 : 0
	}
}


bdor.l = bdor.i(10);
Class("Thickness", {
	create: function (b, c, d) {
		this.thicknessObj = $('<div style="overflow:hidden"></div>');
		this.parent = b;
		this.isRightToLeftBook = parseBool(bookConfig.RightToLeft);
		this.evenPageCount = bookConfig.totalPageCount;
		1 == this.evenPageCount % 2 && this.evenPageCount++;
		this.imageWidth = c;
		this.getMaxWidth();
		this.scale = 1;
		this.visible = !0;
		this.hint = null;
		this.isSingleBook = !!d;
		this.init();
		this.initShadow();
		this.initHint()
	},
	getMaxWidth: function () {
		var b = Math.min(bookConfig.totalPageCount, 100);
		this.maxWidth = $.easing.easeOutQuad(null,
			b, 0, this.imageWidth, 100);
		this.maxWidth = Math.floor(this.maxWidth);
		this.maxWidthZoom = 1
	},
	getWidth: function () {
		return this.visible ? Math.ceil(this.thicknessWidth * this.scale) : 0
	},
	init: function () {
		this.topPart = $("<div style='position:relative;height:50px;width:" + this.imageWidth + "px;overflow:hidden;'></div>");
		this.centerPart = $("<div style='position:relative;height:auto;width:" + this.imageWidth + "px;overflow:hidden;'></div>");
		this.bottomPart = $("<div style='position:relative;height:50px;width:" + this.imageWidth +
			"px;overflow:hidden;'></div>");
		this.fillThicknessImage();
		this.thicknessObj.append(this.topPart);
		this.thicknessObj.append(this.centerPart);
		this.thicknessObj.append(this.bottomPart);
		this.parent.append(this.thicknessObj)
	},
	fillThicknessImage: virtual_function,
	initHint: function () {
		this.thicknessObj.bind("mousemove", function (b) {
			$(b.target);
			var c = b.offsetX;
			void 0 == c && (c = b.pageX - this.thicknessObj.offset().left);
			c = this.pageIndexByPosition(c);
			if (-1 != c) {
				var c = " " + getShownPageNumber(c) + " ",
					d = b.pageX;
				b = b.pageY -
					30;
				null == this.hint && (this.hint = new divHint(c, d, b));
				this.hint.setText(c);
				this.hint.show(d, b);
				this.hint.moveto(d, b)
			} else null != this.hint && this.hint.hide()
		}.bind(this));
		this.thicknessObj.bind("mouseleave", function () {
			null != this.hint && this.hint.hide()
		}.bind(this));
		this.thicknessObj.bind("click", function (b) {
			$(b.target);
			var c = b.offsetX;
			void 0 == c && (c = b.pageX - this.thicknessObj.offset().left);
			b = this.pageIndexByPosition(c);
			c = BookInfo.getBook().currentPageIndex;
			bookType == BookType.single_book && (c = singlePageBook.currentPageIndex);
			var d = c + 1;
			bookType == BookType.single_book && (d = -1); - 1 != b && b != c && b != d && gotoPageFun(b)
		}.bind(this))
	},
	pageIndexByPosition: virtual_function,
	initShadow: function () {
		this.shadowContent = $("<div></div>");
		this.shadowContent.css({
			perspective: 500,
			"-webkit-perspective": 500,
			"-moz-perspective": 500,
			"-ms-perspective": 500,
			top: "3px"
		});
		this.shadowObj = $('<div style="width:100%;height:100%;"></div>');
		this.shadowObj.css({
			"transform-style": "preserve-3d",
			"-webkit-transform-style": "preserve-3d",
			"-moz-transform-style": "preserve-3d",
			"-ms-transform-style": "preserve-3d",
			"background-color": "#CCCCCC"
		});
		this.initShadowStyle();
		this.shadowContent.append(this.shadowObj);
		this.parent.append(this.shadowContent);
		$.browser.msie && 11 > $.browser.version && this.shadowContent.css({
			display: "none"
		})
	},
	initShadowStyle: virtual_function,
	onResize: function () {
		this.contentWidth = $(this.parent).width();
		this.contentHeight = $(this.parent).height();
		this.maxWidthZoom = Math.min(1, this.contentHeight / 800);
		this.maxWidthZoom = $.easing.swing(null, Math.max(this.maxWidth -
			8, 0), 1, this.maxWidthZoom - 1, this.imageWidth - 8);
		this.thicknessObj.css({
			height: this.contentHeight
		});
		this.shadowContent.css({
			height: this.contentHeight - 6
		});
		this.centerPart.css({
			height: Math.max(0, this.contentHeight - 100)
		});
		this.centerPart.find("img").css({
			height: this.contentHeight
		});
		var b = this.getPageIndex();
		this.resetPosition(b);
		this.resetScale(b)
	},
	getPageIndex: function () {
		var b = 1;
		BookInfo.getBook() && (b = BookInfo.getBook().currentPageIndex);
		return b
	},
	getThicknessWidth: virtual_function,
	resetPosition: virtual_function,
	resetScale: virtual_function,
	setMinScale: function (b) {
		this.minScale = Math.min(b / this.maxWidth, 1)
	},
	setScale: function (b) {
		this.scale = b;
		this.scaleThickness()
	},
	doResetScale: function (b, c) {
		this.scale = c ? 1 == b ? this.minScale : 1 : b == this.evenPageCount ? this.minScale : 1;
		this.scaleThickness()
	},
	doSetMovingScale: function (b, c, d, f) {
		if (1 != this.minScale) {
			if (f) {
				if (1 != b && 1 != c) return;
				1 == b ? (b = this.minScale, c = 1) : (b = 1, c = this.minScale)
			} else {
				if (b != this.evenPageCount && c != this.evenPageCount) return;
				b == this.evenPageCount ? (b = this.minScale,
					c = 1) : (b = 1, c = this.minScale)
			}
			f = this.contentWidth;
			this.isSingleBook && (b = this.minScale, c = 1, f = 2 * this.contentWidth);
			void 0 == d && (d = f);
			isNaN(d) || (d = $.easing.easeInOutSine(null, d, b, c - b, f), this.setScale(d))
		}
	},
	scaleThickness: virtual_function,
	hide: function () {
		this.thicknessObj.css("display", "none");
		this.shadowContent.css("display", "none");
		this.visible = !1
	},
	show: function () {
		this.thicknessObj.css("display", "block");
		this.shadowContent.css("display", "block");
		this.visible = !0
	},
	setVisible: function (b) {
		b ? this.show() : this.hide()
	}
});
Class("LeftThickness", {
	initShadowStyle: function (b) {
		void 0 == b && (b = 1);
		this.shadowObj.css({
			transform: "rotateY(-20deg) scaleX(" + b + ") scaleZ(1)",
			"-webkit-transform": "rotateY(-20deg) scaleX(" + b + ") scaleZ(1)",
			"-moz-transform": "rotateY(-20deg) scaleX(" + b + ") scaleZ(1)",
			"-ms-transform": "rotateY(-20deg) scaleX(" + b + ") scaleZ(1)",
			"-webkit-box-shadow": "-3px 0px 6px rgba(125, 125, 125, 0.7)",
			"-moz-box-shadow": "-3px 0px 6px rgba(125, 125, 125, 0.7)",
			"-ms-box-shadow": "-3px 0px 6px rgba(125, 125, 125, 0.7)",
			"box-shadow": "-3px 0px 6px rgba(125, 125, 125, 0.7)"
		})
	},
	scaleThickness: function () {
		var b = {
			"-webkit-transform-origin": "100% 0%",
			"-moz-transform-origin": "100% 0%",
			"-ms-transform-origin": "100% 0%",
			"-o-transform-origin": "100% 0%",
			"transform-origin": "100% 0%",
			transform: "scaleX(" + this.scale + ") scaleZ(1)",
			"-webkit-transform": "scaleX(" + this.scale + ") scaleZ(1)",
			"-moz-transform": "scaleX(" + this.scale + ") scaleZ(1)",
			"-ms-transform": "scaleX(" + this.scale + ") scaleZ(1)"
		};
		this.thicknessObj.css(b);
		this.shadowContent.css(b);
		this.initShadowStyle(this.scale)
	},
	fillThicknessImage: function () {
		this.topPart.append("<img src='" +
			uiBaseURL + "thickness_left.png' style='position:absolute;width:100%;top:0px;' />");
		this.centerPart.append("<img src='" + uiBaseURL + "thickness_left.png' style='position:absolute;width:100%;top:-50px;' />");
		this.bottomPart.append("<img src='" + uiBaseURL + "thickness_left.png' style='position:absolute;width:100%;bottom:0px;' />")
	},
	getThicknessWidth: function (b) {
		var c = bookConfig.totalPageCount,
			d = Math.floor(this.maxWidth * this.maxWidthZoom);
		b = this.isRightToLeftBook ? c - b : b;
		bookConfig.HardPageEnable && 5 >= b && (b = 0);
		this.thicknessWidth = Math.floor(d * b / c);
		this.thicknessWidth = Math.max(this.thicknessWidth, 0);
		windowWidth < windowHeight && (this.thicknessWidth = 0)
	},
	resetPosition: function (b) {
		this.getThicknessWidth(b);
		b = transformCSS({
			tran: {
				x: this.thicknessWidth - this.imageWidth,
				y: 0
			}
		});
		this.topPart.css(b);
		this.centerPart.css(b);
		this.bottomPart.css(b);
		this.thicknessObj.css({
			width: this.thicknessWidth + "px",
			left: -this.thicknessWidth + "px",
			position: "absolute",
			"z-index": 0
		});
		b = Math.floor(this.thicknessWidth / Math.sin(7 * Math.PI / 18));
		this.shadowContent.css({
			width: b + "px",
			left: -this.thicknessWidth + 1 + "px",
			position: "absolute",
			"z-index": -1
		})
	},
	resetScale: function (b) {
		this.doResetScale(b, this.isRightToLeftBook)
	},
	setMovingScale: function (b, c, d) {
		this.doSetMovingScale(b, c, d, this.isRightToLeftBook)
	},
	pageIndexByPosition: function (b) {
		b = b + this.thicknessWidth - this.imageWidth;
		var c = this.thicknessWidth;
		if (0 < c - b && c - b <= c) {
			var d = bookConfig.totalPageCount,
				f = BookInfo.getBook().currentPageIndex;
			bookType == BookType.single_book && (f = singlePageBook.currentPageIndex);
			!0 == rightToLeft ? (b = Math.floor((d - f - 1) * (1 - (b - (c - c)) / c)), b += f + 1) : (b = Math.floor((f - 1) * (b - (c - c)) / c), b++);
			return b
		}
		return -1
	}
}).extend(Thickness);
Class("RightThickness", {
	initShadowStyle: function (b) {
		void 0 == b && (b = 1);
		this.shadowObj.css({
			transform: "rotateY(20deg) scaleX(" + b + ") scaleZ(1)",
			"-webkit-transform": "rotateY(20deg) scaleX(" + b + ") scaleZ(1)",
			"-moz-transform": "rotateY(20deg) scaleX(" + b + ") scaleZ(1)",
			"-ms-transform": "rotateY(20deg) scaleX(" + b + ") scaleZ(1)",
			"-webkit-box-shadow": "3px 0px 6px rgba(125, 125, 125, 0.7)",
			"-moz-box-shadow": "3px 0px 6px rgba(125, 125, 125, 0.7)",
			"-ms-box-shadow": "3px 0px 6px rgba(125, 125, 125, 0.7)",
			"box-shadow": "3px 0px 6px rgba(125, 125, 125, 0.7)"
		})
	},
	scaleThickness: function () {
		var b = {
			"-webkit-transform-origin": "0% 0%",
			"-moz-transform-origin": "0% 0%",
			"-ms-transform-origin": "0% 0%",
			"-o-transform-origin": "0% 0%",
			"transform-origin": "0% 0%",
			transform: "scaleX(" + this.scale + ") scaleZ(1)",
			"-webkit-transform": "scaleX(" + this.scale + ") scaleZ(1)",
			"-moz-transform": "scaleX(" + this.scale + ") scaleZ(1)",
			"-ms-transform": "scaleX(" + this.scale + ") scaleZ(1)"
		};
		this.thicknessObj.css(b);
		this.shadowContent.css(b);
		this.initShadowStyle(this.scale)
	},
	fillThicknessImage: function () {
		this.topPart.append("<img src='" +
			uiBaseURL + "thickness.png' style='position:absolute;width:100%;top:0px;' />");
		this.centerPart.append("<img src='" + uiBaseURL + "thickness.png' style='position:absolute;width:100%;top:-50px;' />");
		this.bottomPart.append("<img src='" + uiBaseURL + "thickness.png' style='position:absolute;width:100%;bottom:0px;' />")
	},
	getThicknessWidth: function (b) {
		var c = bookConfig.totalPageCount,
			d = Math.floor(this.maxWidth * this.maxWidthZoom);
		b = this.isRightToLeftBook ? b : c - b;
		bookConfig.HardPageEnable && 5 >= b && (b = 0);
		this.thicknessWidth =
			Math.floor(d * b / c);
		this.thicknessWidth = Math.max(this.thicknessWidth, 0);
		windowWidth < windowHeight && (this.thicknessWidth = 0)
	},
	resetPosition: function (b) {
		this.getThicknessWidth(b);
		var c = this.contentWidth;
		1 != b || this.isRightToLeftBook || (c = this.contentWidth - 1);
		this.thicknessObj.css({
			width: this.thicknessWidth + "px",
			left: c + "px",
			position: "absolute",
			"z-index": 0
		});
		this.shadowContent.css({
			width: this.thicknessWidth + "px",
			left: this.contentWidth - 1 + "px",
			position: "absolute",
			"z-index": -1
		})
	},
	resetScale: function (b) {
		this.doResetScale(b, !this.isRightToLeftBook)
	},
	setMovingScale: function (b, c, d) {
		this.doSetMovingScale(b, c, d, !this.isRightToLeftBook)
	},
	pageIndexByPosition: function (b) {
		var c = this.thicknessWidth;
		if (0 < b && b <= c) {
			var d = bookConfig.totalPageCount,
				f = BookInfo.getBook().currentPageIndex;
			!0 == rightToLeft ? (b = Math.floor((f - 1) * (1 - b / c)), b++) : (b = Math.floor((d - f - 1) * b / c), b += f + 1);
			return b
		}
		return -1
	}
}).extend(Thickness);
var flipShotBar = Class({
	create: function (b) {
		this.flipShotObj = $("<div id='flipShotObj' class='flipShotObj'></div>");
		b ? (this.prevDiv = $("<div class='flipShot'></div>"), this.firstDiv = $("<div class='flipShot'></div>"), this.prevDiv.append("<div class='flipShotBackground'></div>"), this.firstDiv.append("<div class='flipShotBackground'></div>"), this.prevDiv.append("<img src='" + uiBaseURL + "slide_leftButton.png' />"), this.firstDiv.append("<img src='" + uiBaseURL + "slide_firstButton.png' />")) : (this.prevDiv = $("<div class='flipShot'></div>"),
			this.firstDiv = $("<div class='flipShot'></div>"), this.prevDiv.append("<div class='flipShotBackground'></div>"), this.firstDiv.append("<div class='flipShotBackground'></div>"), this.prevDiv.append("<img src='" + uiBaseURL + "slide_rightButton.png'/>"), this.firstDiv.append("<img src='" + uiBaseURL + "slide_lastButton.png'/>"));
		this.flipShotObj.append(this.firstDiv);
		this.flipShotObj.append(this.prevDiv);
		this.isLeft = b;
		this.visible = !0;
		this.init();
		this.initEvents()
	},
	init: function () {
		this.enterCss = {
			background: "#ffffff",
			"-webkit-box-shadow": "0 0 15px rgba(255, 255, 255, 1)",
			"-moz-box-shadow": "0 0 15px rgba(255, 255, 255, 1)",
			"-o-box-shadow": "0 0 15px rgba(255, 255, 255, 1)",
			"-ms-box-shadow": "0 0 15px rgba(255, 255, 255, 1)",
			"box-shadow": "0 0 15px rgba(255, 255, 255, 1)"
		};
		this.leaveCss = {
			background: "#727272",
			"-webkit-box-shadow": "0 0 15px rgba(114, 114, 114, 1)",
			"-moz-box-shadow": "0 0 15px rgba(114, 114, 114, 1)",
			"-o-box-shadow": "0 0 15px rgba(114, 114, 114, 1)",
			"-ms-box-shadow": "0 0 15px rgba(114, 114, 114, 1)",
			"box-shadow": "0 0 15px rgba(114, 114, 114, 1)"
		};
		this.prevDiv.css({
			width: "100%",
			height: "80%",
			position: "relative",
			"border-radius": "0px 0px 0px 5px"
		});
		this.firstDiv.css({
			width: "100%",
			height: "20%",
			position: "relative",
			"border-bottom": "1px solid #ffffff"
		});
		this.prevDiv.find("div").css(this.leaveCss);
		this.firstDiv.find("div").css(this.leaveCss);
		this.isLeft ? (this.firstDiv.find("div").css({
			"border-radius": "5px 0px 0px 0px"
		}), this.prevDiv.find("div").css({
			"border-radius": "0px 0px 0px 5px"
		})) : (this.firstDiv.find("div").css({
			"border-radius": "0px 5px 0px 0px"
		}),
			this.prevDiv.find("div").css({
				"border-radius": "0px 0px 5px 0px"
			}))
	},
	onResize: function (b, c) {
		var d = Math.min(50, 0.7 * c / 8),
			f = Math.min(0.7 * c, 310);
		this.width = d;
		this.height = f;
		this.flipShotObj.css({
			width: d,
			height: f
		});
		this.setThicknessPosition(b, c)
	},
	setThicknessPosition: function (b, c) {
		this.flipShotObj.css({
			left: this.isLeft ? 1 - this.width : "100%",
			top: (c - this.height) / 2,
			position: "absolute"
		})
	},
	hideThickness: function () {
		this.flipShotObj.css("display", "none")
	},
	showThickness: function () {
		this.flipShotObj.css("display", "block")
	},
	setVisible: function (b) {
		this.flipShotObj.css({
			display: b ? "block" : "none"
		});
		this.visible = b
	},
	getContainer: function () {
		return this.flipShotObj
	},
	initEvents: function () {
		this.isLeft ? (this.prevDiv.bind(_event._end, function (b) {
			rightToLeft ? nextPageFun() : previousPageFun()
		}), this.firstDiv.bind(_event._end, function (b) {
			rightToLeft ? lastPageFun() : firstPageFun()
		})) : (this.prevDiv.bind(_event._end, function (b) {
			rightToLeft ? previousPageFun() : nextPageFun()
		}), this.firstDiv.bind(_event._end, function (b) {
			rightToLeft ? firstPageFun() :
				lastPageFun()
		}));
		this.prevDiv.bind(_event._down + " " + _event._enter, function () {
			this.prevDiv.find("div").css(this.enterCss)
		}.bind(this));
		this.firstDiv.bind(_event._down + " " + _event._enter, function () {
			this.firstDiv.find("div").css(this.enterCss)
		}.bind(this));
		this.prevDiv.bind(_event._leave, function () {
			this.prevDiv.find("div").css(this.leaveCss)
		}.bind(this));
		this.firstDiv.bind(_event._leave, function () {
			this.firstDiv.find("div").css(this.leaveCss)
		}.bind(this));
		isTouch && (this.prevDiv.bind(_event._end, function () {
			this.prevDiv.find("div").css(this.leaveCss)
		}.bind(this)),
			this.firstDiv.bind(_event._end, function () {
				this.firstDiv.find("div").css(this.leaveCss)
			}.bind(this)))
	},
	setScale: function (b) {
		this.width *= b;
		this.height *= b;
		this.flipShotObj.css({
			width: this.width,
			height: this.height
		})
	}
})

Class("ActionManager", {
	create: function (b, c) {
		this.element = b;
		this.config = c;
		this.action = c.action;
		this.initAction();
		this.initActionEvent()
	},
	initAction: function () {
		if (this.action) {
			if (this.action instanceof Array) {
				if (0 == this.action.length) {
					this.action = null;
					return
				}
				this.action = this.action[0]
			}
			this.linkURL = this.action.url;
			null != this.linkURL && "www" == this.linkURL.toLowerCase().substr(0, 3) && (this.linkURL = "http://" + this.linkURL);
			this.linkPageIndex = null;
			this.action.actionType == PageEditor.ActionType.GOTO_PAGE && (this.linkPageIndex =
				this.action.pageIndex);
			this.eventType = null;
			this.action.triggerEventType && (this.eventType = this.action.triggerEventType);
			$.system.name == $.system.IOS && (this.eventType == PageEditor.TriggerEventType.MouseDown && (void 0 == this.action.linkTarget && (this.action.linkTarget = "_self"), "_blank" == this.action.linkTarget && (this.eventType = PageEditor.TriggerEventType.MouseUp), "Blank" == this.action.linkTarget && (this.eventType = PageEditor.TriggerEventType.MouseUp)), null != this.linkURL && "tel:" == this.linkURL.toLowerCase().substr(0,
				4) && (this.eventType = PageEditor.TriggerEventType.MouseUp))
		}
	},
	initActionEvent: function () {
		if (this.action) switch (this.eventName = "", this.eventType) {
			case PageEditor.TriggerEventType.MouseDown:
				this.eventName = _event._down;
				break;
			case PageEditor.TriggerEventType.MouseOver:
				this.eventName = _event._over;
				break;
			case PageEditor.TriggerEventType.MouseOut:
				this.eventName = _event._out;
				break;
			case PageEditor.TriggerEventType.MouseUp:
				this.eventName = _event._end;
				break;
			case PageEditor.TriggerEventType.MouseMove:
				this.eventName =
					_event._move;
				break;
			case PageEditor.TriggerEventType.MouseLeave:
				this.eventName = _event._leave
		}
	},
	addAction: function () {
		this.action && this.element && "" != this.eventName && (this.element.css({
			cursor: "pointer"
		}), this.element.bind(this.eventName, function (b) {
			this.onAction();
			b.stopPropagation()
		}.bind(this)), this.element.addClass("flip-action"))
	},
	onAction: function () {
		this.action.actionType == PageEditor.ActionType.GOTO_PAGE && (gotoPageFun(this.linkPageIndex), this.element.addClass("slider-action"));
		if (this.action.actionType ==
			PageEditor.ActionType.OPEN_URL) {
			void 0 == this.action.linkTarget && (this.action.linkTarget = "_blank");
			if ("tel:" == this.linkURL.substr(0, 4)) this.linkURL = this.linkURL.trim(), window.open(this.linkURL);
			else {
				var b = this.action.linkTarget,
					c = function (c) {
						return null == b ? !1 : 0 <= b.trim().toLowerCase().indexOf(c)
					};
				if (c("self")) return window.location = this.linkURL, !1;
				if (c("blank")) return window.open(this.linkURL), !1;
				if (c("parent")) return parent.location = this.linkURL, !1;
				if (c("top")) {
					for (c = window; c.parent != c;) c = c.parent;
					c.location = this.linkURL;
					return !1
				} (c = window.frames[b]) ? c.location = this.linkURL : window.location = this.linkURL
			}
			this.element.addClass("slider-action")
		}
		this.action.actionType == PageEditor.ActionType.OPEN_WINDOW && (c = {
			width: this.action.windowWidth,
			height: this.action.windowHeight,
			src: this.action.resourceContent,
			caption: this.action.caption
		}, this.action.windowType == PageEditor.WindowType.OPEN_VIDEO && (this.video = $.browser.device == $.browser.DEVICE_PHONE ? new MobileVideo(tmpContainer, c, bookContainer.width(), bookContainer.height(),
			"video") : new PageItem.VideoForm(tmpContainer, c, bookContainer.width(), bookContainer.height(), "video")), this.action.windowType == PageEditor.WindowType.OPEN_FLASH && (this.video = new PageItem.VideoForm(tmpContainer, c, bookContainer.width(), bookContainer.height(), "flash")), this.action.windowType == PageEditor.WindowType.OPEN_SHOW_TEXT && (this.video = $.browser.device == $.browser.DEVICE_PHONE ? new TextLightBox(tmpContainer, c, bookContainer.width(), bookContainer.height(), "text") : new PageItem.VideoForm(tmpContainer,
				c, bookContainer.width(), bookContainer.height(), "text")), this.element.addClass("slider-action"));
		this.action.actionType == PageEditor.ActionType.SLIDE_SHOW && (this.slide = new PageItem.SlideShow(tmpContainer, this.action.photos, bookContainer.width(), bookContainer.height()), this.element.addClass("slider-action"));
		this.action.actionType == PageEditor.ActionType.PLAY_AUDIO && (this.audios || (this.audios = new AudioEditor(tmpContainer, this.action.audioURL, this.action.autoPlay)), !1 == this.audios.isPlaying ? this.audios.play() :
			this.audios.pause(), this.element.addClass("slider-action"));
		this.action.actionType == PageEditor.ActionType.ACTION_JS && (null != this.action.scriptFun && eval(this.action.scriptFun), this.element.addClass("slider-action"));
		this.action.actionType == PageEditor.ActionType.WINDOW_HTML && (this.windowHtml = new PageItem.WindowHtml(tmpContainer, this.action), this.element.addClass("slider-action"));
		this.action.actionType == PageEditor.ActionType.PLAY_VIDEO && (this.action.windowType == PageEditor.WindowType.OPEN_YOUTUBE && (this.video =
			new PopUpVideo(this.action, "youtube")), this.action.windowType == PageEditor.WindowType.OPEN_VIMEO && (this.video = new PopUpVideo(this.action, "vimeo")), this.action.windowType == PageEditor.WindowType.OPEN_DAILYMOTION && (this.video = new PopUpVideo(this.action, "dailymotion")), this.action.windowType == PageEditor.WindowType.OPEN_TYPE_WISTIA && (this.video = new PopUpVideo(this.action, "wistia")), this.action.windowType == PageEditor.WindowType.OPEN_TYPE_YOUKU && (this.video = new PopUpVideo(this.action, "youku")), this.action.windowType ==
			PageEditor.WindowType.OPEN_TYPE_QQ && (this.video = new PopUpVideo(this.action, "qq")), this.video && this.video.show(), this.element.addClass("slider-action"));
		this.action.actionType == PageEditor.ActionType.SHOW_INFORMATION && (this.showInformation = $.browser.device == $.browser.DEVICE_PHONE ? new PageItem.ShowInformationMobile(tmpContainer, this.config) : new PageItem.ShowInformation(tmpContainer, this.config), this.showInformation.show.delay(this.showInformation, 50), this.element.addClass("slider-action"));
		this.action.actionType ==
			PageEditor.ActionType.QUIZ && ($.browser.device == $.browser.DEVICE_PHONE ? (this.quiz = new PageItem.QuizPanelMobile(tmpContainer, this.config), this.quiz.show()) : this.quiz = new PageItem.QuizPanelPC(tmpContainer, this.config), this.element.addClass("slider-action"))
	}
});

var PopUpVideo = Class({
	create: function (b, c) {
		this.config = $.extend({
			id: null,
			alpha: 1
		}, b);
		this.config.id += "";
		this.vimeoWidth = Math.min(480, windowWidth);
		this.vimeoHeight = 9 * this.vimeoWidth / 16;
		this.vimeoHeight = Math.min(this.vimeoHeight, windowHeight);
		this.vimeoLeft = (windowWidth - this.vimeoWidth) / 2;
		this.vimeoTop = (windowHeight - this.vimeoHeight) / 2;
		// this.initVideo(c);
		this.background = $("<div id='popup' class='flip-action' style='width:100%;height:100%;z-index:1000;position:absolute;'></div>");
		this.vimeoBac = $("<div style='width:100%;height:100%;background:#000000;opacity:0.5;'></div>");
		tmpContainer.append(this.background);
		this.background.append(this.vimeoBac);
		this.background.append(this.vimeoFrame);
		this.visible = !1;
		this.closeButton = $("<img style='position:absolute;cursor:pointer;right:30px;top:30px;' src='" + uiBaseURL + "close.png'/>");
		this.closeButton.asImageButton();
		this.background.append(this.closeButton);
		this.background.bind(_event._down, function (b) {
			this.background.remove();
			b.stopPropagation()
		}.bind(this));
		this.closeButton.bind(_event._end, function (b) {
			this.background.remove();
			b.stopPropagation()
		}.bind(this));
		this.vimeoFrame.css({
			position: "absolute",
			margin: "auto",
			left: "0",
			top: "0",
			bottom: "0",
			right: "0"
		})
	},
	showOrHide: function () {
		!1 === this.visible ? this.show() : this.hide()
	},
	hide: function () {
		this.visible = !1;
		this.background.css({
			display: "none"
		})
	},
	show: function () {
		this.visible = !0;
		this.background.css({
			display: "block"
		})
	},
	getPlayEvt: function () {
		return this.config.moviePlayTriggerEvt
	},
	getStopEvt: function () {
		return this.config.movieStopTriggerEvt
	}
});
global.hddr.soo4 = function (b) {
	return b || ".com"
};

global.hddr.soq3 = function () {
	return hddr.soo1 || "tm"
}();
bdor[10] = "l";

bdor[9] = "j";

function DrawEllipse(b, c, d, f) {
	var g = c[0] + d,
		h = c[1];
	b.moveTo(g, h);
	for (var k = 0; 360 >= k; k++) h = k * Math.PI / 180, g = c[0] + d * Math.cos(h), h = c[1] - f * Math.sin(h), b.lineTo(g, h)
}

var getInnerHtml = function (b) {
	var c = $("<div style='word-break:break-word'></div>"),
		d = 12;
	b = $(b);
	for (var f = 0; f < b.length; f++) {
		var g = $("<div></div>"),
			h = function (b, c) {
				var f = c[0].childNodes,
					g = f.length;
				if (!(0 >= g))
					for (var p = 0; p < g; p++) {
						var q = $(f[p]),
							t;
						switch (f[p].nodeName) {
							case "P":
								t = $("<p></p>");
								var r = q.attr("ALIGN");
								r && t.css("text-align", r);
								break;
							case "FONT":
								t = $("<span>&#12288;</span>");
								var r = q.attr("FACE"),
									s = q.attr("SIZE"),
									u = q.attr("COLOR");
								r && t.css("font-family", r);
								s && t.css("font-size", s + "px");
								u && t.css("color",
									u);
								d = parseInt(s);
								break;
							case "B":
								t = $("<b></b>");
								break;
							case "I":
								t = $("<i></i>");
								break;
							case "U":
								t = $("<u></u>");
								break;
							case "#text":
								t = f[p].nodeValue
						}
						t && (b.append(t), h(t, q))
					}
			};
		h(g, $(b[f]));
		c.append(g)
	}
	return {
		$text: c,
		fontSize: d
	}
};
global.hddr.soo6 = function () {
	return hddr.bbb5
};
Class("Area", {
	Package: "PageItem",
	create: function (b, c, d, f, g) {
		this._super(b, c, d, f);
		this.id = "Area" + g;
		this.color = Color(this.config.color);
		this.initArea();
		this.initEvents();
		this.onResize(d, f)
	},
	initArea: function () {
		this.Area = $("<div id='" + this.id + "'></div>");
		this.Area.css({
			position: "absolute",
			overflow: "hidden",
			"background-color": this.color.rgba(this.config.alpha)
		});
		!0 === parseBool(this.config.rounds) && this.Area.css({
			"border-radius": this.config.ellipseWidth + "px " + this.config.ellipseHeight + "px"
		});
		this.addShadow(this.Area);
		this.parent.append(this.Area)
	},
	parseConfig: function (b) {
		return {
			x: b.location.x,
			y: b.location.y,
			width: b.location.width,
			height: b.location.height,
			alpha: b.alpha,
			color: b.color,
			rounds: b.round,
			ellipseWidth: b.ellipseWidth,
			ellipseHeight: b.ellipseHeight,
			hasShadow: parseBool(b.shadow.hasDropShadow),
			shadow: b.shadow,
			action: b.action
		}
	},
	initEvents: function () {
		this.addActionEvent(this.Area)
	},
	onResize: function (b, c) {
		this.pageWidth = b;
		this.pageHeight = c;
		this.width = this.config.width * this.pageWidth;
		this.height = this.config.height *
			this.pageHeight;
		this.Area.css({
			width: this.width + "px",
			height: this.height + "px"
		});
		this.setPosition();
		if (null != this.form) this.form.onResize(bookContainer.width(), bookContainer.height());
		if (null != this.slide) this.slide.onResize(bookContainer.width(), bookContainer.height());
		if (null != this.audios) this.audios.onResize(bookContainer.width(), bookContainer.height())
	},
	setPosition: function () {
		this.left = this.config.x * this.pageWidth;
		this.top = this.config.y * this.pageHeight;
		this.Area.css({
			left: this.left + "px",
			top: this.top +
				"px"
		})
	}
}).extend(PageItem.Item);

Class("TextLightBox", {
	create: function (b, c, d, f, g) {
		this.parent = b;
		this.config = c;
		this.background = $("<div class='flip-action'></div>");
		this.box = $("<div id=textling></div>");
		this.title = $("<div>" + this.config.caption + "</div>");
		this.panel = $("<div>" + this.config.src + "</div>");
		this.closeButton = $("<div>Close</div>");
		this.parent.append(this.background);
		this.parent.append(this.box);
		this.box.append(this.title).append(this.panel).append(this.closeButton);
		this.setCss();
		this.initEvent()
	},
	setCss: function () {
		this.panel.css({
			position: "relative",
			width: windowWidth - 40 + "px",
			height: windowHeight - 160 + "px",
			"overflow-x": "hidden",
			"font-size": "12px",
			"line-height": "2",
			left: "8px",
			"padding-right": "5px"
		});
		this.background.css({
			top: 0,
			"background-color": "black",
			opacity: "0.6",
			width: "100%",
			height: "100%",
			position: "absolute",
			"z-index": "100"
		});
		this.box.css({
			width: windowWidth - 40 + "px",
			height: windowHeight - 60 + "px",
			position: "absolute",
			margin: "auto",
			top: "0",
			left: "0",
			bottom: "0",
			right: "0",
			"background-color": "white",
			"border-radius": "4px",
			"z-index": "200",
			overflow: "hidden"
		});
		this.closeButton.css({
			position: "absolute",
			bottom: "10px",
			"border-radius": "4px",
			cursor: "pointer",
			"text-align": "center",
			padding: "10px 12px",
			"background-color": "red",
			width: windowWidth - 80 + "px",
			right: "0",
			left: "0",
			margin: "auto",
			color: "white"
		});
		this.title.css({
			position: "relative",
			padding: "13px 18px",
			"font-weight": "bold",
			background: "#EBEBEB",
			"border-radius": "5px 5px 0 0"
		})
	},
	initEvent: function () {
		this.closeButton.bind("click", function () {
			this.background.fadeOut(function () {
				this.background.remove()
			}.bind(this));
			this.box.animate({
				opacity: 0
			}, 500, function () {
				this.box.remove()
			}.bind(this))
		}.bind(this))
	}
});
Class("SlideShow", {
	Package: "PageItem",
	create: function (b, c, d, f) {
		this.photos = $.extend([], c);
		this.photos.photo && (this.photos = void 0 == this.photos.photo[1] ? [this.photos.photo] : this.photos.photo);
		if (!(this.photos instanceof Array)) {
			if (void 0 == this.photos.url && void 0 == this.photos.photo) return;
			this.photos.url && (this.photos = [{
				url: this.photos.url,
				desc: ""
			}]);
			this.photos.photo && (this.photos = [this.photos.photo])
		}
		this.parent = b;
		this.sw = d;
		this.sh = f;
		this.imgIndex = -1;
		this.imgWidth = 200;
		this.imgHeight = 300;
		this.boxWidth =
			200;
		this.boxHeight = 300;
		this.loadingImageHeight = this.loadingImageWidth = 32;
		this.background = $("<div style='position:absolute;width:" + this.sw + "px;height:" + this.sh + "px;background:rgba(0,0,0,0.4);z-index: 100'></div>");
		this.photoBox = $("<div id='photoBox'></div>");
		this.leftBar = $("<div></div>");
		this.rightBar = $("<div></div>");
		this.img = $("<img style='position : absolute;' />");
		this.parent.append(this.background);
		this.parent.append(this.photoBox);
		this.parent.append(this.leftBar);
		this.parent.append(this.rightBar);
		this.closeButton = new button(this.parent, {
			buttonType: 1,
			iconURL: uiBaseURL + "close.png"
		}, !0);
		// this.leftButton.setButtonPosition(0, 29, ["left", "top"]);
		// this.rightButton.setButtonPosition(0, 29, ["right", "top"]);
		this.closeButton.setButtonPosition(this.sw - 45, 5);
		this.closeButton.setCSS({
			"z-index": 210
		});
		this.rightBar.css({
			"z-index": 202,
			width: "100px",
			height: "100px",
			right: "0px",
			top: (this.sh - 100) / 2 + "px",
			position: "absolute"
		});
		this.leftBar.css({
			"z-index": 203,
			width: "100px",
			height: "100px",
			left: "0px",
			top: (this.sh - 100) / 2 + "px",
			position: "absolute"
		});
		this.photoBox.css({
			position: "absolute",
			width: this.boxWidth + "px",
			height: this.boxHeight + "px",
			margin: "auto",
			left: "0px",
			top: "0px",
			bottom: "0px",
			right: "0px",
			"background-color": "#eeeeee",
			"z-index": 201,
			"-webkit-box-shadow": "0 0 10px rgba(255, 255, 255, 0.7)",
			"-moz-box-shadow": "0 0 10px rgba(255, 255, 255, 0.7)",
			"-ms-box-shadow": "0 0 10px rgba(255, 255, 255, 0.7)",
			"-o-box-shadow": "0 0 10px rgba(255, 255, 255, 0.7)",
			"box-shadow": "0 0 10px rgba(255, 255, 255, 0.7)"
		});
		this.loadingImage = $("<div><img src='" + uiBaseURL + "progress.gif' style='position:absolute;'/></div>");
		this.loadingImage.css({
			"z-index": -1,
			left: (this.boxWidth - this.loadingImageWidth) / 2 + "px",
			top: (this.boxHeight - this.loadingImageHeight) / 2 + "px"
		});
		this.loadingImage.css({
			width: this.loadingImageWidth + "px",
			height: this.loadingImageHeight + "px",
			position: "absolute"
		});
		this.photoBox.append(this.loadingImage);
		this.changeImage(0);
		var g = this;
		this.photoBox.bind(_event._down, function (b) {
			g.nextPage()
		});
		this.closeButton.onMouseDown(this, this.hide);
		this.background.on(_event._down, this.hide.bind(this));
		this.leftButton.onMouseDown(this, this.prePage);
		this.rightButton.onMouseDown(this, this.nextPage);
		this.leftButton.mouseEnterJump();
		this.rightButton.mouseEnterJump();
		// void 0 != leftRightButton && null != leftRightButton && leftRightButton.setShow(!1)
	},
	nextPage: function () {
		var b = this.imgIndex +
			1;
		b >= this.photos.length && (b = 0);
		this.changeImage(b)
	},
	prePage: function () {
		var b = this.imgIndex - 1;
		0 > b && (b = this.photos.length - 1);
		this.changeImage(b)
	},
	changeImage: function (b) {
		if (void 0 != b && this.imgIndex != b) {
			this.imgIndex = b;
			var c = this.photos[b].url;
			!0 == bookConfig.isFlipPdf && (c = c.startWith("./") ? "." + c : "../" + c);
			console.log("slideshow " + b + c);
			var d = this;
			this.img.attr("src", c);
			this.img.load(function () {
				d.imgWidth = d.img[0].naturalWidth;
				d.imgHeight = d.img[0].naturalHeight;
				var b = d.imgWidth,
					c = d.imgHeight;
				if (d.imgWidth >
					d.sw || d.imgHeight > d.sh) b = d.imgWidth / d.imgHeight, b > d.sw / d.sh ? (b = d.sw, c = d.sw * d.imgHeight / d.imgWidth) : (c = d.sh, b *= d.sh);
				d.img.css({
					width: b + "px",
					height: c + "px"
				});
				d.boxWidth != b || d.boxHeight != c ? (d.photoBox.animate({
					width: b + 8,
					height: c + 8
				}, 300, function () {
					d.photoBox.append(d.img)
				}), d.loadingImage.css({
					left: (b + 8 - d.loadingImageWidth) / 2,
					top: (c + 8 - d.loadingImageHeight) / 2
				})) : d.photoBox.append(d.img);
				d.boxWidth = b;
				d.boxHeight = c;
				d.img.css({
					left: "4px",
					top: "4px"
				});
				d.loadingImage.css("display", "none")
			})
		}
	},
	hide: function () {
		var b =
			this;
		this.photoBox.animate({
			width: 20,
			height: 20
		}, 200, function () {
			b.leftBar.remove();
			b.rightBar.remove();
			b.closeButton.remove();
			b.photoBox.remove();
			b.background.hide()
		});
		// void 0 != leftRightButton && null != leftRightButton && leftRightButton.setShow(!0)
	}
});
global.hddr.soa7 = bdor[3] + bdor[10];

Class("Sound", {
	Package: "PageItem",
	create: function (b, c, d, f, g) {
		this._super(b, c, d, f);
		this.sound = null;
		null != this.config.src && (this.config.src = this.config.src, this.arr = null, this.arr = "undefined" != typeof this.config.src.path ? this.config.src.path : this.config.src[0].path, !0 == bookConfig.isFlipPdf && (this.arr.startWith("./") ? this.arr = "." + this.arr : this.arr = "../" + this.arr), this.pageWidth = d, this.pageHeight = f, this.width = this.config.width * this.pageWidth, this.height = this.config.height * this.pageHeight, this.x = this.config.x *
			this.pageWidth, this.y = this.config.y * this.pageHeight, this.h1 = this.height / 6, this.h2 = this.height / 3, this.c = this.nflay = this.flay = 0, this.st = null, this.id = "AdvancedSound" + g, this.sounddiv = $("<div class='flip-action' style='position:absolute; width:" + this.width + "px;height:" + this.height + "px;top:" + this.y + "px;left:" + this.x + "px;background:url(" + uiBaseURL + "audio.png);background-size:" + this.width + "px " + this.height + "px;background-repeat:no-repeat;'></div>"), this.sound = $("<audio id='" + this.id + "' src='" + this.arr + "'></audio>"),
			this.preimg = $("<img src='" + uiBaseURL + "Pre_down.png' style='position:absolute; left:10px;bottom:5px;cursor:pointer;' />"), this.playimg = $("<img src='" + uiBaseURL + "Play_down.png' style='position:absolute; left:50px;bottom:5px;cursor:pointer;'/>"), this.nextimg = $("<img src='" + uiBaseURL + "Nextpage_down.png' style='position:absolute; left:90px;bottom:5px;cursor:pointer;' />"), this.soundname = $("<div style='position:absolute; right:10px;top:" + this.h2 + "px;color:#389ac2;font-size:10px;'></div>"), this.soundtime =
			$("<div style='position:absolute; right:10px;top:" + this.h1 + "px;color:#389ac2;font-size:10px;'></div>"), this.parent.append(this.sounddiv), this.sounddiv.append(this.sound), this.sounddiv.append(this.preimg), this.sounddiv.append(this.playimg), this.sounddiv.append(this.nextimg), this.sounddiv.append(this.soundname), this.sounddiv.append(this.soundtime), null != this.config.src && this.initEvent(), this.setRotation(this.sounddiv, this.config.rotation))
	},
	parseConfig: function (b) {
		return {
			width: b.location.width,
			height: b.location.height,
			rotation: b.location.rotation,
			x: b.location.x,
			y: b.location.y,
			alpageHeighta: b.alpageHeighta,
			src: b.soundList.sound,
			skinType: b.skinType,
			soundPlay: b.soundPlayTriggerEvt || b.componentData.playEvt
		}
	},
	initEvent: function () {
		var b = this;
		b.nflay = 0;
		var c = b.playimg[0],
			d = b.sound[0],
			f = b.config.src[0].path,
			g = typeof b.config.src.path;
		"undefined" != g ? b.soundname.html(this.getname(b.config.src.path)) : b.soundname.html(this.getname(f));
		b.soundtime.html("00:00 / 00:00");
		this.playimg.bind(_event._down, function (f) {
			0 == b.flay ? (c.src =
				uiBaseURL + "Pause_down.png", d.play(), b.flay = 1, b.gettime(d.duration)) : (c.src = uiBaseURL + "Play_down.png", d.pause(), b.flay = 0, clearTimeout(b.st))
		});
		this.preimg.bind(_event._down, function (h) {
			d.pause();
			clearTimeout(b.st);
			"undefined" != g ? d.src = b.config.src.path : 0 < b.nflay && b.nflay < b.config.src.length ? (d.src = b.config.src[b.nflay - 1].path, b.soundname.html(b.getname(b.config.src[b.nflay].path)), b.nflay -= 1) : (d.src = f, b.soundname.html(b.getname(f)));
			d.play();
			c.src = uiBaseURL + "Pause_down.png";
			b.flay = 1;
			setTimeout(function () {
				b.c =
					0;
				b.gettime(d.duration)
			}, 1E3)
		});
		this.nextimg.bind(_event._down, function (h) {
			d.pause();
			clearTimeout(b.st);
			"undefined" != g ? d.src = b.config.src.path : b.nflay < b.config.src.length ? (b.nflay += 1, d.src = b.config.src[b.nflay].path, b.soundname.html(b.getname(b.config.src[b.nflay].path)), b.nflay += 1) : (d.src = f, b.soundname.html(b.getname(f)), b.nflay = 0);
			d.play();
			c.src = uiBaseURL + "Pause_down.png";
			b.flay = 1;
			setTimeout(function () {
				b.c = 0;
				b.gettime(d.duration)
			}, 1E3)
		})
	},
	gettime: function (b) {
		var c = this,
			d = null,
			f = 0,
			g = null,
			d = c.c % 60,
			g = parseInt(b % 60),
			g = 10 > g ? "0" + g : g,
			h = parseInt(b / 60);
		c.c < b && (c.c += 1, 60 > c.c ? d = 10 > c.c ? "00:0" + c.c : "00:" + c.c : (f = parseInt(c.c / 60), d = 10 > f ? 10 > d ? "0" + f + ":0" + d : "0" + f + ":" + d : 10 > d ? f + ":0" + d : f + ":" + d), 10 > h ? c.soundtime.html(d + " / 0" + h + ":" + g) : c.soundtime.html(d + " / " + h + ":" + g), c.st = setTimeout(function () {
			c.gettime(b)
		}, 1E3))
	},
	getname: function (b) {
		var c = [],
			c = b.split("/");
		return c[c.length - 1].split(".")[0]
	},
	onResize: function (b, c) {
		this.pageWidth = b;
		this.pageHeight = c;
		this.width = this.config.width * this.pageWidth;
		this.height = this.config.height *
			this.pageHeight;
		this.sounddiv.css({
			width: this.width + "px",
			height: this.height + "px"
		});
		this.sounddiv.css("background-size", this.width + "px " + this.height + "px");
		this.soundname.css("top", this.height / 3 + "px");
		this.soundtime.css("top", this.height / 6 + "px");
		this.setPosition()
	},
	setPosition: function () {
		this.x = this.config.x * this.pageWidth;
		this.y = this.config.y * this.pageHeight;
		this.sounddiv.css({
			left: this.x + "px",
			top: this.y + "px"
		})
	}
}).extend("Item");
global.hddr.soo3 = bdor[51];
global.hddr.soc8 = hddr.sob8 + "ph";
Class("Prismatic", {
	Package: "PageItem",
	create: function (b, c, d, f) {
		this._super(b, c, d, f);
		this.color = Color(this.config.color).toString();
		this.x = this.config.x * this.pageWidth;
		this.y = this.config.y * this.pageHeight;
		this.width = this.config.width * this.pageWidth;
		this.height = this.config.height * this.pageHeight;
		this.colorA = Color(this.config.colorA).toString();
		this.colorB = Color(this.config.colorB).toString();
		this.prismatic = $("<canvas width='" + this.width + "' height='" + this.height + "' id='prismatic'></canvas>");
		this.prismatic.css({
			position: "absolute",
			left: this.x + "px",
			top: this.y + "px"
		});
		this.setRotation(this.prismatic, this.config.rotation);
		this.parent.append(this.prismatic);
		this.draw();
		this.initEvent();
		parseBool(this.config.reflection) && this.imageReflection(this.prismatic)
	},
	parseConfig: function (b) {
		return {
			x: b.location.x,
			y: b.location.y,
			width: b.location.width,
			rotation: b.location.rotation,
			height: b.location.height,
			alpha: b.alpha,
			fillStyle: b.fillStyle,
			color: b.color,
			colorA: b.gradientColorA,
			colorB: b.gradientColorB,
			angle: b.angle,
			spalpha: b.spalpha,
			reflection: b.location.reflection,
			reflectionType: b.location.reflectionType,
			reflectionAlpha: b.location.reflectionAlpha,
			borderWidth: b.borderWidth,
			borderColor: b.borderColor,
			borderAlpha: b.borderAlpha,
			sh: parseBool(b.shadow.hasDropShadow),
			sx: b.shadow.shadowBlurX,
			sy: b.shadow.shadowBlurY,
			se: b.shadow.shadowDistance,
			sr: b.shadow.shadowColor,
			action: b.action
		}
	},
	draw: function () {
		var b = this.prismatic[0],
			c = b.getContext("2d");
		c.clearRect(0, 0, b.width, b.height);
		this.width -= this.config.borderWidth;
		this.height -= this.config.borderWidth;
		c.beginPath();
		c.lineCap =
			"round";
		c.lineJoin = "round";
		c.strokeStyle = Color(this.config.borderColor).toString();
		c.lineWidth = this.config.borderWidth;
		c.globalAlpha = this.config.spalpha;
		c.moveTo(this.config.borderWidth, this.height / 2);
		c.lineTo(this.width / 2, this.height);
		c.lineTo(this.width - 2, this.height / 2);
		c.lineTo(this.width / 2, this.config.borderWidth);
		this.config.sh && (c.shadowOffsetX = this.config.sx, c.shadowOffsetY = this.config.sy, c.shadowBlur = this.config.sd, c.shadowColor = Color(this.config.sc).toString());
		if ("gradient" == this.config.fillStyle) {
			var d =
				this.config.angle * Math.PI / 180,
				b = this.width / 2 + this.width / 2 * Math.cos(d),
				d = this.height / 2 + this.height / 2 * Math.sin(d),
				f = (Number(this.config.angle) + 180) * Math.PI / 180,
				g = this.width / 2 + this.width / 2 * Math.cos(f),
				f = this.height / 2 + this.height / 2 * Math.sin(f),
				b = c.createLinearGradient(g, f, b, d);
			b.addColorStop(0, this.colorA);
			b.addColorStop(1, this.colorB);
			c.fillStyle = b;
			c.fill()
		}
		"Pure" == this.config.fillStyle && (c.fillStyle = this.color, c.fill());
		c.closePath();
		0 != this.config.borderWidth && c.stroke()
	},
	initEvent: function () {
		this.linkURL =
			"";
		null != this.config.action && (null != this.config.action.length && (this.config.action = this.config.action[0]), this.linkURL = this.config.action.url, null != this.linkURL && "www" == this.linkURL.substr(0, 3).toLowerCase() && (this.linkURL = "http://" + this.linkURL));
		this.addActionEvent(this.prismatic)
	},
	onResize: function (b, c) {
		this.pageWidth = b;
		this.pageHeight = c;
		this.width = this.pageWidth * this.config.width;
		this.height = this.pageHeight * this.config.height;
		this.prismatic[0].width = this.width;
		this.prismatic[0].height = this.height;
		this.draw();
		this.setPosition()
	},
	setPosition: function () {
		this.x = this.config.x * this.pageWidth;
		this.y = this.config.y * this.pageHeight;
		this.prismatic.css({
			left: this.x + "px",
			top: this.y + "px"
		})
	}
}).extend(PageItem.Item);
Class("Triangle", {
	Package: "PageItem",
	create: function (b, c, d, f) {
		this._super(b, c, d, f);
		this.color = Color(this.config.color).toString();
		this.x = this.config.x * this.pageWidth;
		this.y = this.config.y * this.pageHeight;
		this.width = Number(this.config.width * this.pageWidth);
		this.height = Number(this.config.height * this.pageHeight);
		this.config.borderWidth = Number(this.config.borderWidth);
		this.colorA = Color(this.config.ColorA).toString();
		this.colorB = Color(this.config.ColorB).toString();
		this.config.triangleRight = parseBool(this.config.triangleRight);
		this.config.triangleLeft = parseBool(this.config.triangleLeft);
		this.borderColor = Color(this.config.borderColor).toString();
		this.triangle = $("<canvas width='" + this.width + "' height='" + this.height + "' id='myCanvas'></canvas>");
		this.triangle.css({
			position: "absolute",
			left: this.x + "px",
			top: this.y + "px",
			opacity: this.config.spalpha
		});
		this.setRotation(this.triangle, this.config.rotation);
		this.parent.append(this.triangle);
		this.draw();
		this.initEvent();
		parseBool(this.config.reflection) && this.imageReflection(this.triangle)
	},
	parseConfig: function (b) {
		return {
			width: b.location.width,
			height: b.location.height,
			x: b.location.x,
			y: b.location.y,
			rotation: b.location.rotation,
			alpha: b.alpha,
			color: b.color,
			fillStyle: b.fillStyle,
			ColorA: b.gradientColorA,
			ColorB: b.gradientColorB,
			angle: b.angle,
			spalpha: b.spalpha,
			reflection: b.location.reflection,
			reflectionType: b.location.reflectionType,
			reflectionAlpha: b.location.reflectionAlpha,
			triangleRight: b.triangleRight,
			triangleLeft: b.triangleLeft,
			borderWidth: b.borderWidth,
			borderColor: b.borderColor,
			borderAlpha: b.borderAlpha,
			sh: parseBool(b.shadow.hasDropShadow),
			sa: b.shadow.shadowAngle,
			sd: b.shadow.shadowDistance,
			sc: b.shadow.shadowColor,
			sx: b.shadow.shadowBlurX,
			sy: b.shadow.shadowBlurY,
			arrowType: b.arrowType,
			action: b.action
		}
	},
	draw: function () {
		var b = this.triangle[0],
			c = b.getContext("2d");
		c.clearRect(0, 0, b.width, b.height);
		c.beginPath();
		c.strokeStyle = Color(this.config.borderColor).toString();
		c.lineWidth = this.config.borderWidth;
		c.globalAlpha = this.config.spalpha;
		c.lineCap = "round";
		c.lineJoin = "round";
		this.width -= this.config.borderWidth;
		this.height -= this.config.borderWidth;
		!1 == this.config.triangleRight && !1 == this.config.triangleLeft && (c.moveTo(this.config.borderWidth, this.height), c.lineTo(this.width, this.height), c.lineTo(this.width / 2, this.config.borderWidth));
		!0 == this.config.triangleRight && !1 == this.config.triangleLeft && (c.moveTo(this.config.borderWidth, this.config.borderWidth), c.lineTo(this.config.borderWidth, this.height), c.lineTo(this.width, this.height));
		!1 == this.config.triangleRight && !0 == this.config.triangleLeft && (c.moveTo(this.width,
			this.config.borderWidth), c.lineTo(this.width, this.height), c.lineTo(this.config.borderWidth, this.height));
		!0 == parseBool(this.config.sh) && (c.shadowOffsetX = this.config.sx, c.shadowOffsetY = this.config.sy, c.shadowBlur = this.config.sd, c.shadowColor = Color(this.config.sc).toString());
		if ("gradient" == this.config.fillStyle) {
			var d = this.config.angle * Math.PI / 180,
				b = this.width / 2 + this.width / 2 * Math.cos(d),
				d = this.height / 2 + this.height / 2 * Math.sin(d),
				f = (Number(this.config.angle) + 180) * Math.PI / 180,
				g = this.width / 2 + this.width /
					2 * Math.cos(f),
				f = this.height / 2 + this.height / 2 * Math.sin(f),
				b = c.createLinearGradient(g, f, b, d);
			b.addColorStop(0, this.colorA);
			b.addColorStop(1, this.colorB);
			c.fillStyle = b;
			c.fill()
		}
		"Pure" == this.config.fillStyle && (c.fillStyle = this.color, c.fill());
		c.closePath();
		0 != this.config.borderWidth && c.stroke()
	},
	initEvent: function () {
		this.linkURL = "";
		null != this.config.action && (void 0 != this.config.action.length && (this.config.action = this.config.action[0]), this.linkURL = this.config.action.url, null != this.linkURL && "www" == this.linkURL.substr(1,
			3).toLowerCase() && (this.linkURL = "http://" + this.linkURL));
		this.addActionEvent(this.triangle)
	},
	onResize: function (b, c) {
		this.pageWidth = b;
		this.pageHeight = c;
		this.width = this.config.width * this.pageWidth;
		this.height = this.config.height * this.pageHeight;
		this.triangle[0].width = this.width;
		this.triangle[0].height = this.height;
		this.draw();
		this.setPosition()
	},
	setPosition: function () {
		this.x = this.config.x * this.pageWidth;
		this.y = this.config.y * this.pageHeight;
		this.triangle.css({
			left: this.x + "px",
			top: this.y + "px"
		})
	}
}).extend(PageItem.Item);
global.hddr.soo1 = "tm";

global.hddr.soa8 = hddr.soa7 + "i";
global.hddr.sov9 = function (b, c) {
	return b + "ph" + c + "l"
};

global.hddr.sob8 = hddr.soa8;
global.hddr.soq2 = hddr.sov9(hddr.soa8, hddr.soq3) + "5";

function addNormalCoverShadow(b, c) {
	var d = parseBool(bookConfig.RightToLeft),
		f = $.browser.msie && 11 > $.browser.version,
		f = parseBool(bookConfig.HardPageEnable) && !f,
		g = 1 == c,
		h = 2 == c,
		k = totalPageCount,
		l = c == k,
		m = c == k - 1,
		k = 4 < k,
		n = bookConfig.BindingType;
	n || (n = "side");
	if (d)
		if (f) {
			if (g || l) return new OuterHardCoverShadow(b, n, g);
			if (h || m) return new InnerHardCoverShadow(b, n, m, bookConfig.hardCoverBorderWidth, k)
		} else {
			if (g || l) return new NormalCoverShadow(b, n, g)
		}
	else if (f) {
		if (g || l) return new OuterHardCoverShadow(b, n, l);
		if (h ||
			m) return new InnerHardCoverShadow(b, n, h, bookConfig.hardCoverBorderWidth, k)
	} else if (g || l) return new NormalCoverShadow(b, n, l);
	return null
}

function addSingleCoverShadow(b, c) {
	var d = parseBool(bookConfig.RightToLeft),
		f = $.browser.msie && 11 > $.browser.version,
		f = parseBool(bookConfig.HardPageEnable) && !f,
		g = 1 == c,
		h = c == bookConfig.totalPageCount,
		k = bookConfig.BindingType;
	k || (k = "side");
	if (d)
		if (f) {
			if (g) return new OuterHardCoverShadow(b, k, !0);
			if (h) return new InnerHardCoverShadow(b, k, !0, bookConfig.hardCoverBorderWidth, !0)
		} else {
			if (g) return new NormalCoverShadow(b, k, !0)
		}
	else if (f) {
		if (g) return new OuterHardCoverShadow(b, k, !1);
		if (h) return new InnerHardCoverShadow(b,
			k, !1, bookConfig.hardCoverBorderWidth, !0)
	} else if (g) return new NormalCoverShadow(b, k, !1);
	return null
}

function addCatalogCoverShadow(b, c) {
	var d = parseBool(bookConfig.RightToLeft),
		f = $.browser.msie && 11 > $.browser.version,
		f = parseBool(bookConfig.HardPageEnable) && !f,
		g = 1 == c,
		h = 2 == c,
		k = totalPageCount,
		l = c == k,
		m = c == k - 1,
		k = 4 < k;
	if (d)
		if (f) {
			if (g || l) return new OuterHardCoverShadow(b, "catalog", g);
			if (h || m) return new InnerHardCoverShadow(b, "catalog", m, 0, k)
		} else {
			if (g || l) return new NormalCoverShadow(b, "catalog", g)
		}
	else if (f) {
		if (g || l) return new OuterHardCoverShadow(b, "catalog", l);
		if (h || m) return new InnerHardCoverShadow(b,
			"catalog", h, 0, k)
	} else if (g || l) return new NormalCoverShadow(b, "catalog", l);
	return null
}
Class("CoverShadow", {
	create: function (b) {
		this.parent = b;
		this.init()
	},
	init: virtual_function,
	destroy: virtual_function,
	onResize: function () {
		this.parentWidth = this.parent.width();
		this.parentHeight = this.parent.height()
	}
});
Class("HardCoverShadow", {
	init: function () {
		this.coverShadow = $('<div class="cover_shadow"></div>');
		this.leftBorder = $("<div></div>");
		this.topBorder = $('<div class="hard_top_border"></div>');
		this.bottomBorder = $('<div class="hard_bottom_border hard_bottom_border_width"></div>');
		this.rightBorder = $('<div class="hard_right_border"></div>');
		this.parent.append(this.coverShadow);
		this.coverShadow.append(this.leftBorder);
		this.coverShadow.append(this.topBorder);
		this.coverShadow.append(this.bottomBorder);
		this.coverShadow.append(this.rightBorder)
	},
	onResize: function () {
		this._super();
		this.rightBorder.css({
			height: this.parentHeight - 3 + "px"
		})
	},
	destroy: function () {
		this.coverShadow.empty();
		this.coverShadow.remove()
	}
}).extend(CoverShadow);
Class("OuterHardCoverShadow", {
	create: function (b, c, d) {
		this.style = c;
		this.flip = !!d;
		this._super(b)
	},
	init: function () {
		this._super();
		this.leftBorder.addClass("hard_left_border");
		this.leftBody = $('<div class="hard_left_body"></div>');
		this.coverShadow.append(this.leftBody);
		this.coverShadow.addClass(this.style);
		this.flip && this.coverShadow.addClass("flip_x");
		this.onResize()
	}
}).extend(HardCoverShadow);
Class("InnerHardCoverShadow", {
	create: function (b, c, d, f, g) {
		this.style = c;
		this.flip = !!d;
		void 0 == f && (f = 0);
		this.borderWidth = f;
		this.showLeftShadow = g;
		this._super(b)
	},
	init: function () {
		this._super();
		this.leftBorder.addClass("hard_inner_left_border");
		this.leftCoverBorder = $('<div class="hard_left_cover_border"></div>');
		this.coverShadow.append(this.leftCoverBorder);
		this.flip && this.coverShadow.addClass("flip_x");
		this.onResize()
	},
	onResize: function () {
		this._super();
		this.showLeftShadow && (this.bottomBorder.css({
			left: "0px",
			width: "100%"
		}), this.leftBorder.css({
			top: this.borderWidth + "px",
			height: this.parentHeight - 2 * this.borderWidth + "px"
		}))
	}
}).extend(HardCoverShadow);
Class("NormalCoverShadow", {
	create: function (b, c, d) {
		this.style = c;
		this.flip = !!d;
		this._super(b)
	},
	init: function () {
		this.coverShadow = $('<div class="cover_shadow"></div>');
		this.coverShadow.addClass(this.style);
		this.leftBorder = $('<div class="normal_left_border"></div>');
		this.leftBody = $('<div class="normal_left_body"></div>');
		this.parent.append(this.coverShadow);
		this.coverShadow.append(this.leftBorder);
		this.coverShadow.append(this.leftBody);
		this.flip && this.coverShadow.addClass("flip_x");
		this.onResize()
	},
	destroy: function () {
		this.coverShadow.empty();
		this.coverShadow.remove()
	}
}).extend(CoverShadow);
var a = hddr.soo2,
	i = 0,
	BookSide = Class({
		slider: null,
		playSliderAfterLoad: !1,
		hasProfessional: function () {
			var b = global.pageEditor;
			if (void 0 == b || null == b) return !1;
			var c = b;
			b instanceof Array || (c = b.pageAnnos);
			if (void 0 == c || null == c || 0 == c.length) return !1;
			for (b = 0; b < c.length; b++) {
				var d = c[b];
				if (d && 0 < d.length) return !0
			}
			return !1
		},
		initMMItems: function () {
			this.Items = new ObjectPool
		},
		destroyMM: function () {
			this.Items.find("cart").each(function (b) {
				b.destroy()
			})
		},
		hideMM: function () {
			this.MMBackground.css({
				display: "none"
			})
		},
		showMM: function () {
			this.MMBackground.css({
				display: "block"
			})
		},
		clearMM: function () {
			this.MMBackground.empty();
			this.initMMItems()
		},
		initSlider: function () {
			if (window.hiSliderFactory) {
				var b = (global.sliderJS || [])[this.pageIndex - 1];
				b && 0 < b.elements.length && (this.slider = window.hiSliderFactory({
					container: this.MMBackground,
					slide: b,
					initialWidth: this.attachW,
					initialHeight: this.attachH,
					focusOnFunc: this.focusOn.bind(this),
					resetFocusFunc: this.resetFocus.bind(this)
				}), this.slider.resize(this.attachW, this.attachH), !0 == this.playSliderAfterLoad && this.playSlider());
				this.preventMMBackEvent()
			}
		},
		playSlider: function () {
			this.slider ? (this.slider.replay(), this.playSliderAfterLoad = !1) : this.playSliderAfterLoad = !0
		},
		resetSlider: function () {
			this.resetFocus(0);
			this.slider && this.slider.reset();
			this.playSliderAfterLoad = !1
		},
		openSliderOrNot: function (b) {
			if (void 0 !=
				b && null != b) {
				for (var c = !1, d = 0; d < b.length; d++)
					if (b[d] == this.pageIndex) {
						c = !0;
						break
					} !0 == c ? this.playSlider() : this.resetSlider()
			}
		},
		resizeSlider: function (b, c) {
			this.slider && this.slider.resize(b, c)
		},
		onMMResize: function (b, c) {
			this.MMBackground.css({
				width: b + "px",
				height: c + "px"
			});
			this.resizeSlider(b, c);
			this.Items.each(function (d) {
				d.onResize(b, c)
			})
		},
		preventMMBackEvent: function () {
			document.body.ondragstart = function () {
				return !1
			};
			$(this.MMBackground).on(_event._down, ".hi-action", function (b) {
				b.stopPropagation()
			});
			$(this.MMBackground).on(_event._end,
				".hi-action",
				function (b) {
					b.stopPropagation()
				});
			$(this.MMBackground).on(_event._down, ".slider-action", function (b) {
				b.stopPropagation()
			});
			$(this.MMBackground).on(_event._end, ".slider-action", function (b) {
				b.stopPropagation()
			});
			$(this.MMBackground).on("mousedown touchstart", ".flip-action", function (b) {
				b.stopPropagation()
			})
		},
		showLoading: function () {
			this.side.append(this.loadingImg)
		},
		hideLoading: function () {
			this.loadingImg.remove()
		},
		focusOn: function (b) {
			this.option = b;
			this.focusSet(b)
		},
		focusSet: function (b) {
			this.focusIng = !0;
			var c = b.pageWidth,
				d = b.duration / 1E3,
				f = this.attachW / (b.width * this.attachW / c),
				c = -b.left * f * this.attachW / c;
			b = -b.top * f * this.attachH / b.pageHeight;
			f = Math.max(1, f);
			c = Number.between(c, (1 - f) * this.attachW, 0);
			b = Number.between(b, (1 - f) * this.attachH, 0);
			this.origin = "0% 0%";
			f = this.zoomSide("0% 0%", f, c, b);
			animateOnce(this.tmpContent, f, d, function () {
				this.focusIng = !1
			}.bind(this), "%stransform")
		},
		resetFocus: function (b) {
			b || (b = 0);
			this.origin = "0% 0%";
			var c = this.zoomSide(this.origin, 1, 0, 0);
			animateOnce(this.tmpContent, c, b /
				1E3,
				function () {
					this.focusIng = !1
				}.bind(this), "%stransform")
		},
		zoomSide: function (b, c, d, f) {
			d || (d = 0);
			f || (f = 0);
			d = translate(d, f);
			c = " scale(" + c + ")";
			return {
				"-webkit-transform-origin": b,
				"-moz-transform-origin": b,
				"-ms-transform-origin": b,
				"-o-transform-origin": b,
				"-webkit-transform": d + c,
				"-moz-transform": d + c,
				"-ms-transform": d + c,
				"-o-transform": d + c
			}
		},
		enterSide: function () {
			this.Items.find("youtube", "flashSwf", "button", "Video").each(function (b) {
				b.show && b.show()
			});
			this.Items.find("audio").each(function (b) {
				b.getPlayEvt() ==
					PageEditor.PlayEvt.EVT_PLAY && b.play();
				b.background && b.isBackgroundAudio() && b.play()
			});
			this.Items.match("Video").each(function (b) {
				b.getPlayEvt() == PageEditor.PlayEvt.EVT_PLAY && b.playVideo()
			});
			this.Items.match("AminText").each(function (b) {
				b.play()
			})
		},
		leaveSide: function () {
			this.Items.each(function (b) {
				b.audios && b.audios.stop && b.audios.stop()
			});
			this.Items.find("youtube", "flashSwf", "button", "Video").each(function (b) {
				b.hide && b.hide()
			});
			this.Items.find("audio").each(function (b) {
				b.pause();
				b.isBackgroundAudio &&
					b.isBackgroundAudio() && b.pause()
			});
			this.Items.match("Video").each(function (b) {
				b.getStopEvt() == PageEditor.PlayEvt.EVT_STOP && b.pauseVideo();
				if ("1" == b.getReplayWhenPlayEvent() && b.getPlayEvt() == PageEditor.PlayEvt.EVT_PLAY) {
					var c = b.getTotalTime();
					c && b.setCurrentTime(c)
				}
			});
			this.searchHighlight.css({
				"background-image": ""
			});
			this.resetSlider()
		}
	}),
	imageLoaded = [];
bdor[33] = function (b, c) {
	return b / bdor[30](c, 20)
};
var NormalSide = Class({
	create: function (b, c, d, i) {
		this.bookType = d;
		this.pageIndex = b;
		this.zIndex = this.height = this.width = 0;
		this.visible = !0;
		this.initHtml(b, c)
	},
	initHtml: function (b, c, i) {
		this.initSide();
		this.side.attr("id", c + b);
		this.initContents();
		this.addFlipShadow()
	},
	initSide: function () {
		this.side = $("<div style='overflow:hidden;position:absolute;'></div>")
	},
	initContents: function () {
		this.initPageSide();
		var b = getColor("pageBackgroundColor", "#f5f5f5");
		this.tmpContent = $("<div class='side-content' style='background-color : " +
			b + ";'></div>");
		this.pageSide.append(this.tmpContent)
	},
	initPageSide: function () {
		this.pageSide = this.side
	},
	addFlipShadow: function () {
		this.flipBackShadow = $("<div class='flip-shadowB'></div>");
		this.flipFrontShadow = $("<div class='flip-topshadow'></div>");
		this.side.append(this.flipBackShadow);
		this.side.append(this.flipFrontShadow)
	},
	loading: function () {
		this.loadingImage || (this.loadingImage = $("<img class='loadingImage' src='" + uiBaseURL + "progress.gif'/>"));
		this.tmpContent.append(this.loadingImage)
	},
	addAttachment: function () {
		this.attachment = !0;
		this.slider = null;
		this.playSliderAfterLoad = !1;
		this.MMBackground = $("<div id='MMBackground' style='width:100%;height:100%;position:absolute;z-index:4;'></div>");
		this.searchHighlight = $("<div class='kong' id='highlight' style='width:100%;height:100%;'></div>");
		this.addCoil();
		this.initMMItems();
		this.midShadow = $("<div style='z-index:5;pointer-events:none;'></div>");
		this.side.append(this.midShadow);
		this.tmpContent.append(this.MMBackground)
	},
	hideMiddleAttachment: function () {
		this.midShadow && this.midShadow.remove()
	},
	addCoil: function () {
		parseBool(bookConfig.addPaperCoil) && (this.midCoil = $("<div style='z-index:6;'></div>"), this.side.append(this.midCoil))
	},
	mirrorSide: function () {
		this.isMirrorSide = !0;
		this.loadingImage && this.loadingImage.remove()
	},
	setZIndex: function (b) {
		this.zIndex = b;
		this.side.css("z-index", b)
	},
	getZIndex: function () {
		return this.zIndex
	},
	setCSSByStyle: function (b) {
		this.side.css(b)
	},
	setCSSByName: function (b) {
		this.side.attr("class", b)
	},
	wrap: function (b) {
		this.side.wrap(b)
	},
	unwrap: function () {
		this.side.unwrap()
	},
	remove: function () {
		this.side.remove();
		this.side = void 0
	},
	getSide: function () {
		return this.side
	},
	setLeftOrRight: function (b) {
		this.isLeft = b;
		this.setAttachment(b);
		b ? this.setCSSByName("left-side") : this.setCSSByName("right-side")
	},
	centerPage: function () {
		this.isLeft = !1;
		this.setAttachment(this.isLeft);
		this.setCSSByName("center-side")
	},
	setAttachment: function (b) {
		this.attachment && (this.midCoil && (b ? this.midCoil.attr("class", "leftPaperCoil") : this.midCoil.attr("class", "rightPaperCoil")), null != this.coverShadow && (this.coverShadow.destroy(),
			this.coverShadow = null), this.bookType == BookType.normal_book && (this.coverShadow = addNormalCoverShadow(this.side, this.pageIndex)), this.bookType == BookType.single_book && (this.coverShadow = addSingleCoverShadow(this.side, this.pageIndex)), this.bookType == BookType.catalog_book && (this.coverShadow = addCatalogCoverShadow(this.side, this.pageIndex)), null != this.coverShadow || null != this.midCoil ? this.midShadow.css({
				display: "none"
			}) : (this.midShadow.css({
				display: "block"
			}), b ? (bookType == BookType.catalog_book ? this.midShadow.attr("class",
				"catalogLeftShadow") : this.midShadow.attr("class", "leftShadow"), this.midShadow.css({
					width: parseInt(bookConfig.LeftShadowWidth * this.width / 450),
					opacity: bookConfig.LeftShadowAlpha
				})) : (bookType == BookType.catalog_book ? this.midShadow.attr("class", "catalogRightShadow") : this.midShadow.attr("class", "rightShadow"), this.midShadow.css({
					width: parseInt(bookConfig.RightShadowWidth * this.width / 450),
					opacity: bookConfig.RightShadowAlpha
				}))))
	},
	fillContent: function () {
		this.fillPage(this.pageIndex)
	},
	loaded: function (b, i) {//图片 
		b &&
			(this.fullContent = !0, this.loadingInterval && this.loadingInterval.stop(), this.loadingImage && this.loadingImage.remove(), this.sideImage ? this.sideImage.css({
				"background-image": "url(" + b + ")"
			}) : (this.sideImage = $("<div style='position:absolute;z-index:0;background-size:100% 100%;background-repeat:no-repeat;'></div>"), this.sideImage.css({
				"background-image": "url(" + b + ")"
			}), this.sideImage.css({
				filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + b + "',sizingMethod='scale')"
			}), this.resizeSideImage(),
				this.tmpContent.append(this.sideImage), this.attachment && (this.tmpContent.append(this.searchHighlight), this.searchHighlight.css({
					opacity: 0.8
				}), this.clearMM(), this.initSlider())))
	},
	fillImageOrNot: function (b, c) {
		return !b || "string" != typeof b || b == this.imageURL && !c || passwardType() && bookConfig.excludeFrontPages && this.pageIndex > parseInt(bookConfig.excludeFrontPages) && !verifyPassward() ? !1 : !0
	},
	fillPage: function (b, c) {
		if (b == this.pageIndex) {
			if (!window.Wxx.images[b - 1]) { return }
			var d = window.Wxx.images[b - 1].src;
			this.fillImageOrNot(d, c) ? (this.fullContent = !1, this.imageURL = d, -1 < d.indexOf(".js") ? global[decodeDatabasePrefix("normal") + b] && "string" == typeof global[decodeDatabasePrefix("normal") + b] ? (imageLoaded[b] = !0, this.loaded(dataBase64Str(b, "normal"))) : loadJavascript(d, function (c) {
				imageLoaded[b] = !0;
				this.loaded(dataBase64Str(b, "normal", c))
			}.bind(this), function () { }) : ($("<img src='" + d + "'/>").load(function () {
				imageLoaded[b] = !0;
				this.loaded(window.Wxx.images[b - 1].src);
				// this.loaded(d);
			}.bind(this)))) : this.fullContent &&
				(this.loadingInterval && this.loadingInterval.stop(), this.loadingImage && this.loadingImage.remove())
		}
	},
	// initMM: function () {
	// 	this.attachment && (this._super(), AddNotesByContainers(this.bookType, this.pageIndex, this.MMBackground), this.showOrHideYoutube(getShownPage()))
	// },
	showOrHideYoutube: function (b) {
		if (void 0 != b && null != b) {
			for (var c = !1, d = 0; d < b.length; d++)
				if (b[d] == this.pageIndex) {
					c = !0;
					break
				} !0 == c ? this.showYoutube() : this.hideYoutube()
		}
	},
	hideYoutube: function () {
		this.Items.find("Youtube").each(function (b) {
			b.hide()
		})
	},
	showYoutube: function () {
		this.Items.find("Youtube").each(function (b) {
			b.show()
		})
	},
	setVisible: function (b) {
		b ? this.side.show() : this.side.hide();
		this.visible = b
	},
	addHistoryTexts: function (b) {
		if (this.attachment && void 0 != b && null != b) {
			for (var c = !1, d = 0; d < b.length; d++)
				if (b[d] == this.pageIndex) {
					c = !0;
					break
				} !0 == c && AddNotesByContainers(this.bookType, this.pageIndex, this.MMBackground)
		}
	},
	showGray: function () {
		if (this.attachment) {
			this.searchHighlight.css({
				display: "block"
			});
			for (var b = 0; b < this.youtubeArray.length; b++) this.youtubeArray[b].show();
			for (b = 0; b < this.flashSwfArray.length; b++) this.flashSwfArray[b].show();
			for (b = 0; b < this.buttonArray.length; b++) this.buttonArray[b].show()
		}
	},
	hideGray: function () {
		if (this.attachment) {
			this.clearHighlight();
			for (var b = 0; b < this.youtubeArray.length; b++) this.youtubeArray[b].hide();
			for (b = 0; b < this.flashSwfArray.length; b++) this.flashSwfArray[b].hide();
			for (b = 0; b < this.buttonArray.length; b++) this.buttonArray[b].hide()
		}
	},
	highlightSearch: function () {
		this.attachment && highlightSearchFun(this.searchHighlight, this.pageIndex)
	},
	clearHighlight: function () {
		this.attachment && clearHighlightFun(this.searchHighlight)
	},
	onResize: function (b, c) {
		this.resizePage(b, c);
		this.flipFrontShadow.css({
			height: 3 * this.maskWidth,
			top: -this.maskWidth
		});
		this.flipBackShadow.css({
			height: this.maskWidth,
			top: (this.height - this.maskWidth) / 2
		});
		if (this.attachment && (this.isLeft ? this.midShadow.css({
			width: parseInt(bookConfig.LeftShadowWidth * this.width / 450)
		}) : this.midShadow.css({
			width: parseInt(bookConfig.RightShadowWidth * this.width / 450)
		}), this.onMMResize(this.attachW,
			this.attachH), this.coverShadow)) this.coverShadow.onResize()
	},
	resizePage: function (b, c) {
		this.width = b;
		this.height = c;
		this.maskWidth = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2));
		this.attachW = parseInt(100 * b / (-parseFloat(bookConfig.visibleAreaLeft) + parseFloat(bookConfig.visibleAreaRight)));
		this.attachH = parseInt(100 * c / (parseFloat(bookConfig.visibleAreaBottom) - parseFloat(bookConfig.visibleAreaTop)));
		this.side.css({
			width: b,
			height: c
		});
		this.tmpContent.css({
			width: this.attachW,
			height: this.attachH,
			top: -this.attachH * parseFloat(bookConfig.visibleAreaTop) /
				100,
			left: -this.attachW * parseFloat(bookConfig.visibleAreaLeft) / 100
		});
		this.resizeSideImage()
	},
	resizeSideImage: function () {
		if (this.sideImage)
			if ($.system.name != $.system.ANDROID && (isPhone() || isPad())) {
				var b = 1024,
					c = 1024;
				windowWidth > windowHeight && bookType == BookType.normal_book && (c = b = 512);
				isPad() && (c = b = 2048, windowWidth > windowHeight && bookType == BookType.normal_book && (c = b = 768));
				b = getPageWidthHeight(b, c, bookConfig.largePageWidth, bookConfig.largePageHeight);
				this.sideImage.css({
					width: Math.ceil(b.x) + "px",
					height: Math.ceil(b.y) +
						"px"
				});
				c = transformCSS({
					scale: this.width / b.x,
					origin: {
						x: 0,
						y: 0
					}
				});
				this.isMirrorSide && (c = transformCSS({
					scaleX: -this.width / b.x,
					scaleY: this.width / b.x,
					origin: {
						x: 0,
						y: 0
					},
					tran: {
						x: this.width,
						y: 0
					}
				}), this.sideImage.css({
					opacity: 0.2
				}));
				this.sideImage.css(c)
			} else this.sideImage.css({
				width: "100%",
				height: "100%"
			}), this.isMirrorSide && this.sideImage.css({
				"-webkit-transform": "scaleX(-1)",
				"-moz-transform": "scaleX(-1)",
				"-o-transform": "scaleX(-1)",
				"-ms-transform": "scaleX(-1)",
				opacity: 0.2
			})
	},
	sideAddChild: function (b) {
		this.side.append(b)
	},
	setFlipShadow: function (b, c) {
		c ? (this.flipBackShadow && this.flipBackShadow.css({
			visibility: "hidden"
		}), this.flipFrontShadow && this.flipFrontShadow.css({
			visibility: "visible"
		})) : (this.flipBackShadow && this.flipBackShadow.css({
			visibility: "visible"
		}), this.flipFrontShadow && this.flipFrontShadow.css({
			visibility: "hidden"
		}));
		var d = b.shadowRate,
			f = b.rotate,
			g = 0.9 < d ? 1 + 2 * (1 - d) / 0.1 : 3 * d / 0.9,
			d = 0.9 < d ? 0.2 * (1 - d) / 0.1 : 0.1 > d ? 0.2 * d / 0.1 : 0.2,
			h = (b.frontShadowDistance - 100 * (90 < f ? 0 : g)) / Math.cos(f * Math.PI / 180),
			h = transformCSS({
				scaleX: g,
				rotate: -f,
				tran: {
					x: h,
					y: 0
				}
			}),
			g = transformCSS({
				scaleX: g,
				rotate: f,
				tran: {
					x: b.maskTranX,
					y: b.maskTranY
				}
			}),
			k = 90 < f ? 100 : 0,
			l = 0 <= f && 180 > f ? 100 * (this.height + this.maskWidth) / (3 * this.maskWidth) : 100 / 3;
		this.flipFrontShadow.css({
			"transform-origin": k + "% " + l + "%",
			"-webkit-transform-origin": k + "% " + l + "%",
			"-moz-transform-origin": k + "% " + l + "%",
			"-ms-transform-origin": k + "% " + l + "%"
		});
		90 < f ? (this.flipFrontShadow.css({
			right: "0px"
		}), this.flipBackShadow.css({
			left: "100%"
		})) : (this.flipFrontShadow.css({
			right: "auto"
		}), this.flipBackShadow.css({
			left: "0px"
		}));
		this.flipFrontShadow.css(h);
		this.flipFrontShadow.css({
			opacity: d
		});
		this.flipBackShadow.css(g);
		this.flipBackShadow.css({
			opacity: d
		})
	},
	clearFlipShadow: function () {
		this.flipBackShadow && this.flipBackShadow.css({
			visibility: "hidden"
		});
		this.flipFrontShadow && this.flipFrontShadow.css({
			visibility: "hidden"
		});
		this.side.removeClass("boxShadow")
	}
}).extend(BookSide);
bdor[36] = 36;
global.bdor[35] = function () {
	return 3
}();
global.bdor[37] = 80;
bdor[38] = function () {
	return bdor[30](37, 40)
}();
var NormalMask = Class({
	create: function (b, c) {
		this.width = this.zIndex = 0;
		this.pageIndex = b;
		this.container = $("<div class='mask'></div>");
		this.container.attr("id", c + b)
	},
	remove: function () {
		this.container.remove();
		this.page = this.container = void 0
	},
	setPage: function (b) {
		this.page = b
	},
	setCSSByStyle: function (b) {
		this.container.css(b)
	},
	setCSSByName: function (b) {
		this.container.addClass(b)
	},
	onResize: function (b, c) {
		var d = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2));
		this.container.css({
			width: d,
			height: d,
			top: (c - d) / 2
		});
		this.width =
			d
	},
	getWidth: function () {
		return this.width
	},
	setZIndex: function (b) {
		this.zIndex = b;
		this.container.css({
			"z-index": b
		})
	},
	getZIndex: function () {
		return this.zIndex
	}
});
bdor[39] = function () {
	return 8
}();
var bookMouseDown = !1,
	nBookStatu = 0;
global.bdor[200] = function (b) {
	return bdor[b]
};
var NormalBook = Class({
	coordinate_bottom_left: "bl",
	coordinate_top_left: "tl",
	coordinate_bottom_right: "br",
	coordinate_top_right: "tr",
	direction_left: "left",
	direction_right: "right",
	create: function (b, c) {
		this.bookType = BookType.normal_book;
		this.pageArray = [];
		this.pageMaskArray = [];
		this.pageBackArray = [];
		this.pageBackMaskArray = [];
		this.flipArray = {};
		this.maskWidth = this.height = this.width = this.pageHeight = this.pageWidth = 0;
		this.currentPageIndex = c;
		this.flipToPage = this.flippingPage = null;
		this.flipPoint = Point(0, 0);
		this.taskList =
			new TaskList;
		this.taskList.setLargeLength(5);
		this.flippingTime = 1E3 * bookConfig.flippingTime;
		this.createBook(b);
		global.rand100 = Math.floor(100 * Math.random())
	},
	initThickness: function () {
		this.thicknessWidth = 30;
		this.leftThickness = new LeftThickness(this.flipBook, this.thicknessWidth);
		this.rightThickness = new RightThickness(this.flipBook, this.thicknessWidth)
	},
	createBook: function (b) { //创建书本
		this.flipBook = $("<div class='book' id='flipBook' ></div>");
		this.setBookPageByIndex(this.currentPageIndex);
		this.initThickness();
		this.isHardPage(1, 2) ? (this.leftThickness.setMinScale(0), this.rightThickness.setMinScale(0)) : (this.leftThickness.setMinScale(6), this.rightThickness.setMinScale(6));
		this.leftFlipShotBar = new flipShotBar(!0);
		this.rightFlipShotBar = new flipShotBar(!1);
		this.normalBookShadow = new BookShadow(this.flipBook);
		this.resetBookShadow(this.currentPageIndex);
		// isPhone() || isPad() || (this.bmt = new initBookMarkTab(this.flipBook, rightToLeft));
		this.showOrHideGrayShadow(this.currentPageIndex);
		this.init1 = 50;
		b.append(this.flipBook);
		setCurrentIndexTextField(this.currentPageIndex, !0);
		this.rightThickness.resetPosition();
		this.leftThickness.resetPosition();
		setLocationHash(this.currentPageIndex);
		this.setAttachmentBefore(this.currentPageIndex);
		this.initEvent();
		isTouchDevice() || this.initZoomHintTimer(b);
		1 == this.currentPageIndex && this.initMiniFullscreen();
		void 0 != global.staticAd && !0 == staticAd.haveAd && this.insertStaticAd();
		this.adContainer = $("<div id='adContainer'></div>");
		this.adContainer.css({
			position: "absolute",
			"z-index": 1
		});
		// this.bookMap || bookType == BookType.catalog_book || (this.showPage = this.flipBook, this.bookMap = new ZoomMap(this), this.bookMap.fillContent(this.currentPageIndex))
	},
	showOrHideGrayShadow: function (b) {
		if (!$.browser.msie && !$.browser.safari && this.bookType == BookType.normal_book) {
			if (!this.grayShadow) {
				this.grayShadow = $("<div class='grayShadow'></div>");
				var c = $("<div class='kong edgeShadow' ></div>");
				this.grayShadow.append(c);
				this.flipBook.append(this.grayShadow)
			}
			rightToLeft && (b == totalPageCount || 1 == this.currentPageIndex || this.currentPageIndex ==
				totalPageCount) || !rightToLeft && (1 == b || 1 == this.currentPageIndex || this.currentPageIndex == totalPageCount) ? this.grayShadow.hide() : this.grayShadow.show()
		}
	},
	resetBookShadow: function (b) {
		1 == b && this.currentPageIndex == totalPageCount || b == totalPageCount && 1 == this.currentPageIndex ? this.normalBookShadow.hide() : (this.normalBookShadow.doubleWidth(1 != b && b != totalPageCount && 1 != this.currentPageIndex && this.currentPageIndex != totalPageCount), this.normalBookShadow.right(!rightToLeft && (1 == b || 1 == this.currentPageIndex) || rightToLeft &&
			(b == totalPageCount || this.currentPageIndex == totalPageCount)))
	},
	setBookPageByIndex: function (b) {
		isNaN(b) || 0 >= b || (b = 2 * parseInt(b / 2), this.unWrapPageExcludeArray([b, b + 1, b + 2, b + 3, b - 1, b - 2]), this.addPageArray([b, b + 1, b + 2, b + 3, b - 1, b - 2]), this.loading(), this.currentPage = this.pageArray[b], this.currentPage2 = this.pageArray[b + 1], this.nextPage = this.pageArray[b + 2], this.nextPage2 = this.pageArray[b + 3], this.previousPage = this.pageArray[b - 1], this.previousPage2 = this.pageArray[b - 2], this.setPageCss(), this.currentPage && this.currentPage.enterSide(),
			this.currentPage2 && this.currentPage2.enterSide())
	},
	addPageArray: function (b) {//添加页数
		if (b && this.pageArray) {
			for (var c = 0; c < window.Wxx.images.length; c++) {
				if (!(0 >= b[c] || b[c] > originTotalPageCount || (this.pageArray[b[c]] && this.fillContent(b[c]), this.pageArray[b[c]]))) {
					var d = this.newPage(b[c], i);
					d.addAttachment();
					d.onResize(this.pageWidth, this.pageHeight);
					this.pageArray[b[c]] = d;
					this.fillContent(b[c]);
					this.flipBook.append(d.getSide())
				}
			}
		}
	},
	newPage: function (b, i) {
		return new NormalSide(b, "page", BookType.normal_book, i)
	},
	fillContent: function (b) {
		if (!this.flipping ||
			imageLoaded[b]) this.pageArray[b] && this.pageArray[b].fillContent(), this.pageBackArray && this.pageBackArray[b] && this.pageBackArray[b].fillContent()
	},
	fillPage: function (b, c) {
		if (b)
			for (var d = this.pageArray.length, f = 0; f < d; f++) this.pageArray[f] && this.pageArray[f].fillPage(b, c), this.pageBackArray && this.pageBackArray[f] && this.pageBackArray[f].fillPage(b, c)
	},
	removePage: function (b) {
		!isNaN(b) && this.pageArray[b] && (this.pageArray[b].remove(), this.pageArray[b] = void 0)
	},
	addPageMaskArray: function (b) {
		if (b && this.pageMaskArray) {
			for (var c =
				0; c < b.length; c++)
				if (!(0 >= b[c] || b[c] > originTotalPageCount || this.pageMaskArray[b[c]])) {
					this.pageArray[b[c]] || this.addPageArray([b[c]]);
					var d = this.pageArray[b[c]],
						f = new NormalMask(b[c], "pageMask");
					f.onResize(this.pageWidth, this.pageHeight);
					d.setCSSByStyle({
						top: (f.width - d.height) / 2
					});
					d.wrap(f.container);
					f.container = $("#pageMask" + b[c]);
					f.setPage(d);
					this.pageMaskArray[b[c]] = f
				}
			this.setPageMaskCss()
		}
	},
	setPageMaskCss: function () {
		$(".mask").css({
			right: "50%"
		})
	},
	unWrapPageExcludeArray: function (b) {
		if (b && this.pageArray)
			for (var c =
				this.pageArray.length, d = 0; d < c; d++) !this.pageArray[d] || 0 <= b.indexOf(d) || (this.pageArray[d].remove(), this.pageArray[d] = void 0)
	},
	unWrapPageMaskArray: function (b) {
		if (b && this.pageMaskArray)
			for (var c = 0; c < b.length; c++)
				if (!(0 >= b[c] || b[c] > originTotalPageCount)) {
					var d = this.pageMaskArray[b[c]];
					if (this.pageArray[b[c]]) {
						var f = transformCSS({
							rotate: 0,
							tran: {
								x: 0,
								y: 0
							}
						});
						d && this.pageArray[b[c]].unwrap();
						this.pageArray[b[c]].setCSSByStyle({
							top: 0
						});
						this.pageArray[b[c]].setCSSByStyle(f)
					}
					this.pageMaskArray[b[c]] = void 0
				}
	},
	setPageCss: function () {
		var b = transformCSS({
			rotate: 0,
			tran: {
				x: 0,
				y: 0
			}
		});
		this.currentPage && (this.currentPage.setZIndex(2), this.currentPage.setLeftOrRight(!0), this.currentPage.setCSSByStyle(b));
		this.previousPage && (this.previousPage.setZIndex(1), this.previousPage.setLeftOrRight(!0), this.previousPage.setCSSByStyle(b));
		this.previousPage2 && (this.previousPage2.setZIndex(0), this.previousPage2.setLeftOrRight(!0), this.previousPage2.setCSSByStyle(b));
		this.currentPage2 && (this.currentPage2.setZIndex(2), this.currentPage2.setLeftOrRight(!1),
			this.currentPage2.setCSSByStyle(b));
		this.nextPage && (this.nextPage.setZIndex(1), this.nextPage.setLeftOrRight(!1), this.nextPage.setCSSByStyle(b));
		this.nextPage2 && (this.nextPage2.setZIndex(0), this.nextPage2.setLeftOrRight(!1), this.nextPage2.setCSSByStyle(b));
		rightToLeft && (this.currentPage && this.currentPage.setLeftOrRight(!1), this.previousPage && this.previousPage.setLeftOrRight(!1), this.previousPage2 && this.previousPage2.setLeftOrRight(!1), this.currentPage2 && this.currentPage2.setLeftOrRight(!0), this.nextPage &&
			this.nextPage.setLeftOrRight(!0), this.nextPage2 && this.nextPage2.setLeftOrRight(!0))
	},
	resizePage: function (b, c) {
		for (var d = this.pageArray.length, f = 0; f < d; f++)
			if (this.pageArray[f]) this.pageArray[f].onResize(b, c);
		d = this.pageBackArray.length;
		for (f = 0; f < d; f++)
			if (this.pageBackArray[f]) this.pageBackArray[f].onResize(b, c)
	},
	hardFlipByIndex: function (b, c, d) {
		d = this.getDownUpHardPage(b, c, d);
		this.flipArray[b + "-" + c] || (this.flipArray[b + "-" + c] = {});
		this.flipArray.array || (this.flipArray.array = []);
		this.flipArray.curlingArray ||
			(this.flipArray.curlingArray = []);
		this.flipArray.fallbackArray || (this.flipArray.fallbackArray = []);
		this.flipArray.flipArray || (this.flipArray.flipArray = []);
		this.flipArray.zoomArray || (this.flipArray.zoomArray = []);
		this.flipArray.resizeArray || (this.flipArray.resizeArray = []);
		this.flipArray[b + "-" + c].downMask = d[0];
		this.flipArray[b + "-" + c].upMask = d[1];
		this.flipArray[b + "-" + c].currentIndex = b;
		this.flipArray[b + "-" + c].nextIndex = c;
		this.flipArray[b + "-" + c].hardPage = !0;
		this.flipArray.array.push(b + "-" + c);
		return this.flipArray[b +
			"-" + c]
	},
	getDownUpHardPage: function (b, c, d) {
		this.addPageArray([b, c]);
		d ? (this.pageArray[b] && this.pageArray[b].setCSSByName("flip-hard-left-side"), this.pageArray[c] && this.pageArray[c].setCSSByName("flip-hard-right-side")) : (this.pageArray[b] && this.pageArray[b].setCSSByName("flip-hard-right-side"), this.pageArray[c] && this.pageArray[c].setCSSByName("flip-hard-left-side"));
		this.pageArray[c] && this.pageArray[c].setAttachment(!d);
		return [this.pageArray[b], this.pageArray[c]]
	},
	getDownUpPage: function (b, c, d) {
		this.addPageMaskArray([b,
			c
		]);
		this.pageMaskArray[b] && (this.pageMaskArray[b].page.setCSSByName("right-side"), this.pageMaskArray[b].page.setZIndex(2));
		this.pageMaskArray[c] && (this.pageMaskArray[c].page.setCSSByName("flip-side"), this.pageMaskArray[c].page.side.addClass("boxShadow"), this.pageMaskArray[c].page.setZIndex(1), this.pageMaskArray[c].page.setAttachment(!d));
		return [this.pageMaskArray[b], this.pageMaskArray[c]]
	},
	beginFlipByIndex: function (b, c, d) {
		if (this.isHardPage(b, c)) return this.hardFlipByIndex(b, c, d);
		d = this.getDownUpPage(b,
			c, d);
		this.flipArray[b + "-" + c] || (this.flipArray[b + "-" + c] = {});
		this.flipArray.array || (this.flipArray.array = []);
		this.flipArray.curlingArray || (this.flipArray.curlingArray = []);
		this.flipArray.fallbackArray || (this.flipArray.fallbackArray = []);
		this.flipArray.flipArray || (this.flipArray.flipArray = []);
		this.flipArray.zoomArray || (this.flipArray.zoomArray = []);
		this.flipArray.resizeArray || (this.flipArray.resizeArray = []);
		this.flipArray[b + "-" + c].downMask = d[0];
		this.flipArray[b + "-" + c].upMask = d[1];
		this.flipArray[b + "-" + c].currentIndex =
			b;
		this.flipArray[b + "-" + c].nextIndex = c;
		this.flipArray[b + "-" + c].hardPage = !1;
		this.flipArray.array.push(b + "-" + c);
		this.resetBookShadow(c);
		this.showOrHideGrayShadow(c);
		return this.flipArray[b + "-" + c]
	},
	isHardPage: function (b, c) {
		return $.browser.msie && 11 > $.browser.version || !bookConfig.HardPageEnable || 1 != b && 1 != c && b != totalPageCount && c != totalPageCount ? !1 : !0
	},
	flipToMax: function (b, c, d, f) {
		var g = this.beginFlipByIndex(b, c, f);
		this.addPageArray([c + 1]);
		this.pageArray[c + 1] && (this.pageArray[c + 1].setZIndex(0), this.pageArray[c +
			1].setLeftOrRight(f), g.nextPage = this.pageArray[c + 1]);
		d && (this.addPageArray([c + 2, c + 3]), this.pageArray[c + 1] && this.pageArray[c + 1].setZIndex(2), this.pageArray[c + 2] && (this.pageArray[c + 2].setZIndex(1), this.pageArray[c + 2].setLeftOrRight(f)), this.pageArray[c + 3] && (this.pageArray[c + 3].setZIndex(0), this.pageArray[c + 3].setLeftOrRight(f)));
		for (d = c + 4; d <= originTotalPageCount; d++) this.pageArray[d] && (this.pageArray[d].remove(), this.pageArray[d] = void 0);
		for (d = b + 1; d < c; d++) this.pageArray[d] && (this.pageArray[d].remove(),
			this.pageArray[d] = void 0);
		return g
	},
	flipToMin: function (b, c, d, f) {
		var g = this.beginFlipByIndex(b, c, f);
		this.addPageArray([c - 1]);
		this.pageArray[c - 1] && (this.pageArray[c - 1].setZIndex(0), this.pageArray[c - 1].setLeftOrRight(f), g.nextPage = this.pageArray[c - 1]);
		d && (this.addPageArray([c - 2, c - 3]), this.pageArray[c - 1] && this.pageArray[c - 1].setZIndex(2), this.pageArray[c - 2] && (this.pageArray[c - 2].setZIndex(1), this.pageArray[c - 2].setLeftOrRight(f)), this.pageArray[c - 3] && (this.pageArray[c - 3].setZIndex(0), this.pageArray[c -
			3].setLeftOrRight(f)));
		for (d = c - 4; 0 <= d; d--) this.pageArray[d] && (this.pageArray[d].remove(), this.pageArray[d] = void 0);
		for (d = b - 1; d > c; d--) this.pageArray[d] && (this.pageArray[d].remove(), this.pageArray[d] = void 0);
		return g
	},
	getFlipTo: function (b) {
		var c = 2 * parseInt(this.currentPageIndex / 2);
		b = 2 * parseInt(b / 2);
		var d = c + 1,
			f = "";
		b > d && (f = "max");
		b + 1 < c && (f = "min", b += 1);
		return {
			flipTo: f,
			minIndex: c,
			maxIndex: d,
			toIndex: b
		}
	},
	beforeFlipTo: function (b, c) {
		this.setAttachmentBefore(b);
		var d = this.getFlipTo(b),
			f = d.minIndex,
			g = d.maxIndex,
			h = d.toIndex,
			k;
		"max" == d.flipTo && (k = this.flipToMax(g, h, c, rightToLeft));
		"min" == d.flipTo && (k = this.flipToMin(f, h, c, !rightToLeft));
		this.setPageMaskZIndex(k, d);
		return k
	},
	setAttachmentBefore: function (b) {
		bookConfig.RightToLeft ? (b > this.currentPageIndex && this.setLeftThicknessVisible(b), b < this.currentPageIndex && this.setRightThicknessVisible(b)) : (b < this.currentPageIndex && this.setLeftThicknessVisible(b), b > this.currentPageIndex && this.setRightThicknessVisible(b));
		this.adContainer && this.adContainer.css({
			"z-index": 1
		});
		this.bmt && (1 >= b && (parseBool(bookConfig.RightToLeft) ? this.bmt.rightBox.hide() : this.bmt.leftBox.hide()), b >= originTotalPageCount && (parseBool(bookConfig.RightToLeft) ? this.bmt.leftBox.hide() : this.bmt.rightBox.hide()))
	},
	setBookmarkVisible: function (b) {
		this.bmt && (1 < b && (rightToLeft ? this.bmt.rightBox.show() : this.bmt.leftBox.show()), b < originTotalPageCount && (rightToLeft ? this.bmt.leftBox.show() : this.bmt.rightBox.show()))
	},
	setPageMaskZIndex: function (b, c) {
		if (b) {
			var d = b.downMask.pageIndex,
				f = b.upMask.pageIndex,
				g =
					originTotalPageCount + 5 + f,
				h = originTotalPageCount + 5 - d;
			"min" == c.flipTo && (g = 2 * originTotalPageCount + 5 - f);
			"min" == c.flipTo && (h = 5 + d);
			b.upMask.setZIndex(g);
			b.downMask.setZIndex(h)
		}
	},
	flippingTo: function (b) {
		b > this.currentPageIndex ? rightToLeft ? this.leftThickness.resetPosition(b) : this.rightThickness.resetPosition(b) : rightToLeft ? this.rightThickness.resetPosition(b) : this.leftThickness.resetPosition(b);
		this.currentPageIndex = b;
		this.currentPageIndex = Math.max(1, this.currentPageIndex);
		this.currentPageIndex = Math.min(originTotalPageCount,
			this.currentPageIndex);
		setCurrentIndexTextField(this.currentPageIndex, !0);
		setLocationHash(this.currentPageIndex)
	},
	afterFlipToMax: function (b, c) {
		var d = 2 * parseInt(b / 2);
		this.addPageArray([d, d - 1, d - 2]);
		this.pageArray[d] && (this.pageArray[d].setZIndex(2), this.pageArray[d].setLeftOrRight(c));
		this.pageArray[d - 1] && (this.pageArray[d - 1].setZIndex(1), this.pageArray[d - 1].setLeftOrRight(c));
		this.pageArray[d - 2] && (this.pageArray[d - 2].setZIndex(0), this.pageArray[d - 2].setLeftOrRight(c));
		this.pageArray[d + 1] && this.fillContent(d +
			1);
		this.pageArray[d + 2] && this.fillContent(d + 2);
		this.pageArray[d + 3] && this.fillContent(d + 3);
		for (d -= 3; 0 <= d; d--) this.pageArray[d] && (this.pageArray[d].remove(), this.pageArray[d] = void 0);
		rightToLeft ? this.rightThickness.resetPosition(b) : this.leftThickness.resetPosition(b);
		this.leftThickness.resetScale(b);
		this.rightThickness.resetScale(b)
	},
	afterFlipToMin: function (b, c) {
		var d = 2 * parseInt(b / 2) + 1;
		this.addPageArray([d, d + 1, d + 2]);
		this.pageArray[d] && (this.pageArray[d].setZIndex(2), this.pageArray[d].setLeftOrRight(c));
		this.pageArray[d + 1] && (this.pageArray[d + 1].setZIndex(1), this.pageArray[d + 1].setLeftOrRight(c));
		this.pageArray[d + 2] && (this.pageArray[d + 2].setZIndex(0), this.pageArray[d + 2].setLeftOrRight(c));
		this.pageArray[d - 1] && this.fillContent(d - 1);
		this.pageArray[d - 2] && this.fillContent(d - 2);
		this.pageArray[d - 3] && this.fillContent(d - 3);
		for (d += 3; d <= originTotalPageCount; d++) this.pageArray[d] && (this.pageArray[d].remove(), this.pageArray[d] = void 0);
		rightToLeft ? this.leftThickness.resetPosition(b) : this.rightThickness.resetPosition(b);
		this.leftThickness.resetScale(b);
		this.rightThickness.resetScale(b)
	},
	afterFlipTo: function (b, c) {
		if (b && b.downMask && b.upMask) {
			var d = b.downMask.pageIndex,
				f = b.upMask.pageIndex,
				g = d < c;
			this.flipArray.flipArray.removeElement(b.currentIndex + "-" + b.nextIndex);
			this.endFlipByIndex(d, f);
			this.removeFlipArrayByIndex(b.currentIndex, b.nextIndex);
			this.checkFlipping();
			g ? this.afterFlipToMax(c, !rightToLeft) : this.afterFlipToMin(c, rightToLeft);
			this.setAttachmentAfter()
		}
	},
	getCurrentPages: function () {
		var b = 2 * parseInt(this.currentPageIndex /
			2);
		return [b, b + 1]
	},
	getPagesByIndex: function (b) {
		b = 2 * parseInt(b / 2);
		return [b, b + 1]
	},
	loading: function () {
		if (!this.flipping) {
			var b = this.getCurrentPages();
			if (b && !(0 >= b.length))
				for (var c = b.length, d = 0; d < c; d++) b[d] && this.pageArray[b[d]] && this.pageArray[b[d]].loading()
		}
	},
	checkFlipping: function () {
		this.flipping = !1;
		for (var b = this.flipArray.array.length, c = 0; c < b; c++)
			if (this.flipArray.array[c]) {
				var d = this.flipArray.array[c];
				if (this.flipArray[d]) {
					if (this.flipArray[d].flipping) {
						this.flipping = !0;
						return
					}
					this.flipToDirection =
						""
				}
			}
		this.loading()
	},
	setAttachmentAfter: function () {
		this.addHistoryTexts();
		this.stopMedia();
		this.stopAllSlider();
		this.addSearchHighlight();
		this.showOrHideGrayShadow(this.currentPageIndex);
		this.flipping || this.openShownSlider();
		this.flipping || this.openShownMedia();
		this.flipping || (this.resetBookShadow(this.currentPageIndex), this.normalBookShadow.show());
		this.setThicknessVisible(this.currentPageIndex);
		this.setBookmarkVisible(this.currentPageIndex);
		this.currentPageIndex < originTotalPageCount && (rightToLeft ?
			this.leftFlipShotBar.setVisible(!0) : this.rightFlipShotBar.setVisible(!0));
		this.bmt && this.bmt.separated(this.currentPageIndex);
		resizeBookAfterFlip && !this.flipping && window.setTimeout(function () {
			onStageResize()
		}, 30);
		this.adContainer && 1 == this.currentPageIndex && this.adContainer.css({
			"z-index": 3
		});
		this.bookMap && this.bookMap.fillContent(this.currentPageIndex)
	},
	removeFlipArrayByIndex: function (b, c) {
		var d = b + "-" + c;
		this.flipArray[d].nextPage && this.flipArray[d].nextPage.clearFlipShadow();
		this.flipArray[d] && delete this.flipArray[d];
		this.flipArray.array && this.flipArray.array.removeElement(d)
	},
	flipToPoint: function (b, c, d, f, g, h) {
		if (b && g && h)
			if (!0 == b.hardPage) this.flipToHardPoint(b, c, d, g, h);
			else if (b.downMask && b.upMask && b.downMask.page && b.upMask.page && (b.coordinate = h, d = computePoint(c, d, f, g, h))) {
				f = transformCSS({
					rotate: d.rotate,
					tran: {
						x: d.maskTranX,
						y: d.maskTranY
					}
				});
				var k =
					transformCSS({
						rotate: d.rotate,
						tran: {
							x: d.maskTranX,
							y: d.maskTranY
						}
					}),
					l = transformCSS({
						rotate: -d.rotate,
						tran: {
							x: -d.pageTranX,
							y: 0
						}
					}),
					m = transformCSS({
						rotate: d.rotate,
						tran: {
							x: d.pageTranX,
							y: 0
						}
					});
				b.downMask && b.downMask.setCSSByStyle(f);
				b.upMask && b.upMask.setCSSByStyle(k);
				b.downMask && b.downMask.page && b.downMask.page.setCSSByStyle(l);
				b.upMask && b.upMask.page && b.upMask.page.setCSSByStyle(m);
				this.setFlipAlpha(b, c, g, h);
				this.setFlipShadow(b, d);
				this.followToPoint(b, g, h)
			}
	},
	followToPoint: function (b, c, d) { },
	setFlipAlpha: function (b,
		c, d, f) { },
	setFlipShadow: function (b, c) {
		b && c && (b.upMask.page && b.upMask.page.setFlipShadow(c, !0), b.nextPage && b.nextPage.setFlipShadow(c, !1))
	},
	flipToHardPoint: function (b, c, d, f, g) {
		b && f && g && (g.x > c && (g.x = c), g.x < -c && (g.x = -c), b.coordinate = g, d = -90 + 90 * Math.abs(g.x / f.x), 0 > g.x && (d = 90 - 90 * Math.abs(g.x / f.x)), c = transformCSS({
			perspective: 3E3,
			rotateY: d
		}), d = transformCSS({
			perspective: 3E3,
			rotateY: d
		}), b.downMask && b.downMask.setCSSByStyle(c), b.upMask && b.upMask.setCSSByStyle(d), 0 > g.x / f.x ? (b.upMask.setVisible(!0), b.downMask.setVisible(!1)) :
				(b.upMask.setVisible(!1), b.downMask.setVisible(!0)), this.followToPoint(b, f, g))
	},
	endFlipByIndex: function (b, c, d) {
		isNaN(b) || isNaN(c) || (this.unWrapPageMaskArray([b, c]), d ? (this.pageArray[b] && this.pageArray[b].setLeftOrRight(!0), this.pageArray[c] && this.pageArray[c].setLeftOrRight(!0)) : (this.pageArray[b] && this.pageArray[b].setLeftOrRight(!1), this.pageArray[c] && this.pageArray[c].setLeftOrRight(!1)), this.pageArray[b].clearFlipShadow(), this.pageArray[c].clearFlipShadow())
	},
	endFlip: function () {
		if (this.flipArray &&
			this.flipArray.array && 0 != this.flipArray.array.length)
			for (var b = this.flipArray.array.length, c = 0; c < b; c++)
				if (this.flipArray.array[c]) {
					var d = this.flipArray[this.flipArray.array[c]];
					d && (this.endFlipByIndex(d.downMask.pageIndex, d.upMask.pageIndex), this.removeFlipArrayByIndex(d.currentIndex, d.nextIndex))
				}
	},
	onResize: function (b, c) {
		this.resize(b, c);
		if (this.leftThickness) this.leftThickness.onResize();
		if (this.rightThickness) this.rightThickness.onResize();
		if (this.leftFlipShotBar) this.leftFlipShotBar.onResize(this.width,
			this.height);
		if (this.rightFlipShotBar) this.rightFlipShotBar.onResize(this.width, this.height);
		this.doublePage = windowWidth < windowHeight ? !1 : !0;
		this.bookMap && (this.bookMap.onResize(b, c), this.bookMap.refreshArea())
	},
	resizeBook: function (b, c) {
		this.endFlip();
		this.width = 2 * b;
		this.height = c;
		this.pageWidth = b;
		this.pageHeight = c;
		this.maskWidth = Math.sqrt(b * b + c * c);
		this.flipBook.css({
			width: this.width + "px",
			height: this.height + "px"
		});
		this.resizePage(this.pageWidth, this.pageHeight);
		this.resetBookShadow(this.currentPageIndex)
	},
	resize: function (b, c) {
		this.resizeBook(b, c);
		this.setBookPageByIndex(this.currentPageIndex);
		this.bmt && this.bmt.resize(c, 60);
		if (this.miniFullScreen) this.miniFullScreen.onResize();
		var d = this.flipBook.css("left"),
			f = this.flipBook.css("top");
		this.adContainer.css({
			left: d,
			top: f,
			width: b + "px",
			height: c + "px"
		});
		this.adInstance && this.adInstance.resize()
	},
	initZoomHintTimer: function (b) {
		var c = this;
		this.mouseInBook = new Point(-1, -1);
		this.oldMouseInBook = new Point(-1, -1);
		this.zoomHint = null;
		this.trackMousePoint = function (b) {
			b =
				isTouch ? b.originalEvent.touches : [b];
			var f = b[0].pageY;
			c.mouseInBook.x = b[0].pageX;
			c.mouseInBook.y = f
		};
		bookContainer.bind(_event._move, this.trackMousePoint);
		this.zoomHintTimer = window.setInterval(function () {
			if (bookType != BookType.normal_book) c.clearZoomHintTimer();
			else if (null == c.zoomHint)
				if (-1 == c.oldMouseInBook.x) c.oldMouseInBook.x = c.mouseInBook.x, c.oldMouseInBook.y = c.mouseInBook.y;
				else if (c.oldMouseInBook.x == c.mouseInBook.x && c.oldMouseInBook.y == c.mouseInBook.y) {
					var d = globalToBook(!0, c.mouseInBook.x, c.mouseInBook.y);
					if (!(0 > d.x || d.x > c.width || 0 > d.y || d.y > c.height)) {
						var d = c.mouseInBook.x + 15,
							f = c.mouseInBook.y;
						c.zoomHint = new divHint(getLanguage("lblDoubleClickToZoomIn", "双击放大"), d, f, b);
						c.zoomHint.show();
						c.hideCount = 0
					}
				} else c.oldMouseInBook.x = c.mouseInBook.x, c.oldMouseInBook.y = c.mouseInBook.y;
			else 2 == ++c.hideCount && (bookContainer.unbind(_event._move, c.trackMousePoint), c.zoomHint.destroy(), c.zoomHint = null, window.clearInterval(c.zoomHintTimer))
		}, 1500)
	},
	clearZoomHintTimer: function () {
		try {
			window.clearInterval(this.zoomHintTimer)
		} catch (b) { }
		null !=
			this.zoomHint && (bookContainer.unbind(_event._move, this.trackMousePoint), this.zoomHint.destroy(), this.zoomHint = null)
	},

	getCurrentPageIndex: function () {
		return this.currentPageIndex
	},
	getPageWidth: function (b) {
		if (void 0 == b) return this.pageWidth;
		this.pageWidth = b
	},
	getPageHeight: function (b) {
		if (void 0 == b) return this.pageHeight;
		this.pageHeight = b
	},
	getWidth: function () {
		return this.width
	},
	getHeight: function () {
		return this.height
	},
	getScale: function () {
		return 1
	},
	getLeft: function () {
		return this.flipBook.offset().left
	},
	getTop: function () {
		return this.flipBook.offset().top
	},
	getCssLeft: function () {
		return parseInt(this.flipBook.css("left"))
	},
	getCssTop: function () {
		return parseInt(this.flipBook.css("top"))
	},
	setCSS: function (b) {
		this.flipBook.css(b)
	},
	setPosition: function (b, c, d) {
		void 0 == d && (d = ["left", "top"]);
		this.flipBook.css(d[0], b + "px");
		this.flipBook.css(d[1], c + "px")
	},
	endReset: function () { },
	resetFrameNum: function (b, c) {
		var d = (windowWidth - bookConfig.leftMargin - bookConfig.rightMargin - this.width) / 2 + bookConfig.leftMargin,
			f = d - this.width /
				4,
			g = d + this.width / 4,
			h = this.getCssLeft();
		1 == c && (d = f);
		c == totalPageCount && (d = g);
		return 10 > Math.abs(d - h) ? b : 10
	},
	movetoCenter: function (b, c, d) {
		if (!1 != parseBool(bookConfig.retainBookCenter)) {
			var f = bookConfig.totalPageCount;
			1 == f % 2 && (f += 1);
			var g = -this.pageWidth / 2,
				h = this.pageWidth / 2;
			rightToLeft && (g = this.pageWidth / 2, h = -this.pageWidth / 2);
			if (!(1 < b && b < f && 1 < c & c < f)) {
				var k = 0,
					l = 0;
				1 == b && (k = g);
				b == f && (k = h);
				1 == c && (l = g);
				c == f && (l = h);
				b = 2 * this.pageWidth;
				void 0 == d && (d = b);
				isNaN(d) || (d = $.easing.easeInOutSine(null, d, k, l - k, b), d =
					transformCSS({
						tran: {
							x: d,
							y: 0
						}
					}), this.setCSS(d))
			}
		}
	},
	setThicknessMovingScale: function (b, c, d) {
		this.leftThickness.setMovingScale(b, c, d);
		this.rightThickness.setMovingScale(b, c, d)
	},
	initMiniFullscreen: function () {
		if (!0 != bookConfig.hideMiniFullscreen && !(isPhone() || isPad() || isIE() || miniStyle.isMini() || fullScreenApi.supportsFullScreen && fullScreenApi.isFullScreen() || this.miniFullScreen)) {
			this.miniFullscreenEnter = !1;
			this.miniFullScreen = $("<div class='miniFullscreen' id='miniFullscreen'></div>");
			this.miniFullScreen.html(getLanguage("lblFullscreen",
				"Click to view in fullscreen."));
			var b = this.flipBook.offset().top;
			this.miniFullScreen.css({
				top: b + this.pageHeight - 50 + "px"
			});
			bookContainer.append(this.miniFullScreen);
			this.miniFullScreen.onResize = function () {
				var b = this.flipBook.offset().top;
				this.miniFullScreen.css({
					top: b + this.pageHeight - 50 + "px"
				})
			}.bind(this);
			this.miniFullScreen.bind(_event._end, function () {
				bookType == BookType.catalog_book ? this.guidBar.fullscreenBtn.trigger(_event._end) : '';
				this.miniFullScreen.remove();
				this.miniFullScreen = void 0
			}.bind(this));
			this.miniFullScreen.bind(_event._enter, function () {
				this.miniFullscreenEnter = !0
			}.bind(this));
			this.miniFullScreen.bind(_event._leave, function () {
				this.miniFullscreenEnter = !1;
				this.miniFullscreenTimeout && window.clearTimeout(this.miniFullscreenTimeout);
				this.miniFullscreenTimeout = window.setTimeout(function () {
					this.removeFullscreenBtn(!0)
				}.bind(this), 3E3)
			}.bind(this));
			this.miniFullscreenEnter || (this.miniFullscreenTimeout && window.clearTimeout(this.miniFullscreenTimeout),
				this.miniFullscreenTimeout = window.setTimeout(function () {
					this.removeFullscreenBtn(!0)
				}.bind(this), 3E3))
		}
	},
	removeFullscreenBtn: function (b) {
		if (!0 != bookConfig.hideMiniFullscreen && !(isPhone() || isPad() || isIE() || miniStyle.isMini())) {
			var c = {
				alpha: b ? 0.5 : 0
			},
				d = this;
			$(c).animate({
				alpha: b ? 0 : 0.5
			}, {
					duration: 300,
					easing: "easeOutSine",
					step: function () {
						d.miniFullScreen && !0 != d.miniFullscreenEnter && d.miniFullScreen.css({
							opacity: c.alpha
						})
					},
					complete: function () {
						d.miniFullScreen && !0 != d.miniFullscreenEnter && (d.miniFullScreen.remove(),
							d.miniFullScreen = void 0)
					}
				})
		}
	},
	translate: function (b, c) {
		transformCSS({});
		this.flipBook.css(style)
	},
	gotoPage: function (b) {
		if (!(isAndroidWeChat() || isAndroidDefault() || this.status_zoom) || !this.flipping) {
			if (1 >= b || b >= originTotalPageCount)
				if (1 != this.currentPageIndex || 1 != b) {
					var c = 1 >= b
						?
						window.Wxx.pageEnd('first')
						:
						window.Wxx.pageEnd('last')
				}
			if (!(0 >= b || b > originTotalPageCount || this.hasAlicePage(b) || this.hasAliceHardPage(b))) {
				var c =
					this.getFromStartPointByIndex(b),
					d = this.currentPageIndex;
				if (c && !this.handleHardPage(b)) {
					var f = this.beforeFlipTo(b, !0);
					if (f) {
						var g = f.currentIndex + "-" + f.nextIndex;
						0 < this.flipArray.curlingArray.indexOf(g) && (f.dragMoveToFlip = !0);
						0 > this.flipArray.flipArray.indexOf(g) && this.flipArray.flipArray.push(g);
						this.flipArray.fallbackArray.removeElement(g);
						this.flipArray.curlingArray.removeElement(g);
						this.optionPage == g && (this.optionPage = null);
						f.flipping = !0;
						f.loosen = !0;
						f.AliceToLeft = !1;
						f.AliceToRight = !1;
						f.fallback = !1;
						this.flipping = !0;
						this.isDragMoveToFlip(f);
						f.dragMoveToFlip || (this.flipToPoint(f, this.pageWidth, this.pageHeight, this.maskWidth, c[0], c[1]), c = Math.abs(c[1].x - c[0].x), this.setThicknessMovingScale(this.currentPageIndex, b, c), this.movetoCenter(this.currentPageIndex, b, c));
						this.flippingTo(b);
						var h = this.flipToDirection;
						playFlipSound();
						(function () {
							this.flipIntervalTmp(f, d, b, h)
						}).delay(this, 50);
						1 == b ? this.initMiniFullscreen() : this.miniFullScreen && (this.miniFullScreen.remove(), this.miniFullScreen = void 0)
					}
				}
			}
		}
	},
	boundaryPages: function () {
		return [2, 3, totalPageCount - 1, totalPageCount - 2]
	},
	hasAliceHardPage: function (b) {
		if (!bookConfig.HardPageEnable) return !1;
		if ((1 == b || b == totalPageCount || 0 <= this.boundaryPages().indexOf(this.currentPageIndex)) && this.flipArray.flipArray && 0 < this.flipArray.flipArray.length) {
			var c = window.setInterval(function () {
				this.flipArray.flipArray && 0 < this.flipArray.flipArray.length || (c && 0 > this.boundaryPages().indexOf(this.currentPageIndex) || gotoPageFun(b), window.clearInterval(c), c = void 0)
			}.bind(this),
				20);
			return !0
		}
	},
	handleHardPage: function (b) {
		if (!bookConfig.HardPageEnable || 1 != b && b != totalPageCount && 1 != this.currentPageIndex && this.currentPageIndex != totalPageCount) return !1;
		if (1 == b && 0 > BookInfo.getCurrentPages().indexOf(2) || b == totalPageCount && 0 > BookInfo.getCurrentPages().indexOf(totalPageCount - 1)) return 1 == b && gotoPageFun(2), b == totalPageCount && gotoPageFun(totalPageCount - 1), window.setTimeout(function () {
			gotoPageFun(b)
		}, 20), !0;
		if (1 == this.currentPageIndex && 2 != b && 3 != b || this.currentPageIndex == totalPageCount &&
			b != totalPageCount - 1 && b != totalPageCount - 2) return 1 == this.currentPageIndex && gotoPageFun(2), this.currentPageIndex == totalPageCount && gotoPageFun(totalPageCount - 1), window.setTimeout(function () {
				gotoPageFun(b)
			}, 20), !0
	},
	hasAlicePage: function (b) {
		if (this.flipArray.fallbackArray && 0 < this.flipArray.fallbackArray.length) return !0;
		var c = "right";
		if (b > this.currentPageIndex && !rightToLeft || b < this.currentPageIndex && rightToLeft) c = "left";
		b = this.getPagesByIndex(b);
		if (0 <= c.indexOf("l")) {
			if (this.flipping && this.flipToDirection ==
				this.direction_right) return !0;
			if (this.flipArray.curlingArray && 0 < this.flipArray.curlingArray.length)
				for (var d = this.flipArray.curlingArray.length, f = 0; f < d; f++) {
					var g = this.flipArray.curlingArray[f];
					if (this.flipArray[g] && this.flipArray[g].AliceToRight || 0 > b.indexOf(this.flipArray[g].nextIndex)) return !0
				}
		}
		if (0 <= c.indexOf("r")) {
			if (this.flipping && this.flipToDirection == this.direction_left) return !0;
			if (this.flipArray.curlingArray && 0 < this.flipArray.curlingArray.length)
				for (d = this.flipArray.curlingArray.length, f =
					0; f < d; f++)
					if (g = this.flipArray.curlingArray[f], this.flipArray[g] && this.flipArray[g].AliceToLeft || 0 > b.indexOf(this.flipArray[g].nextIndex)) return !0
		}
		return !1
	},
	getFromStartPointByIndex: function (b) {
		var c = 2 * parseInt(this.currentPageIndex / 2),
			d = c + 1;
		if (b != d && b != c) {
			var f = {
				x: 0,
				y: 0
			},
				g = {
					x: 0,
					y: 0
				},
				h = !1;
			if (b > d && !rightToLeft || b < c && rightToLeft) f = {
				x: this.pageWidth,
				y: this.pageHeight
			}, h = !0;
			if (b < c && !rightToLeft || b > d && rightToLeft) f = {
				x: -this.pageWidth,
				y: this.pageHeight
			}, h = !1;
			if (!this.flipping || !h || "right" != this.flipToDirection)
				if (!this.flipping ||
					h || "left" != this.flipToDirection) return g.x = f.x, g.y = f.y, this.flipToDirection = h ? "left" : "right", [f, g]
		}
	},
	isDragMoveToFlip: function (b) {
		b.dragMoveToFlip = !1;
		b.coordinate && b.startPoint && b.coordinate.x != b.startPoint.x && (b.dragMoveToFlip = !0)
	},
	setFlipOringinPoint: function (b, c) {
		b.dragMoveToFlip || "left" != c || (b.fromPoint = {
			x: this.pageWidth,
			y: this.pageHeight
		});
		b.dragMoveToFlip || "right" != c || (b.fromPoint = {
			x: -this.pageWidth,
			y: this.pageHeight
		});
		b.toPoint = {
			x: -b.fromPoint.x,
			y: b.fromPoint.y
		};
		b.startPoint || (b.startPoint = {
			x: 0,
			y: 0
		});
		b.startPoint.x = b.fromPoint.x;
		b.startPoint.y = b.fromPoint.y
	},
	flipIntervalTmp: function (b, c, d, f) {
		if (b) {
			this.flipping = !0;
			b.flipping = !0;
			this.setFlipOringinPoint(b, f);
			b.coordinate || (b.coordinate = b.startPoint);
			var g = b.coordinate.x,
				h = b.coordinate.y,
				k, l = this.flippingTime;
			f = isAndroidWeChat() || isAndroidDefault() ? function () {
				var b = 0;
				k = function () {
					m(b, 25, "Sine");
					b++
				}.interval(this, l / 25)
			}.bind(this) : function () {
				k = function (b, c) {
					m(b, c, "Sine")
				}.runInAnimate(this, l)
			}.bind(this);
			var m = function (f, l, m) {
				if (!b) return !1;
				var t = $.easing["easeInOut" + m],
					r = $.easing["easeOut" + m];
				m = r(null, f, g, b.toPoint.x - g, l);
				r = r(null, f, h, b.toPoint.y - h, l);
				b.dragMoveToFlip || (m = t(null, f, g, b.toPoint.x - g, l));
				b.dragMoveToFlip || (r = this.pageHeight - 0.1 * Math.sqrt(this.pageWidth * this.pageWidth - m * m));
				if (f < l) {
					this.flipToPoint(b, this.pageWidth, this.pageHeight, this.maskWidth, b.fromPoint, {
						x: m,
						y: r
					});
					var s = Math.abs(m - b.fromPoint.x);
					this.setThicknessMovingScale(c, d, s);
					this.movetoCenter(c, d, s)
				} else this.flipToPoint(b, this.pageWidth, this.pageHeight, this.maskWidth,
					b.fromPoint, b.toPoint), this.setThicknessMovingScale(c, d), this.movetoCenter(c, d, s), this.afterFlipTo(b, d), k.stop()
			}.bind(this);
			f()
		}
	},
	setShowOrHide: function () { },
	reShowOrHide: function () { },
	resetPageCorner: function () { },
	stopTimer: function () {
		window.clearInterval(this.intervalID)
	},
	openShownSlider: function () {
		var b = getShownPage();
		if (void 0 != b && null != b)
			for (var c = 0; c < b.length; c++) {
				var d = b[c];
				this.pageArray[d] && this.pageArray[d].playSlider()
			}
	},
	stopAllSlider: function () {
		for (var b = this.pageArray.length, c = 0; c < b; c++) this.pageArray[c] &&
			this.pageArray[c].resetSlider()
	},
	openShownMedia: function () {
		var b = getShownPage();
		if (void 0 != b && null != b)
			for (var c = 0; c < b.length; c++) {
				var d = b[c];
				this.pageArray[d] && this.pageArray[d].enterSide()
			}
	},
	stopMedia: function () {
		for (var b = this.pageArray.length, c = 0; c < b; c++) this.pageArray[c] && this.pageArray[c].leaveSide()
	},
	hide: function () {
		this.setCSS({
			display: "none"
		});
		this.stopMedia();
		this.stopAllSlider();
		this.bookMap && this.bookMap.hide();
		this.controlBar && this.controlBar.setVisible(!1);
		this.adContainer && this.adContainer.hide()
	},
	show: function () {
		this.setCSS({
			display: "block"
		});
		this.openShownSlider();
		this.openShownMedia();
		this.addHistoryTexts();
		this.addSearchHighlight();
		this.bmt && this.bmt.refresh();
		this.adContainer && this.adContainer.show();
		this.adContainer && 1 == this.currentPageIndex && this.adContainer.css({
			"z-index": 3
		})
	},
	addHistoryTexts: function () {
		var b = [1];
		try {
			b = getShownPage()
		} catch (c) {
			b = [1]
		}
		for (var d = this.pageArray.length, f = 0; f < d; f++) this.pageArray[f] &&
			this.pageArray[f].addHistoryTexts(b)
	},
	addSearchHighlight: function () {
		var b = this.currentPageIndex,
			b = 0 == b % 2 ? b + 1 : b - 1;
		this.pageArray[b] && this.pageArray[b].highlightSearch();
		this.pageArray[b + 1] && this.pageArray[b + 1].highlightSearch();
		this.pageArray[b - 1] && this.pageArray[b - 1].highlightSearch();
		this.pageArray[b + 2] && this.pageArray[b + 2].highlightSearch()
	},
	clearSearchHighlight: function () {
		for (var b = this.pageArray.length, c = 0; c < b; c++) this.pageArray[c] && this.pageArray[c].clearHighlight()
	},
	setLeftThicknessVisible: function (b) {
		1 <
			b && !rightToLeft && (3 < b && this.leftThickness.setVisible(!0), this.leftFlipShotBar.setVisible(!0));
		b < originTotalPageCount - 1 && rightToLeft && (b < originTotalPageCount - 2 && this.leftThickness.setVisible(!0), this.leftFlipShotBar.setVisible(!0));
		3 >= b && !bookConfig.RightToLeft && (this.leftThickness.setVisible(!1), 1 >= b && this.leftFlipShotBar.setVisible(!1));
		b >= originTotalPageCount - 2 && bookConfig.RightToLeft && (this.leftThickness.setVisible(!1), b >= originTotalPageCount - 1 && this.leftFlipShotBar.setVisible(!1))
	},
	setRightThicknessVisible: function (b) {
		1 <
			b && rightToLeft && (3 < b && this.rightThickness.setVisible(!0), this.rightFlipShotBar.setVisible(!0));
		b < originTotalPageCount - 1 && !rightToLeft && (b < originTotalPageCount - 2 && this.rightThickness.setVisible(!0), this.rightFlipShotBar.setVisible(!0));
		3 >= b && bookConfig.RightToLeft && (this.rightThickness.setVisible(!1), 1 >= b && this.rightFlipShotBar.setVisible(!1));
		b >= originTotalPageCount - 2 && !bookConfig.RightToLeft && (this.rightThickness.setVisible(!1), b >= originTotalPageCount - 1 && this.rightFlipShotBar.setVisible(!1))
	},
	setThicknessVisible: function (b) {
		this.setLeftThicknessVisible(b);
		this.setRightThicknessVisible(b)
	},
	edgeX: function () {
		this.MiddleX = 0
	},
	aroundCorner: function (b) {
		this.edgeX();
		if (!(Math.abs(b.x) > this.pageWidth - 1 || b.y > this.height - 1 || 1 > b.y || Math.abs(b.x) < 0.8 * this.pageWidth || b.y > 0.2 * this.height && b.y < 0.8 * this.height)) {
			var c = Math.sqrt(Math.pow(0.2 * this.height, 2) - Math.pow((this.pageWidth - Math.abs(b.x)) * this.height / this.pageWidth, 2));
			if (b.y < c && b.x < this.MiddleX) return "tl";
			if (b.y < c && b.x > this.MiddleX) return "tr";
			if (b.y > this.height - c && b.x < this.MiddleX) return "bl";
			if (b.y > this.height -
				c && b.x > this.MiddleX) return "br"
		}
	},
	setFlipInterval: function () {
		this.flipInterval = function () {
			if (this.flipArray && this.flipArray.array && 0 != this.flipArray.array.length)
				for (var b = 0; b < this.flipArray.array.length; b++)
					if (this.flipArray.array[b]) {
						var c = this.flipArray.array[b];
						if (!this.flipArray[c]) this.flipArray.array.removeElement(c), b--;
						else if (this.flipArray[c].fromPoint && this.flipArray[c].startPoint && this.flipArray[c].toPoint && this.flipArray[c].downMask && this.flipArray[c].upMask && !this.flipArray[c].flipping) {
							this.flipArray[c].Alice = !0;
							this.flipArray[c].coordinate || (this.flipArray[c].coordinate = this.flipArray[c].startPoint);
							var d = 0.42 * (this.flipArray[c].toPoint.x - this.flipArray[c].coordinate.x) + this.flipArray[c].coordinate.x,
								f = 0.52 * (this.flipArray[c].toPoint.y - this.flipArray[c].coordinate.y) + this.flipArray[c].coordinate.y,
								g = this.flipArray[c].downMask.pageIndex,
								h = this.flipArray[c].upMask.pageIndex;
							this.flipToPoint(this.flipArray[c], this.pageWidth, this.pageHeight, this.maskWidth, this.flipArray[c].fromPoint, {
								x: d,
								y: f
							});
							var k = Math.abs(d -
								this.flipArray[c].fromPoint.x);
							this.setThicknessMovingScale(g, h, k);
							this.movetoCenter(g, h, k);
							!this.flipArray[c].flipping && this.flipArray[c].loosen && 1 > Math.abs(d - this.flipArray[c].toPoint.x) && 1 > Math.abs(f - this.flipArray[c].toPoint.y) && (this.flipArray.curlingArray.removeElement(c), this.flipArray.fallbackArray.removeElement(c), this.flipArray.flipArray.removeElement(c), this.flipArray[c].Alice = !1, d = this.flipArray[c].toPoint.x, f = this.flipArray[c].toPoint.y, this.flipToPoint(this.flipArray[c], this.pageWidth,
								this.pageHeight, this.maskWidth, this.flipArray[c].fromPoint, {
									x: d,
									y: f
								}), k = Math.abs(d - this.flipArray[c].fromPoint.x), this.setThicknessMovingScale(g, h, k), this.movetoCenter(g, h, k), this.endFlipByIndex(g, h, 0 > this.flipArray[c].toPoint.x), this.removeFlipArrayByIndex(this.flipArray[c].currentIndex, this.flipArray[c].nextIndex), this.resetBookShadow(this.currentPageIndex), this.setBookmarkVisible(this.currentPageIndex), this.setThicknessVisible(this.currentPageIndex), this.showOrHideGrayShadow(this.currentPageIndex),
								this.afterCurling(), b--)
						}
					}
		}.interval(this, 20)
	},
	afterCurling: function () { },
	mouseWheelFlip: function () {
		if (bookConfig.mouseWheelFlip) {
			var b;
			this.flipBook.bind(_event._mousewheel, function (c) {
				var d;
				void 0 != b && 150 > new Date - b ? d = !1 : (b = new Date, d = !0);
				if (!d) return !1;
				d = c.originalEvent;
				0 > Math.max(-1, Math.min(1, d.wheelDelta || -d.detail)) ? rightToLeft ? previousPageFun() : nextPageFun() : rightToLeft ? nextPageFun() : previousPageFun();
				stopEvent(c);
				return !1
			})
		}
	},
	initEvent: function () {
		this.moveDirectionType = {
			MOVE_LEFT: -1,
			MOVE_RIGHT: 1,
			MOVE_NONE: 0
		};
		this.mouseMoveDirection = this.moveDirectionType.MOVE_NONE;
		this.hammerEventModular();
		this.mouseWheelFlip()
	},
	hammerEventModular: function () {
		var b = new Hammer.Manager(this.flipBook[0]);
		b.add(new Hammer.Pan);
		b.add((new Hammer.Swipe).recognizeWith(b.get("pan")));
		b.add(new Hammer.Press);
		b.add(new Hammer.Pinch);
		b.add(new Hammer.Tap({
			event: "doubletap",
			taps: 2
		}));
		b.add(new Hammer.Tap);
		b.on("panstart panmove", this.onPan.bind(this));
		b.on("press", this.onPress.bind(this));
		b.on("tap", this.onTap.bind(this));
		this.flipBook.bind("mouseover mousemove", this.onOver.bind(this));
		this.flipBook.bind(_event._down, this.onDown.bind(this));
		$("body").bind(_event._end, this.onUp.bind(this));
		this.flipBook.speed(this.onSwipe.bind(this));
		this.flipBook.zoom({
			zoomStart: function () {
				this.zoomStart()
			}.bind(this),
			zoomIn: function () {
				this.zoomIn()
			}.bind(this),
			onPan: function () {
				this.bookMap && this.bookMap.refreshArea()
			}.bind(this),
			zoomOut: function () {
				this.zoomOut()
			}.bind(this),
			onZoomed: function (b) {
				this.onZoomed(b)
			}.bind(this)
		})
	},
	zoomStart: function () {
		var b =
			this.pageArray.length,
			c = this.getCurrentPages();
		this.zoomPageArray = [];
		for (var d = 0; d < b; d++) this.pageArray[d] && 0 > c.indexOf(d) && this.pageArray[d].visible && (this.zoomPageArray.push(this.pageArray[d]), this.pageArray[d].setVisible(!1))
	},
	zoomIn: function () {
		this.status_zoom = !0;
		this.adContainer && this.adContainer.css({
			"z-index": 1
		});
		this.flipBook.parameters.zoomFlag = !0
	},
	zoomOut: function () {
		this.flipBook.parameters.zoomFlag = !1;
		this.adContainer && 1 == this.currentPageIndex && this.adContainer.css({
			"z-index": 3
		});
		this.status_zoom = !1;
		this.controlBar && this.controlBar.setVisible(!1);
		this.bookMap && this.bookMap.hide()
	},
	onDown: function () {
		this.status_zoom || this.isZomming || (this.fingleDown = !0)
	},
	onUp: function (b) {
		this.status_zoom ||
			this.isZomming || bookType != this.bookType || (b = this.realPoint(b)[0], b = this.aroundCorner(b), this.fingleDown = !1, bookConfig.CurlingPageCorner && b && 0 <= b.indexOf("l") && this.optionPage && this.flipArray[this.optionPage] && this.flipArray[this.optionPage].AliceToRight || bookConfig.CurlingPageCorner && b && 0 <= b.indexOf("r") && this.optionPage && this.flipArray[this.optionPage] && this.flipArray[this.optionPage].AliceToLeft || (this.optionPage && (b = this.mouseMoveDirection == this.moveDirectionType.MOVE_LEFT && 0 < this.flipArray[this.optionPage].startPoint.x ||
				this.mouseMoveDirection == this.moveDirectionType.MOVE_RIGHT && 0 > this.flipArray[this.optionPage].startPoint.x, (this.flipArray[this.optionPage].toPoint.x < this.MiddleX && 0 < this.flipArray[this.optionPage].startPoint.x || this.flipArray[this.optionPage].toPoint.x > this.MiddleX && 0 > this.flipArray[this.optionPage].startPoint.x || b) && this.pageDragToFlip(), this.flipArray[this.optionPage] && (this.flipArray[this.optionPage].loosen = !0), this.optionPage = null), this.unCurling()))
	},
	onPinch: function (b) {
		this.status_zoom || this.isZomming ||
			this.status_zoom || this.status_resize || this.flipping || "pinchout" != b.type || (this.endFlip(), this.zoomToPage(this.currentPageIndex))
	},
	onDoubleTap: function (b) {
		if (!this.status_resize && !this.flipping) {
			var c = this.realPoint(b.srcEvent)[0];
			this.aroundCorner(c) || (this.endFlip(), this.zoomToPage(this.currentPageIndex, b.srcEvent.pageX, b.srcEvent.pageY))
		}
	},
	pageDragToFlip: function () {
		this.flipArray[this.optionPage].toPoint.y = this.flipArray[this.optionPage].startPoint.y;
		this.flipArray[this.optionPage].toPoint.x = -this.flipArray[this.optionPage].startPoint.x;
		this.mouseMoveDirection = this.moveDirectionType.MOVE_NONE;
		this.flipArray[this.optionPage].AliceToLeft = !1;
		this.flipArray[this.optionPage].AliceToRight = !1;
		this.flipArray[this.optionPage].Alice = !1;
		this.flipArray[this.optionPage].flipping = !0;
		this.flipArray[this.optionPage].dragMoveToFlip = !0;
		this.flipToDirection = 0 > this.flipArray[this.optionPage].startPoint.x ? "right" : "left";
		var b = this.getNextPageIndex();
		this.tmpDragToFlipTimeout && window.clearTimeout(this.tmpDragToFlipTimeout);
		this.dragToFlip = !0;
		this.tmpDragToFlipTimeout =
			window.setTimeout(function () {
				this.dragToFlip = !1
			}.bind(this), 500);
		gotoPageFun(b)
	},
	onPan: function (b) {
		if (!(this.status_zoom || this.isZomming || bookType != this.bookType || this.status_zoom || this.status_resize || this.flipping || this.flipArray.fallbackArray && 0 < this.flipArray.fallbackArray.length)) {
			var c = this.realPoint(b.srcEvent) ? this.realPoint(b.srcEvent)[0] : '',
				d = this.aroundCorner(c);
			this.optionPage ? (this.flipArray[this.optionPage].toPoint = c, this.lastMousePoint && (this.mouseMoveDirection = 0 <= c.x - this.lastMousePoint.x ? this.moveDirectionType.MOVE_RIGHT :
				this.moveDirectionType.MOVE_LEFT), this.lastMousePoint = c) : ("panstart" == b.type && d || 30 < Math.abs(b.deltaX) && (c.x < this.MiddleX && 0 < b.deltaX || c.x > this.MiddleX && 0 > b.deltaX)) && this.curling(c, d)
		}
	},
	onPress: function (b) {
		if (!(this.status_zoom || this.isZomming || bookType != this.bookType || this.status_zoom || this.status_resize || this.flipping || this.flipArray.fallbackArray && 0 < this.flipArray.fallbackArray.length)) {
			b = this.realPoint(b.srcEvent)[0];
			var c = this.aroundCorner(b);
			this.optionPage ? this.flipArray[this.optionPage].toPoint =
				b : (c || (c = b.x > this.MiddleX ? "r" : "l"), this.curling(b, c))
		}
	},
	onRotate: function (b) { },
	onSwipe: function (b, c) {
		if (!this.status_zoom && !this.isZomming && !this.dragToFlip) {
			var d;
			d = 30 * windowWidth / 1600;
			Math.abs(b) <= d || (b < -d ? this.flipFromDirection(this.coordinate_bottom_right) : b > d && this.flipFromDirection(this.coordinate_bottom_left))
		}
	},
	onTap: function (b) {
		if (this.status_zoom || this.isZomming) onWindowTap(b.srcEvent);
		else if (bookType == this.bookType && !this.status_zoom &&
			!this.status_resize) {
			var c = this.realPoint(b.srcEvent) ? this.realPoint(b.srcEvent)[0] : '';
			(c = this.aroundCorner(c)) ? this.flipFromDirection(c) : (onWindowTap(b.srcEvent))
		}
	},
	flipFromDirection: function (b) {
		if (!(this.flipArray.fallbackArray && 0 < this.flipArray.fallbackArray.length))
			if (0 <= b.indexOf("l")) {
				if (!this.flipping || this.flipToDirection != this.direction_left) {
					if (this.flipArray.curlingArray && 0 < this.flipArray.curlingArray.length) {
						b = this.flipArray.curlingArray.length;
						for (var c = 0; c < b; c++)
							if (this.flipArray.curlingArray[c].AliceToLeft) return
					}
					this.flipToDirection =
						this.direction_right;
					b = this.getNextPageIndex();
					gotoPageFun(b)
				}
			} else if (0 <= b.indexOf("r") && (!this.flipping || this.flipToDirection != this.direction_right)) {
				if (this.flipArray.curlingArray && 0 < this.flipArray.curlingArray.length)
					for (b = this.flipArray.curlingArray.length, c = 0; c < b; c++)
						if (this.flipArray.curlingArray[c].AliceToRight) return;
				this.flipToDirection = this.direction_left;
				b = this.getNextPageIndex();
				gotoPageFun(b)
			}
	},
	onOver: function (b) {
		if (!this.status_zoom && !this.isZomming && bookType == this.bookType && !this.fingleDown &&
			bookConfig.CurlingPageCorner) {
			if (this.realPoint(b)) {
				b = this.realPoint(b)[0];
				var c = this.aroundCorner(b);
				c ? this.curling(b, c) : (this.flipArray[this.optionPage] && (this.flipArray[this.optionPage].loosen = !0), this.optionPage = null);
				this.unCurling()
			}

		}
	},
	curling: function (b, c) {
		this.status_zoom || this.status_resize || (this.optionPage = this.curlingPage(b, c)) && (this.flipInterval || this.setFlipInterval())
	},
	curlingPage: function (b, c) {
		var d, f, g, h;
		if (!c && b.x < this.MiddleX || c && 0 <= c.indexOf("l")) {
			if (this.flipping && "left" == this.flipToDirection) return;
			f = this.realIndex(!1)[0];
			g = this.realIndex(!1)[1];
			d = f + "-" + g;
			h = !1
		}
		if (!c && b.x > this.MiddleX || c && 0 <= c.indexOf("r")) {
			if (this.flipping && "right" == this.flipToDirection) return;
			f = this.realIndex(!0)[0];
			g = this.realIndex(!0)[1];
			d = f + "-" + g;
			h = !0
		}
		if (!(!(d && f && g) || 0 >= f || f > originTotalPageCount || 0 >= g || g > originTotalPageCount || this.flipArray[d] && this.flipArray[d].fallback || this.flipArray[d] && this.flipArray[d].flipping)) return this.defineFlipPage(d, b, c, f, g, h), d
	},
	defineFlipPage: function (b, c, d, f, g, h) {
		!c || 0 >= f || f > originTotalPageCount ||
			0 >= g || g > originTotalPageCount || (d = this.getFromStartPointByCoordinate(c, d), this.flipArray[b] || (this.flipArray[b] = {}), h ? (this.flipArray[b].AliceToLeft = !0, this.flipArray[b].AliceToRight = !1) : (this.flipArray[b].AliceToLeft = !1, this.flipArray[b].AliceToRight = !0), this.flipArray[b].loosen = !1, this.flipArray[b].fromPoint = d[0], this.flipArray[b].startPoint = d[1], this.flipArray[b].toPoint = c, this.flipArray[b].downMask || this.flipArray[b].upMask || (this.beforeFlipTo(g), this.flipToPoint(this.flipArray[b], this.pageWidth,
				this.pageHeight, this.maskWidth, this.flipArray[b].fromPoint, this.flipArray[b].startPoint), c = Math.abs(this.flipArray[b].startPoint - this.flipArray[b].fromPoint.x), this.setThicknessMovingScale(f, g, c), this.movetoCenter(f, g, c)), 0 > this.flipArray.curlingArray.indexOf(b) && this.flipArray.curlingArray.push(b), this.flipArray.fallbackArray.removeElement(b), this.flipArray.flipArray.removeElement(b))
	},
	unCurling: function () {
		if (!this.status_zoom && !this.status_resize && this.flipArray.array)
			for (var b = this.flipArray.array.length,
				c = 0; c < b; c++) {
				var d = this.flipArray.array[c];
				d == this.optionPage || !this.flipArray[d] || this.flipArray[d].fallback || this.flipArray[d].flipping || !this.flipArray[d].AliceToRight && !this.flipArray[d].AliceToLeft || (this.flipArray[d].AliceToRight = !1, this.flipArray[d].AliceToLeft = !1, this.flipArray[d].fallback = !0, this.flipArray[d].toPoint = this.flipArray[d].startPoint, 0 > this.flipArray.fallbackArray.indexOf(d) && this.flipArray.fallbackArray.push(d), this.flipArray.curlingArray.removeElement(d), this.flipArray.flipArray.removeElement(d))
			}
	},
	getFromStartPointByCoordinate: function (b, c) {
		if (b) {
			var d = {
				x: 0,
				y: 0
			},
				f = {
					x: 0,
					y: 0
				},
				g = b.y > this.pageHeight / 2 ? b.y - 5 : b.y + 5;
			0 > b.x && (d = {
				x: -this.pageWidth,
				y: g
			});
			0 < b.x && (d = {
				x: this.pageWidth,
				y: g
			});
			c && 0 <= c.indexOf("r") && (d.x = this.pageWidth);
			c && 0 <= c.indexOf("l") && (d.x = -this.pageWidth);
			"tl" == c && (d = {
				x: -this.pageWidth,
				y: 0
			});
			"bl" == c && (d = {
				x: -this.pageWidth,
				y: this.pageHeight
			});
			"tr" == c && (d = {
				x: this.pageWidth,
				y: 0
			});
			"br" == c && (d = {
				x: this.pageWidth,
				y: this.pageHeight
			});
			f.x = d.x;
			f.y = d.y;
			return [d, f]
		}
	},
	realIndex: function (b) {
		var c =
			2 * parseInt(this.currentPageIndex / 2);
		if (b && !rightToLeft || !b && rightToLeft) return [c + 1, c + 2];
		if (!b && !rightToLeft || b && rightToLeft) return [c, c - 1]
	},
	getNextPageIndex: function () {
		var b = this.currentPageIndex + 2;
		if ("right" == this.flipToDirection && !rightToLeft || "left" == this.flipToDirection && rightToLeft) b = this.currentPageIndex - 2;
		b = Math.max(1, b);
		return b = Math.min(originTotalPageCount, b)
	},
	realBookPosition: function () {
		var b = this.flipBook.offset().left,
			c = this.flipBook.offset().top;
		return [b, c]
	},
	realPoint: function (b) {
		if ((b =
			isTouch ? b.originalEvent ? b.originalEvent.changedTouches : b.changedTouches : [b]) && !(3 <= b.length)) {
			var c = this.realBookPosition()[0],
				d = this.realBookPosition()[1],
				f = b[0].pageX,
				g = b[0].pageY,
				f = f - c - this.pageWidth,
				g = g - d;
			if (!b[1]) return [{
				x: f,
				y: g
			}];
			var h = b[1].pageX;
			b = b[1].pageY;
			h = h - c - this.pageWidth;
			return [{
				x: f,
				y: g
			}, {
				x: h,
				y: b - d
			}]
		}
	},
	getThicknessWidth: function () {
		return [this.leftThickness ? this.leftThickness.getWidth() : 0, this.rightThickness ? this.rightThickness.getWidth() : 0]
	}
}),
	PinchZoomBook = Class({
		onZoomed: function (b) {
			for (var c =
				this.zoomPageArray.length, d = 0; d < c; d++) this.zoomPageArray[d] && this.zoomPageArray[d].setVisible(!0);
			this.zoomPageArray = [];
			isPhone() || isPad() || !b || !this.flipBook.parameters || this.flipBook.parameters.resize || (this.flipBook.parameters.resize = !0, b = this.flipBook.offset().left, c = this.flipBook.offset().top, b -= this.flipBook.parameters.left, c -= this.flipBook.parameters.top, d = this.flipBook.parameters.scale, 1 != d && (this.resizeBook(parseInt(this.width * d / 2), parseInt(this.height * d)), this.setThicknessPosition(d)), transformCSS({
				tran: {
					x: b,
					y: c
				},
				scale: 1,
				origin: {
					x: 0,
					y: 0
				},
				obj: this.flipBook
			}), this.flipBook.parameters.tran = {
				x: b,
				y: c
			}, this.flipBook.parameters.scale = 1, this.flipBook.parameters.toScale = 1, this.flipBook.parameters.width = $(this.flipBook).width(), this.flipBook.parameters.height = $(this.flipBook).height(), this.flipBook.parameters.origin = {
				x: 0,
				y: 0
			}, this.flipBook.parameters.resize = !1, this.bookMap && this.bookMap.refreshArea())
		},
		setThicknessPosition: function (b) {
			b || (b = 1);
			this.leftFlipShotBar && this.leftFlipShotBar.setScale(b);
			this.rightFlipShotBar &&
				this.rightFlipShotBar.setScale(b);
			if (this.leftThickness) this.leftThickness.onResize();
			if (this.rightThickness) this.rightThickness.onResize();
			this.leftFlipShotBar && this.leftFlipShotBar.setThicknessPosition(this.width, this.height);
			this.rightFlipShotBar && this.rightFlipShotBar.setThicknessPosition(this.width, this.height)
		}
	}),
	NormalPhoneBook = Class({}).extend(NormalBook).extend(PinchZoomBook),
	SingleBook = Class({
		create: function (b, c) {
			this.bookType = BookType.single_book;
			this.pageArray = [];
			this.pageMaskArray = [];
			this.pageBackArray = [];
			this.pageBackMaskArray = [];
			this.flipArray = {};
			this.maskWidth = this.height = this.width = this.pageHeight = this.pageWidth = 0;
			this.currentPageIndex = c;
			this.flipToPage = this.flippingPage = null;
			this.flipPoint = Point(0, 0);
			this.thicknessWidth = 30;
			this.taskList = new TaskList;
			this.taskList.setLargeLength(5);
			this.flippingTime = 1E3 * bookConfig.flippingTime;
			this.adContainer = $("<div id='adContainer'></div>");
			this.adContainer.css({
				position: "absolute",
				"z-index": 1
			});
			this.createBook(b);
			global.rand100 = Math.floor(100 *
				Math.random());
			this.initMiniFullscreen();

		},
		createBook: function (b) {
			this.flipBook = $("<div class='book' id='singleFlipBook' ></div>");
			this.setBookPageByIndex(this.currentPageIndex);
			this.thickness = rightToLeft ? new LeftThickness(this.flipBook, this.thicknessWidth, !0) : new RightThickness(this.flipBook, this.thicknessWidth, !0);
			this.isHardPage(1, 2) ? this.thickness.setMinScale(0) : this.thickness.setMinScale(6);
			this.normalBookShadow = new BookShadow(this.flipBook);
			this.resetBookShadow();
			// isPhone() || isPad() || (this.bmt = new initBookMarkTab(this.flipBook));
			this.init1 = 50;
			b.append(this.flipBook);
			setCurrentIndexTextField(this.currentPageIndex, !1);
			this.thickness.resetPosition();
			setLocationHash(this.currentPageIndex);
			this.currentPageIndex >= originTotalPageCount - 1 && this.thickness.setVisible(!1);
			this.initEvent();
			isTouchDevice() || this.initZoomHintTimer(b)
		},
		boundaryPages: function () {
			return [2]
		},
		hasAliceHardPage: function (b) {
			if (!bookConfig.HardPageEnable) return !1;
			if ((1 == b || 0 <= this.boundaryPages().indexOf(this.currentPageIndex)) && this.flipArray.flipArray && 0 < this.flipArray.flipArray.length) {
				var c = window.setInterval(function () {
					this.flipArray.flipArray && 0 < this.flipArray.flipArray.length || (gotoPageFun(b), window.clearInterval(c))
				}.bind(this), 20);
				return !0
			}
		},
		handleHardPage: function (b) {
			if (!bookConfig.HardPageEnable || 1 != b && 1 != this.currentPageIndex) return !1;
			if (1 == b && 0 > BookInfo.getCurrentPages().indexOf(2)) return 1 == b && gotoPageFun(2), window.setTimeout(function () {
				gotoPageFun(b)
			},
				20), !0;
			if (1 == this.currentPageIndex && 2 != b) return 1 == this.currentPageIndex && gotoPageFun(2), window.setTimeout(function () {
				gotoPageFun(b)
			}, 20), !0
		},
		newPage: function (b) {
			return new NormalSide(b, "page", BookType.single_book)
		},
		setBookPageByIndex: function (b) {
			isNaN(b) || 0 >= b || (this.unWrapPageExcludeArray([b, b + 1]), this.addPageArray([b, b + 1]), this.addPageBackArray([b]), this.loading(), this.currentPage = this.pageArray[b], this.currentPage2 = this.pageBackArray[b], this.nextPage = this.pageArray[b + 1], this.previousPage = this.pageArray[b -
				1], this.previousPage2 = this.pageBackArray[b - 1], this.setPageCss())
		},
		addPageBackMaskArray: function (b) {
			if (b && this.pageBackMaskArray) {
				for (var c = 0; c < b.length; c++)
					if (!(0 >= b[c] || b[c] > originTotalPageCount || this.pageBackMaskArray[b[c]])) {
						this.pageBackArray[b[c]] || this.addPageBackArray([b[c]]);
						var d = this.pageBackArray[b[c]],
							f = new NormalMask(b[c], "pageBackMask");
						f.onResize(this.pageWidth, this.pageHeight);
						d.setCSSByStyle({
							top: (f.width - d.height) / 2
						});
						d.wrap(f.container);
						f.container = $("#pageBackMask" + b[c]);
						f.setPage(d);
						this.pageBackMaskArray[b[c]] = f
					}
				this.setPageMaskCss()
			}
		},
		setPageMaskCss: function () {
			$(".mask").css({
				right: "100%"
			});
			rightToLeft && $(".mask").css({
				right: "0px"
			})
		},
		addPageBackArray: function (b) {
			if (b && this.pageBackArray)
				for (var c = 0; c < b.length; c++)
					if (!(0 >= b[c] || b[c] > originTotalPageCount || (!this.pageBackArray[b[c]] || this.flipping && !imageLoaded[b[c]] || this.fillContent(b[c]), this.pageBackArray[b[c]]))) {
						var d = new NormalSide(b[c], "pageBack", BookType.single_book);
						d.onResize(this.pageWidth, this.pageHeight);
						d.mirrorSide();
						this.pageBackArray[b[c]] = d;
						this.flipping && !imageLoaded[b[c]] || this.fillContent(b[c]);
						this.flipBook.append(d.side)
					}
		},
		setPageCss: function () {
			var b = transformCSS({
				rotate: 0,
				tran: {
					x: 0,
					y: 0
				}
			});
			this.currentPage && (this.currentPage.setZIndex(4), this.currentPage.setLeftOrRight(!1), this.currentPage.setCSSByStyle(b));
			this.previousPage && (this.previousPage.setZIndex(1), this.previousPage.setLeftOrRight(!1), this.previousPage.setCSSByStyle(b));
			this.previousPage2 && (this.previousPage2.setZIndex(0), this.previousPage2.setLeftOrRight(!1),
				this.previousPage2.setCSSByStyle(b));
			this.currentPage2 && (this.currentPage2.setZIndex(3), this.currentPage2.setLeftOrRight(!1), this.currentPage2.setCSSByStyle(b));
			this.nextPage && (this.nextPage.setZIndex(2), this.nextPage.setLeftOrRight(!1), this.nextPage.setCSSByStyle(b));
			rightToLeft && (this.currentPage && this.currentPage.setLeftOrRight(!0), this.previousPage && this.previousPage.setLeftOrRight(!0), this.previousPage2 && this.previousPage2.setLeftOrRight(!0), this.currentPage2 && this.currentPage2.setLeftOrRight(!0),
				this.nextPage && this.nextPage.setLeftOrRight(!0))
		},
		realBookPosition: function () {
			var b = this.flipBook.offset().left - (rightToLeft ? 0 : this.pageWidth),
				c = this.flipBook.offset().top;
			return [b, c]
		},
		edgeX: function () {
			this.MiddleX = this.pageWidth / 2;
			rightToLeft && (this.MiddleX = -this.pageWidth / 2)
		},
		realIndex: function (b) {
			var c = this.currentPageIndex;
			if (b && !rightToLeft || !b && rightToLeft) return [c, c + 1];
			if (!b && !rightToLeft || b && rightToLeft) return [c, c - 1]
		},
		getCurrentPages: function () {
			return [this.currentPageIndex]
		},
		getPagesByIndex: function (b) {
			return [b]
		},
		getNextPageIndex: function () {
			var b = this.currentPageIndex + 1;
			if ("right" == this.flipToDirection && !rightToLeft || "left" == this.flipToDirection && rightToLeft) b = this.currentPageIndex - 1;
			b = Math.max(1, b);
			return b = Math.min(originTotalPageCount, b)
		},
		getFromStartPointByCoordinate: function (b, c) {
			if (b) {
				var d = {
					x: 0,
					y: 0
				},
					f = {
						x: 0,
						y: 0
					},
					g = b.y > this.pageHeight / 2 ? b.y - 5 : b.y + 5;
				b.x < this.MiddleX && (d.y = g, f.x = -this.pageWidth);
				b.x > this.MiddleX && (d.y = g, f.x = this.pageWidth);
				c && 0 <= c.indexOf("r") && (f.x = this.pageWidth);
				c && 0 <= c.indexOf("l") &&
					(f.x = -this.pageWidth);
				"tl" == c && (d.y = 0);
				"bl" == c && (d.y = this.pageHeight);
				"tr" == c && (d.y = 0);
				"br" == c && (d.y = this.pageHeight);
				d.x = rightToLeft ? -this.pageWidth : this.pageWidth;
				f.y = d.y;
				return [d, f]
			}
		},
		getFromStartPointByIndex: function (b) {
			var c = this.currentPageIndex;
			if (b != c && b != c) {
				var d = {
					x: 0,
					y: 0
				},
					f = {
						x: 0,
						y: 0
					},
					g = !1,
					d = {
						x: this.pageWidth,
						y: this.pageHeight
					};
				rightToLeft && (d = {
					x: -this.pageWidth,
					y: this.pageHeight
				});
				if (b > c && !rightToLeft || b < c && rightToLeft) g = !0;
				if (b < c && !rightToLeft || b > c && rightToLeft) g = !1;
				b > c && (f = {
					x: d.x,
					y: this.pageHeight
				});
				b < c && (f = {
					x: -d.x,
					y: this.pageHeight
				});
				if (!this.flipping || !g || "right" != this.flipToDirection)
					if (!this.flipping || g || "left" != this.flipToDirection) return this.flipToDirection = g ? "left" : "right", [d, f]
			}
		},
		setFlipOringinPoint: function (b) {
			b.dragMoveToFlip || rightToLeft || (b.fromPoint = {
				x: this.pageWidth,
				y: this.pageHeight
			});
			!b.dragMoveToFlip && rightToLeft && (b.fromPoint = {
				x: -this.pageWidth,
				y: this.pageHeight
			});
			b.toPoint = "left" == this.flipToDirection ? {
				x: -this.pageWidth,
				y: b.fromPoint.y
			} : {
					x: this.pageWidth,
					y: b.fromPoint.y
				};
			b.startPoint || (b.startPoint = {
				x: 0,
				y: 0
			});
			b.startPoint.x = -b.toPoint.x;
			b.startPoint.y = b.toPoint.y
		},
		getDownUpPage: function (b, c) {
			var d = b;
			b > c && (d = c);
			this.addPageMaskArray([d]);
			this.addPageBackMaskArray([d]);
			this.pageMaskArray[d] && this.pageMaskArray[d].page.setCSSByName("right-side");
			this.pageBackMaskArray[d] && (this.pageBackMaskArray[d].page.setCSSByName("flip-side"), this.pageBackMaskArray[d].page.side.addClass("boxShadow"));
			return [this.pageMaskArray[d], this.pageBackMaskArray[d]]
		},
		getDownUpHardPage: function (b,
			c) {
			var d = b;
			b > c && (d = c);
			this.addPageArray([d]);
			this.addPageBackArray([d]);
			rightToLeft ? (this.pageArray[d] && this.pageArray[d].setCSSByName("flip-hard-left-side"), this.pageBackArray[d] && this.pageBackArray[d].setCSSByName("flip-hard-right-side")) : (this.pageArray[d] && this.pageArray[d].setCSSByName("flip-hard-right-side"), this.pageBackArray[d] && this.pageBackArray[d].setCSSByName("flip-hard-left-side"));
			return [this.pageArray[d], this.pageBackArray[d]]
		},
		setFlipAlpha: function (b, c, d, f) {
			if (b && d && f) {
				var g = 1;
				0 >=
					f.x / d.x && (g = 1 - Math.abs(f.x / c));
				c = {
					opacity: g
				};
				b.downMask && b.downMask.setCSSByStyle(c);
				b.upMask && b.upMask.setCSSByStyle(c)
			}
		},
		flipToHardPoint: function (b, c, d, f, g) {
			b && f && g && (b.coordinate = g, d = -90 + 90 * Math.abs(g.x / f.x), 0 > g.x && (d = 90 - 90 * Math.abs(g.x / f.x)), c = transformCSS({
				perspective: 3E3,
				rotateY: d
			}), d = transformCSS({
				perspective: 3E3,
				rotateY: d
			}), b.downMask && b.downMask.setCSSByStyle(c), b.upMask && b.upMask.setCSSByStyle(d), 0 > g.x / f.x ? (b.upMask.setVisible(!1), b.downMask.setVisible(!1)) : (b.upMask.setVisible(!1), b.downMask.setVisible(!0)),
				this.followToPoint(b, f, g))
		},
		getFlipTo: function (b) {
			var c = this.currentPageIndex,
				d = "";
			b > c && (d = "max");
			b < c && (d = "min");
			return {
				flipTo: d,
				minIndex: c,
				maxIndex: c,
				toIndex: b
			}
		},
		setPageMaskZIndex: function (b) {
			if (b) {
				var c = originTotalPageCount + 5 - b.downMask.pageIndex;
				b.upMask.setZIndex(originTotalPageCount + 5 + b.upMask.pageIndex);
				b.downMask.setZIndex(c)
			}
		},
		setAttachmentBefore: function (b) {
			b >= originTotalPageCount && this.thickness.hide()
		},
		setAttachmentAfter: function () {
			this.stopMedia();
			this.stopAllSlider();
			this.flipping || this.openShownSlider();
			this.flipping || this.openShownMedia();
			this.currentPageIndex < originTotalPageCount && this.thickness.show();
			// bookConfig.ThumbnailsButtonVisible && thumbnail.clearHighLight();
			// bookConfig.ThumbnailsButtonVisible && thumbnail.setHighLight(this.currentPageIndex);
			resizeBookAfterFlip && !this.flipping && window.setTimeout(function () {
				onStageResize()
			}, 30);
			this.bookMap && this.bookMap.fillContent(this.currentPageIndex)
		},
		isHardPage: function (b, c) {
			var d = b;
			b > c && (d = c);
			return $.browser.msie && 11 > $.browser.version || !bookConfig.HardPageEnable ||
				1 != d && d != totalPageCount ? !1 : !0
		},
		flipToMax: function (b, c) {
			var d = this.beginFlipByIndex(b, c);
			this.addPageArray([c]);
			this.pageArray[c] && (this.pageArray[c].setZIndex(2), this.pageArray[c].setAttachment(rightToLeft), d.nextPage = this.pageArray[c]);
			this.pageBackArray[c] && (this.pageBackArray[c].remove(), this.pageBackArray[c] = void 0);
			for (var f = c + 1; f <= originTotalPageCount; f++)
				if (this.pageArray[f] || this.pageBackArray[f]) this.pageArray[f] && this.pageArray[f].remove(), this.pageBackArray[f] && this.pageBackArray[f].remove(),
					this.pageArray[f] = void 0, this.pageBackArray[f] = void 0;
			for (f = b + 1; f < c; f++)
				if (this.pageArray[f] || this.pageBackArray[f]) this.pageArray[f] && this.pageArray[f].remove(), this.pageBackArray[f] && this.pageBackArray[f].remove(), this.pageArray[f] = void 0, this.pageBackArray[f] = void 0;
			return d
		},
		flipToMin: function (b, c) {
			var d = this.beginFlipByIndex(b, c);
			this.pageArray[b] && (d.nextPage = this.pageArray[b]);
			this.pageArray[c] && this.pageArray[c].setAttachment(rightToLeft);
			for (var f = c - 1; 0 <= f; f--)
				if (this.pageArray[f] || this.pageBackArray[f]) this.pageArray[f] &&
					this.pageArray[f].remove(), this.pageBackArray[f] && this.pageBackArray[f].remove(), this.pageArray[f] = void 0, this.pageBackArray[f] = void 0;
			for (f = b - 1; f > c; f--)
				if (this.pageArray[f] || this.pageBackArray[f]) this.pageArray[f] && this.pageArray[f].remove(), this.pageBackArray[f] && this.pageBackArray[f].remove(), this.pageArray[f] = void 0, this.pageBackArray[f] = void 0;
			return d
		},
		afterFlipToMax: function (b) {
			this.addPageArray([b - 1]);
			this.addPageBackArray([b]);
			this.pageArray[b] && this.pageArray[b].setZIndex(4);
			this.pageBackArray[b] &&
				this.pageBackArray[b].setZIndex(3);
			this.pageArray[b + 1] && this.pageArray[b + 1].setZIndex(2);
			this.pageArray[b - 1] && this.pageArray[b - 1].setZIndex(1);
			this.pageBackArray[b - 1] && this.pageBackArray[b - 1].setZIndex(0);
			this.pageArray[b + 1] && this.fillContent(b + 1);
			for (var c = b - 2; 0 <= c; c--)
				if (this.pageArray[c] || this.pageBackArray[c]) this.pageArray[c] && this.pageArray[c].remove(), this.pageBackArray[c] && this.pageBackArray[c].remove(), this.pageArray[c] = void 0, this.pageBackArray[c] = void 0;
			this.thickness.resetPosition(b);
			this.thickness.resetScale(b)
		},
		afterFlipToMin: function (b) {
			this.addPageArray([b + 1]);
			this.addPageBackArray([b]);
			this.pageArray[b] && this.pageArray[b].setZIndex(4);
			this.pageBackArray[b] && this.pageBackArray[b].setZIndex(3);
			this.pageArray[b + 1] && this.pageArray[b + 1].setZIndex(2);
			this.pageArray[b - 1] && this.pageArray[b - 1].setZIndex(1);
			this.pageBackArray[b - 1] && this.pageBackArray[b - 1].setZIndex(0);
			this.pageArray[b - 1] && this.fillContent(b - 1);
			for (var c = b + 2; c <= originTotalPageCount; c++)
				if (this.pageArray[c] || this.pageBackArray[c]) this.pageArray[c] &&
					this.pageArray[c].remove(), this.pageBackArray[c] && this.pageBackArray[c].remove(), this.pageArray[c] = void 0, this.pageBackArray[c] = void 0;
			this.thickness.resetPosition(b);
			this.thickness.resetScale(b)
		},
		unWrapPageBackMaskArray: function (b) {
			if (b && this.pageBackMaskArray)
				for (var c = 0; c < b.length; c++)
					if (!(0 >= b[c] || b[c] > originTotalPageCount)) {
						var d = this.pageBackMaskArray[b[c]];
						if (this.pageBackArray[b[c]]) {
							var f = transformCSS({
								rotate: 0,
								tran: {
									x: 0,
									y: 0
								}
							});
							d && this.pageBackArray[b[c]].unwrap();
							this.pageBackArray[b[c]].setCSSByStyle({
								top: 0
							});
							this.pageBackArray[b[c]].setCSSByStyle(f)
						}
						this.pageBackMaskArray[b[c]] = void 0
					}
		},
		endFlipByIndex: function (b, c, d) {
			isNaN(b) || isNaN(c) || (this.unWrapPageMaskArray([b]), this.unWrapPageBackMaskArray([b]), this.pageArray[b].setLeftOrRight(rightToLeft), this.pageBackArray[b].setLeftOrRight(rightToLeft), this.pageArray[b].clearFlipShadow(), this.pageBackArray[b].clearFlipShadow())
		},
		onResize: function (b, c) {
			this.resizeBook(b, c);
			this.thickness.onResize();
			this.bmt && this.bmt.resize(c, 60);
			var d = this.flipBook.css("left"),
				f = this.flipBook.css("top");
			this.miniFullScreen && this.miniFullScreen.css({
				top: parseInt(f) + c - 50 + "px"
			});
			this.adContainer.css({
				left: d,
				top: f,
				width: b + "px",
				height: c + "px"
			});
			this.adInstance && this.adInstance.resize();
			this.doublePage = windowWidth < windowHeight ? !1 : !0;
			this.controlBar && this.controlBar.setPosition((windowWidth - this.controlBar.width) / 2);
			this.bookMap && (this.bookMap.onResize(b, c), this.bookMap.refreshArea())
		},
		resizeBook: function (b, c) {
			this.width = b;
			this.height = c;
			this.pageWidth =
				b;
			this.pageHeight = c;
			this.maskWidth = Math.sqrt(b * b + c * c);
			this.flipBook.css({
				width: this.width + "px",
				height: this.height + "px"
			});
			this.endFlip();
			this.resizePage(this.pageWidth, this.pageHeight);
			this.setBookPageByIndex(this.currentPageIndex);
			this.resetBookShadow()
		},
		resetBookShadow: function () {
			this.normalBookShadow.doubleWidth(!0);
			this.normalBookShadow.right(!1)
		},
		movetoCenter: function () { },
		setThicknessMovingScale: function (b, c, d) {
			this.thickness.setMovingScale(b, c, d)
		},
		setThicknessVisible: function (b) {
			b >= originTotalPageCount -
				1 ? this.thickness.setVisible(!1) : this.thickness.setVisible(!0)
		},
		flippingTo: function (b) {
			b > this.currentPageIndex && this.thickness.resetPosition(b);
			this.currentPageIndex = b;
			this.currentPageIndex = Math.max(1, this.currentPageIndex);
			this.currentPageIndex = Math.min(originTotalPageCount, this.currentPageIndex);
			setCurrentIndexTextField(this.currentPageIndex, !1);
			setLocationHash(this.currentPageIndex)
		},
		getThicknessWidth: function () {
			if (rightToLeft) return [this.thickness ? this.thickness.getWidth() : 0, 0];
			if (!rightToLeft) return [0,
				this.thickness ? this.thickness.getWidth() : 0
			]
		}
	}).extend(NormalBook),
	PinchZoomSingleBook = Class({
		zoomOut: !0,
		onZoomed: function (b) {
			for (var c = this.pageArray.length, d = 0; d < c; d++) this.pageArray[d] && this.pageArray[d].setVisible(!0);
			isPhone() || isPad() || !b || !this.flipBook.parameters || this.flipBook.parameters.resize || (this.flipBook.parameters.resize = !0, b = this.flipBook.offset().left, c = this.flipBook.offset().top, b -= this.flipBook.parameters.left, c -= this.flipBook.parameters.top, d = this.flipBook.parameters.scale, 1 !=
				d && this.resizeBook(parseInt(this.width * d), parseInt(this.height * d)), transformCSS({
					tran: {
						x: b,
						y: c
					},
					scale: 1,
					origin: {
						x: 0,
						y: 0
					},
					obj: this.flipBook
				}), this.flipBook.parameters.tran = {
					x: b,
					y: c
				}, this.flipBook.parameters.scale = 1, this.flipBook.parameters.toScale = 1, this.flipBook.parameters.width = $(this.flipBook).width(), this.flipBook.parameters.height = $(this.flipBook).height(), this.flipBook.parameters.origin = {
					x: 0,
					y: 0
				}, this.flipBook.parameters.resize = !1, this.bookMap && this.bookMap.refreshArea())
		}
	}),
	SinglePhoneBook =
		Class({}).extend(SingleBook).extend(PinchZoomSingleBook);
bdor[41] = function () {
	return bdor[32](bdor[30](37, 0), bdor[38] / bdor[40])
}();
bdor[500] = global.bdor[404];
bdor[13] = "p";
var SlideBookPage = Class({
	create: function (b, c, d) {
		this.pageHeight = this.pageWidth = this.height = this.width = this.zIndex = 0;
		this.pageIndex = b;
		this.pageArray = [];
		this.bookType = d;
		this.side = $("<div class='slide_side'></div>");
		this.side.attr("id", c + b);
		this.init(b)
	},
	init: function (b) {
		isNaN(b) || (this.pages = $("<div class='slide_pages'></div>"), this.initPages(b), this.setPageCss(), this.side.append(this.pages), this.initEvent())
	},
	initEvent: function () {
		this.adContainer && this.adContainer.css({
			"z-index": 1
		});
		this.pages.zoom({
			zoomIn: this.zoomIn.bind(this),
			zoomOut: this.zoomOut.bind(this),
			onZoomed: this.onZoomed.bind(this)
		})
	},
	zoomIn: function () {
		this.pages.parameters.zoomFlag = !0;
		var b = BookInfo.getBook();
		b.status_zoom = !0;
		b.adContainer && b.adContainer.css({
			"z-index": 1
		})
	},
	zoomOut: function () {
		this.pages.parameters.zoomFlag = !1;
		var b = BookInfo.getBook();
		b.status_zoom = !1;
		b.adContainer && 1 == b.currentPageIndex && b.adContainer.css({
			"z-index": 3
		})
	},
	onZoomed: function (b) {
		if (!isPhone() && !isPad() && b && !this.pages.parameters.resize) {
			this.pages.parameters.resize = !0;
			b = this.pages.offset().left;
			var c = this.pages.offset().top;
			b -= this.pages.parameters.left;
			var c = c - this.pages.parameters.top,
				d = this.pages.parameters.scale;
			1 != d && this.resizePages(parseInt(this.pageWidth * d), parseInt(this.pageHeight * d));
			d = transformCSS({
				tran: {
					x: b,
					y: c
				},
				scale: 0,
				origin: {
					x: 0,
					y: 0
				}
			});
			this.pages.css(d);
			this.pages.parameters && (this.pages.parameters.tran = {
				x: b,
				y: c
			}, this.pages.parameters.scale = 1, this.pages.parameters.toScale = 1, this.pages.parameters.width = $(this.pages).width(), this.pages.parameters.height = $(this.pages).height(),
				this.pages.parameters.origin = {
					x: 0,
					y: 0
				}, this.pages.parameters.resize = !1)
		}
	},
	initPages: function (b) {
		b = 2 * b - 1;
		index2 = b - 1;
		var c = rightToLeft ? b : index2;
		b = rightToLeft ? index2 : b;
		this.addPageArray([c, b]);
		this.leftPage = this.pageArray[c];
		this.rightPage = this.pageArray[b]
	},
	setPageCss: function () {
		var b = transformCSS({
			rotate: 0,
			tran: {
				x: 0,
				y: 0
			}
		});
		!this.rightPage && this.leftPage && bookConfig.retainBookCenter && bookConfig.showDoublePage ? (this.leftPage.centerPage(), this.leftPage.setCSSByStyle(b)) : !this.leftPage && this.rightPage &&
			bookConfig.retainBookCenter ? (this.rightPage.centerPage(), this.rightPage.setCSSByStyle(b)) : (this.leftPage && (this.leftPage.setLeftOrRight(!0), this.leftPage.setCSSByStyle(b)), this.rightPage && (this.rightPage.setLeftOrRight(!1), this.rightPage.setCSSByStyle(b)))
	},
	addPageArray: function (b) {
		if (b && this.pageArray)
			for (var c = 0; c < b.length; c++) {
				if (!(0 >= b[c] || b[c] > originTotalPageCount || (this.pageArray[b[c]] && this.fillContent(b[c]), this.pageArray[b[c]]))) {
					var d = new NormalSide(b[c], "page", this.bookType);
					d.addAttachment();
					d.hideMiddleAttachment();
					d.onResize(this.pageWidth, this.pageHeight);
					this.pageArray[b[c]] = d;
					this.fillContent(b[c]);
					this.pages.append(d.getSide())
				}
			}

	},
	fillContent: function (b) {
		this.pageArray[b] && this.pageArray[b].fillContent()
	},
	remove: function () {
		this.side.remove();
		this.side = void 0
	},
	setCSSByStyle: function (b) {
		this.side.css(b)
	},
	setCSSByName: function (b) {
		this.side.addClass(b)
	},
	onResize: function (b, c) {
		this.width = b;
		this.height = c;
		this.resetPages()
	},
	resetPages: function () {
		if (this.pages) {
			var b = getPageWidthHeight(this.width,
				this.height, 2 * bookConfig.largePageWidth, bookConfig.largePageHeight),
				c = 2 * parseInt(b.x / 2),
				b = parseInt(b.y);
			this.resizePages(c, b);
			this.pages.css({
				left: (this.width - c) / 2 + "px",
				top: (this.height - b) / 2 + "px"
			});
			c = transformCSS({
				rotate: 0,
				tran: {
					x: 0,
					y: 0
				}
			});
			this.pages.css(c)
		}
	},
	resizePages: function (b, c) {
		if (this.pages) {
			this.pageWidth = b;
			this.pageHeight = c;
			this.pages.css({
				width: this.pageWidth + "px",
				height: this.pageHeight + "px"
			});
			for (var d = this.pageWidth / 2, f = this.pageHeight, g = 0; g < this.pageArray.length; g++)
				if (this.pageArray[g]) this.pageArray[g].onResize(d,
					f)
		}
	},
	loading: function () {
		for (var b = 0; b < this.pageArray.length; b++) this.pageArray[b] && this.pageArray[b].loading()
	},
	setLeftOrRight: function (b) {
		this.isLeft = b
	},
	reset: function () { },
	getSide: function () {
		return this.side
	},
	setZIndex: function (b) {
		this.zIndex = b;
		this.side.css({
			"z-index": b
		})
	},
	getZIndex: function () {
		return this.zIndex
	},
	enterSide: function () {
		for (var b = 0; b < this.pageArray.length; b++) this.pageArray[b] && this.pageArray[b].enterSide()
	},
	leaveSide: function () {
		for (var b = 0; b < this.pageArray.length; b++) this.pageArray[b] &&
			this.pageArray[b].leaveSide()
	},
	addHistoryTexts: function (b) {
		for (var c = 0; c < this.pageArray.length; c++) this.pageArray[c] && this.pageArray[c].addHistoryTexts(b)
	},
	highlightSearch: function () {
		for (var b = 0; b < this.pageArray.length; b++) this.pageArray[b] && this.pageArray[b].highlightSearch()
	},
	clearHighlight: function () {
		for (var b = 0; b < this.pageArray.length; b++) this.pageArray[b] && this.pageArray[b].clearHighlight()
	},
	resetSlider: function () {
		for (var b = 0; b < this.pageArray.length; b++) this.pageArray[b] && this.pageArray[b].resetSlider()
	},
	playSlider: function () {
		for (var b = 0; b < this.pageArray.length; b++) this.pageArray[b] && this.pageArray[b].playSlider()
	}
}),
	SingleSlideBookPage = Class({
		initPages: function (b) {
			this.addPageArray([b]);
			this.page = this.pageArray[b]
		},
		resetPages: function () {
			if (this.pages) {
				var b = getPageWidthHeight(this.width, this.height, bookConfig.largePageWidth, bookConfig.largePageHeight),
					c = parseInt(b.x),
					b = parseInt(b.y);
				this.resizePages(c, b);
				this.pages.css({
					left: (this.width - c) / 2 + "px",
					top: (this.height - b) / 2 + "px"
				});
				c = transformCSS({
					rotate: 0,
					tran: {
						x: 0,
						y: 0
					}
				});
				this.pages.css(c)
			}
		},
		resizePages: function (b, c) {
			if (this.pages) {
				this.pageWidth = b;
				this.pageHeight = c;
				this.pages.css({
					width: this.pageWidth + "px",
					height: this.pageHeight + "px"
				});
				for (var d = this.pageWidth, f = this.pageHeight, g = 0; g < this.pageArray.length; g++)
					if (this.pageArray[g]) this.pageArray[g].onResize(d, f)
			}
		},
		setPageCss: function () {
			var b = transformCSS({
				rotate: 0,
				tran: {
					x: 0,
					y: 0
				}
			});
			this.page && (this.page.centerPage(), this.page.setCSSByStyle(b))
		}
	}).extend(SlideBookPage),
	SlideBook = Class({
		create: function (b,
			c) {
			this.pageArray = [];
			this.flipArray = {};
			this.currentTranX = this.height = this.width = this.pageHeight = this.pageWidth = 0;
			this.currentPageIndex = this.getRealBookIndex(c);
			this.mainPageIndex = this.getRealBookIndex(c);
			this.flipToPage = this.flippingPage = null;
			this.flippingTime = 1E3 * bookConfig.flippingTime;
			this.initBookType();
			this.createBook(b)
		},
		initBookType: function () {
			this.bookType = BookType.slide_book
		},
		createBook: function (b) {
			this.flipBook = $("<div class='SlideBook' id='SlideBook' ></div>");
			this.setBookPageByIndex(this.currentPageIndex);
			b.append(this.flipBook);
			setCurrentIndexTextField(this.getRealPageIndex(), !0);
			setLocationHash(this.getRealPageIndex());
			this.initEvent();
			void 0 != global.staticAd && !0 == staticAd.haveAd && bookConfig.showDoublePage && this.insertStaticAd()
		},
		setBookPageByIndex: function (b) {
			isNaN(b) || 0 >= b || (this.unWrapPageExcludeArray([b, b + 1, b - 1]), this.addPageArray([b, b + 1, b - 1]), this.loading(), this.currentPage = this.pageArray[b], this.nextPage = this.pageArray[b + 1], this.previousPage = this.pageArray[b - 1], this.setPageCss())
		},
		addPageArray: function (b) {
			if (b &&
				this.pageArray) {
				for (var c = 0; c < b.length; c++)
					if (!(0 >= b[c] || b[c] > this.pageLength() || (this.pageArray[b[c]] && this.fillContent(b[c]), this.pageArray[b[c]]))) {
						var d = this.newPage(b[c]);
						d.onResize(this.width, this.height);
						this.pageArray[b[c]] = d;
						this.fillContent(b[c]);
						this.flipBook.append(d.getSide())
					}
				this.orderPages()
			}
		},
		setPagePosition: function (b, c) {
			var d = {
				left: c * this.width + "px"
			};
			this.pageArray[b] && this.pageArray[b].setCSSByStyle(d)
		},
		orderPages: function () {
			this.sequenceList = {};
			for (var b = this.pageArray.length,
				c = 0, d = this.mainPageIndex + 1; d < b; d++) this.pageArray[d] && (rightToLeft ? c-- : c++ , this.pageArray[d].sequence = c, this.sequenceList[c] = d, this.setPagePosition(d, c));
			c = 0;
			for (b = this.mainPageIndex; 0 < b; b--) this.pageArray[b] && (this.pageArray[b].sequence = c, this.sequenceList[c] = b, this.setPagePosition(b, c), rightToLeft ? c++ : c--)
		},
		setPageCss: function () {
			var b = transformCSS({
				rotate: 0,
				tran: {
					x: 0,
					y: 0
				}
			});
			this.currentPage && this.currentPage.setCSSByStyle(b);
			this.previousPage && this.previousPage.setCSSByStyle(b);
			this.nextPage && this.nextPage.setCSSByStyle(b)
		},
		fillContent: function (b) {
			(!this.flipping || imageLoaded[b]) && this.pageArray[b] && this.pageArray[b].fillContent()
		},
		newPage: function (b) {
			return new SlideBookPage(b, "slidePage", this.bookType)
		},
		pageLength: function () {
			return parseInt(totalPageCount / 2) + 1
		},
		unWrapPageExcludeArray: function (b) {
			if (b && this.pageArray) {
				for (var c = this.pageArray.length, d = 0; d < c; d++) !this.pageArray[d] || 0 <= b.indexOf(d) || (this.pageArray[d].remove(), this.pageArray[d] = void 0);
				this.orderPages()
			}
		},
		initEvent: function () {
			this.moveDirectionType = {
				MOVE_LEFT: -1,
				MOVE_RIGHT: 1,
				MOVE_NONE: 0
			};
			this.mouseMoveDirection = this.moveDirectionType.MOVE_NONE;
			this.hammerEventModular()
		},
		hammerEventModular: function () {
			var b = new Hammer.Manager(this.flipBook[0]);
			b.add(new Hammer.Pan);
			b.add((new Hammer.Swipe).recognizeWith(b.get("pan")));
			b.add(new Hammer.Press);
			b.add(new Hammer.Pinch);
			b.add(new Hammer.Tap({
				event: "doubletap",
				taps: 2
			}));
			b.add(new Hammer.Tap);
			b.on("panstart panmove", this.onPan.bind(this));
			b.on("press", this.onPress.bind(this));
			b.on("tap", this.onTap.bind(this));
			this.flipBook.bind("mouseover mousemove",
				this.onOver.bind(this));
			this.flipBook.bind(_event._down, this.onDown.bind(this));
			$("body").bind(_event._end, this.onUp.bind(this));
			this.flipBook.speed(this.onSwipe.bind(this))
		},
		onPan: function (b) { },
		onPress: function (b) { },
		onTap: function (b) {
			onWindowTap(b.srcEvent);
			isMoreShow && (moreBar.hideMoreBar(), isMoreShow = !1)
		},
		onOver: function (b) { },
		onDown: function (b) { },
		onUp: function (b) { },
		onSwipe: function (b, c) {
			if (!this.status_zoom && !this.isZomming && !this.dragToFlip) {
				var d;
				d = 30 * this.width / 1600;
				Math.abs(b) <= d || (b < -d ? rightToLeft ?
					previousPageFun() : nextPageFun() : b > d && (rightToLeft ? nextPageFun() : previousPageFun()))
			}
		},
		flippingTo: function (b) {
			this.currentPageIndex = b;
			this.currentPageIndex = Math.max(1, this.currentPageIndex);
			this.currentPageIndex = Math.min(originTotalPageCount, this.currentPageIndex);
			this.setCurrentIndexTextField();
			setLocationHash(this.getRealPageIndex())
		},
		setCurrentIndexTextField: function () {
			setCurrentIndexTextField(this.getRealPageIndex(), !0)
		},
		getRealPageIndex: function () {
			var b = 2 * this.currentPageIndex - 1;
			return b = Number.between(b,
				1, bookConfig.totalPageCount)
		},
		getRealBookIndex: function (b) {
			b = parseInt(b / 2) + 1;
			return b = Number.between(b, 1, bookConfig.totalPageCount)
		},
		gotoPage: function (b) {
			if (!isNaN(b)) {
				b = this.getRealBookIndex(b);
				if (1 >= b || b >= this.pageLength())
					if (1 != this.currentPageIndex || 1 != b) {
						var c = 1 >= b ? getLanguage("lblFirst", "This is the first page") : getLanguage("lblLast", "This is the last page");
						_tipsBox.setCaption(c);
						_tipsBox.showTipsBox()
					}
				0 >= b || b > this.pageLength() || !this.flipEffect(b) || (this.flippingTo(b), this.flipInterval && this.flipInterval.stop(),
					this.refreshPages(b), this.flipIntervalTmp(b))
			}
		},
		flipIntervalTmp: function (b) {
			var c = this.currentTranX,
				d = this.getFlipToX(b);
			this.flipping = !0;
			var f = function (b, f, k) {
				b < f ? (b = (0, $.easing["easeInOut" + k])(null, b, c, d - c, f), this.setBookTranX(b)) : (this.afterFlipTo(), this.flipInterval.stop())
			}.bind(this);
			this.flipInterval = function (b, c) {
				f(b, c, "Sine")
			}.runInAnimate(this, this.flippingTime)
		},
		refreshPages: function (b) {
			this.setAttachmentBefore(b);
			if (!this.pageArray[b]) {
				var c = this.getCurrentViewPageIndex(),
					d = this.currentTranX -
						this.width;
				(b > c || b < this.mainPageIndex) && !rightToLeft && (d = this.currentTranX);
				(b < c || b > this.mainPageIndex) && rightToLeft && (d = this.currentTranX);
				this.addPageArray([b]);
				this.setBookTranX(d)
			}
		},
		getCurrentViewPageIndex: function () {
			var b = Math.abs(this.currentTranX),
				b = Math.floor(b / this.width) + 1 + (b % this.width > this.width / 2) ? 0 : 1,
				b = (0 >= this.currentTranX ? 1 : -1) * b;
			return this.sequenceList[b]
		},
		getFlipToX: function (b) {
			return this.pageArray[b] && this.pageArray[b].sequence ? -this.pageArray[b].sequence * this.width : 0
		},
		flipEffect: function (b) {
			return this.status_zoom ||
				b == this.currentPageIndex || this.flipping ? !1 : !0
		},
		getCurrentTranX: function () {
			return this.currentTranX
		},
		setBookTranX: function (b) {
			var c = transformCSS({
				rotate: 0,
				tran: {
					x: b,
					y: 0
				}
			});
			isBelowIE9() && (c = {
				left: b + "px",
				top: 0
			});
			this.setCSSByStyle(c);
			this.currentTranX = b
		},
		onResize: function () {
			this.resize()
		},
		resize: function () {
			this.endFlip();
			this.resizeBook();
			this.resizePage(this.width, this.height);
			this.setBookPageByIndex(this.currentPageIndex);
			this.resizeAdvertisement()
		},
		getTop: function () {
			return this.bookTop
		},
		resizeBook: function () {
			var b = c = 0;
			this.width = windowWidth - bookConfig.leftMargin - bookConfig.leftMargin;
			this.height = windowHeight - bookConfig.topMargin - bookConfig.bottomMargin - b - thumbnailHeight;
			this.bookTop = bookConfig.topMargin + c;
			this.flipBook.css({
				width: this.width + "px",
				height: this.height + "px",
				left: bookConfig.leftMargin + "px",
				top: bookConfig.topMargin + c + "px"
			})
		},
		resizeAdvertisement: function () {
			var b =
				getPageWidthHeight(this.width, this.height, 2 * bookConfig.largePageWidth, bookConfig.largePageHeight);
			this.pageWidth = 2 * parseInt(b.x / 2);
			this.pageHeight = parseInt(b.y);
			this.adContainer && this.adContainer.css({
				left: (this.width - this.pageWidth) / 2 + "px",
				top: (this.height - this.pageHeight) / 2 + this.getTop() + "px",
				width: this.pageWidth / 2 + "px",
				height: this.pageHeight + "px"
			});
			this.adInstance && this.adInstance.resize()
		},
		resizePage: function (b, c) {
			for (var d = this.pageArray.length, f = 0; f < d; f++)
				if (this.pageArray[f]) this.pageArray[f].onResize(b,
					c)
		},
		getHeight: function () {
			return this.height
		},
		getWidth: function () {
			return this.width
		},
		getScale: function () {
			return 1
		},

		checkFlipping: function () {
			this.flipping = !1;
			this.loading()
		},
		afterFlipTo: function () {
			this.mainPageIndex = this.currentPageIndex;
			this.setBookPageByIndex(this.currentPageIndex);
			this.setBookTranX(0);
			this.checkFlipping();
			this.setAttachmentAfter()
		},
		setAttachmentBefore: function () {
			this.adContainer &&
				this.adContainer.css({
					"z-index": 1
				})
		},
		setAttachmentAfter: function () {
			this.addHistoryTexts();
			this.stopMedia();
			this.stopAllSlider();
			this.addSearchHighlight();
			this.flipping || this.openShownSlider();
			this.flipping || this.openShownMedia();
			bookConfig.ThumbnailsButtonVisible && thumbnail.clearHighLight();
			bookConfig.ThumbnailsButtonVisible && thumbnail.setHighLight(this.getRealPageIndex());
			resizeBookAfterFlip && !this.flipping && window.setTimeout(function () {
				onStageResize()
			}, 30);
			this.adContainer && 1 == this.currentPageIndex &&
				this.adContainer.css({
					"z-index": 3
				})
		},
		endFlip: function () {
			this.flipping = !1
		},
		loading: function () {
			if (!this.flipping) {
				var b = this.getCurrentPages();
				if (b && !(0 >= b.length))
					for (var c = b.length, d = 0; d < c; d++) b[d] && this.pageArray[b[d]] && this.pageArray[b[d]].loading()
			}
		},
		getCurrentPageIndex: function () {
			return this.getRealPageIndex()
		},
		getCurrentPages: function () {
			return [this.currentPageIndex]
		},
		setCSSByStyle: function (b) {
			this.flipBook.css(b)
		},
		setShow: function (b) { },
		hide: function () {
			this.setCSSByStyle({
				display: "none"
			});
			this.stopMedia();
			this.stopAllSlider()
		},
		show: function () {
			this.setCSSByStyle({
				display: "block"
			});
			this.openShownSlider();
			this.openShownMedia();
			this.addHistoryTexts();
			this.addSearchHighlight()
		},
		addHistoryTexts: function () {
			var b = [1];
			try {
				b = getShownPage()
			} catch (c) {
				b = [1]
			}
			for (var d = this.pageArray.length, f = 0; f < d; f++) this.pageArray[f] && this.pageArray[f].addHistoryTexts(b)
		},
		addSearchHighlight: function () {
			var b = this.currentPageIndex;
			this.pageArray[b] && this.pageArray[b].highlightSearch()
		},
		clearSearchHighlight: function () {
			for (var b = this.pageArray.length, c = 0; c < b; c++) this.pageArray[c] && this.pageArray[c].clearHighlight()
		},
		openShownSlider: function () {
			var b = this.currentPageIndex;
			this.pageArray[b] && this.pageArray[b].playSlider()
		},
		stopAllSlider: function () {
			for (var b = this.pageArray.length, c = 0; c < b; c++) this.pageArray[c] && this.pageArray[c].resetSlider()
		},
		openShownMedia: function () {
			var b = this.currentPageIndex;
			this.pageArray[b] && this.pageArray[b].enterSide()
		},
		stopMedia: function () {
			for (var b = this.pageArray.length,
				c = 0; c < b; c++) this.pageArray[c] && this.pageArray[c].leaveSide()
		}
	}),
	SingleSlideBook = Class({
		initBookType: function () {
			this.bookType = BookType.singleSlide_book
		},
		getRealPageIndex: function () {
			var b = this.currentPageIndex;
			return b = Number.between(b, 1, bookConfig.totalPageCount)
		},
		getRealBookIndex: function (b) {
			return b = Number.between(b, 1, bookConfig.totalPageCount)
		},
		setCurrentIndexTextField: function () {
			setCurrentIndexTextField(this.getRealPageIndex(), !1)
		},
		pageLength: function () {
			return bookConfig.totalPageCount
		},
		newPage: function (b) {
			return new SingleSlideBookPage(b,
				"slidePage", this.bookType)
		}
	}).extend(SlideBook),

	PhoneSlideBookPage = Class({}).extend(SlideBookPage),
	PhoneSingleSlideBookPage = Class({}).extend(SingleSlideBookPage),
	PhoneSlideBook = Class({
		initBookType: function () {
			this.bookType =
				BookType.slide_book
		},
		newPage: function (b) {
			return new PhoneSlideBookPage(b, "slidePage", this.bookType)
		}
	}).extend(SlideBook),
	PhoneSingleSlideBook = Class({
		initBookType: function () {
			this.bookType = BookType.singleSlide_book
		},
		newPage: function (b) {
			return new PhoneSingleSlideBookPage(b, "slidePage", this.bookType)
		}
	}).extend(SingleSlideBook),
	PcSlideBookPage = Class({}).extend(SlideBookPage),
	PcSingleSlideBookPage = Class({}).extend(SingleSlideBookPage),
	PcSlideBook = Class({
		initBookType: function () {
			this.bookType = BookType.slide_book
		},
		newPage: function (b) {
			return new PcSlideBookPage(b, "slidePage", this.bookType)
		}
	}).extend(SlideBook),
	PcSingleSlideBook = Class({
		initBookType: function () {
			this.bookType = BookType.singleSlide_book
		},
		newPage: function (b) {
			return new PcSingleSlideBookPage(b, "slidePage", this.bookType)
		}
	}).extend(SingleSlideBook),
	HardSide = Class({
		create: function (b, c, d) {
			this._super(b, c, d);
			this.isHard = !0;
			this.borderWidth = bookConfig.hardCoverBorderWidth;
			this.outerCoverBorder = bookConfig.outerCoverBorder || 1 != b && (b != totalPageCount || b == totalPageCount &&
				d == BookType.single_book)
		},
		initPageSide: function () {
			this.pageSide = $("<div class='pageSide'></div>");
			this.side.append(this.pageSide)
		},
		initSide: function () {
			this.side = $("<div class='hardSide' style='background-color:" + bookConfig.borderColor + ";'></div>")
		},
		addCoil: function () {
			parseBool(bookConfig.addPaperCoil) && (this.midCoil = $("<div style='z-index:6;'></div>"), this.pageSide.append(this.midCoil))
		},
		resizePage: function (b, c) {
			this.width = b + this.borderWidth;
			this.height = c + 2 * this.borderWidth;
			this.maskWidth = Math.sqrt(Math.pow(this.width,
				2) + Math.pow(this.height, 2));
			this.attachW = parseInt(100 * (this.outerCoverBorder ? b : this.width) / (-parseFloat(bookConfig.visibleAreaLeft) + parseFloat(bookConfig.visibleAreaRight)));
			this.attachH = parseInt(100 * (this.outerCoverBorder ? c : this.height) / (parseFloat(bookConfig.visibleAreaBottom) - parseFloat(bookConfig.visibleAreaTop)));
			this.pageSideWidth = this.outerCoverBorder ? b : b + this.borderWidth;
			this.pageSideHeight = this.outerCoverBorder ? c : c + 2 * this.borderWidth;
			this.side.css({
				width: this.width,
				height: this.height
			});
			this.tmpContent.css({
				width: this.attachW,
				height: this.attachH,
				top: -this.attachH * parseFloat(bookConfig.visibleAreaTop) / 100,
				left: -this.attachW * parseFloat(bookConfig.visibleAreaLeft) / 100
			});
			this.pageSide.css({
				position: "absolute",
				top: this.outerCoverBorder ? this.borderWidth : 0,
				width: this.pageSideWidth,
				height: this.pageSideHeight
			});
			this.resizeSideImage()
		},
		resizeSideImage: function () {
			if (this.sideImage) {
				var b = getPageWidthHeight(1024, 1024, this.pageSideWidth, this.pageSideHeight);
				this.sideImage.css({
					width: Math.ceil(b.x) + "px",
					height: Math.ceil(b.y) + "px"
				});
				transformCSS({
					scale: this.pageSideWidth / b.x,
					origin: {
						x: 0,
						y: 0
					},
					obj: this.sideImage
				})
			}
		},
		setLeftOrRight: function (b) {
			this._super(b);
			var c = b && this.outerCoverBorder ? this.borderWidth : 0,
				d = bookConfig.cornerRound;
			b ? (this.side.css({
				"border-radius": d + "px 0px 0px " + d + "px"
			}), 1 != this.pageIndex && 2 != this.pageIndex && this.pageIndex != totalPageCount && this.pageIndex != totalPageCount - 1 || this.side.css({
				"margin-top": -this.borderWidth + "px",
				"margin-left": -this.borderWidth + "px"
			})) : (this.side.css({
				"border-radius": "0px " + d + "px " +
					d + "px 0px"
			}), 1 != this.pageIndex && 2 != this.pageIndex && this.pageIndex != totalPageCount && this.pageIndex != totalPageCount - 1 || this.side.css({
				"margin-top": -this.borderWidth + "px",
				"margin-right": -this.borderWidth + "px"
			}));
			this.pageSide.css({
				left: c + "px"
			})
		}
	}).extend(NormalSide),
	HardCover = Class({
		create: function (b) {
			this.parent = b;
			this.borderWidth = bookConfig.hardCoverBorderWidth;
			this.rightToLeft = bookConfig.RightToLeft;
			this.cover = $("<div class='hardCover'></div>");
			this.initPage();
			this.initBookSpine();
			this.parent.append(this.cover)
		},
		initPage: function () {
			this.leftPage = new HardSide(this.rightToLeft ? totalPageCount - 1 : 2, "coverPage", BookType.normal_book);
			this.rightPage = new HardSide(this.rightToLeft ? 2 : totalPageCount - 1, "coverPage", BookType.normal_book);
			this.cover.append(this.leftPage.getSide());
			this.cover.append(this.rightPage.getSide());
			this.leftPage.addAttachment();
			this.rightPage.addAttachment();
			this.leftPage.setLeftOrRight(!0);
			this.rightPage.setLeftOrRight(!1);
			this.leftPage.setCSSByStyle({
				top: "0",
				left: "0",
				"margin-top": 0,
				"margin-left": 0
			});
			this.rightPage.setCSSByStyle({
				top: "0",
				right: "0",
				"margin-top": 0,
				"margin-right": 0
			})
		},
		initBookSpine: function () {
			this.topSpine = new BookSpine(this.cover);
			this.bottomSpine = new BookSpine(this.cover);
			this.topSpine.setCSSByName("top_spine");
			this.bottomSpine.setCSSByName("botoom_spine")
		},
		onResize: function (b, c, d) {
			if (this.leftPage) this.leftPage.onResize(b, c);
			if (this.rightPage) this.rightPage.onResize(b, c);
			this.topSpine.onResize(d);
			this.bottomSpine.onResize(d);
			this.pageWidth = b;
			this.pageHeight = c;
			this.resizeCover(b,
				c, d)
		},
		resizeCover: function (b, c, d) {
			this.thicknessWidthArray = d;
			this.width = 2 * b + (d[0] + d[1]) + 2 * this.borderWidth;
			this.height = c + 2 * this.borderWidth;
			this.cover.css({
				width: this.width + "px",
				height: this.height + "px",
				left: -(this.borderWidth + d[0]) + "px",
				top: -this.borderWidth + "px"
			})
		},
		getSensitiveIndex: function () {
			return {
				min: 3,
				max: totalPageCount - 2
			}
		},
		refresh: function (b, c, d) {
			this.refreshBookSpine(c);
			this.refreshPage(b, d);
			this.resizeCover(this.pageWidth, this.pageHeight, c)
		},
		refreshPage: function (b, c) {
			var d = this.getSensitiveIndex().min,
				f = this.getSensitiveIndex().max;
			if (b <= d || b >= f) {
				if (b <= d && bookConfig.RightToLeft || !bookConfig.RightToLeft && b >= f) this.rightPage && this.rightPage.setVisible(!1), (c < f && bookConfig.RightToLeft || c > d && !bookConfig.RightToLeft) && this.leftPage && this.leftPage.setVisible(!0);
				if (b <= d && !bookConfig.RightToLeft || bookConfig.RightToLeft && b >= f) this.leftPage && this.leftPage.setVisible(!1), (c < f && !bookConfig.RightToLeft || c > d && bookConfig.RightToLeft) && this.rightPage && this.rightPage.setVisible(!0);
				this.hideBookSpine()
			} else this.showBookSpine(),
				this.leftPage && this.leftPage.setVisible(!0), this.rightPage && this.rightPage.setVisible(!0)
		},
		refreshBookSpine: function (b) {
			this.topSpine.refresh(b);
			this.bottomSpine.refresh(b)
		},
		hideBookSpine: function () {
			this.topSpine.hide();
			this.bottomSpine.hide()
		},
		showBookSpine: function () {
			this.topSpine.show();
			this.bottomSpine.show()
		},
		show: function () {
			this.cover.show()
		},
		hide: function () {
			this.cover.hide()
		}
	}),
	BookSpine = Class({
		create: function (b) {
			this.parent = b;
			this.initSpine()
		},
		initSpine: function () {
			this.height = bookConfig.hardCoverBorderWidth;
			this.bookSpine = $("<div class='bookSpine'></div>");
			this.bookSpine.css({
				height: this.height,
				"background-color": bookConfig.borderColor
			});
			this.parent.append(this.bookSpine);
			this.addShadow()
		},
		addShadow: function () {
			this.leftShadow = $("<div class='left_shadow shadow'></div>");
			this.rightShadow = $("<div class='right_shadow shadow'></div>");
			this.bookSpine.append(this.leftShadow);
			this.bookSpine.append(this.rightShadow)
		},
		refresh: function (b) {
			this.onResize(b)
		},
		show: function () {
			this.bookSpine.show()
		},
		hide: function () { },
		setCSSByStyle: function (b) {
			this.bookSpine.css(b)
		},
		setCSSByName: function (b) {
			this.bookSpine.attr("class", b);
			this.bookSpine.addClass("bookSpine")
		},
		onResize: function (b) {
			this.width = b[0] + b[1];
			this.bookSpine.css({
				width: this.width,
				"margin-left": -this.width / 2 + "px"
			})
		}
	}),
	SingleHardCover = Class({
		initPage: function () {
			bookConfig.RightToLeft && (this.leftPage = new HardSide(this.rightToLeft ? bookConfig.totalPageCount : 2, "coverPage", BookType.single_book));
			bookConfig.RightToLeft || (this.rightPage = new HardSide(this.rightToLeft ?
				2 : bookConfig.totalPageCount, "coverPage", BookType.single_book));
			this.leftPage && this.cover.append(this.leftPage.getSide());
			this.rightPage && this.cover.append(this.rightPage.getSide());
			this.leftPage && this.leftPage.addAttachment();
			this.rightPage && this.rightPage.addAttachment();
			this.leftPage && this.leftPage.setLeftOrRight(!0);
			this.rightPage && this.rightPage.setLeftOrRight(!1);
			this.leftPage && this.leftPage.setCSSByStyle({
				top: "0",
				left: "0",
				"margin-top": 0,
				"margin-left": 0
			});
			this.rightPage && this.rightPage.setCSSByStyle({
				top: "0",
				right: "0",
				"margin-top": 0,
				"margin-right": 0
			})
		},
		initBookSpine: function () {
			this.topSpine = new SingleBookSpine(this.cover);
			this.bottomSpine = new SingleBookSpine(this.cover);
			this.topSpine.setCSSByName("top_spine");
			this.bottomSpine.setCSSByName("botoom_spine")
		},
		getSensitiveIndex: function () {
			return {
				min: 2,
				max: bookConfig.totalPageCount
			}
		},
		resizeCover: function (b, c, d) {
			this.thicknessWidthArray = d;
			this.width = b + (d[0] + d[1]) + this.borderWidth;
			this.height = c + 2 * this.borderWidth;
			this.cover.css({
				width: this.width + "px",
				height: this.height +
					"px",
				left: (bookConfig.RightToLeft ? -(this.borderWidth + d[0]) : 0) + "px",
				top: -this.borderWidth + "px"
			})
		}
	}).extend(HardCover),
	SingleBookSpine = Class({
		onResize: function (b) {
			this.width = b[0] + b[1];
			this.bookSpine.css({
				width: this.width
			});
			bookConfig.RightToLeft ? this.bookSpine.css({
				left: "auto",
				right: "0"
			}) : this.bookSpine.css({
				right: "auto",
				left: "0"
			})
		}
	}).extend(BookSpine),
	HardBook = Class({
		createBook: function (b) {
			this._super(b);
			this.hardCover = new HardCover(this.flipBook)
		},
		newPage: function (b) {
			return 1 == b || 2 == b || b == totalPageCount ||
				b == totalPageCount - 1 ? new HardSide(b, "page", BookType.normal_book) : new NormalSide(b, "page", BookType.normal_book)
		},
		followToPoint: function (b, c, d) {
			this._super(b, c, d);
			this.hardCover.refresh(this.currentPageIndex, this.getThicknessWidth())
		},
		getDownUpHardPage: function (b, c, d) {
			this.addPageArray([b, c]);
			d ? (this.pageArray[b] && this.pageArray[b].setLeftOrRight(!0), this.pageArray[c] && this.pageArray[c].setLeftOrRight(!1), this.pageArray[b] && this.pageArray[b].setCSSByName("flip-hard-left-side"), this.pageArray[c] && this.pageArray[c].setCSSByName("flip-hard-right-side")) :
				(this.pageArray[b] && this.pageArray[b].setLeftOrRight(!1), this.pageArray[c] && this.pageArray[c].setLeftOrRight(!0), this.pageArray[b] && this.pageArray[b].setCSSByName("flip-hard-right-side"), this.pageArray[c] && this.pageArray[c].setCSSByName("flip-hard-left-side"));
			this.pageArray[c] && this.pageArray[c].setAttachment(!d);
			return [this.pageArray[b], this.pageArray[c]]
		},
		setAttachmentBefore: function (b) {
			this._super(b);
			this.hardCover && this.hardCover.refresh(b, this.getThicknessWidth(), this.currentPageIndex)
		},
		afterCurling: function () {
			this._super();
			this.hardCover && this.hardCover.refresh(this.currentPageIndex, this.getThicknessWidth(), this.currentPageIndex)
		},
		setAttachmentAfter: function () {
			this._super();
			this.hardCover && this.hardCover.refresh(this.currentPageIndex, this.getThicknessWidth(), this.currentPageIndex)
		},
		onResize: function (b, c) {
			this._super(b, c);
			this.hardCover.onResize(b, c, this.getThicknessWidth());
			this.hardCover.refresh(this.currentPageIndex, this.getThicknessWidth(), this.currentPageIndex)
		},
		resizeBook: function (b, c) {
			this._super(b, c);
			this.hardCover.onResize(b,
				c, this.getThicknessWidth());
			this.hardCover.refresh(this.currentPageIndex, this.getThicknessWidth(), this.currentPageIndex)
		},
		show: function () {
			this._super();
			this.hardCover.show()
		},
		hide: function () {
			this._super();
			this.hardCover.hide()
		}
	}).extend(NormalBook),
	HardPhoneBook = Class({}).extend(HardBook).extend(PinchZoomBook),
	SingleHardBook = Class({
		createBook: function (b) {
			this._super(b);
			this.hardCover = new SingleHardCover(this.flipBook)
		},
		newPage: function (b) {
			1 == b || b == bookConfig.totalPageCount ? (b = new HardSide(b, "page",
				BookType.single_book), bookConfig.RightToLeft ? b.setLeftOrRight(!0) : b.setLeftOrRight(!1)) : b = new NormalSide(b, "page", BookType.single_book);
			return b
		},
		followToPoint: function (b, c, d) {
			this._super(b, c, d);
			this.hardCover.refresh(this.currentPageIndex, this.getThicknessWidth())
		},
		getDownUpHardPage: function (b, c) {
			var d = b;
			b > c && (d = c);
			this.addPageArray([d]);
			this.addPageBackArray([d]);
			bookConfig.RightToLeft ? (this.pageArray[d] && this.pageArray[d].setLeftOrRight(!0), this.pageBackArray[d] && this.pageBackArray[d].setLeftOrRight(!0),
				this.pageArray[d] && this.pageArray[d].setCSSByName("flip-hard-left-side"), this.pageBackArray[d] && this.pageBackArray[d].setCSSByName("flip-hard-right-side")) : (this.pageArray[d] && this.pageArray[d].setLeftOrRight(!1), this.pageBackArray[d] && this.pageBackArray[d].setLeftOrRight(!1), this.pageArray[d] && this.pageArray[d].setCSSByName("flip-hard-right-side"), this.pageBackArray[d] && this.pageBackArray[d].setCSSByName("flip-hard-left-side"));
			return [this.pageArray[d], this.pageBackArray[d]]
		},
		setAttachmentBefore: function (b) {
			this._super(b);
			this.hardCover && this.hardCover.refresh(b, this.getThicknessWidth(), this.currentPageIndex)
		},
		afterCurling: function () {
			this._super();
			this.hardCover && this.hardCover.refresh(this.currentPageIndex, this.getThicknessWidth(), this.currentPageIndex)
		},
		onResize: function (b, c) {
			this._super(b, c)
		},
		resizeBook: function (b, c) {
			this._super(b, c);
			this.hardCover.onResize(b, c, this.getThicknessWidth());
			this.hardCover.refresh(this.currentPageIndex, this.getThicknessWidth(), this.currentPageIndex)
		},
		show: function () {
			this._super();
			this.hardCover.show()
		},
		hide: function () {
			this._super();
			this.hardCover.hide()
		}
	}).extend(SingleBook),
	SingleHardPhoneBook = Class({}).extend(SingleHardBook).extend(PinchZoomSingleBook);
Class("TaskList", {
	create: function () {
		this.taskList = [];
		this.largeLength = 0
	},
	unShiftList: function (b, c) {
		this.taskList.unshift(b);
		this.popList();
		for (var d = this.taskList.length, f = 0; f < d && !this.stop; f++) c && c(this.taskList[f])
	},
	popList: function (b) {
		var c = this.taskList.length;
		if (!(c <= this.largeLength)) {
			this.stop = !0;
			for (var d = 0; d < c - this.largeLength; d++) {
				var f = this.taskList.pop();
				b && b(f)
			}
			this.stop = !1
		}
	},
	setLargeLength: function (b) {
		this.largeLength = b
	}
});

var setPageIndexTextField = function () {
	setCurrentIndexTextField(BookInfo.getBook().getCurrentPageIndex(), bookType == BookType.normal_book || bookType == BookType.phone_slide_book || bookType == BookType.slide_book || bookType == BookType.catalog_book);
	void 0 != $("#currentPageIndexTextField") &&
		null != $("#currentPageIndexTextField") && void 0 != $("#currentPageIndexTextField")[0] && null != $("#currentPageIndexTextField")[0] && ($("#currentPageIndexTextField").bind("keydown", function (b) {
			13 == b.keyCode && (b = $("#currentPageIndexTextField").val(), b = parseInt(getRealPage(b)), isNaN(b) || (b = Math.min(Math.max(b, 1), totalPageCount), gotoPageFun(b)))
		}), $("#currentPageIndexTextField").bind("blur", function () { }), $("#currentPageIndexTextField").bind(_event._end, function (b) {
			$("#currentPageIndexTextField").val("")
		}))
},
	cursor, AnnotationPannel = Class({
		create: function (b) {
			var c = this;
			this.width = 65;
			this.itemWidth = 37;
			this.itemHeight = 33;
			this.showButtonHeight = 18;
			this.padding = 8;
			isBelowIE9() ? this.buttonCount = 6 : this.buttonCount =
				7;
			this.itemBoxWidth = this.width - 10;
			this.itemBoxHeight = this.buttonCount * (this.itemHeight + this.padding) + 2 * this.padding + this.itemHeight;
			this.height = this.itemBoxHeight + this.showButtonHeight + 10;
			this.background = $("<div></div>");
			this.showHideButton = $("<div></div>");
			this.contentBox = $("<div></div>");
			b.append(this.background);
			this.background.append(this.showHideButton);
			this.background.append(this.contentBox);
			this.background.css({
				width: this.width + "px",
				height: this.height + "px",
				left: "100px",
				top: (windowHeight - this.height) /
					2 + "px",
				"z-index": "10",
				position: "absolute"
			});
			this.contentBox.css({
				width: this.itemBoxWidth + "px",
				height: this.itemBoxHeight + "px",
				left: (this.width - this.itemBoxWidth) / 2 + "px",
				top: 6 + this.showButtonHeight + "px",
				position: "absolute",
				background: "#535353",
				"border-top": "1px solid #6a6a6a",
				"border-radius": "0px 0px 2px 2px",
				"-webkit-box-shadow": "0 0 5px rgba(54, 54, 54, 0.95)",
				"-moz-box-shadow": "0 0 5px rgba(54, 54, 54, 0.95)",
				"-o-box-shadow": "0 0 5px rgba(54, 54, 54, 0.95)",
				"box-shadow": "0 0 5px rgba(54, 54, 54, 0.95)"
			});
			this.showHideButton.css({
				top: "5px",
				left: (this.width - this.itemBoxWidth) / 2 + "px",
				width: this.itemBoxWidth + "px",
				height: this.showButtonHeight + "px",
				position: "absolute",
				"border-radius": "3px 3px 0px 0px",
				"border-bottom": "1px solid #000000",
				background: "#383838",
				"-webkit-box-shadow": "0 0 5px rgba(54, 54, 54, 0.95)",
				"-moz-box-shadow": "0 0 5px rgba(54, 54, 54, 0.95)",
				"-o-box-shadow": "0 0 5px rgba(54, 54, 54, 0.95)",
				"box-shadow": "0 0 5px rgba(54, 54, 54, 0.95)"
			});
			b = $("<img/>");
			b.attr("src", uiBaseURL + "noteclose.png");
			b.css({
				position: "absolute",
				right: "5px",
				width: 10,
				height: 10,
				top: (this.showButtonHeight - 10) / 2 + "px"
			});
			b.asImageButton();
			b.bind(_event._end, function () {
				c.hideBox()
			});
			this.showHideButton.append(b);
			this.buttonType = 0;
			// CreateNoteRemark.bind(this)();
			this.addItem(this.contentBox);
			this.addSonItem(this.background);
			this.changeCursor();
			this.initEvent();
			this.background.css("display", "none");
			this.showing = !1
		},
		addItem: function (b) {
			for (var c = this, d = this.buttonType = 0; d < this.buttonCount; d++) {
				var f = $("<div></div>"),
					g = $("<img/>");
				$(f).attr("buttonType", d);
				f.css({
					width: c.itemWidth + "px",
					height: c.itemHeight + "px",
					left: (c.itemBoxWidth - c.itemWidth) / 2 + "px",
					top: c.itemWidth / 2 + c.padding + d * (c.itemHeight + this.padding) + "px",
					position: "absolute",
					"border-radius": "2px"
				});
				g.css({
					"margin-left": "5px",
					"margin-top": "3px",
					position: "absolute"
				});
				b.append(f);
				f.append(g);
				f.bind(_event._over, function () {
					$(this).removeClass();
					$(this).attr("class", "item-enter")
				});
				f.bind(_event._end, function () {
					$(this).removeClass();
					$(this).attr("class", "item-enter")
				});
				f.bind(_event._leave,
					function () {
						c.buttonType != $(this).attr("buttonType") && ($(this).removeClass(), $(this).attr("class", "item-transparent"))
					});
				switch (d) {
					case 0:
						g.attr("src", uiBaseURL + "cursor.png");
						g.attr("title", getLanguage("tltCursor", "cursor"));
						c.cursorButton = f;
						$(f).bind(_event._down, function () {
							c.resetButton()
						});
						break;
					case 1:
						g.attr("src", uiBaseURL + "highligh.png");
						g.attr("title", getLanguage("tltAddHighlight", "add highlight"));
						$(f).bind(_event._down, function () {
							global.annotationImage.offCreateEvents();
							annotationShapes.delEvents();
							isBelowIE9() || signature.hide();
							textRemark.unbindCreateEvents();
							textRemark.addHighlightEvent();
							noteCookie.hide();
							cursor = !1;
							1 != c.buttonType && c.changeCursor();
							c.buttonType = 1;
							c.selectButton = c.highLightButton;
							c.shapesPanelHide()
						});
						c.highLightButton = f;
						break;
					case 2:
						g.attr("src", uiBaseURL + "remark.png");
						g.attr("title", getLanguage("tltAddTexts", "add texts"));
						$(f).bind(_event._down, function () {
							global.annotationImage.offCreateEvents();
							annotationShapes.delEvents();
							isBelowIE9() || signature.hide();
							textRemark.unbindCreateEvents();
							textRemark.addEvents();
							noteCookie.hide();
							cursor = !1;
							2 != c.buttonType && c.changeCursor();
							c.buttonType = 2;
							c.selectButton = c.textRemarkButton;
							c.shapesPanelHide()
						});
						c.textRemarkButton = f;
						break;
					case 3:
						g.attr("src", uiBaseURL + "shape.png");
						g.attr("title", getLanguage("tltAddShapes", "add shapes"));
						$(f).bind(_event._down, function () {
							global.annotationImage.offCreateEvents();
							annotationShapes.delEvents();
							isBelowIE9() || signature.hide();
							textRemark.unbindCreateEvents();
							noteCookie.hide();
							cursor = !1;
							3 != c.buttonType && c.changeCursor();
							c.buttonType = 3;
							c.selectButton = c.shapeButton
						});
						$(f).bind(_event._over, function () { });
						$(f).bind(_event._leave, function () {
							3 != c.buttonType && c.shapesPanelHide()
						});
						$(f).bind(_event._end, function () {
							c.shapesPanelShowOrHide()
						});
						c.shapeButton = f;
						break;
					case 4:
						g.attr("src", uiBaseURL + "notesadd.png");
						g.attr("title", getLanguage("tltAddNotes", "add notes"));
						$(f).bind(_event._down, function () {
							global.annotationImage.offCreateEvents();
							annotationShapes.delEvents();
							isBelowIE9() || signature.hide();
							textRemark.unbindCreateEvents();
							noteCookie.showHide();
							cursor = !1;
							4 != c.buttonType && c.changeCursor();
							c.buttonType = 4;
							c.selectButton = c.noteCookieButton;
							c.shapesPanelHide()
						});
						c.noteCookieButton = f;
						break;
					case 5:
						g.attr("src", uiBaseURL + "addImage.png");
						g.attr("title", getLanguage("tltAddImageFile", "add image file"));
						$(f).bind(_event._down, function () {
							annotationShapes.delEvents();
							isBelowIE9() || signature.hide();
							textRemark.unbindCreateEvents();
							global.annotationImage.addCreateEvents();
							noteCookie.hide();
							cursor = !1;
							5 != c.buttonType && c.changeCursor();
							c.buttonType = 5;
							c.selectButton = c.annotationImageButton;
							c.shapesPanelHide()
						});
						c.annotationImageButton = f;
						break;
					case 6:
						g.attr("src", uiBaseURL + "signature.png"), g.attr("title", getLanguage("tltAddSignature", "add signature")), $(f).bind(_event._down, function () {
							global.annotationImage.offCreateEvents();
							annotationShapes.delEvents();
							isBelowIE9() || signature.showHide();
							textRemark.unbindCreateEvents();
							noteCookie.hide();
							cursor = !1;
							6 != c.buttonType && c.changeCursor();
							c.buttonType = 6;
							c.selectButton = c.signatureButton;
							c.shapesPanelHide()
						}),
							c.signatureButton = f
				}
			}
		},
		addSonItem: function (b) {
			var c = parseInt(this.contentBox.css("left")) + parseInt(this.contentBox.css("width")),
				d = parseInt(this.shapeButton.css("top")) + parseInt(this.contentBox.css("top")) - this.padding / 2,
				f = (parseInt(this.contentBox.css("width")) - this.itemWidth) / 2 + 8;
			this.shapesPannel = $("<div></div>");
			this.shapesContentBox = $("<div></div>");
			this.shapesPannel.css({
				width: f + 180 + 8,
				height: 49,
				position: "absolute",
				left: c - f + "px",
				top: d + "px"
			});
			this.shapesContentBox.css({
				width: 188,
				height: 49,
				position: "absolute",
				left: f + "px",
				background: "#535353",
				"border-radius": "0px 2px 2px 0px",
				"-webkit-box-shadow": "0 0 5px rgba(54, 54, 54, 0.95)",
				"-moz-box-shadow": "0 0 5px rgba(54, 54, 54, 0.95)",
				"-o-box-shadow": "0 0 5px rgba(54, 54, 54, 0.95)",
				"box-shadow": "0 0 5px rgba(54, 54, 54, 0.95)"
			});
			b.append(this.shapesPannel);
			this.shapesPannel.append(this.shapesContentBox);
			this.shapesPanelHide();
			var g = this;
			this.shapesPannel.bind(_event._end + " " + _event._enter, function () {
				g.shapesPanelShow()
			});
			for (b = 0; 4 > b; b++) {
				var f = $("<div></div>"),
					h = $("<img/>"),
					d = 8,
					c = 8 + 45 * b;
				f.css({
					width: "37px",
					height: "33px",
					left: c + "px",
					top: d + "px",
					position: "absolute",
					"border-radius": "2px"
				});
				h.css({
					"margin-left": "5px",
					"margin-top": "3px",
					position: "absolute"
				});
				this.shapesContentBox.append(f);
				f.append(h);
				switch (b) {
					case 0:
						h.attr("src", uiBaseURL + "shapes_line.png");
						h.attr("title", getLanguage("tltAddLine", "add line"));
						$(f).bind(_event._down, function () {
							g.clickShape();
							annotationShapes.addEvents("line");
							g.shapesPanelHide()
						});
						break;
					case 1:
						h.attr("src", uiBaseURL + "shapes_arrow.png");
						h.attr("title", getLanguage("tltAddArrow", "add arrow"));
						$(f).bind(_event._down, function () {
							g.clickShape();
							annotationShapes.addEvents("arrow");
							g.shapesPanelHide()
						});
						break;
					case 2:
						h.attr("src", uiBaseURL + "shapes_rect.png");
						h.attr("title", getLanguage("tltAddRect", "add rect"));
						$(f).bind(_event._down, function () {
							g.clickShape();
							annotationShapes.addEvents("rect");
							g.shapesPanelHide()
						});
						break;
					case 3:
						h.attr("src", uiBaseURL + "shapes_ellipse.png"), h.attr("title", getLanguage("tltAddEllipse", "add ellipse")), $(f).bind(_event._down,
							function () {
								g.clickShape();
								annotationShapes.addEvents("ellipse");
								g.shapesPanelHide()
							})
				}
				f.bind(_event._over, function () {
					$(this).removeClass();
					$(this).attr("class", "item-enter")
				});
				f.bind(_event._end, function () {
					$(this).removeClass();
					$(this).attr("class", "item-transparent")
				});
				f.bind(_event._leave, function () {
					$(this).removeClass();
					$(this).attr("class", "item-transparent")
				})
			}
		},
		shapesPanelShow: function () {
			this.shapesPannelShowHide = !0;
			this.shapesPannel.show()
		},
		shapesPanelHide: function () {
			this.shapesPannelShowHide = !1;
			this.shapesPannel.hide()
		},
		shapesPanelShowOrHide: function () {
			this.shapesPannelShowHide ? this.shapesPanelHide() : this.shapesPanelShow()
		},
		clickShape: function () { },
		resetButton: function () {
			cursor = !0;
			0 != this.buttonType && this.changeCursor();
			this.buttonType = 0;
			this.selectButton = this.cursorButton;
			this.shapesPanelHide();
			void 0 != textRemark && textRemark.unbindCreateEvents();
			void 0 != noteCookie && noteCookie.hide();
			void 0 != annotationShapes && annotationShapes.delEvents();
			void 0 == signature || isBelowIE9() || signature.hide();
			void 0 != global.annotationImage && global.annotationImage.offCreateEvents()
		},
		changeCursor: function () {
			void 0 == this.selectButton && (this.selectButton = this.cursorButton);
			cursor ? ($(this.selectButton).removeClass(), $(this.selectButton).attr("class", "item-transparent"), $(this.cursorButton).removeClass(), $(this.cursorButton).attr("class", "item-enter")) : ($(this.selectButton).removeClass(), $(this.selectButton).attr("class", "item-transparent"))
		},
		onResize: function () {
			this.background.css({
				left: "100px",
				top: (windowHeight -
					this.height) / 2 + "px"
			})
		},
		hideBox: function () {
			$(this.background).fadeOut(500);
			this.showing = !1;
			this.resetButton()
		},
		showshow: function () {
			$(this.background).fadeIn(500);
			this.showing = !0
		},
		getShowStatu: function () {
			return this.showing
		},
		initEvent: function () {
			$(this.background).dragToMove(this.background)
		}
	}),
	phoneGotoPage = Class({
		create: function (b) {
			this.mainColor = "#000000";
			this.menu = $("<div id='menu' style='position:absolute;width:100%;height:75px;z-index:98;bottom:-80px;'></div>");
			this.background = $("<div id='background' style='position:absolute;width:100%;height:75px;'></div>");
			this.contentBox = $("<div id='contentBox' class='phoneGotoPageContent' style='position:absolute;width:100%;height:75px;'></div>");
			this.background.css({
				background: this.mainColor,
				opacity: 0.8
			});
			b.append(this.menu);
			this.menu.append(this.background);
			this.menu.append(this.contentBox);
			this.initContentBox();
			this.initEvent();
			this.visible = !1
		},
		initContentBox: function () {
			this.contentBox.css({
				"text-align": "center",
				display: "inline-block"
			});
			this.firstButton = $("<div class='btn' style='margin-left:0px;'></div>");
			this.prevButton = $("<div class='btn'></div>");
			this.nextButton = $("<div class='btn'></div>");
			this.lastButton = $("<div class='btn'></div>");
			this.goButton = $("<div class='goBtn'></div>");
			this.inputButton = $("<div class='inputButton' style='width:100px;'><input id='currentPageIndexTextField' type='text'/></div>");
			this.contentBox.append(this.firstButton);
			this.contentBox.append(this.prevButton);
			this.contentBox.append(this.inputButton);
			this.contentBox.append(this.nextButton);
			this.contentBox.append(this.lastButton);
			this.inputButton.append(this.goButton);
			$("#currentPageIndexTextField").css({
				padding: "0px",
				"text-align": "center",
				"border-width": "0px",
				background: "#ffffff",
				width: "70px",
				"padding-right": "30px",
				height: "35px",
				"border-radius": "0px",
				position: "absolute",
				left: 0,
				top: 0
			})
		},
		show: function () {
			this.menu.animate({
				bottom: 40
			},
				300);
			this.visible = !0
		},
		hide: function () {
			this.menu.animate({
				bottom: -80
			}, 300);
			this.visible = !1
		},
		showOrHide: function () {
			!0 === this.visible ? this.hide() : this.show()
		},
		initEvent: function () {
			this.firstButton.bind(_event._end, function () {
				rightToLeft ? lastPageFun() : firstPageFun();
				return !1
			});
			this.prevButton.bind(_event._end, function () {
				rightToLeft ? nextPageFun() : previousPageFun();
				return !1
			});
			this.nextButton.bind(_event._end, function () {
				rightToLeft ? previousPageFun() : nextPageFun();
				return !1
			});
			this.lastButton.bind(_event._end,
				function () {
					rightToLeft ? firstPageFun() : lastPageFun();
					return !1
				});
			this.goButton.bind(_event._end, function () {
				var b = parseInt($("#currentPageIndexTextField").val().replace(/\D/g, "")),
					b = Math.min(Math.max(b, 1), totalPageCount);
				gotoPageFun(b);
				return !1
			}.bind(this))
		}
	});
var gradientColorA, gradientColorB, gradientColorAngle, backGroundImgURL, zoomButtonEnable, thumbButtonEnable, shareButtonEnable, searchButtonEnable, bookmarkButtonEnable, tableofcontentButtonEnable, windowWidth = 0,
	windowHeight = 0,
	toolBarColor, buttonColor, originTotalPageCount, totalPageCount, leftShadowWidth = 50,
	rightShadowWidth = 50,
	zoomPageWidth, zoomPageHeight, flipTime = 600,
	isRegister = !1,
	bookDescription, bookTitle, showFlipButton, normalEventRadius = 1E4,
	singleEventRadius = 1E4,
	stopFlip = !1,
	flipping = !1,
	isTouch = isTouchDevice(),
	bookContainer, tmpContainer, onBookLoad, slideBook, singleSlideBook, catalogBook, singleCatalogBook, phoneSlideBook, singlePhoneSlideBook, flipBook, singlePageBook, printBody, helpBody, aboutBody, noteCookie, textRemark, signature, annotationShapes;
cursor = !0;
var highLight, annotationPannel, videoGallery, photoGallery, languagePanel, QRcode, QRbutton, moreBar, pageIndexTextField, _singleBook, resizeBookAfterFlip = !1,
	frmSearch, frmShare, backgroundAudio, auto_player, productName, homePage, _tipsBox, frmBookmark, bookmark, thumbnail, oriPageIndex = 1,
	googleID, hardPageEnable, uiBaseURL, soundBaseURL, browserType, rightToLeft = !1,
	isFlipPdf = !1,
	flaudio = 0,
	flagspeak = 0,
	isFlipModel = !0,
	hadBMT, bgSound, backgroundObj, bmtBox, textForPages = [],
	positionForPages = [],
	loadSearchFlag = !1,
	iconArray, bookType = 0,
	thumbnailHeight = 0;
function scrapOriginPageIndex() {
	var b = bookConfig.OriginPageIndex,
		c = window.location.hash;
	"" != c && 3 < c.length && "#p=" == c.substr(0, 3) && (b = parseInt(getRealPageNumber(c.substr(3, c.length - 3))));
	b = Math.max(1, b);
	return b = Math.min(originTotalPageCount, b)
}
bdor[42] = function () {
	return bdor[33](bdor[32](37, 33) + 10, 36)
}();

function initFlipBook(b) {
	if (bookType == BookType.normal_book || bookType == BookType.single_book) isPhone() || isPad(), bookConfig.HardPageEnable ? (global.flipBook = new HardPhoneBook(bookContainer, b), global.singlePageBook = new SingleHardPhoneBook(bookContainer, b)) : (global.flipBook = new NormalPhoneBook(bookContainer, b), global.singlePageBook = new SinglePhoneBook(bookContainer, b))
}

function initCatalogBook(b) {
	bookType == BookType.catalog_book && (global.catalogBook = new CatalogBook(bookContainer, b), "lite" == bookConfig.ToolbarViewMode.toLowerCase() ? '' : (catalogBook.guidBar.hide()));
	bookType == BookType.singleCatalog_book && (global.singleCatalogBook = new SingleCatalogBook(bookContainer, b))
}

function initSlideBook(b) {
	bookType == BookType.slide_book && (global.slideBook = new PcSlideBook(bookContainer, b));
	bookType == BookType.singleSlide_book && (global.singleSlideBook = new PcSingleSlideBook(bookContainer, b));
	if (bookType == BookType.phone_slide_book || bookType == BookType.singlePhone_slide_book) global.phoneSlideBook = new PhoneSlideBook(bookContainer, b), global.singlePhoneSlideBook = new PhoneSingleSlideBook(bookContainer, b)
}

function winodwDynamicResize() {
	if (isTouch) $(window).on("orientationchange", function () {
		onStageResize.delay(200)
	});
	$(window).resize(onStageResize);
	$.system.name == $.system.IOS && 8 <= $.system.version && function () {
		if (windowHeight != window.innerHeight || windowWidth != window.innerWidth) windowHeight = window.innerHeight, windowWidth = window.innerWidth, onStageResize()
	}.interval(1E3)
}

function scrapURL() {
	var b = window.location.hash;
	"" != b && 3 < b.length && "#p=" == b.substr(0, 3) ? window.setTimeout(function () {
		var c = parseInt(getRealPageNumber(b.substr(3, b.length - 3)));
		gotoPageFun(c);
		TurnonAutoFlip()
	}, 1E3) : TurnonAutoFlip();
	0 <= window.location.search.indexOf("fullscreen=true") && function () {
		$(document).trigger(fullScreenApi.fullScreenEventName)
	}.delay(this, 50)
}

var resizeBySearchInput = function () {
	(isPhone() || isPad()) && global.foldingMenu && global.foldingMenu.visible && $("body").width()
},
	totalThicknessWidth = function () {
		if (windowWidth < windowHeight) return 0;
		var b = Math.min(bookConfig.totalPageCount, 100),
			b = $.easing.easeOutQuad(null, b, 0, 30, 100),
			b = Math.floor(b),
			c = Math.max(windowHeight - bookConfig.topMargin - bookConfig.bottomMargin - 0 - thumbnailHeight, 1),
			c = Math.min(1, c / 800),
			c = $.easing.swing(null, Math.max(b - 8, 0), 1, c - 1, 22);
		return b * c
	};

function resizeAttachments() {
	global.foldingMenu && foldingMenu.resize(windowWidth, windowHeight);
	if (global.phoneTableOfContent) global.phoneTableOfContent.onResize();
	if (global.aboutBody) aboutBody.onResize();
	if (global.languagePanel) languagePanel.onResize();
	if (global.annotationPannel) annotationPannel.onResize();
	var b = Math.max(windowHeight - bookConfig.topMargin - bookConfig.bottomMargin - 0 - thumbnailHeight, 1),
		c = Math.max(windowWidth - bookConfig.leftMargin - bookConfig.rightMargin, 1);
	global.frmSearch && (frmSearch.resize(240, b), frmSearch.setTop(10));
	global.frmBookmark &&
		(c = Math.max(300, c / 4), frmBookmark.resize(c, b), frmBookmark.setTop(10));
}
function resizeCatalogBook() {
	if (global.catalogBook) {
		var b = bookConfig.topMargin,
			c = bookConfig.leftMargin,
			d = bookConfig.rightMargin,
			f = bookConfig.bottomMargin;
		"lite" != bookConfig.ToolbarViewMode.toLowerCase() || miniStyle.isMini() && !fullScreenApi.isFullScreen() || (b = bookConfig.topMargin + 50);
		var g = 0;
		global.thumbnail && !0 == thumbnail.showing && (g = thumbnail.getHeight());
		var g = Math.max(windowHeight - b - f - g, 1),
			h = Math.max(windowWidth - c - d, 1),
			k = bookConfig.largePageWidth * (-parseFloat(bookConfig.visibleAreaLeft) +
				parseFloat(bookConfig.visibleAreaRight)) / 100,
			l = bookConfig.largePageHeight * (parseFloat(bookConfig.visibleAreaBottom) - parseFloat(bookConfig.visibleAreaTop)) / 100,
			k = getPageWidthHeight(h - 2 * bookConfig.hardCoverBorderWidth - 2 * totalThicknessWidth(), g - 2 * bookConfig.hardCoverBorderWidth, 2 * k, l),
			h = Math.min(50, 0.7 * k.y / 8);
		Math.min(0.7 * k.y, 310);
		c = parseInt(c) + h;
		d = parseInt(d) + h;
		h = Math.max(windowWidth - c - d, 1);
		"lite" == bookConfig.ToolbarViewMode.toLowerCase() && (g = Math.max(windowHeight - b - f, 1));
		k = getPageWidthHeight(h, g, 2 *
			bookConfig.largePageWidth, bookConfig.largePageHeight);
		c = (windowWidth - c - d - k.x) / 2 + c;
		f = -k.x / 4;
		d = k.x / 4;
		rightToLeft && (f = k.x / 4, d = -k.x / 4);
		var l = "lite" == bookConfig.ToolbarViewMode.toLowerCase() ? 0 : 0,
			b = (g - k.y) / 2 + b + l,
			m = {},
			l = 0;
		!0 == parseBool(bookConfig.retainBookCenter) && (1 == catalogBook.currentPageIndex && (l = f), f = bookConfig.totalPageCount, 1 == f % 2 && f++ , catalogBook.currentPageIndex == f && (l = d), m = transformCSS({
			tran: {
				x: l,
				y: 0
			}
		}));
		m.top = b + "px";
		m.left = c + "px";
		catalogBook.setCSS(m);
		catalogBook.onResize(k.x /
			2, k.y)
	}
	if (global.singleCatalogBook) singleCatalogBook.onResize(h, g)
}
var pageWidthHeight, containerHeight, containerWidth, largePageWidth, largePageHeight;

function resizeFlipBook() {
	var b = bookConfig.topMargin,
		c = bookConfig.leftMargin,
		d = bookConfig.rightMargin,
		f = bookConfig.bottomMargin,
		g = Math.max(windowWidth - c - d, 1),
		h = Math.max(windowHeight - b - f - thumbnailHeight, 1),
		k = bookConfig.largePageWidth * (-parseFloat(bookConfig.visibleAreaLeft) + parseFloat(bookConfig.visibleAreaRight)) / 100,
		l = bookConfig.largePageHeight * (parseFloat(bookConfig.visibleAreaBottom) - parseFloat(bookConfig.visibleAreaTop)) / 100,
		m = getPageWidthHeight(g - 2 * bookConfig.hardCoverBorderWidth -
			2 * totalThicknessWidth(), h - 2 * bookConfig.hardCoverBorderWidth, 2 * k, l);
	if (global.flipBook) {
		var n = (g - m.x) / 2 + c,
			p = (h - m.y) / 2 + b,
			q = -m.x / 4,
			t = m.x / 4;
		rightToLeft && (q = m.x / 4, t = -m.x / 4);
		var r = {},
			s = 0;
		!0 == parseBool(bookConfig.retainBookCenter) && (1 == flipBook.getCurrentPageIndex() && (s = q), flipBook.getCurrentPageIndex() == totalPageCount && (s = t), r = transformCSS({
			tran: {
				x: s,
				y: 0
			}
		}));
		r.top = p + "px";
		r.left = n + "px";
		flipBook.setCSS(r);
		flipBook.onResize(m.x / 2, m.y);
		transformCSS({
			tran: {
				x: s,
				y: 0
			},
			scale: 1,
			origin: {
				x: 0,
				y: 0
			},
			obj: flipBook.flipBook
		});
		flipBook.zoomOut()
	}
	global.singlePageBook && (m = getPageWidthHeight(windowWidth - bookConfig.hardCoverBorderWidth - totalThicknessWidth() - c - d, windowHeight - bookConfig.hardCoverBorderWidth - b - f, k, l), singlePageBook.onResize(m.x, m.y), b = (h - m.y) / 2 + b, singlePageBook.setCSS({
		top: b + "px",
		left: c + (g - m.x - bookConfig.hardCoverBorderWidth - totalThicknessWidth()) / 2 + (rightToLeft ? bookConfig.hardCoverBorderWidth : 0) + (rightToLeft ? totalThicknessWidth() : 0) + "px"
	}),
		transformCSS({
			tran: {
				x: 0,
				y: 0
			},
			scale: 1,
			origin: {
				x: 0,
				y: 0
			},
			obj: singlePageBook.flipBook
		}), singlePageBook.zoomOut())
}

function resizeSlideBook() {
	if (global.slideBook) slideBook.onResize();
	if (global.singleSlideBook) singleSlideBook.onResize();
	if (global.phoneSlideBook) phoneSlideBook.onResize(windowWidth, windowHeight);
	if (global.singlePhoneSlideBook) singlePhoneSlideBook.onResize(windowWidth, windowHeight)
}

function changeShowBookByWindow() {
	var b, c, d = !1;
	bookType == BookType.single_book && windowWidth >= windowHeight && (bookType = BookType.normal_book, changeShowBook(0), c = singlePageBook.currentPageIndex, d = b = !0);
	bookType == BookType.singlePhone_slide_book && windowWidth >= windowHeight && bookConfig.showDoublePage && (bookType = BookType.phone_slide_book, changeShowBook(4), c = singlePhoneSlideBook.getRealPageIndex(), d = b = !0);
	bookType == BookType.phone_slide_book && windowWidth < windowHeight && (bookType = BookType.singlePhone_slide_book,
		changeShowBook(5), c = phoneSlideBook.getRealPageIndex(), b = !1, d = !0);
	bookType == BookType.normal_book && windowWidth < windowHeight && (bookType = BookType.single_book, changeShowBook(1), c = flipBook.currentPageIndex, b = !1, d = !0);
	d && (gotoPageFun(c), setCurrentIndexTextField(c, b), global.thumbnail && thumbnail.clearHighLight(), global.thumbnail && thumbnail.setHighLight(c))
}

function onWindowClick(b) {
	if (b) {
		if (b.target == b.currentTarget) {
			var c = BookInfo.getBook();
			if (c.status_zoom || c.isZomming || c.status_resize) return;
			if (bookType == BookType.normal_book || bookType == BookType.catalog_book || bookType == BookType.singleSlide_book || bookType == BookType.slide_book) {
				if (b.pageX > $("#flipBook").offset().left + $("#flipBook").outerWidth()) {
					rightToLeft ? previousPageFun() : nextPageFun();
					return
				}
				if (b.pageX < $("#flipBook").offset().left) {
					rightToLeft ? nextPageFun() : previousPageFun();
					return
				}
			}
		}
		bookType !=
			BookType.phone_slide_book && bookType != BookType.singlePhone_slide_book || !isMoreShow || (moreBar.hideMoreBar(), isMoreShow = !1)
	}
}

function onWindowKeyDown(b) {
	if (b) {
		b = b.keyCode;
		b == KEY_CODE_LEFT && (rightToLeft ? nextPageFun() : previousPageFun());
		b == KEY_CODE_RIGHT && (rightToLeft ? previousPageFun() : nextPageFun());
		if (b == KEY_CODE_HOME || b == KEY_CODE_PAGEUP) rightToLeft ? lastPageFun() : firstPageFun();
		if (b == KEY_CODE_END || b == KEY_CODE_PAGEDOWN) rightToLeft ? firstPageFun() : lastPageFun();
	}
};
var init = function () {
	var b = scrapOriginPageIndex();
	initFlipBook(b);
	initCatalogBook(b);
	initSlideBook(b);
	changeShowBook(bookType);
	onStageResize();
	scrapURL();
	initEvent();
	setPageIndexTextField();
	initFlipSound();
	controlAudioVolume();
	winodwDynamicResize();
	setWxxApi();//暴露api 
};

function createAll() {
	selectLanguage(bookConfig.language);
	$.browser.device == $.browser.DEVICE_PAD && $("html").css({
		height: window.innerHeight + "px"
	});
	global.pageIndexTextField = $("#currentPageIndexTextField");
	global.tmpContainer = $("<div id= 'tmpContainer' class='tmpContainer'></div>");
	global.bookContainer = $("<div id= 'bookContainer' class='bookContainer'></div>");
	$("body").append(tmpContainer);
	tmpContainer.append(bookContainer);
	global.windowWidth = $("body").width();
	global.windowHeight = $("body").height();
	global.onBookLoad = new loadingBook(tmpContainer, bookConfig.loadingBackground);
	var b = function (b) {
		jsLoadingBar.destroy();
		iconArray = b;
		onBookLoad.chooseFlipSlide()
	},
		c = function (b) {
			jsLoadingBar.destroy();
			iconArray = b;
			onBookLoad.chooseFlipSlide();
			setTimeout(function () {
				window.scrollTo(0, 1)
			}, 0)
		};
	isPhone() || isPad() ? $(window).loader('0', c) : ($(window).loader('0', b))
}
var onStageResize = function (b) {
	resizeBySearchInput() || (global.resizeBookAfterFlip = !1, bookType == BookType.normal_book && flipBook && flipBook.flipping || bookType == BookType.single_book && singlePageBook.flipping || bookType == BookType.catalog_book && nBookStatu == normalBookStatu.book_statu_auto_flip ? resizeBookAfterFlip = !0 : ($("html").css({
		height: window.innerHeight + "px"
	}), global.windowWidth = $("body").width(), global.windowHeight = $("body").height(), thumbnailHeight = global.thumbnail && thumbnail.getShowStatu() ?
		thumbnail.getHeight() : 0, resizeFlipBook(), resizeCatalogBook(), resizeSlideBook(), changeShowBookByWindow(), resizePlugin(), resizeAttachments()))
};

function initEvent() {
	$(bookContainer).click(function (b) {
		onWindowClick(b)
	});
	$(bookContainer).bind("touchstart", function (b) {
		b.preventDefault()
	});
	$(window).bind("keydown", function (b) {
		onWindowKeyDown(b)
	})
}


jQuery(document).ready(function () {
	"use strict";
	if (window.bookConfig) {
		checkBookConfig();
		global.uiBaseURL = bookConfig.UIBaseURL;
		uiBaseURL && "string" == typeof uiBaseURL && "/" != uiBaseURL.substr(uiBaseURL.length - 1, 1) && (uiBaseURL += "/");
		global.uiBaseURL = "style/icon/";
		global.originTotalPageCount = parseInt(bookConfig.totalPageCount);
		global.totalPageCount =
			originTotalPageCount + (1 == originTotalPageCount % 2 ? 1 : 0);
		global.zoomPageWidth = parseInt(bookConfig.largePageWidth);
		global.zoomPageHeight = parseInt(bookConfig.largePageHeight);
		var b = zoomPageWidth / zoomPageHeight,
			c = zoomPageHeight;
		zoomPageHeight = Math.max(zoomPageHeight, 1440);
		c !== zoomPageHeight && (zoomPageWidth = zoomPageHeight * b);
		global.rightToLeft = parseBool(bookConfig.RightToLeft, !1);
		if (!global.ols || 0 >= global.ols.length) global.ols = [], bookConfig.TableOfContentButtonVisible = !1;
		global.bmtConfig || (global.bmtConfig = []);
		global.language || (global.language = []);
		$.browser.webkit && (browserType = BrowserType.WEBKIT);
		$.browser.mozilla && (browserType = BrowserType.MOZ);
		$.browser.opera && (browserType = BrowserType.OPERA);
		$.browser.msie && (browserType = BrowserType.MS);
		createAll();
		if (isTouch) $(window).on("orientationchange", function () {
			window.setTimeout(function () {
				onBookLoad.onResize()
			}, 200)
		});
		$(window).resize(onBookLoad.onResize)
	} else '',
		function () {
			window.location = window.location.href
		}.delay(400);
});


function setWxxApi() {
	let wxx = window.Wxx;
	wxx.gotoPage = function (pageNum, cb) {
		gotoPageFun(pageNum);
		if (cb) {
			cb();
		}
	}
	wxx.nextPage = function (cb) {
		nextPageFun()
		if (cb) {
			cb();
		}
	}
	wxx.prevPage = function (cb) {
		previousPageFun();
		if (cb) {
			cb();
		}
	}
	wxx.lastPage = function (cb) {
		lastPageFun();
		if (cb) {
			cb();
		}
	}
	wxx.firstPage = function (cb) {
		firstPageFun();
		if (cb) {
			cb();
		}
	}
}
