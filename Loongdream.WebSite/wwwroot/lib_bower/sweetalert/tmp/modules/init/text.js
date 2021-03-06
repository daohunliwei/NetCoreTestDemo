"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var markup_1 = require("../markup");
var modal_1 = require("./modal");
/*
 * Fixes a weird bug that doesn't wrap long text in modal
 * This is visible in the Safari browser for example.
 * https://stackoverflow.com/a/3485654/2679245
 */
var webkitRerender = function (el) {
    if (navigator.userAgent.includes('AppleWebKit')) {
        el.style.display = 'none';
        el.offsetHeight;
        el.style.display = '';
    }
};
exports.initTitle = function (title) {
    if (title) {
        var titleEl = modal_1.injectElIntoModal(markup_1.titleMarkup);
        titleEl.textContent = title;
        webkitRerender(titleEl);
    }
};
exports.initText = function (text) {
    if (text) {
        var textEl = modal_1.injectElIntoModal(markup_1.textMarkup);
        textEl.textContent = text;
        webkitRerender(textEl);
    }
};
//# sourceMappingURL=text.js.map