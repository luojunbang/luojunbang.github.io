export enum TYPE {
  DEFAULT = '',
  GREEN = 'GREEN',
  RED = 'RED',
}

export enum STATUS {
  DEFAULT = '',
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
}

export interface option {
  type: TYPE
  status: STATUS
}

export interface queryText {
  queryText: string
}
export interface Filter extends option, queryText {
  type: TYPE
  status: STATUS
}

export interface Todo extends option {
  id: string
  label: string
}
