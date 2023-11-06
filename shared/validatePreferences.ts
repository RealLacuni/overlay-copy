/* eslint-disable @typescript-eslint/no-explicit-any */
import { CircleFields, EllipseFields, Preferences, Profile, Shortcuts, SquareFields } from "./types";

function validatePreferences(obj: any): obj is Preferences {
  try {
    if (
      obj &&
      typeof obj === 'object' &&
      typeof obj.version === 'string' &&
      typeof obj.activeProfile === 'string' &&
      isShortcuts(obj.shortcuts) &&
      isProfiles(obj.profiles)
    ) {
      return true;
    }
  } catch {
    console.log("error validating preferences");
    return false;
  }
  return false;
}

function isShortcuts(obj: any): obj is Shortcuts {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.toggleOverlay === 'string' &&
    typeof obj.openMenu === 'string'
  );
}

function isProfiles(obj: any): boolean {
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (!isProfile(obj[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function isProfile(obj: any): obj is Profile {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.shape === 'string' &&
    isShapeFields(obj.shapeInputs)
  );
}

function isShapeFields(obj: any): obj is CircleFields | SquareFields | EllipseFields {
  if (obj && typeof obj === 'object') {
    switch (obj.shape) {
      case 'circle':
        return isCircleFields(obj);
      case 'square':
        return isSquareFields(obj);
      case 'ellipse':
        return isEllipseFields(obj);
      default:
        return false;
    }
  }
  return false;
}

function isCircleFields(obj: any): obj is CircleFields {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.color === 'string' &&
    typeof obj.thickness === 'number' &&
    typeof obj.offset === 'number' &&
    typeof obj.opacity === 'number' &&
    typeof obj.inverse === 'boolean'
  );
}

function isSquareFields(obj: any): obj is SquareFields {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.color === 'string' &&
    typeof obj.width === 'number' &&
    typeof obj.height === 'number' &&
    typeof obj.opacity === 'number'
  );
}

function isEllipseFields(obj: any): obj is EllipseFields {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.color === 'string' &&
    typeof obj.width === 'number' &&
    typeof obj.height === 'number' &&
    typeof obj.opacity === 'number'
  );
}

export { validatePreferences };