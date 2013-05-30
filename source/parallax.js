
/*
 * jQuery Plugin Simple Parallax, 01/03/2012
 * Author: https://github.com/felquis
 * Git Repo: https://github.com/felquis/SimpleParallax
 * Contributors: https://github.com/felquis/SimpleParallax/contributors
 */

/*jslint browser: true, nomen: true */
/*globals jQuery, document, window */

(function ($, window, document, undefined) {
    'use strict';

    //first plugin configurations
    var pluginName = 'simpleParallax',
        defaults = {
            limit: 1
        },

        //then dom aux elems
        $doc = $(document),
        body = document.body,

        //then calculation aux
        inc = 0.2,
        bodyX = body.clientWidth / 2,
        bodyY = body.clientHeight / 2;

    function Plugin(elem, options) {
        this.elem = elem;
        this.$elem = $(this.elem);
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype.handleMouseParallax = function (e) {
        var mouseX = e.pageX,
            mouseY = e.pageY,

            offsetLeft = mouseX - bodyX,
            offsetTop = mouseY - bodyY,

            that = e.data.inst;

        that.$elem.each(function () {
            $(this).css({
                left: offsetLeft * inc,
                top: offsetTop * inc
            });

            inc += 0.2;

            if (inc === that._defaults.limit) {
                inc = 0.2;
            }
        });
    };

    Plugin.prototype.init = function () {
        $doc.on('mousemove', {
            inst: this
        }, this.handleMouseParallax);
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };
}(jQuery, window, document));