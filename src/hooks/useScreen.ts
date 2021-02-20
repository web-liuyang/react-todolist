type ReturnInfo = {
  width: number; // 属性返回以像素计的访问者屏幕宽度
  height: number; // 属性返回以像素计的访问者屏幕的高度
  availWidth: number; // 属性返回访问者屏幕的宽度，以像素计，减去诸如窗口工具条之类的界面特征。
  availHeight: number; // 属性返回访问者屏幕的高度，以像素计，减去诸如窗口工具条之类的界面特征
};

/**
 * @description 获取屏幕信息
 * @returns { ReturnInfo }
 */
const useScreen = (): ReturnInfo => {
  const { width, height, availHeight, availWidth } = screen;

  return {
    width,
    height,
    availHeight,
    availWidth,
  };
};

export default useScreen;