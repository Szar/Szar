const Glitch = function(selector) {
	var _createClass = function() {
		function e(d, props) {
			var i = 0;
			for (; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) {
					descriptor.writable = true;
				}
				Object.defineProperty(d, descriptor.key, descriptor);
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t;
		};
	}();

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}
	var TextScramble = function() {
		function Bridge(id) {
			_classCallCheck(this, Bridge);
			this.el = id;
			this.chars = "!<>-_\\/[]{}\u2014=+*^?#________";
			this.update = this.update.bind(this);
		}
		return _createClass(Bridge, [{
			key: "setText",
			value: function(e) {
				var DOMEventFacade = this;
				var v = this.el.innerText;
				var rown = Math.max(v.length, e.length);
				var p_extl = new Promise(function(resolve) {
					return DOMEventFacade.resolve = resolve;
				});
				this.queue = [];
				var j = 0;
				for (; j < rown; j++) {
					var h = v[j] || "";
					var offset = e[j] || "";
					var cur = Math.floor(40 * Math.random());
					var end = cur + Math.floor(40 * Math.random());
					this.queue.push({
						from: h,
						to: offset,
						start: cur,
						end: end
					});
				}
				return cancelAnimationFrame(this.frameRequest), this.frame = 0, this.update(), p_extl;
			}
		}, {
			key: "update",
			value: function() {
				var resp = "";
				var aSeg = 0;
				var i = 0;
				var l = this.queue.length;
				for (; i < l; i++) {
					var evt = this.queue[i];
					var name = evt.from;
					var data = evt.to;
					var position = evt.start;
					var se = evt.end;
					var char = evt.char;
					if (this.frame >= se) {
						aSeg++;
						resp = resp + data;
					} else {
						if (this.frame >= position) {
							if (!char || Math.random() < .28) {
								char = this.randomChar();
								this.queue[i].char = char;
							}
							resp = resp + ('<span class="dud">' + char + "</span>");
						} else {
							resp = resp + name;
						}
					}
				}
				this.el.innerHTML = resp.replace(/\./g, '<span class="highlight">.</span>');
				if (!(aSeg === this.queue.length)) {
					this.frameRequest = requestAnimationFrame(this.update);
					this.frame++;
				}
			}
		}, {
			key: "randomChar",
			value: function() {
				return this.chars[Math.floor(Math.random() * this.chars.length)];
			}
		}]), Bridge;
	}();
	return new TextScramble(document.querySelector(selector));

}
export default Glitch;
//export const Glitch = new Glitch();