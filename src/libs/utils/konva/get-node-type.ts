import Konva from "konva";

export const KonvaNodeTypes = {
  Stage: "Stage",
  Text: "Text",
  Shape: "Shape",
  Rect: "Rect",
  Circle: "Circle",
  Ellipse: "Ellipse",
  Line: "Line",
  Image: "Image",
  Path: "Path",
  RegularPolygon: "RegularPolygon",
  Star: "Star",
  Ring: "Ring",
  Arc: "Arc",
  Label: "Label",
  Tag: "Tag",
  Transformer: "Transformer",
} as const;

export type KonvaNodeType = (typeof KonvaNodeTypes)[keyof typeof KonvaNodeTypes] | "Unknown";

export const getNodeType = (node: Konva.Node): KonvaNodeType => {
  const className = node.getClassName();
  return KonvaNodeTypes[className as keyof typeof KonvaNodeTypes] || "Unknown";
};

export const isKonvaText = (node: Konva.Node) => {
  return getNodeType(node) === KonvaNodeTypes.Text;
};

export const isKonvaRect = (node: Konva.Node) => {
  return getNodeType(node) === KonvaNodeTypes.Rect;
};

export const isKonvaStage = (node: Konva.Node) => {
  return getNodeType(node) === KonvaNodeTypes.Stage;
};

export const isKonvaTransformer = (node: Konva.Node) => {
  return getNodeType(node) === KonvaNodeTypes.Transformer;
};

export const isKonvaImage = (node: Konva.Node) => {
  return getNodeType(node) === KonvaNodeTypes.Image;
};
