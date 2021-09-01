export enum TYPE {
  GREEN = 'GREEN',
  RED = 'RED',
  DEFAULT = ''
}

export enum STATUS {
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
  DEFAULT = ''
}

export interface Todo {
  id: string
  label: string
  type: TYPE
  status: STATUS
}
