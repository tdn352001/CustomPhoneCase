import LogoFull from "./logo-full.svg";
import LogoShort from "./logo-short.svg";
import Close from "./close.svg";
import CopyRight from "./copyright.svg";
import Facebook from "./facebook.svg";
import Heart from "./heart.svg";
import Instagram from "./instagram.svg";
import Mail from "./mail.svg";
import Menu from "./menu.svg";
import Minus from "./minus.svg";
import Phone from "./phone.svg";
import PinMap from "./pin-map.svg";
import Plus from "./plus.svg";
import Search from "./search.svg";
import Twitter from "./twitter.svg";
import Hamburger from "./hamburger.svg";
import ChevronRight from "./chevron-right.svg";
import BookmarkStar from "./bookmark-star.svg";
import Layers from "./layers.svg";
import Text from "./text.svg";
import Attach from "./attach.svg";
import ImagePlus from "./image-plus.svg";
import UploadAlt from "./upload-alt.svg";
import StarFour from "./star-four.svg";
import ExploreNow from "./explore-now.svg";
import Drag from "./drag.svg";
import More from "./more.svg";
import Trash from "./trash.svg";
import ChevronDownCircle from "./chevron-down-circle.svg";
import ChevronUpCircle from "./chevron-up-circle.svg";
import Undo from "./undo.svg";
import Redo from "./redo.svg";
import Draft from "./draft.svg";
import TextColor from "./text-color.svg";
import TextBolder from "./text-bolder.svg";
import TextItalic from "./text-italic.svg";
import TextUnderline from "./text-underline.svg";
import AlignLeft from "./align-left.svg";
import AlignCenter from "./align-center.svg";
import AlignRight from "./align-right.svg";
import CirclePlus from "./plus-circle.svg";
import FilterAlt from "./filter-alt.svg";

export const SVGIcons = {
  LogoFull,
  LogoShort,
  Close,
  CopyRight,
  Facebook,
  Heart,
  Instagram,
  Mail,
  Menu,
  Minus,
  Phone,
  PinMap,
  Plus,
  Search,
  Twitter,
  Hamburger,
  ChevronRight,
  BookmarkStar,
  Layers,
  Text,
  Attach,
  ImagePlus,
  UploadAlt,
  StarFour,
  ExploreNow,
  Drag,
  More,
  Trash,
  ChevronDownCircle,
  ChevronUpCircle,
  Undo,
  Redo,
  Draft,
  TextColor,
  TextBolder,
  TextItalic,
  TextUnderline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  CirclePlus,
  FilterAlt,
} as const;

export type SVGIcon = keyof typeof SVGIcons;
