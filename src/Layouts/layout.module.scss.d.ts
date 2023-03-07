export type Styles = {
  'layout': string;
  'my-header': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
