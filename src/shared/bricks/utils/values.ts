export type BrickValue<Name = string> = {
  brick: Name;
  id?: unknown;
};

export const isBrickValue = (value: unknown): value is BrickValue => !!value
  && typeof value === 'object'
  && 'brick' in value
  && typeof value.brick === 'string';
