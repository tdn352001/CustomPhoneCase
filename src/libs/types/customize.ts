export type PhoneModel = {
  id: number
  name: string
  width: number
  height: number
  url: string
  cameraUrl: string
}

export type Material = {
  id: number
  modelId: number
  width: number
  height: number
  printUrl: string
  designUrl: string
  designPath?: string
  url: string
  cameraUrl?: string
  gapTop: number
  gapBottom: number
  gapLeft: number
  gapRight: number
}

export type FontAttributes = {
  url: string
  style: 'normal' | 'italic'
  weight: 'normal' | 'bold'
}

export type TypeFace = {
  name: string
  fonts: FontAttributes[]
}
