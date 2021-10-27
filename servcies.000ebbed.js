// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j5UBN":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "25802d3f000ebbed";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["j5UBN"], null, "parcelRequire70e5")
const langEl = document.querySelector('.langWrap');
const langElMobile = document.querySelector('.langWrapmobile');
const link = document.querySelectorAll('.lang');
const homehEl = document.querySelector('.navAbout');
const whohEl = document.querySelector('.navWorks');
const navStart = document.querySelector('.navProject');
const whotEl = document.querySelector('.navServ');
const headerTitle = document.querySelector('.headerTitle');
const headerBio2 = document.querySelector('.headerBio2');
const headerCta = document.querySelectorAll('.headerCta');
const aboutItem1Bio = document.querySelector('.aboutItem1Bio');
const aboutItem1Bio2 = document.querySelector('.aboutItem1Bio2');
const aboutItem1title2 = document.querySelector('.aboutItem1title2');
const aboutItem2Title = document.querySelector('.aboutItem2Title');
const aboutItem2SubTitle1 = document.querySelector('.aboutItem2SubTitle1');
const aboutItem2Bio = document.querySelector('.aboutItem2Bio');
const aboutItem2bio2 = document.querySelector('.aboutItem2bio2');
const aboutItem2SubTitle2 = document.querySelector('.aboutItem2SubTitle2');
const aboutItem3Title = document.querySelector('.aboutItem3Title');
const aboutItem3SubTitle1 = document.querySelector('.aboutItem3SubTitle1');
const aboutItem3Bio = document.querySelector('.aboutItem3Bio');
const aboutItem3bio2 = document.querySelector('.aboutItem3bio2');
const aboutItem3SubTitle2 = document.querySelector('.aboutItem3SubTitle2');
const aboutItem4Title = document.querySelector('.aboutItem4Title');
const aboutItem4SubTitle1 = document.querySelector('.aboutItem4SubTitle1');
const aboutItem4Bio = document.querySelector('.aboutItem4Bio');
const aboutItem5Title = document.querySelector('.aboutItem5Title');
const aboutItem5SubTitle1 = document.querySelector('.aboutItem5SubTitle1');
const aboutItem5Bio = document.querySelector('.aboutItem5Bio');
const aboutItem6Title = document.querySelector('.aboutItem6Title');
const aboutItem6SubTitle1 = document.querySelector('.aboutItem6SubTitle1');
const aboutItem6Bio = document.querySelector('.aboutItem6Bio');
const footer1 = document.querySelector('.footercontenttitlesub');
const footer2 = document.querySelector('.footercontenttitlecontact');
const footer3 = document.querySelector('.footercontentaddress');
const footer4 = document.querySelector('.footercontentemail');
const footer5 = document.querySelector('.footercontentpagestitle');
const footer6 = document.querySelector('.footerMain');
const footer7 = document.querySelector('.footerAbout');
const footer8 = document.querySelector('.footerServ');
const footer9 = document.querySelector('.footerFatora');
const footer0 = document.querySelector('.footerContact');
const sidenav1 = document.querySelector('.sidenavAbout');
const sidenav2 = document.querySelector('.sidenavWorks');
const sidenav3 = document.querySelector('.sidenavServices');
const sidenav4 = document.querySelector('.sidenavNewproject');
window.onload = function() {
    document.querySelector('.preloader').style.display = " none";
    homehEl.innerHTML = data.arabic.navAbout;
    whohEl.innerHTML = data.arabic.navWorks;
    whotEl.innerHTML = data.arabic.navServ;
    navStart.innerHTML = data.arabic.navProject;
    headerTitle.innerHTML = data.arabic.headerTitle;
    headerCta.forEach((woh)=>{
        woh.innerHTML = data.arabic.headerCta;
    });
    headerBio2.innerHTML = data.arabic.headerBio2;
    aboutItem1Bio.innerHTML = data.arabic.aboutItem1Bio;
    aboutItem1Bio2.innerHTML = data.arabic.aboutItem1Bio2;
    aboutItem1title2.innerHTML = data.arabic.aboutItem1title2;
    aboutItem2Title.innerHTML = data.arabic.aboutItem2Title;
    aboutItem2SubTitle1.innerHTML = data.arabic.aboutItem2SubTitle1;
    aboutItem2Bio.innerHTML = data.arabic.aboutItem2Bio;
    aboutItem2bio2.innerHTML = data.arabic.aboutItem2bio2;
    aboutItem2SubTitle2.innerHTML = data.arabic.aboutItem2SubTitle2;
    aboutItem3Title.innerHTML = data.arabic.aboutItem3Title;
    aboutItem3SubTitle1.innerHTML = data.arabic.aboutItem3SubTitle1;
    aboutItem3Bio.innerHTML = data.arabic.aboutItem3Bio;
    aboutItem3bio2.innerHTML = data.arabic.aboutItem3bio2;
    aboutItem3SubTitle2.innerHTML = data.arabic.aboutItem3SubTitle2;
    aboutItem4Title.innerHTML = data.arabic.aboutItem4Title;
    aboutItem4SubTitle1.innerHTML = data.arabic.aboutItem4SubTitle1;
    aboutItem4Bio.innerHTML = data.arabic.aboutItem4Bio;
    aboutItem5Title.innerHTML = data.arabic.aboutItem5Title;
    aboutItem5SubTitle1.innerHTML = data.arabic.aboutItem5SubTitle1;
    aboutItem5Bio.innerHTML = data.arabic.aboutItem5Bio;
    aboutItem6Title.innerHTML = data.arabic.aboutItem6Title;
    aboutItem6SubTitle1.innerHTML = data.arabic.aboutItem6SubTitle1;
    aboutItem6Bio.innerHTML = data.arabic.aboutItem6Bio;
    footer1.innerHTML = data.arabic.footercontenttitlesub;
    footer2.innerHTML = data.arabic.footercontenttitlecontact;
    footer3.innerHTML = data.arabic.footercontentaddress;
    footer4.innerHTML = data.arabic.footercontentemail;
    footer5.innerHTML = data.arabic.footercontentpagestitle;
    footer6.innerHTML = data.arabic.footerMain;
    footer7.innerHTML = data.arabic.footerAbout;
    footer8.innerHTML = data.arabic.footerServ;
    footer9.innerHTML = data.arabic.footerFatora;
    footer0.innerHTML = data.arabic.footerContact;
    sidenav1.innerHTML = data.arabic.sidenavAbout;
    sidenav2.innerHTML = data.arabic.sidenavWorks;
    sidenav3.innerHTML = data.arabic.sidenavServices;
    sidenav4.innerHTML = data.arabic.sidenavNewproject;
    if (localStorage.language == "arabic") {
        homehEl.innerHTML = data.arabic.navAbout;
        whohEl.innerHTML = data.arabic.navWorks;
        whotEl.innerHTML = data.arabic.navServ;
        headerTitle.innerHTML = data.arabic.headerTitle;
        headerCta.forEach((woh)=>{
            woh.innerHTML = data.arabic.headerCta;
        });
        headerBio2.innerHTML = data.arabic.headerBio2;
        aboutItem1Bio.innerHTML = data.arabic.aboutItem1Bio;
        aboutItem1Bio2.innerHTML = data.arabic.aboutItem1Bio2;
        aboutItem1title2.innerHTML = data.arabic.aboutItem1title2;
        aboutItem2Title.innerHTML = data.arabic.aboutItem2Title;
        aboutItem2SubTitle1.innerHTML = data.arabic.aboutItem2SubTitle1;
        aboutItem2Bio.innerHTML = data.arabic.aboutItem2Bio;
        aboutItem2bio2.innerHTML = data.arabic.aboutItem2bio2;
        aboutItem2SubTitle2.innerHTML = data.arabic.aboutItem2SubTitle2;
        aboutItem3Title.innerHTML = data.arabic.aboutItem3Title;
        aboutItem3SubTitle1.innerHTML = data.arabic.aboutItem3SubTitle1;
        aboutItem3Bio.innerHTML = data.arabic.aboutItem3Bio;
        aboutItem3bio2.innerHTML = data.arabic.aboutItem3bio2;
        aboutItem3SubTitle2.innerHTML = data.arabic.aboutItem3SubTitle2;
        aboutItem4Title.innerHTML = data.arabic.aboutItem4Title;
        aboutItem4SubTitle1.innerHTML = data.arabic.aboutItem4SubTitle1;
        aboutItem4Bio.innerHTML = data.arabic.aboutItem4Bio;
        aboutItem5Title.innerHTML = data.arabic.aboutItem5Title;
        aboutItem5SubTitle1.innerHTML = data.arabic.aboutItem5SubTitle1;
        aboutItem5Bio.innerHTML = data.arabic.aboutItem5Bio;
        aboutItem6Title.innerHTML = data.arabic.aboutItem6Title;
        aboutItem6SubTitle1.innerHTML = data.arabic.aboutItem6SubTitle1;
        aboutItem6Bio.innerHTML = data.arabic.aboutItem6Bio;
        footer1.innerHTML = data.arabic.footercontenttitlesub;
        footer2.innerHTML = data.arabic.footercontenttitlecontact;
        footer3.innerHTML = data.arabic.footercontentaddress;
        footer4.innerHTML = data.arabic.footercontentemail;
        footer5.innerHTML = data.arabic.footercontentpagestitle;
        footer6.innerHTML = data.arabic.footerMain;
        footer7.innerHTML = data.arabic.footerAbout;
        footer8.innerHTML = data.arabic.footerServ;
        footer9.innerHTML = data.arabic.footerFatora;
        footer0.innerHTML = data.arabic.footerContact;
        sidenav1.innerHTML = data.arabic.sidenavAbout;
        sidenav2.innerHTML = data.arabic.sidenavWorks;
        sidenav3.innerHTML = data.arabic.sidenavServices;
        sidenav4.innerHTML = data.arabic.sidenavNewproject;
        document.querySelector('nav').style.fontFamily = "cairo";
        rtl();
    } else {
        document.querySelector('nav').style.fontFamily = "Raleway";
        homehEl.innerHTML = data.english.navAbout;
        whohEl.innerHTML = data.english.navWorks;
        whotEl.innerHTML = data.english.navServ;
        navStart.innerHTML = data.english.navProject;
        headerTitle.innerHTML = data.english.headerTitle;
        headerCta.forEach((woh)=>{
            woh.innerHTML = data.english.headerCta;
        });
        headerBio2.innerHTML = data.english.headerBio2;
        aboutItem1Bio.innerHTML = data.english.aboutItem1Bio;
        aboutItem1Bio2.innerHTML = data.english.aboutItem1Bio2;
        aboutItem1title2.innerHTML = data.english.aboutItem1title2;
        aboutItem2Title.innerHTML = data.english.aboutItem2Title;
        aboutItem2SubTitle1.innerHTML = data.english.aboutItem2SubTitle1;
        aboutItem2Bio.innerHTML = data.english.aboutItem2Bio;
        aboutItem2bio2.innerHTML = data.english.aboutItem2bio2;
        aboutItem2SubTitle2.innerHTML = data.english.aboutItem2SubTitle2;
        aboutItem3Title.innerHTML = data.english.aboutItem3Title;
        aboutItem3SubTitle1.innerHTML = data.english.aboutItem3SubTitle1;
        aboutItem3Bio.innerHTML = data.english.aboutItem3Bio;
        aboutItem3bio2.innerHTML = data.english.aboutItem3bio2;
        aboutItem3SubTitle2.innerHTML = data.english.aboutItem3SubTitle2;
        aboutItem4Title.innerHTML = data.english.aboutItem4Title;
        aboutItem4SubTitle1.innerHTML = data.english.aboutItem4SubTitle1;
        aboutItem4Bio.innerHTML = data.english.aboutItem4Bio;
        aboutItem5Title.innerHTML = data.english.aboutItem5Title;
        aboutItem5SubTitle1.innerHTML = data.english.aboutItem5SubTitle1;
        aboutItem5Bio.innerHTML = data.english.aboutItem5Bio;
        aboutItem6Title.innerHTML = data.english.aboutItem6Title;
        aboutItem6SubTitle1.innerHTML = data.english.aboutItem6SubTitle1;
        aboutItem6Bio.innerHTML = data.english.aboutItem6Bio;
        footer1.innerHTML = data.english.footercontenttitlesub;
        footer2.innerHTML = data.english.footercontenttitlecontact;
        footer3.innerHTML = data.english.footercontentaddress;
        footer4.innerHTML = data.english.footercontentemail;
        footer5.innerHTML = data.english.footercontentpagestitle;
        footer6.innerHTML = data.english.footerMain;
        footer7.innerHTML = data.english.footerAbout;
        footer8.innerHTML = data.english.footerServ;
        footer9.innerHTML = data.english.footerFatora;
        footer0.innerHTML = data.english.footerContact;
        sidenav1.innerHTML = data.english.sidenavAbout;
        sidenav2.innerHTML = data.english.sidenavWorks;
        sidenav3.innerHTML = data.english.sidenavServices;
        sidenav4.innerHTML = data.english.sidenavNewproject;
        ltr();
    }
};
link.forEach((el)=>{
    el.addEventListener('click', ()=>{
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        console.log(localStorage.language);
        const attr = el.getAttribute('language');
        homehEl.textContent = data[attr].navAbout;
        whohEl.innerHTML = data[attr].navWorks;
        whotEl.innerHTML = data[attr].navServ;
        headerTitle.innerHTML = data[attr].headerTitle;
        headerCta.forEach((woh)=>{
            woh.innerHTML = data[attr].headerCta;
        });
        headerBio2.innerHTML = data[attr].headerBio2;
        aboutItem1Bio.innerHTML = data[attr].aboutItem1Bio;
        aboutItem1Bio2.innerHTML = data[attr].aboutItem1Bio2;
        aboutItem1title2.innerHTML = data[attr].aboutItem1title2;
        aboutItem2Title.innerHTML = data[attr].aboutItem2Title;
        aboutItem2SubTitle1.innerHTML = data[attr].aboutItem2SubTitle1;
        aboutItem2Bio.innerHTML = data[attr].aboutItem2Bio;
        aboutItem2bio2.innerHTML = data[attr].aboutItem2bio2;
        aboutItem2SubTitle2.innerHTML = data[attr].aboutItem2SubTitle2;
        aboutItem3Title.innerHTML = data[attr].aboutItem3Title;
        aboutItem3SubTitle1.innerHTML = data[attr].aboutItem3SubTitle1;
        aboutItem3Bio.innerHTML = data[attr].aboutItem3Bio;
        aboutItem3bio2.innerHTML = data[attr].aboutItem3bio2;
        aboutItem3SubTitle2.innerHTML = data[attr].aboutItem3SubTitle2;
        aboutItem4Title.innerHTML = data[attr].aboutItem4Title;
        aboutItem4SubTitle1.innerHTML = data[attr].aboutItem4SubTitle1;
        aboutItem4Bio.innerHTML = data[attr].aboutItem4Bio;
        aboutItem5Title.innerHTML = data[attr].aboutItem5Title;
        aboutItem5SubTitle1.innerHTML = data[attr].aboutItem5SubTitle1;
        aboutItem5Bio.innerHTML = data[attr].aboutItem5Bio;
        aboutItem6Title.innerHTML = data[attr].aboutItem6Title;
        aboutItem6SubTitle1.innerHTML = data[attr].aboutItem6SubTitle1;
        aboutItem6Bio.innerHTML = data[attr].aboutItem6Bio;
        navStart.innerHTML = data[attr].navProject;
        footer1.innerHTML = data[attr].footercontenttitlesub;
        footer2.innerHTML = data[attr].footercontenttitlecontact;
        footer3.innerHTML = data[attr].footercontentaddress;
        footer4.innerHTML = data[attr].footercontentemail;
        footer5.innerHTML = data[attr].footercontentpagestitle;
        footer6.innerHTML = data[attr].footerMain;
        footer7.innerHTML = data[attr].footerAbout;
        footer8.innerHTML = data[attr].footerServ;
        footer9.innerHTML = data[attr].footerFatora;
        footer0.innerHTML = data[attr].footerContact;
        sidenav1.innerHTML = data[attr].sidenavAbout;
        sidenav2.innerHTML = data[attr].sidenavWorks;
        sidenav3.innerHTML = data[attr].sidenavServices;
        sidenav4.innerHTML = data[attr].sidenavNewproject;
    });
});
// for mobile
link.forEach((el)=>{
    el.addEventListener('click', ()=>{
        langElMobile.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        console.log(localStorage.language);
        const attr = el.getAttribute('language');
        homehEl.textContent = data[attr].navAbout;
        whohEl.innerHTML = data[attr].navWorks;
        whotEl.innerHTML = data[attr].navServ;
        navStart.innerHTML = data[attr].navProject;
        headerTitle.innerHTML = data[attr].headerTitle;
        headerCta.forEach((woh)=>{
            woh.innerHTML = data[attr].headerCta;
        });
        headerBio2.innerHTML = data[attr].headerBio2;
        aboutItem1Bio.innerHTML = data[attr].aboutItem1Bio;
        aboutItem1Bio2.innerHTML = data[attr].aboutItem1Bio2;
        aboutItem1title2.innerHTML = data[attr].aboutItem1title2;
        aboutItem2Title.innerHTML = data[attr].aboutItem2Title;
        aboutItem2SubTitle1.innerHTML = data[attr].aboutItem2SubTitle1;
        aboutItem2Bio.innerHTML = data[attr].aboutItem2Bio;
        aboutItem2bio2.innerHTML = data[attr].aboutItem2bio2;
        aboutItem2SubTitle2.innerHTML = data[attr].aboutItem2SubTitle2;
        aboutItem3Title.innerHTML = data[attr].aboutItem3Title;
        aboutItem3SubTitle1.innerHTML = data[attr].aboutItem3SubTitle1;
        aboutItem3Bio.innerHTML = data[attr].aboutItem3Bio;
        aboutItem3bio2.innerHTML = data[attr].aboutItem3bio2;
        aboutItem3SubTitle2.innerHTML = data[attr].aboutItem3SubTitle2;
        aboutItem4Title.innerHTML = data[attr].aboutItem4Title;
        aboutItem4SubTitle1.innerHTML = data[attr].aboutItem4SubTitle1;
        aboutItem4Bio.innerHTML = data[attr].aboutItem4Bio;
        aboutItem5Title.innerHTML = data[attr].aboutItem5Title;
        aboutItem5SubTitle1.innerHTML = data[attr].aboutItem5SubTitle1;
        aboutItem5Bio.innerHTML = data[attr].aboutItem5Bio;
        aboutItem6Title.innerHTML = data[attr].aboutItem6Title;
        aboutItem6SubTitle1.innerHTML = data[attr].aboutItem6SubTitle1;
        aboutItem6Bio.innerHTML = data[attr].aboutItem6Bio;
        footer1.innerHTML = data[attr].footercontenttitlesub;
        footer2.innerHTML = data[attr].footercontenttitlecontact;
        footer3.innerHTML = data[attr].footercontentaddress;
        footer4.innerHTML = data[attr].footercontentemail;
        footer5.innerHTML = data[attr].footercontentpagestitle;
        footer6.innerHTML = data[attr].footerMain;
        footer7.innerHTML = data[attr].footerAbout;
        footer8.innerHTML = data[attr].footerServ;
        footer9.innerHTML = data[attr].footerFatora;
        footer0.innerHTML = data[attr].footerContact;
        sidenav1.innerHTML = data[attr].sidenavAbout;
        sidenav2.innerHTML = data[attr].sidenavWorks;
        sidenav3.innerHTML = data[attr].sidenavServices;
        sidenav4.innerHTML = data[attr].sidenavNewproject;
    });
});
var data = {
    "english": {
        "navAbout": "About",
        "navWorks": "Enigma Fatora",
        "navServ": "Services",
        "navProject": "Start Now",
        "headerTitle": "Infogrphics",
        "headerBio2": "how the process begin ? ",
        "aboutItem1Bio": "In order to create infographics that reverberate with your clients, and push your outstanding marketing campaigns forward, We merge the potential of our creative Design, accurate Editorial, and professional planning.Our infographic design process goes on like this: After determining the size of the infographic and creating an outline of the key points to be illustrated, designers produce the wireframes to give you an intensive idea of how we’re bringing your work to the market. From there ",
        "aboutItem1Bio2": "our designers use the best infographic tools to get your infographic design ready to launch.",
        "aboutItem1title2": "the tools",
        "aboutItem2Title": "Creative Design",
        "aboutItem2SubTitle1": "Brand Identity design",
        "aboutItem2Bio": "Web design is never professional without creative graphic designs, as they professionally express the power of your business or services that you provide and promote the presence of an image of your brand in the minds of your clients and fulfill the state of having a professional personality for your business in front of competitors,  ",
        "aboutItem2bio2": "So we are ready to design your advertising designs and your company's publication designs, in addition to the designs of social media networking sites to introduce your services and your products in a very artistic and pretty manner, and in professionally selected colors that highlight your company's specialization.",
        "aboutItem2SubTitle2": "Social media & ads design's ",
        "aboutItem3Title": "web & mobile app's development ",
        "aboutItem3SubTitle1": "How is the process?            ",
        "aboutItem3Bio": "We help you turn the concepts and ideas you think into an application, by developing programs and applications that focus on meeting your business needs. ",
        "aboutItem3bio2": "Enigma team of designers and developers works with passion and high professionalism to provide web and mobile applications that serve and develop your business.",
        "aboutItem3SubTitle2": "Teamwork ",
        "aboutItem4Title": "content creation ",
        "aboutItem4SubTitle1": "How is the process?  ",
        "aboutItem4Bio": "Content is what tells your potential clients that you have something they’re looking for. In this digital marketing age, content can come in many forms: landing-page text, blog posts, webinars, videos, podcasts, ebooks, surveys, quizzes, and more. But there’s more to content writing than just writing catchy words and choosing attractive images; content creation services are also about strategically placing those practices in front of the eyes of your targeted clients as well as taking into account the rules of the user experience in creating content that is useful and clear to the user.",
        "aboutItem5Title": " ui/ux design ",
        "aboutItem5SubTitle1": "what is ux and how does enigma do it",
        "aboutItem5Bio": "Building mobile applications or websites depends on the user experience and journey to complete a specific task that focuses on the user and usability and also an excellent visual design to give your users the experience they hope for. To outperform your competitors, your platform must include unique and functional features that meet the needs and satisfaction of your customers.We care about providing your customers with the seamless and superior user experience desired for your application. This includes easy navigation, a simple design, and an understandable wireframe design which is preceded by various design processes and market and user research to reach the best experience of using the product.",
        "aboutItem6Title": " media monitoring ",
        "aboutItem6SubTitle1": "what is the mechanism of media monitor",
        "aboutItem6Bio": "Our mechanism of action is to monitor and analyze your media presence to understand how to implement communication strategies with your clients.You will be the first to receive everything new written in the news and on social media pages about your business, your products, and also your competitors.Enigma offers the latest Monitor services of the daily press news; print, online, broadcast, and social media coverage about you, your competitors, and your industry news anywhere",
        "headerCta": "make a request",
        "aboutmissioncontent": "What is the mechanism of enigma fatora?",
        "fatoraMechBio": "  Outstanding capabilities of your team show up when they focus on the functionality of their work, not on recording data or organizing it. Our centralized system will seamlessly integrate all modules and software solutions. It will organize all kinds of invoices in your business and register them safely.",
        "fatoraaboutbiolist1": "Automate your business tasks.",
        "fatoraaboutbiolist2": "Address your needs in one solution.",
        "fatoraaboutbiolist3": "Acquire a frequently updated system, which is kept simple in every version.",
        "aboutvaluestitleelec": "What is the e-invoice?",
        "fatoraaboutbioelec": "Electronic invoicing is a procedure that aims to convert the issuing of paper invoices and notes into an electronic process that allows the exchange and processing of invoices, credit notes & debit notes in a structure electronic format between buyer and seller through an integrated electronic solution.",
        "aboutvaluestitlewhy": " Why choice enigma fatora?",
        "fatoraaboutbiowhy": "Enigma Fatoora helps different companies, and retailers transform their business into a digital one, and this is represented by a number of services such as payment gateway, online store, POS cashier system, payment links, and creating professional invoices. Whether you own your own store or your online store, you can use our Enigma Fatoora system to easily receive your money from anywhere as quickly as possible. By using the Enigma Fatoora system, you can manage your trade through a single control panel and provide assistance from a specialized team to help you with e-marketing.",
        "footercontenttitlesub": 'subscribe to our newsletters',
        "footercontenttitlecontact": 'contact now',
        "footercontentaddress": 'Khamis Mushait , Saudi Arabia',
        "footercontentemail": 'info@enigma.com.sa',
        "footercontentpagestitle": 'discover more about enigma',
        "footerMain": 'Main',
        "footerAbout": 'About',
        "footerServ": 'Services',
        "footerFatora": 'Enigma Fatora',
        "footerContact": 'Contact Us',
        "sidenavAbout": 'About',
        "sidenavWorks": 'Enigma fatora',
        "sidenavServices": 'Services',
        "sidenavNewproject": 'Contact'
    },
    "arabic": {
        "navAbout": "عنا",
        "navWorks": "انيجما فاتورة",
        "navServ": "خدماتنا",
        "navProject": "إبدا الآن ",
        "headerTitle": "التحليلات والرسومات البيانية",
        "headerCta": "إطلب الخدمة",
        "headerBio2": "كيف تتم التحليلات البيانيه ؟",
        "aboutItem1Bio": "من أجل إنشاء تصميمات الانفوجرافيك التي يتردد صداها مع العملاء ، ودفع الحملات التسويقية الى الأمام ، نقوم بدمج إمكانات التصميم الإبداعي لدينا ، والتحرير الدقيق ، والتخطيط الاحترافي.تستمر عملية تصميم مخطط الانفوجرافيك لدينا على النحو التالي: بعد تحديد حجم مخطط المعلومات وإنشاء مخطط تفصيلي للنقاط الرئيسية المراد توضيحها ، ينتج المصممون تصميمات الإطارات الخارجية لمنحك فكرة مكثفة عن كيفية تقديم عملك إلى السوق. من هناك ،            ",
        "aboutItem1Bio2": "  يستخدم مصممينا أفضل أدوات تصميم الانفوجرافيك لجعل تصميم   مخطط المعلومات الخاص بك جاهزًا للإنطلاق فى اسرع وقت.  ",
        "aboutItem1title2": "الأدوات",
        "aboutItem2Title": "التصميم الإبداعي",
        "aboutItem2SubTitle1": "تصميم هوية العلامة التجارية",
        "aboutItem2Bio": "لا يعد تصميم الويب احترافيًا أبدًا بدون تصميمات إبداعية ، حيث إنها تعبر بشكل قوي عن عملك أو الخدمات التي تقدمها وتعزز وجود صورة لعلامتك التجارية في أذهان عملائك وتحقق حالة وجود محترف لعملك التجارى أمام المنافسين  ",
        "aboutItem2bio2": "لذلك فريق التصميم في انيجما دائما مستعد لتصميماتك الإعلانية وتصميم المنشورات ، بالإضافة إلى تصميمات مواقع التواصل الإجتماعي للتعريف بخدماتك ومنتجاتك بطريقة إبداعية ومبتكرة .",
        "aboutItem2SubTitle2": "تصميمات منصات التواصل الإجتماعي و الإعلانات ",
        "aboutItem3Title": "تطوير تطبيقات الهاتف و الويب ",
        "aboutItem3SubTitle1": "كيف تساعد انيجما في تطوير الاعمال ؟",
        "aboutItem3Bio": "ساعدك على تحويل المفاهيم والأفكار التي تفكر بها الى تطبيق ، من خلال تطوير البرامج والتطبيقات التي تركز على تلبية احتياجات عملك.",
        "aboutItem3bio2": " يعمل فريق انيجما من المصممين والمطورين بشغف و مهنية عالية لتقديم تطبيقات الويب و الموبايل التي تخدم أعمالك و تنميها .",
        "aboutItem3SubTitle2": "فريق العمل ",
        "aboutItem4Title": "صناعة المحتوي  ",
        "aboutItem4SubTitle1": "كيف تتم العملية",
        "aboutItem4Bio": "المحتوى هو ما يخبر عملائك بأن لديك شيئًا مميزا يبحثون عنه . في عصر التسويق الرقمي يمكن أن يأتي المحتوى بأشكال عديدة: نص الصفحة الرئيسية ، منشورات المدونة ، الندوات عبر الإنترنت ، مقاطع الفيديو ، البودكاست ، الكتب الإلكترونية ، الإستطلاعات ، الاختبارات ، والمزيد. ولكن هناك ما هو أكثر في كتابة المحتوى من مجرد كتابة كلمات جذابة واختيار صور جذابة ؛ تتعلق خدمات إنشاء المحتوى أيضًا بوضع هذه الممارسات بشكل استراتيجي أمام أعين العملاء المستهدفين بالإضافة إلي مراعاة قواعد تجربة المستخدم في إنشاء محتوى مفيد وواضح للمستخدم .",
        "aboutItem5Title": " تصميم واجهة وتجربة المستخدم",
        "aboutItem5SubTitle1": "ماهي تجربة المستخدم وكيف تقدمها انيجما ؟",
        "aboutItem5Bio": " يعتمد بناء تطبيقات الهاتف المحمول أو المواقع الإلكترونية علي تجربة و رحلة يخوضها المستخدم لإتمام مهمة محددة و التي تركز على المستخدم و قابلية الاستخدام و إيضا تصميم بصري ممتاز لمنح المستخدمين لديك التجربة التي يأملون فيها. لتتفوق على منافسيك ، يجب أن تتضمن منصتك ميزات فريدة وعملية تلبي احتياجات عملائك وترضيهم. نحن نهتم بتزويد عملائك بتجربة المستخدم السلسة والمتميزة المرغوبة لتطبيقك. يتضمن ذلك التنقل السهل ، والتصميم البسيط وتصميم الإطار الخارجى المفهوم. والتي يسبقها عمليات التصميم المختلفة وأبحاث للسوق والمستخدم للوصول لأفضل تجربة استخدام للمنتج .",
        "aboutItem6Title": " الرصد الإعلامي",
        "aboutItem6SubTitle1": "ماهي إليه انيجما في الرصد الإعلامي ؟",
        "aboutItem6Bio": "تتمثل آلية عملنا في مراقبة وتحليل وجودك الإعلامي لفهم كيفية تنفيذ استراتيجيات الاتصال مع عملائك. ستكون أول من يصله كل جديد يكتب فى الأخبار و على صفحات التواصل الإجتماعى عن عملك, منتجاتك,  إيضا منافسيك. تقدم Enigma أحدث خدمات المراقبة للأخبار الصحفية اليومية ؛ تغطية وسائل الإعلام المطبوعة والإلكترونية والمذاعة والتواصل الإجتماعي عنك وعن منافسيك وأخبار مجالك في أي مكان. ",
        "aboutmissioncontent": "ماهي اليه عمل انيجما ؟",
        "fatoraMechBio": "تظهر القدرات المتميزة لفريقك عندما يركزون على وظائف عملهم ، وليس على تسجيل البيانات أو تنظيمها. سيقوم نظامنا المركزي بدمج جميع الوحدات والحلول البرمجية بسلاسة. وسيتم تنظيم جميع أنواع الفواتير في عملك وتسجيلهم بأمان  . ",
        "fatoraaboutbiolist1": "قم بإنجاز مهام عملك بشكل أكثر مهنية.",
        "fatoraaboutbiolist2": "تلبية احتياجات تجارتك في حل واحد.",
        "fatoraaboutbiolist3": "الحصول على نظام يتم تحديثة بإستمرار ، مع الحفاظ على سهولته في كل إصدار.",
        "aboutvaluestitleelec": " ما هي الفاتورة الإلكترونية؟",
        "fatoraaboutbioelec": "منظومة الفوترة الإلكترونية هي إجراء يهدف إلى تحويل عملية إصدار الفواتير والإشعارات الورقية إلى عملية إلكترونية تسمح بتبادل الفواتير والإشعارات المدينة والدائنة ومعالجتها بصيغة الكترونية منظمة بين البائع والمشتري بتنسيق إلكتروني متكامل.",
        "aboutvaluestitlewhy": "لماذا تختار انيحما فاتورة ؟",
        "fatoraaboutbiowhy": "تساعد انيجما فاتورة الشركات المختلفة و تجار التجزئة على تحويل أعمالهم إلى أعمال رقمية ، ويتم تمثيل ذلك من خلال عدد من الخدمات مثل بوابة الدفع والمتجر عبر الإنترنت ونظام الصراف POS وروابط الدفع وإنشاء فواتير الكترونية مسجلة.  سواء كنت تمتلك متجرك الخاص أو متجرك عبر الإنترنت ، يمكنك استخدام نظام انيجما فاتورة الخاص  لتلقي أموالك بسهولة من أي مكان في أسرع وقت ممكن.  باستخدام نظام انيجما فاتورة ، يمكنك إدارة تجارتك من خلال لوحة تحكم واحدة وتقديم المساعدة من فريق متخصص لمساعدتك في التسويق الإلكتروني.",
        "footercontenttitlesub": 'اشترك في نشرتنا الاخبارية ',
        "footercontenttitlecontact": 'تواصل على ',
        "footercontentaddress": ' عسير , المملكة العربية السعودية',
        "footercontentemail": 'info@enigma.com.sa',
        "footercontentpagestitle": 'اكتشف المزيد عن انيجما',
        "footerMain": 'الرئيسية',
        "footerAbout": 'عن انيجما',
        "footerServ": 'خدماتنا',
        "footerFatora": 'انيجما فاتورة',
        "footerContact": 'تواصل معنا',
        "sidenavAbout": 'عن انيجما',
        "sidenavWorks": 'انيجما فاتورة',
        "sidenavServices": 'خدماتنا',
        "sidenavNewproject": 'تواصل معنا'
    }
};
//arabic lang
const changlangEn = document.querySelector('.en');
const changlangMobileEn = document.querySelector('.enmobile');
const changlangAr = document.querySelector('.ar');
const changlangMobileAr = document.querySelector('.armobile');
function rtl() {
    document.getElementsByName('Email')[0].placeholder = 'البريد الإلكتروني';
    document.querySelector('.mainnav').dir = "rtl";
    document.querySelector('.footer').dir = "rtl";
    // document.querySelector('.about-mission').dir = "rtl" 
    // document.querySelector('.about-mission img').style.right = "40%" 
    document.querySelector('.sidenav ul').dir = "rtl";
    // document.querySelector('.backToTop').style.left = "40px" 
    // document.querySelector('.backToTop').style.right = "unset" 
    document.querySelector('.footercontentnumber').dir = "ltr";
    document.querySelectorAll('.about-item').forEach((woh)=>{
        woh.dir = "rtl";
    // woh.style.textAlign = "right";
    });
    // document.querySelector('.fatorabtn').style.display = "none" 
    localStorage.setItem('language', "arabic");
    document.body.style.fontFamily = "cairo";
    document.querySelector('.about-header-serv').style.fontFamily = "Raleway";
    document.querySelector('.sidenav').style.fontFamily = "Cairo";
    document.querySelector('.sidenav ul').style.margin = "-50px";
    document.querySelector('.footer').style.fontFamily = "Cairo";
    footerRtl();
}
function ltr() {
    document.getElementsByName('Email')[0].placeholder = 'Email ';
    // document.querySelector('.backToTop').style.right = "70px" 
    // document.querySelector('.backToTop').style.left = "unset" 
    document.querySelector('.mainnav').dir = "ltr";
    document.querySelector('.sidenav ul').dir = "ltr";
    document.querySelector('.footer').dir = "ltr";
    document.querySelector('.footer').style.fontFamily = "Montserrat";
    // document.querySelector('.about-mission').dir = "ltr" 
    // document.querySelector('.about-mission img').style.right = "-40%" 
    document.querySelectorAll('.main-bio').forEach((woh)=>{
        woh.dir = "ltr";
        woh.style.textAlign = "left";
    });
    document.querySelectorAll('.about-item').forEach((woh)=>{
        woh.dir = "ltr";
    });
    // document.querySelector('.fatorabtn').style.display = "block" 
    localStorage.setItem('language', "english");
    document.body.style.fontFamily = "Montserrat";
    document.querySelector('.about-header-serv').style.fontFamily = "Raleway";
    document.querySelector('.sidenav').style.fontFamily = "Montserrat";
    // document.querySelector('.fatoraaboutbiolist1').style.margin = "0px " 
    // document.querySelector('.fatoraaboutbiolist2').style.margin = "0px " 
    // document.querySelector('.fatoraaboutbiolist3').style.margin = "0px " 
    footerLtr();
}
// for desk 
changlangEn.addEventListener('click', function() {
    ltr();
});
changlangAr.addEventListener('click', function() {
    rtl();
});
// for mobile 
changlangMobileEn.addEventListener('click', function() {
    ltr();
});
changlangMobileAr.addEventListener('click', function() {
    rtl();
});
function footerRtl() {
    var x = window.matchMedia("(max-width: 800px)");
    if (x.matches) {
        document.querySelector('.footer').style.margin = "0 -5vw";
        document.querySelector('.footer-main').style.height = "150%";
    }
}
function footerLtr() {
    var x = window.matchMedia("(max-width: 800px)");
    if (x.matches) {
        document.querySelector('.footer').style.margin = "0 5vw";
        document.querySelector('.footer-main').style.height = "130%";
    // document.querySelector('.about-mission img').style.right = "0%" 
    }
}

//# sourceMappingURL=servcies.000ebbed.js.map


