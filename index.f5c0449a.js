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
})({"4rmH4":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "d3f93e0ff5c0449a";
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

},{}]},["4rmH4"], null, "parcelRequire70e5")
const langEl = document.querySelector('.langWrap');
const langElMobile = document.querySelector('.langWrapmobile');
// const langEl1 = document.querySelector('.social-icon-up-div');
const link = document.querySelectorAll('.lang');
const homehEl = document.querySelector('.navAbout');
const whohEl = document.querySelector('.navWorks');
const whotEl = document.querySelector('.navServ');
const whopEl = document.querySelectorAll('.navProject');
const whomEl = document.querySelector('.servtitle');
const navaEl = document.querySelector('.servbio');
const navcEl = document.querySelector('.servcta');
const navtEl = document.querySelector('.mainTitleMedia');
const navhEl = document.querySelector('.mainTitleInfo');
const teamhEl = document.querySelector('.mainTitleContent');
const gethEl = document.querySelector('.mainTitleWeb');
const getbEl = document.querySelector('.mainTitleBrand');
const foothEl = document.querySelector('.mainTitleUi');
const foot1El = document.querySelector('.mainBioMedia');
const foot2El = document.querySelector('.mainBioInfo');
const foot3El = document.querySelector('.mainBioContent');
const foot4El = document.querySelector('.mainBioWeb');
const foot5El = document.querySelector('.mainBioBrand');
const foot6El = document.querySelector('.mainBioUi');
const readMore = document.querySelectorAll('.readmoreservcies');
const contact1 = document.querySelector('.contactusfildeshint');
const contact2 = document.querySelector('.contactusfildestitle');
const contact3 = document.querySelector('.contactusfildesparagraph');
const contact4 = document.querySelector('.contactussend');
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
    whopEl.forEach((woh)=>{
        woh.innerHTML = data.arabic.navProject;
    });
    whomEl.innerHTML = data.arabic.servtitle;
    navaEl.innerHTML = data.arabic.servbio;
    navcEl.innerHTML = data.arabic.servcta;
    navcEl.innerHTML = data.arabic.servcta;
    navtEl.innerHTML = data.arabic.mainTitleMedia;
    navhEl.innerHTML = data.arabic.mainTitleInfo;
    teamhEl.innerHTML = data.arabic.mainTitleContent;
    gethEl.innerHTML = data.arabic.mainTitleWeb;
    getbEl.innerHTML = data.arabic.mainTitleBrand;
    foothEl.innerHTML = data.arabic.mainTitleUi;
    foot1El.innerHTML = data.arabic.mainBioMedia;
    foot2El.innerHTML = data.arabic.mainBioInfo;
    foot3El.innerHTML = data.arabic.mainBioContent;
    foot4El.innerHTML = data.arabic.mainBioWeb;
    foot5El.innerHTML = data.arabic.mainBioBrand;
    foot6El.innerHTML = data.arabic.mainBioUi;
    readMore.forEach((woh)=>{
        woh.innerHTML = data.arabic.readmoreservcies;
    });
    contact1.innerHTML = data.arabic.contactusfildeshint;
    contact2.innerHTML = data.arabic.contactusfildestitle;
    contact3.innerHTML = data.arabic.contactusfildesparagraph;
    contact4.innerHTML = data.arabic.contactussend;
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
        document.body.style.fontFamily = "Cairo";
        homehEl.innerHTML = data.arabic.navAbout;
        whohEl.innerHTML = data.arabic.navWorks;
        whotEl.innerHTML = data.arabic.navServ;
        whopEl.forEach((woh)=>{
            woh.innerHTML = data.arabic.navProject;
        });
        whomEl.innerHTML = data.arabic.servtitle;
        navaEl.innerHTML = data.arabic.servbio;
        navcEl.innerHTML = data.arabic.servcta;
        navtEl.innerHTML = data.arabic.mainTitleMedia;
        navhEl.innerHTML = data.arabic.mainTitleInfo;
        teamhEl.innerHTML = data.arabic.mainTitleContent;
        gethEl.innerHTML = data.arabic.mainTitleWeb;
        getbEl.innerHTML = data.arabic.mainTitleBrand;
        foothEl.innerHTML = data.arabic.mainTitleUi;
        foot1El.innerHTML = data.arabic.mainBioMedia;
        foot2El.innerHTML = data.arabic.mainBioInfo;
        foot3El.innerHTML = data.arabic.mainBioContent;
        foot4El.innerHTML = data.arabic.mainBioWeb;
        foot5El.innerHTML = data.arabic.mainBioBrand;
        foot6El.innerHTML = data.arabic.mainBioUi;
        readMore.forEach((woh)=>{
            woh.innerHTML = data.arabic.readmoreservcies;
        });
        contact1.innerHTML = data.arabic.contactusfildeshint;
        contact2.innerHTML = data.arabic.contactusfildestitle;
        contact3.innerHTML = data.arabic.contactusfildesparagraph;
        contact4.innerHTML = data.arabic.contactussend;
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
        rtl();
    } else {
        homehEl.innerHTML = data.english.navAbout;
        whohEl.innerHTML = data.english.navWorks;
        whotEl.innerHTML = data.english.navServ;
        whopEl.forEach((woh)=>{
            woh.innerHTML = data.english.navProject;
        });
        whomEl.innerHTML = data.english.servtitle;
        navaEl.innerHTML = data.english.servbio;
        navcEl.innerHTML = data.english.servcta;
        navtEl.innerHTML = data.english.mainTitleMedia;
        navhEl.innerHTML = data.english.mainTitleInfo;
        teamhEl.innerHTML = data.english.mainTitleContent;
        gethEl.innerHTML = data.english.mainTitleWeb;
        getbEl.innerHTML = data.english.mainTitleBrand;
        foothEl.innerHTML = data.english.mainTitleUi;
        foot1El.innerHTML = data.english.mainBioMedia;
        foot2El.innerHTML = data.english.mainBioInfo;
        foot3El.innerHTML = data.english.mainBioContent;
        foot4El.innerHTML = data.english.mainBioWeb;
        foot5El.innerHTML = data.english.mainBioBrand;
        foot6El.innerHTML = data.english.mainBioUi;
        readMore.forEach((woh)=>{
            woh.innerHTML = data.english.readmoreservcies;
        });
        contact1.innerHTML = data.english.contactusfildeshint;
        contact2.innerHTML = data.english.contactusfildestitle;
        contact3.innerHTML = data.english.contactusfildesparagraph;
        contact4.innerHTML = data.english.contactussend;
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
// ar/en for mobile 
link.forEach((el)=>{
    el.addEventListener('click', ()=>{
        langElMobile.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        // localStorage.getItem('language') 
        console.log(localStorage.language);
        const attr = el.getAttribute('language');
        homehEl.textContent = data[attr].navAbout;
        // homehEl.innerHTML = data.english.navAbout; 
        whohEl.innerHTML = data[attr].navWorks;
        whotEl.innerHTML = data[attr].navServ;
        whopEl.forEach((woh)=>{
            woh.innerHTML = data[attr].navProject;
        });
        whomEl.innerHTML = data[attr].servtitle;
        navaEl.innerHTML = data[attr].servbio;
        navcEl.innerHTML = data[attr].servcta;
        navtEl.innerHTML = data[attr].mainTitleMedia;
        navhEl.innerHTML = data[attr].mainTitleInfo;
        teamhEl.innerHTML = data[attr].mainTitleContent;
        gethEl.innerHTML = data[attr].mainTitleWeb;
        getbEl.innerHTML = data[attr].mainTitleBrand;
        foothEl.innerHTML = data[attr].mainTitleUi;
        foot1El.innerHTML = data[attr].mainBioMedia;
        foot2El.innerHTML = data[attr].mainBioInfo;
        foot3El.innerHTML = data[attr].mainBioContent;
        foot4El.innerHTML = data[attr].mainBioWeb;
        foot5El.innerHTML = data[attr].mainBioBrand;
        foot6El.innerHTML = data[attr].mainBioUi;
        readMore.innerHTML = data[attr].readmoreservcies;
        readMore.forEach((woh)=>{
            woh.innerHTML = data[attr].readmoreservcies;
        });
        contact1.innerHTML = data[attr].contactusfildeshint;
        contact2.innerHTML = data[attr].contactusfildestitle;
        contact3.innerHTML = data[attr].contactusfildesparagraph;
        contact4.innerHTML = data[attr].contactussend;
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
link.forEach((el)=>{
    el.addEventListener('click', ()=>{
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        // localStorage.getItem('language') 
        console.log(localStorage.language);
        const attr = el.getAttribute('language');
        homehEl.textContent = data[attr].navAbout;
        // homehEl.innerHTML = data.english.navAbout; 
        whohEl.innerHTML = data[attr].navWorks;
        whotEl.innerHTML = data[attr].navServ;
        whopEl.forEach((woh)=>{
            woh.innerHTML = data[attr].navProject;
        });
        whomEl.innerHTML = data[attr].servtitle;
        navaEl.innerHTML = data[attr].servbio;
        navcEl.innerHTML = data[attr].servcta;
        navtEl.innerHTML = data[attr].mainTitleMedia;
        navhEl.innerHTML = data[attr].mainTitleInfo;
        teamhEl.innerHTML = data[attr].mainTitleContent;
        gethEl.innerHTML = data[attr].mainTitleWeb;
        getbEl.innerHTML = data[attr].mainTitleBrand;
        foothEl.innerHTML = data[attr].mainTitleUi;
        foot1El.innerHTML = data[attr].mainBioMedia;
        foot2El.innerHTML = data[attr].mainBioInfo;
        foot3El.innerHTML = data[attr].mainBioContent;
        foot4El.innerHTML = data[attr].mainBioWeb;
        foot5El.innerHTML = data[attr].mainBioBrand;
        foot6El.innerHTML = data[attr].mainBioUi;
        readMore.innerHTML = data[attr].readmoreservcies;
        readMore.forEach((woh)=>{
            woh.innerHTML = data[attr].readmoreservcies;
        });
        contact1.innerHTML = data[attr].contactusfildeshint;
        contact2.innerHTML = data[attr].contactusfildestitle;
        contact3.innerHTML = data[attr].contactusfildesparagraph;
        contact4.innerHTML = data[attr].contactussend;
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
        "servtitle": "What Enigma Offer's ?",
        "servbio": "It’s All About Trusted, Innovative Services That Lead To Success",
        "servcta": "Discover More",
        "mainTitleMedia": "media monitoring",
        "mainTitleInfo": "infographigs",
        "mainTitleContent": "content creation",
        "mainTitleWeb": "web & mobile development",
        "mainTitleBrand": "Brand identity",
        "mainTitleUi": "ui/ux design",
        "mainBioMedia": "Enigma offers the latest Monitor services of the daily press news; print, online, broadcast, and social media coverage about you, your competitors, and your industry news anywhere.",
        "mainBioInfo": "Enigma helps you get complex infographic designs thanks to our professional designers looking for important and inspiring data to improve your business performance. ",
        "mainBioContent": "The content creation team at Enigma is distinguished and unique and takes into account the use of rules for writing useful content for a better user experience.",
        "mainBioWeb": "Your website and your online store linked to mobile applications are among the main Enigma services that take into account security, modernity, and accessibility to all parts of the world.",
        "mainBioBrand": "Searching for innovation in design to create a brand identity or creative designs is the mission of Enigma team collaborating to create unprecedented ideas",
        "mainBioUi": "Enigma ensures a secured, effective user experience design that follows the basic rules of building and improving the user interface and experience to overpass the difficulty of usage of applications that your clients face.",
        "readmoreservcies": "read more !",
        "contactusfildeshint": 'contact now',
        "contactusfildestitle": 'contact now',
        "contactusfildesparagraph": 'We build long-term relationships with our clients, as we believe that giving our all clients a priority is a must.',
        "contactussend": 'send',
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
        "navProject": "إبدا الآن  ",
        "servtitle": "ماذا تقدم انيجما ؟",
        "servbio": "تقدم انيجما الحلول الرقمية بخدماتها واسعة النطاق , و انظمة ذكية ومبتكرة من خلال منتجاتها",
        "servcta": "اكتشف المزيد",
        "mainTitleMedia": "الرصد الأعلامي",
        "mainTitleInfo": "التحليلات والرسومات",
        "mainTitleContent": "صناعة المحتوي",
        "mainTitleWeb": "تطبيقات الويب والموبايل",
        "mainTitleBrand": "تصميم الهوية",
        "mainTitleUi": "تصميم تجربة و واجهة المستخدم",
        "mainBioMedia": "تقدم Enigma أحدث خدمات المراقبة للأخبار الصحفية اليومية ؛ تغطية وسائل الإعلام المطبوعة والإلكترونية والمذاعة والتواصل الاجتماعي عنك وعن منافسيك وأخبار مجالك في أي مكان.",
        "mainBioInfo": "تساعدك انيجما في الحصول على تصميمات الإنفوجرافيك المعقدة بفضل مصممينا المحترفين الباحثين عن البيانات المهمة والملهمة لتحسين أداء عملك . ",
        "mainBioContent": "يتمتع فريق إنشاء المحتوى في انيجما بالتميز والتفرد ومراعاة استخدام قواعد كتابة محتوي مفيد لتجربة مستخدم أفضل .",
        "mainBioWeb": "موقعك علي الإنترنت و متجرك الإلكتروني المرتبط بتطبيقات الموبايل هم من خدمات انيجما الأساسية التي تراعي فيها الأمان والحداثة و إمكانية الوصول لكل انحاء العالم",
        "mainBioBrand": "البحث عن الابتكار في التصميم لإنشاء هوية علامة تجارية أو تصميمات ابداعية هو مهمة فريق انيجما المتعاون لإنشاء أفكار غير مسبوقة ",
        "mainBioUi": "ضمن انيجما لك تصميمًا آمنًا وفعالًا متبعة في ذالك القواعد الاساسية لبناء وتحسين واجهة وتجربة المستخدم لتجاوز التحديات و الصعوبات التي يواجهها عملاؤك.",
        "readmoreservcies": " إقرأ المزيد ! ",
        "contactusfildeshint": 'لنتواصل',
        "contactusfildestitle": 'تواصل معنا الآن',
        "contactusfildesparagraph": '  نبني علاقات طويلة الأمد مع عملائنا ، و إعطاء الأولوية لعملائنا أمر لا بد منه و لنتواصل الان ونباشر العمل .',
        "contactussend": 'إرسل',
        "footercontenttitlesub": 'اشترك في نشرتنا الاخبارية ',
        "footercontenttitlecontact": 'تواصل على ',
        "footercontentaddress": 'عسير  , المملكة العربية السعودية',
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
    footerRtl();
    document.getElementsByName('Email')[0].placeholder = 'البريد الالكتروني';
    document.getElementsByName('Name')[0].placeholder = 'الاسم';
    document.getElementsByName('Message')[0].placeholder = 'رسالة';
    document.querySelector('.mainnav').dir = "rtl";
    document.querySelector('.enigma-servceis').dir = "rtl";
    document.querySelector('.contactus-fildes').dir = "rtl";
    document.querySelector('.footer').dir = "rtl";
    document.querySelector('.sidenav ul').dir = "rtl";
    document.querySelector('.backToTop').style.left = "30px";
    document.querySelector('.backToTop').style.right = "unset";
    document.querySelector('.footercontentnumber').dir = "ltr";
    document.querySelector('.contactus-fildes-name-container i').style.transform = "rotate(180deg)";
    document.querySelectorAll('.main-bio').forEach((woh)=>{
        woh.dir = "rtl";
        woh.style.textAlign = "right";
    });
    document.querySelectorAll('.main-text').forEach((woh)=>{
        woh.dir = "rtl";
        woh.style.textAlign = "right";
    });
    document.querySelector('.servbtn').style.display = "none";
    document.querySelector('.header-text').style.fontFamily = "Montserrat";
    localStorage.setItem('language', "arabic");
    document.body.style.fontFamily = "Cairo";
    document.querySelector('.sidenav').style.fontFamily = "Cairo";
    document.querySelector('.sidenav ul').style.margin = "-50px";
}
function ltr() {
    footerLtr();
    //         document.querySelector('.about-item').dir = " ltr"
    document.getElementsByName('Email')[0].placeholder = 'Email ';
    document.getElementsByName('Name')[0].placeholder = 'Name';
    document.getElementsByName('Message')[0].placeholder = 'Message';
    document.querySelector('.backToTop').style.right = "30px";
    document.querySelector('.backToTop').style.left = "unset";
    document.querySelector('.mainnav').dir = "ltr";
    document.querySelector('.sidenav ul').dir = "ltr";
    document.querySelector('.enigma-servceis').dir = "ltr";
    document.querySelector('.contactus-fildes').dir = "ltr";
    document.querySelector('.footer').dir = "ltr";
    document.querySelector('.contactus-fildes-name-container i').style.transform = "rotate(0deg)";
    document.querySelectorAll('.main-bio').forEach((woh)=>{
        woh.dir = "ltr";
        woh.style.textAlign = "left";
    });
    document.querySelectorAll('.main-text').forEach((woh)=>{
        woh.dir = "ltr";
        woh.style.textAlign = "left";
    });
    document.querySelector('.servbtn').style.display = "inline-block";
    localStorage.setItem('language', "english");
    document.body.style.fontFamily = "Montserrat";
    document.querySelector('.sidenav').style.fontFamily = "Montserrat";
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
    if (x.matches) document.querySelector('.footer').style.margin = "0 -5vw";
}
function footerLtr() {
    var x = window.matchMedia("(max-width: 800px)");
    if (x.matches) document.querySelector('.footer').style.margin = "0 5vw";
}

//# sourceMappingURL=index.f5c0449a.js.map
