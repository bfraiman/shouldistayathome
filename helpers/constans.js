import {
  REASONS_TO_YES,
  REASONS_TO_NO
} from './reasons';

export const IS_ALLOWED = false;

export const getRandom = function ranDay(list) {
  return list[Math.floor(Math.random() * list.length)];
};

export function dayHelper() {
  if(IS_ALLOWED){
    return REASONS_TO_NO
  }
  
  return REASONS_TO_YES;
}
