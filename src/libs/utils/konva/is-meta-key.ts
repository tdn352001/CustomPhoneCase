import { KonvaEventObject } from "konva/lib/Node";

export const isMetaKey = (e: KonvaEventObject<Event>) => {
  const event = e.evt as any;
  return event && (event.shiftKey || event.ctrlKey || event.metaKey);
};
