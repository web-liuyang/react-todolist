//颜色对象

/**
 * @description 随机颜色获取
 * @param {(number | string)} [transparency=1] - 透明度
 * @return { string } rgba颜色
 */
export function getRandomColor(transparency: number | string = 1): string {
  const { floor, random } = Math;

  const r = floor(random() * 255);
  const g = floor(random() * 255);
  const b = floor(random() * 255);

  const color = `rgba(${r},${g},${b},${transparency})`;

  return color;
}
