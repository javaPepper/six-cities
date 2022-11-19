export const enum RateValues {
  Twenty = 20,
  Fourty = 40,
  Sixty = 60,
  Eighty = 80,
  Hundred = 100
}

export const RATING_VALUES = {
  OneStar: {
    min: 1,
    max: 1.4
  },
  TwoStars: {
    min: 1.5,
    max: 2.4
  },
  ThreeStars: {
    min: 2.5,
    max: 3.4
  },
  FourStars: {
    min: 3.5,
    max: 4.4
  },
  FiveStars: {
    min: 4.5,
    max: 5
  }
};

export enum AuthStatuses {
  Auth = 'AUTH',
  No_Auth = 'NO_AUTH',
  Uknown = 'UKNOWN'
}

export enum TitleValues {
  Perfect = 'perfect',
  Good = 'good',
  Not_Bad = 'not bad',
  Badly = 'badly',
  Terribly = 'terribly'
}

export const enum InputValues {
  Five = 5,
  Four = 4,
  Three = 3,
  Two = 2,
  One = 1
}

export const INPUTVALUES = [5, 4, 3, 2, 1];

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const CITIES_LIST = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
