/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';
import {
  Color,
} from './global/interfaces/color';
import {
  CloseData,
  StateProperties,
} from './global/interfaces/jeep-colorpicker';
import {
  Status,
  Variables,
} from './global/interfaces/jeep-linechart';
import {
  Rect,
} from './global/interfaces/geom';
import {
  StateProperties as StateProperties1,
} from './global/interfaces/jeep-svgmorph';
import {
  CubicBezier,
} from './global/interfaces/svggeom';

export namespace Components {
  interface JeepColorpicker {
    /**
    * The buttons text
    */
    'buttons': string;
    /**
    * Method close the cpicker component
    */
    'close': (color: Color, button: number) => Promise<void>;
    /**
    * The preselected color
    */
    'color': string;
    /**
    * Validation buttons hidden
    */
    'hidebuttons': boolean;
    /**
    * Header hidden
    */
    'hideheader': boolean;
    /**
    * Opacity Slider hidden
    */
    'hideopacity': boolean;
    /**
    * Method initialize
    */
    'init': () => Promise<void>;
    /**
    * The preselected opacity
    */
    'opacity': string;
    /**
    * Method open the cpicker component
    */
    'open': () => Promise<void>;
  }
  interface JeepCpicker {
    /**
    * The buttons text
    */
    'buttons': string;
    /**
    * Method get the vertical position for the brightness slider handler
    */
    'calcB': (y: number, height: number) => Promise<number>;
    /**
    * Method get the vertical position for the hue slider handler
    */
    'calcH': (y: number, height: number) => Promise<number>;
    /**
    * Method get the vertical position for the opacity slider handler
    */
    'calcO': (y: number, height: number) => Promise<number>;
    /**
    * Method get the horizontal position for the saturation slider handler
    */
    'calcS': (x: number, width: number) => Promise<number>;
    /**
    * The preselected color
    */
    'color': string;
    /**
    * Method get StateProperties
    */
    'getStateProperties': () => Promise<StateProperties>;
    /**
    * Method get local wrapper css variables
    */
    'getWrapperCssVariables': () => Promise<any>;
    /**
    * Validation buttons hidden
    */
    'hidebuttons': boolean;
    /**
    * Header hidden
    */
    'hideheader': boolean;
    /**
    * Opacity Slider hidden
    */
    'hideopacity': boolean;
    /**
    * Method initialize
    */
    'init': () => Promise<void>;
    /**
    * The preselected opacity
    */
    'opacity': string;
  }
  interface JeepLinechart {
    'animation': boolean;
    'cborder': boolean;
    'cstyle': string;
    'ctitle': string;
    'data': string;
    'delay': string;
    'getCssProperties': () => Promise<Variables>;
    'getStatus': () => Promise<Status>;
    'getWindowSize': () => Promise<Rect>;
    'init': () => Promise<void>;
    'renderChart': () => Promise<void>;
    'subtitle': string;
    'xtitle': string;
    'ytitle': string;
  }
  interface JeepSvgmorph {
    /**
    * The preselected calculation mode
    */
    'calcmode': string;
    /**
    * The preselected duration
    */
    'duration': string;
    /**
    * The preselected fill color
    */
    'fill': string;
    'getAlignedPaths': (calc: boolean) => Promise<CubicBezier[]>;
    'getFillColor': () => Promise<string[]>;
    'getPath': () => Promise<void>;
    'getPathList': () => Promise<string[]>;
    'getStateProperties': () => Promise<StateProperties>;
    /**
    * Method initialize
    */
    'init': () => Promise<void>;
    /**
    * The preselected key splines
    */
    'keysplines': string;
    /**
    * The preselected key times
    */
    'keytimes': string;
    /**
    * The preselected number of segments
    */
    'nsegment': string;
    /**
    * The preselected path index
    */
    'pathindex': string;
    'renderSVGFirstPath': () => Promise<void>;
    /**
    * The preselected repeat count
    */
    'repeatcount': string;
  }
}

