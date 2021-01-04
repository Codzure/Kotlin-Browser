(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlin-css', 'kotlin-wrappers-kotlin-styled-jsLegacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlin-css'), require('kotlin-wrappers-kotlin-styled-jsLegacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinBrowser'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinBrowser'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinBrowser'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'KotlinBrowser'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinBrowser'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'KotlinBrowser'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'KotlinBrowser'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'KotlinBrowser'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinBrowser'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'KotlinBrowser'.");
    }root.KotlinBrowser = factory(typeof KotlinBrowser === 'undefined' ? {} : KotlinBrowser, kotlin, this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlin-css'], this['kotlin-wrappers-kotlin-styled-jsLegacy']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlin_css, $module$kotlin_wrappers_kotlin_styled_jsLegacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_lqgejo$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var getKClass = Kotlin.getKClass;
  var Unit = Kotlin.kotlin.Unit;
  var Position = $module$kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var set_top = $module$kotlin_css.kotlinx.css.set_top_n8chyh$;
  var set_right = $module$kotlin_css.kotlinx.css.set_right_n8chyh$;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H3_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var P_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IMG_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var H1_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var DIV_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  function App() {
    RComponent_init(this);
  }
  App.prototype.render_ss14n$ = function ($receiver) {
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function img$lambda(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledDiv$lambda(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  function main$Video(id, title, speaker, videoUrl) {
    this.id = id;
    this.title = title;
    this.speaker = speaker;
    this.videoUrl = videoUrl;
  }
  main$Video.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Video',
    interfaces: []
  };
  main$Video.prototype.component1 = function () {
    return this.id;
  };
  main$Video.prototype.component2 = function () {
    return this.title;
  };
  main$Video.prototype.component3 = function () {
    return this.speaker;
  };
  main$Video.prototype.component4 = function () {
    return this.videoUrl;
  };
  main$Video.prototype.copy_cgs6fs$ = function (id, title, speaker, videoUrl) {
    return new main$Video(id === void 0 ? this.id : id, title === void 0 ? this.title : title, speaker === void 0 ? this.speaker : speaker, videoUrl === void 0 ? this.videoUrl : videoUrl);
  };
  main$Video.prototype.toString = function () {
    return 'Video(id=' + Kotlin.toString(this.id) + (', title=' + Kotlin.toString(this.title)) + (', speaker=' + Kotlin.toString(this.speaker)) + (', videoUrl=' + Kotlin.toString(this.videoUrl)) + ')';
  };
  main$Video.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.speaker) | 0;
    result = result * 31 + Kotlin.hashCode(this.videoUrl) | 0;
    return result;
  };
  main$Video.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.speaker, other.speaker) && Kotlin.equals(this.videoUrl, other.videoUrl)))));
  };
  function main$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda(closure$unwatchedVideos, closure$watchedVideos) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      $receiver.child_ssazr1$(getKClass(App), main$lambda$lambda);
      var $receiver_0 = new RDOMBuilder_init(h1$lambda(null));
      $receiver_0.unaryPlus_pdl1vz$('Kotlin Browser');
      $receiver.child_52psg1$($receiver_0.create());
      var $receiver_0_0 = new RDOMBuilder_init(div$lambda(null));
      var $receiver_0_1 = new RDOMBuilder_init(h3$lambda(null));
      $receiver_0_1.unaryPlus_pdl1vz$('Videos to watch');
      $receiver_0_0.child_52psg1$($receiver_0_1.create());
      var $receiver_0_2 = new RDOMBuilder_init(p$lambda(null));
      $receiver_0_2.unaryPlus_pdl1vz$('John Doe: Building and breaking things');
      $receiver_0_0.child_52psg1$($receiver_0_2.create());
      var $receiver_0_3 = new RDOMBuilder_init(p$lambda(null));
      $receiver_0_3.unaryPlus_pdl1vz$('Jane Smith: The development process');
      $receiver_0_0.child_52psg1$($receiver_0_3.create());
      var $receiver_0_4 = new RDOMBuilder_init(p$lambda(null));
      $receiver_0_4.unaryPlus_pdl1vz$('Matt Miller: The Web 7.0');
      $receiver_0_0.child_52psg1$($receiver_0_4.create());
      var $receiver_0_5 = new RDOMBuilder_init(h3$lambda(null));
      $receiver_0_5.unaryPlus_pdl1vz$('Videos watched');
      $receiver_0_0.child_52psg1$($receiver_0_5.create());
      var $receiver_0_6 = new RDOMBuilder_init(p$lambda(null));
      $receiver_0_6.unaryPlus_pdl1vz$('Tom Jerry: Mouseless development');
      $receiver_0_0.child_52psg1$($receiver_0_6.create());
      $receiver.child_52psg1$($receiver_0_0.create());
      var $receiver_0_7 = new StyledDOMBuilder_init(styledDiv$lambda);
      var $receiver_1 = $receiver_0_7.css;
      set_position($receiver_1, Position.absolute);
      set_top($receiver_1, get_px(10));
      set_right($receiver_1, get_px(10));
      var $receiver_0_8 = new RDOMBuilder_init(h3$lambda(null));
      $receiver_0_8.unaryPlus_pdl1vz$('John Doe: Building and breaking things');
      $receiver_0_7.child_52psg1$($receiver_0_8.create());
      var $receiver_0_9 = new RDOMBuilder_init(img$lambda(null, null, null));
      $receiver_0_9.attrs.src = 'https://via.placeholder.com/640x360.png?text=Video+Player+Placeholder';
      $receiver_0_7.child_52psg1$($receiver_0_9.create());
      $receiver.child_52psg1$($receiver_0_7.create());
      tmp$ = closure$unwatchedVideos.iterator();
      while (tmp$.hasNext()) {
        var video = tmp$.next();
        var $receiver_0_10 = new RDOMBuilder_init(p$lambda(null));
        $receiver_0_10.unaryPlus_pdl1vz$(video.speaker + ': ' + video.title);
        $receiver.child_52psg1$($receiver_0_10.create());
      }
      tmp$_0 = closure$watchedVideos.iterator();
      while (tmp$_0.hasNext()) {
        var video_0 = tmp$_0.next();
        var $receiver_0_11 = new RDOMBuilder_init(p$lambda(null));
        $receiver_0_11.unaryPlus_pdl1vz$(video_0.speaker + ': ' + video_0.title);
        $receiver.child_52psg1$($receiver_0_11.create());
      }
      return Unit;
    };
  }
  function main() {
    var unwatchedVideos = listOf([new main$Video(1, 'Building and breaking things', 'John Doe', 'https://youtu.be/PsaFVLr8t4E'), new main$Video(2, 'The development process', 'Jane Smith', 'https://youtu.be/PsaFVLr8t4E'), new main$Video(3, 'The Web 7.0', 'Matt Miller', 'https://youtu.be/PsaFVLr8t4E')]);
    var watchedVideos = listOf_0(new main$Video(4, 'Mouseless development', 'Tom Jerry', 'https://youtu.be/PsaFVLr8t4E'));
    render(document.getElementById('root'), void 0, main$lambda(unwatchedVideos, watchedVideos));
  }
  _.App = App;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  _.main = main;
  main();
  Kotlin.defineModule('KotlinBrowser', _);
  return _;
}));

//# sourceMappingURL=KotlinBrowser.js.map
