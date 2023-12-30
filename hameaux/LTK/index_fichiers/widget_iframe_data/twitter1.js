var bd_nd_B937DB990D1548698380D65CF906E308 = 
{
    /// [etl] urls[100][0] = [status,scan, version, url]
    /// status = {added, alias?, ready, skipped}
    /// reuse urls. need version
    /// (list) bd_nd_B937DB990D1548698380D65CF906E308.links[][0] = [urls.index, urls.version, link ?, anchor?]
    ///             delete item from bd_nd_B937DB990D1548698380D65CF906E308.links after engine response & icon
    ICON_GREEN      : "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/icons/ok.png",
    ICON_YELLOW     : "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/icons/warn.png",
    ICON_RED        : "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/icons/nok.png",

    TOOLTIP_GREEN   : "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/tooltips/ok.png",
    TOOLTIP_YELLOW  : "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/tooltips/warn.png",
    TOOLTIP_RED     : "/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/ls/tooltips/nok.png",

    STATUS_ADDED    : 1,
    STATUS_ALIAS    : 2,
    STATUS_READY    : 3,
    STATUS_SKIPPED  : 4,

    STATUS_GREEN    : 1,
    STATUS_YELLOW   : 2,
    STATUS_RED      : 3,

    HEADER_NAME     : "BDNDLS_F9CD80F3B79B49ABAD166F61BFFFC81B",
    ANCHOR_PREFIX   : "bd_nd_B937DB990D1548698380D65CF906E308_anchor_",
    ICON_PREFIX     : "bd_nd_B937DB990D1548698380D65CF906E308_icon_",

    title           : "Protection web par <strong>Bitdefender</strong>",
    green_title     : "Cette page est sûre",
    green_content   : "Nous n'avons détecté aucun élément suspect sur cette page.",
    yellow_title    : "Cette page peut être risquée",
    yellow_content  : "Éléments potentiellement dangereux détectés.",
    red_title       : "Cette page n'est pas sûre",
    red_content     : "Éléments potentiellement dangereux détectés.",
    fraud_link      : "https://trafficlight.bitdefender.com/info?url={URL}&language=en_US",

    iconGREEN       : null,
    iconYELLOW      : null,
    iconRED         : null,

    tooltipGREEN    : null,
    tooltipYELLOW   : null,
    tooltipRED      : null,

    fInit           : false,
    links           : null,
    console_log     : null,

    isGoogle        : /^https:\/\/www\.google\..{1,5}\/search\?.+/.test(window.location.href),

    isPageOK : function() {
        if (typeof(window.top) != 'object') {
            if (window.parent != window) {
                return false; } }
        return true;
    },

    canEmbed : function() {
        var rv = -1; 
        if (navigator.appName != 'Microsoft Internet Explorer') {
            return true; }
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null) {
            rv = parseFloat(RegExp.$1); }
        if (rv >= 8.0) {
            return true; }		
        return false;
    },

    init: function () {
        if (bd_nd_B937DB990D1548698380D65CF906E308.fInit) {
            return; }
        bd_nd_B937DB990D1548698380D65CF906E308.fInit = true;
        bd_nd_B937DB990D1548698380D65CF906E308.iconGREEN = new String();
        bd_nd_B937DB990D1548698380D65CF906E308.iconYELLOW = new String();
        bd_nd_B937DB990D1548698380D65CF906E308.iconRED = new String();

        if (bd_nd_B937DB990D1548698380D65CF906E308.canEmbed()) {
            bd_nd_B937DB990D1548698380D65CF906E308.iconGREEN = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAA7FJREFUWAnNV1lIlFEU/u4/45gLY3symWkZhGNaRBst6kMEFS2QD1FQEBVFEUUPhdBDEdJmD+09FdGTYRAktMCUT4YttvqQlIaZSxEamk4zczvnOv8w0/z/LI5WB/Teueec7zv3nvPf//wCMYrzbZmtt02UeoE1kDIfEA5A0h+LaKN5G4R4ZwHupDmk662zyj2oi/xfRFYDOa6yTOnGEQmxSULao9mzXkD0CMibwoajzaVV7ZF8TAPIe783eeBjRzk5H6Adp0UCMdUJ0Uu6yuTcScebZpwbMLIzDIB37f0lbhPxQiOnuNeEqLMkyfVGpxEWQO7DjYUer+cukWTFTRTZoTVJw8oPy6teB5uFBKB27kb9CJDrnK0WG+YFn4Smazjn6tiHf+c6BY9ZzMFc+mIgAFVww5VzHd1oJA5/cSutSoG/6JqGXO1GRJHW6OmgoszjVKgT4Od8uMmTNZt5CPRYK06y0PiG40vG3Dp+zbrMJXAtPou8tMmmzszJ3Bpfr7HecKZoQYqlYwtxpmA3slImoHr+MdMgmJO5NXW3BwEkMp1ln4arsw8iSbMqmFc9H9DcZ34TM7dGuacXS+IyNWUSrs85jDTrKAX2msh3NJyGRxKNmRA3FSG/1RKTcTY7bswtx/jkDAXU0teBLc8r0OftjwIsHBSA/ko1t102rghnC/bAqLJTLaNwjXaek5qpAL4OdGPzs+P46u42BwxopGMwWYGF8El2ykScL9yH0UnpmJmeje0Np9Da36UMrcKCK0UHUJQxXf3u9fRj64sKtPw0z3swg6BK5BRQM2EuC8bkw25NVQZOew5qFp0AVzrLKecuFI+frea/fB7sfHkGXHixihTii5hyv8wFiZJITpwC/RTYzit9qP/eiIVjncpNSon9by6g+kttJJhwncAjjduocE3oSu23l1hddwiNP1qUwiK0ADkvVLy/GT85OxK3xj0cz6PJp5+dWPukHA86n4aYurpe4HJzTBAhfvyDuTVuILmHC9MaLPT73NjWcBK3Pj+i60OqS2YLFd1QhDkHucl76r2yiz5gVzxAGxzFqGmvQ5/PsNWLCkXVf6llRdVuGikV1L1SPriBjFlutT0eMjlzKU5iUwH4W6TKmNkTN6zU2zIVAONx60yR1SWOHQWBOBSX3+z/aUo5ID4Wq8W6iqat/gCHc1BtuX70OnDICeiLf/PDJFADOjmPHCXlqYRq4li8T0cwjvIlDMb6c+e6neEJ6Eoe+TT+ycdpcBA8H6nP898PW2+tnIPs1AAAAABJRU5ErkJggg==";
            bd_nd_B937DB990D1548698380D65CF906E308.iconYELLOW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAsZJREFUWAnFVz1oFEEUfm/M7W5OsDAI5kiRIlgopBPSGGIbIWCTwpje2la0OLG1VGvlLNIIB9omWAXEJiGpUqRYLkJICiGX3dPc871Zd93N7c7uxg07cLtz7+/7dmbezBuEgo3W7li+d3wfEJeA6DYAtgCIf9Kwx/0e63ZZ17Wd6+u4vDMIdOYnmtUcdm36pu8NXnBvhQiu5dmLHhF+8rNjO1Ybl/d/mHwyCdCXGds76j9DoqcMfNUUJEvHRE4I8bUz0XyFi3t+ml0qAflq73Twib96Ls2pvAw3nXHrYdpojBDwP07NDn8PP/NcTpUHMnggukqpRfuxux23ShDQX+4NvlUOHiIyCcex7sZHQoU6Pecy7FV/eQggb44tUytYoXgs7MiCKzPnODEL2JzU7tQ/ADraCkPlvGkuwALOLM4VeQSp5u+VWe2N+XdwZXpJ3OFsvwu/vj7R/SIPyQ7bsWdkKvQUSJ6XAS8CYrIRrGBvAVCyw/EYrJgcLkfHGxtjK9lemVGhHa5KIoIp2Erv7VVGLhOLzxXFqcEHS02NsXkRyqlWV8MWEwiP1DpIkBCosREQ74S6mLhVlsbw8HvkEu9HwiIdxAP03k+uc0osFLGv2oZ3xA1Jw92qAxeOx9iSht3CDglDPkZQkkiWUeJUT1gZ/zC20gWkruGMpiPKxvxbcFZd/WvcezOizxNI3SjYKqhesZPnYNTTmVGdrsSOYOs01NUrH5HphkWkVMQosgmOY6stgmjyTj+02jCk55FVTidRkJz0gI4TpZ7ZW+HL8dXev4JErHVJdtjf4F5FlXAWB66QbzQXwjI9GgFNQsrxuopSIaBLpDH1gPcGN4v/heV/y/J4RSyx9CKMB7UfuVtSOjOdzbj8//o87Bzz/J1AYo4QEKGwlHkCXiyyYkV2kaZ9OYae84w7YmINpIHUdjk9T+ayrud/ADyVIY8l5unaAAAAAElFTkSuQmCC";
            bd_nd_B937DB990D1548698380D65CF906E308.iconRED = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAslJREFUWAnFV89rE0EUnjdN0lZByMX016HQ4o9GvQke67EKgmf/Bw+9FnuoeNOi/g89C0LpsT0WPCjWjYhVcohJ40UQtG2S7vN9s2zc3WzTmXZLBnZ39s1773sz8+btt6QsG5fLhYY6vMu+/4CZ5oh4QimSC43rIquLrEJavx1Xw5vkea1grP+d+g8r9bNcHuv4+8sC8IgVXzpJH+Ok6LcEs5bToyuXPW+vn82xAfDC7HCjyksCusisLvZzctwYkfojwayOT9Mz2tg9TNNLDQCzbvkHbxTznTQjZxnRdkGPPExbjZ4Amjeu3mp3Ouuyr1POQH0NqJbL872xne87UbVYAGbmRwfvsgcPIalWGBq5HV0JHQ5hz82yZz7zEAFPngIGsEJpLuwg4Vz2PF++qYZKJWN+1Gyqthdb2dBt71PyqlFVSzKwjEGzBVj6tr+/65LtxdXX6sLCffhQfzfW1a/Fx6Zvc8PpyOvRWWyF2YLgnJ/uqNkAJnUwUWBCrlHhUGSSSuf9bgqbYGtTXi0rXJZBoaoCW6O2Z+nYxRewtSzFnItRlrrA1sFXLUu39r6ALacg/KTaG2anSQhggE0yUSoh1yWEK65htD6875pE+12hTYe4QbVrM5sSxLyNfvY6tIUkrGTv2M4jsDU4nJ16QksKutKSQrjQP0UDtjYEUjicq33xxSs16X01V/H5S1dzwxuBrcFeZSnWnD1EDXw/+mbVByawzTEEe8Un0soyTckxAGABE666m1e/PrPiMz9J858mixGSvYZqV7w0tVSZZP7Tic/f/hMSaIEm/ajylgsrSvV+klAY8uQ0zYc0vbsCsBsoKUUAoEj5XE54FtXwnm0LaHmUEcO/ScIoUOnTl4+gznK2t6PyM/XxYyI+k/8E8NkTAISIEvuEZDnL6YAtfMBXcubAQYvlQCCK35EXA/k5jYchp+Scfs//ATBhNdoIKVgAAAAAAElFTkSuQmCC";
        } else {
            bd_nd_B937DB990D1548698380D65CF906E308.iconGREEN = bd_nd_B937DB990D1548698380D65CF906E308.ICON_GREEN;
            bd_nd_B937DB990D1548698380D65CF906E308.iconYELLOW = bd_nd_B937DB990D1548698380D65CF906E308.ICON_WARN;
            bd_nd_B937DB990D1548698380D65CF906E308.iconRED = bd_nd_B937DB990D1548698380D65CF906E308.ICON_RED; }

        if (document.body.currentStyle) {
            bd_nd_B937DB990D1548698380D65CF906E308.dir = document.body.currentStyle["direction"]; }
        else if (window.getComputedStyle) {
            bd_nd_B937DB990D1548698380D65CF906E308.dir = document.defaultView.getComputedStyle(document.body, null).getPropertyValue("direction"); }

        if (window.XMLHttpRequest) {
            bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp = new XMLHttpRequest(); }
        else if (window.ActiveXObject) {
            bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    },

    getIconIdx: function (iconx) {
        var idx = parseInt(iconx.id.substr(bd_nd_B937DB990D1548698380D65CF906E308.ICON_PREFIX.length));
        if (isNaN(idx)
            || (idx < 0)
            || (idx >= bd_nd_B937DB990D1548698380D65CF906E308.links.length)) {
            return -1; }
        return idx;
    },

    getPos: function (elem) {
        var pa = { x: 0, y: 0 },
			doc = elem && elem.ownerDocument;

        if (!doc) return pa;

        var docElem = doc.documentElement || document.body.parentNode || doc.body;
        var win = doc.defaultView || doc.parentWindow;

        var bbox = { top: 0, left: 0 };

        if (typeof elem.getBoundingClientRect !== "undefined") {
            bbox = elem.getBoundingClientRect(); }

        var xscroll = win.pageXOffset || docElem.scrollLeft;
        var yscroll = win.pageYOffset || docElem.scrollTop;

        pa.y = bbox.top + yscroll - docElem.clientTop;
        pa.x = bbox.left + xscroll - docElem.clientLeft;

        return pa;
    },

    createToolTip: function (iconx) {
        //console.log('bd_nd_B937DB990D1548698380D65CF906E308...createToolTip');

        var tooltip = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP"));
        if (tooltip != null) {
            bd_nd_B937DB990D1548698380D65CF906E308.console_log = tooltip;
            return; }

        if (bd_nd_B937DB990D1548698380D65CF906E308.tooltipGREEN == null) {
            bd_nd_B937DB990D1548698380D65CF906E308.tooltipGREEN = new String();
            if (bd_nd_B937DB990D1548698380D65CF906E308.canEmbed()) {
                bd_nd_B937DB990D1548698380D65CF906E308.tooltipGREEN = "data:image/png;base64,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";
            } else {
                bd_nd_B937DB990D1548698380D65CF906E308.tooltipGREEN = bd_nd_B937DB990D1548698380D65CF906E308.TOOLTIP_GREEN;
            }
        }
        if (bd_nd_B937DB990D1548698380D65CF906E308.tooltipYELLOW == null) {
            bd_nd_B937DB990D1548698380D65CF906E308.tooltipYELLOW = new String();
            if (bd_nd_B937DB990D1548698380D65CF906E308.canEmbed()) {
                bd_nd_B937DB990D1548698380D65CF906E308.tooltipYELLOW = "data:image/png;base64,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";
            } else {
                bd_nd_B937DB990D1548698380D65CF906E308.tooltipYELLOW = bd_nd_B937DB990D1548698380D65CF906E308.TOOLTIP_YELLOW;
            }
        }
        if (bd_nd_B937DB990D1548698380D65CF906E308.tooltipRED == null) {
            bd_nd_B937DB990D1548698380D65CF906E308.tooltipRED = new String();
            if (bd_nd_B937DB990D1548698380D65CF906E308.canEmbed()) {
                bd_nd_B937DB990D1548698380D65CF906E308.tooltipRED = "data:image/png;base64,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";
            } else {
                bd_nd_B937DB990D1548698380D65CF906E308.tooltipRED = bd_nd_B937DB990D1548698380D65CF906E308.TOOLTIP_RED;
            }
        }

        var body = ((iconx != null) ? iconx.ownerDocument.getElementsByTagName("body")[0] : document.getElementsByTagName("body")[0]);

        tooltip = ((iconx != null) ? iconx.ownerDocument.createElement("div") : document.createElement("div"));
        tooltip.id = "bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP";
        tooltip.style.display = "none";
        tooltip.style.zIndex = 1000;
        tooltip.style.position = "absolute";
        tooltip.style.width = "416px";
        tooltip.style.height = "108px";
        tooltip.style.left = "0px";
        tooltip.style.top = "0px";
    		tooltip.style.backgroundColor = "#ffffff";
    		tooltip.style.border = "1px solid #eeeeee";
    		tooltip.style.fontFamily = "Segoe UI, Arial, sans-serif";

        var tooltipImg = ((iconx != null) ? iconx.ownerDocument.createElement("img") : document.createElement("img"));
        tooltipImg.id = "bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_IMG";
        tooltipImg.style.border = "none 0pt #000000";
        tooltipImg.style.backgroundColor = "#f2f2f2";
        tooltipImg.style.width = "96px";
        tooltipImg.style.height = "109px";
		tooltipImg.style.position = "absolute";
		tooltipImg.style.top = "0px";
        tooltipImg.style.left = "0px";

        var tooltipHeader = ((iconx != null) ? iconx.ownerDocument.createElement("div") : document.createElement("div"));
        tooltipHeader.id = "bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_HEADER";
        tooltipHeader.style.position = "absolute";
        tooltipHeader.style.bottom = "12px";
        tooltipHeader.style.left = "112px";
        tooltipHeader.style.width = "100%";
        tooltipHeader.style.height = "20px";
        tooltipHeader.style.visibility = "hidden";
        tooltipHeader.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.title;
        tooltipHeader.style.color = "#000000";
        tooltipHeader.style.fontSize = "13px";
        tooltipHeader.style.textAlign = "left";
        tooltipHeader.style.fontFamily = "Segoe UI Semibold, Arial, sans-serif";

        var tooltipTitle = ((iconx != null) ? iconx.ownerDocument.createElement("div") : document.createElement("div"));
        tooltipTitle.id = "bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE";
        tooltipTitle.style.position = "absolute";
        tooltipTitle.style.top = "12px";
        tooltipTitle.style.left = "112px";
        tooltipTitle.style.width = "100%";
        tooltipTitle.style.visibility = "hidden";
        tooltipTitle.innerHTML = "";
        tooltipTitle.style.color = "#000000";
        tooltipTitle.style.fontSize = "15px";
        tooltipTitle.style.fontWeight = "bold";
        tooltipTitle.style.textAlign = "left";

        var tooltipContent = ((iconx != null) ? iconx.ownerDocument.createElement("div") : document.createElement("div"));
        tooltipContent.id = "bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_CONTENT";
        tooltipContent.style.position = "absolute";
        tooltipContent.style.top = "35px";
        tooltipContent.style.left = "112px";
        tooltipContent.style.width = "288px";

        tooltipContent.style.visibility = "hidden";
        tooltipContent.innerHTML = "";
        tooltipContent.style.color = "#404040";
        tooltipContent.style.fontSize = "13px";
        tooltipContent.style.textAlign = "left";

        tooltip.appendChild(tooltipImg);
        tooltip.appendChild(tooltipHeader);
        tooltip.appendChild(tooltipTitle);
        tooltip.appendChild(tooltipContent);
        body.appendChild(tooltip);
        tooltipImg.src = ""
    },

    destroyToolTip: function (iconx) {
        //console.log('bd_nd_B937DB990D1548698380D65CF906E308...destroyToolTip');
        var tooltipHeader = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_HEADER") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_HEADER"));
        if (tooltipHeader != null) {
            tooltipHeader.parentNode.removeChild(tooltipHeader); }
        var tooltipTitle = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE"));
        if (tooltipTitle != null) {
            tooltipTitle.parentNode.removeChild(tooltipTitle); }
        var tooltipContent = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_CONTENT") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_CONTENT"));
        if (tooltipContent != null) {
            tooltipContent.parentNode.removeChild(tooltipContent); }
        var tooltipImg = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_IMG") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_IMG"));
        if (tooltipImg != null) {
            tooltipImg.parentNode.removeChild(tooltipImg); }
        var tooltip = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP"));
        if (tooltip != null) {
            tooltip.parentNode.removeChild(tooltip); }
    },

    showToolTip: function (iconx) {
        //console.log('bd_nd_B937DB990D1548698380D65CF906E308...showToolTip');
        var n = bd_nd_B937DB990D1548698380D65CF906E308.getIconIdx(iconx);
        if ((n < 0)
            || (n >= bd_nd_B937DB990D1548698380D65CF906E308.links.length)) {
            //console.log('bd_nd_B937DB990D1548698380D65CF906E308...showToolTip...!NDX: ' + n);
            bd_nd_B937DB990D1548698380D65CF906E308.destroyToolTip(iconx);
            return; }
        if ((bd_nd_B937DB990D1548698380D65CF906E308.links[n][0] != bd_nd_B937DB990D1548698380D65CF906E308.STATUS_READY)
            || (bd_nd_B937DB990D1548698380D65CF906E308.links[n][1] == 0)) {
            bd_nd_B937DB990D1548698380D65CF906E308.destroyToolTip(iconx);
            //console.log('bd_nd_B937DB990D1548698380D65CF906E308...showToolTip...!STATUS_READY');
            return; }

        var tooltip = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP"));
        var tooltipImg = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_IMG") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_IMG"));
        var tooltipHeader = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_HEADER") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_HEADER"));
        var tooltipTitle = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE"));
        var tooltipContent = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_CONTENT") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_CONTENT"));
        if ((tooltip == null) || (tooltipImg == null) || (tooltipHeader == null) || (tooltipTitle == null) || (tooltipContent == null)) {
            bd_nd_B937DB990D1548698380D65CF906E308.destroyToolTip(iconx);
            bd_nd_B937DB990D1548698380D65CF906E308.createToolTip(iconx);
            tooltip = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP"));
            tooltipImg = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_IMG") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_IMG"));
            tooltipHeader = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_HEADER") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_HEADER"));
            tooltipTitle = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_TITLE"));
            tooltipContent = ((iconx != null) ? iconx.ownerDocument.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_CONTENT") : document.getElementById("bd_nd_B937DB990D1548698380D65CF906E308_TOOLTIP_CONTENT")); }
        if ((tooltip == null) || (tooltipImg == null) || (tooltipHeader == null) || (tooltipTitle == null) || (tooltipContent == null)) {
            //console.log('bd_nd_B937DB990D1548698380D65CF906E308...showToolTip...!tooltip');
            bd_nd_B937DB990D1548698380D65CF906E308.destroyToolTip(iconx);
            return; }

        if (bd_nd_B937DB990D1548698380D65CF906E308.links[n][1] == bd_nd_B937DB990D1548698380D65CF906E308.STATUS_GREEN) {
            tooltipImg.src = bd_nd_B937DB990D1548698380D65CF906E308.tooltipGREEN;
            tooltipTitle.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.green_title;
            tooltipContent.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.green_content; }
        else if (bd_nd_B937DB990D1548698380D65CF906E308.links[n][1] == bd_nd_B937DB990D1548698380D65CF906E308.STATUS_YELLOW) {
                tooltipImg.src = bd_nd_B937DB990D1548698380D65CF906E308.tooltipYELLOW;
                tooltipTitle.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.yellow_title;
                tooltipContent.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.yellow_content; }
        else if (bd_nd_B937DB990D1548698380D65CF906E308.links[n][1] == bd_nd_B937DB990D1548698380D65CF906E308.STATUS_RED) {
            tooltipImg.src = bd_nd_B937DB990D1548698380D65CF906E308.tooltipRED;
            tooltipTitle.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.red_title;
            tooltipContent.innerHTML = bd_nd_B937DB990D1548698380D65CF906E308.red_content; }
        else {
            bd_nd_B937DB990D1548698380D65CF906E308.destroyToolTip(iconx);
            //console.log('bd_nd_B937DB990D1548698380D65CF906E308...showToolTip...!status');
            return; }

        var p = bd_nd_B937DB990D1548698380D65CF906E308.getPos(iconx);
        var x = p.x;
        var y = p.y + 28;
        tooltip.style.left = x + "px";
        tooltip.style.top = y + "px";
        tooltip.style.display = "block";
        tooltipHeader.style.visibility = "visible";
        tooltipTitle.style.visibility = "visible";
        tooltipContent.style.visibility = "visible";
    },

    hideToolTip: function (iconx) {
        //console.log('bd_nd_B937DB990D1548698380D65CF906E308...hideToolTip');
        bd_nd_B937DB990D1548698380D65CF906E308.destroyToolTip(iconx);
    },

    onClickLink: function (e) {
        //console.log('bd_nd_B937DB990D1548698380D65CF906E308...onClickLink');
        //try {
        var obj;
        if (typeof event != "undefined") {
            obj = event.srcElement ? event.srcElement : event.target; }
        else {
            obj = this; }
        if (typeof e != "undefined") {
            e.preventDefault();
            e.stopPropagation(); }
        else if (typeof window.event != "undefined") {
            window.event.returnValue = false;
            window.event.cancelBubble = true; }

        if (obj == null) {
            return; }
        bd_nd_B937DB990D1548698380D65CF906E308.destroyToolTip(obj);
        var anchor = obj.parentNode;
        if (anchor == null) {
            return; }
        // window.open(anchor.href, "_blank"); // 4342
    },

    onMouseOver: function () {
        //console.log('bd_nd_B937DB990D1548698380D65CF906E308...onMouseOver');
        var obj;
        if (typeof event != "undefined") {
            obj = event.srcElement ? event.srcElement : event.target; }
        else {
            obj = this; }
        if (obj == null) {
            return; }
        bd_nd_B937DB990D1548698380D65CF906E308.showToolTip(obj);
    },

    onMouseOut: function () {
        //console.log('bd_nd_B937DB990D1548698380D65CF906E308...onMouseOut');
        var obj;
        if (typeof event != "undefined") {
            obj = event.srcElement ? event.srcElement : event.target; }
        else {
            obj = this; }
        bd_nd_B937DB990D1548698380D65CF906E308.hideToolTip(obj);
    },

    createIconx: function (ndx) {
        if ((ndx < 0)
            || (ndx >= bd_nd_B937DB990D1548698380D65CF906E308.links.length)
            || (bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][0] != bd_nd_B937DB990D1548698380D65CF906E308.STATUS_READY)
            || (bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][1] == 0)
            || (bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][3] == null)) {
            return; }
        if (bd_nd_B937DB990D1548698380D65CF906E308.isKnownLink(bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][3])) {
            //console.log('createIconx.known: ' + ndx);
            return; }

        var anchor_id = bd_nd_B937DB990D1548698380D65CF906E308.ANCHOR_PREFIX + ndx;
        var anchor = bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][3].ownerDocument.getElementById(anchor_id);
        if (anchor == null) {
            var kblink = bd_nd_B937DB990D1548698380D65CF906E308.fraud_link;
            var linkparser = bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][3].ownerDocument.createElement('a');
            linkparser.href = kblink;
            if (linkparser.host == null) {
                kblink = "https://trafficlight.bitdefender.com/info?url="; }

            anchor = bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][3].ownerDocument.createElement("span");
            anchor.id = anchor_id;
            //anchor.href = kblink.replace("{URL}", escape(bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][2])); // 4342
            anchor.style.display = "none";
            anchor.style.visibility = "hidden";

            bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][3].parentNode.insertBefore(anchor, bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][3]);
            bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][4] = anchor;

            bd_nd_B937DB990D1548698380D65CF906E308.links.push([bd_nd_B937DB990D1548698380D65CF906E308.STATUS_SKIPPED, 0, null, anchor, null, -1, 0]);
        }

        var icon_id = bd_nd_B937DB990D1548698380D65CF906E308.ICON_PREFIX + ndx;
        var icon = bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][3].ownerDocument.getElementById(icon_id);
        if (icon == null) {
            icon = bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][3].ownerDocument.createElement("img");
			var icon_class = bd_nd_B937DB990D1548698380D65CF906E308.ICON_PREFIX;
            icon.id = icon_id;
            icon.style.border = "0px";
            icon.style.cursor = "pointer";
            icon.style.display = "inline";
            icon.style.marginRight = "3px";
            icon.style.height = "16px";
            icon.style.width = "16px";

            if (bd_nd_B937DB990D1548698380D65CF906E308.isGoogle && bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][3].parentNode.tagName.toLowerCase() !== "h3") {
                anchor.style.verticalAlign = "top";
                icon.style.verticalAlign ="middle";
            }

            if (bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][1] == bd_nd_B937DB990D1548698380D65CF906E308.STATUS_GREEN) {
                icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconGREEN; 
				icon.className = icon_class + "green"; }
            else if (bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][1] == bd_nd_B937DB990D1548698380D65CF906E308.STATUS_YELLOW) {
                icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconYELLOW; 
				icon.className = icon_class + "yellow"; }
            else if (bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][1] == bd_nd_B937DB990D1548698380D65CF906E308.STATUS_RED) {
                icon.src = bd_nd_B937DB990D1548698380D65CF906E308.iconRED; 
				icon.className = icon_class + "red"; }
            anchor.appendChild(icon);
            // move ggl element
            var gglEl = anchor.parentElement.getElementsByTagName('div')[0];
			if (gglEl) {
				gglEl.style.left = '20px';
			}
        }
        anchor.style.display = bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][3].style.display;
        anchor.style.visibility = bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][3].style.visibility;
        if (window.addEventListener) {
            icon.addEventListener("mouseover", bd_nd_B937DB990D1548698380D65CF906E308.onMouseOver, false);
            icon.addEventListener("mouseout", bd_nd_B937DB990D1548698380D65CF906E308.onMouseOut, false);
            icon.addEventListener("click", bd_nd_B937DB990D1548698380D65CF906E308.onClickLink, false);
        } else if (window.attachEvent) {
            icon.attachEvent("onmouseover", bd_nd_B937DB990D1548698380D65CF906E308.onMouseOver);
            icon.attachEvent("onmouseout", bd_nd_B937DB990D1548698380D65CF906E308.onMouseOut);
            icon.attachEvent("onclick", bd_nd_B937DB990D1548698380D65CF906E308.onClickLink); }
    },

    isKnownLink: function (link) {
        var linkId = link.id;
        if ((linkId != "undefined")
            && (linkId != null)) {
            linkId = linkId.substr(0, bd_nd_B937DB990D1548698380D65CF906E308.ANCHOR_PREFIX.length);
            if (linkId == bd_nd_B937DB990D1548698380D65CF906E308.ANCHOR_PREFIX) {
                return true; } }
        var anchor = link.previousSibling;
        if ((anchor == "undefined") || (anchor == null)) {
            return false; }
        linkId = anchor.id;
        if ((linkId != "undefined")
            && (linkId != null)) {
            linkId = linkId.substr(0, bd_nd_B937DB990D1548698380D65CF906E308.ANCHOR_PREFIX.length);
            if (linkId == bd_nd_B937DB990D1548698380D65CF906E308.ANCHOR_PREFIX) {
                return true; }
        }
        return false;
    },

	addLink: function (link, url) {
	    if ((url == null) || (url == "undefined") || (url == "")) {
	        url = link.href; }
	    if ((url == null) || (url == "undefined") || (url == "")) {
	        return; }
	    if (bd_nd_B937DB990D1548698380D65CF906E308.isKnownLink(link)) {
	        //console.log('addLink.known: ' + unescape(url));
	        return; }
	    if (null == bd_nd_B937DB990D1548698380D65CF906E308.links) {
	        bd_nd_B937DB990D1548698380D65CF906E308.links = []; }
	    var alias = [bd_nd_B937DB990D1548698380D65CF906E308.STATUS_ADDED,0,-1];
	    for (var i = 0; i < bd_nd_B937DB990D1548698380D65CF906E308.links.length; i++) {
	        if (link == bd_nd_B937DB990D1548698380D65CF906E308.links[i][3]) {
	            return; }
	        if (url == bd_nd_B937DB990D1548698380D65CF906E308.links[i][2]) {
	            alias = [bd_nd_B937DB990D1548698380D65CF906E308.STATUS_ALIAS, bd_nd_B937DB990D1548698380D65CF906E308.links[i][1], i];
	            break; } }
	    bd_nd_B937DB990D1548698380D65CF906E308.links.push([alias[0], alias[1], url, link, null, alias[2], 0]);
	},

	processLinks: function () {
	    if (bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp == null) {
	        return; }
	    if (null == bd_nd_B937DB990D1548698380D65CF906E308.links) {
	        return; }
	    var links = [];
	    for (var i = 0; i < bd_nd_B937DB990D1548698380D65CF906E308.links.length; i++) {
	        if (bd_nd_B937DB990D1548698380D65CF906E308.links[i][0] == bd_nd_B937DB990D1548698380D65CF906E308.STATUS_ADDED) {
	            links.push([bd_nd_B937DB990D1548698380D65CF906E308.links[i][2], i]);
	        } else if (bd_nd_B937DB990D1548698380D65CF906E308.links[i][0] == bd_nd_B937DB990D1548698380D65CF906E308.STATUS_READY) {
	            var anchor_id = bd_nd_B937DB990D1548698380D65CF906E308.ANCHOR_PREFIX + i;
	            var anchor = bd_nd_B937DB990D1548698380D65CF906E308.links[i][3].ownerDocument.getElementById(anchor_id);
	            if (anchor != null) {
	                anchor.style.display = bd_nd_B937DB990D1548698380D65CF906E308.links[i][3].style.display;
	                anchor.style.visibility = bd_nd_B937DB990D1548698380D65CF906E308.links[i][3].style.visibility;
                }
	        } else if (bd_nd_B937DB990D1548698380D65CF906E308.links[i][0] == bd_nd_B937DB990D1548698380D65CF906E308.STATUS_ALIAS) {
	            var alias = bd_nd_B937DB990D1548698380D65CF906E308.links[i][5];
	            if (bd_nd_B937DB990D1548698380D65CF906E308.links[alias][0] == bd_nd_B937DB990D1548698380D65CF906E308.STATUS_READY) {
	                bd_nd_B937DB990D1548698380D65CF906E308.links[i][0] = bd_nd_B937DB990D1548698380D65CF906E308.links[alias][0];
	                bd_nd_B937DB990D1548698380D65CF906E308.links[i][1] = bd_nd_B937DB990D1548698380D65CF906E308.links[alias][1];
	                bd_nd_B937DB990D1548698380D65CF906E308.createIconx(i);
	            }
	        }
        }
	    if (links.length == 0) {
	        return; }
	    for (var i = 0; i < links.length; i++) {
	        //console.log('ls.processLinks[' + i + ']=[' + links[i][1] + '] ' + links[i][0]); 
		}

	    bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.onreadystatechange = function () {
	        if (bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.readyState == 4) {
	            //console.log('(bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp = (' + bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.readyState + ', ' + bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.status + ')');
	            if (bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.status == 200) {
	                bd_nd_B937DB990D1548698380D65CF906E308.handleResponse(bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.responseXML);
	            }
            }
	    }
	    var sid = Math.random();
	    bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.open("GET", sid, true);
	    bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.setRequestHeader("BDNDSS_B67EA559F21B487F861FDA8A44F01C50", "NDSECK_8c9d24d0b5375386082515df641768aa");
	    bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.setRequestHeader("BDNDCA_BBACF84D61A04F9AA66019A14B035478", "NDCA_8c9d24d0b5375386082515df641768aa");
	    bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.setRequestHeader(bd_nd_B937DB990D1548698380D65CF906E308.HEADER_NAME, "ls.scan");
	    for (var i = 0; i < links.length; i++) {
	        bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.setRequestHeader(bd_nd_B937DB990D1548698380D65CF906E308.HEADER_NAME + i, links[i][1] + ',' + links[i][0]); }
	    bd_nd_B937DB990D1548698380D65CF906E308.xmlhttp.send(null);
	},

	handleResponse: function (xml) {
	    try {
	        var roottag = xml.getElementsByTagName("netdefender")[0];
	    } catch (err) {
	        //console.log('handleResponse' + err);
	        return; }
	    //console.log('handleResponse');
	    if (roottag == null) {
	        return; }
	    var responses = [];
	    for (var i = 0; i < roottag.childNodes.length; i++) {
	        var ok = false;
	        try {
	            var urlTag = roottag.childNodes[i];
	            if (urlTag.tagName != "url") {
	                continue; }
	            var index = parseInt(urlTag.getAttribute("index"));
	            var result = parseInt(urlTag.getAttribute("result"));
	            if (isNaN(index)
                    || isNaN(result)) {
	                continue; }
	            responses.push([index, result]);
	            //console.log('ls.handleResponse[' + index + ']=' + result);
            } catch (error) {
                console.error(error);
            }
	    }
	    for (var i = 0; i < responses.length; i++) {
	        var ndx = responses[i][0];
	        if ((ndx < 0)
                || (ndx >= bd_nd_B937DB990D1548698380D65CF906E308.links.length)) {
	            continue; }
	        var scanResult = 0;
	        if (responses[i][1] == 0) {
	            scanResult = bd_nd_B937DB990D1548698380D65CF906E308.STATUS_GREEN; }
	        else if (responses[i][1] == 1) {
	            scanResult = bd_nd_B937DB990D1548698380D65CF906E308.STATUS_YELLOW; }
	        else if (responses[i][1] == 2) {
	            scanResult = bd_nd_B937DB990D1548698380D65CF906E308.STATUS_RED; }
	        else {
	            continue; }
	        bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][0] = bd_nd_B937DB990D1548698380D65CF906E308.STATUS_READY;
	        bd_nd_B937DB990D1548698380D65CF906E308.links[ndx][1] = scanResult;
	        bd_nd_B937DB990D1548698380D65CF906E308.createIconx(ndx);

	        for (var j = 0; j < bd_nd_B937DB990D1548698380D65CF906E308.links.length; j++) {
	            if (bd_nd_B937DB990D1548698380D65CF906E308.links[j][0] != bd_nd_B937DB990D1548698380D65CF906E308.STATUS_ALIAS) {
	                continue; }
	            if (bd_nd_B937DB990D1548698380D65CF906E308.links[j][5] == ndx) {
	                bd_nd_B937DB990D1548698380D65CF906E308.links[j][0] = bd_nd_B937DB990D1548698380D65CF906E308.STATUS_READY;
	                bd_nd_B937DB990D1548698380D65CF906E308.links[j][1] = scanResult;
	                bd_nd_B937DB990D1548698380D65CF906E308.createIconx(j);
	            }
	        }

        }
	},

	start: function () {
	    bd_nd_B937DB990D1548698380D65CF906E308.init();
	}
};
var bd_nd_twitter_B937DB990D1548698380D65CF906E308 = 
{

	ANCHOR_CLASS_NAME	: "twitter-timeline-link",
	TIMEOUT				: 3000,

	updateLinks : function()
	{
		var anchors = document.getElementsByTagName("a"); 
		if (null != anchors)
		{
			for (var i = 0; i < anchors.length; i++)
			{ 
				if (bd_nd_twitter_B937DB990D1548698380D65CF906E308.ANCHOR_CLASS_NAME == anchors[i].className)
				{
				    var fOk = 1;
				    var myParent = anchors[i].parentNode;
				    if ((null != myParent) && ("undefined" != myParent)) {

				        if (myParent.className.indexOf("rich-editor") >= 0)
				        {
				            fOk = 0;
				        }
				        else
				        {
				            var parent1 = myParent.parentNode;
				            if ((null != parent1) && ("undefined" != parent1) && (parent1.className.indexOf("rich-editor") >= 0))
				            {
				                fOk = 0;
				            }
				        }
				    }

				    if (Boolean(fOk))
				    {
				        bd_nd_B937DB990D1548698380D65CF906E308.addLink(anchors[i], anchors[i].getAttribute("data-expanded-url"));
				    }
				}
				else if (anchors[i].getAttribute("role") == "link")
				{
				    var title = anchors[i].getAttribute("title");
				    var parser = anchors[i].ownerDocument.createElement("a");
				    parser.href = title;
				    var host1 = parser.host;
				    if (host1 && host1 != "" && !host1.includes("twitter.com")) {
				        bd_nd_B937DB990D1548698380D65CF906E308.addLink(anchors[i], title);
				    }
				}
			}
		}
		bd_nd_B937DB990D1548698380D65CF906E308.processLinks();
		setTimeout(bd_nd_twitter_B937DB990D1548698380D65CF906E308.updateLinks, bd_nd_twitter_B937DB990D1548698380D65CF906E308.TIMEOUT);
	},

	twitterStart : function()
	{
		bd_nd_B937DB990D1548698380D65CF906E308.start();
		bd_nd_twitter_B937DB990D1548698380D65CF906E308.updateLinks();
	}


};

if (bd_nd_B937DB990D1548698380D65CF906E308.isPageOK())
{
	if (window.addEventListener)
	{
		window.addEventListener("load", bd_nd_twitter_B937DB990D1548698380D65CF906E308.twitterStart, false);
	}
	else
	if (window.attachEvent)
	{
		window.attachEvent("onload", bd_nd_twitter_B937DB990D1548698380D65CF906E308.twitterStart);
	}
}