declare global {


  interface HTMLJeepColorpickerElement extends Components.JeepColorpicker, HTMLStencilElement {}
  var HTMLJeepColorpickerElement: {
    prototype: HTMLJeepColorpickerElement;
    new (): HTMLJeepColorpickerElement;
  };

  interface HTMLJeepCpickerElement extends Components.JeepCpicker, HTMLStencilElement {}
  var HTMLJeepCpickerElement: {
    prototype: HTMLJeepCpickerElement;
    new (): HTMLJeepCpickerElement;
  };

  interface HTMLJeepLinechartElement extends Components.JeepLinechart, HTMLStencilElement {}
  var HTMLJeepLinechartElement: {
    prototype: HTMLJeepLinechartElement;
    new (): HTMLJeepLinechartElement;
  };

  interface HTMLJeepSvgmorphElement extends Components.JeepSvgmorph, HTMLStencilElement {}
  var HTMLJeepSvgmorphElement: {
    prototype: HTMLJeepSvgmorphElement;
    new (): HTMLJeepSvgmorphElement;
  };
  interface HTMLElementTagNameMap {
    'jeep-colorpicker': HTMLJeepColorpickerElement;
    'jeep-cpicker': HTMLJeepCpickerElement;
    'jeep-linechart': HTMLJeepLinechartElement;
    'jeep-svgmorph': HTMLJeepSvgmorphElement;
  }
}

declare namespace LocalJSX {
  interface JeepColorpicker {
    /**
    * The buttons text
    */
    'buttons'?: string;
    /**
    * The preselected color
    */
    'color'?: string;
    /**
    * Validation buttons hidden
    */
    'hidebuttons'?: boolean;
    /**
    * Header hidden
    */
    'hideheader'?: boolean;
    /**
    * Opacity Slider hidden
    */
    'hideopacity'?: boolean;
    'onJeepColorpickerClose'?: (event: CustomEvent<CloseData>) => void;
    'onJeepColorpickerGetColor'?: (event: CustomEvent<Color>) => void;
    'onJeepColorpickerOpen'?: (event: CustomEvent<any>) => void;
    /**
    * The preselected opacity
    */
    'opacity'?: string;
  }
  interface JeepCpicker {
    /**
    * The buttons text
    */
    'buttons'?: string;
    /**
    * The preselected color
    */
    'color'?: string;
    /**
    * Validation buttons hidden
    */
    'hidebuttons'?: boolean;
    /**
    * Header hidden
    */
    'hideheader'?: boolean;
    /**
    * Opacity Slider hidden
    */
    'hideopacity'?: boolean;
    'onJeepCpickerClose'?: (event: CustomEvent<CloseData>) => void;
    'onJeepCpickerInstantColor'?: (event: CustomEvent<Color>) => void;
    'onJeepCpickerOpen'?: (event: CustomEvent<any>) => void;
    /**
    * The preselected opacity
    */
    'opacity'?: string;
  }
  interface JeepLinechart {
    'animation'?: boolean;
    'cborder'?: boolean;
    'cstyle'?: string;
    'ctitle'?: string;
    'data'?: string;
    'delay'?: string;
    'subtitle'?: string;
    'xtitle'?: string;
    'ytitle'?: string;
  }
  interface JeepSvgmorph {
    /**
    * The preselected calculation mode
    */
    'calcmode'?: string;
    /**
    * The preselected duration
    */
    'duration'?: string;
    /**
    * The preselected fill color
    */
    'fill'?: string;
    /**
    * The preselected key splines
    */
    'keysplines'?: string;
    /**
    * The preselected key times
    */
    'keytimes'?: string;
    /**
    * The preselected number of segments
    */
    'nsegment'?: string;
    /**
    * The preselected path index
    */
    'pathindex'?: string;
    /**
    * The preselected repeat count
    */
    'repeatcount'?: string;
  }

  interface IntrinsicElements {
    'jeep-colorpicker': JeepColorpicker;
    'jeep-cpicker': JeepCpicker;
    'jeep-linechart': JeepLinechart;
    'jeep-svgmorph': JeepSvgmorph;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'jeep-colorpicker': LocalJSX.JeepColorpicker & JSXBase.HTMLAttributes<HTMLJeepColorpickerElement>;
      'jeep-cpicker': LocalJSX.JeepCpicker & JSXBase.HTMLAttributes<HTMLJeepCpickerElement>;
      'jeep-linechart': LocalJSX.JeepLinechart & JSXBase.HTMLAttributes<HTMLJeepLinechartElement>;
      'jeep-svgmorph': LocalJSX.JeepSvgmorph & JSXBase.HTMLAttributes<HTMLJeepSvgmorphElement>;
    }
  }
}

