import { EMOJIS } from "./constants.ts";

export function emojize(text: string) {
  return text.replace(/(:[a-zA-Z0-9\+\-_&.ô’Åéãíç()!#*]+:)/g, replacerHandler);
}

function replacerHandler(match: string): string {
    if(match in EMOJIS)
        return EMOJIS[match];
    return match;
}
