import Konva from "konva";

declare global {
  interface Window {
    customize?: {
      startEditText: (text: Konva.Text) => void;
    };
  }
}

export {};
